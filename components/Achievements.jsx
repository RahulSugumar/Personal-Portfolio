"use client";
import Section from "./Section";
import { motion } from "framer-motion";
import { fadeUp } from "./motion";

export default function Achievements() {
  const items = [
    "Solved 300+ LeetCode problems; 100 Days Badge 2025",
    "Smart India Hackathon 2023 — Food distribution platform",
    "Shaastra Techathon 2024 — ML-based COVID-19 prediction",
    "Accenture & Poornima Hackathons — domain solutions",
  ];
  return (
    <Section id="achievements" title="Achievements">
      <motion.ul
        variants={fadeUp(0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="space-y-2 opacity-90 text-sm"
      >
        {items.map(t => <li key={t}>• {t}</li>)}
      </motion.ul>
    </Section>
  );
}
