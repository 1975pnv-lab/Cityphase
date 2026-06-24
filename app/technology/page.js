export default function Technology() {
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
          <li><a href="/technology" style={{ fontSize: 13, color: '#1B3A6B', textDecoration: 'none', fontWeight: 500 }}>Ткань LYONEX</a></li>
          <li><a href="/about" style={{ fontSize: 13, color: '#5A6478', textDecoration: 'none' }}>О бренде</a></li>
        </ul>
        <a href="/12-hours#order" style={{ fontSize: 12, color: '#1D9E75', fontWeight: 500, textDecoration: 'none' }}>
          Предзаказ →
        </a>
      </nav>

            {/* S1 LYONEX BANNER */}
      <section style={{ background: '#1B3A6B', padding: '80px 40px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <p style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1D9E75', marginBottom: 16 }}>
            ТКАНЬ
          </p>
          <h1 style={{ fontSize: 56, fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: 24, letterSpacing: '-0.01em' }}>
            LYONEX
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.75)', lineHeight: 1.65, maxWidth: 620 }}>
            Одна платформа волокна — нейлон, лиоцелл и эластан. Дифференциация линеек через структуру плетения и граммаж, не через химический состав.
          </p>
        </div>
      </section>

      {/* S2 ТРИ СВОЙСТВА */}
      <section style={{ background: '#F2F3F6', padding: '80px 40px' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <p style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1D9E75', marginBottom: 40 }}>
            ТОЛЬКО ТО, ЧТО МОЖНО ПРОВЕРИТЬ
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            <div>
              <h3 style={{ fontSize: 20, fontWeight: 600, color: '#1B3A6B', marginBottom: 12 }}>
                Почти не мнётся
              </h3>
              <p style={{ fontSize: 15, color: '#3D4558', lineHeight: 1.7 }}>
                Сложите рубашку, уберите в чемодан на ночь — достаньте утром. Складки расправляются без утюга. Трикотажная структура LYONEX возвращает форму самостоятельно.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: 20, fontWeight: 600, color: '#1B3A6B', marginBottom: 12 }}>
                Сохнет за час
              </h3>
              <p style={{ fontSize: 15, color: '#3D4558', lineHeight: 1.7 }}>
                После стирки или интенсивного дня — 60–90 минут при комнатной температуре. Лиоцелл отводит влагу быстро, нейлон не удерживает воду в структуре полотна.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: 20, fontWeight: 600, color: '#1B3A6B', marginBottom: 12 }}>
                4-way stretch
              </h3>
              <p style={{ fontSize: 15, color: '#3D4558', lineHeight: 1.7 }}>
                Тянется во всех направлениях. Можно поднять руки, сесть, наклониться — рубашка не тянет и не выбивается из брюк.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* S3 ПОЧЕМУ НЕ ХЛОПОК */}
      <section style={{ background: '#fff', padding: '80px 40px' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <p style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1D9E75', marginBottom: 24 }}>
            СРАВНЕНИЕ
          </p>
          <h2 style={{ fontSize: 28, fontWeight: 600, color: '#1B3A6B', marginBottom: 32, lineHeight: 1.3 }}>
            Почему не хлопок
          </h2>
          <p style={{ fontSize: 16, color: '#3D4558', lineHeight: 1.7, marginBottom: 20 }}>
            Хлопок мнётся — и эффект non-iron у обработанного хлопка вымывается после 30–50 стирок. LYONEX не требует химической обработки: свойства заложены в структуру волокна и не деградируют со временем.
          </p>
          <p style={{ fontSize: 16, color: '#3D4558', lineHeight: 1.7 }}>
            Хлопок сохнет медленно. Лиоцелл в составе LYONEX сохнет в разы быстрее — это физика волокна, а не маркетинговое утверждение.
          </p>
        </div>
      </section>

{/* FOOTER */}
      <footer style={{ background: '#0F2240', padding: '56px 40px 32px' }}>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 32, marginBottom: 48 }} style={{ marginBottom: 48 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 500, letterSpacing: '0.18em', color: '#fff', marginBottom: 12 }}>
                CITYPHASE
              </div>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, maxWidth: 220 }}>
                Деловая одежда для длинного дня. Право не выбирать между комфортом и статусом.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 64 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <span style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 4 }}>
                  Продукт
                </span>
                <a href="/12-hours" style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>12 Hours ★</a>
                <a href="/technology" style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>Ткань LYONEX</a>
                <a href="/sizes" style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>Каталог</a>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <span style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 4 }}>
                  Бренд
                </span>
                <a href="/about" style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>О бренде</a>
                <a href="/about#how" style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>Как мы делаем одежду</a>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
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
