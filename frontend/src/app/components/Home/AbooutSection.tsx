// src/components/AboutSection.tsx
"use client";

import { motion } from "framer-motion";

const fadeInSlideUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function AboutSection() {
  return (
    <motion.section
      className="py-16 text-white text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }} // 👈 animate every time it's 30% in view
      variants={fadeInSlideUp}
    >
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <p className="max-w-2xl mx-auto text-lg">
        At the forefront of digital defense, we specialize in building robust cybersecurity infrastructures.
        Our mission is to shield organizations from the ever-growing landscape of cyber threats through
        innovation, expertise, and trust. Whether it’s advanced threat detection, risk management, or
        compliance assurance, we are your reliable security partner.
      </p>
    </motion.section>
  );
}
