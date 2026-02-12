"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/lib/data";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="relative py-28">
      <div className="section-divider absolute top-0 left-0 w-full" />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Projects"
          subtitle="Things I've built and experimented with."
        />

        {/* Filter tabs */}
        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                active === cat
                  ? "bg-primary/15 text-primary ring-1 ring-primary/30"
                  : "bg-surface-light text-muted hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <motion.div
          layout
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => {
              const isInternal =
                "demo" in project &&
                project.demo &&
                project.demo.startsWith("/");

              return (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="group flex h-full flex-col rounded-xl border border-border bg-surface p-6 transition-all hover:border-primary/30 hover:shadow-[0_0_40px_-12px_rgba(0,212,255,0.12)]">
                    {/* Category badge */}
                    <span className="mb-4 inline-block self-start rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                      {project.category}
                    </span>

                    <h3 className="mb-2 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                      {project.title}
                    </h3>
                    <p className="mb-5 flex-1 text-sm leading-relaxed text-muted">
                      {project.description}
                    </p>

                    {/* Tech */}
                    <div className="mb-5 flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded bg-surface-light px-2 py-0.5 text-[11px] text-muted"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 border-t border-border pt-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-primary"
                      >
                        <Github size={14} />
                        Code
                      </a>
                      {"demo" in project && project.demo && (
                        isInternal ? (
                          <Link
                            href={project.demo}
                            className="flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-primary"
                          >
                            <ExternalLink size={14} />
                            Live Demo
                          </Link>
                        ) : (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-primary"
                          >
                            <ExternalLink size={14} />
                            Demo
                          </a>
                        )
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
