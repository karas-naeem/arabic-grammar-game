import { AppBar } from "@mui/material";
import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import HamburgerMenu from "./Components/hamburger-menu";

export const metadata: Metadata = {
  title: "نحو عربي",
  description: "نحو عربي هو لعبه لتعليم النحو من الألف إلى الياء",
};


export default async function RootLayout({ children }: LayoutProps<"/">) {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
  return (
    <html lang="ar">
      <AppBar
        color="transparent"
        sx={{
          boxShadow: "none",
        }}
      >
        <ul className="AppBar">
          <li>
            <HamburgerMenu />
          </li>
          <li id="links">
            <Link href="/">الصفحة الرئيسية</Link>
          </li>
          <li id="links">
            <Link href="/games">الألعاب</Link>
          </li>
          <li id="links">
            <Link href="/about">عن المشروع</Link>
          </li>
        </ul>
      </AppBar>
      <body>{children}</body>
    </html>
  );
}
