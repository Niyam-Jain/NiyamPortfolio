"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Mail } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/data";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult("Sending....");
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "7fcdbd93-eecf-4d8c-a95e-3bcfa927c893");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      form.reset();
    } else {
      setResult("Error");
    }
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="section-divider absolute top-0 left-0 w-full" />
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          title="Get in Touch"
          subtitle="Have a project in mind? Let's connect."
        />

        <div className="grid gap-12 md:grid-cols-2">
          {/* Info side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <p className="mb-8 leading-relaxed text-muted">
              I&apos;m always open to discussing AI/ML projects, full-stack
              opportunities, or just interesting technical problems. Feel free to
              reach out.
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="group flex items-center gap-3 text-sm text-muted transition-colors hover:text-primary"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface-light transition-colors group-hover:bg-primary/10">
                  <Mail size={16} />
                </div>
                {siteConfig.email}
              </a>
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm text-muted transition-colors hover:text-primary"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface-light transition-colors group-hover:bg-primary/10">
                  <Github size={16} />
                </div>
                GitHub
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm text-muted transition-colors hover:text-primary"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface-light transition-colors group-hover:bg-primary/10">
                  <Linkedin size={16} />
                </div>
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-4"
          >
            <div>
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/60 outline-none transition-colors focus:border-primary/40"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/60 outline-none transition-colors focus:border-primary/40"
              />
            </div>
            <div>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Your Message"
                className="w-full resize-none rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/60 outline-none transition-colors focus:border-primary/40"
              />
            </div>

            <button
              type="submit"
              disabled={result === "Sending...."}
              className="group flex w-full items-center justify-center gap-2 rounded-lg bg-primary/10 py-3 text-sm font-medium text-primary ring-1 ring-primary/30 transition-all hover:bg-primary/20 hover:ring-primary/50 disabled:opacity-50"
            >
              {result === "Sending...." ? (
                "Sending..."
              ) : result === "Form Submitted Successfully" ? (
                "Message Sent!"
              ) : (
                <>
                  Send Message
                  <Send
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </>
              )}
            </button>

            {result === "Error" && (
              <p className="text-center text-xs text-red-400">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
