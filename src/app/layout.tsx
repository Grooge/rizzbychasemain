import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Rizz by Chase | Dating Profile Photo Transformation",
    template: "%s | Rizz by Chase",
  },
  description:
    "Get dating photos that actually work. Rizz by Chase helps men get better dating results by creating natural, high-performing photos that reflect who you actually are.",
  keywords: [
    "dating profile photos",
    "dating app optimization",
    "Hinge photos",
    "Tinder photos",
    "Bumble photos",
    "profile transformation",
    "dating coach",
    "photo enhancement",
  ],
  authors: [{ name: "Chase" }],
  creator: "Rizz by Chase",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rizzbychase.com",
    siteName: "Rizz by Chase",
    title: "Rizz by Chase | Dating Profile Photo Transformation",
    description:
      "Get dating photos that actually work. Transform your dating profile with photos that show your authentic best self.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rizz by Chase - Dating Profile Transformation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rizz by Chase | Dating Profile Photo Transformation",
    description:
      "Get dating photos that actually work. Transform your dating profile with photos that show your authentic best self.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${plusJakarta.variable} ${inter.variable} antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
