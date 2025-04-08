// src/components/Hero.tsx
"use client";

// Removed: useEffect, useState, useCallback
// Removed: Particles, initParticlesEngine, loadLinksPreset, Container
import { motion } from "framer-motion";

// --- Framer Motion Variants (Keep these) ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// --- Component ---
export default function Hero() {
  // Removed: init state and useEffect for particles

  // Removed: particlesLoaded callback

  // Removed: particlesOptions object

  // Removed: The loading state return:
  // if (!init) { ... }

  return (
    // Section container:
    // - Removed `relative` (no longer needed to contain particles)
    // - Removed `overflow-hidden` (no longer needed for particles)
    // - Kept text-center, py-20, text-white, flex, items-center, justify-center, min-h-[60vh]
    // - You might want to add a transparent background or remove any specific bg color
    //   if you want the global particle background to show through clearly.
    <section className="text-center py-20 text-white min-h-[60vh] flex items-center justify-center">

      {/* Removed: <Particles ... /> component */}

      {/* Content Layer - On Top */}
      {/* Keep `relative z-10` or similar if needed for internal layout,
          but it no longer needs to be above the local particles */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* ... rest of your Hero content (h1, p, button) remains the same ... */}
         <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          variants={itemVariants}
        >
          Build Your Professional Presence
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl max-w-2xl mx-auto mb-6"
          variants={itemVariants}
        >
          Join thousands of professionals leveling up their digital impact with our platform.
        </motion.p>

        <motion.div variants={itemVariants}>
           <motion.a
             href="#services"
             className="inline-block px-6 py-3 bg-white text-blue-800 font-semibold rounded-full shadow-md transition-transform duration-200 ease-out"
             whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
             whileTap={{ scale: 0.95 }}
           >
             Get Started
           </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}