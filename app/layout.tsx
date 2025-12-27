import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  manifest: "/manifest.json",
  metadataBase: new URL("https://rhythmmedicalint.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  title: {
    default: "Rhythm Medical International",
    template: "%s - Rhythm Medical International",
  },
  description:
    "Leading the Future of Medical Technology and Healthcare Solutions",
  keywords: [
    "Rhythm Medical International",
    "Rhythm Medical",
    "Medical Devices",
    "Rhythm",
    "Pacemakers",
    "Coronary Stents",
    "Wires",
    "Heart Devices",
    "Medical Equipment",
  ],
  authors: [
    {
      name: "Rhythm Medical International",
      url: "https://rhythmmedicalint.com",
    },
  ],
  robots: "index, follow",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Rhythm Medical International",
  },
  openGraph: {
    title: "Rhythm Medical International",
    description:
      "Leading the Future of Medical Technology and Healthcare Solutions",
    url: "https://rhythmmedicalint.com",
    siteName: "Rhythm Medical International",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Rhythm Medical International",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rhythm Medical International",
    description:
      "Leading the Future of Medical Technology and Healthcare Solutions",
    images: ["/logo.png"],
    creator: "@rhythmmedicalint",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}  antialiased`}>{children}</body>
    </html>
  );
}
