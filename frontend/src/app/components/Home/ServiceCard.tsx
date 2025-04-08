// src/components/ServiceCard.tsx
"use client";

import { motion } from "framer-motion";
import { staggerItem } from "@/animations"; // Import item variant

type ServiceCardProps = {
  title: string;
  description: string;
};

export default function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    // Apply item variants here; animation is triggered by parent's stagger
    <motion.div
      className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
      variants={staggerItem} // Use the item variant
      // No initial/whileInView here if using parent's stagger
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
}