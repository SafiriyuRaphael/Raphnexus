import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout - RaphNexus",
  description:
    "Secure your favorite meals with a fast and easy checkout process. Apply coupon codes and enjoy great discounts.",
  openGraph: {
    title: "Checkout - RaphNexus",
    description:
      "Secure your favorite meals with a fast and easy checkout process. Apply coupon codes and enjoy great discounts.",
    url: "https://raphnexus.com/checkout",
    siteName: "RaphNexus",
    images: [
      {
        url: "https://raphnexus.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Checkout Page Preview - RaphNexus",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Checkout - RaphNexus",
    description:
      "Secure your favorite meals with a fast and easy checkout process. Apply coupon codes and enjoy great discounts.",
    images: ["https://raphnexus.com/og-image.jpg"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
