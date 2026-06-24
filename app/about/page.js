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
          <li><a href="/12-hours" style={{ fontSize: 13, color: '#5A6478', textDecoration: 'none' }}>Коллекция</a></li>
          <li><a href="/technology" style={{ fontSize: 13, color: '#5A6478', textDecoration: 'none' }}>Ткань LYONEX</a></li>
          <li><a href="/about" style={{ fontSize: 13, color: '#1B3A6B', textDecoration: 'none', fontWeight: 500 }}>О бренде</a></li>
        </ul>
        <a href="/12-hours#order" style={{ fontSize: 12, color: '#1D9E75', fontWeight: 500, textDecoration: 'none' }}>
          Предзаказ →
        </a>
      </nav>

      {/* S1 О БРЕНДЕ */}
      <section style={{ background: '#fff', padding: '80px 40px', maxWidth: 640, margin: '0 auto' }}>
        <p style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1D9E75', marginBottom: 24 }}>
          О БРЕНДЕ
        </p>
        <h1 style={{ fontSize: 36, fontWeight: 600, color: '#1B3A6B', lineHeight: 1.2, marginBottom: 32 }}>
          CITYPHASE
        </h1>
        <p style={{ fontSize: 16, color: '#3D4558', lineHeight: 1.7, marginBottom: 20 }}>
          Деловая одежда давно не менялась. Она мнётся, в ней бывает жарко, она стесняет движения. Мы задали себе вопрос: что если подойти к ней как к инженерной задаче — где каждое решение обосновано конкретной проблемой? Так появился CityPhase.
        </p>

        <p style={{ fontSize: 16, color: '#3D4558', lineHeight: 1.7, marginBottom: 40 }}>
          Первая партия — рубашка 12 Hours ★. Москва, 2026.
        </p>
        <div style={{
          marginBottom: 0, padding: '20px 24px',
          borderLeft: '2px solid #1D9E75',
          background: '#F2F3F6', borderRadius: '0 6px 6px 0'
        }}>
          <div style={{ fontSize: 13, fontWeight: 500, color: '#1A1F2E', marginBottom: 6 }}>
            Только то, что можно доказать
          </div>
          <div style={{ fontSize: 13, color: '#5A6478', lineHeight: 1.65 }}>
            Каждое свойство наших вещей можно проверить самостоятельно дома или снять на видео. Если нельзя — это не аргумент.
          </div>
        </div>
      </section>

      {/* S2 CTA */}
      <section style={{ background: '#F2F3F6', padding: '60px 40px' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <p style={{ fontSize: 16, color: '#3D4558', lineHeight: 1.7, marginBottom: 32 }}>
            Флагманская модель 12 Hours ★ — трикотажная рубашка из LYONEX для длинного дня. Открыт предзаказ на первую партию 200 единиц.
          </p>
          <a href="/12-hours" style={{
            display: 'inline-block', background: '#1B3A6B', color: '#fff',
            padding: '14px 28px', fontSize: 14, fontWeight: 500,
            borderRadius: 4, textDecoration: 'none', letterSpacing: '0.03em',
            marginBottom: 40
          }}>
            Смотреть 12 Hours ★ →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#0F2240', padding: '56px 40px 32px' }}>
        <div>
          <div className="footer-inner" style={{ marginBottom: 48 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 500, letterSpacing: '0.18em', color: '#fff', marginBottom: 12 }}>
                CITYPHASE
              </div>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, maxWidth: 220 }}>
                Деловая одежда для длинного дня. Право не выбирать между комфортом и статусом.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 64 }}>
              <div className="footer-col">
                <span style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 4 }}>
                  Продукт
                </span>
                <a href="/12-hours" className="footer-link">12 Hours ★</a>
                <a href="/technology" className="footer-link">Ткань LYONEX</a>
                <a href="/sizes" className="footer-link">Каталог</a>
              </div>
              <div className="footer-col">
                <span style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 4 }}>
                  Бренд
                </span>
                <a href="/about" className="footer-link">О бренде</a>
                <a href="/about#how" className="footer-link">Как мы делаем одежду</a>
              </div>
              <div className="footer-col">
                <span style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 4 }}>
                  Контакты
                </span>
                <a href="mailto:hello@cityphase.ru" className="footer-link">hello@cityphase.ru</a>
                <a href="https://t.me/cityphase_ru" className="footer-link">Telegram @cityphase_ru</a>
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
