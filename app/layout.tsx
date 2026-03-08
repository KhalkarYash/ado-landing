import React from "react";
import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono, Orbitron } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600", "700"],
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["700", "900"],
});

export const metadata: Metadata = {
  title: "AutoDevOS CLI - Your AI Terminal Coding Agent",
  description:
    "AutoDevOS is an AI-powered CLI tool that amplifies your development capabilities without replacing your creativity.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased bg-linear-to-br from-[hsl(224,45%,3%)] via-[hsl(224,45%,5%)] to-[hsl(220,40%,7%)] text-[hsl(200,40%,97%)]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
