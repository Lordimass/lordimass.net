import "./globals.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Lordimass | Portfolio",
  description: "Code, art, community projects, and odd little internet things by Lordimass.",
  icons: {
    icon: "/images/Pfp Mark 2.ico"
  }
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
