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
          transition-all duration-300
        "
      >
        
        {/* Timeline Left Accent */}
        <div className="border-l-4 border-accent pl-6">
          <h3 className="text-2xl font-semibold">Arus Pvt Ltd — Data Analyst & Web Developer</h3>
          <p className="text-xs opacity-70 mt-1">Jun–Jul 2024 · Bangalore</p>

          <ul className="mt-4 text-sm opacity-95 space-y-2">
            <li className="flex gap-2">
              <span className="text-accent">•</span>
              Built Power BI dashboards improving reporting efficiency by <b>30%</b>.
            </li>
            <li className="flex gap-2">
              <span className="text-accent">•</span>
              Developed a React + Node analytics dashboard with REST APIs.
            </li>
            <li className="flex gap-2">
              <span className="text-accent">•</span>
              Designed multi-sheet Excel dashboards for leadership reporting.
            </li>
            <li className="flex gap-2">
              <span className="text-accent">•</span>
              Wrote optimized SQL queries improving data performance.
            </li>
          </ul>
        </div>
      </motion.div>
    </Section>
  );
}
