"use client"
import { RiEBike2Fill } from "react-icons/ri";
import { Timer, Pizza } from "lucide-react";
import { motion } from "framer-motion";
import useAnimations from "@/hooks/useAnimations";


export default function MenuQualities() {
   const{fastDownCard, ref, controls,fastContainerVariants }=useAnimations()
  return (
    <motion.section variants={fastContainerVariants} initial="hidden" ref={ref} animate={controls}
      className="grid lg:grid-cols-3 md:grid-cols-2 md:justify-between px-7 gap-9 py-16"
      aria-label="Menu Qualities" // Descriptive label for the section
    >
      {/* Free Shipping Quality */}
      <motion.div
        className="border-4 border-dashed border-gray-300 hover:border-amber-400 flex gap-3 px-5 py-6 rounded-xl items-center md:flex-row flex-col text-center md:text-start"
        role="article" // ARIA role for each quality card
        aria-label="Free Shipping Quality" // Descriptive label for screen readers
        variants={fastDownCard}
      >
        <RiEBike2Fill
          className="md:size-20 size-16 text-amber-400 hover:scale-125 transition-transform duration-700"
          aria-hidden="true" // Decorative icon
        />
        <div className="flex flex-col gap-1">
          <h3 className="font-bold" aria-label="Free Shipping">
            Free shipping
          </h3>
          <p className="text-gray-500" aria-label="Sign up for updates and get free shipping">
            Sign up for updates and get free shipping
          </p>
        </div>
      </motion.div>

      {/* 30 Minutes Delivery Quality */}
      <motion.div
        className="border-4 border-dashed border-gray-300 hover:border-amber-400 flex gap-3 px-5 py-6 rounded-xl items-center md:flex-row flex-col text-center md:text-start"
        role="article"
        aria-label="30 Minutes Delivery Quality"
        variants={fastDownCard}
      >
        <Timer
          className="md:size-20 size-16 text-amber-400 hover:scale-125 transition-transform duration-700"
          aria-hidden="true"
        />
        <div className="flex flex-col gap-1">
          <h3 className="font-bold" aria-label="30 Minutes Delivery">
            30 Minutes Delivery
          </h3>
          <p className="text-gray-500" aria-label="Everything you order will be quickly delivered to your door">
            Everything you order will quickly delivered to your door.
          </p>
        </div>
      </motion.div>

      {/* Best Quality Guarantee Quality */}
      <motion.div
        className="border-4 border-dashed border-gray-300 hover:border-amber-400 flex gap-3 px-5 py-6 rounded-xl items-center md:flex-row flex-col text-center md:text-start"
        role="article"
        aria-label="Best Quality Guarantee"
        variants={fastDownCard}
      >
        <Pizza
          className="md:size-20 size-16 text-amber-400 hover:scale-125 transition-transform duration-700"
          aria-hidden="true"
        />
        <div className="flex flex-col gap-1">
          <h3 className="font-bold" aria-label="Best Quality Guarantee">
            Best Quality Guarantee
          </h3>
          <p className="text-gray-500" aria-label="RaphNexus is an international chain of family restaurants">
            RaphNexus is an international chain of family restaurants.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}