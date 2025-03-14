import { ChevronRight } from "lucide-react";
import Link from "next/link";
import MenuPage from "./components/MenuPage";
import MenuExplore from "./components/MenuExplore";
import MenuQualities from "./components/MenuQualities";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: "Menu - RalphNexus | Fresh Pizza, Burgers, Pasta & More",
  description: "Explore our delicious menu at RalphNexus! Enjoy fresh pizza, burgers, pasta, cold drinks, and more. Fast delivery and exclusive deals available.",
  keywords: "menu, pizza, burgers, pasta, cold drinks, hot drinks, RalphNexus, food delivery",
  openGraph: {
    title: "Menu - RalphNexus | Fresh Pizza, Burgers, Pasta & More",
    description: "Explore our delicious menu at RalphNexus! Enjoy fresh pizza, burgers, pasta, cold drinks, and more. Fast delivery and exclusive deals available.",
    images: "https://ralphnexus.vercel.app/og-image.jpg", 
    url: "https://ralphnexus.vercel.app/menu",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Menu - RalphNexus | Fresh Pizza, Burgers, Pasta & More",
    description: "Explore our delicious menu at RalphNexus! Enjoy fresh pizza, burgers, pasta, cold drinks, and more. Fast delivery and exclusive deals available.",
    images: "https://ralphnexus.vercel.app/og-image.jpg",
  },
};

export default function page() {
  return (
    <main>
      {/* Breadcrumb and Page Title Section */}
      <div className="bg-[#F8F5F0] flex items-center justify-center gap-4 py-16 flex-col">
        <h1 className="font-bold text-5xl">Menu</h1>
        <div className="flex flex-row gap-1 items-center">
          <Link href="/" className="text-gray-500">
            Home
          </Link>{" "}
          <p className="text-md font-extrabold">
            <ChevronRight className="size-4" />
          </p>{" "}
          <p>Menu</p>
        </div>
      </div>

      {/* Menu Components */}
      <MenuPage />
      <MenuExplore />
      <MenuQualities />
    </main>
  );
}