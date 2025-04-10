"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="h-screen  flex items-center justify-center text-white px-6">
      <motion.div
        className="text-center max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true, amount: 0.5 }} 
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          variants={itemVariants}
      viewport={{ once: false, amount: 0.3 }} 
        >
          Empowering Your Digital Safety
        </motion.h1>

        <motion.p
      viewport={{ once: false, amount: 0.3 }} 
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-300"
          variants={itemVariants}
        >
          Building trust through advanced threat protection, real-time monitoring, and a commitment to cybersecurity excellence.
        </motion.p>

        <motion.div variants={itemVariants}
        
      viewport={{ once: false, amount: 0.3 }} 
        >
          <Link href="/services">
            <motion.button
              className="px-8 py-3 bg-white text-blue-800 font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-200"
              whileTap={{ scale: 0.95 }}
            >
              Get Protected Now
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
