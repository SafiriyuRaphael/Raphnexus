"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import useAnimations from "@/hooks/useAnimations";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";

export default function AboutReviews() {
    const {controls,ref,downCard, containerVariants}=useAnimations()
    const reviews: Reviews[] = [
      {
        img: "sarahreview.jpg",
        paragraph:
          "Raphnexus has completely changed how I order food. The website is easy to use, and my orders always arrive fresh and on time. Plus, their customer service is super responsive. It&apos;s like having a personal chef at my fingertips!",
        name: "Sarah I",
        title: "Busy Mom & Food Lover",
      },
      {
        img: "danielreview.jpg",
        paragraph:
          "With my hectic work life, Raphnexus is a lifesaver! Fresh, tasty meals delivered fast. It&apos;s like having a personal chef without the hassle.",
        name: "Daniel R.",
        title: "Founder, TechSavvy Inc",
      },
      {
        img: "tolureview.jpg",
        paragraph:
          "Absolutely love the food quality and variety! Just wish they added more payment options like Apple Pay. Still one of the best out there.",
        name: "Tolu A.",
        title: "Digital Marketer, Meta",
      },
      {
        img: "jamesreview.jpg",
        paragraph:
          "As someone who works long hours, I don&apos;t always have time to cook. Raphnexus makes it so easy to get quality meals. Plus, their website is smooth and user-friendly. Love it!",
        name: "James K",
        title: "Software Engineer",
      },
    ];

  return (
    <motion.section initial="hidden" ref={ref} animate={controls} variants={containerVariants} className="h-[90vh] flex items-center justify-center bg-[url('/grouppizza.jpg')] bg-cover bg-black/50 bg-blend-darken text-white">
   <Swiper
  modules={[Pagination, Autoplay]}
  spaceBetween={10}
  slidesPerView={1}
  loop={true}
  autoplay={{ delay: 10000 }}
  pagination={{ clickable: true,}}
  className="w-full flex justify-center items-center [&_.swiper-pagination-bullet]:bg-yellow-500"
>
        {reviews.map((review, index) => (
          <SwiperSlide key={index} className="py-7">
            <motion.div variants={downCard}  className="flex flex-col items-center text-center px-7 w-screen md:max-w-lg mx-auto gap-2">
            {/* Profile Image */}
            <div
              className="size-24 rounded-full bg-cover bg-center"
              style={{ backgroundImage: `url(${review.img})` }}
            ></div>

            {/* Star Rating */}
            <div className="flex gap-1 mt-3 text-yellow-500">
              {Array.from({ length: index===2? 4:5 }, (_, i) => (
                <FaStar key={i} />
              ))}
              {index===2 && <FaStarHalfStroke/> }
            </div>

            {/* Review Text */}
            <p className="mt-4 italic text-xl sm:text-2xl md:w-[70vw]">&apos;{review.paragraph}&apos;</p>

            {/* Reviewer Info */}
            <div className="mt-4">
              <h3 className="text-xl font-bold">{review.name}</h3>
              <p className="text-sm text-gray-300">{review.title}</p>
            </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.section>
  )
}
