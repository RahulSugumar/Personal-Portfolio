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
    "NPTEL — Cloud Computing",
  ];
  return (
    <Section id="certifications" title="Certifications">
      <motion.ul
        variants={fadeUp(0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="space-y-2 opacity-90 text-sm"
      >
        {certs.map(c => <li key={c}>• {c}</li>)}
      </motion.ul>
    </Section>
  );
}
