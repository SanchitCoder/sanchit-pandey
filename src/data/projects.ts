export interface ProjectEntry {
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  status?: string;
  featured?: boolean;
  color: string;
}

export const projects: ProjectEntry[] = [
  {
    name: "PortIQ",
    tagline: "Fintech SaaS for Indian F&O traders",
    description:
      "Premium portfolio-intelligence platform combining deterministic market compute with an LLM reasoning layer. Six modules — Portfolio Monitor, Stock Analyzer, AlphaEdge Evaluator, Conviction Ledger, What-If Engine and Trade Guardian — built on a strict three-layer architecture: deterministic data fetch → pure compute → LLM only for the qualitative layer, so numbers are never hallucinated.",
    highlights: [
      "Three-layer architecture keeps every number deterministic and auditable.",
      "Pluggable AI provider abstraction across OpenRouter and Claude models.",
      "Async job processing with BullMQ workers and Redis caching for market data.",
    ],
    stack: ["TypeScript", "Node.js", "Postgres", "Redis", "BullMQ", "Claude API", "OpenRouter"],
    status: "In development",
    featured: true,
    color: "#12151c",
  },
  {
    name: "Estate Labs",
    tagline: "AI content engine for real estate",
    description:
      "Real-estate content generation platform powered by three chained n8n AI agent workflows. A real-estate team enters a brief and gets platform-ready content back — three specialised agents handle research, drafting and formatting, orchestrated via webhooks with an API-connected React frontend.",
    highlights: [
      "Three chained AI agent workflows for research → draft → format.",
      "Webhook-driven request/response between the app and n8n orchestration layer.",
      "Cuts content turnaround from hours to minutes for the client team.",
    ],
    stack: ["React 18", "Vite", "TailwindCSS", "n8n", "LLM APIs", "Webhooks"],
    featured: true,
    color: "#1a1d2e",
  },
  {
    name: "Real Estate Lead Conversion System",
    tagline: "Done-for-you growth stack for real-estate clients",
    description:
      "Lead capture → qualification → follow-up automated across CRM, WhatsApp and AI voice agents, with AI avatar video for outreach. Built as a repeatable, client-deployable system.",
    highlights: [
      "AI voice agents and WhatsApp Business API automate first-touch qualification.",
      "n8n orchestrates CRM sync, follow-up sequences and reporting.",
      "Packaged as a repeatable deployment for multiple clients.",
    ],
    stack: ["n8n", "GoHighLevel CRM", "WhatsApp Business API", "AI voice agents", "HeyGen"],
    color: "#20242f",
  },
  {
    name: "Content Automation Pipeline",
    tagline: "Rendering and research pipeline for Paras Arora AI",
    description:
      "Headless-Chromium rendering of high-resolution branded carousels (2160×2700) with base64-embedded fonts, ffmpeg-generated B-roll video assets, and Apify-based competitor scraping feeding an ideation loop. Multi-account rotation with deduplication.",
    highlights: [
      "Programmatic carousel rendering via Playwright/Chromium with embedded font pipeline.",
      "Apify scrapers turn competitor engagement data into content ideas.",
      "Deduplicated 8-account rotation system.",
    ],
    stack: ["Node.js", "Playwright", "ffmpeg", "Apify", "LLM APIs"],
    color: "#242832",
  },
  {
    name: "Client Web Builds",
    tagline: "Production sites for finance, real-estate and agency clients",
    description:
      "Multi-page production builds including a wealth-management platform with interactive charts, a property-advisory site with interactive property tools across nine routed pages, and 3D/motion-heavy marketing sites.",
    highlights: [
      "Interactive dashboards and data visualisation with Recharts.",
      "Motion and 3D work with Framer Motion, GSAP and React Three Fiber.",
      "Nine-route property-advisory site with interactive tools.",
    ],
    stack: ["React", "TypeScript", "Vite", "TailwindCSS", "Framer Motion", "GSAP", "Recharts", "Vercel"],
    color: "#282c37",
  },
  {
    name: "Document & Invoicing Automation",
    tagline: "GST-compliant invoicing and document generation",
    description:
      "Python-generated GST-compliant PDF invoices and auto-calculating Excel workbooks, plus programmatic pitch-deck and proposal generation — removing manual document work from the delivery pipeline.",
    highlights: [
      "GST-compliant PDF invoice generator with automatic tax computation.",
      "Auto-calculating Excel workbooks for client billing.",
      "Programmatic deck and proposal generation.",
    ],
    stack: ["Python", "ReportLab", "openpyxl", "pptxgenjs"],
    color: "#1c2029",
  },
  {
    name: "NIFTY Strategy Backtesting",
    tagline: "Rule-based F&O strategy research on TradingView",
    description:
      "Built and backtested Pine Script strategies on NIFTY across timeframes; the daily 9/21/50 EMA crossover with RSI confirmation held up as the most robust, with weaker intraday variants documented and discarded rather than over-optimised.",
    highlights: [
      "Multi-timeframe backtests with documented negative results.",
      "Explicit guard against curve-fitting / over-optimisation.",
    ],
    stack: ["Pine Script", "TradingView"],
    color: "#191d26",
  },
];
