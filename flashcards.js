const CARDS = [
  {
    "word": "they",
    "translation": "eles/elas — sujeito",
    "phonetic": "/dhei/"
  },
  {
    "word": "them",
    "translation": "eles/elas — objeto",
    "phonetic": "/dhem/"
  },
  {
    "word": "their",
    "translation": "deles/delas — possessivo",
    "phonetic": "/dher/"
  },
  {
    "word": "theirs",
    "translation": "deles/delas — pronome",
    "phonetic": "/dherz/"
  },
  {
    "word": "us",
    "translation": "nos — objeto",
    "phonetic": "/as/"
  },
  {
    "word": "our",
    "translation": "nosso/nossa — possessivo",
    "phonetic": "/aur/"
  },
  {
    "word": "ours",
    "translation": "nosso/nossa — pronome",
    "phonetic": "/aurz/"
  },
  {
    "word": "it sounds",
    "translation": "parece / soa",
    "phonetic": "/it saundz/"
  },
  {
    "word": "report",
    "translation": "relatorio",
    "phonetic": "/ripOrt/"
  },
  {
    "word": "send",
    "translation": "enviar",
    "phonetic": "/send/"
  },
  {
    "word": "mean",
    "translation": "significa / maldade",
    "phonetic": "/min/"
  },
  {
    "word": "I mean",
    "translation": "eu quero dizer",
    "phonetic": "/ai min/"
  },
  {
    "word": "what do you mean",
    "translation": "o que voce quer dizer?",
    "phonetic": "/wot du yu min/"
  },
  {
    "word": "kind",
    "translation": "gentil / tipo",
    "phonetic": "/kaind/"
  },
  {
    "word": "kind of",
    "translation": "meio que / tipo assim",
    "phonetic": "/kaind ov/"
  },
  {
    "word": "dumb",
    "translation": "burro / mudo",
    "phonetic": "/dam/"
  },
  {
    "word": "reformulate",
    "translation": "reformular",
    "phonetic": "/reformiuleit/"
  },
  {
    "word": "understand",
    "translation": "entender",
    "phonetic": "/anderstand/"
  },
  {
    "word": "was",
    "translation": "era / estava — I, He, She, It",
    "phonetic": "/woz/"
  },
  {
    "word": "were",
    "translation": "eram / estavam — You, We, They",
    "phonetic": "/wer/"
  },
  {
    "word": "wasn't",
    "translation": "nao era / nao estava",
    "phonetic": "/woznt/"
  },
  {
    "word": "weren't",
    "translation": "nao eram / nao estavam",
    "phonetic": "/wernt/"
  },
  {
    "word": "last week",
    "translation": "semana passada",
    "phonetic": "/last wik/"
  },
  {
    "word": "happened",
    "translation": "aconteceu",
    "phonetic": "/hapend/"
  },
  {
    "word": "stressful",
    "translation": "estressante",
    "phonetic": "/stresFUL/"
  },
  {
    "word": "close",
    "translation": "proximo / intimo",
    "phonetic": "/klous/"
  },
  {
    "word": "hungry",
    "translation": "com fome",
    "phonetic": "/hangri/"
  },
  {
    "word": "angry",
    "translation": "com raiva",
    "phonetic": "/angri/"
  },
  {
    "word": "went",
    "translation": "fui / foi — passado de go",
    "phonetic": "/went/"
  },
  {
    "word": "ate",
    "translation": "comi / comeu — passado de eat",
    "phonetic": "/eit/"
  },
  {
    "word": "drank",
    "translation": "bebi / bebeu — passado de drink",
    "phonetic": "/drank/"
  },
  {
    "word": "said",
    "translation": "disse — passado de say",
    "phonetic": "/sed/"
  },
  {
    "word": "spoke",
    "translation": "falei — passado de speak",
    "phonetic": "/spok/"
  },
  {
    "word": "kept",
    "translation": "mantive — passado de keep",
    "phonetic": "/kept/"
  },
  {
    "word": "and then",
    "translation": "e entao / depois",
    "phonetic": "/and dhen/"
  },
  {
    "word": "when",
    "translation": "quando",
    "phonetic": "/wen/"
  },
  {
    "word": "once",
    "translation": "uma vez",
    "phonetic": "/wans/"
  },
  {
    "word": "drunk",
    "translation": "bebado — adjetivo",
    "phonetic": "/drank/"
  },
  {
    "word": "was walking",
    "translation": "estava caminhando",
    "phonetic": "/woz woking/"
  },
  {
    "word": "was driving",
    "translation": "estava dirigindo",
    "phonetic": "/woz draivin/"
  },
  {
    "word": "was eating",
    "translation": "estava comendo",
    "phonetic": "/woz iting/"
  },
  {
    "word": "going to",
    "translation": "vai / vou — intencao futura",
    "phonetic": "/going tu/"
  },
  {
    "word": "gonna",
    "translation": "going to — informal",
    "phonetic": "/gona/"
  },
  {
    "word": "deliver",
    "translation": "entregar",
    "phonetic": "/diLIver/"
  },
  {
    "word": "I am back",
    "translation": "estou de volta",
    "phonetic": "/ai am bak/"
  },
  {
    "word": "interrupt",
    "translation": "interromper",
    "phonetic": "/interRAPt/"
  },
  {
    "word": "told",
    "translation": "disse/contou — passado de tell",
    "phonetic": "/told/"
  },
  {
    "word": "did",
    "translation": "fiz/fez — passado de do",
    "phonetic": "/did/"
  },
  {
    "word": "forgot",
    "translation": "esqueci — passado de forget",
    "phonetic": "/forGOT/"
  },
  {
    "word": "broke",
    "translation": "quebrei — passado de break",
    "phonetic": "/brok/"
  },
  {
    "word": "made",
    "translation": "fiz/fez — passado de make",
    "phonetic": "/meid/"
  },
  {
    "word": "came",
    "translation": "vim/veio — passado de come",
    "phonetic": "/keim/"
  },
  {
    "word": "won",
    "translation": "ganhei — passado de win",
    "phonetic": "/wan/"
  },
  {
    "word": "had",
    "translation": "tive/tinha — passado de have",
    "phonetic": "/had/"
  },
  {
    "word": "each other day",
    "translation": "um dia sim um dia nao",
    "phonetic": "/itch adher dei/"
  },
  {
    "word": "develop",
    "translation": "desenvolver",
    "phonetic": "/diVElop/"
  },
  {
    "word": "developed",
    "translation": "desenvolveu — passado",
    "phonetic": "/diVElopted/"
  },
  {
    "word": "management",
    "translation": "gestao / gerenciamento",
    "phonetic": "/MANidjment/"
  },
  {
    "word": "skill",
    "translation": "habilidade",
    "phonetic": "/skil/"
  },
  {
    "word": "amazing",
    "translation": "incrivel",
    "phonetic": "/aMEIzing/"
  },
  {
    "word": "victory",
    "translation": "vitoria",
    "phonetic": "/VIKtori/"
  },
  {
    "word": "reply",
    "translation": "resposta / responder",
    "phonetic": "/riPLAI/"
  },
  {
    "word": "ahead",
    "translation": "a frente / adiante",
    "phonetic": "/aHED/"
  },
  {
    "word": "step",
    "translation": "passo / etapa",
    "phonetic": "/step/"
  },
  {
    "word": "because",
    "translation": "porque",
    "phonetic": "/biKOZ/"
  }
];

const PROGRESS_KEY = "yv_paulo_flashcard_progress";
let progress = JSON.parse(localStorage.getItem(PROGRESS_KEY) || "{}");
let deck = [];
let history = [];
let currentIndex = 0;

function getScore(card) {
  const p = progress[card.word] || { easy:0, medium:0, hard:0 };
  return (p.hard * 4) + (p.medium * 2) - (p.easy * 2);
}

function buildDeck() {
  deck = [];
  CARDS.forEach(card => {
    const p = progress[card.word] || { easy:0, medium:0, hard:0 };
    let repeats = 2;
    if (p.hard > p.easy) repeats = 5;
    else if (p.medium > p.easy) repeats = 3;
    else if (p.easy >= 3 && p.hard === 0) repeats = 1;
    for (let i = 0; i < repeats; i++) deck.push(card);
  });
  deck.sort((a,b) => getScore(b) - getScore(a) || Math.random() - .5);
  currentIndex = 0;
  renderCard();
}

function currentCard() { return deck[currentIndex] || CARDS[0]; }

function renderCard() {
  const card = currentCard();
  document.getElementById("cardWord").textContent = card.word;
  document.getElementById("cardTranslation").textContent = card.translation;
  document.getElementById("cardPhonetic").textContent = card.phonetic || "";
  document.getElementById("flashcard").classList.remove("flipped","slide-left","slide-right");
  updateStats();
}

function updateStats() {
  const known = Object.values(progress).filter(p => (p.easy || 0) >= 3 && (p.hard || 0) === 0).length;
  const hard = Object.values(progress).filter(p => (p.hard || 0) > (p.easy || 0)).length;
  document.getElementById("cardsLeft").textContent = deck.length;
  document.getElementById("knownCount").textContent = known;
  document.getElementById("hardCount").textContent = hard;
}

function flipCard() { document.getElementById("flashcard").classList.toggle("flipped"); }

function speakCurrent(event) {
  if (event) event.stopPropagation();
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(currentCard().word);
  u.lang = "en-US";
  u.rate = .82;
  window.speechSynthesis.speak(u);
}

function rateCard(level) {
  const card = currentCard();
  progress[card.word] = progress[card.word] || { easy:0, medium:0, hard:0 };
  progress[card.word][level]++;
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
  nextCard();
}

function nextCard() {
  const el = document.getElementById("flashcard");
  history.push(currentIndex);
  el.classList.add("slide-left");
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % deck.length;
    if (currentIndex === 0) buildDeck();
    else renderCard();
  }, 220);
}

function previousCard() {
  const el = document.getElementById("flashcard");
  el.classList.add("slide-right");
  setTimeout(() => {
    currentIndex = history.pop() ?? Math.max(0, currentIndex - 1);
    renderCard();
  }, 220);
}

function resetProgress() {
  if (!confirm("Reset flashcard progress?")) return;
  progress = {};
  localStorage.removeItem(PROGRESS_KEY);
  buildDeck();
}

let touchStartX = 0;
document.getElementById("flashcard").addEventListener("touchstart", e => { touchStartX = e.changedTouches[0].screenX; });
document.getElementById("flashcard").addEventListener("touchend", e => {
  const diff = e.changedTouches[0].screenX - touchStartX;
  if (Math.abs(diff) > 70) diff < 0 ? nextCard() : previousCard();
});

buildDeck();
