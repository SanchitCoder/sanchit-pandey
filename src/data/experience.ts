export interface ExperienceEntry {
  role: string;
  company: string;
  location?: string;
  period: string;
  current?: boolean;
  tag?: string;
  summary?: string;
  bullets: string[];
  stack?: string[];
}

export const experience: ExperienceEntry[] = [
  {
    role: "Founder & CTO",
    company: "Gideon Technologies",
    location: "Lucknow, India",
    period: "June 2025 – Present",
    current: true,
    summary:
      "AI + web product studio building done-for-you automation, website and lead-conversion systems for SMEs, founders and real-estate teams.",
    bullets: [
      "Build and ship AI automation, website and content systems for paying clients end to end.",
      "Design n8n workflows connecting CRMs, WhatsApp Business API, AI voice agents and webhooks.",
      "Own the full stack: scoping, architecture, build, deployment, client handover.",
      "Productised delivery with reusable workflow templates, GST-compliant invoicing automation and pitch systems.",
    ],
    stack: [
      "n8n",
      "GoHighLevel",
      "WhatsApp Business API",
      "Claude/OpenAI APIs",
      "React",
      "Node.js",
      "Postgres",
    ],
  },
  {
    role: "AI Automation & System Backend Developer",
    company: "Exponential World AI",
    location: "Lucknow, India",
    period: "June 2025 – Present",
    current: true,
    tag: "Contract",
    bullets: [
      "Design backend systems and AI agent workflows that automate data handling and business ops.",
      "Build n8n pipelines integrating third-party APIs, webhooks and databases into reliable end-to-end processes.",
      "Deploy custom AI agents that cut manual workload and speed up internal decision-making.",
      "Handle prompt engineering, error handling and retry logic for production-grade LLM workflows.",
    ],
    stack: ["Python", "n8n", "LLM APIs (Claude/OpenAI)", "REST APIs", "Webhooks", "Postgres"],
  },
  {
    role: "Frontend Developer",
    company: "Exponential World AI",
    location: "Lucknow, India",
    period: "October 2025 – Present",
    current: true,
    tag: "Contract",
    bullets: [
      "Turn AI-generated website drafts into production-ready, responsive, pixel-accurate interfaces.",
      "Refine and debug frontend code for performance and cross-browser consistency.",
      "Integrate backend APIs and data into the UI alongside design and backend teams.",
      "Deploy and test builds across devices.",
    ],
    stack: ["React", "TypeScript", "Vite", "TailwindCSS", "Framer Motion", "Bolt AI", "Vercel", "Git"],
  },
  {
    role: "Founder & Creator",
    company: "Paras Arora AI",
    location: "Remote",
    period: "2025 – Present",
    current: true,
    summary:
      "Hinglish AI-education content brand (@parasaroraai) for an Indian audience, run on a self-built automation pipeline.",
    bullets: [
      "Built a Playwright + ffmpeg pipeline auto-rendering carousels and B-roll video assets at scale.",
      "Automated competitor research with Apify scrapers to drive data-backed content ideation.",
      "Run a multi-account rotation system with deduplication logic across 8 accounts.",
      "Ship daily short-form scripts, platform-specific captions and lead-magnet PDFs from one workflow.",
    ],
    stack: ["Python", "Node.js", "Playwright/Chromium", "ffmpeg", "Apify", "LLM APIs"],
  },
  {
    role: "Cyber Security Analyst",
    company: "Tata Consultancy Services",
    period: "July 2025 – August 2025",
    tag: "Virtual Job Simulation",
    bullets: [
      "Completed an IAM-focused cybersecurity consulting simulation.",
      "Produced technical documentation and stakeholder presentations on IAM strategy.",
    ],
  },
  {
    role: "Student Intern",
    company: "Scaler School of Technology",
    period: "June 2025 – August 2025",
    bullets: ["Selected for the Young Innovators Internship Challenge."],
  },
];
