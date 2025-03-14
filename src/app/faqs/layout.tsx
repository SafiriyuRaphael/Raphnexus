export const metadata = {
    title: "Frequently Asked Questions - RaphNexus",
    description: "Find answers to common questions about ordering, ingredients, and delivery. Get all the details here!",
    openGraph: {
      title: "Frequently Asked Questions - RaphNexus",
      description: "Find answers to common questions about ordering, ingredients, and delivery. Get all the details here!",
      url: "https://raphnexus.vercel.app/faq",
      type: "website",
      images: [
        {
          url: "https://raphnexus.vercel.app/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "FAQ - RaphNexus",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Frequently Asked Questions - RaphNexus",
      description: "Find answers to common questions about ordering, ingredients, and delivery. Get all the details here!",
      images: ["https://raphnexus.vercel.app/og-image.jpg"],
    },
  };
  
  export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
  }
  