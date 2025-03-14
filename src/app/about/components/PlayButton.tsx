"use client";

import { motion } from "framer-motion";

export default function PlayButton({ onClick }: { onClick?: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="relative flex items-center justify-center size-20 sm:size-24 bg-amber-500 text-white rounded-full shadow-lg hover:bg-amber-600"
    >
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut" }} className="text-4xl sm:text-5xl"
      >
        ▶
      </motion.div>
 
    </motion.button>
  );
}
