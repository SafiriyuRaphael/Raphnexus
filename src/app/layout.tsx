import { AuthProvider } from "@/context/AuthContext";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import type { Metadata } from "next";

import { Sacramento, Dancing_Script, Inter } from "next/font/google";
import "./globals.css";
import SideCart from "./cart/components/SideCart";
import FavoriteView from "./wishlist/components/FavoriteView";

import Footer from "./components/Footer";
import SideBar from "./components/SideBar";

const inter = Inter({
  subsets: ["latin"], // You can add 'latin-ext', 'cyrillic', etc.
  variable: "--font-inter", // Optional: for global CSS use
});

const sacramento = Sacramento({
  subsets: ["latin"],
  weight: ["400"], // Sacramento only has one weight
  variable: "--font-sacramento", // Define CSS variable
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Choose your preferred weights
  variable: "--font-dancing-script", // Define CSS variable
});

export const metadata: Metadata = {
  title: "RaphNexus - Best Deals on Products & Delicious Bites",
  description:
    "Shop top-quality products and explore our food blog featuring pizzas, burgers, and drinks. RaphNexus is your go-to for shopping and food insights.",
  keywords: [
    "ecommerce",
    "shopping",
    "best deals",
    "online store",
    "RaphNexus",
    "food blog",
    "pizza",
    "burgers",
    "drinks",
    "meals",
  ],
  authors: [{ name: "Rapheal Safriryu", url: "https://raphnexus.vercel.app" }],
  creator: "Rapheal Safiriyu",
  publisher: "RaphNexus",
  metadataBase: new URL("https://raphnexus.vercel.app"),
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: "#ffffff",

  referrer: "strict-origin-when-cross-origin",
  openGraph: {
    title: "RaphNexus - Best Deals & Food Blog",
    description:
      "Shop the latest products and check out our food blog for pizza, burgers, and drinks.",
    url: "https://raphnexus.vercel.app",
    siteName: "RaphNexus",
    images: [
      {
        url: "https://raphnexus.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RaphNexus - Best Shopping & Food Blog",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RaphNexus - Shopping & Food Blog",
    description: "Discover amazing deals and read about delicious meals.",
    creator: "@raphnexus",
    images: ["https://raphnexus.vercel.app/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-16x16.png",
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],
  },

  verification: {
    google: "ewLap_91m8C8JD5ArHoKtx57QoZpcn_j7I3f0tBm-Ts",
    // bing: "your-bing-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="en">
        <body
          className={`${inter.className} ${sacramento.variable} ${dancingScript.variable}  antialiased`}
        >
          <Header />
          <ScrollToTop />
          <SideBar />
          <SideCart />
          <FavoriteView />
          {children}
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
}
