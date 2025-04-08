// src/components/SocialProofSection.tsx
"use client";

import { motion } from "framer-motion";
import { fadeInSlideUp, staggerContainer, staggerItem } from "@/animations";

export default function SocialProofSection() {
  return (
    <section className="py-16 px-4  text-white text-center">
      <motion.h2
        className="text-3xl font-bold mb-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInSlideUp}
      >
        Trusted by 10,000+ Professionals
      </motion.h2>
      <motion.p
        className="text-lg  mb-6 max-w-xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInSlideUp}
      >
        Don’t just take our word for it. Hear what our users have to say.
      </motion.p>

      {/* Stagger container for the blockquotes */}
      <motion.div
        className="flex flex-col md:flex-row gap-6 justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        {/* Animate each blockquote as a staggered item */}
        <motion.blockquote
          className="bg-white p-6 rounded-xl shadow text-left max-w-sm mx-auto"
          variants={staggerItem}
        >
          <p className="mb-2 text-black">“This platform transformed my freelance business.”</p>
          <footer className="text-sm text-gray-600">— Alex, Designer</footer>
        </motion.blockquote>
        <motion.blockquote
          className="bg-white p-6 rounded-xl shadow text-left max-w-sm mx-auto"
          variants={staggerItem}
        >
          <p className="mb-2 text-black">“A one-stop place to show off my skills to clients.”</p>
          <footer className="text-sm text-gray-600">— Priya, Developer</footer>
        </motion.blockquote>
      </motion.div>
    </section>
  );
}