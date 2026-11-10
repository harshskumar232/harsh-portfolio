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
  // Your CV lives at public/Harsh-Kumar-Resume.pdf. Replace that file to
  // update it. Set this to "" to hide the Download CV button.
  cv: "/Harsh-Kumar-Resume.pdf",
};

export const heroIntro =
  "M.Sc. Data Science student at FAU Erlangen with industry experience in data pipelines, Power BI dashboards and KPI validation.";

export const statement =
  "I prepare data, validate KPIs and build dashboards that support business decisions.";

// The pinned process scene: the workflow of the Supply Chain Analytics Pipeline project.
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
  // ── Featured: shown first ──
  {
    title: "Pharmaceutical Sales Analysis",
    category: "BI & Analytics",
    description:
      "Distributor-level sales analysis for Germany and Poland, from raw multi-source data to stakeholder dashboards.",
    points: [
      "Integrated 500K+ sales records from three sources and identified 15+ data-quality issues",
      "Designed a normalized star schema with five fact and dimension tables",
      "Built three dashboards covering territory performance, distributor trends and revenue forecasts for 20+ sales stakeholders",
    ],
    tags: ["Power BI", "Power Query", "DAX", "SQL", "Data Modeling"],
    link: "https://github.com/harshskumar232/Pharmaceutical-Sales-Analysis",
    image: "/projects/pharmaceutical-sales.webp",
  },
  {
    title: "MRI Reconstruction Project",
    category: "Research · Data Quality",
    description:
      "Data-quality analysis of speech MRI recordings that flags audio-video issues for manual validation.",
    points: [
      "Analyzed 2,371 speech MRI videos from 75 subjects",
      "Checked for eight types of audio-video issues and flagged 259 files (10.9%) for review",
      "Produced Excel reports and charts, and recalibrated thresholds to reduce false positives",
    ],
    tags: ["Python", "pandas", "SciPy", "librosa", "OpenCV", "Excel reporting"],
    link: "https://github.com/harshskumar232/MRI-reconstruction-project",
    image: "/projects/mri-sync-analyzer.webp",
    fit: "contain",
  },
  {
    title: "MedRAG",
    category: "AI / LLM",
    description:
      "An AI assistant for healthcare documents that answers questions grounded in uploaded PDFs and data files, with agents for summaries and structured symptom checks.",
    points: [
      "Parses PDF, CSV, JSON and TXT into a persistent ChromaDB store",
      "Two agents: a medical summary agent and a structured symptom checker",
      "REST API in FastAPI connected to an HTML frontend",
    ],
    tags: ["Python", "FastAPI", "Claude API", "ChromaDB", "Docker"],
    link: "https://github.com/harshskumar232/medrag",
    highlight: { value: "4", label: "document formats, one vector store" },
  },
  // ── More projects ──
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
    role: "Data Analyst",
    org: "Suflex Media",
    meta: "Bangalore · Hybrid",
    period: "January 2024 – February 2025",
    points: [
      "Contributed to the backend and data infrastructure of Intaskr, a SaaS task-management platform",
      "Automated Python and SQL ETL pipelines processing 230K+ records per day",
      "Built Power BI dashboards for 20+ stakeholders to track business metrics, KPIs and operational performance",
    ],
  },
];

export const about =
  "I am an M.Sc. Data Science student at FAU Erlangen, based in Erlangen, Germany. My experience includes automated data pipelines, Power BI reporting and KPI validation. My projects also explore medical imaging data quality and AI assistants for healthcare documents.";

export const education = [
  {
    degree: "Master's in Data Science",
    org: "FAU Erlangen-Nürnberg",
    period: "April 2025 – Present",
  },
  {
    degree: "Bachelor's in Computer Science Engineering",
    org: "SRM University, Delhi NCR, India",
    period: "October 2020 – June 2024",
  },
];

// Three moving rows: programming and tools / BI and reporting / data and AI.
export const skills = [
  ["Python", "pandas", "NumPy", "scikit-learn", "SQL", "PostgreSQL", "Git", "Docker"],
  ["Power BI", "DAX", "Power Query", "Excel", "Dashboard design", "KPI validation", "Star-schema modeling"],
  ["ETL", "Data integration", "Data validation", "RAG", "LLM assistants", "Azure"],
];

export const languages = [
  { name: "English", level: "C1" },
  { name: "German", level: "B1 in progress" },
];

// Paste any YouTube link. Title and thumbnail load from YouTube.
export const videos = [
  "https://youtu.be/Li0EFNF7-cg",
  "https://youtu.be/LDcwuBI_y-M",
  "https://youtu.be/jRKjwzKeK6U",
];
