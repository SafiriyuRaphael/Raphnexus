"use client";
import Onsales from "./Onsales";
import useAnimations from "@/hooks/useAnimations";
import { motion } from "framer-motion";
import Link from "next/link";

export default function BestSelling() {
  const { ref, controls, downCard } = useAnimations();

  return (
    <section 
      className="bg-[#415345] relative flex justify-between md:flex-row flex-col gap-3 sm:gap-2 py-16 lg:py-24 px-7"
      aria-labelledby="bestselling-heading" // Associates section with heading for screen readers
    >
      {/* Main header section with title and call-to-action */}
      <header className="flex flex-col gap-2.5 items-center justify-center lg:w-fit w-full">
        <h3 id="bestselling-heading" className="text-4xl fantasy text-amber-400">
          Our Menu
        </h3>
        <p className="text-3xl sm:text-4xl text-white font-extrabold text-center">
          <span>Best</span>
          <span> selling</span> dishes
        </p>
        
        {/* Main call-to-action button */}
        <Link href="/shop">
          <button 
            className="bg-amber-400 px-7 py-3 hover:text-white ring ring-amber-400 transition-all duration-500 transform font-bold"
            aria-label="View all available products in the shop"
          >
            VIEW ALL PRODUCTS
          </button>
        </Link>
      </header>
      
      {/* Spacer div for responsive layout adjustments */}
      <div aria-hidden="true"></div> {/* Hidden from screen readers */}
      
      {/* Component displaying on-sale items */}
      <Onsales />
      
      {/* Animated decorative image using Framer Motion */}
      <motion.img
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={downCard}
        src="/h7_chili-4.png"
        alt="Decorative chili pepper image" // Descriptive alt text for decorative image
        className="absolute bottom-0 left-28 lg:block hidden"
      />
    </section>
  );
}