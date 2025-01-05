import type { Metadata } from "next";
import { Major_Mono_Display, VT323 } from "next/font/google";

import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

import { QrProvider } from "@/context/qr";

const majorMonoDisplay = Major_Mono_Display({
  variable: "--font-major-mono-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const vt323 = VT323({
  variable: "--font-vt323",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "QR Generator",
  description: "Generate QR codes with ease",
  keywords: ["QR", "QR Code", "Generator"],
  creator: "https://www.linkedin.com/in/joseduin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${majorMonoDisplay.variable} ${vt323.variable}`}
        style={{ fontFamily: vt323.style.fontFamily }}
      >
        <QrProvider>{children}</QrProvider>
      </body>
    </html>
  );
}
