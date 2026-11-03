/* Hospital Desk — staff portal logic (talks to /api on the same server) */
const TX = {
  en:{appName:'Hospital Desk',appSub:'Dhule Health Connect · Staff portal',loginTitle:'Hospital sign in',loginSub:'Manage patient appointment requests for your hospital.',hospital:'Hospital',password:'Password',signIn:'Sign in',logout:'Logout',
    live:'Live · auto-refreshing',search:'Search name / phone / ref…',pending:'Pending',accepted:'Accepted',rejected:'Rejected',all:'All',total:'Total requests',
    patient:'Patient',phone:'Phone',specialty:'Specialty',when:'Preferred slot',requested:'Requested',any:'Any department',accept:'Accept',reject:'Reject',call:'Call patient',
    replyAccept:'Message to patient (optional) — e.g. "Come at 10:30, OPD room 4"',replyReject:'Reason for the patient (optional) — e.g. "Doctor not available that day"',confirmAccept:'Confirm accept',confirmReject:'Confirm reject',cancel:'Cancel',
    reopen:'Move back to pending',yourNote:'Your message',noItems:'No appointments here yet.',newReq:'New appointment request received!',okAccept:'Appointment accepted — patient will see it on their dashboard.',okReject:'Appointment rejected — patient has been notified.',
    modeLocal:'Demo mode: works without a server — open the patient app in the SAME browser.',modeServer:'Connected to the hospital server.',badLogin:'Wrong hospital or password.',net:'Cannot reach the server. Is it running?',sessionEnd:'Session expired. Please sign in again.',sound:'Alert sound',working:'Please wait…'},
  hi:{appName:'हॉस्पिटल डेस्क',appSub:'धुले हेल्थ कनेक्ट · स्टाफ पोर्टल',loginTitle:'अस्पताल साइन इन',loginSub:'अपने अस्पताल के मरीज़ अपॉइंटमेंट अनुरोध संभालें।',hospital:'अस्पताल',password:'पासवर्ड',signIn:'साइन इन',logout:'लॉगआउट',
    live:'लाइव · अपने-आप रिफ्रेश',search:'नाम / फ़ोन / संदर्भ खोजें…',pending:'लंबित',accepted:'स्वीकृत',rejected:'अस्वीकृत',all:'सभी',total:'कुल अनुरोध',
    patient:'मरीज़',phone:'फ़ोन',specialty:'विभाग',when:'पसंदीदा समय',requested:'अनुरोध का समय',any:'कोई भी विभाग',accept:'स्वीकार करें',reject:'अस्वीकार करें',call:'मरीज़ को कॉल करें',
    replyAccept:'मरीज़ के लिए संदेश (वैकल्पिक) — जैसे "10:30 बजे आएँ, OPD कमरा 4"',replyReject:'मरीज़ के लिए कारण (वैकल्पिक) — जैसे "उस दिन डॉक्टर उपलब्ध नहीं"',confirmAccept:'स्वीकार की पुष्टि',confirmReject:'अस्वीकार की पुष्टि',cancel:'रद्द करें',
    reopen:'वापस लंबित करें',yourNote:'आपका संदेश',noItems:'यहाँ अभी कोई अपॉइंटमेंट नहीं।',newReq:'नया अपॉइंटमेंट अनुरोध मिला!',okAccept:'अपॉइंटमेंट स्वीकार — मरीज़ को डैशबोर्ड पर दिखेगा।',okReject:'अपॉइंटमेंट अस्वीकार — मरीज़ को सूचित कर दिया गया।',
    modeLocal:'डेमो मोड: सर्वर के बिना चलता है — मरीज़ ऐप उसी ब्राउज़र में खोलें।',modeServer:'अस्पताल सर्वर से जुड़ा है।',badLogin:'गलत अस्पताल या पासवर्ड।',net:'सर्वर से संपर्क नहीं हो पा रहा। क्या वह चालू है?',sessionEnd:'सत्र समाप्त। कृपया फिर साइन इन करें।',sound:'अलर्ट ध्वनि',working:'कृपया प्रतीक्षा करें…'},
  mr:{appName:'हॉस्पिटल डेस्क',appSub:'धुळे हेल्थ कनेक्ट · स्टाफ पोर्टल',loginTitle:'रुग्णालय साइन इन',loginSub:'तुमच्या रुग्णालयाच्या रुग्णांच्या अपॉइंटमेंट विनंत्या सांभाळा.',hospital:'रुग्णालय',password:'पासवर्ड',signIn:'साइन इन',logout:'लॉगआउट',
    live:'लाइव्ह · आपोआप रिफ्रेश',search:'नाव / फोन / संदर्भ शोधा…',pending:'प्रलंबित',accepted:'स्वीकारलेल्या',rejected:'नाकारलेल्या',all:'सर्व',total:'एकूण विनंत्या',
    patient:'रुग्ण',phone:'फोन',specialty:'विभाग',when:'पसंतीची वेळ',requested:'विनंतीची वेळ',any:'कोणताही विभाग',accept:'स्वीकारा',reject:'नाकारा',call:'रुग्णाला कॉल करा',
    replyAccept:'रुग्णासाठी संदेश (ऐच्छिक) — उदा. "10:30 ला या, OPD खोली 4"',replyReject:'रुग्णासाठी कारण (ऐच्छिक) — उदा. "त्या दिवशी डॉक्टर उपलब्ध नाहीत"',confirmAccept:'स्वीकार निश्चित करा',confirmReject:'नकार निश्चित करा',cancel:'रद्द करा',
    reopen:'पुन्हा प्रलंबित करा',yourNote:'तुमचा संदेश',noItems:'येथे अजून अपॉइंटमेंट नाही.',newReq:'नवीन अपॉइंटमेंट विनंती आली!',okAccept:'अपॉइंटमेंट स्वीकारली — रुग्णाला डॅशबोर्डवर दिसेल.',okReject:'अपॉइंटमेंट नाकारली — रुग्णाला कळवले आहे.',
    modeLocal:'डेमो मोड: सर्व्हरशिवाय चालते — रुग्ण अ‍ॅप त्याच ब्राउझरमध्ये उघडा.',modeServer:'रुग्णालय सर्व्हरशी जोडले आहे.',badLogin:'चुकीचे रुग्णालय किंवा पासवर्ड.',net:'सर्व्हरशी संपर्क होत नाही. तो सुरू आहे का?',sessionEnd:'सत्र संपले. कृपया पुन्हा साइन इन करा.',sound:'अलर्ट आवाज',working:'कृपया थांबा…'}
};
const $ = id => document.getElementById(id);
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let lang = localStorage.getItem('dhc_h_lang') || localStorage.getItem('dhc_lang') || 'en';
const T = k => (TX[lang] && TX[lang][k]) || TX.en[k] || k;

const S = { token: sessionStorage.getItem('dhc_h_token') || '', hospital: null, items: [], filter: 'pending', q: '', seen: new Set(), first: true, sound: localStorage.getItem('dhc_h_sound') !== '0', timer: null, openReply: null };

/* ---------- api (DHC works with or without a server) ---------- */
async function guard(promise){
  try{ return await promise; }
  catch(e){ if(e.status === 401 && S.token){ logout(true); throw new Error('session'); } throw e; }
}

/* ---------- ui helpers ---------- */
let toastT;
function toast(msg){ const t = $('toast'); t.textContent = msg; t.classList.remove('hidden'); clearTimeout(toastT); toastT = setTimeout(() => t.classList.add('hidden'), 3600); }
function beep(){
  if(!S.sound) return;
  try{ const c = new (window.AudioContext || window.webkitAudioContext)(), o = c.createOscillator(), g = c.createGain();
    o.type = 'sine'; o.frequency.value = 880; g.gain.setValueAtTime(.18, c.currentTime); g.gain.exponentialRampToValueAtTime(.001, c.currentTime + .5);
    o.connect(g); g.connect(c.destination); o.start(); o.stop(c.currentTime + .5); }catch(e){}
}
function applyLang(){
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i]').forEach(el => el.textContent = T(el.dataset.i));
  document.querySelectorAll('[data-ph]').forEach(el => el.placeholder = T(el.dataset.ph));
  document.querySelectorAll('.lang-row button').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  $('sound-btn').title = T('sound'); $('sound-btn').classList.toggle('off', !S.sound);
  if(!$('app').classList.contains('hidden')) renderAll();
}
const fmtTime = ts => new Date(ts).toLocaleString(lang === 'en' ? 'en-IN' : (lang === 'hi' ? 'hi-IN' : 'mr-IN'), { day:'2-digit', month:'short', hour:'2-digit', minute:'2-digit' });

/* ---------- login ---------- */
async function initLogin(){
  try{
    const hs = await DHC.hospitals();
    const m = await DHC.mode();
    $('mode-note').textContent = m === 'server' ? T('modeServer') : T('modeLocal');
    $('hospital-select').innerHTML = hs.map(h => `<option value="${esc(h.id)}">${esc(h.name)}</option>`).join('');
    const last = localStorage.getItem('dhc_h_last'); if(last) $('hospital-select').value = last;
  }catch(e){ showLoginErr(T('net')); }
}
function showLoginErr(m){ const e = $('login-err'); e.textContent = m || ''; e.classList.toggle('hidden', !m); }
$('eye').addEventListener('click', () => { const i = $('password'); i.type = i.type === 'password' ? 'text' : 'password'; });
$('login-form').addEventListener('submit', async e => {
  e.preventDefault(); showLoginErr('');
  const btn = $('login-btn'); btn.disabled = true; btn.textContent = T('working');
  try{
    const r = await DHC.hospitalLogin($('hospital-select').value, $('password').value);
    S.token = r.token; S.hospital = r.hospital; sessionStorage.setItem('dhc_h_token', r.token); localStorage.setItem('dhc_h_last', r.hospital.id);
    $('password').value = ''; await startApp();
  }catch(err){ showLoginErr(err.status === 401 ? T('badLogin') : (err.status === 429 ? err.message : T('net'))); }
  btn.disabled = false; btn.textContent = T('signIn');
});

/* ---------- app ---------- */
async function startApp(){
  if(!S.hospital) S.hospital = await guard(DHC.hospitalMe(S.token));
  $('login-screen').classList.add('hidden'); $('app').classList.remove('hidden');
  $('h-name').textContent = S.hospital.name;
  S.first = true; S.seen = new Set(); S.sig = '';
  await refresh(); clearInterval(S.timer); S.timer = setInterval(refresh, 6000);
}
function logout(expired){
  clearInterval(S.timer); S.token = ''; S.hospital = null; sessionStorage.removeItem('dhc_h_token');
  $('app').classList.add('hidden'); $('login-screen').classList.remove('hidden');
  showLoginErr(expired ? T('sessionEnd') : '');
}
$('logout-btn').addEventListener('click', () => logout(false));
$('sound-btn').addEventListener('click', () => { S.sound = !S.sound; localStorage.setItem('dhc_h_sound', S.sound ? '1' : '0'); $('sound-btn').classList.toggle('off', !S.sound); if(S.sound) beep(); });
document.querySelectorAll('.lang-row button').forEach(b => b.addEventListener('click', () => { lang = b.dataset.lang; localStorage.setItem('dhc_h_lang', lang); localStorage.setItem('dhc_lang', lang); applyLang(); }));
$('search').addEventListener('input', e => { S.q = e.target.value.trim().toLowerCase(); renderList(); });

async function refresh(){
  try{
    const items = await guard(DHC.hospitalList(S.token));
    const fresh = items.filter(a => a.status === 'pending' && !S.seen.has(a.ref));
    items.forEach(a => S.seen.add(a.ref));
    if(!S.first && fresh.length){ beep(); toast('🔔 ' + T('newReq')); fresh.forEach(a => S.newRefs.add(a.ref)); }
    S.first = false;
    const sig = JSON.stringify(items);
    if(sig === S.sig){ $('live-text').textContent = T('live'); return; }   // nothing changed: don't re-render
    S.sig = sig; S.items = items;
    if(!document.activeElement || !document.activeElement.closest('.reply')) renderAll();   // don't wipe a reply being typed
    else renderStats();
  }catch(e){ if(e.message !== 'session') $('live-text').textContent = '⚠ ' + T('net'); return; }
  $('live-text').textContent = T('live');
}
S.newRefs = new Set();

function counts(){ const c = { pending:0, accepted:0, rejected:0, all:S.items.length }; S.items.forEach(a => c[a.status]++); return c; }
function renderStats(){
  const c = counts();
  $('stats').innerHTML = `
    <div class="stat pending"><div class="n">${c.pending}</div><div class="l">${T('pending')}</div></div>
    <div class="stat accepted"><div class="n">${c.accepted}</div><div class="l">${T('accepted')}</div></div>
    <div class="stat rejected"><div class="n">${c.rejected}</div><div class="l">${T('rejected')}</div></div>
    <div class="stat"><div class="n">${c.all}</div><div class="l">${T('total')}</div></div>`;
  $('filter-tabs').innerHTML = ['pending','accepted','rejected','all'].map(k =>
    `<button data-f="${k}" class="${S.filter === k ? 'active' : ''}">${T(k)}<span class="c">${c[k]}</span></button>`).join('');
  document.querySelectorAll('#filter-tabs button').forEach(b => b.addEventListener('click', () => { S.filter = b.dataset.f; S.openReply = null; renderAll(); }));
}
function card(a){
  const open = S.openReply && S.openReply.ref === a.ref ? S.openReply.kind : null;
  const isNew = S.newRefs.has(a.ref) && a.status === 'pending';
  return `<article class="appt ${a.status} ${isNew ? 'is-new' : ''}" data-ref="${esc(a.ref)}">
    <div class="appt-top">
      <div><h3>${esc(a.patientName)}${isNew ? '<span class="new-tag">NEW</span>' : ''}</h3><div class="ref">${esc(a.ref)} · ${T('requested')}: ${esc(fmtTime(a.createdAt))}</div></div>
      <span class="pill ${a.status}">${T(a.status)}</span>
    </div>
    <div class="details">
      <div><span>${T('phone')}</span><a href="tel:${esc(a.patientPhone)}">📞 ${esc(a.patientPhone)}</a></div>
      <div><span>${T('specialty')}</span>${esc(a.specialty || T('any'))}</div>
      <div><span>${T('when')}</span>${esc(a.date || '—')} ${esc(a.time || '')}</div>
    </div>
    ${a.note ? `<div class="note-view"><b>${T('yourNote')}:</b> ${esc(a.note)}</div>` : ''}
    <div class="actions">
      ${a.status === 'pending' ? `
        <button class="btn accept" data-act="open-accept">✔ ${T('accept')}</button>
        <button class="btn reject" data-act="open-reject">✖ ${T('reject')}</button>`
        : `<button class="btn" data-act="reopen">↺ ${T('reopen')}</button>`}
      <a class="btn" href="tel:${esc(a.patientPhone)}" style="text-decoration:none">📞 ${T('call')}</a>
    </div>
    <div class="reply ${open ? 'open' : ''}">
      <textarea maxlength="300" placeholder="${esc(T(open === 'accepted' ? 'replyAccept' : 'replyReject'))}"></textarea>
      <div class="actions">
        <button class="btn ${open === 'accepted' ? 'accept' : 'reject'}" data-act="confirm" data-kind="${open || ''}">${T(open === 'accepted' ? 'confirmAccept' : 'confirmReject')}</button>
        <button class="btn" data-act="cancel">${T('cancel')}</button>
      </div>
    </div>
  </article>`;
}
function renderList(){
  let list = S.items.filter(a => S.filter === 'all' || a.status === S.filter);
  if(S.q) list = list.filter(a => (a.patientName + ' ' + a.patientPhone + ' ' + a.ref).toLowerCase().includes(S.q));
  if(S.filter === 'pending') list = list.slice().sort((x, y) => x.createdAt - y.createdAt);   // oldest waiting first
  $('list').innerHTML = list.length ? list.map(card).join('') : `<div class="empty">${T('noItems')}</div>`;
}
function renderAll(){ renderStats(); renderList(); }

$('list').addEventListener('click', async e => {
  const btn = e.target.closest('[data-act]'); if(!btn) return;
  const el = btn.closest('.appt'), ref = el.dataset.ref, act = btn.dataset.act;
  if(act === 'open-accept' || act === 'open-reject'){ S.openReply = { ref, kind: act === 'open-accept' ? 'accepted' : 'rejected' }; renderList(); $('list').querySelector(`[data-ref="${ref}"] textarea`)?.focus(); return; }
  if(act === 'cancel'){ S.openReply = null; renderList(); return; }
  let status, note = '';
  if(act === 'confirm'){ status = btn.dataset.kind; note = el.querySelector('textarea').value; }
  else if(act === 'reopen'){ status = 'pending'; }
  else return;
  btn.disabled = true;
  try{
    await guard(DHC.hospitalUpdate(S.token, ref, status, note));
    S.openReply = null; S.newRefs.delete(ref);
    toast(status === 'accepted' ? '✔ ' + T('okAccept') : status === 'rejected' ? '✖ ' + T('okReject') : '↺ ' + T('reopen'));
    await refresh();
  }catch(err){ btn.disabled = false; if(err.message !== 'session') toast(T('net')); }
});

/* ---------- boot ---------- */
DHC.onChange(() => { if(S.token) refresh(); });   // instant update when a patient books from another tab
applyLang(); initLogin();
if(S.token) startApp().catch(() => logout(true));
