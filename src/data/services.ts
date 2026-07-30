export interface ServiceEntry {
  id: string;
  title: string;
  description: string;
}

export const services: ServiceEntry[] = [
  {
    id: "agentic-ai-automations",
    title: "Agentic AI And Automations",
    description:
      "Production-grade AI agents and workflow automations that handle ops, leads, and decision loops end to end.",
  },
  {
    id: "modern-designed-websites",
    title: "Modern Designed Websites",
    description:
      "Fast, conversion-focused sites with clean UI, responsive layouts, and polish that feels intentional.",
  },
  {
    id: "content-systems-pipelines",
    title: "Content Systems and Pipelines",
    description:
      "Automated content systems that research, generate, and ship assets across channels at scale.",
  },
];
