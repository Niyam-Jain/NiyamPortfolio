export const siteConfig = {
  name: "Niyam Jain",
  title: "AI Software Engineer",
  description:
    "AI Software Engineer specializing in Machine Learning, Deep Learning, and Full-Stack Development. Building intelligent systems that solve real-world problems.",
  url: "https://niyamjain.com",
  email: "niyamjain2003@gmail.com",
  phone: "+1 (551) 998-3498",
  location: "Newark, NJ",
  social: {
    github: "https://github.com/niyamjain",
    linkedin: "https://linkedin.com/in/niyamjain21",
  },
  resumeUrl: "/resume.pdf",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const experiences = [
  {
    role: "Web Developer & Teaching Assistant",
    company: "New Jersey Institute of Technology",
    period: "Sept 2025 - Dec 2025",
    location: "Newark, NJ",
    description:
      "Built high-performance web applications and assisted in teaching computer science coursework. Optimized WebGL rendering pipelines and developed 3D molecular visualization tools for academic research.",
    tech: ["JavaScript", "TypeScript", "WordPress", "WebGL", "Three.js"],
    impact:
      "Improved WebGL rendering performance by 40% for 3D molecular visualization platform.",
  },
  {
    role: "Python Developer Intern",
    company: "Profitbooks Solutions Pvt. Ltd.",
    period: "Dec 2023 - Feb 2024",
    location: "Pune, India (Hybrid)",
    description:
      "Developed automated financial report generation systems and optimized database architectures. Built balance sheet automation pipelines using SQLAlchemy and Django, reducing manual processing time significantly.",
    tech: ["Python", "MySQL", "Django", "SQLAlchemy", "REST APIs"],
    impact:
      "Reduced balance sheet generation time by 60% through automated SQLAlchemy pipelines.",
  },
  {
    role: "AI-ML Intern",
    company: "All India Council for Technical Education (AICTE)",
    period: "Dec 2023 - Mar 2024",
    location: "Remote",
    description:
      "Completed advanced certifications in Emerging Technologies and Cloud Computing. Gained hands-on experience with IBM Cloud and AWS services, building and deploying ML models in production cloud environments.",
    tech: ["AI/ML", "IBM Cloud", "AWS", "Python", "TensorFlow"],
    impact:
      "Earned certifications in AI/ML, Cloud Computing, and Emerging Technologies from AICTE & IBM.",
  },
];

export const projects = [
  {
    title: "Research Document Processing & Semantic Search",
    description:
      "Enterprise-level research analysis platform using multi-level batching, hierarchical chunking, vector retrieval pipelines, and LLM-based reasoning to process 1000+ page documents. Produces embeddings, executes topic-conditioned retrieval, cross-paper summarization, and maintains a persistent vector store for accelerated RAG-based queries.",
    tech: ["Python", "LLMs", "RAG", "Vector DB", "NLP"],
    github: "https://github.com/Niyam-Jain/Research-Document-Processing",
    demo: "/projects/research-docs",
    category: "AI / LLM",
  },
  {
    title: "HireInsight: Interview Platform",
    description:
      "Full-stack interview platform integrating WebRTC for live video interviews with AI-powered interview analysis and automated report generation. Connected Node.js and Flask backend APIs with a React frontend for seamless interaction.",
    tech: ["React", "Node.js", "Flask", "MongoDB", "WebRTC", "NLP"],
    github: "https://github.com/niyamjain",
    category: "Full Stack",
  },
  {
    title: "Personalized AI Newsletters",
    description:
      "AI-powered newsletter system with end-to-end workflow automation using LLMs for automated news summarization, ranking, and domain-specific content creation. Features fully automated pipelines from data ingestion to delivery.",
    tech: ["Python", "OpenAI API", "N8N", "Google Apps Script", "REST APIs"],
    github: "https://github.com/Niyam-Jain/AI-Newsletter",
    demo: "/projects/newsletter",
    category: "AI / LLM",
  },
  {
    title: "Stock Price Prediction",
    description:
      "LSTM-based deep learning model for predicting stock market trends using historical data. Implements RNN architecture with TensorFlow for time-series forecasting.",
    tech: ["Python", "TensorFlow", "LSTM", "Pandas", "Matplotlib"],
    github: "https://github.com/niyamjain",
    category: "Deep Learning",
  },
  {
    title: "Student Face Verification",
    description:
      "Real-time face recognition system for student identity verification using OpenCV and deep learning embeddings. Features live camera feed processing.",
    tech: ["Python", "OpenCV", "Deep Learning", "NumPy"],
    github: "https://github.com/niyamjain",
    category: "Deep Learning",
  },
  {
    title: "Cat vs Dog Classifier",
    description:
      "Convolutional Neural Network trained to classify images of cats and dogs with high accuracy. Features data augmentation and transfer learning techniques.",
    tech: ["Python", "TensorFlow", "CNN", "Keras", "OpenCV"],
    github: "https://github.com/niyamjain",
    category: "Deep Learning",
  },
  {
    title: "Movie Recommender System",
    description:
      "Collaborative filtering recommendation engine built on the MovieLens dataset. Uses matrix factorization and similarity algorithms for personalized suggestions.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Flask"],
    github: "https://github.com/niyamjain",
    category: "Machine Learning",
  },
  {
    title: "Talkathon - Real-time Chat",
    description:
      "Full-stack real-time chat application built with Flask and Socket.IO. Supports multiple chat rooms, message persistence, and live user presence indicators.",
    tech: ["Python", "Flask", "Socket.IO", "JavaScript", "SQLAlchemy"],
    github: "https://github.com/niyamjain",
    category: "Full Stack",
  },
  {
    title: "Expense Tracker",
    description:
      "Web application for tracking personal expenses with categorization, analytics dashboards, and data export. Built with Flask and SQLAlchemy ORM.",
    tech: ["Python", "Flask", "SQLAlchemy", "Chart.js", "Bootstrap"],
    github: "https://github.com/niyamjain",
    category: "Full Stack",
  },
  {
    title: "Iris Classification",
    description:
      "SVM-based machine learning classifier for the Iris flower dataset. Implements hyperparameter tuning and cross-validation for optimal accuracy.",
    tech: ["Python", "Scikit-learn", "SVM", "Matplotlib"],
    github: "https://github.com/niyamjain",
    category: "Machine Learning",
  },
  {
    title: "Memory Master Game",
    description:
      "Interactive memory card matching game built with Python Turtle graphics. Features multiple difficulty levels and score tracking with animated card flips.",
    tech: ["Python", "Turtle Graphics", "OOP"],
    github: "https://github.com/niyamjain",
    category: "Python",
  },
];

export const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "C++"],
  },
  {
    title: "AI / ML",
    skills: [
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "OpenCV",
      "Keras",
      "Pandas",
      "NumPy",
    ],
  },
  {
    title: "Frameworks",
    skills: ["React", "Next.js", "Flask", "Django", "Node.js", "Three.js"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "IBM Cloud", "Docker", "Git", "GitHub", "MySQL", "MongoDB"],
  },
];
