import type { Metadata } from "next";
import ResearchDocsDetail from "./ResearchDocsDetail";

export const metadata: Metadata = {
  title: "Research Document Processing | Niyam Jain",
  description:
    "Enterprise-grade research document processing platform with semantic search, RAG-based Q&A, and hierarchical chunking using FastAPI, Next.js, and OpenAI.",
};

export default function Page() {
  return <ResearchDocsDetail />;
}
