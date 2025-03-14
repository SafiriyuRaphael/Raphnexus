"use client";
import { getRestaurantMenu } from "@/lib/getRestaurantMenu";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Loader from "./Loader";

export default function Regular() {
  const [menu, setMenu] = useState<MenuData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch menu data
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const data = await getRestaurantMenu();
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
  }, []); // Empty dependency array ensures this runs only once

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
    return <p className="my-7 text-center w-full text-amber-400">{error}</p>;
  }

  if (!menu) {
    return (
      <p className="my-7 text-center w-full text-amber-400">
        Oops! Menu not available.... Please refresh
      </p>
    );
  }

  return (
    <section
      className="px-7 py-20 flex flex-col gap-9"
      aria-label="Regular Menu Pack"
    >
      <h3 className="md:text-4xl font-bold text-3xl text-center md:text-left">
        Our Regular Menu Pack
      </h3>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={35}
        slidesPerView={2}
        loop={true}
        autoplay={{
          delay: 5000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        a11y={{
          prevSlideMessage: "Previous menu category",
          nextSlideMessage: "Next menu category",
          firstSlideMessage: "This is the first menu category",
          lastSlideMessage: "This is the last menu category",
        }}
        breakpoints={{
          640: { slidesPerView: 5 },
          1024: { slidesPerView: 6 },
        }}
        className="w-full"
      >
        {menu.categories.map((menu, index) => (
          <SwiperSlide
            key={index}
            className="py-7"
            role="group"
            aria-label={`Menu category: ${menu.name}`}
          >
            <Link
              href={`/shop/${menu.name.toLowerCase().replace(/\s+/g, "-")}`}
              aria-label={`View ${menu.name} category`}
            >
              <div className="bg-[#FFF9E9] flex flex-col items-center justify-between py-8 rounded-3xl hover:bg-amber-400 transition-all duration-400 group w-full cursor-pointer">
                {/* Image Container */}
                <div className="size-28 rounded-full bg-white flex items-end justify-center p-5">
                  <Image
                    src={`/${menu.name.toLowerCase()}.png`}
                    alt={`Image representing ${menu.name}`}
                    className="group-hover:scale-125 transform transition-transform duration-500"
                    width={300}
                    height={150}
                    priority={index < 4} // Prioritize first 4 images
                  />
                </div>

                {/* Category Details */}
                <div className="text-center flex flex-col gap-1 pt-2">
                  <h3 className="font-extrabold ">
                    {menu.name.toUpperCase()}
                  </h3>
                  <p
                    className="font-light text-gray-600"
                    aria-label="Number of products"
                  >
                    {menu.items.length > 1 ? (
                      <>{`${menu.items.length} products`}</>
                    ) : (
                      <>{`${menu.items.length} product`}</>
                    )}
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
