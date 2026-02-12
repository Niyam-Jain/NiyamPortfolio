"use client";

import { motion } from "framer-motion";
import ProjectDetailLayout from "@/components/ui/ProjectDetailLayout";

const architecture = `┌─────────────────────────────────────────────────────────────┐
│                  Newsletter Platform                        │
├─────────────────────────────────────────────────────────────┤
│  ┌──────────────┐      ┌─────────────────┐                 │
│  │   FastAPI     │◄────►│   PostgreSQL    │                 │
│  │   Backend     │      │    Database     │                 │
│  └──────┬───────┘      └─────────────────┘                 │
│         │                                                   │
│         ├──► News Ingestion ──► RSS Feeds + News API        │
│         ├──► Ranking Service ──► Heuristics + LLM           │
│         ├──► LLM Service ──────► OpenAI API                 │
│         ├──► Email Service ────► SendGrid                   │
│         └──► APScheduler ──────► Daily/Weekly Jobs           │
└─────────────────────────────────────────────────────────────┘`;

const features = [
  "Automated news collection from RSS feeds and News API",
  "AI-powered curation and summarization via OpenAI GPT",
  "Hybrid ranking system combining heuristics and content quality metrics",
  "Professional HTML email delivery via SendGrid",
  "Scheduled daily and weekly newsletter generation with APScheduler",
  "One-click unsubscribe links per topic",
  "RESTful API for full subscription management",
  "CLI tools for testing, seeding, and manual newsletter triggers",
  "Docker support for production deployment",
  "Configurable LLM model, temperature, and max tokens",
];

const tech = [
  "Python",
  "FastAPI",
  "OpenAI GPT",
  "SendGrid",
  "PostgreSQL",
  "SQLAlchemy",
  "APScheduler",
  "News API",
  "Docker",
];

const endpoints = [
  { method: "GET", path: "/api/topics", desc: "List available topics" },
  { method: "POST", path: "/api/subscribe", desc: "Subscribe to topics" },
  { method: "GET", path: "/api/subscriptions/:email", desc: "View subscriptions" },
  { method: "GET", path: "/api/unsubscribe", desc: "Unsubscribe via token" },
];

export default function NewsletterDetail() {
  return (
    <ProjectDetailLayout
      title="AI Newsletter Platform"
      subtitle="A production-ready, AI-powered newsletter system that automatically curates, summarizes, and delivers topic-based newsletters to subscribers."
      tech={tech}
      github="https://github.com/Niyam-Jain/AI-Newsletter"
      features={features}
      architecture={architecture}
    >
      {/* API Endpoints */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mb-16"
      >
        <h2 className="mb-6 text-2xl font-semibold">API Endpoints</h2>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-surface">
                <th className="px-4 py-3 text-left text-xs font-medium text-muted">
                  Method
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-muted">
                  Endpoint
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-muted">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {endpoints.map((ep) => (
                <tr key={ep.path} className="border-b border-border last:border-0">
                  <td className="px-4 py-3">
                    <span className="rounded bg-primary/10 px-2 py-0.5 font-mono text-xs text-primary">
                      {ep.method}
                    </span>
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-foreground">
                    {ep.path}
                  </td>
                  <td className="px-4 py-3 text-muted">{ep.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.section>

      {/* How it works */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mb-16"
      >
        <h2 className="mb-6 text-2xl font-semibold">How It Works</h2>
        <div className="space-y-4">
          {[
            {
              step: "1",
              title: "News Ingestion",
              desc: "RSS feeds and News API are polled for fresh articles across configured topics (Sports, World News, US Stocks).",
            },
            {
              step: "2",
              title: "AI Ranking & Curation",
              desc: "A hybrid ranking system scores articles using heuristics (recency, source authority) and LLM-based content quality assessment.",
            },
            {
              step: "3",
              title: "LLM Summarization",
              desc: "Top-ranked articles are summarized by OpenAI GPT with custom prompts that generate subject lines, introductions, and 'why it matters' sections.",
            },
            {
              step: "4",
              title: "Email Delivery",
              desc: "Professional HTML newsletters are composed and delivered via SendGrid to all subscribers of that topic, respecting their daily/weekly frequency preference.",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="flex gap-4 rounded-lg border border-border bg-surface p-5"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                {item.step}
              </div>
              <div>
                <h3 className="mb-1 text-sm font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </ProjectDetailLayout>
  );
}
