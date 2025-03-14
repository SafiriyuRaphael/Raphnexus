
import { Metadata } from "next";
import { ReactNode } from "react";

import { getRestaurantMenu } from "@/lib/getRestaurantMenu";

export async function generateStaticParams() {
  const data = await getRestaurantMenu();

  if (!data || !data.categories) return [];

  return data.categories.flatMap((category) =>
    category.items.map((item) => ({
      itemName: item.name.toLowerCase().replace(/\s+/g, "-"), // Format URLs like `chicken-burger`
    }))
  );
}


export const metadata: Metadata = {
  title: "RalphNexus | Your Ultimate Meal Shopping Destination",
  description: "Discover the best deals on top-quality products. Shop now at RalphNexus!",
  openGraph: {
    title: "RalphNexus | Your Ultimate Shopping Destination",
    description: "Discover the best deals on top-quality products. Shop now at RalphNexus!",
    url: "https://ralphnexus.vercel.app",
    type: "website",
    images: ["https://ralphnexus.vercel.app/og-image.jpg"], 
  },
  twitter: {
    card: "summary_large_image",
    title: "RalphNexus | Your Ultimate Shopping Destination",
    description: "Discover the best deals on top-quality products. Shop now at RalphNexus!",
    site: "@RalphNexus", 
    images: ["https://ralphnexus.vercel.app/og-image.jpg"], 
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
