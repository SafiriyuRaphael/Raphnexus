"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import getFormattedDate from "@/lib/getFormattedDate";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Loader from "./Loader";


export default function NewEvents() {
  const [blogs, setBlogs] = useState<Blog[] | []>([]);
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch("/api/blogs");
        if (!res.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await res.json();
        setBlogs(data.slice(0, 8));
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setError("Failed to load blogs. Please try again later.");
      } finally {
        setIsLoading(false); // Set loading to false after fetch
      }
    }
    fetchBlogs();
  }, []);

  // Loading state
  if (isLoading) {
    return (
      <div className="flex flex-col gap-2 py-4 items-center justify-center">
      <p className="my-7 text-center w-full font-bold text-xl text-amber-400">
      Loading news and events...
      </p>
      <Loader />
    </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="py-20 px-7 bg-[#F7F2E2] flex items-center justify-center">
        <p className="text-amber-400">{error}</p>
      </div>
    );
  }

  // No blogs state
  if (!blogs || blogs.length === 0) {
    return (
      <div className="py-20 px-7 bg-[#F7F2E2] flex items-center justify-center">
        <p className="text-amber-400">No blogs to show.</p>
      </div>
    );
  }

  return (
    <section
      className="py-20 px-7 bg-[#F7F2E2] flex gap-7 lg:flex-row flex-col"
      aria-label="News and Events Section"
    >
      {/* News Carousel */}
      <div role="region" aria-label="Latest news carousel">
        <h3 className="pb-8 text-3xl sm:text-4xl font-bold">News and Events</h3>
        <div className="flex place-self-start">
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
              prevSlideMessage: "Previous news item",
              nextSlideMessage: "Next news item",
              firstSlideMessage: "This is the first news item",
              lastSlideMessage: "This is the last news item",
            }}
            breakpoints={{
              200: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
            }}
            className="lg:w-[60vw] w-[85vw] sm:w-[90vw] flex self-start justify-self-start"
          >
            {blogs.map((blog, i) => (
              <SwiperSlide
                key={i}
                role="group"
                aria-label={`News item ${i + 1} of ${blogs.length}`}
                className="py-7"
              >
                <article className="flex flex-col pb-8 gap-5 border rounded-xl bg-white">
                  <Link
                    href={`/blog/${blog.id.replace(/\s+/g, "-")}`}
                    aria-label={`Read more about ${blog.title}`}
                  >
                    <div className="overflow-hidden rounded-t-xl h-72">
                      <Image
                        src={`/blog/${blog.image}.jpg`}
                        alt={`Featured image for ${blog.title}`}
                        height={300}
                        width={800}
                        className="hover:scale-105 transition-transform duration-300 h-full rounded-t-xl"
                        priority={i < 2} // Prioritize first two images
                      />
                    </div>
                  </Link>

                  <div className="px-7 flex flex-col gap-3">
                    <div
                      className="flex gap-1 text-gray-600 flex-wrap"
                      aria-label="Post details"
                    >
                      <Link
                        href={`/blog/tags/${blog.tags?.[0]?.replace(/\s+/g, "-")}`}
                        className="hover:text-amber-500"
                        aria-label={`View posts in ${blog.tags?.[0]} category`}
                      >
                        {blog.tags?.[0]}
                      </Link>
                      <span aria-hidden="true"> / </span>
                      <time dateTime={new Date(blog.date).toISOString()}>
                        {getFormattedDate(blog.date)}
                      </time>
                      <span aria-hidden="true"> / </span>
                      <p>
                        Post by{" "}
                        <Link
                          href={`/blog/author/${blog.author?.replace(/\s+/g, "-")}`}
                          className="text-black hover:text-amber-500"
                          aria-label={`View posts by ${blog.author}`}
                        >
                          {blog.author}
                        </Link>
                      </p>
                    </div>

                    <Link
                      href={`/blog/${blog.id.replace(/\s+/g, "-")}`}
                      className="hover:text-amber-400"
                    >
                      <h3 className="md:text-xl text-lg font-bold">{blog.title}</h3>
                    </Link>

                    <p className="text-gray-600" aria-label="Article summary">
                      {blog.summary.slice(0, 200)}...
                    </p>

                    <Link
                      href={`/blog/${blog.id.replace(/\s+/g, "-")}`}
                      className="hover:text-white text-sm font-semibold w-fit"
                    >
                      <button
                        className="bg-amber-400 self-start px-7 py-3"
                        aria-label={`Read more about ${blog.title}`}
                      >
                        READ MORE
                      </button>
                    </Link>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Fast Delivery Section */}
      <div
        role="region"
        aria-label="Fast delivery information"
        className="from-[#7C362A] to-black bg-gradient-to-b pt-16 w-full rounded-xl flex flex-col justify-between cursor-pointer group text-center gap-10"
        tabIndex={0}
        onClick={() => (window.location.href = "/contact-us")}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            window.location.href = "/contact";
          }
        }}
      >
        <div className="text-white flex flex-col gap-6">
          <div className="flex flex-col gap-3 items-center justify-center">
            <p className="text-amber-500 fantasy text-xl">Free Shipping</p>
            <h2 className="font-bolder text-4xl font-extrabold">FAST DELIVERY</h2>
          </div>
          <div className="flex flex-col gap-2 font-bold items-center justify-center">
            <p>Hotline Order</p>
            <a
              href="tel:+2340000000000"
              className="text-2xl font-bold text-amber-500 hover:text-amber-300"
              aria-label="Call our hotline"
            >
              +234 000-000-0000
            </a>
          </div>
        </div>
        <div className="overflow-hidden rounded-b-xl">
          <Image
            src="/fastpizza.jpg"
            alt="Fresh pizza being delivered quickly"
            width={900}
            height={500}
            className="lg:h-96 opacity-65 w-full rounded-b-xl flex group-hover:scale-110 duration-500"
            priority
          />
        </div>
      </div>
    </section>
  );
}