"use client"; // Mark this as a Client Component

import { motion } from "framer-motion";
import { FaHamburger, FaPizzaSlice, FaUtensils } from "react-icons/fa"; // Import food icons

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white-50 to-amber-50">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-md mx-auto border border-gray-100"
      >
        {/* Animated "Oops!" with food icons */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "backOut" }}
          >
            <FaHamburger className="text-4xl text-red-600" />
          </motion.div>
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
            className="text-6xl font-bold text-red-600"
          >
            Oops!
          </motion.h1>
          <motion.div
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "backOut" }}
          >
            <FaPizzaSlice className="text-4xl text-red-600" />
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
          className="text-xl text-gray-700 mb-4"
        >
          Something went wrong on our end.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
          className="text-gray-500 mb-6"
        >
          Don’t worry, it’s not your fault. Here’s what you can do:
        </motion.p>
        <ul className="text-left text-gray-600 mb-6 list-disc list-inside">
          <li>Refresh the page or try again below.</li>
          <li>Check your internet connection.</li>
          <li>If the issue persists, contact support.</li>
        </ul>
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5, ease: "easeOut" }}
          onClick={reset}
          className="px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-800 text-white font-semibold rounded-lg hover:from-amber-700 hover:to-amber-700 transition-all transform hover:scale-105 active:scale-95 shadow-lg"
        >
          Try Again
        </motion.button>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.5, ease: "easeOut" }}
          className="text-sm text-gray-500 mt-6 flex items-center justify-center gap-2"
        >
          <FaUtensils className="text-amber-700" />
          Need help?{" "}
          <a
            href="mailto:support@example.com"
            className="text-amber-700 hover:underline"
          >
            Contact Support
          </a>
        </motion.p>
      </motion.div>
    </div>
  );
}