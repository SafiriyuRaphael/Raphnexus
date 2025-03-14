
import { Metadata } from "next";
import { ReactNode } from "react";


export const metadata:Metadata = {
    title: "Your Cart - RaphNexus",
    description: "Review your selected items before checkout. Secure and easy shopping experience with RaphNexus.",
    openGraph: {
      title: "Your Cart - RaphNexus",
      description: "Review your selected items before checkout. Secure and easy shopping experience with RaphNexus.",
      url: "https://raphnexus.vercel.app/cart",
      type: "website",
      images: [
        {
          url: "https://raphnexus.vercel.app/og-image.jpg", 
          width: 1200,
          height: 630,
          alt: "Shopping Cart - RaphNexus",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Your Cart - RaphNexus",
      description: "Review your selected items before checkout. Secure and easy shopping experience with RaphNexus.",
      images: ["https://raphnexus.vercel.app/og-image.jpg"],
    },
  };
  



export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
