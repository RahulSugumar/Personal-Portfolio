"use client";
import Section from "./Section";
import { motion } from "framer-motion";
import { fadeUp } from "./motion";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <motion.div
        variants={fadeUp(0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="bg-card/80 border border-white/10 rounded-xl p-6"
      >
        <p className="opacity-90 text-sm">
          Email: <a className="text-accent" href="mailto:rahulsugumar1977@gmail.com">rahulsugumar1977@gmail.com</a>
        </p>
        <p className="opacity-90 text-sm mt-1">Location: Chennai</p>
        <div className="mt-3 text-sm opacity-90 space-x-3">
          <a className="text-accent" href="https://github.com/RahulSugumar" target="_blank">GitHub</a>
          <a className="text-accent" href="https://www.linkedin.com/in/rahul-sugumar-62242a2a1" target="_blank">LinkedIn</a>
          <a className="text-accent" href="https://leetcode.com/u/IgC04TnzO2/" target="_blank">LeetCode</a>
        </div>
      </motion.div>
    </Section>
  );
}
