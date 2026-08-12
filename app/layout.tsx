import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "你好，世界！",
  description: "我的第一个 GitHub Pages 静态页面。",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
