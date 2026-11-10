// ─────────────────────────────────────────────────────────────
// All site content lives here. Edit this file, push to GitHub,
// and Vercel redeploys. No need to touch the components.
// ─────────────────────────────────────────────────────────────

export const person = {
  name: "Harsh Kumar",
  role: "Data Analytics & BI",
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

// Smaller line under your name in the hero.
export const heroHeadline = "Data analytics & BI.";

export const heroIntro =
  "M.Sc. Data Science student at FAU Erlangen, looking for a working-student role in data analytics and BI. I prepare data from multiple sources, validate KPIs and build Power BI dashboards.";

export const statement =
  "I make sure the data is right before anyone relies on it, dig into the business question behind the numbers, and show the answer in a dashboard people can actually read.";

// The pinned process scene: the workflow of the Supply Chain Analytics Pipeline project.
export const pipeline = [
  {
    step: "Ingest",
    tool: "Python · psycopg2 · Airflow",
    text: "Brings each day's new orders into PostgreSQL without manual work.",
    check: "Upserts with ON CONFLICT make reruns safe, so a failed night never counts a sale twice.",
  },
  {
    step: "Model",
    tool: "PostgreSQL · star schema",
    text: "Arranges every sale around product, supplier, date and region, so any business question is one join away.",
    check: "Unique and not-null tests on every key, so each sale links to exactly one product and supplier.",
  },
  {
    step: "Transform",
    tool: "dbt · staging, marts, reports",
    text: "Cleans and type-casts the raw data, then builds the KPI tables the dashboard reads from.",
    check: "Custom dbt tests stop negative revenue, dates outside the valid range and impossible margins.",
  },
  {
    step: "Serve",
    tool: "Streamlit · Plotly",
    text: "Shows revenue trends, category margins and country splits, filterable by date, country and channel.",
    check: "The dashboard reads only from tested report tables, never from raw data.",
  },
];

export type Project = {
  title: string; // keep identical to the GitHub repo / resume name
  category: string;
  data: string; // where the data comes from: practice dataset, synthetic, prototype…
  problem: string;
  work: string; // your contribution
  result: string; // finding or result
  tags: string[];
  link: string;
  image?: string; // file in /public/projects. Leave out for a type-only card.
  fit?: "cover" | "contain"; // "contain" shows the whole image (good for charts)
  highlight?: { value: string; label: string }; // shown on cards without an image
};

// Shown in this order in the horizontal gallery.
export const projects: Project[] = [
  {
    title: "Pharmaceutical Sales Analysis",
    category: "BI & Analytics",
    data: "Practice dataset (Foresight BI)",
    problem:
      "Distributor sales files from Germany and Poland gave no single view of which teams, products and cities drive revenue.",
    work:
      "Integrated 500K+ records from three sources, found and fixed 15+ data-quality issues, and modelled them as a star schema with five tables in Power BI.",
    result:
      "Three dashboards for leadership, sales managers and the head of sales: territory performance, distributor trends and revenue forecasts.",
    tags: ["Power BI", "Power Query", "DAX", "SQL", "Data Modeling"],
    link: "https://github.com/harshskumar232/Pharmaceutical-Sales-Analysis",
    image: "/projects/pharmaceutical-sales.webp",
  },
  {
    title: "Supply Chain Analytics Pipeline",
    category: "Data Pipeline",
    data: "Synthetic data (generated with Faker)",
    problem: "Sales data should reach a KPI dashboard every day, checked, without anyone touching it by hand.",
    work:
      "Built the full pipeline: Python ingestion into PostgreSQL, dbt models on a star schema with data-quality tests, a daily Airflow run and a Streamlit dashboard.",
    result:
      "Reruns are safe, and bad data such as negative revenue or impossible dates is caught by tests before it reaches the dashboard.",
    tags: ["Python", "Airflow", "PostgreSQL", "dbt", "Docker", "Streamlit"],
    link: "https://github.com/harshskumar232/supply-chain-analytics",
    image: "/projects/supply-chain-analytics.webp",
  },
  {
    title: "MRI Reconstruction Project",
    category: "Research · Data Quality",
    data: "Public research dataset (Figshare)",
    problem:
      "2,371 real-time speech MRI videos from 75 speakers needed checking for audio-video problems before research use.",
    work:
      "Wrote a Python analyser that measures sync offset with cross-correlation and checks for eight types of audio-video issues, with results in Excel reports and charts.",
    result:
      "Flagged 259 files (10.9%) for manual review, after recalibrating thresholds to cut false positives. These are flags to validate, not confirmed failures.",
    tags: ["Python", "pandas", "SciPy", "librosa", "OpenCV", "Excel reporting"],
    link: "https://github.com/harshskumar232/MRI-reconstruction-project",
    image: "/projects/mri-sync-analyzer.webp",
    fit: "contain",
  },
  {
    title: "Customer Churn Prediction",
    category: "Machine Learning",
    data: "Practice dataset (IBM Telco Customer Churn)",
    problem: "Which telecom customers are likely to leave, and what drives it?",
    work:
      "Cleaned the data, analysed churn by contract, tenure and charges in SQL, and compared logistic regression with a random forest.",
    result:
      "Logistic regression reached 0.84 ROC AUC on held-out customers. Short tenure, month-to-month contracts and fibre internet were the strongest churn signals.",
    tags: ["Python", "scikit-learn", "pandas", "SQL"],
    link: "https://github.com/harshskumar232/Customer-Churn-Prediction---Python-SQL",
    highlight: { value: "0.84", label: "ROC AUC on held-out customers" },
  },
  {
    title: "RAG Document Q&A",
    category: "AI / LLM",
    data: "Prototype",
    problem: "Answers buried in long German and English PDFs are slow to find, and AI answers are hard to trust without a source.",
    work:
      "Built hybrid search (ChromaDB plus BM25 with rank fusion), answers that cite file, page and block, five turns of memory and an analytics tab.",
    result: "A working prototype where every answer can be checked against the exact place it came from.",
    tags: ["Python", "ChromaDB", "BM25", "Llama 3.3", "Streamlit"],
    link: "https://github.com/harshskumar232/rag-document-qa",
    image: "/projects/rag-document-qa.webp",
  },
  {
    title: "SQL Query Assistant",
    category: "AI / Analytics",
    data: "Prototype · practice dataset (Superstore)",
    problem: "Business users can't query sales data without knowing SQL.",
    work:
      "Built a Streamlit app where an LLM turns plain-English questions into SQL, runs it on SQLite and shows the query next to the result.",
    result:
      "Early prototype, checked by hand on example questions. Next: read-only access, automatic retries and a proper evaluation set.",
    tags: ["Python", "Streamlit", "SQLite", "pandas", "Llama 3.3"],
    link: "https://github.com/harshskumar232/sql-assistant",
    highlight: { value: "SQL", label: "written for you, shown in full" },
  },
  {
    title: "MedRAG",
    category: "AI / LLM",
    data: "Prototype · not for clinical use",
    problem: "Healthcare information is spread across PDFs, spreadsheets and notes, and finding what matters takes time.",
    work:
      "Built an assistant that indexes PDF, CSV, JSON and TXT files in ChromaDB and answers from them through a FastAPI backend, with agents for summaries and structured symptom checks.",
    result: "A local prototype whose answers stay grounded in the uploaded files.",
    tags: ["Python", "FastAPI", "Claude API", "ChromaDB", "Docker"],
    link: "https://github.com/harshskumar232/medrag",
    highlight: { value: "4", label: "document formats, one vector store" },
  },
];

export const experience = [
  {
    role: "Data Analyst",
    org: "Suflex Media",
    meta: "Bangalore · Hybrid",
    period: "January 2024 – February 2025",
    summary:
      "Worked on Intaskr (intaskr.com), the company's SaaS platform for task management, workflow automation and team collaboration.",
    points: [
      "Helped move the company from manual data handling to automated Python and SQL ETL pipelines that process 230K+ records per day",
      "Designed and built Power BI dashboards on business metrics, KPIs and operational performance, used by 20+ stakeholders across teams",
      "Contributed to the backend development and data infrastructure behind the platform",
    ],
  },
];

export const aboutHeadline = "From computer science to data analytics.";

export const about = [
  "I studied Computer Science Engineering at SRM University, then spent a year as a data analyst at Suflex Media, automating data pipelines and building Power BI dashboards for the people who ran the business.",
  "Now I'm doing my M.Sc. in Data Science at FAU Erlangen. The part I enjoy most is the step between raw data and a decision: checking that the numbers are right, finding what they say and presenting it clearly. My projects also explore medical imaging data quality and AI assistants for healthcare documents.",
];

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

// Three moving rows, grouped by what the skills are for.
export const skills = [
  {
    group: "Analysis & Reporting",
    items: ["Power BI", "DAX", "Power Query", "Excel", "Dashboard design", "KPI validation"],
  },
  {
    group: "Data Preparation & Modelling",
    items: ["SQL", "PostgreSQL", "Python", "pandas", "NumPy", "ETL", "Data integration", "Data validation", "Star-schema modeling"],
  },
  {
    group: "Supporting Engineering & AI",
    items: ["scikit-learn", "Git", "Docker", "Azure", "RAG", "LLM assistants"],
  },
];

export const languages = [
  { name: "English", level: "C1" },
  { name: "German", level: "B1 in progress" },
];

export const vlogIntro =
  "Outside data, I run a YouTube channel for Indian students moving to Germany: budget hauls, Kleinanzeigen finds and honest tips. Making videos taught me to explain things simply to people who are new to them, which is what a good dashboard does too.";

export const contact = {
  headline: "Looking for a working-student role in Data Analytics or BI.",
  text: "Also open to internships.",
  availability:
    "Available immediately, up to 20 hours a week during the semester and full-time in semester breaks. Based in Erlangen, close to Nuremberg and Forchheim.",
};

// Paste any YouTube link. Title and thumbnail load from YouTube.
export const videos = [
  "https://youtu.be/Li0EFNF7-cg",
  "https://youtu.be/LDcwuBI_y-M",
  "https://youtu.be/jRKjwzKeK6U",
];
