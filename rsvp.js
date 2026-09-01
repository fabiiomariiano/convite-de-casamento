const content = document.querySelector("#rsvp-content");
const params = new URLSearchParams(window.location.search);
const token = params.get("c")?.trim() || "";
const validToken = /^[A-Za-z0-9_-]{24,128}$/.test(token);

document.querySelector("#rsvp-back").href = token
  ? `links.html?c=${encodeURIComponent(token)}`
  : "links.html";

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderMessage(title, text, type = "") {
  content.innerHTML = `
    <div class="rsvp-card rsvp-message ${type}">
      <h2>${escapeHtml(title)}</h2>
      <p>${escapeHtml(text)}</p>
    </div>
  `;
}

function renderMissingCode() {
  content.innerHTML = `
    <div class="rsvp-card rsvp-message">
      <h2>Abra seu link individual</h2>
      <p>Use o link que enviamos pelo WhatsApp. Ele contém o código da sua família e mostra os nomes convidados.</p>
      <form class="rsvp-code-form" id="code-form">
        <label for="invite-code">Ou informe o código do convite</label>
        <div class="rsvp-code-row">
          <input id="invite-code" name="code" type="text" autocomplete="off" required placeholder="Código do convite">
          <button class="rsvp-button" type="submit">Continuar</button>
        </div>
      </form>
    </div>
  `;

  content.querySelector("#code-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const code = new FormData(event.currentTarget).get("code").trim();
    window.location.assign(`confirmar.html?c=${encodeURIComponent(code)}`);
  });
}

function isFamilyConfirmed(members) {
  return (
    members.length > 0 &&
    members.every((member) => typeof member.attending === "boolean")
  );
}

function showThankYouModal(onClose) {
  document.querySelector("#rsvp-thankyou-modal")?.remove();

  const modal = document.createElement("div");
  modal.id = "rsvp-thankyou-modal";
  modal.className = "gift-modal";
  modal.innerHTML = `
    <div class="gift-modal-backdrop" data-rsvp-modal-close></div>
    <div
      class="gift-modal-dialog"
      role="dialog"
      aria-modal="true"
      aria-labelledby="rsvp-modal-title"
    >
      <button class="gift-modal-close" type="button" data-rsvp-modal-close aria-label="Fechar">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true">
          <path d="M18 6L6 18M6 6l12 12"/>
        </svg>
      </button>
      <div class="gift-modal-content">
        <p class="gift-modal-kicker">Obrigado!</p>
        <h2 class="gift-modal-title" id="rsvp-modal-title">Presença confirmada</h2>
        <p class="rsvp-modal-text">
          Recebemos a confirmação da sua família. Mal podemos esperar para celebrar com vocês!
        </p>
        <button class="rsvp-button rsvp-submit" type="button" data-rsvp-modal-close>Continuar</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  document.body.classList.add("is-modal-open");

  const close = () => {
    modal.remove();
    document.body.classList.remove("is-modal-open");
    onClose?.();
  };

  modal.querySelectorAll("[data-rsvp-modal-close]").forEach((element) => {
    element.addEventListener("click", close);
  });
}

function memberOptions(member) {
  const attending = member.attending;
  return `
    <fieldset class="rsvp-member" data-member-id="${escapeHtml(member.id)}">
      <legend>${escapeHtml(member.name)}</legend>
      <div class="rsvp-choice-row">
        <label class="rsvp-choice">
          <input type="radio" name="member-${escapeHtml(member.id)}" value="yes" ${attending === true ? "checked" : ""} required>
          <span>Sim, eu vou</span>
        </label>
        <label class="rsvp-choice">
          <input type="radio" name="member-${escapeHtml(member.id)}" value="no" ${attending === false ? "checked" : ""} required>
          <span>Não poderei ir</span>
        </label>
      </div>
    </fieldset>
  `;
}

function renderConfirmedView(family, members, db) {
  content.innerHTML = `
    <div class="rsvp-card rsvp-confirmed" id="rsvp-confirmed">
      <div class="rsvp-family-heading">
        <p>Convite para</p>
        <h2>${escapeHtml(family.familyName)}</h2>
      </div>
      <div class="rsvp-confirmed-message">
        <p class="rsvp-confirmed-icon" aria-hidden="true">✓</p>
        <p class="rsvp-confirmed-title">Presença confirmada</p>
        <p class="rsvp-confirmed-text">
          Sua confirmação já foi registrada. Caso precise alterar, clique em editar abaixo.
        </p>
      </div>
      <button class="rsvp-button rsvp-submit" type="button" id="rsvp-edit-btn">Editar</button>
      <p class="rsvp-help">Você pode alterar suas respostas a qualquer momento.</p>
    </div>
  `;

  content.querySelector("#rsvp-edit-btn").addEventListener("click", () => {
    renderFamily(family, members, db);
  });
}

async function saveResponses(form, members, db) {
  const batch = db.batch();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp();

  form.querySelectorAll(".rsvp-member").forEach((field) => {
    const answer = field.querySelector("input:checked").value === "yes";
    const member = members.find((item) => item.id === field.dataset.memberId);
    if (member) member.attending = answer;

    const memberRef = db
      .collection("families")
      .doc(token)
      .collection("members")
      .doc(field.dataset.memberId);
    batch.update(memberRef, {
      attending: answer,
      updatedAt: timestamp,
    });
  });

  await batch.commit();
}

function renderFamily(family, members, db) {
  content.innerHTML = `
    <form class="rsvp-card" id="rsvp-form">
      <div class="rsvp-family-heading">
        <p>Convite para</p>
        <h2>${escapeHtml(family.familyName)}</h2>
        <span>Confirme cada pessoa abaixo</span>
      </div>
      <div class="rsvp-members">
        ${members.map(memberOptions).join("")}
      </div>
      <p class="rsvp-feedback" id="rsvp-feedback" role="status"></p>
      <button class="rsvp-button rsvp-submit" type="submit">Salvar confirmações</button>
      <p class="rsvp-help">Você pode abrir este mesmo link novamente para alterar as respostas.</p>
    </form>
  `;

  const form = content.querySelector("#rsvp-form");
  const feedback = content.querySelector("#rsvp-feedback");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const submit = form.querySelector("[type=submit]");
    submit.disabled = true;
    submit.textContent = "Salvando…";
    feedback.textContent = "";
    feedback.className = "rsvp-feedback";

    try {
      await saveResponses(form, members, db);
      showThankYouModal(() => {
        renderConfirmedView(family, members, db);
      });
    } catch (error) {
      console.error(error);
      feedback.textContent =
        "Não foi possível salvar agora. Verifique sua internet e tente novamente.";
      feedback.classList.add("is-error");
      submit.disabled = false;
      submit.textContent = "Salvar confirmações";
    }
  });
}

async function loadInvitation() {
  if (!window.isFirebaseConfigured) {
    renderMessage(
      "Firebase ainda não configurado",
      "O casal precisa concluir as instruções do arquivo FIREBASE_SETUP.md.",
      "is-warning",
    );
    return;
  }

  if (!token || !validToken) {
    renderMissingCode();
    return;
  }

  try {
    firebase.initializeApp(window.firebaseConfig);
    const db = firebase.firestore();
    const familySnapshot = await db.collection("families").doc(token).get();

    if (!familySnapshot.exists) {
      renderMessage(
        "Convite não encontrado",
        "Confira se o link recebido está completo ou fale com os noivos.",
        "is-error",
      );
      return;
    }

    const family = familySnapshot.data();
    const memberIds = Array.isArray(family.memberIds) ? family.memberIds : [];
    const snapshots = await Promise.all(
      memberIds.map((id) =>
        db.collection("families").doc(token).collection("members").doc(String(id)).get(),
      ),
    );
    const members = snapshots
      .filter((snapshot) => snapshot.exists)
      .map((snapshot) => ({ id: snapshot.id, ...snapshot.data() }));

    if (!members.length) {
      renderMessage(
        "Lista ainda não cadastrada",
        "Fale com os noivos para conferirmos os nomes deste convite.",
        "is-warning",
      );
      return;
    }

    if (isFamilyConfirmed(members)) {
      renderConfirmedView(family, members, db);
    } else {
      renderFamily(family, members, db);
    }
  } catch (error) {
    console.error(error);
    renderMessage(
      "Não foi possível abrir o convite",
      "Verifique sua internet e tente novamente em instantes.",
      "is-error",
    );
  }
}

loadInvitation();
