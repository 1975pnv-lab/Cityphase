export default function About() {
  return (
    <main style={{ background: '#fff', minHeight: '100vh' }}>
      {/* NAV */}
      <nav style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '18px 40px', borderBottom: '0.5px solid #DDE1E9', background: '#fff'
      }}>
        <a href="/" style={{ fontFamily: "'Raleway', sans-serif", fontSize: 15, fontWeight: 500, letterSpacing: '0.22em', color: '#1B3A6B', textDecoration: 'none' }}>
          CITYPHASE
        </a>
        <ul className="nav-links" style={{ display: 'flex', gap: 28, listStyle: 'none', margin: '0 auto', padding: 0 }}>
          <li><a href="/12-hours" style={{ fontSize: 13, color: '#5A6478', textDecoration: 'none' }}>Рубашка 12 Hours</a></li>
          <li><a href="/technology" style={{ fontSize: 13, color: '#5A6478', textDecoration: 'none' }}>Ткань LYONEX</a></li>
          <li><a href="/about" style={{ fontSize: 13, color: '#1B3A6B', textDecoration: 'none', fontWeight: 500 }}>О бренде</a></li>
        </ul>
        <a href="/12-hours#order" style={{ fontSize: 12, color: '#1D9E75', fontWeight: 500, textDecoration: 'none' }}>
          Предзаказ →
        </a>
      </nav>

      {/* S0 HERO */}
      <section className="hero-band" style={{ background: 'linear-gradient(135deg,#0a1628 0%,#0d1f3c 60%,#0f2a4a 100%)', padding: '80px 40px' }}>
        <span className="hero-12" aria-hidden="true">12</span>
        <div style={{ maxWidth: 640 }}>
          <p style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1D9E75', marginBottom: 16 }}>
            О БРЕНДЕ
          </p>
          <h1 style={{ fontSize: 56, fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: 24, letterSpacing: '-0.01em' }}>
            CITYPHASE
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.75)', lineHeight: 1.65, maxWidth: 620 }}>
            Деловая одежда для длинного рабочего дня — так, чтобы к вечеру вы выглядели как утром. Каждое решение в ней обосновано. Начинаем с трикотажной рубашки 12 Hours.
          </p>
        </div>
      </section>

      {/* S1 С ЧЕГО ВСЁ НАЧАЛОСЬ */}
      <section style={{ background: '#fff', padding: '80px 40px' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <p style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1D9E75', marginBottom: 24 }}>
            ИСТОРИЯ
          </p>
          <h2 style={{ fontSize: 28, fontWeight: 600, color: '#1B3A6B', marginBottom: 32, lineHeight: 1.3 }}>
            С чего всё началось
          </h2>
          <p style={{ fontSize: 16, color: '#3D4558', lineHeight: 1.7, marginBottom: 20 }}>
            Деловая одежда давно не менялась. Она мнётся, в ней бывает жарко, она стесняет движения. Мы задали себе вопрос: что если подойти к ней как к инженерной задаче — где каждое решение обосновано конкретной проблемой? Так появился CityPhase.
          </p>
          <p style={{ fontSize: 16, color: '#3D4558', lineHeight: 1.7 }}>
            Мы начали с самого сложного сценария — длинного рабочего дня. Перелёт, встреча, переговоры, ужин. Одна рубашка с утра до вечера, и в конце дня она выглядит так же, как в начале.
          </p>
        </div>
      </section>

      {/* S2 ВСЁ ДЕЛО В ДЕТАЛЯХ */}
      <section style={{ background: '#F2F3F6', padding: '80px 40px' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <p style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1D9E75', marginBottom: 24 }}>
            ПОДХОД
          </p>
          <h2 style={{ fontSize: 28, fontWeight: 600, color: '#1B3A6B', marginBottom: 32, lineHeight: 1.3 }}>
            Всё дело в деталях
          </h2>
          <p style={{ fontSize: 16, color: '#3D4558', lineHeight: 1.7, marginBottom: 20 }}>
            В нашей одежде нет случайных решений. Каждая деталь — ответ на конкретную задачу, а не украшение.
          </p>
          <p style={{ fontSize: 16, color: '#3D4558', lineHeight: 1.7 }}>
            Матовая поверхность ткани — чтобы рубашка читалась как деловая, а не как спортивная. Трикотажное полотно — чтобы тянулось и пропускало воздух. Полужёсткий воротник — чтобы держал форму и без галстука, и под ним. Даже пуговицы с логотипом — деталь, по которой узнают вещь.
          </p>
        </div>
      </section>

      {/* S3 НЕ ВЕРЬТЕ НАМ НА СЛОВО */}
      <section style={{ background: '#fff', padding: '80px 40px' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <p style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1D9E75', marginBottom: 24 }}>
            ДОКАЗУЕМОСТЬ
          </p>
          <h2 style={{ fontSize: 28, fontWeight: 600, color: '#1B3A6B', marginBottom: 32, lineHeight: 1.3 }}>
            Не верьте нам на слово
          </h2>
          <p style={{ fontSize: 16, color: '#3D4558', lineHeight: 1.7, marginBottom: 28 }}>
            Любое свойство наших вещей можно проверить самому: смять и достать через час, постирать вечером, высушить на плечиках и надеть утром, носить весь день без потери вида. То, что нельзя показать, — для нас не аргумент.
          </p>
          <a href="/12-hours" style={{ fontSize: 15, color: '#1B3A6B', fontWeight: 500, textDecoration: 'none' }}>
            Смотреть тесты рубашки →
          </a>
        </div>
      </section>

      {/* S4 ПЕРВАЯ ПАРТИЯ (съёмная секция) */}
      <section style={{ background: '#F2F3F6', padding: '80px 40px' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <p style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1D9E75', marginBottom: 24 }}>
            ПЕРВАЯ ПАРТИЯ
          </p>
          <h2 style={{ fontSize: 28, fontWeight: 600, color: '#1B3A6B', marginBottom: 32, lineHeight: 1.3 }}>
            Первая партия — 200 штук
          </h2>
          <p style={{ fontSize: 16, color: '#3D4558', lineHeight: 1.7, marginBottom: 20 }}>
            Мы не начинаем с большого тиража. Первые 200 рубашек — это начало бренда, и каждый, кто их получит, становится его частью.
          </p>
          <p style={{ fontSize: 16, color: '#3D4558', lineHeight: 1.7 }}>
            Каждая рубашка из первой партии имеет свой номер и статус «Основатель #N из 200». Это не маркетинговый ярлык, а факт, который останется с вами навсегда: вы были среди первых.
          </p>
        </div>
      </section>

      {/* S5 CTA */}
      <section style={{ background: '#fff', padding: '80px 40px' }}>
        <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 28, fontWeight: 600, color: '#1B3A6B', marginBottom: 20, lineHeight: 1.3 }}>
            Встречайте 12 Hours ★
          </h2>
          <p style={{ fontSize: 16, color: '#3D4558', lineHeight: 1.7, marginBottom: 28, maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
            Флагманская рубашка CityPhase из ткани LYONEX. Трикотаж для длинного рабочего дня. Открыт предзаказ на первую партию.
          </p>
          <a href="/12-hours" style={{ display: 'inline-block', background: '#1B3A6B', color: '#fff', fontSize: 15, fontWeight: 500, padding: '16px 36px', borderRadius: 4, textDecoration: 'none' }}>
            Смотреть 12 Hours ★ →
          </a>
        </div>
      </section>


      {/* FOOTER */}
      <footer style={{ background: '#0F2240', padding: '56px 40px 32px' }}>
        <div>
          <div className="f-cols" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 64, marginBottom: 48 }}>
            <div className="f-brand" style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 500, letterSpacing: '0.18em', color: '#fff', marginBottom: 12 }}>
                CITYPHASE
              </div>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, maxWidth: 220 }}>
                Деловая одежда для длинного дня. Право не выбирать между комфортом и статусом.
              </p>
            </div>
            <div className="f-nav" style={{ display: 'flex', gap: 64 }}>
              <div className="f-col" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <span style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 4 }}>
                  Продукт
                </span>
                <a href="/12-hours" style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>12 Hours ★</a>
                <a href="/technology" style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>Ткань LYONEX</a>
              </div>
              <div className="f-col" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <span style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 4 }}>
                  Бренд
                </span>
                <a href="/about" style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>О бренде</a>
              </div>
              <div className="f-col" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <span style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 4 }}>
                  Контакты
                </span>
                <a href="mailto:hello@cityphase.ru" style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>hello@cityphase.ru</a>
                <a href="https://t.me/cityphase_ru" style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>Telegram @cityphase_ru</a>
              </div>
            </div>
          </div>
          <div style={{ borderTop: '0.5px solid rgba(255,255,255,0.1)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>© 2026 CityPhase</span>
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>cityphase.ru</span>
          </div>
        </div>
      </footer>
    </main>
  )
}
