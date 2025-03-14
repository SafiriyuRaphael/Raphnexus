import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import CategoryShopping from "./components/CategoryShopping";
import { getRestaurantMenu } from "@/lib/getRestaurantMenu";
import { notFound } from "next/navigation";

export const revalidate = 36500;

type Params = {
  params: Promise<{ itemName: string }>;
};


export async function generateStaticParams() {
  const menu = await getRestaurantMenu();
  if (!menu) return [];
  return menu.categories.map((item) => ({
    itemName: item.name.replace(/\s+/g, "-").toLowerCase(),
  }));
}


export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const menu = await getRestaurantMenu();
  if (!menu) {
    return { title: "Menu Not Found" };
  }

  const decodedItemName = (await params).itemName.replace(/-/g, " ");
  const category = menu.categories.find(
    (cat) => cat.name.toLowerCase() === decodedItemName.toLowerCase()
  );

  if (!category) {
    return { title: "Category Not Found" };
  }

  const pageUrl = `https://ralphnexus.vercel.app/shop/${(await params).itemName}`;
  const imageUrl = `/seo/${(await params).itemName.toLowerCase()}.png`; 

  return {
    title: `Shop - ${category.name} | RalphNexus`,
    description: `Discover a variety of delicious ${category.name} options at RalphNexus. Freshly made, high-quality meals just for you. Order online now!`,
    openGraph: {
      title: `Shop - ${category.name} | RalphNexus`,
      description: `Explore our selection of ${category.name} at RalphNexus. High-quality ingredients, mouth-watering flavors, and fast delivery! Order today!`,
      url: pageUrl,
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: category.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Shop - ${category.name} | RalphNexus`,
      description: `Check out our ${category.name} selection at RalphNexus. Fresh, tasty, and ready for you. Order now!`,
      images: [imageUrl],
    },
  };
}


// 🟢 Page Component (Server Component)
export default async function Page({ params }: Params) {
  const data = await getRestaurantMenu();
  if (!data) return notFound();

  const decodedItemName = (await params).itemName.replace(/-/g, " ");
  const category = data.categories.find(
    (cat) => cat.name.toLowerCase() === decodedItemName.toLowerCase()
  );

  if (!category) return notFound();

  const menu = { categories: [category] }; // Only pass the found category

  return (
    <main>
      <div className="bg-[#F8F5F0] flex items-center justify-center gap-4 py-16 flex-col">
        <h1 className="font-bold text-5xl">{category.name}</h1>
        <div className="flex flex-row gap-1 items-center">
          <Link href="/" className="text-gray-500">
            Home
          </Link>
          <p className="text-md font-extrabold">
            <ChevronRight className="size-4" />
          </p>
          <p>{category.name}</p>
        </div>
      </div>

      {/* ✅ Pass menu prop correctly */}
      <CategoryShopping menu={menu} />
    </main>
  );
}
