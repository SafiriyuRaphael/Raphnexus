"use client";
import { SquareChevronRight } from "lucide-react";
import useAnimations from "@/hooks/useAnimations";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Discover() {
  // Animation hooks and variants
  const { controls, ref, downCard, rightCard, leftCard, scaleCard } = useAnimations();

  return (
    <motion.section
      initial="hidden"
      animate={controls}
      ref={ref}
      className="flex gap-3.5 py-16 flex-col md:flex-row"
      role="region"
      aria-label="Discover our menu and delivery area"
    >
      {/* Left content section */}
      <div className="flex flex-col px-7 justify-center items-center md:items-start md:w-1/2 gap-3">
        {/* Animated heading */}
        <motion.h3
          variants={downCard}
          className="fantasy text-amber-400 text-4xl"
          aria-label="Discover Menu"
        >
          Discover Menu
        </motion.h3>

        {/* Main title */}
        <motion.h3
          variants={downCard}
          className="lg:text-5xl text-4xl font-bold text-center md:text-left"
        >
          We deliver anywhere in the tri-state area
        </motion.h3>

        {/* Description text */}
        <motion.p
          variants={downCard}
          className="font-extralight text-gray-500 text-center md:text-left"
        >
          Each freshly meal is perfectly sized for one person to enjoy at one
          sitting. Out fully prepared meals are delivered fresh, and ready to
          eat in 3 minutes
        </motion.p>

        {/* Action buttons container */}
        <div className="flex items-center gap-5">
          {/* Menu link button */}
          <Link href="/menu">
            <motion.button
              variants={leftCard}
              className="bg-amber-400 px-3 sm:px-8 py-2 sm:py-3 font-bold whitespace-nowrap hover:text-white"
              aria-label="View our full menu"
            >
              View Our Menu
            </motion.button>
          </Link>

          {/* Products link with icon */}
          <Link 
            href="/shop" 
            className="hover:text-green-500"
            aria-label="Browse all available products"
          >
            <div className="flex gap-1 whitespace-nowrap">
              <motion.p variants={rightCard}>View all products </motion.p>
              <SquareChevronRight 
                className="fill-green-600 size-7"
                aria-hidden="true" // Decorative icon
              />
            </div>
          </Link>
        </div>
      </div>

      {/* Right image section */}
      <div className="w-full lg:pl-10 relative">
        {/* Main pizza image */}
        <motion.img 
          variants={scaleCard} 
          src="/h7_pizza.png" 
          alt="Delicious pizza with various toppings"
          role="img"
        />

        {/* Decorative chili image */}
        <motion.img
          variants={scaleCard}
          src="/h7_chilli-3.png"
          alt="Spicy chili garnish"
          className="absolute right-10 hidden md:block md:size-20 lg:size-32 -bottom-5"
          role="img"
        />
      </div>
    </motion.section>
  );
}