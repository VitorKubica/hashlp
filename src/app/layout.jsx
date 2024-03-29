import { Inter } from "next/font/google";
import React from "react";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "POC-Hash",
  description: "Prove of concept de next.js para hash for carbon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
