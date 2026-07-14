export const metadata = {
  title: "Ткань LYONEX — состав и свойства | CityPhase",
  description: "LYONEX — трикотаж из лиоцелла, нейлона и эластана. Не мнётся, тянется в 4 направлениях, не удерживает влагу и запах, матовая поверхность.",
  alternates: { canonical: "https://cityphase.ru/technology" },
};

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
          <li><a href="/12-hours" style={{ fontSize: 13, color: '#5A6478', textDecoration: 'none' }}>Рубашка 12 Hours</a></li>
          <li><a href="/technology" style={{ fontSize: 13, color: '#1B3A6B', textDecoration: 'none', fontWeight: 500 }}>Ткань LYONEX</a></li>
          <li><a href="/about" style={{ fontSize: 13, color: '#5A6478', textDecoration: 'none' }}>О бренде</a></li>
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
            ТКАНЬ
          </p>
          <h1 style={{ fontSize: 56, fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: 24, letterSpacing: '-0.01em' }}>
            LYONEX
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.75)', lineHeight: 1.65, maxWidth: 620 }}>
            LYONEX — ткань из трёх волокон: лиоцелла, нейлона и эластана. Именно такой состав позволяет ей выдержать 12-часовой рабочий день.
          </p>
        </div>
      </section>

      {/* S2 ПОЧЕМУ НЕ НАТУРАЛЬНЫЕ ТКАНИ */}
      <section style={{ background: '#F2F3F6', padding: '80px 40px' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <p style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1D9E75', marginBottom: 24 }}>
            СРАВНЕНИЕ
          </p>
          <h2 style={{ fontSize: 28, fontWeight: 600, color: '#1B3A6B', marginBottom: 32, lineHeight: 1.3 }}>
            Почему не натуральные ткани
          </h2>
          <p style={{ fontSize: 16, color: '#3D4558', lineHeight: 1.7, marginBottom: 20 }}>
            Традиционные натуральные ткани хороши сами по себе, но длинный деловой день — непростое испытание. В большинстве своём они впитывают влагу и запах, мнутся и плохо гладятся. Обработка против сминания помогает недолго — со временем она вымывается, и ткань возвращается к своей природе.
          </p>
          <p style={{ fontSize: 16, color: '#3D4558', lineHeight: 1.7 }}>
            Мы не отказались от натурального. Мы взяли у него главное — мягкость и ощущение на коже — и убрали слабые стороны. Как именно, объясняет состав LYONEX.
          </p>
        </div>
      </section>

      {/* S3 ТРИ ВОЛОКНА */}
      <section style={{ background: '#fff', padding: '80px 40px' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <p style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1D9E75', marginBottom: 24 }}>
            СОСТАВ
          </p>
          <h2 style={{ fontSize: 28, fontWeight: 600, color: '#1B3A6B', marginBottom: 40, lineHeight: 1.3 }}>
            Три волокна — три задачи
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
            <div>
              <h3 style={{ fontSize: 20, fontWeight: 600, color: '#1B3A6B', marginBottom: 12 }}>
                Лиоцелл
              </h3>
              <p style={{ fontSize: 15, color: '#3D4558', lineHeight: 1.7 }}>
                Новое, современное волокно из древесной целлюлозы. Отвечает за то, как ткань ощущается: мягкая, приятная на коже, как натуральный материал. Отводит влагу от тела, не накапливает запах и даёт матовую поверхность без блеска.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: 20, fontWeight: 600, color: '#1B3A6B', marginBottom: 12 }}>
                Нейлон
              </h3>
              <p style={{ fontSize: 15, color: '#3D4558', lineHeight: 1.7 }}>
                Держит форму. Именно нейлон отвечает за то, что рубашка почти не мнётся и восстанавливается после стирки. Он же даёт прочность и долговечность.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: 20, fontWeight: 600, color: '#1B3A6B', marginBottom: 12 }}>
                Эластан
              </h3>
              <p style={{ fontSize: 15, color: '#3D4558', lineHeight: 1.7 }}>
                Свобода движений. Ткань тянется во всех направлениях — можно поднять руки, сесть, наклониться, и рубашка не сковывает и не тянет.
              </p>
            </div>
          </div>
          <p style={{ fontSize: 16, color: '#1B3A6B', lineHeight: 1.7, marginTop: 40, fontWeight: 500 }}>
            Лиоцелл — то, что отличает LYONEX от обычных рубашек из синтетики. Это он даёт ткани ощущение натурального материала.
          </p>
        </div>
      </section>

      {/* S4 СВОЙСТВА ТРИКОТАЖНОГО ПОЛОТНА */}
      <section style={{ background: '#F2F3F6', padding: '80px 40px' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <p style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1D9E75', marginBottom: 24 }}>
            СВОЙСТВА
          </p>
          <h2 style={{ fontSize: 28, fontWeight: 600, color: '#1B3A6B', marginBottom: 32, lineHeight: 1.3 }}>
            Свойства трикотажного полотна из LYONEX
          </h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              'Ощущается на теле как натуральная ткань',
              'Почти не мнётся, держит форму',
              'Матовая поверхность, без синтетического блеска',
              'Ноская и прочная, не образует катышков',
              'Не удерживает влагу и запах',
              'Тянется в 4 направлениях',
            ].map((item, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 14, fontSize: 16, color: '#3D4558', lineHeight: 1.6 }}>
                <span style={{ color: '#1D9E75', fontWeight: 600, flexShrink: 0 }}>—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* S6 CTA */}
      <section style={{ background: '#fff', padding: '80px 40px' }}>
        <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 28, fontWeight: 600, color: '#1B3A6B', marginBottom: 28, lineHeight: 1.3 }}>
            Тесты рубашки из ткани LYONEX
          </h2>
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
                <a href="https://telegram.me/cityphase_ru" style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>Telegram @cityphase_ru</a>
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
