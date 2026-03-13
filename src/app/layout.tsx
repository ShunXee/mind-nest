import type { Metadata } from "next";
import { Noto_Sans_TC, Varela_Round } from "next/font/google";
import "./globals.css";

const headingFont = Varela_Round({
  variable: "--font-varela-round",
  subsets: ["latin"],
  weight: "400",
});

const bodyFont = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mind-Nest | 家庭心理教育平台",
  description:
    "Mind-Nest 是面向家庭照护者的 AI 心理教育网站，提供双语微课程、沟通练习与本地支持资源。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-HK">
      <body className={`${headingFont.variable} ${bodyFont.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
