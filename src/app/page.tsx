import { Metadata } from "next";
import Hero from "./components/Hero";
import Regular from "./components/Regular";
import BestSelling from "./components/BestSelling";
import Discover from "./components/Discover";
import Specials from "./components/Specials";
import BestDeals from "./components/BestDeals";
import NewsLetter from "./components/NewsLetter";
import BottomHero from "./components/BottomHero";
import HeroFooter from "./components/HeroFooter";
import TodaysLunch from "./components/TodaysLunch";
import NewEvents from "./components/NewEvents";


export const metadata:Metadata = {
  title: "Raphnexus | Best Deals on Pizza, Burgers, Drinks & More",
  description:
    "Craving delicious food? Raphnexus serves the best pizza, burgers, drinks, pasta, and more! Order now and enjoy mouthwatering flavors with unbeatable prices.",
  keywords:
    "Raphnexus, pizza deals, burgers, pasta, drinks, food delivery, best fast food, restaurant, lunch specials",
  openGraph: {
    title: "Raphnexus | Best Deals on Pizza, Burgers, Drinks & More",
    description:
      "Craving delicious food? Raphnexus serves the best pizza, burgers, drinks, pasta, and more! Order now and enjoy mouthwatering flavors with unbeatable prices.",
    url: "https://raphnexus.com",
    type: "website",
    images: [
      {
        url: "https://raphnexus.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Delicious pizza, burgers, pasta, and drinks from Raphnexus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raphnexus | Best Deals on Pizza, Burgers, Drinks & More",
    description:
      "Order the best pizza, burgers, pasta, and drinks from Raphnexus today!",
    images: ["https://raphnexus.com/og-image.jpg"],
  },
};

export default function Home() {
  return (
    <main className=" overflow-x-hidden">
      <Hero />
      <Regular />
      <BestSelling />
      <Discover />
      <Specials />
      <TodaysLunch />
      <BestDeals />
      <NewEvents />
      <NewsLetter />
      <BottomHero />
      <HeroFooter />
    </main>
  );
}
