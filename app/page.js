export default function Home() {
  return (
    <main>
      <style>{`
        .nav-links { display: flex; gap: 28px; list-style: none; margin: 0; padding: 0; }
        .hero-section { display: flex; align-items: flex-start; justify-content: space-between; gap: 40px; }
        .hero-photo { width: 240px; flex-shrink: 0; height: 300px; }
        .btn-row { display: flex; gap: 12px; }
        .footer-inner { display: flex; justify-content: space-between; align-items: center; }
        .footer-col { display: flex; flex-direction: column; gap: 12px; }
        .footer-link { font-size: 13px; color: rgba(255,255,255,0.55); text-decoration: none; transition: color 0.2s; }
        .footer-link:hover { color: #fff; }
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr !important; text-align: center !important; }
          .footer-cols { flex-direction: column !important; gap: 40px !important; align-items: center !important; }
          .footer-col { align-items: center !important; text-align: center !important; width: 100% !important; }
          .footer-col span, .footer-col a { text-align: center !important; display: block !important; }
        }
        .product-card { display: flex; border: 0.5px solid #DDE1E9; border-radius: 12px; overflow: hidden; background: #fff; max-width: 860px; margin: 0 auto; }
        .philosophy-text { font-size: 26px; font-weight: 400; color: #1B3A6B; line-height: 1.6; max-width: 720px; letter-spacing: -0.01em; }
        @media (max-width: 768px) {
          .footer-inner { flex-direction: column !important; gap: 32px !important; }
          .product-card { flex-direction: column !important; }
        }
        @media (max-width: 860px) {
          .nav-links { display: none; }
          .hero-section { flex-direction: column; }
          .hero-photo { width: 100% !important; height: 220px !important; }
          .btn-row { flex-direction: column; }
          .btn-row a { text-align: center; }
          .footer-inner { flex-direction: column; align-items: flex-start; gap: 32px; }
          .product-card { flex-direction: column; }
          .product-card-photo { width: 100% !important; height: 200px !important; }
          .philosophy-text { font-size: 22px; }
        }
        @media (max-width: 640px) {
          .nav-links { display: none !important; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '18px 40px', borderBottom: '0.5px solid #DDE1E9', background: '#fff'
      }}>
        <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: 15, fontWeight: 500, letterSpacing: '0.22em', color: '#1B3A6B' }}>
          CITYPHASE
        </span>
        <ul className="nav-links">
          <li><a href="/12-hours" style={{ fontSize: 13, color: '#5A6478', textDecoration: 'none' }}>Рубашка 12 Hours</a></li>
          <li><a href="/technology" style={{ fontSize: 13, color: '#5A6478', textDecoration: 'none' }}>Ткань LYONEX</a></li>
          <li><a href="/about" style={{ fontSize: 13, color: '#5A6478', textDecoration: 'none' }}>О бренде</a></li>
        </ul>
        <a href="/12-hours#order" style={{
          fontSize: 13, color: '#fff', fontWeight: 500, textDecoration: 'none',
          letterSpacing: '0.03em', background: '#1D9E75', padding: '8px 18px',
          borderRadius: 4, display: 'inline-block'
        }}>
          Предзаказ
        </a>
      </nav>

      {/* HERO */}
      <section style={{
        position: 'relative',
        minHeight: 'calc(100vh - 57px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        <img
          src="/hero.webp"
          alt=""
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center'
          }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, rgba(0,0,0,0.65) 40%, rgba(0,0,0,0.1) 100%)'
        }} />
        <div style={{ position: 'relative', zIndex: 1, padding: '0 clamp(20px, 5vw, 40px)', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: 'calc(100vh - 57px)' }}>
          <div style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1D9E75', fontWeight: 500, marginBottom: 20 }}>
            Бренд · 2026
          </div>
          <h1 style={{ fontSize: 'clamp(22px, 5vw, 38px)', fontWeight: 600, color: '#fff', lineHeight: 1.15, marginBottom: 12, letterSpacing: '-0.02em' }}>
            Деловая одежда для длинного дня.
          </h1>
          <p style={{ fontSize: 22, fontWeight: 400, color: 'rgba(255,255,255,0.8)', lineHeight: 1.4, marginBottom: 36 }}>
            Создана инженерами.
          </p>
          <div className="btn-row">
            <a href="/12-hours#order" style={{
              background: '#1D9E75', color: '#fff', border: 'none',
              padding: '14px 28px', fontSize: 14, fontWeight: 500,
              borderRadius: 4, cursor: 'pointer', textDecoration: 'none',
              letterSpacing: '0.03em', display: 'inline-block'
            }}>
              Записаться на предзаказ
            </a>
            <a href="/about" style={{
              background: 'transparent', color: '#fff',
              border: '1.5px solid rgba(255,255,255,0.6)',
              padding: '14px 24px', fontSize: 14, fontWeight: 500,
              borderRadius: 4, cursor: 'pointer', textDecoration: 'none',
              display: 'inline-block'
            }}>
              О бренде
            </a>
          </div>
        </div>
      </section>

      {/* ФИЛОСОФИЯ */}
      <section style={{ padding: 'clamp(40px, 6vw, 80px) clamp(20px, 5vw, 40px)', background: '#fff' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
        <div style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1D9E75', fontWeight: 500, marginBottom: 24 }}>
          Философия
        </div>
        <p className="philosophy-text">
          Деловая одежда давно не менялась. Она мнётся, в ней бывает жарко, она стесняет движения.
          Мы задали себе вопрос: что если подойти к ней как к инженерной задаче — где каждое решение
          обосновано конкретной проблемой? Так появился CityPhase.
        </p>
        </div>
      </section>

      {/* КАК МЫ ДЕЛАЕМ ОДЕЖДУ */}
      <section style={{ padding: 'clamp(40px, 6vw, 80px) clamp(20px, 5vw, 40px)', background: '#F2F3F6' }}>
        <div style={{ display: 'flex', gap: 40, alignItems: 'center', maxWidth: 860, margin: '0 auto', flexWrap: 'wrap' }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1D9E75', fontWeight: 500, marginBottom: 16 }}>
              Как мы делаем одежду
            </div>
            <h2 style={{ fontSize: 28, fontWeight: 600, color: '#1B3A6B', marginBottom: 16, lineHeight: 1.3 }}>
              Только то, что можно доказать
            </h2>
            <p style={{ fontSize: 15, color: '#5A6478', lineHeight: 1.65 }}>
              Мы считаем, что каждое свойство наших вещей должно легко проверяться.
              Его можно проверить самостоятельно дома или снять на видео. Если нельзя — это не аргумент.
            </p>
          </div>
          <div className="product-card-photo" style={{
            width: 340, flexShrink: 0, height: 280,
            background: '#E8EAED', borderRadius: 8,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexDirection: 'column', gap: 6
          }}>
            <span style={{ fontSize: 11, letterSpacing: '0.1em', color: '#5A6478', textTransform: 'uppercase' }}>CITYPHASE</span>
            <span style={{ fontSize: 11, color: '#8A92A3' }}>Деталь · воротник и тейп</span>
          </div>
        </div>
      </section>

      {/* КАРТОЧКА ПРОДУКТА */}
      <section style={{ padding: 'clamp(40px, 6vw, 80px) clamp(20px, 5vw, 40px)', background: '#fff' }}>
        <div className="product-card">
          <div className="product-card-photo" style={{
            width: 360, flexShrink: 0, background: '#E8EAED',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexDirection: 'column', gap: 6, minHeight: 300
          }}>
            <span style={{ fontSize: 11, letterSpacing: '0.1em', color: '#5A6478', textTransform: 'uppercase' }}>CITYPHASE</span>
            <span style={{ fontSize: 11, color: '#8A92A3' }}>12 Hours ★</span>
          </div>
          <div style={{ padding: '36px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 16 }}>
            <div style={{ display: 'flex', gap: 8 }}>
              <span style={{
                fontSize: 12, fontWeight: 500, background: '#1B3A6B', color: '#fff',
                padding: '4px 12px', borderRadius: 20
              }}>12 Hours ★</span>
              <span style={{
                fontSize: 12, fontWeight: 500, background: '#E6F5EF', color: '#1D9E75',
                padding: '4px 12px', borderRadius: 20
              }}>Открыт предзаказ</span>
            </div>
            <h2 style={{ fontSize: 24, fontWeight: 600, color: '#1B3A6B', lineHeight: 1.3, margin: 0 }}>
              Трикотажная рубашка для длинного дня
            </h2>
            <p style={{ fontSize: 15, color: '#5A6478', lineHeight: 1.6, margin: 0 }}>
              Флагман. Не мнётся, тянется, сохнет за час. Утром на встречу, днём в самолёт, вечером на ужин — один выбор.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginTop: 8 }}>
              <span style={{ fontSize: 24, fontWeight: 600, color: '#1B3A6B' }}>15 900 ₽</span>
              <a href="/12-hours" style={{
                background: '#1B3A6B', color: '#fff',
                padding: '12px 24px', fontSize: 14, fontWeight: 500,
                borderRadius: 4, textDecoration: 'none', display: 'inline-block'
              }}>
                Подробнее →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#0F2240', padding: '56px 40px 32px' }}>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 40, marginBottom: 48 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 500, letterSpacing: '0.18em', color: '#fff', marginBottom: 12 }}>
                CITYPHASE
              </div>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, maxWidth: 220 }}>
                Деловая одежда для длинного дня. Право не выбирать между комфортом и статусом.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, width: '100%', textAlign: 'center', justifyItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, textAlign: 'center' }}>
                <span style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 4 }}>
                  Продукт
                </span>
                <a href="/12-hours" style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", textDecoration: "none", textAlign: "center", display: "block" }}>12 Hours ★</a>
                <a href="/technology" style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", textDecoration: "none", textAlign: "center", display: "block" }}>Ткань LYONEX</a>
                <a href="/sizes" style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", textDecoration: "none", textAlign: "center", display: "block" }}>Каталог</a>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, textAlign: 'center' }}>
                <span style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 4 }}>
                  Бренд
                </span>
                <a href="/about" style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", textDecoration: "none", textAlign: "center", display: "block" }}>О бренде</a>
                <a href="/about#how" style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", textDecoration: "none", textAlign: "center", display: "block" }}>Как мы делаем одежду</a>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, textAlign: 'center' }}>
                <span style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 4 }}>
                  Контакты
                </span>
                <a href="mailto:hello@cityphase.ru" style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", textDecoration: "none", textAlign: "center", display: "block" }}>hello@cityphase.ru</a>
                <a href="https://t.me/cityphase_ru" style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", textDecoration: "none", textAlign: "center", display: "block" }}>Telegram @cityphase_ru</a>
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
  );
}






