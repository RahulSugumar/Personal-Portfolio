"use client";
import Section from "./Section";
import { motion } from "framer-motion";
import { fadeUp, staggerChildren } from "./motion";

const groups = [
  { title: "Languages", items: ["JavaScript", "Python", "HTML", "CSS"] },
  { title: "Frontend", items: ["React.js", "CSS Modules", "Tailwind CSS"] },
  { title: "Backend", items: ["Node.js", "Express.js", "FastAPI"] },
  { title: "Databases", items: ["SQL", "MongoDB"] },
  { title: "AI / ML", items: ["Machine Learning", "Deep Learning", "NLP", "CrewAI", "API Integration"] },
  { title: "Tools", items: ["Git & GitHub", "Power BI", "Streamlit", "ServiceNow", "REST APIs"] },
];

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <motion.div
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {groups.map((g) => (
          <motion.div
            key={g.title}
            variants={fadeUp(0)}
            className="
              bg-card/60 
              backdrop-blur-xl 
              rounded-2xl 
              p-6 
              border border-white/10 
              hover:border-accent/40 
              hover:shadow-xl 
              hover:shadow-accent/10 
              transition-all 
              hover:-translate-y-2
            "
          >
            <h3 className="text-xl font-semibold mb-4">{g.title}</h3>

            <ul className="space-y-2 text-sm opacity-90">
              {g.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
