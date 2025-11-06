"use client";
import Section from "./Section";
import { motion } from "framer-motion";
import { fadeUp, staggerChildren } from "./motion";

const projects = [
  {
    title: "AI Legal Chatbot",
    tech: "Python • Flask • NLP • ML • Speech-to-Speech",
    desc: "Legal assistance chatbot with fraud detection, voice interaction, and police-station locator.",
    href: "https://github.com/RahulSugumar/AI_Legal_chat_bot",
  },
  {
    title: "Triwizard Coding Platform",
    tech: "React • Node • Express • MongoDB",
    desc: "Competitive coding platform with problems, editor, live compilation, and automated evaluation.",
    href: "https://github.com/RahulSugumar/Triwizard-Coding-Platform",
  },
  {
    title: "Real-Time Chat App",
    tech: "React • Node • WebSocket • JWT",
    desc: "Secure real-time messaging with authentication and responsive UI.",
    href: "https://github.com/RahulSugumar/Real_Time_Chat_App",
  },
  {
    title: "E-Commerce App",
    tech: "React • Node • Express",
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
        viewport={{ once: true, amount: 0.2 }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((p, index) => (
          <motion.a
            key={index}
            variants={fadeUp(0.05 * index)}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              block
              bg-card/60
              backdrop-blur-xl
              border border-white/10
              rounded-2xl
              p-6
              shadow-xl shadow-black/30
              hover:shadow-2xl hover:shadow-accent/20
              hover:-translate-y-2
              hover:border-accent/40
              transition-all duration-300
            "
          >
            {/* Title */}
            <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
              {p.title}
            </h3>

            {/* Tech */}
            <p className="text-xs text-accent font-medium mb-3">{p.tech}</p>

            {/* Description */}
            <p className="text-sm opacity-90 mb-5">{p.desc}</p>

            {/* CTA */}
            <span className="text-accent text-sm font-medium group-hover:underline">
              View on GitHub →
            </span>
          </motion.a>
        ))}
      </motion.div>
    </Section>
  );
}
