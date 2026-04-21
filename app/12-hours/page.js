'use client';
import React from 'react';
export default function TwelveHours() {
  const [submitted, setSubmitted] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.target;
    const data = new FormData(form);
    await fetch('https://formspree.io/f/mykldvkv', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' }
    });
    setSubmitting(false);
    setSubmitted(true);
    form.reset();
  }
  return (
    <main>
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
          <li><a href="/technology" style={{ fontSize: 13, color: '#5A6478', textDecoration: 'none' }}>Технология</a></li>
          <li><a href="/about" style={{ fontSize: 13, color: '#5A6478', textDecoration: 'none' }}>О бренде</a></li>
        </ul>
        <a href="#order" style={{ fontSize: 12, color: '#1D9E75', fontWeight: 500, textDecoration: 'none', letterSpacing: '0.04em' }}>
          Предзаказ →
        </a>
      </nav>

      {/* S1 HERO */}
      <section style={{ background: '#fff', padding: '80px 40px 72px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 40 }}>
        <div style={{ flex: 1, maxWidth: 520 }}>
          <div style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1D9E75', fontWeight: 500, marginBottom: 20 }}>
            Флагман линейки Long Day
          </div>
          <h1 style={{ fontSize: 36, fontWeight: 500, color: '#1B3A6B', lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.01em' }}>
            Длинный день — один выбор
          </h1>
          <p style={{ fontSize: 15, color: '#5A6478', lineHeight: 1.7, marginBottom: 36, maxWidth: 440 }}>
            12 часов: почти не мнётся, полная свобода движений, дышимость и комфорт — деловой вид без компромиссов.
          </p>
          <a href="#order" style={{
            background: '#1B3A6B', color: '#fff', border: 'none',
            padding: '14px 28px', fontSize: 14, fontWeight: 500,
            borderRadius: 4, cursor: 'pointer', textDecoration: 'none',
            letterSpacing: '0.03em', display: 'inline-block'
          }}>
            Записаться на предзаказ
          </a>
        </div>
        <div style={{ width: 280, flexShrink: 0, background: '#F2F3F6', borderRadius: 8, height: 360, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: 11, letterSpacing: '0.1em', color: '#5A6478', textTransform: 'uppercase' }}>Фото после семпла</span>
        </div>
      </section>

      {/* S2 ПРОБЛЕМА */}
      <section style={{ background: '#F2F3F6', padding: '64px 40px' }}>
        <div style={{ fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#1D9E75', marginBottom: 32 }}>
          Узнаёшь себя?
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 560 }}>
          {[
            'Утром погладил — к обеду уже мятая',
            'Три часа в самолёте. Жарко, душно — и сразу на встречу',
            'Деловой ужин после длинного дня. Рубашка выглядит несвежей',
          ].map((item) => (
            <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
              <span style={{ color: '#1D9E75', fontWeight: 500, flexShrink: 0 }}>—</span>
              <span style={{ fontSize: 15, color: '#1A1F2E', lineHeight: 1.6 }}>{item}</span>
            </div>
          ))}
          <div style={{ marginTop: 8, fontSize: 16, fontWeight: 500, color: '#1B3A6B' }}>
            Как выглядеть по-деловому и чувствовать себя комфортно?
          </div>
        </div>
      </section>

      {/* S3 РЕШЕНИЕ */}
      <section style={{ background: '#fff', padding: '64px 40px' }}>
        <div style={{ fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#1D9E75', marginBottom: 16 }}>
          Решение
        </div>
        <p style={{ fontSize: 15, color: '#5A6478', lineHeight: 1.75, maxWidth: 560 }}>
          12 Hours ★ — трикотажная рубашка из LYONEX, спроектированная для полного дня. Утром на встречу, днём в самолёт, вечером на ужин — один выбор, никаких компромиссов. Мы решили каждую проблему деловой рубашки по очереди — и проверили что это работает.
        </p>
      </section>

      {/* S4 ДОКАЗАТЕЛЬСТВО */}
      <section style={{ background: '#F2F3F6', padding: '64px 40px' }}>
        <div style={{ fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#1D9E75', marginBottom: 32 }}>
          Проверьте сами
        </div>
        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
          {[
            { title: '«Чемодан»', text: 'Складываем рубашку, кладём в чемодан. Через 3 часа достаём рядом с обычной рубашкой. Смотрим результат.' },
            { title: '«Стирка»', text: 'Стираем руками, вешаем на плечики. Таймер. Через час — готова к носке.' },
            { title: '«12 часов»', text: 'Надеваем утром, снимаем вечером. Только рубашка и время.' },
          ].map((item) => (
            <div key={item.title} style={{ flex: '1 1 200px', background: '#fff', border: '0.5px solid #DDE1E9', borderRadius: 8, padding: '20px 24px' }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: '#1B3A6B', marginBottom: 10 }}>{item.title}</div>
              <div style={{ fontSize: 13, color: '#5A6478', lineHeight: 1.65 }}>{item.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* S5 СВОЙСТВА */}
      <section style={{ background: '#fff', padding: '64px 40px' }}>
        <div style={{ fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#1D9E75', marginBottom: 32 }}>
          Четыре проблемы. Четыре решения.
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, maxWidth: 640 }}>
          {[
            { claim: 'Почти не мнётся', text: 'Достаёте из чемодана — выглядит как только что надетая' },
            { claim: 'Полная свобода движений', text: '4-way stretch — тянется в любую сторону, не сковывает' },
            { claim: 'В ней не жарко', text: 'Лиоцелл отводит тепло — комфортно при длинном дне' },
            { claim: 'Сохнет за час', text: 'Постирали руками — через час готова к носке' },
          ].map((item) => (
            <div key={item.claim} style={{ borderLeft: '2px solid #1D9E75', paddingLeft: 16 }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: '#1A1F2E', marginBottom: 4 }}>{item.claim}</div>
              <div style={{ fontSize: 13, color: '#5A6478', lineHeight: 1.55 }}>{item.text}</div>
            </div>
          ))}
        </div>
      </section>

 {/* S8 ДЕТАЛИ */}
      <section style={{ background: '#F2F3F6', padding: '64px 40px' }}>
        <div style={{ fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#1D9E75', marginBottom: 32 }}>
          Продумана каждая деталь
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 560 }}>
          {[
            { name: 'Воротник', text: 'Spread collar — не валится без галстука, не душит в застёгнутом виде.' },
            { name: 'Пуговицы', text: 'Логотип CityPhase. Запасная пуговица в комплекте.' },
            { name: 'Тейп и петля', text: 'Жаккардовый тейп внутри стойки — белый логотип на тёмно-синем фоне и зелёная тканая петля. Детали которые видите только вы.' },
          ].map((item) => (
            <div key={item.name} style={{ display: 'flex', gap: 16, background: '#fff', border: '0.5px solid #DDE1E9', borderRadius: 8, padding: '14px 20px' }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: '#1B3A6B', minWidth: 100, flexShrink: 0 }}>{item.name}</div>
              <div style={{ fontSize: 13, color: '#5A6478', lineHeight: 1.55 }}>{item.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* S6 LYONEX */}
      <section style={{ background: '#F2F3F6', padding: '64px 40px' }}>
        <div style={{ fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#1D9E75', marginBottom: 16 }}>
          Что внутри — ткань LYONEX
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 560 }}>
          {[
            { name: 'Лиоцелл — основа LYONEX', text: 'Матовая поверхность, мягкость и дышимость — ощущение натурального материала при функциональности технической ткани.' },
            { name: 'Нейлон', text: 'Держит форму. Рубашка не мнётся в чемодане и восстанавливается после стирки.' },
            { name: 'Эластан', text: 'Свобода движений. Тянется в четырёх направлениях — не сковывает ни за рулём, ни на встрече.' },
          ].map((item) => (
            <div key={item.name} style={{ background: '#fff', border: '0.5px solid #DDE1E9', borderRadius: 8, padding: '16px 20px' }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: '#1B3A6B', marginBottom: 6 }}>{item.name}</div>
              <div style={{ fontSize: 13, color: '#5A6478', lineHeight: 1.65 }}>{item.text}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 20, fontSize: 13, fontWeight: 500, color: '#1B3A6B', fontStyle: 'italic' }}>
          Три компонента. Каждый решает конкретную задачу.
        </div>
      </section>

      {/* S9 ЦЕНА */}
      <section style={{ background: '#fff', padding: '64px 40px' }}>
        <div style={{ fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#1D9E75', marginBottom: 24 }}>
          12 Hours ★
        </div>
        <div style={{ fontSize: 36, fontWeight: 500, color: '#1B3A6B', marginBottom: 16 }}>13 900 &#8381;</div>
        <div style={{ display: 'flex', gap: 32, marginBottom: 20 }}>
          <div>
            <div style={{ fontSize: 11, color: '#5A6478', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Цвет</div>
            <div style={{ fontSize: 14, color: '#1A1F2E' }}>Белый · Голубой</div>
          </div>
          <div>
            <div style={{ fontSize: 11, color: '#5A6478', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Размер</div>
            <div style={{ fontSize: 14, color: '#1A1F2E' }}>M · L · XL</div>
          </div>
        </div>
        <p style={{ fontSize: 13, color: '#5A6478', maxWidth: 440, lineHeight: 1.65, marginBottom: 28 }}>
          Премиальный материал, производство с контролем на каждом этапе и внимание к деталям. Ничего лишнего.
        </p>
       <a href="#order" style={{
  background: '#1D9E75', color: '#fff', border: 'none',
  padding: '16px 32px', fontSize: 15, fontWeight: 500,
  borderRadius: 4, cursor: 'pointer', textDecoration: 'none',
  letterSpacing: '0.03em', display: 'block', textAlign: 'center',
  maxWidth: 360
}}>
  Записаться на предзаказ →
</a>
      </section>

     {/* S10 ФОРМА */}
      <section id="order" style={{ background: '#1B3A6B', padding: '64px 40px' }}>
        <div style={{ maxWidth: 480, margin: '0 auto' }}>
          <div style={{ fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#1D9E75', marginBottom: 16 }}>
            Предзаказ
          </div>
          <h2 style={{ fontSize: 24, fontWeight: 500, color: '#fff', marginBottom: 8, lineHeight: 1.3 }}>
            Первая партия — 200 единиц
          </h2>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', marginBottom: 32, lineHeight: 1.6 }}>
            Запись открыта до 25 августа. Оплата после подтверждения заявки.
          </p>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 24, marginTop: -16 }}>
            Осталось 200 из 200 мест
          </p>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <div style={{ fontSize: 20, fontWeight: 600, color: '#fff', marginBottom: 12 }}>
                Заявка принята ✓
              </div>
              <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>
                Мы сообщим вам, когда откроется возможность для оплаты.
              </div>
            </div>
          ) : (
          <form
            onSubmit={handleSubmit}
            style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
          >
            <input
              type="text"
              name="name"
              placeholder="Имя"
              required
              style={{
                padding: '12px 16px', fontSize: 14, borderRadius: 4,
                border: '0.5px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.1)',
                color: '#fff', outline: 'none', width: '100%'
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              style={{
                padding: '12px 16px', fontSize: 14, borderRadius: 4,
                border: '0.5px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.1)',
                color: '#fff', outline: 'none', width: '100%'
              }}
            />
            <select
              name="size"
              required
              style={{
                padding: '12px 16px', fontSize: 14, borderRadius: 4,
                border: '0.5px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.1)',
                color: '#fff', outline: 'none', width: '100%'
              }}
            >
              <option value="" style={{ color: '#1A1F2E' }}>Размер</option>
              <option value="M" style={{ color: '#1A1F2E' }}>M</option>
              <option value="L" style={{ color: '#1A1F2E' }}>L</option>
              <option value="XL" style={{ color: '#1A1F2E' }}>XL</option>
            </select>
            <select
              name="color"
              required
              style={{
                padding: '12px 16px', fontSize: 14, borderRadius: 4,
                border: '0.5px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.1)',
                color: '#fff', outline: 'none', width: '100%'
              }}
            >
              <option value="" style={{ color: '#1A1F2E' }}>Цвет</option>
              <option value="Белый" style={{ color: '#1A1F2E' }}>Белый</option>
              <option value="Голубой" style={{ color: '#1A1F2E' }}>Голубой</option>
            </select>
            <button
              type="submit"
              style={{
                background: '#1D9E75', color: '#fff', border: 'none',
                padding: '14px 28px', fontSize: 14, fontWeight: 500,
                borderRadius: 4, cursor: 'pointer', marginTop: 4
              }}
            >
              {submitting ? 'Отправляем...' : 'Записаться'}
            </button>
          </form>
          )}
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