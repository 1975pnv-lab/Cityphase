import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

export const metadata = {
  title: "CityPhase — одежда для длинного дня",
  description: "Деловая одежда, созданная инженерами. Не мнётся, тянется, сохнет за час.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" translate="no">
      <body style={{ margin: 0, padding: 0, fontFamily: 'Inter, sans-serif' }}>
        {children}
        <Script id="metrika" strategy="afterInteractive">{`
          (function(m,e,t,r,i,k,a){
            m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
          })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=108700112', 'ym');
          ym(108700112, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
        `}</Script>
        <noscript>
          <div><img src="https://mc.yandex.ru/watch/108700112" style={{position:'absolute', left:'-9999px'}} alt="" /></div>
        </noscript>
      </body>
    </html>
  );
}