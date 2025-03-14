import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Blogs from "./components/Blogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "RaphNexus Blog - Latest Insights & Articles",
  description:
    "Stay updated with the latest insights, trends, and articles from RaphNexus. Explore a variety of topics and enhance your knowledge.",
  openGraph: {
    title: "RaphNexus Blog - Latest Insights & Articles",
    description:
      "Discover the latest blog posts from RaphNexus, covering various topics. Stay informed with fresh and valuable content.",
    url: "/blog",
    type: "website",
    siteName: "RaphNexus",
    images: [
      {
        url: "https://raphnexus.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RaphNexus Blog Cover Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RaphNexus Blog - Latest Insights & Articles",
    description:
      "Check out the latest posts on RaphNexus and stay ahead with insightful content.",
    images: ["https://raphnexus.vercel.app/og-image.jpg"], 
    site: "@RaphNexus",
  },
};

export default function Page() {
  return (
    <main>
      <div className="bg-[#F8F5F0] flex items-center justify-center gap-4 py-16 flex-col">
        <h1 className="font-bold text-5xl">Our Blog</h1>
        <div className="flex flex-row gap-1 items-center">
          <Link href="/" className="text-gray-500">
            Home
          </Link>
          <p className="text-md font-extrabold">
            <ChevronRight className="size-4" />
          </p>
          <p>Blog</p>
        </div>
      </div>

      <Blogs />
    </main>
  );
}
