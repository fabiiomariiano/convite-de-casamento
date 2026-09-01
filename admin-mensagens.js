const content = document.querySelector("#admin-messages-content");
let auth;
let db;

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatPrice(value) {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function formatDate(value) {
  if (!value) return "Data não informada";

  const date = typeof value.toDate === "function" ? value.toDate() : new Date(value);
  if (Number.isNaN(date.getTime())) return "Data não informada";

  return date.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function formatSender(message) {
  if (message.familyName) {
    return escapeHtml(message.familyName);
  }
  if (message.familyToken && message.familyToken !== "anonymous") {
    return "Família convidada";
  }
  return "Anônimo";
}

function renderSetupWarning() {
  content.innerHTML = `
    <div class="rsvp-card rsvp-message is-warning">
      <h2>Firebase ainda não configurado</h2>
      <p>Siga o passo a passo em <strong>FIREBASE_SETUP.md</strong> e preencha <strong>firebase-config.js</strong> com a configuração do aplicativo Web.</p>
    </div>
  `;
}

function renderLogin(message = "") {
  content.innerHTML = `
    <form class="rsvp-card admin-login" id="login-form">
      <div class="rsvp-family-heading">
        <p>Acesso restrito</p>
        <h2>Entrar no painel</h2>
        <span>Use a conta criada no Firebase Authentication</span>
      </div>
      <label class="admin-field">
        <span>E-mail</span>
        <input type="email" name="email" autocomplete="username" required>
      </label>
      <label class="admin-field">
        <span>Senha</span>
        <input type="password" name="password" autocomplete="current-password" required>
      </label>
      <p class="rsvp-feedback is-error">${escapeHtml(message)}</p>
      <button class="rsvp-button rsvp-submit" type="submit">Entrar</button>
    </form>
  `;

  content
    .querySelector("#login-form")
    .addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      const button = form.querySelector("button");
      const data = new FormData(form);
      button.disabled = true;
      button.textContent = "Entrando…";
      try {
        await auth.signInWithEmailAndPassword(
          data.get("email").trim(),
          data.get("password"),
        );
      } catch (error) {
        console.error(error);
        renderLogin("E-mail ou senha inválidos.");
      }
    });
}

function renderToolbar() {
  return `
    <div class="admin-toolbar">
      <span>Olá, ${escapeHtml(auth.currentUser.email)}</span>
      <div class="admin-toolbar-actions">
        <a class="admin-text-button" href="admin.html">Confirmações</a>
        <button class="admin-text-button" type="button" id="refresh-messages">Atualizar</button>
        <button class="admin-text-button" type="button" id="sign-out">Sair</button>
      </div>
    </div>
  `;
}

function messageCard(message) {
  return `
    <article class="admin-message-card">
      <div class="admin-message-top">
        <div>
          <h3>${escapeHtml(message.giftTitle)}</h3>
          <p class="admin-message-meta">
            ${escapeHtml(formatPrice(message.giftPrice))}
            · ${formatSender(message)}
            · ${escapeHtml(formatDate(message.createdAt))}
          </p>
        </div>
      </div>
      <blockquote class="admin-message-body">${escapeHtml(message.message)}</blockquote>
    </article>
  `;
}

function renderMessages(messages) {
  content.innerHTML = `
    ${renderToolbar()}
    <div class="admin-list-heading">
      <h2>Mensagens recebidas</h2>
      <span class="admin-message-count">${messages.length}</span>
    </div>
    <section class="admin-message-list" aria-label="Mensagens de presentes">
      ${
        messages.length
          ? messages.map(messageCard).join("")
          : '<div class="rsvp-card rsvp-message"><h2>Nenhuma mensagem ainda</h2><p>Quando os convidados enviarem mensagens após um presente, elas aparecerão aqui.</p></div>'
      }
    </section>
    <p class="rsvp-feedback" id="messages-feedback" role="status"></p>
  `;

  content.querySelector("#sign-out").addEventListener("click", () => auth.signOut());
  content
    .querySelector("#refresh-messages")
    .addEventListener("click", () => refreshMessages());
}

async function loadMessages() {
  const snapshot = await db
    .collection("giftMessages")
    .orderBy("createdAt", "desc")
    .get();

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

async function refreshMessages() {
  content.innerHTML = `
    <div class="rsvp-card rsvp-loading">
      <span class="rsvp-spinner" aria-hidden="true"></span>
      <p>Atualizando mensagens…</p>
    </div>
  `;

  try {
    const messages = await loadMessages();
    renderMessages(messages);
  } catch (error) {
    console.error(error);
    content.innerHTML = `
      ${renderToolbar()}
      <div class="rsvp-card rsvp-message is-error">
        <h2>Não foi possível carregar</h2>
        <p>Tente atualizar a página. Se o problema continuar, verifique as regras do Firestore.</p>
      </div>
    `;
    content.querySelector("#sign-out")?.addEventListener("click", () => auth.signOut());
    content
      .querySelector("#refresh-messages")
      ?.addEventListener("click", () => refreshMessages());
  }
}

async function handleAuthenticatedUser(user) {
  try {
    const adminSnapshot = await db.collection("admins").doc(user.uid).get();
    if (!adminSnapshot.exists) {
      await auth.signOut();
      renderLogin("Esta conta não está autorizada como administradora.");
      return;
    }
    await refreshMessages();
  } catch (error) {
    console.error(error);
    renderLogin("Não foi possível validar esta conta.");
  }
}

function init() {
  if (!window.isFirebaseConfigured) {
    renderSetupWarning();
    return;
  }

  firebase.initializeApp(window.firebaseConfig);
  auth = firebase.auth();
  db = firebase.firestore();
  auth.onAuthStateChanged((user) => {
    if (user) handleAuthenticatedUser(user);
    else renderLogin();
  });
}

init();
