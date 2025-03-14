import Link from "next/link";
import { ChevronRight } from "lucide-react";
import OurHistory from "./components/OurHistory";
import HistoryLine from "./components/HistoryLine";



export const metadata = {
  title: "Our History - RaphNexus",
  description: "Discover the story behind RaphNexus. Learn about our journey, milestones, and achievements that shaped who we are today.",
  openGraph: {
    title: "Our History - RaphNexus",
    description: "Discover the story behind RaphNexus. Learn about our journey, milestones, and achievements that shaped who we are today.",
    url: "https://raphnexus.vercel.app/our-history",
    type: "website",
    images: [
      {
        url: "https://raphnexus.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Our History - RaphNexus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our History - RaphNexus",
    description: "Discover the story behind RaphNexus. Learn about our journey, milestones, and achievements that shaped who we are today.",
    images: ["https://raphnexus.vercel.app/og-image.jpg"],
  },
};

export default function Page() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[#F8F5F0] flex items-center justify-center flex-col py-16">
        <h1 className="font-bold text-5xl">Our History</h1>
        <nav aria-label="breadcrumb" className="flex flex-row gap-1 items-center">
          <Link href="/" className="text-gray-500 hover:underline">Home</Link>
          <ChevronRight className="size-4 text-gray-700" aria-hidden="true" />
          <span className="text-gray-900 font-semibold">Our History</span>
        </nav>
      </section>

      {/* Content */}
      <section>
        <OurHistory />
        <HistoryLine />
      </section>
    </main>
  );
}
