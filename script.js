/* ============================================================
   CONFIGURACAO DO CASAMENTO
   Edite este objeto para alterar textos, imagens e links.
   ============================================================ */
const weddingConfig = {
  bride: "Thalita",
  groom: "Fábio",
  initials: "T&F",

  date: {
    day: "03",
    month: "OUTUBRO",
    monthShort: "OUT",
    year: "2026",
    weekday: "SÁBADO",
    time: "15H30",
    formatted: "03 | 10 | 2026",
    saveTheDate: "03 . OUTUBRO . 2026",
  },

  venue: {
    name: "Azura Recepções",
    address: "",
    mapsUrl: "https://maps.app.goo.gl/Zrmssn9aWSjgRa6x9",
  },

  /* Troque os caminhos abaixo pelas suas imagens locais em assets/ */
  backgrounds: {
    cover:
      // "https://www.cerimonialraquelabdu.com.br/wp-content/uploads/2017/08/casamento-na-praia-decoracao-cerimonia-julia-enzo-foto-V-Rebel-Cinema-One.jpg",
      "assets/images/noivos-cenarios.png",
    saveDate:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
    invite:
      "https://images.unsplash.com/photo-1522673607210-9642b074aceb?w=800&q=80",
    details:
      "https://images.unsplash.com/photo-1523438097204-996f271fb1e2?w=800&q=80",
    links: "assets/images/fundo-azura.jpeg",
  },

  monogram: "assets/images/monograma.png",
  linksMonogram: "assets/images/thalitawedding-negative.png",
  seal: "assets/icons/selador.png",
  saveTheDateVideo: "assets/images/save-the-date.mp4",
  floralInvite: "assets/images/flores-01.jpg",

  music: {
    enabled: true,
    src: "assets/musica-pra-sonhar.mp3",
  },

  parentsBlessing: "Finalmente chegou a hora do sim!",
  inviteMessage:
    "Com a benção de Deus e seus pais, Thalita Ferrão e Fábio Mariano te convidam a compartilhar esse momento tão especial!",
  links: [
    {
      id: "location",
      icon: "assets/icons/location.svg",
      label: "Saiba como chegar",
      url: "https://maps.app.goo.gl/Zrmssn9aWSjgRa6x9",
    },
    {
      id: "gift",
      icon: "assets/icons/gift.svg",
      label: "Para nos presentear",
      url: "presentes.html",
    },
    {
      id: "message",
      icon: "assets/icons/message.svg",
      label: "Deixe sua mensagem",
      url: "mensagens.html",
    },
    {
      id: "rsvp",
      icon: "assets/icons/rsvp.svg",
      label: "Confirmar Presenca",
      url: "confirmar.html",
    },
    {
      id: "dress",
      icon: "assets/icons/dress.svg",
      label: "Dress Code",
      url: "dress-code.html",
    },
    {
      id: "manual",
      icon: "assets/icons/rings.svg",
      label: "Manual dos convidados",
      url: "manual.html",
    },
  ],

  /* ------------------------------------------------------------
     LISTA DE PRESENTES
     Edite os itens abaixo para alterar a página de presentes.
     - image: foto do presente (arquivo local ou URL)
     - qrCode: imagem do QR Code PIX deste presente
     - copyPasteCode: código PIX copia e cola deste presente
     - paymentLink: link do Mercado Pago para pagamento no cartão
     ------------------------------------------------------------ */
  gifts: {
    pageTitle: "Lista de Presentes",
    pageSubtitle: "Escolha com o coração",
    pix: {
      sectionTitle: "PIX",
      sectionHint: "Sem taxa — nossa opção preferida",
      modalTitle: "Código PIX",
      qrCode: "assets/images/qr-code-test.svg",
      recipientName: "Fabio Mariano Costa Silva Gomes Pereira",
      bank: "Nubank",
      notice:
        "Atenção: na hora de pagar, confira o nome do destinatário antes de confirmar o PIX. Impossível dizer que não viu esse nome desse tamanho.",
      copyButtonLabel: "Copiar código PIX",
      copySuccess: "Código copiado!",
      copyError: "Não foi possível copiar. Tente novamente.",
    },
    mercadoPago: {
      sectionTitle: "Cartão de crédito",
      sectionHint: "Pagamento seguro via Mercado Pago (com taxa de 3,99%)",
      buttonLabel: "Pagar no cartão",
    },
    items: [
      {
        title: "Café da manhã na cama",
        price: 80,
        qrCode: "assets/images/qr-cafe-da-manha.png",
        paymentLink: "https://mpago.la/1HeSPZt",
        copyPasteCode:
          "00020126580014BR.GOV.BCB.PIX0136f7a02979-519b-4db7-a73e-ffbeae8ee56e520400005303986540580.005802BR5925Fabio Mariano Costa Silva6009SAO PAULO61080540900062230519Presente01casamento6304C117",
        image:
          "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
      },
      {
        title: "Jantar romântico",
        price: 180,
        qrCode: "assets/images/qr-jantar-romantico.png",
        paymentLink: "https://mpago.la/1ZLaDaK",
        copyPasteCode:
          "00020126580014BR.GOV.BCB.PIX0136f7a02979-519b-4db7-a73e-ffbeae8ee56e5204000053039865406180.005802BR5925Fabio Mariano Costa Silva6009SAO PAULO62140510Nx6RSBPiVY6304D2E3",
        image:
          "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
      },
      {
        title: "Passeio a dois",
        price: 250,
        qrCode: "assets/images/qr-passeio-a-dois.png",
        paymentLink: "https://mpago.la/15y2UTZ",
        copyPasteCode:
          "00020126580014BR.GOV.BCB.PIX0136f7a02979-519b-4db7-a73e-ffbeae8ee56e5204000053039865406250.005802BR5925Fabio Mariano Costa Silva6009SAO PAULO62140510YwqGB23eu96304DCF5",
        image:
          "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
      },
      {
        title: "Experiência gastronômica",
        price: 300,
        qrCode: "assets/images/qr-experiencia-gastronomica.png",
        paymentLink: "https://mpago.la/1dF24MX",
        copyPasteCode:
          "00020126580014BR.GOV.BCB.PIX0136f7a02979-519b-4db7-a73e-ffbeae8ee56e5204000053039865406300.005802BR5925Fabio Mariano Costa Silva6009SAO PAULO62140510RU2hLNTYAL63047B59",
        image:
          "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80",
      },
      {
        title: "Noite de hotel",
        price: 400,
        qrCode: "assets/images/qr-noite-de-hotel.png",
        paymentLink: "https://mpago.la/2oXGzJb",
        copyPasteCode:
          "00020126580014BR.GOV.BCB.PIX0136f7a02979-519b-4db7-a73e-ffbeae8ee56e5204000053039865406400.005802BR5925Fabio Mariano Costa Silva6009SAO PAULO62140510H7lMz7ebl16304E184",
        image:
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      },
      {
        title: "Contribuição para a lua de mel",
        price: 500,
        qrCode: "assets/images/qr-lua-de-mel.png",
        paymentLink: "https://mpago.la/11z9m4Y",
        copyPasteCode:
          "00020126580014BR.GOV.BCB.PIX0136f7a02979-519b-4db7-a73e-ffbeae8ee56e5204000053039865406500.005802BR5925Fabio Mariano Costa Silva6009SAO PAULO62140510sTjBchJGrC6304562A",
        image:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
      },
      {
        title: "Um presente do seu jeito",
        price: 80,
        priceLabel: "O valor que seu coração quiser",
        qrCode: "assets/images/qr-presente-livre.png",
        copyPasteCode:
          "00020126580014BR.GOV.BCB.PIX0136f7a02979-519b-4db7-a73e-ffbeae8ee56e5204000053039865802BR5925Fabio Mariano Costa Silva6009SAO PAULO62140510GfBXd8ZsWE6304CDC9",
        image:
          "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&q=80",
      },
    ],
  },

  messages: {
    pageTitle: "Mensagens",
    pageSubtitle: "Palavras que ficam",
    intro:
      "Deixe-nos uma mensagem com carinho. Vamos guardar cada palavra para ler e reler, lembrando de todo o afeto que nos acompanhou nesse dia tão especial. Pode enviar quantas mensagens quiser!",
    placeholder: "Escreva aqui sua mensagem para nós...",
    submitLabel: "Enviar mensagem",
    success: "Mensagem enviada com carinho. Obrigado por fazer parte desse momento!",
    error: "Não foi possível enviar agora. Tente novamente.",
    empty: "Escreva uma mensagem antes de enviar.",
    unavailable:
      "O envio de mensagens ainda não está disponível. Tente mais tarde.",
    giftTitle: "Mensagem carinhosa",
    giftPrice: 80,
  },

  /* ------------------------------------------------------------
     DRESS CODE
     Edite textos, cores e os looks (os desenhos ficam em
     assets/images/dress-code/ — você pode trocar por fotos).
     ------------------------------------------------------------ */
  dressCode: {
    pageTitle: "Dress Code",
    pageSubtitle: "Conforto com um toque floral",
    intro:
      "O casamento acontece no fim da tarde, à beira da praia. Queremos vocês bonitos, à vontade e prontos para celebrar, sem abrir mão do conforto.",
    notes: [
      {
        title: "Conforto em primeiro lugar",
        text: "Priorize tecidos leves, que respiram, e sapatos que aguentem gramado, areia e uma boa dança. Beleza sem sofrimento, por favor.",
      },
      {
        title: "Tema floral",
        text: "O cenário é natural e florido. Estampas suaves, tons terrosos e um toque de flor combinam com o momento, sem competir com o jardim, só conversando com ele.",
      },
      {
        title: "O branco é da noiva",
        text: "Branco, off-white e tons bem clarinhos ficam reservados à Thalita. Deixe esse protagonismo com ela: tem cor no mundo inteiro para brilhar.",
      },
    ],
    colors: {
      title: "Cores para o pôr do sol na praia",
      text: "Pense no sol baixando sobre a areia: tons quentes, suaves e elegantes. Evite o branco e o neon. O fim de tarde pede paleta viva, mas serena.",
      swatches: [
        { name: "Areia", hex: "#d4c4a8" },
        { name: "Terracota", hex: "#c06a4a" },
        { name: "Verde oliva", hex: "#6b7f5a" },
        { name: "Azul entardecer", hex: "#6a7f96" },
        { name: "Rose queimado", hex: "#c4898a" },
        { name: "Mostarda suave", hex: "#c4a35a" },
        { name: "Branco da noiva", hex: "#ffffff", avoid: true },
      ],
    },
    bridesmaidColors: {
      title: "Cores das madrinhas",
      text: "Fúcsia, laranja, coral e amarelo fazem parte do look das madrinhas. Pedimos que evitem essas cores para não confundir com o time da noiva.",
      swatches: [
        { name: "Fúcsia", hex: "#E91E8C", avoid: true },
        { name: "Laranja", hex: "#FF8C42", avoid: true },
        { name: "Coral", hex: "#FF6F61", avoid: true },
        { name: "Amarelo", hex: "#F4C430", avoid: true },
      ],
    },
    poolNote: {
      title: "A piscina não estará liberada",
      text: "Traje de banho, canga e clima de resort ficam para outro capítulo. Aqui a festa é outra: cerimônia, brinde e pista, de preferência com os pés no chão, não na água.",
    },
    looksTitle: "Inspirações",
    looks: [
      {
        title: "Vestido fluido e floral",
        caption: "Tecido leve, comprimento que dança e estampa suave.",
        image: "assets/images/dress-code/fluido-e-floral.png",
      },
      {
        title: "Elegância e leveza",
        caption:
          "Tecidos frescos de cores que conversam com o cenário praiano.",
        image: "assets/images/dress-code/elegancia-e-leveza.png",
      },
      {
        title: "Linho à vontade",
        caption: "Camisa de linho, calça clara e sapato confortável.",
        image: "assets/images/dress-code/linho-a-vontade.png",
      },
      {
        title: "Blazer sem gravata",
        caption: "Elegância leve para o fim de tarde na praia.",
        image: "assets/images/dress-code/blazer-sem-gravata.png",
      },
    ],
  },

  /* ------------------------------------------------------------
     MANUAL DOS CONVIDADOS
     companionsAllowed: true ou false — o texto se ajusta sozinho.
     Horário e local usam a data e o venue do início deste arquivo.
     ------------------------------------------------------------ */
  guestManual: {
    pageTitle: "Manual dos Convidados",
    pageSubtitle: "Para celebrarmos juntos",
    arrival: {
      title: "Horário e localização",
      suggestedTime: "15H00",
      note: "O melhor horário para chegar é por volta das 15h, com cerca de 30 minutos de antecedência. Assim você se acomoda com calma e não perde a entrada dos noivos.",
    },
    celebration: {
      title: "A festa depois do sim",
      text: "Depois da cerimônia, a festa continua no mesmo lugar. Fiquem com a gente para brindar, comer, dançar e celebrar o início dessa história; o dia só fica completo com vocês até o fim.",
    },
    attention: {
      title: "Pontos de atenção",
      items: [
        "Chegue no horário: a cerimônia começa pontualmente.",
        "Deixe o celular no silencioso durante o “sim”.",
        "Evite atravessar o corredor na entrada dos noivos e nas bênçãos.",
        "Na cerimônia, converse baixo. O altar agradece.",
        "Crianças sempre acompanhadas por um adulto.",
      ],
    },
    photos: {
      title: "Registros do dia",
      text: "Nossos fotógrafos vão cuidar de cada detalhe. Cuidado para não entrar na frente deles no corredor, no altar e nas fotos oficiais. Fora isso, sintam-se livres para registrar o momento. O dia também é de vocês.",
    },
    invitation: {
      title: "Convite individual",
      text: "O convite é pessoal e intransferível. Cada nome corresponde a um lugar na celebração.",
      companionsAllowed: false,
      companionsYes:
        "Acompanhantes só estão convidados quando o nome aparece no convite. Se o seu convite traz um segundo nome, essa pessoa está mais do que bem-vinda.",
      companionsNo:
        "Não há autorização para levar acompanhantes extras. Se o convite não traz outro nome, venha e celebre com a gente; o lugar é de quem está escrito no convite.",
    },
  },
};

function getInviteToken() {
  const queryToken = new URLSearchParams(window.location.search).get("c") || "";
  const validToken = /^[A-Za-z0-9_-]{24,128}$/.test(queryToken);
  if (validToken) {
    sessionStorage.setItem("weddingInviteToken", queryToken);
    return queryToken;
  }
  return sessionStorage.getItem("weddingInviteToken") || "";
}

function withInviteToken(url) {
  const token = getInviteToken();
  if (!token || /^https?:\/\//i.test(url)) return url;

  const destination = new URL(url, window.location.href);
  destination.searchParams.set("c", token);
  return `${destination.pathname.split("/").pop()}${destination.search}${destination.hash}`;
}

function getLinksPageUrl() {
  return withInviteToken("links.html");
}

function getIndexPageUrl() {
  return withInviteToken("index.html");
}

const BOOK_PAGE_COUNT = 5;
const INDICATOR_START_INDEX = 2;

function renderBackToStart() {
  return `
    <a class="page-back-start" href="${getIndexPageUrl()}" aria-label="Voltar ao inicio do convite">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <path d="M15 6l-6 6 6 6"/>
      </svg>
    </a>
  `;
}

function createPageIndicators(activeIndex, totalPages = BOOK_PAGE_COUNT) {
  const indicators = document.createElement("div");
  indicators.className = "page-indicators is-visible is-entering";
  indicators.id = "indicators";

  for (let i = 0; i < totalPages; i++) {
    const dot = document.createElement("span");
    dot.className = "page-indicator";
    dot.style.setProperty("--dot-index", i);
    if (i === activeIndex) {
      dot.classList.add("is-active");
    }
    dot.dataset.index = i;
    indicators.appendChild(dot);
  }

  return indicators;
}

function buildLinkItem(link) {
  const url = withInviteToken(link.url);
  const isExternal = /^https?:\/\//i.test(url);
  const targetAttrs = isExternal
    ? 'target="_blank" rel="noopener noreferrer"'
    : "";
  return `
    <a class="link-item" href="${url}" ${targetAttrs} data-link>
      <span class="link-icon">
        <img src="${link.icon}" alt="${link.label}">
      </span>
      <span class="link-label">${link.label}</span>
    </a>
  `;
}

function renderLinksGrid(links) {
  return `
    <div class="links-grid">
      ${links.map(buildLinkItem).join("")}
    </div>
  `;
}

function renderInfoPageChrome(config, page) {
  const { bride, groom, monogram } = config;
  document.title = `${page.pageTitle} — ${bride} e ${groom}`;

  return `
    <header class="gifts-header">
      <a class="gifts-back" href="${getLinksPageUrl()}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true">
          <path d="M15 6l-6 6 6 6"/>
        </svg>
        Voltar ao convite
      </a>
      <div class="gifts-brand">
        <img src="${monogram}" alt="${bride} e ${groom}" onerror="this.style.display='none'">
      </div>
    </header>

    <section class="gifts-hero">
      <p class="gifts-kicker">${bride} &amp; ${groom}</p>
      <h1 class="gifts-title">${page.pageTitle}</h1>
      <p class="gifts-subtitle">${page.pageSubtitle}</p>
      <div class="gifts-divider" aria-hidden="true"></div>
    </section>
  `;
}

const MUSIC_SESSION_KEY = "weddingMusicState";

class WeddingBackgroundMusic {
  constructor() {
    this.audio = null;
    this.config = null;
    this.playing = false;
    this.lastPersistAt = 0;
    this.persistState = this.persistState.bind(this);
    this.onTimeUpdate = this.onTimeUpdate.bind(this);
    this.onVisibilityChange = this.onVisibilityChange.bind(this);
    this.onDocumentClick = this.onDocumentClick.bind(this);
  }

  init(config) {
    if (!config?.music?.enabled || !config.music.src) return;
    this.config = config;

    if (!this.audio) {
      this.audio = new Audio(config.music.src);
      this.audio.loop = true;
      this.audio.volume = 0.4;
      this.audio.preload = "auto";

      this.audio.addEventListener("timeupdate", this.onTimeUpdate);
      window.addEventListener("pagehide", this.persistState);
      window.addEventListener("beforeunload", this.persistState);
      document.addEventListener("visibilitychange", this.onVisibilityChange);
      document.addEventListener("click", this.onDocumentClick, true);
    }
  }

  onTimeUpdate() {
    if (!this.playing) return;
    const now = Date.now();
    if (now - this.lastPersistAt < 800) return;
    this.lastPersistAt = now;
    this.persistState();
  }

  onVisibilityChange() {
    if (document.visibilityState === "hidden") {
      this.persistState();
    }
  }

  onDocumentClick(event) {
    const link = event.target.closest("a[href]");
    if (!link) return;

    const href = link.getAttribute("href") || "";
    if (/^(https?:|mailto:|tel:|#)/i.test(href)) return;

    this.persistState();
  }

  readSession() {
    try {
      return JSON.parse(sessionStorage.getItem(MUSIC_SESSION_KEY) || "{}");
    } catch {
      return {};
    }
  }

  persistState() {
    if (!this.audio) return;

    const time = Number.isFinite(this.audio.currentTime)
      ? this.audio.currentTime
      : 0;
    sessionStorage.setItem(
      MUSIC_SESSION_KEY,
      JSON.stringify({
        active: this.playing,
        time,
      }),
    );
  }

  clearSession() {
    sessionStorage.removeItem(MUSIC_SESSION_KEY);
  }

  isPlaying() {
    return this.playing;
  }

  seekTo(time) {
    if (!this.audio || !Number.isFinite(time) || time < 0) return;

    const duration = this.audio.duration;
    const safeTime =
      Number.isFinite(duration) && duration > 0
        ? Math.min(time, Math.max(0, duration - 0.05))
        : time;

    try {
      this.audio.currentTime = safeTime;
    } catch {
      /* ignore seek errors on unsupported states */
    }
  }

  whenAudioReady() {
    if (!this.audio) return Promise.resolve();

    if (this.audio.readyState >= 1) {
      return Promise.resolve();
    }

    return new Promise((resolve) => {
      const done = () => resolve();
      this.audio.addEventListener("loadedmetadata", done, { once: true });
      this.audio.addEventListener("canplay", done, { once: true });
    });
  }

  play(fromTime) {
    if (!this.audio) return Promise.resolve(false);

    const shouldSeek =
      typeof fromTime === "number" && Number.isFinite(fromTime);

    return this.whenAudioReady().then(() => {
      if (shouldSeek) {
        this.seekTo(fromTime);
      }

      return this.audio
        .play()
        .then(() => {
          if (shouldSeek) {
            this.seekTo(fromTime);
          }
          this.playing = true;
          this.persistState();
          return true;
        })
        .catch(() => false);
    });
  }

  pause() {
    if (!this.audio) {
      this.playing = false;
      this.persistState();
      return;
    }
    this.audio.pause();
    this.playing = false;
    this.persistState();
  }

  stop() {
    if (!this.audio) {
      this.playing = false;
      this.clearSession();
      return;
    }
    this.audio.pause();
    this.audio.currentTime = 0;
    this.playing = false;
    this.clearSession();
  }

  resumeIfActive() {
    const state = this.readSession();
    if (!state.active) return Promise.resolve(false);
    return this.play(state.time ?? 0);
  }
}

const weddingMusic = new WeddingBackgroundMusic();

function renderMusicToggleHtml(config) {
  if (!config?.music?.enabled) return "";
  return `
    <button class="music-toggle is-muted" aria-label="Alternar musica" data-action="music">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M11 5L6 9H2v6h4l5 4V5z"/>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
      </svg>
    </button>
  `;
}

function syncMusicToggleButtons(root = document) {
  root.querySelectorAll(".music-toggle").forEach((btn) => {
    btn.classList.toggle("is-muted", !weddingMusic.isPlaying());
  });
}

function toggleBackgroundMusic(root = document) {
  if (weddingMusic.isPlaying()) {
    weddingMusic.pause();
  } else {
    weddingMusic.play();
  }
  syncMusicToggleButtons(root);
}

function bindMusicToggle(root) {
  root.addEventListener("click", (event) => {
    if (!event.target.closest('[data-action="music"]')) return;
    event.preventDefault();
    toggleBackgroundMusic(root);
  });
}

/* ============================================================
   PAGE FLIP BOOK
   ============================================================ */
class PageFlipBook {
  constructor(container, config) {
    this.container = container;
    this.viewport = container.closest(".book-viewport");
    this.config = config;
    this.currentIndex = 0;
    this.totalPages = BOOK_PAGE_COUNT;
    this.lastIndicatorIndex = -1;
    this.isAnimating = false;
    this.isDragging = false;
    this.dragProgress = 0;
    this.dragStartedOnCorner = false;
    this.startX = 0;
    this.pageWidth = 0;

    this.pages = [];
    this.musicSyncedWithVideo = false;
    this.saveDateVideoBound = false;
    this.saveDatePageIndex = 1;

    this.onPointerDown = this.onPointerDown.bind(this);
    this.onPointerMove = this.onPointerMove.bind(this);
    this.onPointerUp = this.onPointerUp.bind(this);
    this.onPointerCancel = this.onPointerUp.bind(this);

    this.init();
  }

  init() {
    this.applyCssVariables();
    this.renderPages();
    this.renderIndicators();
    this.updateStack();
    this.bindEvents();
    this.initMusic();
    this.bindSaveDateVideoEvents();
    requestAnimationFrame(() => {
      this.container.classList.add("is-ready");
    });
  }

  applyCssVariables() {
    const root = document.documentElement;
    const bg = this.config.backgrounds;
    root.style.setProperty("--bg-cover", `url("${bg.cover}")`);
    root.style.setProperty("--bg-save-date", `url("${bg.saveDate}")`);
    root.style.setProperty("--bg-invite", `url("${bg.invite}")`);
    root.style.setProperty("--bg-details", `url("${bg.details}")`);
    root.style.setProperty("--bg-links", `url("${bg.links}")`);
  }

  renderPages() {
    const templates = [
      this.renderCoverPage(),
      this.renderSaveDatePage(),
      this.renderInvitePage(),
      this.renderDetailsPage(),
      this.renderLinksPage(),
    ];

    templates.forEach((html, index) => {
      const page = document.createElement("div");
      page.className = "page";
      page.dataset.index = index;
      page.innerHTML = html;
      if (index === this.totalPages - 1) {
        page.classList.add("is-last");
      }
      this.container.appendChild(page);
      this.pages.push(page);
    });
  }

  renderIndicators() {
    const indicators = createPageIndicators(this.currentIndex, this.totalPages);
    (this.viewport || this.container).appendChild(indicators);
    this.indicatorsEl = indicators;
    this.indicatorDots = indicators.querySelectorAll(".page-indicator");
  }

  renderCoverPage() {
    const { initials, seal } = this.config;
    return `
      <div class="page-face page-front page-cover">
        <div class="page-bg" style="background-image: var(--bg-cover)"></div>
        <div class="envelope-lid">
          <div class="envelope-flap" aria-hidden="true"></div>
          <div class="cover-seal-group">
            <button class="wax-seal" data-action="turn" aria-label="Abrir convite">
              <img class="wax-seal-image" src="${seal}" alt="Selo ${initials}">
            </button>
            ${this.renderCoverCta()}
          </div>
        </div>
        <div class="page-shade"></div>
        <div class="page-fold"></div>
        <div class="page-turn-sheet"></div>
      </div>
      <div class="page-face page-back"></div>
    `;
  }

  renderCoverCta() {
    return `
      <button class="cover-cta" data-action="turn" aria-label="Clique aqui para abrir">
        <svg class="cover-cta-svg" viewBox="0 0 220 72" aria-hidden="true">
          <defs>
            <path id="cover-cta-curve" d="M 36 18 Q 110 84 184 18" fill="none"/>
          </defs>
          <text class="cover-cta-text">
            <textPath href="#cover-cta-curve" startOffset="50%" text-anchor="middle">
              CLIQUE AQUI
            </textPath>
          </text>
        </svg>
      </button>
    `;
  }

  renderSaveDatePage() {
    const videoSrc = this.config.saveTheDateVideo;
    return `
      <div class="page-face page-front page-save-date">
        <div class="save-date-video-wrap">
          <video
            class="save-date-video"
            src="${videoSrc}"
            playsinline
            webkit-playsinline
            muted
            controls
            preload="auto"
            controlslist="nodownload"
            aria-label="Save the date"
          ></video>
        </div>
        ${this.renderPageForward()}
        ${this.renderMusicToggle()}
        <div class="page-shade"></div>
        <div class="page-fold"></div>
        <div class="page-turn-sheet"></div>
      </div>
      <div class="page-face page-back"></div>
    `;
  }

  renderInvitePage() {
    const { bride, groom, parentsBlessing, inviteMessage, floralInvite } =
      this.config;
    return `
      <div class="page-face page-front page-invite">
        <div class="invite-floral" aria-hidden="true">
          <img src="${floralInvite}" alt="">
        </div>
        ${this.renderMonogram("invite-reveal")}
        <div class="page-content">
          <p class="invite-intro invite-reveal">${parentsBlessing}</p>
          <p class="invite-message invite-reveal">${inviteMessage}</p>
          <!-- <h1 class="invite-names">${bride} e ${groom}</h1> -->
        </div>
        ${renderBackToStart()}
        ${this.renderPageForward()}
        ${this.renderMusicToggle()}
        <div class="page-shade"></div>
        <div class="page-fold"></div>
        <div class="page-turn-sheet"></div>
      </div>
      <div class="page-face page-back"></div>
    `;
  }

  renderDetailsPage() {
    const { bride, groom, parentsBlessing } = this.config;
    const { formatted, weekday, time } = this.config.date;
    const { name, mapsUrl } = this.config.venue;
    return `
      <div class="page-face page-front page-details">
        <div class="page-bg page-bg--light" style="background-image: var(--bg-details)"></div>
        <div class="floral-corner floral-corner--tl"></div>
        <div class="floral-corner floral-corner--br"></div>
        ${this.renderMonogram("details-reveal")}
        <div class="page-content">
          <h2 class="details-names details-reveal">${bride} e ${groom}</h2>
          <div class="details-divider details-reveal"></div>
          <p class="details-date details-reveal">${formatted}</p>
          <p class="details-weekday details-reveal">${weekday}, AS ${time}</p>
          <div class="details-divider details-reveal"></div>
          <p class="details-label details-reveal">LOCAL</p>
          <p class="details-venue details-reveal">
            <a href="${mapsUrl}" target="_blank" rel="noopener noreferrer" data-link>
              ${name}
            </a>
          </p>
        </div>
        ${renderBackToStart()}
        ${this.renderPageForward()}
        ${this.renderMusicToggle()}
        <div class="page-shade"></div>
        <div class="page-fold"></div>
        <div class="page-turn-sheet"></div>
      </div>
      <div class="page-face page-back"></div>
    `;
  }

  renderLinksPage() {
    return `
      <div class="page-face page-front page-links">
        <div class="page-bg" style="background-image: var(--bg-links)"></div>
        ${this.renderMonogram("", this.config.linksMonogram)}
        <div class="page-content">
          <div class="links-panel">
            ${renderLinksGrid(this.config.links)}
          </div>
        </div>
        ${renderBackToStart()}
        ${this.renderMusicToggle()}
        <div class="page-shade"></div>
        <div class="page-fold"></div>
        <div class="page-turn-sheet"></div>
      </div>
      <div class="page-face page-back"></div>
    `;
  }

  renderMonogram(extraClass = "", imageSrc = null) {
    const { bride, groom, monogram } = this.config;
    const src = imageSrc || monogram;
    const className = extraClass ? `monogram ${extraClass}` : "monogram";
    return `
      <div class="${className}">
        <img src="${src}" alt="${bride} e ${groom}" onerror="this.style.display='none'">
      </div>
    `;
  }

  renderPageForward() {
    return `
      <button class="page-forward-next" type="button" data-action="turn" aria-label="Avancar pagina">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M9 6l6 6-6 6"/>
        </svg>
      </button>
    `;
  }

  renderMusicToggle() {
    return renderMusicToggleHtml(this.config);
  }

  bindEvents() {
    this.container.addEventListener("click", (e) => {
      const action = e.target.closest("[data-action]");
      if (!action) return;

      const actionType = action.dataset.action;
      if (actionType === "turn") {
        e.preventDefault();
        const fromForwardButton = !!e.target.closest(".page-forward-next");
        this.turnPageForward(fromForwardButton);
      } else if (actionType === "music") {
        e.preventDefault();
        this.toggleMusic();
      }
    });

    this.container.addEventListener("pointerdown", this.onPointerDown);
    window.addEventListener("pointermove", this.onPointerMove);
    window.addEventListener("pointerup", this.onPointerUp);
    window.addEventListener("pointercancel", this.onPointerCancel);
  }

  getTopPage() {
    return this.pages[this.currentIndex];
  }

  updateStack() {
    this.pages.forEach((page, index) => {
      page.classList.remove(
        "is-top",
        "is-next",
        "is-turned",
        "is-turning",
        "is-dragging",
        "is-envelope-opening",
        "is-envelope-exiting",
      );

      page.style.transition = "";
      page.style.zIndex = "";
      page.style.opacity = "";

      if (index < this.currentIndex) {
        page.classList.add("is-turned");
        page.style.transform = "rotateY(-180deg)";
        page.style.zIndex = String(index);
        page.style.setProperty("--turn-progress", "1");
      } else if (index === this.currentIndex) {
        page.classList.add("is-top");
        page.style.transform = "rotateY(0deg)";
        page.style.zIndex = "20";
        page.style.setProperty("--turn-progress", "0");
      } else if (index === this.currentIndex + 1) {
        page.classList.add("is-next");
        page.style.transform = "rotateY(0deg)";
        page.style.zIndex = "10";
        page.style.setProperty("--turn-progress", "0");
      } else {
        page.style.transform = "rotateY(0deg)";
        page.style.zIndex = "1";
        page.style.setProperty("--turn-progress", "0");
      }
    });

    this.indicatorDots.forEach((dot, index) => {
      dot.classList.toggle("is-active", index === this.currentIndex);
    });

    const topFace = this.pages[this.currentIndex]?.querySelector(".page-front");
    const isLightPage =
      !!topFace?.classList.contains("page-invite") ||
      !!topFace?.classList.contains("page-details");
    this.container.classList.toggle("is-light-page", isLightPage);
    this.viewport?.classList.toggle("is-light-page", isLightPage);

    this.syncIndicatorVisibility();

    this.syncMusicState();
    this.syncSaveDateVideo();
  }

  hideIndicators() {
    this.indicatorsEl?.classList.remove("is-visible", "is-entering");
  }

  syncIndicatorVisibility() {
    const showIndicators = this.currentIndex >= INDICATOR_START_INDEX;
    this.indicatorsEl?.classList.toggle("is-visible", showIndicators);

    if (showIndicators && this.currentIndex !== this.lastIndicatorIndex) {
      this.indicatorsEl?.classList.remove("is-entering");
      void this.indicatorsEl?.offsetWidth;
      this.indicatorsEl?.classList.add("is-entering");
      this.lastIndicatorIndex = this.currentIndex;
    }
  }

  finishPageTurn() {
    this.currentIndex++;
    this.isAnimating = false;
    this.updateStack();
  }

  syncMusicState() {
    if (this.currentIndex === 0) {
      this.musicSyncedWithVideo = false;
      this.stopMusic();
      return;
    }

    if (this.currentIndex === this.saveDatePageIndex) {
      this.musicSyncedWithVideo = true;
      return;
    }

    this.musicSyncedWithVideo = false;
  }

  syncSaveDateVideo() {
    this.pages.forEach((page, index) => {
      const video = page.querySelector(".save-date-video");
      if (!video) return;

      video.muted = true;

      if (index === this.currentIndex && index === this.saveDatePageIndex) {
        video
          .play()
          .then(() => {
            if (this.musicSyncedWithVideo) {
              this.startMusic();
            }
          })
          .catch(() => {});
        return;
      }

      if (index !== this.currentIndex) {
        video.pause();
      }
    });
  }

  bindSaveDateVideoEvents() {
    const video =
      this.pages[this.saveDatePageIndex]?.querySelector(".save-date-video");
    if (!video || this.saveDateVideoBound) return;

    this.saveDateVideoBound = true;
    video.muted = true;

    video.addEventListener("play", () => {
      if (this.musicSyncedWithVideo) {
        this.startMusic();
      }
    });

    video.addEventListener("pause", () => {
      if (this.musicSyncedWithVideo) {
        this.pauseMusic();
      }
    });

    video.addEventListener("ended", () => {
      if (this.currentIndex === this.saveDatePageIndex && !this.isAnimating) {
        this.turnPageForward();
      }
    });
  }

  setPageRotation(page, progress) {
    const angle = -180 * progress;
    page.style.transform = `rotateY(${angle}deg)`;
    page.style.setProperty("--turn-progress", progress.toFixed(3));

    const shade = page.querySelector(".page-shade");
    if (shade) {
      shade.style.opacity = progress * 0.8;
    }

    const fold = page.querySelector(".page-fold");
    if (fold) {
      fold.style.opacity = progress;
    }
  }

  onPointerDown(e) {
    if (this.isAnimating || this.currentIndex >= this.totalPages - 1) return;
    if (this.currentIndex === 0) return;

    if (e.target.closest("[data-link]")) return;
    if (e.target.closest(".page-back-start")) return;
    if (e.target.closest(".page-forward-next")) return;
    if (e.target.closest("[data-action='music']")) return;
    if (e.target.closest("video, .save-date-video-wrap")) return;
    if (e.target.closest("[data-action='turn']")) return;

    const rect = this.container.getBoundingClientRect();
    this.pageWidth = rect.width;

    const isCorner = this.isInCornerZone(e.clientX, e.clientY, rect);
    const isHorizontalSwipeArea = e.clientY >= rect.top + rect.height * 0.45;

    if (!isCorner && !isHorizontalSwipeArea) return;

    this.isDragging = true;
    this.startX = e.clientX;
    this.dragProgress = 0;
    this.dragStartedOnCorner = isCorner;

    const page = this.getTopPage();
    page.classList.add("is-dragging", "is-turning");
    page.style.transition = "none";

    if (e.pointerId !== undefined) {
      page.setPointerCapture?.(e.pointerId);
    }

    e.preventDefault();
  }

  isInCornerZone(clientX, clientY, rect) {
    const cornerSize = 110;
    return (
      clientX >= rect.right - cornerSize && clientY >= rect.bottom - cornerSize
    );
  }

  onPointerMove(e) {
    if (!this.isDragging) return;

    const deltaX = this.startX - e.clientX;
    const progress = Math.max(0, Math.min(1, deltaX / (this.pageWidth * 0.75)));
    this.dragProgress = progress;
    this.setPageRotation(this.getTopPage(), progress);
  }

  onPointerUp() {
    if (!this.isDragging) return;

    this.isDragging = false;
    const page = this.getTopPage();
    page.classList.remove("is-dragging");

    const threshold = 0.35;

    if (this.dragProgress < 0.08 && this.dragStartedOnCorner) {
      page.classList.remove("is-turning");
      page.style.transition = "";
      page.style.transform = "rotateY(0deg)";
      page.style.setProperty("--turn-progress", "0");
      this.dragStartedOnCorner = false;
      this.turnPageForward();
      return;
    }

    if (this.dragProgress >= threshold) {
      this.completeTurn(page);
    } else {
      this.cancelTurn(page);
    }
    this.dragStartedOnCorner = false;
  }

  cancelTurn(page) {
    page.style.transition = "transform 0.4s ease-out";
    page.style.transform = "rotateY(0deg)";
    page.style.setProperty("--turn-progress", "0");

    const shade = page.querySelector(".page-shade");
    const fold = page.querySelector(".page-fold");
    if (shade) shade.style.opacity = "";
    if (fold) fold.style.opacity = "";

    setTimeout(() => {
      page.classList.remove("is-turning");
      page.style.transition = "";
      page.style.setProperty("--turn-progress", "0");
    }, 400);
  }

  completeTurn(page) {
    this.isAnimating = true;
    page.classList.add("is-turning");
    const nextVideo =
      this.pages[this.currentIndex + 1]?.querySelector(".save-date-video");
    if (nextVideo) {
      nextVideo.muted = true;
      nextVideo.play().catch(() => {});
    }
    page.style.transition = "transform var(--flip-duration) var(--flip-easing)";
    page.style.transform = "rotateY(-180deg)";
    page.style.setProperty("--turn-progress", "1");

    let finished = false;
    const finishTurn = () => {
      if (finished) return;
      finished = true;

      page.classList.remove("is-turning", "is-dragging");
      page.style.transition = "";

      const shade = page.querySelector(".page-shade");
      const fold = page.querySelector(".page-fold");
      if (shade) shade.style.opacity = "";
      if (fold) fold.style.opacity = "";

      page.classList.add("is-turned");
      page.style.transform = "rotateY(-180deg)";
      page.style.zIndex = String(this.currentIndex);
      page.style.setProperty("--turn-progress", "1");

      this.finishPageTurn();
      this.dragProgress = 0;
    };

    const onTransitionEnd = (event) => {
      if (event.target === page && event.propertyName === "transform") {
        finishTurn();
      }
    };

    page.addEventListener("transitionend", onTransitionEnd, { once: true });
    setTimeout(finishTurn, 800);
  }

  turnPageForward(fromForwardButton = false) {
    if (this.isAnimating || this.currentIndex >= this.totalPages - 1) return;
    if (fromForwardButton) {
      this.hideIndicators();
    }
    if (this.currentIndex === 0) {
      this.openEnvelope();
      return;
    }
    const page = this.getTopPage();
    page.classList.add("is-turning");
    this.completeTurn(page);
  }

  unlockSaveDateVideo(video) {
    if (!video) return;
    video.muted = true;
    const playAttempt = video.play();
    if (playAttempt && typeof playAttempt.then === "function") {
      playAttempt
        .then(() => {
          video.pause();
          video.currentTime = 0;
        })
        .catch(() => {});
    }
  }

  playSaveDateVideo(video) {
    if (!video) return;
    video.currentTime = 0;
    video.muted = true;
    this.musicSyncedWithVideo = true;
    const playAttempt = video.play();
    if (playAttempt && typeof playAttempt.then === "function") {
      playAttempt
        .then(() => {
          this.startMusic();
        })
        .catch(() => {});
    }
  }

  openEnvelope() {
    this.isAnimating = true;

    const page = this.getTopPage();
    const cover = page.querySelector(".page-cover");
    const nextVideo =
      this.pages[this.currentIndex + 1]?.querySelector(".save-date-video");

    page.classList.add("is-envelope-opening");
    cover?.classList.add("is-opening");
    this.unlockSaveDateVideo(nextVideo);

    const veilMs = 1000;
    const holdMs = 1000;
    const fadeMs = 1000;

    window.setTimeout(() => {
      page.classList.add("is-envelope-exiting");
      this.playSaveDateVideo(nextVideo);
    }, veilMs + holdMs);

    window.setTimeout(
      () => {
        page.classList.remove("is-envelope-opening", "is-envelope-exiting");
        this.currentIndex += 1;
        this.isAnimating = false;
        this.updateStack();
      },
      veilMs + holdMs + fadeMs,
    );
  }

  initMusic() {
    weddingMusic.init(this.config);
  }

  updateMusicToggles() {
    syncMusicToggleButtons(this.container);
  }

  startMusic(fromTime) {
    weddingMusic.play(fromTime).then((started) => {
      if (started) {
        this.updateMusicToggles();
      }
    });
  }

  pauseMusic() {
    weddingMusic.pause();
    this.updateMusicToggles();
  }

  stopMusic() {
    weddingMusic.stop();
    this.updateMusicToggles();
  }

  toggleMusic() {
    toggleBackgroundMusic(this.container);
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isValidInviteToken(token) {
  return /^[A-Za-z0-9_-]{24,128}$/.test(token || "");
}

/* ============================================================
   PAGINA DE PRESENTES
   ============================================================ */
class GiftListPage {
  constructor(container, config) {
    this.container = container;
    this.config = config;
    this.gifts = config.gifts;
    this.activeGift = null;
    this.lastFocus = null;

    this.render();
    this.bindEvents();
  }

  formatPrice(value) {
    return Number(value).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  formatGiftPrice(gift) {
    return gift.priceLabel || this.formatPrice(gift.price);
  }

  render() {
    const { pageTitle, pageSubtitle, items } = this.gifts;
    const cards = items
      .map(
        (gift, index) => `
        <button
          class="gift-card"
          type="button"
          data-gift-index="${index}"
          aria-label="${escapeHtml(gift.title)}, ${escapeHtml(this.formatGiftPrice(gift))}"
        >
          <span class="gift-card-media">
            <img src="${gift.image}" alt="${gift.title}" loading="lazy">
          </span>
          <span class="gift-card-body">
            <span class="gift-card-title">${gift.title}</span>
            <span class="gift-card-price">${escapeHtml(this.formatGiftPrice(gift))}</span>
          </span>
        </button>
      `,
      )
      .join("");

    this.container.innerHTML = `
      ${renderInfoPageChrome(this.config, { pageTitle, pageSubtitle })}

      <section class="gifts-grid" aria-label="Lista de presentes">
        ${cards}
      </section>

      <div class="gift-modal" id="gift-modal" hidden>
        <div class="gift-modal-backdrop" data-modal-close></div>
        <div
          class="gift-modal-dialog"
          role="dialog"
          aria-modal="true"
          aria-labelledby="gift-modal-title"
        >
          <button class="gift-modal-close" type="button" data-modal-close aria-label="Fechar">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18"/>
            </svg>
          </button>
          <div class="gift-modal-content" id="gift-modal-content"></div>
        </div>
      </div>
    `;

    this.modal = this.container.querySelector("#gift-modal");
    this.modalContent = this.container.querySelector("#gift-modal-content");
  }

  bindEvents() {
    this.container.addEventListener("click", (event) => {
      const card = event.target.closest("[data-gift-index]");
      if (card) {
        const index = Number(card.dataset.giftIndex);
        this.openModal(this.gifts.items[index]);
        return;
      }

      if (event.target.closest("[data-pix-copy]")) {
        event.preventDefault();
        this.copyPixCode(event.target.closest("[data-pix-copy]"));
        return;
      }

      if (event.target.closest("[data-modal-close]")) {
        this.closeModal();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && this.isModalOpen()) {
        this.closeModal();
      }
    });
  }

  isModalOpen() {
    return this.modal && !this.modal.hasAttribute("hidden");
  }

  renderPixPayment(gift) {
    const { pix } = this.gifts;
    const qrCode = String(gift.qrCode || "").trim();
    const copyPasteCode = String(gift.copyPasteCode || "").trim();

    if (!qrCode && !copyPasteCode) {
      return `
        <section class="gift-modal-section gift-modal-section--pix is-disabled" aria-label="${escapeHtml(pix.sectionTitle)}">
          <div class="gift-modal-section-head">
            <h2 class="gift-modal-title" id="gift-modal-title">${escapeHtml(pix.sectionTitle)}</h2>
            <p class="gift-modal-section-hint">Em breve disponível</p>
          </div>
        </section>
      `;
    }

    const qrBlock = qrCode
      ? `
        <div class="gift-modal-qr">
          <img
            src="${escapeHtml(qrCode)}"
            alt="QR Code PIX — ${escapeHtml(gift.title)}"
            onerror="this.parentElement.classList.add('is-missing'); this.remove();"
          >
          <p class="gift-modal-qr-fallback">Adicione a imagem do QR Code em <strong>${escapeHtml(qrCode)}</strong></p>
        </div>
      `
      : "";

    const copyBlock = copyPasteCode
      ? `
        <button
          class="rsvp-button gift-modal-pix-copy"
          type="button"
          data-pix-copy
          data-default-label="${escapeHtml(pix.copyButtonLabel)}"
        >
          ${escapeHtml(pix.copyButtonLabel)}
        </button>
      `
      : "";

    return `
      <section class="gift-modal-section gift-modal-section--pix" aria-label="${escapeHtml(pix.sectionTitle)}">
        <div class="gift-modal-section-head">
          <h2 class="gift-modal-title" id="gift-modal-title">${escapeHtml(pix.sectionTitle)}</h2>
          <p class="gift-modal-section-hint">${escapeHtml(pix.sectionHint)}</p>
        </div>
        ${qrBlock}
        ${copyBlock}
        <dl class="gift-modal-meta">
          <div>
            <dt>Nome no PIX</dt>
            <dd>${escapeHtml(pix.recipientName)}</dd>
          </div>
          <div>
            <dt>Banco</dt>
            <dd>${escapeHtml(pix.bank)}</dd>
          </div>
        </dl>
        <p class="gift-modal-notice">${escapeHtml(pix.notice)}</p>
      </section>
    `;
  }

  async copyToClipboard(text) {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return;
    }

    const helper = document.createElement("textarea");
    helper.value = text;
    helper.setAttribute("readonly", "");
    helper.style.position = "fixed";
    helper.style.opacity = "0";
    document.body.appendChild(helper);
    helper.select();
    document.execCommand("copy");
    document.body.removeChild(helper);
  }

  async copyPixCode(button) {
    const code = String(this.activeGift?.copyPasteCode || "").trim();
    const { pix } = this.gifts;
    const defaultLabel = button?.dataset.defaultLabel || pix.copyButtonLabel;

    if (!code || !button) return;

    try {
      await this.copyToClipboard(code);
      button.textContent = pix.copySuccess;
      button.classList.add("is-copied");
      window.clearTimeout(this.copyResetTimer);
      this.copyResetTimer = window.setTimeout(() => {
        button.textContent = defaultLabel;
        button.classList.remove("is-copied");
      }, 2200);
    } catch {
      button.textContent = pix.copyError;
      window.clearTimeout(this.copyResetTimer);
      this.copyResetTimer = window.setTimeout(() => {
        button.textContent = defaultLabel;
        button.classList.remove("is-copied");
      }, 2200);
    }
  }

  renderCardPayment(gift) {
    const { mercadoPago } = this.gifts;
    const paymentLink = String(gift.paymentLink || "").trim();

    if (!paymentLink) {
      return "";
    }

    return `
      <section class="gift-modal-section gift-modal-section--card" aria-label="${escapeHtml(mercadoPago.sectionTitle)}">
        <div class="gift-modal-section-head">
          <h3 class="gift-modal-section-title">${escapeHtml(mercadoPago.sectionTitle)}</h3>
          <p class="gift-modal-section-hint">${escapeHtml(mercadoPago.sectionHint)}</p>
        </div>
        <a
          class="rsvp-button gift-modal-card-button"
          href="${escapeHtml(paymentLink)}"
          target="_blank"
          rel="noopener noreferrer"
        >
          ${escapeHtml(mercadoPago.buttonLabel)}
        </a>
      </section>
    `;
  }

  openModal(gift) {
    if (!gift) return;

    this.activeGift = gift;
    this.lastFocus = document.activeElement;
    const cardPayment = this.renderCardPayment(gift);

    this.modalContent.innerHTML = `
      <p class="gift-modal-kicker">${escapeHtml(gift.title)}</p>
      <p class="gift-modal-amount">${escapeHtml(this.formatGiftPrice(gift))}</p>

      ${this.renderPixPayment(gift)}

      ${
        cardPayment
          ? `<p class="gift-modal-divider" aria-hidden="true">ou</p>${cardPayment}`
          : ""
      }
    `;

    this.modal.removeAttribute("hidden");
    this.modal.classList.add("is-open");
    document.body.classList.add("is-modal-open");

    const closeButton = this.modal.querySelector(".gift-modal-close");
    closeButton?.focus();
  }

  closeModal() {
    if (!this.isModalOpen()) return;

    this.modal.setAttribute("hidden", "");
    this.modal.classList.remove("is-open");
    document.body.classList.remove("is-modal-open");
    this.activeGift = null;

    if (this.lastFocus && typeof this.lastFocus.focus === "function") {
      this.lastFocus.focus();
    }
  }
}

/* ============================================================
   PAGINA DE MENSAGENS
   ============================================================ */
class MessagePage {
  constructor(container, config) {
    this.container = container;
    this.config = config;
    this.page = config.messages;
    this.inviteToken = getInviteToken();
    this.familyName = null;
    this.db = null;
    this.firebaseReady = false;

    this.render();
    this.bindEvents();
    this.initFirebase();
  }

  render() {
    const { pageTitle, pageSubtitle, intro, placeholder, submitLabel } = this.page;
    this.container.innerHTML = `
      ${renderInfoPageChrome(this.config, { pageTitle, pageSubtitle })}
      <section class="message-page-card" aria-label="Envie sua mensagem">
        <p class="message-page-intro">${escapeHtml(intro)}</p>
        <form class="gift-message-form" data-message-form novalidate>
          <label class="visually-hidden" for="message-input">${escapeHtml(pageTitle)}</label>
          <textarea
            id="message-input"
            class="gift-message-input"
            rows="7"
            maxlength="500"
            placeholder="${escapeHtml(placeholder)}"
            required
          ></textarea>
          <p class="gift-message-feedback" id="message-feedback" hidden role="status"></p>
          <button class="rsvp-button rsvp-submit gift-message-submit" type="submit">
            ${escapeHtml(submitLabel)}
          </button>
        </form>
      </section>
    `;
  }

  bindEvents() {
    this.container.addEventListener("submit", (event) => {
      if (!event.target.matches("[data-message-form]")) return;
      event.preventDefault();
      this.submitMessage();
    });
  }

  async initFirebase() {
    if (!window.isFirebaseConfigured || typeof firebase === "undefined") return;

    try {
      if (!firebase.apps.length) firebase.initializeApp(window.firebaseConfig);
      this.db = firebase.firestore();
      this.firebaseReady = true;

      if (isValidInviteToken(this.inviteToken)) {
        const snapshot = await this.db.collection("families").doc(this.inviteToken).get();
        if (snapshot.exists) this.familyName = snapshot.data().familyName || null;
      }
    } catch (error) {
      console.error("Não foi possível inicializar o Firebase na página de mensagens.", error);
    }
  }

  setFeedback(text, type = "") {
    const feedback = this.container.querySelector("#message-feedback");
    if (!feedback) return;
    feedback.textContent = text;
    feedback.hidden = !text;
    feedback.classList.remove("is-error", "is-success");
    if (type) feedback.classList.add(type);
  }

  async submitMessage() {
    const textarea = this.container.querySelector("#message-input");
    const submitButton = this.container.querySelector(".gift-message-submit");
    const messageText = textarea?.value.trim() || "";

    if (!messageText) {
      this.setFeedback(this.page.empty, "is-error");
      textarea?.focus();
      return;
    }

    if (!this.firebaseReady || !this.db) {
      this.setFeedback(this.page.unavailable, "is-error");
      return;
    }

    submitButton.disabled = true;
    this.setFeedback("");

    try {
      const payload = {
        message: messageText,
        giftTitle: this.page.giftTitle,
        giftPrice: Number(this.page.giftPrice),
        familyToken: isValidInviteToken(this.inviteToken)
          ? this.inviteToken
          : "anonymous",
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      };

      if (this.familyName) payload.familyName = this.familyName;

      await this.db.collection("giftMessages").add(payload);
      textarea.value = "";
      this.setFeedback(this.page.success, "is-success");
    } catch (error) {
      console.error("Não foi possível enviar a mensagem.", error);
      this.setFeedback(this.page.error, "is-error");
    } finally {
      submitButton.disabled = false;
    }
  }
}

/* ============================================================
   DRESS CODE
   ============================================================ */
class DressCodePage {
  constructor(container, config) {
    this.container = container;
    this.config = config;
    this.page = config.dressCode;
    this.render();
  }

  renderSwatches(swatches) {
    return swatches
      .map(
        (swatch) => `
        <div class="color-swatch${swatch.avoid ? " is-avoid" : ""}">
          <span class="color-swatch-dot" style="background:${swatch.hex}"></span>
          <span class="color-swatch-name">${swatch.name}</span>
        </div>
      `,
      )
      .join("");
  }

  render() {
    const { intro, notes, colors, bridesmaidColors, poolNote, looksTitle, looks } =
      this.page;

    const notesHtml = notes
      .map(
        (note) => `
        <article class="guide-card">
          <h2>${note.title}</h2>
          <p>${note.text}</p>
        </article>
      `,
      )
      .join("");

    const swatchesHtml = this.renderSwatches(colors.swatches);
    const bridesmaidSwatchesHtml = this.renderSwatches(
      bridesmaidColors.swatches,
    );

    const looksHtml = looks
      .map(
        (look) => `
        <article class="dress-look">
          <div class="dress-look-media">
            <img src="${look.image}" alt="${look.title}">
          </div>
          <div class="dress-look-body">
            <h3>${look.title}</h3>
            <p>${look.caption}</p>
          </div>
        </article>
      `,
      )
      .join("");

    this.container.innerHTML = `
      ${renderInfoPageChrome(this.config, this.page)}

      <p class="guide-intro">${intro}</p>

      <section class="guide-stack">${notesHtml}</section>

      <section class="guide-stack">
        <section class="guide-card">
          <h2>${colors.title}</h2>
          <p>${colors.text}</p>
          <div class="color-swatches">${swatchesHtml}</div>
        </section>

        <section class="guide-card">
          <h2>${bridesmaidColors.title}</h2>
          <p>${bridesmaidColors.text}</p>
          <div class="color-swatches">${bridesmaidSwatchesHtml}</div>
        </section>
      </section>

      <section class="guide-highlight">
        <h2>${poolNote.title}</h2>
        <p>${poolNote.text}</p>
      </section>

      <section class="dress-looks-section">
        <h2 class="guide-section-title">${looksTitle}</h2>
        <div class="dress-looks">${looksHtml}</div>
      </section>
    `;
  }
}

/* ============================================================
   MANUAL DOS CONVIDADOS
   ============================================================ */
class GuestManualPage {
  constructor(container, config) {
    this.container = container;
    this.config = config;
    this.page = config.guestManual;
    this.render();
  }

  render() {
    const { date, venue } = this.config;
    const { arrival, celebration, attention, photos, invitation } = this.page;
    const companionsText = invitation.companionsAllowed
      ? invitation.companionsYes
      : invitation.companionsNo;

    const attentionHtml = attention.items
      .map((item) => `<li>${item}</li>`)
      .join("");

    this.container.innerHTML = `
      ${renderInfoPageChrome(this.config, this.page)}

      <section class="guide-stack">
        <article class="guide-card">
          <h2>${arrival.title}</h2>
          <dl class="guide-meta">
            <div>
              <dt>Cerimônia</dt>
              <dd class="guide-meta-value-sans">${date.weekday}, ${date.formatted} · ${date.time}</dd>
            </div>
            <div>
              <dt>Melhor horário para chegar</dt>
              <dd class="guide-meta-value-sans">${arrival.suggestedTime}</dd>
            </div>
            <div>
              <dt>Local</dt>
              <dd class="guide-meta-value-sans">
                <a href="${venue.mapsUrl}" target="_blank" rel="noopener noreferrer">
                  ${venue.name}
                </a>
              </dd>
            </div>
          </dl>
          <p>${arrival.note}</p>
        </article>

        <article class="guide-card">
          <h2>${celebration.title}</h2>
          <p>${celebration.text}</p>
        </article>

        <article class="guide-card">
          <h2>${attention.title}</h2>
          <ul class="guide-list">${attentionHtml}</ul>
        </article>

        <article class="guide-card">
          <h2>${photos.title}</h2>
          <p>${photos.text}</p>
        </article>

        <article class="guide-highlight">
          <h2>${invitation.title}</h2>
          <p>${invitation.text}</p>
          <p>${companionsText}</p>
        </article>
      </section>
    `;
  }
}

/* ============================================================
   LINKS PAGE (standalone)
   ============================================================ */
class LinksPage {
  constructor(container, config) {
    this.container = container;
    this.viewport = container.closest(".book-viewport");
    this.config = config;
    this.activeIndex = BOOK_PAGE_COUNT - 1;
    this.render();
    this.renderIndicators();
    this.bindMusicToggle();
    syncMusicToggleButtons(this.container);
    weddingMusic.resumeIfActive().then(() => {
      syncMusicToggleButtons(this.container);
    });
  }

  render() {
    const { bride, groom, monogram, linksMonogram, backgrounds } = this.config;
    const linksLogo = linksMonogram || monogram;
    document.title = `Links — ${bride} e ${groom}`;

    document.documentElement.style.setProperty(
      "--bg-links",
      `url("${backgrounds.links}")`,
    );

    this.container.innerHTML = `
      <div class="links-standalone page-links">
        <div class="page-bg" style="background-image: var(--bg-links)"></div>
        <div class="monogram">
          <img src="${linksLogo}" alt="${bride} e ${groom}" onerror="this.style.display='none'">
        </div>
        <div class="page-content">
          <div class="links-panel">
            ${renderLinksGrid(this.config.links)}
          </div>
        </div>
        ${renderBackToStart()}
        ${renderMusicToggleHtml(this.config)}
      </div>
    `;
  }

  bindMusicToggle() {
    bindMusicToggle(this.container);
  }

  renderIndicators() {
    const indicators = createPageIndicators(this.activeIndex, BOOK_PAGE_COUNT);
    (this.viewport || this.container).appendChild(indicators);
  }
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  weddingMusic.init(weddingConfig);

  const book = document.getElementById("book");
  if (book) {
    new PageFlipBook(book, weddingConfig);
  } else {
    weddingMusic.resumeIfActive();
  }

  const linksApp = document.getElementById("links-app");
  if (linksApp) {
    new LinksPage(linksApp, weddingConfig);
  }

  const giftsApp = document.getElementById("gifts-app");
  if (giftsApp) {
    new GiftListPage(giftsApp, weddingConfig);
  }

  const messagesApp = document.getElementById("messages-app");
  if (messagesApp) {
    new MessagePage(messagesApp, weddingConfig);
  }

  const dressApp = document.getElementById("dress-app");
  if (dressApp) {
    new DressCodePage(dressApp, weddingConfig);
  }

  const manualApp = document.getElementById("manual-app");
  if (manualApp) {
    new GuestManualPage(manualApp, weddingConfig);
  }
});
