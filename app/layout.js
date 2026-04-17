import { Inter } from "next/font/google";
import "./globals.css";

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
      </body>
    </html>
  );
}
