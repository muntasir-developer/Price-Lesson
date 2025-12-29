import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarWrapper from "@/components/NavbarWrapper";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/next";
import { Anton, Poppins } from "next/font/google";
import Script from "next/script";
import PageViewTracker from "@/components/PageViewTracker";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Price Lesson | Learn Stock Market Trading & Investing with Confidence",
  description:
    "Join 200,000+ learners at Price Lesson Hindi and master stock market trading, investing, and personal finance in simple Hindi. From basics to advanced strategies, get lifetime access to premium courses, live doubt sessions, and practical mentorship to achieve true financial freedom.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="facebook-domain-verification"
          content="p051ipis68nmz3ndd9thhuj8alaa9b"
        />
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-W77DQ6DR');
            `,
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  ${anton.variable} ${poppins.variable}`}
      >
        <NavbarWrapper />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W77DQ6DR"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <PageViewTracker />
        {children}
        <Analytics />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              backdropFilter: "blur(15px)", // stronger blur for glass effect
              background: "rgba(255, 255, 255, 0.1)", // very transparent white
              color: "#ffffff", // white text
              borderRadius: "12px", // rounded corners
              padding: "16px 24px", // spacing inside toast
              boxShadow: "0 8px 32px rgba(0,0,0,0.25)", // subtle shadow
              border: "1px solid rgba(255,255,255,0.6)", // white semi-transparent border
              fontWeight: "500", // medium font
            },
          }}
        />
      </body>
    </html>
  );
}
