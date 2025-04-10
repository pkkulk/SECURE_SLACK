"use client";
import { motion } from "framer-motion";

const services = [
  {
    title: "Threat Detection & Response",
    description:
      "Monitor, identify, and neutralize cyber threats in real-time with our advanced security operations.",
  },
  {
    title: "Vulnerability Assessment",
    description:
      "Identify and patch security loopholes before attackers exploit them.",
  },
  {
    title: "Compliance & Risk Management",
    description:
      "Stay compliant with industry standards and manage risks with expert guidance and tools.",
  },
];

export default function ServiceCard() {
  return (
    <section
      id="services"
      className="py-24 px-6 md:px-12 lg:px-20 text-white"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold tracking-tight mb-4">
          Our Cybersecurity Services
        </h2>
        <p className="max-w-xl mx-auto text-lg text-white mb-16">
          Safeguard your digital infrastructure with tailored security solutions.
        </p>

        <div className="grid gap-12 md:grid-cols-3">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-1 hover:ring-2 hover:ring-indigo-300 transition-all duration-300 ease-in-out group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-indigo-100 text-indigo-800 rounded-full transition-transform duration-300 group-hover:rotate-6">
                  <span className="text-xl font-bold">{idx + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-indigo-700 group-hover:text-indigo-800">
                  {service.title}
                </h3>
              </div>
              <p className="text-white text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
