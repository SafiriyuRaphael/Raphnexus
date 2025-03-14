import Link from "next/link";
import { ChevronRight } from "lucide-react";
import OurTeams from "./components/OurTeams";
import Script from "next/script";

export const metadata = {
  title: "Our Team - Meet the Experts Behind Our Success",
  description: "Get to know the talented professionals driving our company forward. Meet our team and learn about their expertise.",
  openGraph: {
    title: "Our Team - Meet the Experts Behind Our Success",
    description: "Get to know the talented professionals driving our company forward. Meet our team and learn about their expertise.",
    url: "https://raphnexus.vercel.app/our-teams",
    siteName: "Your Website Name",
    images: [
      {
        url: "https://raphnexus.vercel.app/images/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Our Team Page Banner",
      },
    ],
    type: "website",
  },
};


export default function Page() {
  // ✅ JSON-LD Schema for SEO (Team Members)
  const teamSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Your Website Name",
    "url": "https://raphnexus.vercel.app/our-teams",
    "employee": [
      {
        "@type": "Person",
        "name": "Oluwatobi Safiriyu",
        "jobTitle": "CEO",
        "image": "https://raphnexus.vercel.app/og-image.jpg",
      },
      {
        "@type": "Person",
        "name": "Oluwatosin Safiriyu",
        "jobTitle": "CTO",
        "image": "https://raphnexus.vercel.app/og-image.jpg",
      },
      {
        "@type": "Person",
        "name": "Rapheal Safiriyu",
        "jobTitle": "Lead Developer",
        "image": "https://raphnexus.vercel.app/og-image.jpg",
      }
    ],
  };

  return (
    <>
      {/* ✅ Inject Schema for SEO */}
      <Script
        id="team-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }}
      />

      <main>
        <div className="bg-[#F8F5F0] flex items-center justify-center gap-4 py-16 flex-col">
          <h1 className="font-bold text-5xl">Our Team</h1>
          <div className="flex flex-row gap-1 items-center">
            <Link href="/" className="text-gray-500">
              Home
            </Link>
            <p className="text-md font-extrabold">
              <ChevronRight className="size-4" />
            </p>
            <p>Our Team</p>
          </div>
        </div>
        <OurTeams />
      </main>
    </>
  );
}
