import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Niyam Jain | AI Software Engineer",
  description:
    "AI Software Engineer specializing in Machine Learning, Deep Learning, and Full-Stack Development. Building intelligent systems that solve real-world problems.",
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "Deep Learning",
    "Full Stack Developer",
    "Python",
    "React",
    "TensorFlow",
    "Software Engineer",
  ],
  authors: [{ name: "Niyam Jain" }],
  openGraph: {
    title: "Niyam Jain | AI Software Engineer",
    description:
      "AI Software Engineer specializing in Machine Learning, Deep Learning, and Full-Stack Development.",
    url: "https://niyamjain.com",
    siteName: "Niyam Jain",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Niyam Jain | AI Software Engineer",
    description:
      "AI Software Engineer specializing in ML, DL, and Full-Stack Development.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrains.variable} bg-background text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
