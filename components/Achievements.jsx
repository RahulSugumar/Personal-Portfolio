"use client";
import Section from "./Section";
import { motion } from "framer-motion";
import { fadeUp } from "./motion";

export default function Achievements() {
  const items = [
    "Solved 300+ LeetCode problems · 100 Days Badge",
    "Smart India Hackathon 2023 — Food Distribution System",
    "Shaastra Techathon 2024 — ML-based COVID Prediction",
    "Accenture Hackathon — Business Domain Solutions",
    "Poornima Hackathon — Problem-Specific ML System",
  ];

  return (
    <Section id="achievements" title="Achievements">
      <motion.div
        variants={fadeUp(0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="
          bg-card/60 
          backdrop-blur-xl 
          border border-white/10 
          rounded-2xl 
          p-8 
          shadow-xl shadow-black/30

          hover:-translate-y-2 
          hover:border-accent/40 
          hover:shadow-accent/20 
          transition-all 
          duration-300
        "
      >
        <ul className="space-y-3 text-sm opacity-95">
          {items.map((item, index) => (
            <li key={index} className="flex gap-2">
              <span className="text-accent font-bold">•</span> {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </Section>
  );
}
