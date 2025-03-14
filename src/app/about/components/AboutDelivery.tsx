"use client"
import { motion } from "framer-motion"
import useAnimations from "@/hooks/useAnimations"

export default function AboutDelivery() {
    const {ref,controls,fastDownCard,fastContainerVariants}=useAnimations()
  return (
    <motion.section ref={ref} animate={controls} variants={fastContainerVariants} initial="hidden" className="bg-[#4e452b96] h-[80vh] px-7 flex flex-col justify-center items-center text-center gap-3.5 bg-[url('/pizzaman1.jpg')] bg-cover bg-no-repeat bg- bg-blend-multiply text-white">
      <motion.h3 variants={fastDownCard} className=" text-xl sm:text-2xl text-amber-400">We guarantee</motion.h3>
      <div className="flex flex-col gap-1.5">
        <motion.h3 variants={fastDownCard} className="font-bold md:text-5xl sm:text-4xl lg:text-6xl text-3xl">30 Minutes Delivery!</motion.h3>
        <motion.p variants={fastDownCard}>If you’re having a meeting, working late at night and need an extra push. Let us know and we will be there</motion.p>
        <motion.button variants={fastDownCard} className="bg-amber-400 self-center px-6 py-3 text-black hover:text-white">MAKE AN ORDER</motion.button>
      </div>
    </motion.section>
  )
}
