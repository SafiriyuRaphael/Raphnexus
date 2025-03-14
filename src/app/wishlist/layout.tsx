import { Metadata } from "next";

// export const revalidate = 36500;

export async function generateMetadata(): Promise<Metadata> {
    return {
      title: "Your Wishlist | RalphNexus",
      description:
        "Save your favorite items for later! Browse, add to cart, and shop effortlessly from your personalized wishlist at RalphNexus.",
      openGraph: {
        title: "Your Wishlist | RalphNexus",
        description:
          "Keep track of your favorite items and easily purchase them whenever you're ready. Discover top products at RalphNexus!",
        url: "https://ralphnexus.vercel.app/wishlist",
        type: "website",
        images: [
          {
            url: "/og-image.jpg",
            width: 1200,
            height: 630,
            alt: "Wishlist at RalphNexus",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: "Your Wishlist | RalphNexus",
        description:
          "Your personalized wishlist at RalphNexus. Save your favorite products and shop when you're ready!",
        images: ["og-image.jpg"], // Ensure the image exists
      },
    };
  }

export default function WishlistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
