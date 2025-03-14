"use client";
import { useEffect, useState } from "react";
import { getRestaurantMenu } from "@/lib/getRestaurantMenu";
import Image from "next/image";
import AddToCart from "@/app/cart/components/AddToCart";
import Loader from "@/app/components/Loader";
import useAnimations from "@/hooks/useAnimations";
import { motion } from "framer-motion";
import Link from "next/link";

export default function MenuPage() {
  const [Menu, setMenu] = useState<MenuData | null>(null);
  const{fastDownCard, ref, controls,fastContainerVariants }=useAnimations()
  const [foodCategory, setFoodCategory] = useState("burgers");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const data: MenuData | undefined = await getRestaurantMenu();
        if (data) {
          setMenu(data);
        } else {
          setError("Failed to load menu. Please try again later.");
        }
      } catch (err) {
        setError(`An error occurred while fetching the menu: ${err}`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMenu();
  }, []);

  if (isLoading) {
    <div className="flex flex-col gap-2 py-4 items-center justify-center">
    <p className="my-7 text-center w-full font-bold text-xl text-amber-400">
    Loading Menu...
    </p>
    <Loader />
  </div>
  }

  if (error) {
    throw new Error(error);
  }

    // No blogs state
    if (!Menu && !isLoading) {
      return (
        <div className="py-20 px-7 bg-[#F7F2E2] flex items-center justify-center">
          <p className="text-amber-400">No blogs to show.</p>
        </div>
      );
    }

    


  return (
    <motion.div initial="hidden" ref={ref} variants={fastContainerVariants} animate={controls} className="flex items-center flex-col gap-10 py-16 px-7 justify-center">
      <motion.h1 variants={fastDownCard} className="text-4xl font-bold" aria-label="Menus Of The Day">
        Menus Of The Day
      </motion.h1>

      <motion.div variants={fastDownCard}
        className="flex gap-6 flex-wrap lg:gap-10 items-center justify-center"
        role="tablist"
        aria-label="Food Categories"
      >
        {["Burgers", "Cold Drinks", "Hot Drinks", "Pasta", "Pizza"].map(
          (cat, index) => (
            <button
              key={index}
              onClick={() => setFoodCategory(cat.toLowerCase())}
              className={`hover:bg-amber-400 ring-1 ring-gray-300 sm:py-5 sm:px-5 focus:outline-none px-3 py-4 lg:px-9 lg:py-6 rounded-3xl font-bold ${
                foodCategory === cat.toLowerCase() ? "bg-amber-400" : ""
              }`}
              role="tab"
              aria-selected={foodCategory === cat.toLowerCase()}
              aria-controls={`${cat.toLowerCase()}-tabpanel`}
              tabIndex={0}
              aria-label={`Filter by ${cat}`}
            >
              {cat}
            </button>
          )
        )}
      </motion.div>

      {Menu?.categories
        .filter((category) => category.name.toLowerCase() === foodCategory)
        .map((menus) => (
          <div
            key={menus.name}
            className="grid lg:grid-cols-2 gap-8 p-2 items-center"
            role="tabpanel"
            id={`${foodCategory}-tabpanel`}
            aria-labelledby={`${foodCategory}-tab`}
          >
            {menus.items.map((menu, i) => (
              <div
                key={i}
                className="p-2 ring-1 ring-gray-300 rounded-2xl"
                role="article"
                aria-label={`Menu item: ${menu.name}`}
              >
                <div className="flex sm:flex-row flex-col gap-6 items-center justify-center bg-[#f8f1e6] rounded-2xl px-8 py-8 relative">
                  <div>
                    <Image
                      alt={menu.name}
                      width={800}
                      height={200}
                      src={`/menu/${menu.image}.png`}
                      priority={i < 4}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                  <Link href={`/products/${menu.name.replace(/\s+/g, "-").toLowerCase()}`} className="hover:text-amber-400">  <h2 className="font-bold text-xl" aria-label={menu.name}>
                      {menu.name}
                    </h2></Link>
                    <p className="text-gray-500" aria-label={menu.description}>
                      {menu.description}
                    </p>

                    {menu.on_sale && (
                      <div className="flex font-bold">
                        <p
                          className="line-through text-gray-500"
                          aria-label={`Original price: ${menu.price}`}
                        >
                          {menu.price}
                        </p>{" "}
                        <p
                          className="text-amber-400"
                          aria-label={`Discounted price: ${menu.on_sale}`}
                        >
                          {menu.on_sale}
                        </p>
                      </div>
                    )}
                    {!menu.on_sale && (
                      <p
                        className="text-amber-400 font-bold"
                        aria-label={`Price: ${menu.price}`}
                      >
                        {menu.price}
                      </p>
                    )}
                  </div>

                  <div className="absolute bottom-2 right-2">
                    <AddToCart data={menu} aria-label={`Add ${menu.name} to cart`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
    </motion.div>
  );
}