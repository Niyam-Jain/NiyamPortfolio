"use client";

import { motion } from "framer-motion";
import ProjectDetailLayout from "@/components/ui/ProjectDetailLayout";

const architecture = `┌─────────────────────────────────────────────────────────────────┐
│                     Frontend (Next.js + React)                  │
│   Upload | Library | Search | Chat | Summaries                  │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      Backend (FastAPI)                           │
│   Routes → Services → Repositories → Database                   │
└─────────────────────────────────────────────────────────────────┘
         │                    │                     │
         ▼                    ▼                     ▼
    ┌─────────┐      ┌─────────────────┐    ┌──────────────┐
    │  Redis   │ ──── │  Celery Workers │    │  PostgreSQL  │
    └─────────┘      └─────────────────┘    └──────────────┘
                              │
                              ▼
                     ┌─────────────────┐
                     │    ChromaDB      │
                     │  (Vector Store)  │
                     └─────────────────┘`;

const features = [
  "Process large PDFs (1000+ pages) with batched extraction using PyMuPDF",
  "Hierarchical chunking that preserves document structure (sections, subsections, paragraphs)",
  "Semantic search using natural language queries with metadata filtering",
  "RAG-based chat — ask questions and get answers with citations to source documents",
  "Single-document and cross-paper summaries powered by GPT-4",
  "Novelty analysis to identify what's new compared to existing corpus",
  "Real-time ingestion progress tracking with Celery background workers",
  "Configurable embeddings — switch between local SentenceTransformers and OpenAI",
  "ChromaDB vector store with persistence and metadata filtering",
  "Full-stack with Next.js frontend and FastAPI backend",
  "Docker Compose for one-command deployment of all services",
  "Resumable processing — failed jobs can be retried without re-processing",
];

const tech = [
  "Python",
  "FastAPI",
  "Next.js",
  "React",
  "OpenAI GPT-4",
  "ChromaDB",
  "Celery",
  "Redis",
  "PostgreSQL",
  "SQLAlchemy",
  "Tailwind CSS",
  "Docker",
];

const endpoints = [
  { method: "POST", path: "/api/v1/documents/upload", desc: "Upload PDF document" },
  { method: "GET", path: "/api/v1/documents", desc: "List all documents" },
  { method: "GET", path: "/api/v1/documents/:id", desc: "Get document details" },
  { method: "POST", path: "/api/v1/search", desc: "Semantic search across documents" },
  { method: "POST", path: "/api/v1/chat", desc: "RAG chat with citations" },
  { method: "POST", path: "/api/v1/summarize/document", desc: "Single document summary" },
  { method: "POST", path: "/api/v1/summarize/cross", desc: "Cross-paper summary" },
  { method: "POST", path: "/api/v1/summarize/analyze/last-document", desc: "Novelty analysis" },
];

export default function ResearchDocsDetail() {
  return (
    <ProjectDetailLayout
      title="Research Document Processing"
      subtitle="An enterprise-grade research document processing platform with semantic search, RAG-based Q&A, and hierarchical chunking for 1000+ page documents."
      tech={tech}
      github="https://github.com/Niyam-Jain/Research-Document-Processing"
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

      {/* Pipeline */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mb-16"
      >
        <h2 className="mb-6 text-2xl font-semibold">Processing Pipeline</h2>
        <div className="space-y-4">
          {[
            {
              step: "1",
              title: "PDF Upload & Extraction",
              desc: "Documents are uploaded via the Next.js frontend. PyMuPDF extracts text while preserving page boundaries and structural elements.",
            },
            {
              step: "2",
              title: "Hierarchical Chunking",
              desc: "Text is split into hierarchical chunks (sections → subsections → paragraphs) with configurable overlap, preserving document structure and context.",
            },
            {
              step: "3",
              title: "Embedding Generation",
              desc: "Each chunk is embedded using SentenceTransformers (local) or OpenAI embeddings and stored in ChromaDB with rich metadata for filtered retrieval.",
            },
            {
              step: "4",
              title: "Semantic Search & RAG",
              desc: "Natural language queries retrieve the most relevant chunks via vector similarity. GPT-4 synthesizes answers with precise citations back to source documents.",
            },
            {
              step: "5",
              title: "Summarization & Analysis",
              desc: "Generate single-document summaries, cross-paper comparisons, or novelty analysis to identify new contributions relative to the existing corpus.",
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

      {/* Design Decisions */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h2 className="mb-6 text-2xl font-semibold">Design Decisions</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            {
              title: "ChromaDB over FAISS",
              desc: "Built-in persistence, metadata filtering, and a simpler API for production use.",
            },
            {
              title: "Hierarchical Chunking",
              desc: "Preserves document structure for better context and more accurate retrieval.",
            },
            {
              title: "Celery for Background Jobs",
              desc: "Production-ready task queue with retries, progress tracking, and scalability.",
            },
            {
              title: "Configurable Embeddings",
              desc: "Switch between free local models and higher-quality OpenAI embeddings per use case.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-border bg-surface p-4"
            >
              <h3 className="mb-1 text-sm font-semibold text-primary">
                {item.title}
              </h3>
              <p className="text-sm text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>
    </ProjectDetailLayout>
  );
}
