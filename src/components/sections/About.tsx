"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Briefcase } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const highlights = [
  {
    icon: GraduationCap,
    label: "Education",
    value: "M.S. Computer Science, NJIT",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Newark, NJ",
  },
  {
    icon: Briefcase,
    label: "Focus",
    value: "AI / ML Engineering",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="section-divider absolute top-0 left-0 w-full" />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="About Me"
          subtitle="Engineer. Problem-solver. AI enthusiast."
        />

        <div className="grid gap-12 md:grid-cols-2">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            <p className="leading-relaxed text-muted">
              I&apos;m a Computer Science graduate student at the New Jersey
              Institute of Technology with a deep passion for artificial
              intelligence and machine learning. My journey spans from building
              deep learning models for computer vision to developing full-stack
              web applications.
            </p>
            <p className="leading-relaxed text-muted">
              I thrive at the intersection of AI research and practical software
              engineering &mdash; taking complex ML concepts and turning them
              into production-ready solutions. Whether it&apos;s training neural
              networks, optimizing database pipelines, or crafting intuitive
              user interfaces, I bring the same mindset: solve real problems
              with clean, maintainable code.
            </p>
            <p className="leading-relaxed text-muted">
              When I&apos;m not coding, I&apos;m exploring the latest in
              generative AI, contributing to open-source projects, or diving
              into research papers on transformer architectures.
            </p>
          </motion.div>

          {/* Highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col justify-center gap-4"
          >
            {highlights.map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className="group flex items-center gap-4 rounded-xl border border-border bg-surface p-5 transition-colors hover:border-primary/30"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <item.icon size={20} />
                </div>
                <div>
                  <p className="text-xs font-medium tracking-wider text-muted">
                    {item.label}
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    {item.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
