"use client";
import { useEffect, useState } from "react";
import { getRestaurantMenu } from "@/lib/getRestaurantMenu";
import Image from "next/image";
import Link from "next/link";
import AddToCart from "../cart/components/AddToCart";
import Loader from "./Loader";

export default function TodaysLunch() {
  const [menu, setMenu] = useState<MenuData | null>(null);
  const [foodCategory, setFoodCategory] = useState("breakfast");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  // Fetch menu data
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

  const today = new Date();
  const day = today.getDay();

  // Loading and error states
  if (isLoading) {
    return (
      <div className="flex flex-col gap-2 py-4 items-center justify-center">
      <p className="my-7 text-center w-full font-bold text-xl text-amber-400">
        Loading menu...
      </p>
      <Loader />
    </div>
    );
  }

  if (error) {
    return (
      <p className="text-center my-7 w-full text-amber-400">{error}</p>
    );
  }

  if (!menu) {
    return (
      <p className="text-center my-7 w-full text-amber-400">
        Oops! Menu not available.... Please refresh
      </p>
    );
  }

  return (
    <section className="px-7 py-20 flex flex-col gap-12" aria-label="Today's Lunch Menu">
      {/* Menu Header */}
      <div className="flex flex-col gap-4 font-bold items-center justify-center">
        <h3 className="text-amber-400 fantasy text-3xl">Our Menu</h3>
        <h2 className="text-center text-3xl sm:text-4xl">What&apos;s Hot Today</h2>

        {/* Category Buttons */}
        <div className="flex gap-6 flex-wrap lg:gap-10 items-center justify-center" role="tablist" aria-label="Meal categories">
          {["BREAKFAST", "LUNCH", "DINNER"].map((cat, index) => (
            <button
              key={index}
              onClick={() => setFoodCategory(cat.toLowerCase())}
              className={`hover:bg-amber-400 ring-1 ring-gray-300 sm:py-5 sm:px-5 focus:outline-none px-3 py-4 lg:px-9 lg:py-4 rounded-full font-semibold ${
                foodCategory === cat.toLowerCase() ? "bg-amber-400" : ""
              }`}
              role="tab"
              aria-selected={foodCategory === cat.toLowerCase()}
              aria-controls={`${cat.toLowerCase()}-tabpanel`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Items */}
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="grid gap-4 w-full lg:grid-cols-3" role="tabpanel" id={`${foodCategory}-tabpanel`}>
          {menu.categories.map((menus) =>
            menus.items
              .filter(
                (menu) =>
                  menu.day.includes(day) &&
                  menu.meal_type.toLowerCase() === foodCategory
              )
              .map((meal, i) => (
                <div key={i} className="p-2 ring-1 ring-gray-300 rounded-3xl">
                  <div className="flex flex-row gap-6 items-center justify-center bg-[#FFF8E8] rounded-3xl px-5 py-4 relative">
                    {/* Meal Image */}
                    <div>
                      <Image
                        className=" h-24  w-full"
                        alt={`Image of ${meal.name}`}
                        width={800}
                        height={300}
                        src={`/menu/${meal.image}.png`}
                        priority={i < 3} // Prioritize first 3 images
                      />
                    </div>

                    {/* Meal Details */}
                    <div className="flex flex-col gap-2">
                    <Link href={`/products/${meal.name.replace(/\s+/g, "-").toLowerCase()}`} className="hover:text-amber-400">  <h3 className="font-bold ">{meal.name}</h3></Link>
                      {meal.on_sale ? (
                        <div className="flex font-bold">
                          <p className="line-through text-gray-500" aria-label="Original price">
                            {meal.price}
                          </p>{" "}
                          <p className="text-amber-400" aria-label="Discounted price">
                            {meal.on_sale}
                          </p>
                        </div>
                      ) : (
                        <p className="text-amber-400 font-bold" aria-label="Price">
                          {meal.price}
                        </p>
                      )}
                    </div>

                    {/* Add to Cart Button */}
                    <div className="absolute bottom-2 right-3">
                      <AddToCart data={meal} aria-label={`Add ${meal.name} to cart`} />
                    </div>
                  </div>
                </div>
              ))
          )}
        </div>

        {/* Timing Information */}
        <p className="text-gray-500">
          During winter from <span className="text-black">6:30 pm</span> to{" "}
          <span className="text-black">9:00 pm</span>
        </p>

        {/* View Full Menu Button */}
        <Link href="/menu">
          <button
            className="px-8 py-3 font-semibold bg-amber-400 rounded-xl hover:text-white"
            aria-label="View our full menu"
          >
            VIEW OUR MENU
          </button>
        </Link>
      </div>
    </section>
  );
}