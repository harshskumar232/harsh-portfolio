// ─────────────────────────────────────────────────────────────
// All site content lives here. Edit this file, push to GitHub,
// and Vercel redeploys. No need to touch the components.
// ─────────────────────────────────────────────────────────────

export const person = {
  name: "Harsh Kumar",
  role: "Data Science & Engineering",
  email: "harshskumar59@gmail.com",
  location: "Erlangen, Germany",
  github: "https://github.com/harshskumar232",
  linkedin: "https://linkedin.com/in/harshkumar23/",
  youtube: "https://www.youtube.com/@maiharsh",
  instagram: "https://instagram.com/mai.harsh",
  // Drop your CV into /public (e.g. public/Harsh-Kumar-CV.pdf) and put
  // "/Harsh-Kumar-CV.pdf" here. While empty, the CV button stays hidden.
  cv: "",
};

export const statement =
  "I take raw, messy data and turn it into numbers people can trust. Pipelines that run before anyone is awake, models that hold up, and dashboards that answer the question before the meeting starts.";

// The pinned "how I build" scene. Based on the Supply Chain pipeline.
export const pipeline = [
  {
    step: "Ingest",
    tool: "Python · psycopg2",
    text: "Daily batches land in a raw PostgreSQL schema. Upserts with ON CONFLICT keep reruns safe, so a failed night never doubles the numbers.",
  },
  {
    step: "Model",
    tool: "PostgreSQL · star schema",
    text: "Four dimensions and one fact table. Product, supplier, date and region around every sale, so any question is one join away.",
  },
  {
    step: "Transform",
    tool: "dbt · staging, marts, reports",
    text: "Layered dbt models clean, type-cast and aggregate. Custom tests catch negative revenue, impossible dates and broken margins before anyone sees them.",
  },
  {
    step: "Serve",
    tool: "Streamlit · Plotly",
    text: "KPI dashboards with rolling averages, category margins and an EU country breakdown, filterable by date, country and channel.",
  },
];

export type Project = {
  title: string; // keep identical to the GitHub repo / resume name
  category: string;
  description: string;
  points: string[];
  tags: string[];
  link: string;
  image?: string; // file in /public/projects. Leave out for a type-only card.
  fit?: "cover" | "contain"; // "contain" shows the whole image (good for charts)
  highlight?: { value: string; label: string }; // shown on cards without an image
};

export const projects: Project[] = [
  {
    title: "Supply Chain Analytics Pipeline",
    category: "Data Engineering",
    description:
      "An end-to-end pipeline that ingests supply chain data, models it with dbt and serves live KPI dashboards.",
    points: [
      "Daily Airflow DAG with incremental upserts into a PostgreSQL warehouse",
      "Layered dbt models on a star schema with custom data-quality tests",
      "Streamlit dashboard for revenue trends, category margins and EU countries",
    ],
    tags: ["Python", "Airflow", "PostgreSQL", "dbt", "Docker", "Streamlit"],
    link: "https://github.com/harshskumar232/supply-chain-analytics",
    image: "/projects/supply-chain-analytics.webp",
  },
  {
    title: "RAG Document Q&A",
    category: "AI / LLM",
    description:
      "Multi-PDF question answering in German and English, where every answer cites its source.",
    points: [
      "Hybrid retrieval: ChromaDB dense search plus BM25, fused with Reciprocal Rank Fusion",
      "Answers cite file, page and block, with five turns of conversation memory",
      "Analytics tab tracking queries, latency and language in SQLite",
    ],
    tags: ["Python", "ChromaDB", "BM25", "Llama 3.3", "Streamlit"],
    link: "https://github.com/harshskumar232/rag-document-qa",
    image: "/projects/rag-document-qa.webp",
  },
  {
    title: "Pharmaceutical Sales Analytics",
    category: "BI & Analytics",
    description:
      "Distributor-level sales analysis for Germany and Poland: 500K+ records from 3 sources, with 15+ data quality issues found and fixed.",
    points: [
      "Normalised star schema with 5 fact and dimension tables",
      "Model tuned for sub-second query latency",
      "3 interactive Power BI dashboards from executive view to detail",
    ],
    tags: ["Power BI", "Power Query", "DAX", "SQL", "Python"],
    link: "https://github.com/harshskumar232/Pharmaceutical-Sales-Analysis",
    image: "/projects/pharmaceutical-sales.webp",
  },
  {
    title: "MRI Audio-Video Sync Analyzer",
    category: "Research",
    description:
      "An analyser that validates timing between MRI audio and video recordings and flags the ones that drift.",
    points: [
      "Classifies recordings into good sync, duration mismatch and missing audio",
      "Measures sync offset in milliseconds against acceptable and poor thresholds",
      "Data profiling and quality reports across the whole dataset",
    ],
    tags: ["Python", "pandas", "Signal analysis", "Matplotlib"],
    link: "https://github.com/harshskumar232",
    image: "/projects/mri-sync-analyzer.webp",
    fit: "contain",
  },
  {
    title: "Customer Churn Prediction",
    category: "Machine Learning",
    description:
      "Predicts telecom customer churn and surfaces the drivers that retention teams can act on.",
    points: [
      "Classification model on the Telco Customer Churn dataset",
      "Feature importance analysis for the top churn drivers",
      "SQL analysis by contract type, tenure and monthly charges",
    ],
    tags: ["Python", "scikit-learn", "pandas", "SQL"],
    link: "https://github.com/harshskumar232/Customer-Churn-Prediction---Python-SQL",
    highlight: { value: "0.84", label: "AUC on held-out customers" },
  },
  {
    title: "MedRAG Clinical Intelligence",
    category: "AI / LLM",
    description:
      "A local RAG system for healthcare documents with a FastAPI backend and a web frontend.",
    points: [
      "Parses PDF, CSV, JSON and TXT into a persistent ChromaDB store",
      "Two agents: a medical summary agent and a symptom checker",
      "REST API in FastAPI connected to an HTML frontend",
    ],
    tags: ["Python", "FastAPI", "ChromaDB", "PyMuPDF", "Claude API"],
    link: "https://github.com/harshskumar232/medrag",
    highlight: { value: "4", label: "document formats, one vector store" },
  },
  {
    title: "SQL Query Assistant",
    category: "AI / Analytics",
    description:
      "Ask a question about sales data in plain English and get both the SQL and the answer.",
    points: [
      "LLM turns questions into SQLite queries on the Superstore dataset",
      "Shows the generated SQL next to the result table",
      "One-click example questions and clear error messages",
    ],
    tags: ["Python", "Streamlit", "SQLite", "pandas", "Llama 3.3"],
    link: "https://github.com/harshskumar232/sql-assistant",
    highlight: { value: "SQL", label: "written for you, shown in full" },
  },
];

export const experience = [
  {
    role: "Data Engineer Intern",
    org: "Suflex Media",
    orgLink: "https://intaskr.com",
    period: "Jan 2024 – Oct 2024",
    summary:
      "Worked on the data platform behind Intaskr, a SaaS task-management product.",
    points: [
      "Built automated ETL pipelines in Apache Airflow processing 230K+ daily records from PostgreSQL",
      "Cut processing time by 40% and tuned schemas for sub-2s queries",
      "Built the Power BI dashboards the team used for analytics and reporting",
    ],
  },
];

export const education = [
  {
    degree: "M.Sc. Data Science",
    org: "Friedrich-Alexander-Universität Erlangen-Nürnberg",
    period: "Expected 2027",
  },
  {
    degree: "B.Sc. Computer Science",
    org: "",
    period: "Completed",
  },
];

export const skills = [
  ["Python", "SQL", "PostgreSQL", "Apache Airflow", "dbt", "Docker", "Azure", "Git"],
  ["Power BI", "DAX", "Power Query", "Excel", "Streamlit", "Plotly", "Data Modeling"],
  ["pandas", "NumPy", "scikit-learn", "SciPy", "ChromaDB", "FastAPI", "RAG", "LLMs"],
];

export const languages = [
  { name: "English", level: "C1" },
  { name: "German", level: "B1" },
];

// Paste any YouTube link. Title and thumbnail load from YouTube.
export const videos = [
  "https://youtu.be/Li0EFNF7-cg",
  "https://youtu.be/LDcwuBI_y-M",
  "https://youtu.be/jRKjwzKeK6U",
];
