import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteMeta } from "../data/site-meta";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const seasonSans = localFont({
  variable: "--font-season-sans",
  display: "swap",
  src: [
    {
      path: "../fonts/SeasonSans-TRIAL-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/SeasonSans-TRIAL-Medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: siteMeta.title,
  description: siteMeta.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${seasonSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen text-foreground" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
