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
    id: "prompt-library-core",
    title: "Core Prompt Library",
    description:
      "Reusable prompt patterns for research, drafting, critique, and structured extraction across products.",
    category: "prompt-library",
    file: "/resources/core-prompt-library.pdf",
    available: false,
    updated: "2026",
  },
  {
    id: "agentic-prompt-pack",
    title: "Agentic Prompt Pack",
    description:
      "System and tool-use prompts for multi-step agents — planning, tool calling, memory, and recovery.",
    category: "agentic-prompts",
    file: "/resources/agentic-prompt-pack.pdf",
    available: false,
    updated: "2026",
  },
];
