"use client";
import Section from "./Section";
import { motion } from "framer-motion";
import { fadeUp } from "./motion";

export default function Certifications() {
  const certs = [
    "ServiceNow — Certified System Administrator (CSA)",
    "NPTEL — Python for Data Science",
    "NPTEL — Google Cloud Computing Foundations",
    "NPTEL — PDSA Using Python",
    "NPTEL — Cloud Computing Certification",
  ];

  return (
    <Section id="certifications" title="Certifications">
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
          {certs.map((c, index) => (
            <li key={index} className="flex gap-2">
              <span className="text-accent font-bold">•</span> {c}
            </li>
          ))}
        </ul>
      </motion.div>
    </Section>
  );
}
