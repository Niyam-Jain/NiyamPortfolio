"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="mb-16 text-center"
    >
      <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="mx-auto max-w-lg text-muted">{subtitle}</p>
      )}
      <div className="mx-auto mt-4 h-px w-20 bg-gradient-to-r from-transparent via-primary to-transparent" />
    </motion.div>
  );
}
