"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { skillCategories } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="section-divider absolute top-0 left-0 w-full" />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Skills & Tools"
          subtitle="Technologies I work with every day."
        />

        <div className="grid gap-8 sm:grid-cols-2">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="rounded-xl border border-border bg-surface p-6"
            >
              <h3 className="mb-5 text-sm font-semibold tracking-wider text-primary">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: catIdx * 0.1 + skillIdx * 0.04,
                    }}
                    whileHover={{
                      scale: 1.08,
                      backgroundColor: "rgba(0, 212, 255, 0.12)",
                      borderColor: "rgba(0, 212, 255, 0.4)",
                    }}
                    className="cursor-default rounded-lg border border-border bg-surface-light px-3.5 py-2 text-sm text-muted transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
