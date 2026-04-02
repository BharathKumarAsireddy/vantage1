import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vantage Media Consulting | Strategic Media Solutions",
  description:
    "Vantage Media Consulting delivers premium media strategy, brand consulting, digital marketing, and communications solutions to elevate your business.",
  keywords: "media consulting, brand strategy, digital marketing, PR, communications",
  openGraph: {
    title: "Vantage Media Consulting",
    description: "Strategic Media Solutions for Modern Businesses",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased bg-[#1a1a1a] text-white">{children}</body>
    </html>
  );
}
