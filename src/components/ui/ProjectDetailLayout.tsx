"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import Link from "next/link";

interface ProjectDetailLayoutProps {
  title: string;
  subtitle: string;
  tech: string[];
  github: string;
  features: string[];
  architecture: string;
  children?: React.ReactNode;
}

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export default function ProjectDetailLayout({
  title,
  subtitle,
  tech,
  github,
  features,
  architecture,
  children,
}: ProjectDetailLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-primary"
          >
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-primary/40 px-4 py-1.5 text-sm text-primary transition-all hover:bg-primary/10"
          >
            <Github size={14} />
            View Code
          </a>
        </div>
      </nav>

      <main className="mx-auto max-w-5xl px-6 pt-28 pb-20">
        {/* Header */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="mb-3 text-4xl font-bold tracking-tight md:text-5xl">
            <span className="gradient-text">{title}</span>
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-muted">{subtitle}</p>
          <div className="flex flex-wrap gap-2">
            {tech.map((t) => (
              <span
                key={t}
                className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Features */}
        <motion.section
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-16"
        >
          <h2 className="mb-6 text-2xl font-semibold">Key Features</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {features.map((feature, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-lg border border-border bg-surface p-4"
              >
                <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <p className="text-sm text-muted">{feature}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Architecture */}
        <motion.section
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="mb-6 text-2xl font-semibold">Architecture</h2>
          <div className="overflow-x-auto rounded-xl border border-border bg-surface p-6">
            <pre className="font-mono text-xs leading-relaxed text-muted sm:text-sm">
              {architecture}
            </pre>
          </div>
        </motion.section>

        {/* Extra content */}
        {children}

        {/* CTA */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-16 flex flex-col items-center gap-4 rounded-xl border border-border bg-surface p-10 text-center sm:flex-row sm:justify-center"
        >
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-primary/10 px-6 py-3 text-sm font-medium text-primary ring-1 ring-primary/30 transition-all hover:bg-primary/20"
          >
            <Github size={16} />
            View Source Code
          </a>
          <Link
            href="/#projects"
            className="flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/40 hover:text-primary"
          >
            <ExternalLink size={16} />
            See All Projects
          </Link>
        </motion.div>
      </main>
    </div>
  );
}
