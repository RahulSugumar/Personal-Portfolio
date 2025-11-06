"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Navbar() {
  const items = [
    "home",
    "about",
    "skills",
    "projects",
    "experience",
    "achievements",
    "certifications",
    "contact",
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="
        fixed top-4 left-1/2 -translate-x-1/2 z-50
        bg-black/40 backdrop-blur-xl border border-white/10
        px-6 py-3 rounded-2xl shadow-lg shadow-black/20
      "
    >
      <nav className="flex items-center justify-between gap-10">
        {/* Logo */}
        <Link
          href="#home"
          className="text-xl font-semibold tracking-tight hover:text-accent transition"
        >
          Rahul
        </Link>

        {/* Menu */}
        <ul className="hidden md:flex gap-6 text-sm">
          {items.map((i) => (
            <li key={i}>
              <a
                href={`#${i}`}
                className="opacity-80 hover:text-accent hover:opacity-100 transition font-medium"
              >
                {i.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <a href="https://github.com/RahulSugumar" target="_blank" className="hover:text-accent transition">
            <FaGithub size={18} />
          </a>
          <a href="https://www.linkedin.com/in/rahul-sugumar-62242a2a1" target="_blank" className="hover:text-accent transition">
            <FaLinkedin size={18} />
          </a>
          <a href="https://leetcode.com/u/IgC04TnzO2/" target="_blank" className="hover:text-accent transition">
            <FaCode size={18} />
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
