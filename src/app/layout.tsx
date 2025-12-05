import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarWrapper from "@/components/NavbarWrapper";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/next";
import { Anton, Poppins } from "next/font/google";
import Script from "next/script";

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  ${anton.variable} ${poppins.variable}`}
      >
         <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1371555451046475');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=1371555451046475&ev=PageView&noscript=1`}
          />
        </noscript>
        <NavbarWrapper />
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
