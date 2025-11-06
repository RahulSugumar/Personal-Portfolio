"use client";
import Section from "./Section";
import { motion } from "framer-motion";
import { fadeUp } from "./motion";
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaCode } from "react-icons/fa";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
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
          transition-all 
          duration-300
        "
      >
        {/* Contact Items */}
        <div className="space-y-4 text-sm opacity-95">
          
          {/* Email */}
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-accent text-lg" />
            <p>
              <span className="font-semibold">Email:</span>{" "}
              <a href="mailto:rahulsugumar1977@gmail.com" className="text-accent hover:underline">
                rahulsugumar1977@gmail.com
              </a>
            </p>
          </div>

          {/* Location */}
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-accent text-lg" />
            <p>
              <span className="font-semibold">Location:</span> Chennai, India
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5 pt-4">
            <a href="https://github.com/RahulSugumar" target="_blank" className="hover:text-accent transition">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/rahul-sugumar-62242a2a1" target="_blank" className="hover:text-accent transition">
              <FaLinkedin size={20} />
            </a>
            <a href="https://leetcode.com/u/IgC04TnzO2/" target="_blank" className="hover:text-accent transition">
              <FaCode size={20} />
            </a>
          </div>

        </div>
      </motion.div>
    </Section>
  );
}
