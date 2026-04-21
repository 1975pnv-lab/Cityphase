export default function Technology() {
  return (
    <main style={{ background: '#fff', minHeight: '100vh' }}>
      {/* NAV */}
      <nav style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '18px 40px', borderBottom: '0.5px solid #DDE1E9', background: '#fff'
      }}>
        <a href="/" style={{ fontSize: 13, fontWeight: 500, letterSpacing: '0.18em', color: '#1B3A6B', textDecoration: 'none' }}>
          CITYPHASE
        </a>
        <ul className="nav-links" style={{ display: 'flex', gap: 28, listStyle: 'none', margin: 0, padding: 0 }}>
          <li><a href="/12-hours" style={{ fontSize: 13, color: '#5A6478', textDecoration: 'none' }}>Коллекция</a></li>
          <li><a href="/technology" style={{ fontSize: 13, color: '#1B3A6B', textDecoration: 'none', fontWeight: 500 }}>Технология</a></li>
          <li><a href="/about" style={{ fontSize: 13, color: '#5A6478', textDecoration: 'none' }}>О бренде</a></li>
        </ul>
        <a href="/12-hours#order" style={{ fontSize: 12, color: '#1D9E75', fontWeight: 500, textDecoration: 'none' }}>
          Предзаказ →
        </a>
      </nav>

      {/* S1 LYONEX */}
      <section style={{ background: '#fff', padding: '80px 40px' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <p style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1D9E75', marginBottom: 24 }}>
            МАТЕРИАЛ
          </p>
          <h1 style={{ fontSize: 36, fontWeight: 600, color: '#1B3A6B', lineHeight: 1.2, marginBottom: 32 }}>
            LYONEX
          </h1>
          <p style={{ fontSize: 16, color: '#3D4558', lineHeight: 1.7, marginBottom: 20 }}>
            Фирменный материал CityPhase — трикотажное полотно из нейлона, лиоцелла и эластана. Каждый компонент выбран под конкретную задачу, а не для маркетинга.
          </p>
          <p style={{ fontSize: 16, color: '#3D4558', lineHeight: 1.7 }}>
            Нейлон держит форму и устойчив к истиранию. Лиоцелл даёт мягкость, дышимость и быстрое высыхание. Эластан обеспечивает свободу движений в четырёх направлениях.
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

{/* CTA */}
      <section style={{ background: '#1B3A6B', padding: '60px 40px' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.8)', whiteSpace: 'nowrap', marginBottom: 32 }}>
           LYONEX — основа рубашки 12 Hours ★. Первая партия 200 единиц, открыт предзаказ.
          </p>
          <a href="/12-hours" style={{
            display: 'inline-block', background: '#1D9E75', color: '#fff',
            padding: '14px 28px', fontSize: 14, fontWeight: 500,
            borderRadius: 4, textDecoration: 'none', letterSpacing: '0.03em'
          }}>
            Смотреть 12 Hours ★ →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '24px 16px', borderTop: '0.5px solid #DDE1E9', background: '#f1f2f4' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, textAlign: 'center' }}>
          <a href="/" style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.16em', color: '#1B3A6B', textDecoration: 'none' }}>
            CITYPHASE
          </a>
          <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
            <a href="https://t.me/cityphase_ru" style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: '#5A6478', textDecoration: 'none' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#5A6478"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              @cityphase_ru
            </a>
            <a href="mailto:hello@cityphase.ru" style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: '#5A6478', textDecoration: 'none' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5A6478" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              hello@cityphase.ru
            </a>
          </div>
          <span style={{ fontSize: 12, color: '#5A6478' }}>© 2026 CITYPHASE</span>
        </div>
      </footer>
    </main>
  )
}