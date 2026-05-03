const PLAN = document.body.getAttribute("data-plan") || "Foundation";

const DAILY = {
  date: "1 de maio, 2026",
  text: "Adjalma is a developer. He works on a project that develops home schools for African kids. Last week, his team won an important competition. That made him very happy. He said to his team: we worked hard and we made something amazing. Yesterday he was at Guilherme's house and they talked about the next steps of the project. It sounds like a great future ahead.",
  questions: [
    { question: "What does Adjalma do?", options: [{letter:"a",text:"He is a teacher"},{letter:"b",text:"He is a developer"},{letter:"c",text:"He is a photographer"},{letter:"d",text:"He is a manager"},{letter:"e",text:"He is a designer"}], answer:"b" },
    { question: "What does the project do?", options: [{letter:"a",text:"It builds schools in Brazil"},{letter:"b",text:"It develops apps for adults"},{letter:"c",text:"It develops home schools for African kids"},{letter:"d",text:"It trains teachers"},{letter:"e",text:"It sells books"}], answer:"c" },
    { question: "What happened last week?", options: [{letter:"a",text:"His team lost a competition"},{letter:"b",text:"He went to the mall"},{letter:"c",text:"His team won an important competition"},{letter:"d",text:"He started a new job"},{letter:"e",text:"He moved to a new house"}], answer:"c" },
    { question: "Where was Adjalma yesterday?", options: [{letter:"a",text:"He was at work"},{letter:"b",text:"He was at the mall"},{letter:"c",text:"He was at Guilherme's house"},{letter:"d",text:"He was at school"},{letter:"e",text:"He was at home"}], answer:"c" },
    { question: "What does 'It sounds like a great future ahead' mean?", options: [{letter:"a",text:"The future is already here"},{letter:"b",text:"There are problems ahead"},{letter:"c",text:"It seems like the future will be great"},{letter:"d",text:"They are going back"},{letter:"e",text:"They are afraid of the future"}], answer:"c" }
  ]
};

const WEEKS = [
  {
    number: 1,
    title: "Present Simple + Pronouns",
    focus: "Usar pronomes de objeto e possessivos com confianca e conjugar verbos no presente.",
    pdfs: [], audios: [{label:"Pronuncia — enviado pelo WhatsApp", url:""}], links: [], videos: [],
    exercises: [
      "Escreva 3 frases usando they/them/their sobre seu projeto",
      "Complete: ___ sounds good. / He works with ___. / Please send ___ to me.",
      "Traduza: O carro e deles. / Ele trabalha com eles. / Eu preciso do relatorio deles."
    ],
    notes: [
      "THEY = eles/elas — sujeito | THEM = eles/elas — objeto | THEIR = deles/delas — possessivo",
      "It sounds good. / He sounds tired. / She sounds happy.",
      "IT nao tem plural — usa-se THEY: Where are the pens? They are here.",
      "Please, send them to me. / I need their reports.",
      "THEY love US. / That is OUR car. / The victory is OURS.",
      "Pronomes: I-me-my-mine | You-you-your-yours | He-him-his | She-her-her-hers | It-it-its | We-us-our-ours | They-them-their-theirs"
    ],
    classwork: [
      {
        title: "Atividade — Pronomes corretos",
        instruction: "Complete com o pronome correto: they, them, their, us, our, ours.",
        items: [
          {q:"Where are the pens? ___ are here.", a:"They are here."},
          {q:"He works with ___.", a:"He works with them."},
          {q:"Please, send ___ to me.", a:"Please, send them to me."},
          {q:"I need ___ reports from last week.", a:"I need their reports from last week."},
          {q:"That is ___ car.", a:"That is our car."},
          {q:"The victory is ___.", a:"The victory is ours."},
          {q:"___ love us.", a:"They love us."}
        ]
      }
    ],
    vocabulary: [
      {word:"they",       translation:"eles/elas — sujeito",           phonetic:"/dhei/"},
      {word:"them",       translation:"eles/elas — objeto",            phonetic:"/dhem/"},
      {word:"their",      translation:"deles/delas — possessivo",      phonetic:"/dher/"},
      {word:"theirs",     translation:"deles/delas — pronome",         phonetic:"/dherz/"},
      {word:"us",         translation:"nos — objeto",                  phonetic:"/as/"},
      {word:"our",        translation:"nosso/nossa — possessivo",      phonetic:"/aur/"},
      {word:"ours",       translation:"nosso/nossa — pronome",         phonetic:"/aurz/"},
      {word:"it sounds",  translation:"parece / soa",                  phonetic:"/it saundz/"},
      {word:"report",     translation:"relatorio",                     phonetic:"/ripOrt/"},
      {word:"send",       translation:"enviar",                        phonetic:"/send/"}
    ]
  },

  {
    number: 2,
    title: "Present + To Be + Do/Does",
    focus: "Revisar o presente simples completo: To Be, Do/Does para perguntas e negativas.",
    pdfs: [], audios: [{label:"Pronuncia — enviado pelo WhatsApp", url:""}], links: [], videos: [],
    exercises: [
      "Escreva 3 perguntas com DO/DOES sobre seu trabalho",
      "Transforme: 'He works with them.' → pergunta e negativa",
      "Complete: ___ you understand? / She ___ speak English. / What ___ that mean?"
    ],
    notes: [
      "TO BE → I am | You are | He/She/It is | We are | They are",
      "DO/DOES → auxiliar para perguntas e negativas com verbos de acao",
      "DO → I, You, We, They | DOES → He, She, It",
      "What do you mean? / What does that mean? / Sorry, I don't understand.",
      "I mean = eu quero dizer | Mean = significa / maldade",
      "Can you reformulate what you said so I can understand you?",
      "KIND = gentil | KIND OF = tipo assim / meio que | DUMB = burro"
    ],
    classwork: [
      {
        title: "Atividade — Do, Does ou To Be?",
        instruction: "Complete com a forma correta.",
        items: [
          {q:"What ___ that mean?",                   a:"What does that mean?"},
          {q:"___ you understand me?",                a:"Do you understand me?"},
          {q:"She ___ not speak English yet.",        a:"She does not speak English yet."},
          {q:"What ___ you mean by that?",            a:"What do you mean by that?"},
          {q:"He ___ kind of funny.",                 a:"He is kind of funny."},
          {q:"___ he work on your project?",          a:"Does he work on your project?"},
          {q:"You ___ mean. That was not okay.",      a:"You are mean. That was not okay."}
        ]
      }
    ],
    vocabulary: [
      {word:"mean",         translation:"significa / maldade",          phonetic:"/min/"},
      {word:"I mean",       translation:"eu quero dizer",               phonetic:"/ai min/"},
      {word:"what do you mean", translation:"o que voce quer dizer?",   phonetic:"/wot du yu min/"},
      {word:"kind",         translation:"gentil / tipo",                phonetic:"/kaind/"},
      {word:"kind of",      translation:"meio que / tipo assim",        phonetic:"/kaind ov/"},
      {word:"dumb",         translation:"burro / mudo",                 phonetic:"/dam/"},
      {word:"reformulate",  translation:"reformular",                   phonetic:"/reformiuleit/"},
      {word:"understand",   translation:"entender",                     phonetic:"/anderstand/"}
    ]
  },

  {
    number: 3,
    title: "Past Simple: To Be (was/were)",
    focus: "Falar sobre situacoes passadas usando was e were com confianca.",
    pdfs: [], audios: [{label:"Pronuncia — enviado pelo WhatsApp", url:""}], links: [], videos: [],
    exercises: [
      "Escreva 3 frases sobre a semana passada usando was/were",
      "Transforme em negativa: I was sad. / We were close. / She was at work.",
      "Traduza: Ontem foi estressante. / Ele era meu amigo. / Voce era meu melhor funcionario."
    ],
    notes: [
      "PASSADO DO TO BE → I was | You were | He was | She was | It was | We were | You were | They were",
      "I am → I was | You are → You were | He is → He was",
      "Negativa → I was not (wasn't) | You were not (weren't) | He was not (wasn't)",
      "He was my friend but when I needed him, he wasn't there.",
      "You were my best employee. I don't know what happened to you.",
      "LAST = ultima/ultimo | NEXT = proxima/proximo",
      "Yesterday was stressful because I was practicing my English.",
      "HAPPENED = aconteceu — What happened? / I don't know what happened."
    ],
    classwork: [
      {
        title: "Atividade — Was ou Were?",
        instruction: "Complete com was ou were.",
        items: [
          {q:"I ___ at Guilherme's house last week.",  a:"I was at Guilherme's house last week."},
          {q:"We ___ close back then.",                a:"We were close back then."},
          {q:"She ___ sad yesterday.",                 a:"She was sad yesterday."},
          {q:"You ___ my best employee.",              a:"You were my best employee."},
          {q:"They ___ hungry after the meeting.",     a:"They were hungry after the meeting."},
          {q:"Yesterday ___ stressful.",               a:"Yesterday was stressful."},
          {q:"He ___ my friend but he wasn't there.",  a:"He was my friend but he wasn't there."}
        ]
      }
    ],
    vocabulary: [
      {word:"was",       translation:"era / estava — I, He, She, It",    phonetic:"/woz/"},
      {word:"were",      translation:"eram / estavam — You, We, They",   phonetic:"/wer/"},
      {word:"wasn't",    translation:"nao era / nao estava",             phonetic:"/woznt/"},
      {word:"weren't",   translation:"nao eram / nao estavam",           phonetic:"/wernt/"},
      {word:"last week", translation:"semana passada",                   phonetic:"/last wik/"},
      {word:"happened",  translation:"aconteceu",                        phonetic:"/hapend/"},
      {word:"stressful", translation:"estressante",                      phonetic:"/stresFUL/"},
      {word:"close",     translation:"proximo / intimo",                 phonetic:"/klous/"},
      {word:"hungry",    translation:"com fome",                         phonetic:"/hangri/"},
      {word:"angry",     translation:"com raiva",                        phonetic:"/angri/"}
    ]
  },

  {
    number: 4,
    title: "Past Simple: Regular & Irregular Verbs",
    focus: "Contar historias no passado usando verbos regulares e irregulares.",
    pdfs: [], audios: [{label:"Pronuncia — enviado pelo WhatsApp", url:""}], links: [], videos: [],
    exercises: [
      "Escreva uma historia de 5 frases sobre ontem usando verbos no passado",
      "Complete: I ___ to the mall and then I ___ to the school. (go/walk)",
      "Transforme: I drink → / I eat → / I speak → / I say → / I go →"
    ],
    notes: [
      "REGULARES: adiciona -ED | like→liked | love→loved | watch→watched | develop→developed | want→wanted | try→tried | hate→hated",
      "IRREGULARES mais usados:",
      "go→went | eat→ate | drink→drank | say→said | speak→spoke | keep→kept | read→read | hurt→hurt",
      "I went to the mall and then I walked to the school.",
      "I drank water and when I was eating the cake my mom called me.",
      "AND THEN = e entao / depois | WHEN = quando",
      "He watched that TV show once. / I said to her: she needs to stop seeing him.",
      "DRUNK = bebado (adjetivo) | DRANK = bebi (verbo passado)"
    ],
    classwork: [
      {
        title: "Atividade — Passado dos verbos",
        instruction: "Escreva o passado dos verbos abaixo.",
        items: [
          {q:"go →",      a:"went"},
          {q:"eat →",     a:"ate"},
          {q:"drink →",   a:"drank"},
          {q:"say →",     a:"said"},
          {q:"speak →",   a:"spoke"},
          {q:"develop →", a:"developed"},
          {q:"watch →",   a:"watched"},
          {q:"keep →",    a:"kept"}
        ]
      },
      {
        title: "Atividade — Complete a historia",
        instruction: "Complete com o passado correto dos verbos entre parenteses.",
        items: [
          {q:"Yesterday I ___ to the mall. (go)",               a:"Yesterday I went to the mall."},
          {q:"Then I ___ to the school. (walk)",                a:"Then I walked to the school."},
          {q:"I ___ water on the way. (drink)",                 a:"I drank water on the way."},
          {q:"When I ___ the cake, my mom called me. (eat)",    a:"When I was eating the cake, my mom called me."},
          {q:"I ___ to her about the project. (speak)",         a:"I spoke to her about the project."}
        ]
      }
    ],
    vocabulary: [
      {word:"went",      translation:"fui / foi — passado de go",      phonetic:"/went/"},
      {word:"ate",       translation:"comi / comeu — passado de eat",  phonetic:"/eit/"},
      {word:"drank",     translation:"bebi / bebeu — passado de drink",phonetic:"/drank/"},
      {word:"said",      translation:"disse — passado de say",         phonetic:"/sed/"},
      {word:"spoke",     translation:"falei — passado de speak",       phonetic:"/spok/"},
      {word:"kept",      translation:"mantive — passado de keep",      phonetic:"/kept/"},
      {word:"and then",  translation:"e entao / depois",               phonetic:"/and dhen/"},
      {word:"when",      translation:"quando",                         phonetic:"/wen/"},
      {word:"once",      translation:"uma vez",                        phonetic:"/wans/"},
      {word:"drunk",     translation:"bebado — adjetivo",              phonetic:"/drank/"}
    ]
  },

  {
    number: 5,
    title: "Past Continuous + Going to",
    focus: "Descrever acoes em progresso no passado e falar sobre planos futuros.",
    pdfs: [], audios: [{label:"Pronuncia — enviado pelo WhatsApp", url:""}], links: [], videos: [],
    exercises: [
      "Escreva 3 frases com Past Continuous sobre ontem",
      "Complete: I ___ driving when the car hit me. / She ___ studying when he called.",
      "Traduza: Vou entregar o produto. / Estou indo para a casa da minha mae. / Vou ao shopping."
    ],
    notes: [
      "PAST CONTINUOUS → was/were + verbo-ING — acao em progresso no passado",
      "I was walking to school. / I was driving to the groceries.",
      "Interrupcao: I was driving WHEN the car hit me. (quando algo interrompeu)",
      "I drank water and WHEN I was eating the cake, my mom called me.",
      "GOING TO → plano / intencao → I am going to / I'm gonna (informal)",
      "I'm going to deliver the product.",
      "I'm going to the mall. / I am going to my mother's house.",
      "I am BACK (correto) vs I go back (incorreto para dizer 'estou de volta')"
    ],
    classwork: [
      {
        title: "Atividade — Past Continuous",
        instruction: "Complete com was/were + verbo-ING.",
        items: [
          {q:"I ___ ___ to school when I saw him. (walk)",        a:"I was walking to school when I saw him."},
          {q:"She ___ ___ when her phone rang. (study)",          a:"She was studying when her phone rang."},
          {q:"They ___ ___ about the project. (talk)",            a:"They were talking about the project."},
          {q:"I ___ ___ to the groceries when the car hit me. (drive)", a:"I was driving to the groceries when the car hit me."},
          {q:"When I ___ ___ the cake, my mom called. (eat)",     a:"When I was eating the cake, my mom called."}
        ]
      },
      {
        title: "Atividade — Going to",
        instruction: "Traduza usando I'm going to.",
        items: [
          {q:"Vou entregar o produto.",             a:"I'm going to deliver the product."},
          {q:"Vou ao shopping.",                    a:"I'm going to the mall."},
          {q:"Vou para a casa da minha mae.",       a:"I am going to my mother's house."},
          {q:"Eles vao enviar o relatorio.",        a:"They are going to send the report."}
        ]
      }
    ],
    vocabulary: [
      {word:"was walking",   translation:"estava caminhando",           phonetic:"/woz woking/"},
      {word:"was driving",   translation:"estava dirigindo",            phonetic:"/woz draivin/"},
      {word:"was eating",    translation:"estava comendo",              phonetic:"/woz iting/"},
      {word:"going to",      translation:"vai / vou — intencao futura", phonetic:"/going tu/"},
      {word:"gonna",         translation:"going to — informal",         phonetic:"/gona/"},
      {word:"deliver",       translation:"entregar",                    phonetic:"/diLIver/"},
      {word:"I am back",     translation:"estou de volta",              phonetic:"/ai am bak/"},
      {word:"interrupt",     translation:"interromper",                 phonetic:"/interRAPt/"}
    ]
  },

  {
    number: 6,
    title: "Irregular Verbs + Expressions",
    focus: "Dominar os principais irregulares e expressoes essenciais do dia a dia.",
    pdfs: [], audios: [{label:"Pronuncia — enviado pelo WhatsApp", url:""}], links: [], videos: [],
    exercises: [
      "Escreva o passado de: tell, do, forget, speak, love, break, make, come",
      "Use 'what do you mean' e 'kind of' em 2 frases cada",
      "Conte o que aconteceu na semana passada em 5 frases no passado"
    ],
    notes: [
      "IRREGULARES ESSENCIAIS:",
      "tell→told | do→did | forget→forgot | speak→spoke | love→loved | like→liked",
      "hate→hated | try→tried | break→broke | make→made | want→wanted | come→came",
      "WHAT DO YOU MEAN? = O que voce quer dizer?",
      "WHAT DOES THAT MEAN? = O que isso significa?",
      "I MEAN = eu quero dizer — usado para explicar/clarificar",
      "KIND OF = tipo assim / meio que | EACH OTHER DAY = um dia sim um dia nao",
      "My team WON so that MADE me happy.",
      "This project MADE me develop an amazing skill.",
      "I HAD two job replies. / Yesterday WAS stressful."
    ],
    classwork: [
      {
        title: "Atividade — Passado dos irregulares",
        instruction: "Escreva o passado simples.",
        items: [
          {q:"tell →",   a:"told"},
          {q:"do →",     a:"did"},
          {q:"forget →", a:"forgot"},
          {q:"break →",  a:"broke"},
          {q:"make →",   a:"made"},
          {q:"come →",   a:"came"},
          {q:"win →",    a:"won"},
          {q:"have →",   a:"had"}
        ]
      },
      {
        title: "Atividade — Expressoes no contexto",
        instruction: "Complete as frases com a expressao correta.",
        items: [
          {q:"Sorry, I don't understand. ___ you ___?",                  a:"What do you mean?"},
          {q:"He is ___ ___ lazy. Not completely, but a bit.",           a:"He is kind of lazy."},
          {q:"My team ___ so that ___ me very happy. (win/make)",        a:"My team won so that made me very happy."},
          {q:"This project ___ me develop an amazing skill. (make)",     a:"This project made me develop an amazing skill."},
          {q:"I ___ two job replies last week. (have)",                  a:"I had two job replies last week."}
        ]
      }
    ],
    vocabulary: [
      {word:"told",    translation:"disse/contou — passado de tell",  phonetic:"/told/"},
      {word:"did",     translation:"fiz/fez — passado de do",         phonetic:"/did/"},
      {word:"forgot",  translation:"esqueci — passado de forget",     phonetic:"/forGOT/"},
      {word:"broke",   translation:"quebrei — passado de break",      phonetic:"/brok/"},
      {word:"made",    translation:"fiz/fez — passado de make",       phonetic:"/meid/"},
      {word:"came",    translation:"vim/veio — passado de come",      phonetic:"/keim/"},
      {word:"won",     translation:"ganhei — passado de win",         phonetic:"/wan/"},
      {word:"had",     translation:"tive/tinha — passado de have",    phonetic:"/had/"},
      {word:"each other day", translation:"um dia sim um dia nao",    phonetic:"/itch adher dei/"},
      {word:"kind of", translation:"tipo assim / meio que",           phonetic:"/kaind ov/"}
    ]
  },

  {
    number: 7,
    title: "Full Review + Producao",
    focus: "Juntar tudo e produzir textos completos sobre seu trabalho e experiencias.",
    pdfs: [], audios: [{label:"Pronuncia — enviado pelo WhatsApp", url:""}], links: [], videos: [],
    exercises: [
      "Escreva um paragrafo de 8 frases contando sobre seu projeto — use presente E passado",
      "Descreva sua semana passada em 5 frases (was/were + past simple + past continuous)",
      "Escreva 3 frases sobre seus planos usando going to"
    ],
    notes: [
      "PRESENTE: I develop, He develops, She sounds, They work",
      "PASSADO SIMPLES: I developed, He went, She made, They told",
      "PASSADO CONTINUO: I was developing, He was working",
      "GOING TO: I am going to present, They are going to send",
      "Conectores: AND THEN / WHEN / BECAUSE / BUT / SO / LAST / NEXT",
      "The project develops home schools for African kids.",
      "The project developed a good management system.",
      "This project made me develop an amazing skill.",
      "Yesterday was stressful because I was practicing my English.",
      "My team won so that made me happy. I had two job replies."
    ],
    classwork: [
      {
        title: "Atividade — Presente ou Passado?",
        instruction: "Complete com o tempo verbal correto.",
        items: [
          {q:"The project ___ home schools for African kids. (present)",         a:"The project develops home schools for African kids."},
          {q:"The project ___ a good management system. (past)",                 a:"The project developed a good management system."},
          {q:"Yesterday I ___ at Guilherme's house. (past be)",                  a:"Yesterday I was at Guilherme's house."},
          {q:"I ___ two job replies last week. (past have)",                     a:"I had two job replies last week."},
          {q:"This project ___ me develop an amazing skill. (past make)",        a:"This project made me develop an amazing skill."},
          {q:"My team ___. That ___ me happy. (past win / past make)",           a:"My team won. That made me happy."},
          {q:"I am ___ ___ present the project next week. (going to)",           a:"I am going to present the project next week."}
        ]
      }
    ],
    vocabulary: [
      {word:"develop",    translation:"desenvolver",                  phonetic:"/diVElop/"},
      {word:"developed",  translation:"desenvolveu — passado",        phonetic:"/diVElopted/"},
      {word:"management", translation:"gestao / gerenciamento",       phonetic:"/MANidjment/"},
      {word:"skill",      translation:"habilidade",                   phonetic:"/skil/"},
      {word:"amazing",    translation:"incrivel",                     phonetic:"/aMEIzing/"},
      {word:"victory",    translation:"vitoria",                      phonetic:"/VIKtori/"},
      {word:"reply",      translation:"resposta / responder",         phonetic:"/riPLAI/"},
      {word:"ahead",      translation:"a frente / adiante",           phonetic:"/aHED/"},
      {word:"step",       translation:"passo / etapa",                phonetic:"/step/"},
      {word:"because",    translation:"porque",                       phonetic:"/biKOZ/"}
    ]
  }
];

var CW_ANSWERS = {};

function openDaily() {
  var overlay=document.getElementById("dailyOverlay");
  var body=document.getElementById("dailyBody");
  var dateEl=document.getElementById("dailyDate");
  dateEl.textContent=DAILY.date;
  if(PLAN!=="Fluency"){
    body.innerHTML='<div class="daily-locked"><span class="daily-lock-icon">🔒</span><h3>Conteudo Fluency</h3><p>O Daily Content e exclusivo para alunos do plano <strong>Fluency</strong>.</p><p>Fale com a Yas para fazer o upgrade! ✦</p></div>';
  } else {
    var html='<div class="daily-text-wrap"><h3 class="res-title">Texto de hoje</h3><div class="daily-text">'+DAILY.text+'</div></div><div class="daily-questions-wrap"><h3 class="res-title" style="margin-top:24px">Exercicios</h3><div class="daily-questions">';
    DAILY.questions.forEach(function(q,qi){
      html+='<div class="daily-q" id="q'+qi+'"><p class="daily-q-text"><strong>'+(qi+1)+'.</strong> '+q.question+'</p><div class="daily-options">';
      q.options.forEach(function(opt){html+='<button class="daily-opt" id="q'+qi+'-'+opt.letter+'" onclick="checkAnswer('+qi+',\''+opt.letter+'\',\''+q.answer+'\')"><span class="opt-letter">'+opt.letter+'</span><span class="opt-text">'+opt.text+'</span></button>';});
      html+='</div><p class="daily-feedback" id="feedback'+qi+'"></p></div>';
    });
    html+='</div><div class="daily-action-btns"><button class="daily-reset-btn" onclick="openDaily()">Recomecar ↺</button><button class="daily-back-btn" onclick="closeDaily()">Voltar ao menu ←</button></div></div>';
    body.innerHTML=html;
  }
  overlay.classList.add("open");
  document.body.style.overflow="hidden";
}

function checkAnswer(qi,chosen,correct){
  var opts=document.querySelectorAll("#q"+qi+" .daily-opt");
  opts.forEach(function(b){b.disabled=true;});
  document.getElementById("q"+qi+"-"+chosen).classList.add(chosen===correct?"correct":"wrong");
  if(chosen!==correct)document.getElementById("q"+qi+"-"+correct).classList.add("correct");
  var fb=document.getElementById("feedback"+qi);
  if(chosen===correct){fb.textContent="✦ Correct!";fb.className="daily-feedback feedback-correct";}
  else{fb.textContent="The correct answer is "+correct.toUpperCase()+".";fb.className="daily-feedback feedback-wrong";}
}

function closeDaily(){document.getElementById("dailyOverlay").classList.remove("open");document.body.style.overflow="";}
document.getElementById("dailyOverlay").addEventListener("click",function(e){if(e.target===this)closeDaily();});

function speakWord(word,btn){
  if(!window.speechSynthesis)return;
  window.speechSynthesis.cancel();
  var u=new SpeechSynthesisUtterance(word);
  u.lang="en-US";u.rate=0.85;
  if(btn){btn.classList.add("speaking");u.onend=function(){btn.classList.remove("speaking");};u.onerror=function(){btn.classList.remove("speaking");};}
  window.speechSynthesis.speak(u);
}

function hasContent(arr){return Array.isArray(arr)&&arr.filter(function(i){return i&&i.label;}).length>0;}

function renderGrid(){
  var grid=document.getElementById("weeksGrid");var html="";
  WEEKS.forEach(function(w,i){
    var icons="";
    if(hasContent(w.pdfs))icons+='<span class="ricon ricon-pdf">P</span>';
    if(hasContent(w.audios))icons+='<span class="ricon ricon-audio">A</span>';
    if(hasContent(w.exercises))icons+='<span class="ricon ricon-exercise">E</span>';
    if(hasContent(w.links))icons+='<span class="ricon ricon-link">L</span>';
    if(hasContent(w.videos))icons+='<span class="ricon ricon-video">V</span>';
    if(w.vocabulary&&w.vocabulary.length)icons+='<span class="ricon ricon-vocab">W</span>';
    html+='<article class="week-card" onclick="openModal('+i+')" tabindex="0"><div class="card-head"><p class="card-number">Semana '+w.number+'</p><h2 class="card-title">'+w.title+'</h2></div><div class="card-body"><div class="card-icons">'+icons+'</div><div class="card-cta"><span>Ver material</span><span class="card-cta-arrow">→</span></div></div></article>';
  });
  grid.innerHTML=html;
}

function openModal(index){
  var w=WEEKS[index];
  document.getElementById("modalWeekLabel").textContent="Semana "+w.number;
  document.getElementById("modalTitle").textContent=w.title;
  document.getElementById("modalFocus").textContent=w.focus||"";
  document.getElementById("modalBody").innerHTML=
    renderPdfs(w.pdfs)+renderExercises(w.exercises)+renderAudios(w.audios)+
    renderLinks(w.links)+renderVideos(w.videos)+renderNotes(w.notes)+
    renderClasswork(w.classwork)+renderVocabulary(w.vocabulary)+
    '<div class="yas-tip"><strong>Dica da YV</strong>Pratique todos os dias um pouco. Consistencia e o que te leva a fluencia. ✦</div>';
  document.getElementById("overlay").classList.add("open");
  document.body.style.overflow="hidden";
}

function closeModal(){if(window.speechSynthesis)window.speechSynthesis.cancel();document.getElementById("overlay").classList.remove("open");document.body.style.overflow="";}

function renderPdfs(p){var items=(p||[]).filter(function(x){return x.label;});if(!items.length)return"";var h='<div class="resource-section"><h3 class="res-title">PDFs</h3><div class="res-list">';items.forEach(function(x){h+='<div class="res-item"><span class="res-item-label">'+x.label+'</span><div class="res-actions"><a href="'+x.url+'" target="_blank" class="btn-open">Abrir ↗</a><a href="'+x.url+'" download class="btn-download">Baixar</a></div></div>';});return h+'</div></div>';}
function renderExercises(e){var items=(e||[]).filter(Boolean);if(!items.length)return"";var h='<div class="resource-section"><h3 class="res-title">Exercicios</h3><ul class="exercise-list">';items.forEach(function(x){h+='<li>'+x+'</li>';});return h+'</ul></div>';}
function renderAudios(a){var items=(a||[]).filter(function(x){return x.label;});if(!items.length)return"";var h='<div class="resource-section"><h3 class="res-title">Audios</h3><div class="res-list">';items.forEach(function(x){if(x.url){h+='<div class="res-item audio-item"><span class="res-item-label">'+x.label+'</span><audio controls preload="none"><source src="'+x.url+'"></audio></div>';}else{h+='<div class="res-item"><span class="res-item-label">'+x.label+'</span><span class="via-whatsapp">via WhatsApp</span></div>';}});return h+'</div></div>';}
function renderLinks(l){var items=(l||[]).filter(function(x){return x.label;});if(!items.length)return"";var h='<div class="resource-section"><h3 class="res-title">Links</h3><div class="res-list">';items.forEach(function(x){h+='<div class="res-item"><span class="res-item-label">'+x.label+'</span><div class="res-actions"><a href="'+x.url+'" target="_blank" class="btn-open">Abrir ↗</a></div></div>';});return h+'</div></div>';}
function renderVideos(v){var items=(v||[]).filter(function(x){return x.label;});if(!items.length)return"";var h='<div class="resource-section"><h3 class="res-title">Videos</h3><div class="res-list">';items.forEach(function(x){h+='<div class="res-item"><span class="res-item-label">'+x.label+'</span><div class="res-actions"><a href="'+x.url+'" target="_blank" class="btn-open">Assistir ↗</a></div></div>';});return h+'</div></div>';}
function renderNotes(n){var items=(n||[]).filter(Boolean);if(!items.length)return"";var h='<div class="resource-section"><h3 class="res-title">Notas da Aula</h3><ul class="notes-list">';items.forEach(function(x){h+='<li>'+x+'</li>';});return h+'</ul></div>';}

function renderClasswork(classwork){
  var sections=(classwork||[]).filter(function(s){return s.title;});
  if(!sections.length)return"";
  var html="";
  sections.forEach(function(section,si){
    html+='<div class="resource-section"><h3 class="res-title">'+section.title+'</h3><p class="classwork-instruction">'+section.instruction+'</p><div class="classwork-list">';
    section.items.forEach(function(item,ii){
      var key="cw_"+si+"_"+ii;
      CW_ANSWERS[key]=item.a;
      html+='<div class="classwork-item"><p class="classwork-q"><strong>'+(ii+1)+'.</strong> '+item.q+'</p><button class="classwork-reveal-btn" onclick="revealAnswer(this,\''+key+'\')">Ver resposta</button><p class="classwork-answer" id="'+key+'" style="display:none"></p></div>';
    });
    html+='</div></div>';
  });
  return html;
}

function revealAnswer(btn,key){var el=document.getElementById(key);if(el){el.textContent=CW_ANSWERS[key]||"";el.style.display="block";}btn.style.display="none";}

function renderVocabulary(vocabulary){
  var items=(vocabulary||[]).filter(function(v){return v.word;});
  if(!items.length)return"";
  window._vocabWords=[];
  var html='<div class="resource-section"><h3 class="res-title">Vocabulario</h3><div class="vocab-grid">';
  items.forEach(function(v,i){
    window._vocabWords[i]=v.word;
    html+='<div class="vocab-card" tabindex="0" onclick="this.classList.toggle(\'flipped\')"><div class="vocab-front"><button class="vocab-speak-btn" onclick="event.stopPropagation();speakVocab('+i+',this)" title="Ouvir">🔊</button><div class="vocab-front-inner"><span class="vocab-word">'+v.word+'</span>'+(v.phonetic?'<span class="vocab-phonetic">'+v.phonetic+'</span>':'')+'</div><span class="vocab-hint">toque para ver</span></div><div class="vocab-back"><span class="vocab-translation">'+v.translation+'</span></div></div>';
  });
  return html+'</div></div>';
}

function speakVocab(i,btn){if(window._vocabWords&&window._vocabWords[i])speakWord(window._vocabWords[i],btn);}

function buildGlossaryHTML(){
  var all=[];
  WEEKS.forEach(function(w){(w.vocabulary||[]).filter(function(v){return v.word;}).forEach(function(v){all.push({word:v.word,translation:v.translation,phonetic:v.phonetic,week:w.number});});});
  if(!all.length)return'<p class="glossary-empty">O glossario vai aparecer aqui conforme as semanas forem avancando. ✦</p>';
  window._glossWords=[];
  var html="";
  all.forEach(function(v,i){window._glossWords[i]=v.word;html+='<div class="glossary-row"><span class="glos-word">'+v.word+'</span><span class="glos-trans">'+v.translation+(v.phonetic?' <span class="glos-phonetic">'+v.phonetic+'</span>':'')+'</span><button class="glos-speak" onclick="speakGloss('+i+',this)" title="Ouvir">🔊</button><span class="glos-week-badge">Sem. '+v.week+'</span></div>';});
  return html;
}

function speakGloss(i,btn){if(window._glossWords&&window._glossWords[i])speakWord(window._glossWords[i],btn);}

var glossaryOpen=false;
function toggleGlossary(){
  var section=document.getElementById("glossarySection");
  var cta=document.getElementById("glossaryBtnCta");
  if(!section)return;
  glossaryOpen=!glossaryOpen;
  if(glossaryOpen){if(!section.innerHTML.trim())section.innerHTML=buildGlossaryHTML();section.style.display="block";if(cta)cta.textContent="Fechar ↑";setTimeout(function(){section.scrollIntoView({behavior:"smooth",block:"start"});},80);}
  else{section.style.display="none";if(cta)cta.textContent="Ver palavras →";}
}

function renderGlossary(){}

document.getElementById("overlay").addEventListener("click",function(e){if(e.target===this)closeModal();});
document.addEventListener("keydown",function(e){if(e.key==="Escape")closeModal();});
var touchStartY=0;
document.addEventListener("touchstart",function(e){touchStartY=e.touches[0].clientY;},{passive:true});
document.addEventListener("touchmove",function(e){if(document.getElementById("overlay").classList.contains("open")){if(e.touches[0].clientY-touchStartY>100)closeModal();}},{passive:true});

renderGrid();
renderGlossary();
