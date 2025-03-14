"use client";
import useAnimations from "@/hooks/useAnimations";
import Image from "next/image";
import { motion } from "framer-motion";

export default function NewsLetter() {
  const { controls, ref, springCard } = useAnimations();

  return (
    <motion.section
      animate={controls}
      initial="hidden"
      ref={ref}
      className="flex flex-col items-center gap-7 h-[60vh] justify-center text-center px-7 relative"
      aria-labelledby="newsletter-heading"
      role="region"
    >
      {/* Newsletter Content */}
      <div className="flex flex-col gap-4">
        <h3 id="newsletter-heading" className="text-green-700 fantasy text-2xl">
          Newsletter
        </h3>
        <h3 className="lg:text-4.5xl text-3xl sm:text-4xl font-bold">
          Get <span className="text-amber-400">10%</span> off your order
        </h3>
        <p>Enter your email and receive a 10% discount on your next order</p>
      </div>

      {/* Email Input and Subscribe Button */}
      <form 
        className="lg:w-[50vw] sm:w-[70vw] w-[88vw] flex justify-between px-1 ring-1 z-30 ring-black"
        onSubmit={(e) => {
          e.preventDefault();
          // Add your subscription logic here
        }}
        role="form"
        aria-label="Newsletter subscription form"
      >
        <label htmlFor="newsletter-email" className="sr-only">
          Enter your email
        </label>
        <input
          id="newsletter-email"
          type="email"
          placeholder="Enter your email..."
          className="outline-none w-full z-30"
          aria-required="true"
          required
        />
        <button 
          type="submit"
          className="bg-amber-400 text-black hover:text-white px-3 py-2 font-bold"
          aria-label="Subscribe to newsletter"
        >
          SUBSCRIBE
        </button>
      </form>

      {/* Decorative Images */}
      <motion.img
        variants={springCard}
        src="/h5_decor-left-1.png"
        alt="Decorative left pattern"
        className="absolute left-0 bottom-0 lg:block hidden"
        aria-hidden="true"
      />
      <Image
        height={400}
        width={300}
        src="/h5_decor-left.png"
        alt="Decorative left element"
        className="absolute left-0 lg:bottom-16 md:block hidden lg:size-68 size-44 bottom-10"
        aria-hidden="true"
      />
      <motion.img
        variants={springCard}
        src="/h5_pizza.png"
        alt="Decorative pizza image"
        className="absolute right-0 bottom-0 md:block hidden lg:size-80 size-60"
        aria-hidden="true"
      />
    </motion.section>
  );
}