export type ResourceCategory =
  | "playbook"
  | "prompt-library"
  | "agentic-prompts";

export interface ResourceEntry {
  id: string;
  title: string;
  description: string;
  category: ResourceCategory;
  /** Path under /public, e.g. /resources/my-file.pdf */
  file: string;
  /** Set true once the PDF is placed in public/resources */
  available: boolean;
  pages?: number;
  updated?: string;
}

export const resourceCategories: {
  id: ResourceCategory | "all";
  label: string;
}[] = [
  { id: "all", label: "All" },
  { id: "playbook", label: "Playbooks" },
  { id: "prompt-library", label: "Prompt libraries" },
  { id: "agentic-prompts", label: "Agentic prompts" },
];

export const categoryLabels: Record<ResourceCategory, string> = {
  playbook: "Playbook",
  "prompt-library": "Prompt library",
  "agentic-prompts": "Agentic prompts",
};

/**
 * Drop PDFs into `public/resources/` and set `available: true`.
 * File names should match the `file` path below.
 */
export const resources: ResourceEntry[] = [
  {
    id: "production-agent-playbook",
    title: "Production Agent Playbook",
    description:
      "A practical guide to designing, shipping, and operating production-grade AI agents — architecture, tooling, evaluation, and failure recovery.",
    category: "playbook",
    file: "/resources/Production-Agent-Playbook-Sanchit-Pandey.pdf",
    available: true,
    pages: 22,
    updated: "2026",
  },
  {
    id: "claude-prompts-instagram-system",
    title: "8 Claude Prompts: Instagram System",
    description:
      "Eight ready-to-use Claude prompts for planning, producing, and iterating an Instagram content system — from hooks to captions to weekly workflows.",
    category: "prompt-library",
    file: "/resources/8-Claude-Prompts-Instagram-System-Sanchit-Pandey.pdf",
    available: true,
    pages: 25,
    updated: "2026",
  },
  {
    id: "real-estate-website-blueprint",
    title: "Real Estate Website Blueprint",
    description:
      "A practical blueprint for designing and shipping a modern real estate website — page structure, UX flow, and conversion-focused layout.",
    category: "playbook",
    file: "/resources/Real-Estate-Website-Blueprint-Sanchit-Pandey.pdf",
    available: true,
    pages: 19,
    updated: "2026",
  },
  {
    id: "ai-booking-assistant-blueprint",
    title: "AI Booking Assistant Blueprint",
    description:
      "A blueprint for building an AI booking assistant — flows, tools, and handoff patterns that turn inquiries into confirmed appointments.",
    category: "playbook",
    file: "/resources/AI-Booking-Assistant-Blueprint-Sanchit-Pandey.pdf",
    available: true,
    pages: 17,
    updated: "2026",
  },
  {
    id: "invisible-online",
    title: "Invisible Online",
    description:
      "A practical system for staying present online without constant posting — automation, distribution, and quiet growth loops.",
    category: "playbook",
    file: "/resources/Invisible-Online-Sanchit-Pandey.pdf",
    available: true,
    pages: 19,
    updated: "2026",
  },
  {
    id: "zoom-repurposing-system",
    title: "Zoom Repurposing System",
    description:
      "Turn Zoom calls into multi-format content — clips, carousels, and captions from one recording pipeline.",
    category: "playbook",
    file: "/resources/Zoom-Repurposing-System-Sanchit-Pandey.pdf",
    available: true,
    pages: 19,
    updated: "2026",
  },
  {
    id: "claude-code-design-skills",
    title: "3 Claude Code Design Skills",
    description:
      "Three Claude Code skills for sharper UI and design work — patterns you can drop into your coding workflow.",
    category: "prompt-library",
    file: "/resources/3-Claude-Code-Design-Skills-Sanchit-Pandey.pdf",
    available: true,
    pages: 14,
    updated: "2026",
  },
  {
    id: "two-minute-website-stack",
    title: "The 2-Minute Website Stack",
    description:
      "A lean stack for shipping clean websites fast — tools, structure, and a build flow that stays simple.",
    category: "playbook",
    file: "/resources/The-2-Minute-Website-Stack-Sanchit-Pandey.pdf",
    available: true,
    pages: 16,
    updated: "2026",
  },
  {
    id: "why-your-site-isnt-ranking",
    title: "Why Your Site Isn't Ranking",
    description:
      "A practical breakdown of why sites stall in search — and the fixes that move rankings without fluff.",
    category: "playbook",
    file: "/resources/Why-Your-Site-Isnt-Ranking-Sanchit-Pandey.pdf",
    available: true,
    pages: 17,
    updated: "2026",
  },
];
