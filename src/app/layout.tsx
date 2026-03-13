import type { Metadata } from "next";
import { SiteFrame } from "@/components/layout/site-frame";
import "./globals.css";

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
      <body className="antialiased">
        <SiteFrame>{children}</SiteFrame>
      </body>
    </html>
  );
}
