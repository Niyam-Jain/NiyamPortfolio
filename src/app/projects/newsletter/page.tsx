import type { Metadata } from "next";
import NewsletterDetail from "./NewsletterDetail";

export const metadata: Metadata = {
  title: "AI Newsletter Platform | Niyam Jain",
  description:
    "AI-powered newsletter system with automated news curation, LLM summarization, and email delivery using FastAPI, OpenAI, and SendGrid.",
};

export default function Page() {
  return <NewsletterDetail />;
}
