"use client";
import { motion } from "framer-motion";
import { fadeUp } from "./motion";

export default function Section({ id, title, children }) {
  return (
    <section id={id} className="py-28">
      <div className="max-w-container mx-auto px-6">
        
        {title && (
          <motion.h2
            variants={fadeUp(0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="text-4xl font-semibold mb-12 tracking-tight"
          >
            {title}
          </motion.h2>
        )}
        
        <motion.div
          variants={fadeUp(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-8"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
