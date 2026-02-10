"use client";

import { motion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import dynamic from "next/dynamic";
import { siteConfig } from "@/lib/data";

// Lazy-load the 3D scene so it doesn't block initial paint
const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-background" />,
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* 3D Background */}
      <HeroScene />

      {/* Radial gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_30%,#050505_75%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-4 font-mono text-sm tracking-widest text-primary"
        >
          &mdash; HELLO, I&apos;M
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="mb-4 text-5xl font-bold leading-tight tracking-tight md:text-7xl"
        >
          {siteConfig.name}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mb-6 text-xl font-medium text-muted md:text-2xl"
        >
          <span className="gradient-text">{siteConfig.title}</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mx-auto mb-10 max-w-xl text-muted"
        >
          Specializing in AI, Machine Learning, LLMs &amp; Full-Stack
          Development. Building intelligent systems that solve real-world
          problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#projects"
            className="group flex items-center gap-2 rounded-full bg-primary/10 px-6 py-3 text-sm font-medium text-primary ring-1 ring-primary/30 transition-all hover:bg-primary/20 hover:ring-primary/50"
          >
            View Projects
            <ArrowDown
              size={14}
              className="transition-transform group-hover:translate-y-0.5"
            />
          </a>
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/40 hover:text-primary"
          >
            <FileText size={14} />
            Download Resume
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-widest text-muted">SCROLL</span>
          <div className="h-8 w-px bg-gradient-to-b from-primary/60 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
