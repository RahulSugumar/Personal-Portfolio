"use client";
import Section from "./Section";
import { motion } from "framer-motion";
import { fadeUp, staggerChildren } from "./motion";

const projects = [
  {
    title: "AI Legal Chatbot",
    tech: "Python, Flask, NLP, ML, Speech-to-Speech",
    desc: "Legal assistance chatbot with fraud detection, voice interaction, and police-station locator.",
    href: "https://github.com/RahulSugumar/AI_Legal_chat_bot",
  },
  {
    title: "Triwizard Coding Platform",
    tech: "React, Node, Express, MongoDB",
    desc: "Competitive coding platform with problems, editor, live compilation, and automated evaluation.",
    href: "https://github.com/RahulSugumar/Triwizard-Coding-Platform",
  },
  {
    title: "Real-Time Chat App",
    tech: "React, Node, WebSocket, JWT",
    desc: "Secure real-time messaging with authentication and responsive UI.",
    href: "https://github.com/RahulSugumar/Real_Time_Chat_App",
  },
  {
    title: "E-Commerce App",
    tech: "React, Node, Express",
    desc: "Full-stack ecommerce with catalog, cart, checkout, and secure APIs.",
    href: "https://github.com/RahulSugumar/ECOMMERCE-APP",
  },
];

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <motion.div
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((p) => (
          <motion.a
            key={p.title}
            variants={fadeUp(0)}
            href={p.href}
            target="_blank"
            className="group bg-card/80 border border-white/10 rounded-xl p-6 flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-accent/20 transition-all"
          >
            <div>
              <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">{p.title}</h3>
              <p className="text-xs mt-1 opacity-70">{p.tech}</p>
              <p className="text-sm mt-3 opacity-90">{p.desc}</p>
            </div>
            <span className="mt-5 text-accent text-sm font-medium">View on GitHub →</span>
          </motion.a>
        ))}
      </motion.div>
    </Section>
  );
}
