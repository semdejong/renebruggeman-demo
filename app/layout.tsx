import type { Metadata, Viewport } from "next";
import { Lexend, Libre_Caslon_Text, Martian_Mono } from "next/font/google";
import "./globals.css";
import { content } from "@/content";
import SleadsBadge from "@/components/SleadsBadge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";

const caslon = Libre_Caslon_Text({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: "normal",
  variable: "--font-caslon",
  display: "swap",
});

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-lexend",
  display: "swap",
});

const martian = Martian_Mono({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-martian",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: content.seo.title,
    template: "%s · René Bruggeman Schilderwerken",
  },
  description: content.seo.description,
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
  icons: {
    icon: "/favicon-32.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = { themeColor: content.colors.inkt };

const TRACKER_SRC = "https://sleads-demo-analytics.vercel.app/t.js";
const TRACKER_ENDPOINT = "https://basic-tiger-117.convex.site/track";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={content.seo.lang}
      className={`${caslon.variable} ${lexend.variable} ${martian.variable} h-full antialiased`}
    >
      <head>
        <script async src={TRACKER_SRC} data-demo={content.slug} data-endpoint={TRACKER_ENDPOINT} />
      </head>
      <body className="flex min-h-full flex-col bg-papier font-sans text-inkt leading-[1.6]">
        <a href="#inhoud" className="skip">
          Naar de inhoud
        </a>
        <Header />
        <main id="inhoud" className="rise flex-1">
          {children}
        </main>
        <Footer />
        <MobileBar />
        <SleadsBadge />
      </body>
    </html>
  );
}
