"use client";
import Link from "next/link";
import useAnimations from "@/hooks/useAnimations";
import { motion } from "framer-motion";
import ExploreAbout from "./ExploreAbout";

export default function MenuExplore() {
  const { fastDownCard, ref, controls, fastContainerVariants } =
    useAnimations();
  return (
    <motion.section
      variants={fastContainerVariants}
      ref={ref}
      initial="hidden"
      animate={controls}
      className="grid md:grid-cols-2 py-8 md:h-[90vh]"
    >
      {/* Left Section: Hero Image with Text and Button */}
      <div className="bg-[url('/bugerintray.jpg')] h-[60vh] md:h-full flex flex-col gap-7 items-center justify-center bg-cover bg-center text-center bg-black/55 bg-blend-darken text-white">
        {/* Hero Text */}
        <div className="flex gap-4 flex-col max-w-xl px-6">
          <motion.h3
            variants={fastDownCard}
            className="text-4xl lg:text-5xl font-bold"
          >
            Explore the new taste
          </motion.h3>
          <motion.p variants={fastDownCard}>
            Enjoy our luscious dishes wherever you want
          </motion.p>
        </div>

        {/* Order Now Button */}
        <Link href="/shop">
          <motion.button
            variants={fastDownCard}
            className="bg-amber-400 text-black hover:text-white px-8 py-4 font-bold rounded-xl"
          >
            ORDER NOW
          </motion.button>
        </Link>
      </div>

      <ExploreAbout />
    </motion.section>
  );
}
