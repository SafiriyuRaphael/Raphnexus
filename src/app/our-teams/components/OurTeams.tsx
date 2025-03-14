"use client"
import { Facebook, Twitter, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import useAnimations from "@/hooks/useAnimations";

export default function OurTeams() {
  const { ref, controls, fastDownCard, containerVariants } = useAnimations();

  const Chefs: Chefs[] = [
    {
      img: "CHEF1.jpg",
      title: "CHEF",
      name: "ZYRON VEGA",
    },
    {
      img: "CHEF2.jpg",
      title: "MANAGER",
      name: "KAELION PIERCE",
    },
    {
      img: "CHEF4.jpg",
      title: "CHEF",
      name: "ELENA CASTILLO",
    },
    {
      img: "CHEF3.jpg",
      title: "CHEF",
      name: "TARIQ BROOKS",
    },
    {
      img: "CHEF5.jpg",
      title: "MANAGER",
      name: "NAOMI BENNETT",
    },
    {
      img: "CHEF6.jpg",
      title: "CHEF",
      name: "DAMIAN CARTER",
    },
  ];
  return (
    <motion.section
      className="px-7 py-16"
      ref={ref}
      animate={controls}
      variants={containerVariants}
      initial="hidden"
    >
      <div className="text-center">
        <motion.div
          variants={fastDownCard}
          className="grid md:grid-cols-3 items-center justify-center gap-4 mt-10"
        >
          {Chefs.map((chef,i) => (
            <div key={i} className=" md:ring-1 md:ring-gray-500 rounded-md">
              <div
                className="relative sm:w-[70vw] w-full h-[60vh] bg-center md:w-full bg-cover rounded-t-md bg-gray-500/90 hover:bg-blend-luminosity"
                style={{ backgroundImage: `url(/${chef.img})` }}
              >
                <p className="absolute -bottom-4 rounded-sm px-2 py-1 bg-amber-400 left-1/2 transform -translate-x-1/2">
                  {chef.title}
                </p>
              </div>
              <div className="flex justify-center items-center flex-col py-10 gap-3.5">
                <h3 className="font-bold text-xl hover:text-amber-400">
                  {chef.name}
                </h3>
                <div>
                  <p className=" self-center text-center lg:px-16 px-2 text-gray-500">
                    Everything We Pizza, We Pizza With Love. Designer Fastfood
                  </p>
                  <div className="flex gap-1.5 justify-center pt-1.5">
                    <Facebook className="size-4 fill-black" />{" "}
                    <Twitter className="size-4 fill-black" />
                    <Instagram className="size-4 text-black" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
