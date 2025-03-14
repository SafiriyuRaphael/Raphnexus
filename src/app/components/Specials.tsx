"use client";
import Image from "next/image";
import useAnimations from "@/hooks/useAnimations";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Specials() {
  const { controls, ref, upCard, leftCard, rightCard } = useAnimations();

  return (
    <motion.section
      animate={controls}
      initial="hidden"
      ref={ref}
      className="bg-[#C24E32] py-10 sm:py-16 flex items-center gap-4 text-white xl:justify-start md:justify-end justify-center px-6 bg-[url('/h7_burger.png')] bg-no-repeat lg:bg-none md:bg-left bg-center bg-contain relative"
      aria-label="Special Offer Section"
    >
      {/* Burger Image (Desktop Only) */}
      <div className="lg:block hidden relative">
        <Image
          height={300}
          width={500}
          src="/h7_burger.png"
          alt="Delicious burger with fresh ingredients"
          priority // Prioritize loading for above-the-fold image
        />
        <motion.img
          variants={upCard}
          src="/30off.png"
          alt="30% off discount badge"
          className="absolute right-10 -top-10"
          aria-hidden="true" // Decorative image
        />
      </div>

      {/* Special Offer Content */}
      <div className="flex flex-col gap-6">
        {/* Heading */}
        <h3 className="text-fantasy text-amber-300 text-4xl text-center">
          Hot Fresh
        </h3>
        <h2 className="lg:text-8xl sm:text-7xl text-4xl text-center font-bold z-20">
          SPECIAL OFFER
        </h2>

        {/* Timer Section */}
        <div className="flex gap-5 px-8 self-center z-20" role="timer" aria-label="Countdown timer">
          {["Days", "Hours", "Mins", "Secs"].map((unit) => (
            <p
              key={unit}
              className="px-3 sm:px-5 py-2 bg-[#eb6a4a] lg:bg-gray-200/35 rounded-xl"
              aria-label={`Remaining ${unit}`}
            >
              {unit}
            </p>
          ))}
        </div>

        {/* Discover Now Button */}
       <Link href='/menu' className="self-center w-fit  px-7 py-2"> <button
          className="bg-amber-400 w-fit  px-7 py-2 text-black hover:text-white z-20"
          aria-label="Discover special offers"
        >
          DISCOVER NOW
        </button></Link>

        {/* Decorative Images */}
        <motion.img
          variants={upCard}
          src="/h7_tomato-3.png"
          alt="Decorative tomato"
          className="absolute lg:top-0 lg:right-0 lg:size-36 right-13 top-8 size-30 hidden md:block"
          aria-hidden="true"
        />
        <motion.img
          variants={upCard}
          src="/30off.png"
          alt="30% off discount badge"
          className="absolute left-0 top-0 lg:hidden md:block hidden"
          aria-hidden="true"
        />
        <Image
          height={300}
          width={150}
          src="/h7_leaf-5.png"
          alt="Decorative leaf"
          className="absolute bottom-0 md:block hidden"
          aria-hidden="true"
        />
        <motion.img
          variants={rightCard}
          src="/h7_leaf-4.png"
          alt="Decorative leaf"
          className="absolute bottom-0 right-0 lg:size-40 size-28"
          aria-hidden="true"
        />
        <motion.img
          variants={leftCard}
          src="/h7_leaf.png"
          alt="Decorative leaf"
          className="absolute bottom-1/2 left-5 lg:size-40 size-9 md:block lg:hidden hidden"
          aria-hidden="true"
        />
      </div>
    </motion.section>
  );
}