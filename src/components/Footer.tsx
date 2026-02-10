"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 md:flex-row md:justify-between">
        <p className="text-sm text-muted">
          &copy; {year} {siteConfig.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted transition-colors hover:text-primary"
          >
            <Github size={18} />
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-primary"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            aria-label="Email"
            className="text-muted transition-colors hover:text-primary"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
