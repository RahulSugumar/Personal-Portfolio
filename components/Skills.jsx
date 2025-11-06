"use client";
import Section from "./Section";
import { motion } from "framer-motion";
import { fadeUp, staggerChildren } from "./motion";

const groups = [
  { title: "Languages", items: ["JavaScript","Python","HTML","CSS"] },
  { title: "Frontend", items: ["React.js","CSS Modules","Tailwind (basic)"] },
  { title: "Backend", items: ["Node.js","Express.js","FastAPI"] },
  { title: "Databases", items: ["SQL","MongoDB"] },
  { title: "AI / ML", items: ["Machine Learning","Deep Learning","NLP","CrewAI","API Integration"] },
  { title: "Tools", items: ["Git & GitHub","Power BI","Streamlit","ServiceNow","REST APIs"] },
];

export default function Skills() {
  return (
    <Section id="about" title="About">
      <p className="opacity-90 mb-12">
        Final-year B.Tech (AI & ML). Hands-on in full-stack dev, data analytics, and cloud foundations. I love building end-to-end products that solve real problems.
      </p>

      <Section id="skills" title="Skills">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {groups.map((g) => (
            <motion.div
              key={g.title}
              variants={fadeUp(0)}
              className="bg-card/80 border border-white/10 rounded-xl p-6 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/10 transition-all"
            >
              <h3 className="font-medium mb-3">{g.title}</h3>
              <ul className="text-sm opacity-90 space-y-1">
                {g.items.map((i) => <li key={i}>• {i}</li>)}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </Section>
  );
}
