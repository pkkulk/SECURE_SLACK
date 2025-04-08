// src/components/WhyChooseUsSection.tsx
"use client";

import { motion } from "framer-motion";
import { fadeInSlideUp, staggerContainer, staggerItem } from "@/animations";

export default function WhyChooseUsSection() {
  return (
    <motion.section
      className=" px-4 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer} // Stagger children: h2, p, ul
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 className="text-3xl font-bold mb-4" variants={fadeInSlideUp}>
          Why Choose Us?
        </motion.h2>
        <motion.p className="text-lg mb-6" variants={fadeInSlideUp}>
          Our cybersecurity platform delivers enterprise-grade security tailored for organizations of all sizes. We combine cutting-edge technology with expert insights to defend against evolving threats.
        </motion.p>

        {/* Animate list container and stagger list items */}
        <motion.ul
            className="text-left max-w-2xl mx-auto space-y-3"
            variants={staggerContainer} // Stagger the list items
        >
          <motion.li variants={staggerItem}>✅ 24/7 threat monitoring and incident response</motion.li>
          <motion.li variants={staggerItem}>✅ AI-driven vulnerability scanning and remediation</motion.li>
          <motion.li variants={staggerItem}>✅ Compliance with ISO, GDPR, HIPAA, and more</motion.li>
          <motion.li variants={staggerItem}>✅ Scalable solutions for startups to enterprises</motion.li>
        </motion.ul>
      </div>
    </motion.section>
  );
}