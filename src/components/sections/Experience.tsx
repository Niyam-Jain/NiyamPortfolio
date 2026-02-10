"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="section-divider absolute top-0 left-0 w-full" />
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          title="Experience"
          subtitle="Where I've built, shipped, and learned."
        />

        {/* Vertical timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-0 left-4 h-full w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent md:left-1/2 md:-translate-x-px" />

          {experiences.map((exp, idx) => {
            const isLeft = idx % 2 === 0;

            return (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`relative mb-12 pl-12 last:mb-0 md:w-1/2 md:pl-0 ${
                  isLeft ? "md:pr-12" : "md:ml-auto md:pl-12"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute top-1 left-2.5 h-3 w-3 rounded-full border-2 border-primary bg-background md:top-1 ${
                    isLeft
                      ? "md:left-auto md:-right-[6.5px]"
                      : "md:-left-[6.5px]"
                  }`}
                />

                {/* Card */}
                <div className="group rounded-xl border border-border bg-surface p-6 transition-all hover:border-primary/30 hover:shadow-[0_0_30px_-10px_rgba(0,212,255,0.15)]">
                  <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-muted">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} />
                      {exp.location}
                    </span>
                  </div>

                  <h3 className="mb-1 text-lg font-semibold text-foreground">
                    {exp.role}
                  </h3>
                  <p className="mb-3 text-sm font-medium text-primary">
                    {exp.company}
                  </p>
                  <p className="mb-4 text-sm leading-relaxed text-muted">
                    {exp.description}
                  </p>

                  {/* Impact callout */}
                  <div className="mb-4 rounded-lg border border-primary/10 bg-primary/5 px-4 py-2.5 text-xs leading-relaxed text-primary/80">
                    {exp.impact}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-surface-light px-3 py-1 text-xs text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
