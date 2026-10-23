(() => {
  const $ = (s) => document.querySelector(s);
  const form = $("#chatForm"), input = $("#prompt"), messages = $("#messages");
  const welcome = $("#welcome"), historyBox = $("#history");
  const STORE = "soma-ai-web-conversations-v1";
  let chats = readChats(), activeId = null;

  function readChats(){ try { const v=JSON.parse(localStorage.getItem(STORE)||"[]"); return Array.isArray(v)?v:[]; } catch { return []; } }
  function save(){ try { localStorage.setItem(STORE,JSON.stringify(chats)); } catch {} }
  function makeId(){ return Date.now().toString(36)+Math.random().toString(36).slice(2,7); }
  function active(){ return chats.find(c=>c.id===activeId); }
  function newChat(){ activeId=null; messages.innerHTML=""; welcome.hidden=false; $("#currentTitle").textContent="Nova conversa"; renderHistory(); input.focus(); if(innerWidth<=760) $("#sidebar").classList.remove("open"); }
  function renderHistory(){
    historyBox.innerHTML="";
    if(!chats.length){ const e=document.createElement("div");e.className="empty-history";e.textContent="Suas conversas aparecerão aqui.";historyBox.append(e);return; }
    chats.slice().reverse().forEach(c=>{const b=document.createElement("button");b.className="history-item"+(c.id===activeId?" active":"");b.innerHTML="<span>◷</span>";const t=document.createElement("span");t.textContent=c.title||"Nova conversa";t.style.overflow="hidden";t.style.textOverflow="ellipsis";b.append(t);b.onclick=()=>loadChat(c.id);historyBox.append(b);});
  }
  function loadChat(id){const c=chats.find(x=>x.id===id);if(!c)return;activeId=id;messages.innerHTML="";welcome.hidden=true;c.messages.forEach(m=>addMessage(m.role,m.text,false));$("#currentTitle").textContent=c.title;renderHistory();if(innerWidth<=760)$("#sidebar").classList.remove("open");}
  function addMessage(role,text,shouldScroll=true){
    const wrap=document.createElement("article");wrap.className="message "+role;
    if(role==="assistant"){const label=document.createElement("div");label.className="message-label";label.textContent="◆  SOMA AI";wrap.append(label);}
    const bubble=document.createElement("div");bubble.className="bubble";bubble.textContent=text;wrap.append(bubble);
    if(role==="assistant"){const copy=document.createElement("button");copy.className="copy-btn";copy.textContent="Copiar resposta";copy.onclick=async()=>{try{await navigator.clipboard.writeText(text);copy.textContent="Copiado!";setTimeout(()=>copy.textContent="Copiar resposta",1300)}catch{copy.textContent="Selecione e copie o texto"}};wrap.append(copy);}
    messages.append(wrap);if(shouldScroll)wrap.scrollIntoView({behavior:"smooth",block:"nearest"});return wrap;
  }
  function demoReply(prompt){
    const p=prompt.toLowerCase();
    if(p.includes("roblox")||p.includes("luau")||p.includes("script"))return "Posso ajudar a estruturar seu sistema Roblox, explicar Luau e revisar scripts.\n\nPara começar bem, descreva o que o sistema precisa fazer e a hierarquia dos objetos no Explorer. Quando conectarmos um modelo de IA ao site, ele poderá gerar respostas de forma dinâmica.\n\nDica: envie o script atual e a mensagem de erro completa para uma análise mais precisa.";
    if(p.includes("site")||p.includes("web"))return "Podemos dividir o site em três partes:\n\n1. Interface responsiva (HTML/CSS).\n2. Lógica do navegador (JavaScript).\n3. Backend seguro para conectar um provedor de IA sem expor chaves secretas.\n\nEsta versão já demonstra a interface e salva conversas neste navegador. A geração real de respostas ainda precisa do backend.";
    if(p.includes("ideia")||p.includes("etapas"))return "Vamos transformar sua ideia em um plano simples:\n\n1. Definir o resultado desejado.\n2. Separar o projeto em partes pequenas.\n3. Construir uma primeira versão funcional.\n4. Testar, corrigir e melhorar.\n\nEscreva a ideia em uma frase e podemos organizar as etapas.";
    return "Recebi sua mensagem. Esta versão do SOMA AI já tem a interface de chat, histórico local e botão para copiar respostas.\n\nImportante: o site ainda está em modo de demonstração; esta resposta é um texto local, não uma resposta gerada por um modelo de IA. Para conversar livremente com IA, precisamos conectar um backend e um provedor de modelo.";
  }
  function send(text){
    text=(text||"").trim();if(!text)return;
    welcome.hidden=true;
    if(!activeId){const c={id:makeId(),title:text.length>32?text.slice(0,32)+"…":text,messages:[]};chats.push(c);activeId=c.id;}
    const c=active();if(!c)return;
    c.messages.push({role:"user",text});addMessage("user",text);input.value="";input.style.height="auto";
    const reply=demoReply(text);c.messages.push({role:"assistant",text:reply});addMessage("assistant",reply);save();$("#currentTitle").textContent=c.title;renderHistory();
  }
  form.addEventListener("submit",e=>{e.preventDefault();send(input.value);});
  input.addEventListener("input",()=>{input.style.height="auto";input.style.height=Math.min(input.scrollHeight,180)+"px";});
  input.addEventListener("keydown",e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();send(input.value);}});
  $("#newChat").onclick=newChat;
  $("#openSidebar").onclick=()=>$("#sidebar").classList.add("open");
  $("#closeSidebar").onclick=()=>$("#sidebar").classList.remove("open");
  document.querySelectorAll(".suggestion").forEach(b=>b.addEventListener("click",()=>send(b.dataset.prompt)));
  renderHistory();
})();