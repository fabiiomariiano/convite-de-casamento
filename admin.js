const content = document.querySelector("#admin-content");
let auth;
let db;
let families = [];
let editingToken = null;

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function randomId(byteLength = 18) {
  const bytes = crypto.getRandomValues(new Uint8Array(byteLength));
  const binary = Array.from(bytes, (byte) => String.fromCharCode(byte)).join(
    "",
  );
  return btoa(binary)
    .replaceAll("+", "-")
    .replaceAll("/", "_")
    .replaceAll("=", "");
}

function invitationUrl(token) {
  const url = new URL("index.html", window.location.href);
  url.search = `?c=${encodeURIComponent(token)}`;
  return url.href;
}

function familyRef(token) {
  return db.collection("families").doc(token);
}

function memberRef(token, memberId) {
  return familyRef(token).collection("members").doc(String(memberId));
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

async function loadFamilies() {
  const familySnapshots = await db.collection("families").get();
  families = await Promise.all(
    familySnapshots.docs.map(async (familySnapshot) => {
      const family = familySnapshot.data();
      const memberIds = Array.isArray(family.memberIds) ? family.memberIds : [];
      const memberSnapshots = await Promise.all(
        memberIds.map((memberId) =>
          memberRef(familySnapshot.id, memberId).get(),
        ),
      );
      return {
        token: familySnapshot.id,
        ...family,
        members: memberSnapshots
          .filter((snapshot) => snapshot.exists)
          .map((snapshot) => ({ id: snapshot.id, ...snapshot.data() })),
      };
    }),
  );
  families.sort((a, b) =>
    String(a.familyName).localeCompare(String(b.familyName), "pt-BR"),
  );
}

function statusLabel(attending) {
  if (attending === true) return '<span class="admin-status is-yes">Vai</span>';
  if (attending === false)
    return '<span class="admin-status is-no">Não vai</span>';
  return '<span class="admin-status is-pending">Pendente</span>';
}

function familyCard(family) {
  const members = family.members
    .map(
      (member) => `
        <li>
          <span>${escapeHtml(member.name)}</span>
          ${statusLabel(member.attending)}
        </li>
      `,
    )
    .join("");
  const url = invitationUrl(family.token);
  const whatsappText = encodeURIComponent(
    `Olá, ${family.headName}! Será uma alegria compartilhar esse dia tão especial com você! 
Confirme sua presença e, caso não possa comparecer, fique à vontade para nos avisar. Sua resposta é muito importante para nós!
Todos os detalhes no seu convite digital no link: ${url}`,
  );

  return `
    <article class="admin-family-card" data-family-token="${escapeHtml(family.token)}">
      <div class="admin-family-top">
        <div>
          <h3>${escapeHtml(family.familyName)}</h3>
          <p>Responsável: ${escapeHtml(family.headName)}</p>
        </div>
        <button class="admin-text-button" type="button" data-edit-family>Editar</button>
      </div>
      <ul class="admin-member-status">${members}</ul>
      <div class="admin-card-actions">
        <button class="rsvp-button is-secondary" type="button" data-copy-link="${escapeHtml(url)}">Copiar link</button>
        <a class="rsvp-button" href="https://wa.me/?text=${whatsappText}" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        <button class="admin-delete" type="button" data-delete-family>Excluir</button>
      </div>
    </article>
  `;
}

function getTotals() {
  return families
    .flatMap((family) => family.members)
    .reduce(
      (totals, member) => {
        if (member.attending === true) totals.yes += 1;
        else if (member.attending === false) totals.no += 1;
        else totals.pending += 1;
        return totals;
      },
      { yes: 0, no: 0, pending: 0 },
    );
}

function renderDashboard() {
  editingToken = null;
  const totals = getTotals();
  content.innerHTML = `
    <div class="admin-toolbar">
      <span>Olá, ${escapeHtml(auth.currentUser.email)}</span>
      <div class="admin-toolbar-actions">
        <a class="admin-text-button" href="admin-mensagens.html">Mensagens</a>
        <button class="admin-text-button" type="button" id="sign-out">Sair</button>
      </div>
    </div>
    <section class="admin-totals" aria-label="Resumo das confirmações">
      <div><strong>${totals.yes}</strong><span>Vão</span></div>
      <div><strong>${totals.no}</strong><span>Não vão</span></div>
      <div><strong>${totals.pending}</strong><span>Pendentes</span></div>
      <div><strong>${families.length}</strong><span>Famílias</span></div>
    </section>
    <div class="admin-list-heading">
      <h2>Famílias convidadas</h2>
      <button class="rsvp-button" type="button" id="new-family">Nova família</button>
    </div>
    <section class="admin-family-list">
      ${
        families.length
          ? families.map(familyCard).join("")
          : '<div class="rsvp-card rsvp-message"><h2>Nenhuma família cadastrada</h2><p>Use “Nova família” para criar o primeiro convite.</p></div>'
      }
    </section>
    <p class="rsvp-feedback" id="admin-feedback" role="status"></p>
  `;

  content
    .querySelector("#sign-out")
    .addEventListener("click", () => auth.signOut());
  content
    .querySelector("#new-family")
    .addEventListener("click", () => renderFamilyForm());
  content.querySelectorAll("[data-edit-family]").forEach((button) => {
    button.addEventListener("click", () => {
      const token = button.closest("[data-family-token]").dataset.familyToken;
      renderFamilyForm(families.find((family) => family.token === token));
    });
  });
  content.querySelectorAll("[data-delete-family]").forEach((button) => {
    button.addEventListener("click", () => {
      const token = button.closest("[data-family-token]").dataset.familyToken;
      deleteFamily(families.find((family) => family.token === token));
    });
  });
  content.querySelectorAll("[data-copy-link]").forEach((button) => {
    button.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(button.dataset.copyLink);
        button.textContent = "Link copiado";
        setTimeout(() => (button.textContent = "Copiar link"), 1800);
      } catch {
        window.prompt("Copie o link:", button.dataset.copyLink);
      }
    });
  });
}

function memberInput(member = {}) {
  return `
    <div class="admin-member-input" data-member-id="${escapeHtml(member.id || "")}">
      <input type="text" name="memberName" value="${escapeHtml(member.name || "")}" placeholder="Nome completo" required>
      <button type="button" data-remove-member aria-label="Remover pessoa">×</button>
    </div>
  `;
}

function bindRemoveMember(container) {
  container.querySelectorAll("[data-remove-member]").forEach((button) => {
    button.onclick = () => {
      if (container.children.length === 1) {
        container.querySelector("input").focus();
        return;
      }
      button.parentElement.remove();
    };
  });
}

function renderFamilyForm(family = null) {
  editingToken = family?.token || null;
  const members = family?.members?.length ? family.members : [{}];
  content.innerHTML = `
    <form class="rsvp-card admin-family-form" id="family-form">
      <div class="admin-form-heading">
        <div>
          <p class="gifts-kicker">${family ? "Editar convite" : "Novo convite"}</p>
          <h2>${family ? escapeHtml(family.familyName) : "Cadastrar família"}</h2>
        </div>
        <button class="admin-text-button" type="button" id="cancel-family">Cancelar</button>
      </div>
      <label class="admin-field">
        <span>Nome da família</span>
        <input type="text" name="familyName" value="${escapeHtml(family?.familyName || "")}" placeholder="Ex.: Família Silva" required>
      </label>
      <label class="admin-field">
        <span>Chefe / responsável pelo convite</span>
        <input type="text" name="headName" value="${escapeHtml(family?.headName || "")}" placeholder="Ex.: Maria Silva" required>
      </label>
      <fieldset class="admin-members-fieldset">
        <legend>Pessoas convidadas</legend>
        <div id="member-inputs">${members.map(memberInput).join("")}</div>
        <button class="admin-text-button" type="button" id="add-member">+ Adicionar pessoa</button>
      </fieldset>
      <p class="rsvp-feedback" id="form-feedback" role="status"></p>
      <button class="rsvp-button rsvp-submit" type="submit">Salvar família</button>
    </form>
  `;

  const form = content.querySelector("#family-form");
  const inputs = content.querySelector("#member-inputs");
  bindRemoveMember(inputs);
  content
    .querySelector("#cancel-family")
    .addEventListener("click", renderDashboard);
  content.querySelector("#add-member").addEventListener("click", () => {
    inputs.insertAdjacentHTML("beforeend", memberInput());
    bindRemoveMember(inputs);
    inputs.lastElementChild.querySelector("input").focus();
  });
  form.addEventListener("submit", saveFamily);
}

async function saveFamily(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const submit = form.querySelector("[type=submit]");
  const feedback = form.querySelector("#form-feedback");
  const familyName = form.elements.familyName.value.trim();
  const headName = form.elements.headName.value.trim();
  const oldFamily = families.find((family) => family.token === editingToken);
  const oldMembers = new Map(
    (oldFamily?.members || []).map((member) => [member.id, member]),
  );
  const memberRows = [...form.querySelectorAll(".admin-member-input")].map(
    (row) => ({
      id: row.dataset.memberId || randomId(12),
      name: row.querySelector("input").value.trim(),
    }),
  );
  const normalizedNames = memberRows.map((member) =>
    member.name.toLocaleLowerCase("pt-BR"),
  );

  if (new Set(normalizedNames).size !== normalizedNames.length) {
    feedback.textContent = "Há nomes repetidos nesta família.";
    feedback.className = "rsvp-feedback is-error";
    return;
  }

  submit.disabled = true;
  submit.textContent = "Salvando…";
  feedback.textContent = "";
  const token = editingToken || randomId(24);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp();

  try {
    const batch = db.batch();
    const currentIds = new Set(memberRows.map((member) => member.id));
    (oldFamily?.members || []).forEach((member) => {
      if (!currentIds.has(member.id)) {
        batch.delete(memberRef(token, member.id));
      }
    });
    memberRows.forEach((member) => {
      const previous = oldMembers.get(member.id);
      batch.set(memberRef(token, member.id), {
        name: member.name,
        attending: previous?.attending ?? null,
        updatedAt: timestamp,
      });
    });
    batch.set(familyRef(token), {
      familyName,
      headName,
      memberIds: memberRows.map((member) => member.id),
      updatedAt: timestamp,
    });
    await batch.commit();
    await refreshDashboard();
  } catch (error) {
    console.error(error);
    feedback.textContent = "Não foi possível salvar. Tente novamente.";
    feedback.className = "rsvp-feedback is-error";
    submit.disabled = false;
    submit.textContent = "Salvar família";
  }
}

async function deleteFamily(family) {
  if (
    !family ||
    !window.confirm(`Excluir o convite de “${family.familyName}”?`)
  ) {
    return;
  }
  try {
    const batch = db.batch();
    family.members.forEach((member) => {
      batch.delete(memberRef(family.token, member.id));
    });
    batch.delete(familyRef(family.token));
    await batch.commit();
    await refreshDashboard();
  } catch (error) {
    console.error(error);
    const feedback = content.querySelector("#admin-feedback");
    if (feedback) {
      feedback.textContent = "Não foi possível excluir esta família.";
      feedback.className = "rsvp-feedback is-error";
    }
  }
}

async function refreshDashboard() {
  content.innerHTML = `
    <div class="rsvp-card rsvp-loading">
      <span class="rsvp-spinner" aria-hidden="true"></span>
      <p>Atualizando confirmações…</p>
    </div>
  `;
  await loadFamilies();
  renderDashboard();
}

async function handleAuthenticatedUser(user) {
  try {
    const adminSnapshot = await db.collection("admins").doc(user.uid).get();
    if (!adminSnapshot.exists) {
      await auth.signOut();
      renderLogin("Esta conta não está autorizada como administradora.");
      return;
    }
    await refreshDashboard();
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
