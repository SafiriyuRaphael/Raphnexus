"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { getRestaurantMenu } from "@/lib/getRestaurantMenu";
import Favorites from "../wishlist/components/Favorites";
import AddToCart from "../cart/components/AddToCart";
import Loader from "./Loader";
import Link from "next/link";

export default function Onsales() {
  const [menu, setMenu] = useState<MenuData | null>(null);
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

  // Loading and error states
  if (isLoading) {
    return (
      <div className="flex flex-col gap-2 py-4 items-center w-full justify-center">
      <p className="my-7 text-center w-full font-bold text-xl text-amber-400">
        Loading menu...
      </p>
      <Loader />
    </div>
    );
  }

  if (error) {
    return (
      <p className="my-7 text-center w-full text-amber-400">{error}</p>
    );
  }

  if (!menu) {
    return (
      <p className="my-7 text-center w-full text-amber-400">
        Oops! Menu not available.... Please refresh
      </p>
    );
  }

  return (
    <div role="region" aria-label="On Sale Items">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={35}
        slidesPerView={1}
        loop={true}
        autoplay={{ 
          delay: 5000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false
        }}
        a11y={{
          prevSlideMessage: 'Previous item',
          nextSlideMessage: 'Next item',
          firstSlideMessage: 'This is the first item',
          lastSlideMessage: 'This is the last item',
        }}
        breakpoints={{
          200: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="lg:w-[70vw] md:w-[50vw]"
      >
        {menu.categories.map((menus, i) => (
          <React.Fragment key={i}>
            {menus.items
              .filter((item) => item.on_sale)
              .map((sales) => (
                <SwiperSlide key={sales.name} role="group" aria-label={`On sale item: ${sales.name}`}>
                  <div className="flex flex-col py-4 px-3 rounded-3xl bg-white gap-3 group">
                    {/* Image Section */}
                    <div className="md:h-48 h-[60vh] relative px-2 place-content-end">
                      <div className="absolute right-5 top-2 z-50">
                        <Favorites data={sales} aria-label={`Add ${sales.name} to favorites`} />
                      </div>
                      <Image
                        alt={`Image of ${sales.name}`}
                        src={`/menu/${sales.image}.png`}
                        width={300}
                        height={150}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 group-hover:scale-110 transition-transform duration-500 size-80 md:size-32"
                        priority={i < 4} // Prioritize first 4 images
                      />
                      <div 
                        className="bg-amber-100 w-full h-[30vh] md:h-28 rounded-3xl group-hover:h-full group-hover:bg-amber-400 transition-all transform duration-500 ease-in-out"
                        aria-hidden="true"
                      />
                    </div>

                    {/* Product Details */}
                  <Link href={`/products/${sales.name.replace(/\s+/g, "-").toLowerCase()}`} className="hover:text-amber-400">  <h3 className="font-semibold">{sales.name}</h3></Link>
                    <p className="text-gray-500" aria-label="Product description">
                      {`${sales.description.slice(0, 35)}...`}
                    </p>

                    {/* Price and Add to Cart */}
                    <div className="flex justify-between w-full items-center">
                      <div className="flex gap-2">
                        <p className="line-through text-gray-500" aria-label="Original price">
                          {sales.price}
                        </p>
                        <p className="text-amber-400 font-bold" aria-label="Discounted price">
                          {sales.on_sale}
                        </p>
                      </div>
                      <AddToCart data={sales} aria-label={`Add ${sales.name} to cart`} />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </React.Fragment>
        ))}
      </Swiper>
    </div>
  );
}