

import Link from "next/link"
import { ChevronRight } from "lucide-react"
import AboutHead from "./components/AboutHead"
import AboutVid from "./components/AboutVid"
import AboutReviews from "./components/AboutReviews"
import AboutQuality from "./components/AboutQuality"
import AboutDelivery from "./components/AboutDelivery"
import AboutChef from "./components/AboutChef"
import { Metadata } from "next"

export const metadata:Metadata = {
  title: "About Us - RalphNexus | Our Story, Quality, and Team",
  description: "Learn more about RalphNexus! Discover our story, commitment to quality, and meet our talented chefs. We deliver delicious food with passion and care.",
  keywords: "about us, RalphNexus, our story, food quality, chefs, delivery, restaurant",
  openGraph: {
    title: "About Us - RalphNexus | Our Story, Quality, and Team",
    description: "Learn more about RalphNexus! Discover our story, commitment to quality, and meet our talented chefs. We deliver delicious food with passion and care.",
    images: [
      {
        url: "https://ralphnexus.vercel.app/seo/about-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RaphNexus Blog Cover Image",
      },
    ], 
    url: "https://ralphnexus.vercel.app/about", 
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - RalphNexus | Our Story, Quality, and Team",
    description: "Learn more about RalphNexus! Discover our story, commitment to quality, and meet our talented chefs. We deliver delicious food with passion and care.",
    images: "https://ralphnexus.vercel.app/seo/about-og-image.jpg", 
  },
};


export default function page() {
  return (
    <main>
          <div>
      <div className="bg-[#F8F5F0] flex items-center justify-center gap-4 py-16 flex-col">
        <h1 className="font-bold text-5xl">About Us</h1>
        <div className=" flex flex-row gap-1 items-center">
            <Link href="/" className="text-gray-500">Home</Link> <p className="text-md font-extrabold"><ChevronRight className="size-4"/></p> <p>About us</p>
        </div>
      </div>
      <AboutHead/>
      <AboutVid/>
      <AboutQuality/>
      <AboutReviews/>
      <AboutChef/>
      <AboutDelivery/>
    </div>
    </main>
  )
}
