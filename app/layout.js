import "./globals.css";

const url = "https://queen-and-queen-kabukicho.vercel.app";
export const metadata = {
  metadataBase: new URL(url),
  title: "Queen and Queen KABUKICHO｜新宿歌舞伎町 ニューハーフラウンジ",
  description: "新宿・歌舞伎町のLADYBOY LOUNGE、Queen and Queen KABUKICHO。住所、営業時間、アクセス、Googleマップをご案内します。",
  alternates: { canonical: url },
  robots: { index: true, follow: true },
  openGraph: { title: "Queen and Queen KABUKICHO", description: "新宿歌舞伎町のニューハーフラウンジ。店舗情報とアクセスをご案内します。", url, siteName: "Queen and Queen KABUKICHO", locale: "ja_JP", type: "website" }
};
export default function RootLayout({children}) { return <html lang="ja"><body>{children}</body></html>; }
