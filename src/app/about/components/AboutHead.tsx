"use client"
import useAnimations from "@/hooks/useAnimations"
import { motion } from "framer-motion"
import Link from "next/link"

export default function AboutHead() {
    const{ref, controls, fastDownCard,containerVariants}= useAnimations()
  return (
    <section className="flex  md:items-start items-center justify-center md:justify-between px-7 py-16 w-screen gap-8 md:gap-12 bg-[url('/vector2-h3.png')] bg-no-repeat bg-bottom bg-fixed md:flex-row flex-col">
    <div className="flex flex-col gap-5 lg:w-1/2 md:w-[65vw] text-center md:text-start">
      <h3 className="text-amber-400 text-2xl fantasy">Welcome!</h3>
      <h3 className="lg:text-5xl sm:text-4xl text-3xl font-bold">Best burger ideas & traditions from the whole world</h3>
      <p className="text-gray-500">Flavors that feel like home, served with a side of passion
      From hearty classics to fresh modern twists, we’re here to turn hunger into memories. Think seared meats glazed in house sauces, garden-fresh salads, and desserts that crackle with caramelized perfection.</p>
      <p className="text-gray-500">From classic favorites to bold, unique creations, our menu has something for everyone. Whether you love rich, spicy, or smoky flavors, we’ve got you covered. Come enjoy a taste of tradition with a modern twist.</p>
      <Link href="/contact-us">
      <button className="bg-amber-400 px-5 py-3 font-bold md:self-start self-center hover:text-white">CONTACT NOW</button></Link>
    </div>
    <motion.div ref={ref} animate={controls} initial="hidden" variants={containerVariants} className=" md:grid grid-cols-1 md:grid-cols-2 gap-3   md:h-full  flex flex-col md:items-start items-center">
      <motion.img variants={fastDownCard} src="/image1-h4.jpg" alt="" className="md:w-full rounded-md hover:-translate-y-2 transition-transform duration-500 md:row-span-2 " />
      <motion.img variants={fastDownCard} src="/image2-h4.jpg" alt="" className="md:w-full rounded-md hover:-translate-y-2 transition-transform duration-500" />
      <motion.img variants={fastDownCard} src="/image3-h4.jpg" alt="" className="md:w-full rounded-md hover:-translate-y-2 transition-transform duration-500" />
    </motion.div>
  </section>
  )
}
