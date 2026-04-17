export default function Home() {
  return (
    <main>
      {/* NAV */}
      <nav style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '18px 40px', borderBottom: '0.5px solid #DDE1E9', background: '#fff'
      }}>
        <span style={{ fontSize: 13, fontWeight: 500, letterSpacing: '0.18em', color: '#1B3A6B' }}>
          CITYPHASE
        </span>
        <ul style={{ display: 'flex', gap: 28, listStyle: 'none', margin: 0, padding: 0 }}>
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
        <div style={{ flex: 1, maxWidth: 480 }}>
          <div style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1D9E75', fontWeight: 500, marginBottom: 20 }}>
            Бренд · 2026
          </div>
          <h1 style={{ fontSize: 32, fontWeight: 500, color: '#1B3A6B', lineHeight: 1.25, marginBottom: 20, letterSpacing: '-0.01em' }}>
            Одежда, созданная инженерами, для длинного дня
          </h1>
          <p style={{ fontSize: 15, color: '#5A6478', lineHeight: 1.7, marginBottom: 36, maxWidth: 380 }}>
            Для тех, кто хочет выглядеть безупречно — и больше не думать об этом
          </p>
          <div style={{ display: 'flex', gap: 12 }}>
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
        background: '#1B3A6B', padding: '14px 40px',
        display: 'flex', gap: 40, justifyContent: 'center'
      }}>
        {['Почти не мнётся', 'Сохнет за час', 'В ней не жарко', '4-way stretch'].map((item) => (
          <span key={item} style={{ fontSize: 12, color: '#fff', fontWeight: 500, letterSpacing: '0.06em' }}>
            {item}
          </span>
        ))}
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
              <span style={{ fontSize: 16, fontWeight: 500, color: '#1B3A6B' }}>13&nbsp;900&nbsp;&#8381;</span>
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
      <footer style={{
        padding: '24px 40px 24px 56px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        borderTop: '0.5px solid #DDE1E9', background: '#fff'
      }}>
        <span style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.16em', color: '#1B3A6B' }}>
          CITYPHASE
        </span>
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          <a href="https://t.me/cityphase_ru" style={{ fontSize: 12, color: '#5A6478', textDecoration: 'none' }}>
            @cityphase_ru
          </a>
          <span style={{ fontSize: 12, color: '#DDE1E9' }}>·</span>
          <a href="mailto:hello@cityphase.ru" style={{ fontSize: 12, color: '#5A6478', textDecoration: 'none' }}>
            hello@cityphase.ru
          </a>
        </div>
        <span style={{ fontSize: 11, color: '#5A6478' }}>© 2026 CityPhase</span>
      </footer>
    </main>
  );
}
