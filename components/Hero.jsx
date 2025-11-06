"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const imgRef = useRef(null);

  // ✅ Detect mobile
  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768;

  // ✅ Parallax Effect (disabled on mobile)
  useIsomorphicLayoutEffect(() => {
    if (!imgRef.current) return;

    // ❌ Stop parallax if mobile
    if (isMobile) return;

    const el = imgRef.current;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y: 0 },
        {
          y: -80,
          ease: "none",
          scrollTrigger: {
            trigger: "#home",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section id="home" className="relative pt-40 pb-32 overflow-hidden">

      {/* TOP GLOW */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] 
        bg-accent/20 rounded-full blur-[180px] opacity-40 pointer-events-none" />

      {/* MAIN GRID */}
      <div className="max-w-container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* LEFT TEXT */}
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-bold leading-tight tracking-tight"
          >
            Hi, I’m <span className="text-accent">Rahul Sugumar</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg md:text-xl opacity-90 max-w-lg"
          >
            Full-Stack Developer & AI/ML Engineer.  
            I build scalable, intelligent applications for real-world impact.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex gap-4 pt-4"
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-accent text-white font-medium rounded-xl hover:opacity-90 transition-all hover:scale-105"
            >
              View Projects
            </a>
            
            <a
              href="#contact"
              className="px-6 py-3 border border-white/20 rounded-xl hover:bg-white/5 transition-all hover:scale-105"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <div
            ref={imgRef}
            className="relative w-full h-[350px] md:h-[480px] drop-shadow-2xl"
          >
            <Image
              src="/hero-illustration.png"
              alt="Developer Illustration"
              fill
              className="object-contain opacity-95"
            />
          </div>

          {/* Soft glow behind image */}
          <div className="absolute inset-0 -z-10 blur-3xl bg-accent/20 rounded-full" />
        </div>
      </div>

      {/* ✅ BOTTOM GLOW */}
      <div className="absolute inset-0 -z-10 blur-[200px] bg-accent/10 opacity-30"></div>

    </section>
  );
}
