export default function Home() {
  return (
    <main><style>{`
        .nav-links { display: flex; gap: 28px; list-style: none; margin: 0; padding: 0; }
.hero-section { display: flex; align-items: flex-start; justify-content: space-between; gap: 40px; }
.hero-photo { width: 240px; flex-shrink: 0; height: 300px; }
.btn-row { display: flex; gap: 12px; }
.strip-inner { display: flex; gap: 40px; justify-content: center; }
.strip-wrap { display: block; }
.footer-inner { display: flex; justify-content: space-between; align-items: center; }
@media (max-width: 860px) {
  .nav-links { display: none; }
  .hero-section { flex-direction: column; }
  .hero-photo { width: 100% !important; height: 220px !important; }
  .btn-row { flex-direction: column; }
  .btn-row a { text-align: center; }
  .strip-wrap { display: none; }
  .footer-inner { flex-direction: column; align-items: center; gap: 12px; text-align: center; }
}
      `}</style>
      {/* NAV */}
      <nav style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '18px 40px', borderBottom: '0.5px solid #DDE1E9', background: '#fff'
      }}>
        <span style={{ fontSize: 13, fontWeight: 500, letterSpacing: '0.18em', color: '#1B3A6B' }}>
          CITYPHASE
        </span>
        <ul className="nav-links">
          <li><a href="/shop" style={{ fontSize: 13, color: '#5A6478', textDecoration: 'none' }}>Коллекция</a></li>
          <li><a href="/technology" style={{ fontSize: 13, color: '#5A6478', textDecoration: 'none' }}>Технология</a></li>
          <li><a href="/about" style={{ fontSize: 13, color: '#5A6478', textDecoration: 'none' }}>О бренде</a></li>
        </ul>
        <a href="/12-hours" style={{ fontSize: 12, color: '#1D9E75', fontWeight: 500, textDecoration: 'none', letterSpacing: '0.04em' }}>
          Предзаказ →
        </a>
      </nav>

      {/* HERO */}
      <section style={{
        background: '#fff', padding: '80px 40px 72px',
        display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 40
      }}>
        <div style={{ flex: 1, maxWidth: 560 }}>
          <div style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1D9E75', fontWeight: 500, marginBottom: 20 }}>
            Бренд · 2026
          </div>
         <h1 style={{ fontSize: 38, fontWeight: 600, color: '#1B3A6B', lineHeight: 1.15, marginBottom: 12, letterSpacing: '-0.02em' }}>
  Деловая одежда для длинного дня.
</h1>
<p style={{ fontSize: 22, fontWeight: 400, color: '#5A6478', lineHeight: 1.4, marginBottom: 36 }}>
  Создана инженерами.
</p>
          <div className="btn-row">
            <a href="/shop" style={{
              background: '#1B3A6B', color: '#fff', border: 'none',
              padding: '14px 28px', fontSize: 14, fontWeight: 500,
              borderRadius: 4, cursor: 'pointer', textDecoration: 'none',
              letterSpacing: '0.03em', display: 'inline-block'
            }}>
              Смотреть коллекцию
            </a>
            <a href="/about" style={{
              background: '#fff', color: '#1B3A6B',
              border: '1.5px solid #1B3A6B',
              padding: '14px 24px', fontSize: 14, fontWeight: 500,
              borderRadius: 4, cursor: 'pointer', textDecoration: 'none',
              display: 'inline-block'
            }}>
              О бренде
            </a>
          </div>
        </div>
        <div style={{
          width: 240, flexShrink: 0, background: '#F2F3F6',
          borderRadius: 8, height: 300,
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <span style={{ fontSize: 11, letterSpacing: '0.1em', color: '#5A6478', textTransform: 'uppercase' }}>
            Фото после семпла
          </span>
        </div>
      </section>

      {/* STRIP */}
      <div style={{
        background: '#1B3A6B', padding: '14px 24px',
        display: 'flex', gap: 40, justifyContent: 'center'
      }}>
        <div style={{ display: 'flex', gap: 40, justifyContent: 'center', flexWrap: 'wrap' }}>
          {['Почти не мнётся', 'Сохнет за час', 'В ней не жарко'].map((item) => (
            <span key={item} style={{ fontSize: 12, color: '#fff', fontWeight: 500, letterSpacing: '0.06em', whiteSpace: 'nowrap' }}>{item}</span>
          ))}
        </div>
      </div>

      {/* ФИЛОСОФИЯ */}
      <section style={{ padding: '64px 40px', background: '#fff' }}>
        <div style={{ fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#1D9E75', marginBottom: 16 }}>
          Философия бренда
        </div>
        <p style={{ fontSize: 14, color: '#5A6478', lineHeight: 1.75, maxWidth: 500 }}>
          Деловая одежда давно не менялась. Она мнётся, в ней бывает жарко, она стесняет движения.
          Мы задали себе вопрос: что если подойти к ней как к инженерной задаче — где каждое решение
          обосновано конкретной проблемой? ...Так появился CityPhase.
        </p>
        <div style={{
          marginTop: 28, padding: '20px 24px',
          borderLeft: '2px solid #1D9E75',
          background: '#F2F3F6', borderRadius: '0 6px 6px 0'
        }}>
          <div style={{ fontSize: 13, fontWeight: 500, color: '#1A1F2E', marginBottom: 6 }}>
            Только то, что можно доказать
          </div>
          <div style={{ fontSize: 13, color: '#5A6478', lineHeight: 1.65 }}>
            Каждое свойство наших вещей можно проверить самостоятельно дома или снять на видео.
            Если нельзя — это не аргумент.
          </div>
        </div>
      </section>

      {/* ПРОДУКТ */}
      <section style={{ padding: '64px 40px', background: '#F2F3F6' }}>
        <div style={{ fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#1D9E75', marginBottom: 24 }}>
          Продукт
        </div>
        <div style={{
          border: '0.5px solid #DDE1E9', borderRadius: 8,
          overflow: 'hidden', maxWidth: 300, background: '#fff'
        }}>
          <div style={{
            background: '#F2F3F6', height: 200,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            borderBottom: '0.5px solid #DDE1E9'
          }}>
            <span style={{ fontSize: 11, letterSpacing: '0.08em', color: '#5A6478', textTransform: 'uppercase' }}>
              Фото после семпла
            </span>
          </div>
          <div style={{ padding: '20px 20px 24px' }}>
            <div style={{ fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1D9E75', fontWeight: 500, marginBottom: 8 }}>
              Флагман линейки Long Day
            </div>
            <div style={{ fontSize: 17, fontWeight: 500, color: '#1A1F2E', marginBottom: 6 }}>
              12 Hours ★
            </div>
            <p style={{ fontSize: 13, color: '#5A6478', lineHeight: 1.55, marginBottom: 18 }}>
              Трикотажная рубашка из LYONEX для длинного дня — не мнётся, тянется, сохнет за час.
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 16, fontWeight: 500, color: '#1B3A6B' }}>13 900 ₽</span>
              <a href="/12-hours" style={{
                border: '1.5px solid #1B3A6B', color: '#1B3A6B', background: 'transparent',
                padding: '8px 16px', fontSize: 12, fontWeight: 500,
                borderRadius: 4, textDecoration: 'none', display: 'inline-block'
              }}>
                Подробнее
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '24px', borderTop: '0.5px solid #DDE1E9', background: '#fff' }}>
        <style>{`
          .footer-inner { display: flex; justify-content: space-between; align-items: center; }
          @media (max-width: 860px) { .footer-inner { flex-direction: column; align-items: center; gap: 12px; text-align: center; } }
        `}</style>
        <div className="footer-inner">
          <span style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.16em', color: '#1B3A6B' }}>CITYPHASE</span>
          <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
            <a href="https://t.me/cityphase_ru" style={{ fontSize: 12, color: '#5A6478', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#5A6478"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              @cityphase_ru
            </a>
            <a href="mailto:hello@cityphase.ru" style={{ fontSize: 12, color: '#5A6478', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5A6478" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              hello@cityphase.ru
            </a>
          </div>
          <span style={{ fontSize: 11, color: '#5A6478' }}>© 2026 CITYPHASE</span>
        </div>
      </footer>
    </main>
  );
}
