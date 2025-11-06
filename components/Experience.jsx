"use client";
import Section from "./Section";
import { motion } from "framer-motion";
import { fadeUp } from "./motion";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <motion.div
        variants={fadeUp(0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="bg-card/80 border border-white/10 rounded-xl p-6"
      >
        <h3 className="text-lg font-semibold">Arus Pvt Ltd — Data Analyst & Web Developer</h3>
        <p className="text-xs opacity-70">Jun–Jul 2024 • Bangalore</p>
        <ul className="mt-3 text-sm space-y-2 opacity-90 list-disc list-inside">
          <li>Built Power BI dashboards improving reporting efficiency by <b>30%</b>.</li>
          <li>Developed a React + Node analytics dashboard with REST APIs.</li>
          <li>Designed Excel dashboards for leadership insights.</li>
          <li>Wrote optimized SQL queries improving data performance.</li>
        </ul>
      </motion.div>
    </Section>
  );
}
