"use client"
import useAnimations from "@/hooks/useAnimations";
import { motion } from "framer-motion";

type MenuProps = {
    name: string;
    price: string;
    details: string;
  };

const ExploreAbout = () => {
    
    // Array of menu items with name, price, and details
  const AboutExtras: MenuProps[] = [
    {
      name: "Pizza Hut",
      price: "$4.95",
      details: "Mozzarella, Tomato Sauce, Basil",
    },
    {
      name: "Pepperoni Pizza",
      price: "$5.95",
      details: "Pepperoni, Mozzarella, Tomato Sauce",
    },
    {
      name: "Apricot Chicken",
      price: "$5.65",
      details: "Apricot, Grilled Chicken, Cheese",
    },
    {
      name: "Summer Pizza",
      price: "$8.95",
      details: "Pineapple, Ham, BBQ Sauce",
    },
  ];
    
    const{fastDownCard, ref, controls,fastContainerVariants }=useAnimations()
  return (
    <>
   {/* Right Section: Menu Items */}
   <motion.div variants={fastContainerVariants} ref={ref} initial="hidden" animate={controls} className="flex flex-col justify-center gap-6 items-center bg-[#F8F5F0] md:py-0 py-10">
   {/* Map through the menu items and display them */}
   {AboutExtras.map((extra, index) => (
     <div key={index} className="flex flex-col gap-2 w-full md:w-72 px-7">
       {/* Menu Item Name and Price */}
       <motion.div variants={fastDownCard}  className="flex justify-between border-b-black border-b border-dashed">
         <h3 className="text-xl font-bold">{extra.name}</h3>
         <p className="text-amber-400 font-bold">{extra.price}</p>
       </motion.div>

       {/* Menu Item Details */}
       <motion.p variants={fastDownCard}  className="text-gray-500">{extra.details}</motion.p>
     </div>
   ))}
 </motion.div>
 </>
  )
}

export default ExploreAbout
