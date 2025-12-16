import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/lnio/components/theme";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: "https://fsr-wiwi-halle.de/favicon.ico",
  title: {
    template: "%s | FSR Wiwi",
    default: "FSR Wiwi Halle",
  },
  description:
    "Fachschaftsrat Wirtschaftswissenschaften der MLU Halle-Wittenberg",
  keywords: [
    "Fachschaftsrat",
    "FSR",
    "Wirtschaftswissenschaften",
    "Halle",
    "Halle-Wittenberg",
    "Martin Luther Universität",
    "Universität",
    "MLU",
  ],
  openGraph: {
    url: "https://fsr-wiwi-halle.de",
    siteName: "FSR Wiwi",
    type: "website",
    title: {
      template: "%s | FSR Wiwi",
      default: "FSR Wiwi Halle",
    },
    description:
      "Fachschaftsrat Wirtschaftswissenschaften der MLU Halle-Wittenberg",
    images: [
      {
        url: "https://fsr-wiwi-halle.de/logo.png",
        width: 1200,
        height: 630,
        alt: "Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: {
      template: "%s | FSR Wiwi",
      default: "FSR Wiwi Halle",
    },
    description:
      "Fachschaftsrat Wirtschaftswissenschaften der MLU Halle-Wittenberg",
  },
  alternates: {
    canonical: "https://fsr-wiwi-halle.de",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <Script
          async
          data-website-id="d72a7bb9-59d3-40b7-934a-a48d8dceca3f"
          src="https://analytics.m.lnio.de/script.js"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
          enableSystem
        >
          <Navbar />
          <main className="pt-24">{children}</main>
          <footer>Footer</footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
