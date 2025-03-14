import { getRestaurantMenu } from "@/lib/getRestaurantMenu";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import RelatedProducts from "../components/RelatedProducts";

import Description from "../components/Description";
import Meal from "../components/Meal";

type Params = {
  params: Promise<{ itemName: string }>;
};

export async function generateStaticParams() {
  const menu = await getRestaurantMenu();
  if (!menu) return [];

  return menu.categories.flatMap((category) =>
    category.items.map((meal) => ({
      itemName: meal.name.replace(/\s+/g, "-").toLowerCase(),
    }))
  );
}



export async function generateMetadata({ params }: Params) {
  const menu = await getRestaurantMenu();
  if (!menu) return { title: "Item Not Found" };

  const decodedItemName = (await params).itemName
    .replace(/-/g, " ")
    .toLowerCase();
  const category = menu.categories.find((cat) =>
    cat.items.some((meal) => meal.name.toLowerCase() === decodedItemName)
  );

  if (!category) return { title: "Item Not Found" };

  const mealItem = category.items.find(
    (item) => item.name.toLowerCase() === decodedItemName
  );

  if (!mealItem) return { title: "Item Not Found" };

  const imageUrl = `/menu/${mealItem.image}.png`; 
  const pageUrl = `https://ralphnexus.vercel.app/products/${(await params).itemName}`;

  return {
    title: `${mealItem.name} - ${category.name} | RalphNexus`,
    description: `Satisfy your cravings with ${mealItem.name}! 🍽️ 
  This ${category.name} specialty is crafted with the finest ingredients for a taste experience you won’t forget. 
  Order now and treat yourself to the best! 🚀`,
    openGraph: {
      title: `${mealItem.name} - ${category.name} | RalphNexus`,
      description: `Satisfy your cravings with ${mealItem.name}! 🍽️ 
  This ${category.name} specialty is crafted with the finest ingredients for a taste experience you won’t forget. 
  Order now and treat yourself to the best! 🚀`,
      url: pageUrl,
      type: "article",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: mealItem.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${mealItem.name} - ${category.name} | RalphNexus`,
      description: `Satisfy your cravings with ${mealItem.name}! 🍽️ 
  This ${category.name} specialty is crafted with the finest ingredients for a taste experience you won’t forget. 
  Order now and treat yourself to the best! 🚀`,
      images: [imageUrl],
    },
  };
}

export default async function page({ params }: Params) {
  const menu = await getRestaurantMenu();
  if (!menu) return notFound();

  const decodedItemName = (await params).itemName
    .replace(/-/g, " ")
    .toLowerCase();

  const category = menu.categories.find((cat) =>
    cat.items.some((meal) => meal.name.toLowerCase() === decodedItemName)
  );

  if (!category) return notFound();

  const mealItem = category.items.find(
    (item) => item.name.toLowerCase() === decodedItemName
  );

  if (!mealItem) return notFound();

  const schemaData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": mealItem.name,
    "image": [`https://ralphnexus.vercel.app/menu/${mealItem.image}.png`], // Adjust image path if needed
    "description": `Satisfy your cravings with ${mealItem.name}! This ${category.name} specialty is crafted with the finest ingredients for a taste experience you won’t forget.`,
    "brand": {
      "@type": "Brand",
      "name": "RalphNexus"
    },
    "sku": mealItem.name.replace(/\s+/g, "-").toLowerCase(), 
    "category": category.name,
    "offers": {
      "@type": "Offer",
      "url": `https://ralphnexus.vercel.app/products/${(await params).itemName}`,
      "priceCurrency": "USD", // Change this if using another currency
      "price": mealItem.price || "N/A", // Ensure price is available
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "RalphNexus"
      }
    }
  };

  return (
    <main>
      <div className="bg-[#F8F5F0] px-7 items-center flex md:gap-1 md:text-lg flex-wrap text-sm py-6 text-gray-600">
        <Link className="hover:text-amber-500" href="/">
          Home
        </Link>
        <ChevronRight className="size-4" />
        <Link
          className="hover:text-amber-500"
          href={`/shop/${category.name.replace(/\s+/g, "-").toLowerCase()}`}
        >
          {category.name}
        </Link>
        <ChevronRight className="size-4" />
        <h1 className="text-black">{mealItem.name}</h1>
      </div>
      <Meal mealItem={mealItem} category={category} />
      <h3 className=" justify-self-center px-10 py-3 font-semibold text-2xl w-fit bg-amber-400 rounded-md">
        Description
      </h3>
      <Description mealItem={mealItem} category={category} />
      <RelatedProducts category={category} mealItem={mealItem} />
      {/* Inject Schema Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
    </main>
  );
}
