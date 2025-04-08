// src/components/Hero.tsx
"use client";

import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadLinksPreset } from "@tsparticles/preset-links";
import type { Container } from "@tsparticles/engine"; // Import type for load callback

// --- Framer Motion Variants (for text content) ---
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
  const [init, setInit] = useState(false);

  // Initialize tsParticles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadLinksPreset(engine); // Load the links preset
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Optional: Callback when particles are loaded
  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log("Particles loaded", container);
  }, []);

  // --- tsParticles Options ---
  const particlesOptions = {
    preset: "links", // Use the loaded preset
    background: {
      color: {
        // Choose a background color - perhaps a dark blue or near black?
        // value: "#030a1a", // Dark blue example
        value: "#0a192f", // Another dark blue
      },
    },
    particles: {
      color: {
        // Choose particle/link color - maybe a lighter blue or cyan?
        value: "#64ffda", // Cyan example
      },
      links: {
        color: "#8892b0", // Lighter link color example
        distance: 150,
        enable: true,
        opacity: 0.3, // Lower opacity for links
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.8, // Slightly slower speed
      },
       number: {
          density: { enable: true, area: 800 },
          value: 80, // Adjust particle count
       },
       opacity: { value: 0.4 }, // Lower particle opacity
       shape: { type: "circle" },
       size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };

  // --- Render ---
  // Don't render anything until the particles engine is ready
  if (!init) {
    // Optional: Render a static background while loading
    return <section className="text-center py-20 bg-[#0a192f] text-white min-h-[60vh]"></section>; // Placeholder height
  }

  return (
    // Section container: sets up positioning context and minimum height
    <section className="relative text-center py-20 text-white overflow-hidden min-h-[60vh] flex items-center justify-center"> {/* Adjust min-height as needed */}

      {/* Particles Component - Background Layer */}
      <Particles
        id="tsparticles"
        options={particlesOptions}
        particlesLoaded={particlesLoaded} // Optional callback
        className="absolute inset-0 z-0" // Position behind content
      />

      {/* Content Layer - On Top */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4" // Ensure content stays above particles & has padding
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
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
             className="inline-block px-6 py-3 bg-white text-blue-800 font-semibold rounded-full shadow-md transition-transform duration-200 ease-out" // Adjusted text color for contrast
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