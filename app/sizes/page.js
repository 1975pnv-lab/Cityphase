'use client';

const PAGE_CSS = `*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --bg:#ffffff;--fg:#171717;
  --navy:#1B3A6B;--navy2:#2E5299;--navy-dark:#111f3d;
  --teal:#1D9E75;--teal-dark:#0F6E56;
  --ink:#5A6478;--fog:#F2F3F6;--mist:#DDE1E9;
  --display:'Outfit',Arial,sans-serif;
  --body:'Raleway',Arial,sans-serif;
}
html,body{min-height:100%;background:var(--bg);color:var(--fg);font-family:var(--body);font-size:16px;line-height:1.6}

/* ── NAV ── */
nav{
  position:sticky;top:0;left:0;right:0;z-index:300;
  display:flex;align-items:center;justify-content:space-between;
  padding:0 48px;height:64px;
  background:rgba(255,255,255,.97);
  backdrop-filter:blur(12px);
  border-bottom:1px solid var(--mist);
}
.nav-logo{
  font-family:var(--display);font-size:13px;font-weight:500;
  letter-spacing:5px;text-transform:uppercase;color:var(--fg);text-decoration:none;
}
.nav-links{display:flex;gap:32px;list-style:none}
.nav-links a{font-family:var(--body);font-size:13px;font-weight:300;color:var(--fg);text-decoration:none;opacity:.6;transition:opacity .2s}
.nav-links a:hover{opacity:1;color:var(--navy)}
.nav-back{
  font-family:var(--display);font-size:12px;font-weight:500;
  letter-spacing:2px;text-transform:uppercase;
  color:var(--navy);text-decoration:none;
  padding:10px 24px;border:1.5px solid var(--mist);
  transition:border-color .2s;
}
.nav-back:hover{border-color:var(--navy)}

/* ── PAGE LAYOUT ── */
.page-wrap{
  max-width:1100px;margin:0 auto;padding:64px 48px 96px;
}

/* ── HEADER ── */
.page-header{margin-bottom:48px;border-bottom:1px solid var(--mist);padding-bottom:32px}
.page-eyebrow{
  font-family:var(--display);font-size:11px;font-weight:500;
  letter-spacing:4px;text-transform:uppercase;color:var(--teal);
  display:block;margin-bottom:16px;
}
.page-title{
  font-family:var(--display);font-size:clamp(28px,3.5vw,48px);
  font-weight:300;color:var(--fg);line-height:1.1;
  letter-spacing:-1.5px;margin-bottom:12px;
}
.page-title em{font-style:normal;color:var(--teal);font-weight:400}
.page-desc{
  font-family:var(--body);font-size:15px;font-weight:300;
  color:var(--ink);max-width:560px;line-height:1.7;
}

/* ── MAIN CONTENT ── */
.sz-wrap{
  display:grid;grid-template-columns:360px 1fr;
  gap:0;background:var(--mist);
  border:1px solid var(--mist);
  margin-bottom:40px;
}
.sz-diagram{
  background:var(--fog);
  border-right:1px solid var(--mist);
  display:flex;flex-direction:column;
  position:relative;overflow:hidden;
  min-height:480px;
}
.sz-photo-area{
  flex:1;
  background:linear-gradient(160deg,#c8d4e4 0%,#a8bcd4 100%);
  display:flex;flex-direction:column;align-items:center;justify-content:center;
  gap:10px;padding:32px;
  font-family:var(--display);font-size:12px;font-weight:300;
  color:var(--ink);text-align:center;letter-spacing:1px;
  min-height:340px;
}
.sz-photo-area::before{content:'📷';font-size:32px;display:block}
.sz-photo-caption{
  font-family:var(--body);font-size:11px;font-weight:300;
  color:var(--ink);opacity:.6;line-height:1.5;max-width:200px;
}
.sz-diagram-label{
  font-family:var(--display);font-size:11px;font-weight:500;
  letter-spacing:4px;text-transform:uppercase;color:var(--teal);
  padding:16px 20px 8px;
}
.sz-diagram-hints{
  display:flex;flex-direction:column;gap:6px;
  padding:0 20px 20px;background:var(--bg);
  border-top:1px solid var(--mist);
}
.sz-hint-item{font-family:var(--body);font-size:12px;font-weight:300;color:var(--ink);line-height:1.5;padding-top:6px}
.sz-hint-key{font-weight:500;font-family:var(--display)}
.sz-table-wrap{background:var(--bg)}
.sz-table{width:100%;border-collapse:collapse}
.sz-table th{
  font-family:var(--display);font-size:11px;font-weight:500;
  letter-spacing:4px;text-transform:uppercase;color:var(--ink);
  padding:18px 24px;text-align:center;border-bottom:1px solid var(--mist);
}
.sz-table th:first-child{text-align:left;padding-left:32px}
.sz-table td{
  font-family:var(--body);font-size:15px;font-weight:300;
  color:var(--fg);padding:18px 24px;text-align:center;
  border-bottom:1px solid var(--mist);transition:background .2s;
}
.sz-table td:first-child{text-align:left;font-size:13px;color:var(--ink);padding-left:32px}
.sz-table tr:last-child td{border-bottom:none}
.sz-table tr:hover td{background:var(--fog)}

/* ── NOTE ── */
.sz-note{
  padding:20px 32px;
  font-family:var(--body);font-size:13px;font-weight:300;
  color:var(--ink);font-style:italic;line-height:1.7;
  background:var(--fog);border:1px solid var(--mist);
  border-top:none;margin-bottom:48px;
}

/* ── HOW TO MEASURE ── */
.how-title{
  font-family:var(--display);font-size:clamp(18px,2vw,24px);
  font-weight:300;color:var(--fg);letter-spacing:-0.5px;
  margin-bottom:24px;padding-bottom:16px;
  border-bottom:1px solid var(--mist);
}
.how-grid{
  display:grid;grid-template-columns:repeat(2,1fr);
  gap:1px;background:var(--mist);border:1px solid var(--mist);
  margin-bottom:48px;
}
.how-item{
  background:var(--bg);padding:24px 28px;
  display:flex;gap:20px;align-items:flex-start;
}
.how-letter{
  font-family:var(--display);font-size:28px;font-weight:300;
  color:var(--teal);flex-shrink:0;line-height:1;min-width:32px;
}
.how-body{}
.how-name{
  font-family:var(--display);font-size:13px;font-weight:500;
  letter-spacing:2px;text-transform:uppercase;color:var(--navy);
  margin-bottom:6px;
}
.how-desc{
  font-family:var(--body);font-size:14px;font-weight:300;
  color:var(--ink);line-height:1.6;
}

/* ── HELP BLOCK ── */
.help-block{
  background:var(--fog);border:1px solid var(--mist);
  padding:28px 32px;display:flex;justify-content:space-between;
  align-items:center;flex-wrap:wrap;gap:16px;
}
.help-text{
  font-family:var(--body);font-size:14px;font-weight:300;
  color:var(--ink);line-height:1.7;
}
.help-text strong{color:var(--fg);font-weight:400}
.help-cta{
  font-family:var(--display);font-size:12px;font-weight:500;
  letter-spacing:2px;text-transform:uppercase;
  color:#fff;background:var(--navy);text-decoration:none;
  padding:12px 28px;transition:background .2s;flex-shrink:0;
}
.help-cta:hover{background:var(--navy2)}

/* ── BACK LINK ── */
.back-row{margin-top:48px;padding-top:32px;border-top:1px solid var(--mist)}
.back-link{
  font-family:var(--display);font-size:12px;font-weight:500;
  letter-spacing:2px;text-transform:uppercase;color:var(--navy);
  text-decoration:none;display:inline-flex;align-items:center;gap:8px;
  border-bottom:1.5px solid var(--mist);padding-bottom:2px;
  transition:border-color .2s;
}
.back-link:hover{border-color:var(--navy)}

/* ── FOOTER ── */
footer{
  display:flex;justify-content:space-between;align-items:center;
  padding:24px 48px;border-top:1px solid var(--mist);
  flex-wrap:wrap;gap:16px;
}
.fl{font-family:var(--display);font-size:11px;letter-spacing:5px;text-transform:uppercase;color:var(--fg);text-decoration:none;opacity:.4}
.flinks{display:flex;gap:24px}
.flinks a{font-family:var(--body);font-size:13px;font-weight:300;color:var(--fg);text-decoration:none;opacity:.4;transition:opacity .2s;display:inline-flex;align-items:center;gap:6px}
.flinks a:hover{opacity:.8}
.fcp{font-family:var(--body);font-size:12px;color:var(--fg);opacity:.25}

@media(max-width:900px){
  nav{padding:0 24px}
  .nav-links{display:none}
  .page-wrap{padding:40px 24px 72px}
  .sz-wrap{grid-template-columns:1fr}
  .sz-diagram{border-right:none;border-bottom:1px solid var(--mist);min-height:auto}
  .how-grid{grid-template-columns:1fr}
  footer{padding:24px 24px;flex-direction:column;align-items:flex-start}
}`;

const PAGE_HTML = `<!-- NAV -->
<nav>
  <a href="/" class="nav-logo">CityPhase</a>
  <ul class="nav-links">
    <li><a href="/12-hours">Коллекция</a></li>
    <li><a href="/technology">Технология</a></li>
    <li><a href="/about">О бренде</a></li>
  </ul>
  <a href="/12-hours#s9" class="nav-back">← Вернуться к заказу</a>
</nav>

<div class="page-wrap">

  <!-- HEADER -->
  <div class="page-header">
    <span class="page-eyebrow">12 Hours ★ · Размеры</span>
    <h1 class="page-title">Найдите <em>свой размер.</em></h1>
    <p class="page-desc">Рубашка скроена с запасом в плечах и груди — не обтягивает, но и не сидит мешком. Снимите мерки и сверьтесь с таблицей. Обязательно проверьте обхват шеи — воротник должен лежать свободно. Если значения на границе двух размеров — берите больший.</p>
  </div>

  <!-- SIZE TABLE -->
  <div class="sz-wrap">
    <div class="sz-diagram">
      <div class="sz-photo-area">
        <span style="font-size:12px;opacity:.6;max-width:200px;line-height:1.6">Фото модели в рубашке<br>с разметкой обмеров</span>
      </div>
      <p class="sz-diagram-label">Обозначения</p>
      <div class="sz-diagram-hints">
        <p class="sz-hint-item"><span class="sz-hint-key" style="color:#1D9E75">А — грудь:</span> под мышками, горизонтально</p>
        <p class="sz-hint-item"><span class="sz-hint-key" style="color:#1B3A6B">Б — талия:</span> самая узкая часть</p>
        <p class="sz-hint-item"><span class="sz-hint-key" style="color:#5A6478">В — длина:</span> от плечевого шва вниз до низа изделия</p>
        <p class="sz-hint-item"><span class="sz-hint-key" style="color:#0F6E56">Г — рукав:</span> от плечевого шва вдоль рукава до запястья</p>
        <p class="sz-hint-item"><span class="sz-hint-key" style="color:#8B5A9E">Д — шея:</span> горизонтально вокруг основания шеи</p>
      </div>
    </div>
    <div class="sz-table-wrap">
      <table class="sz-table">
        <thead>
          <tr>
            <th>Параметр</th>
            <th>M</th>
            <th>L</th>
            <th>XL</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>А — обхват груди, см</td><td>96–100</td><td>100–104</td><td>104–108</td></tr>
          <tr><td>Б — обхват талии, см</td><td>82–86</td><td>86–90</td><td>90–96</td></tr>
          <tr><td>Г — длина рукава, см</td><td>63</td><td>64</td><td>65</td></tr>
          <tr><td>В — длина изделия, см</td><td>74</td><td>76</td><td>78</td></tr>
          <tr><td>Д — обхват шеи, см</td><td>38–39</td><td>40–41</td><td>42–43</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <p class="sz-note">Если ваши мерки на границе между размерами — берите больший. Рубашка скроена с запасом в плечах и груди: она не должна прилегать плотно — это заложено в конструкцию.</p>

  <!-- HOW TO MEASURE -->
  <h2 class="how-title">Как правильно снять мерки</h2>
  <div class="how-grid">
    <div class="how-item">
      <span class="how-letter" style="color:#1D9E75">А</span>
      <div class="how-body">
        <p class="how-name">Обхват груди</p>
        <p class="how-desc">Измерьте горизонтально под мышками, в самой широкой части груди. Лента должна лежать горизонтально, не провисать и не сдавливать.</p>
      </div>
    </div>
    <div class="how-item">
      <span class="how-letter" style="color:#1B3A6B">Б</span>
      <div class="how-body">
        <p class="how-name">Обхват талии</p>
        <p class="how-desc">Самая узкая часть торса. Обычно чуть выше пупка. Лента должна лежать свободно — один палец должен проходить под лентой.</p>
      </div>
    </div>
    <div class="how-item">
      <span class="how-letter" style="color:#0F6E56">Г</span>
      <div class="how-body">
        <p class="how-name">Длина рукава</p>
        <p class="how-desc">От плечевого шва вдоль руки, слегка согнутой в локте, до косточки запястья. Измеряйте по внешней стороне руки.</p>
      </div>
    </div>
    <div class="how-item">
      <span class="how-letter" style="color:#5A6478">В</span>
      <div class="how-body">
        <p class="how-name">Длина изделия</p>
        <p class="how-desc">От плечевого шва вертикально вниз до нижнего края изделия. Измеряйте по спинке, держа ленту ровно.</p>
      </div>
    </div>
    <div class="how-item" style="grid-column:1/-1">
      <span class="how-letter" style="color:#8B5A9E">Д</span>
      <div class="how-body">
        <p class="how-name">Обхват шеи</p>
        <p class="how-desc">Горизонтально вокруг основания шеи — туда, где обычно лежит воротник рубашки. Лента не должна давить: один палец должен свободно проходить под ней. Это определяет, не будет ли воротник натирать.</p>
      </div>
    </div>
  </div>

  <!-- HELP -->
  <div class="help-block">
    <div class="help-text">
      <strong>Не уверены в размере?</strong><br>
      Напишите нам — поможем определиться. Отказаться от заявки можно в любой момент до оплаты.
    </div>
    <a href="mailto:hello@cityphase.ru" class="help-cta">Написать нам</a>
  </div>

  <!-- BACK -->
  <div class="back-row">
    <a href="/12-hours#s9" class="back-link">← Вернуться к заказу</a>
  </div>

</div>

<!-- FOOTER -->
<footer>
  <a href="/" class="fl">CITYPHASE</a>
  <div class="flinks">
    <a href="https://t.me/cityphase_ru">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M22 2L11 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      @cityphase_ru
    </a>
    <a href="mailto:hello@cityphase.ru">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M2 8l10 6 10-6" stroke="currentColor" stroke-width="1.5"/></svg>
      hello@cityphase.ru
    </a>
  </div>
  <span class="fcp">© 2026 CITYPHASE</span>
</footer>`;

export default function Sizes() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: PAGE_CSS}} />
      <div dangerouslySetInnerHTML={{__html: PAGE_HTML}} />
    </>
  );
}
