import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { TiltCard } from "./ui/TiltCard";
import { projects, type ProjectEntry } from "../data/projects";

function ProjectCard({ project }: { project: ProjectEntry }) {
  return (
    <div className={project.featured ? "md:col-span-2" : ""}>
      <TiltCard
        tiltLimit={7}
        scale={1.015}
        effect="gravitate"
        className={`group cursor-pointer rounded-2xl border border-white/10 ${
          project.featured ? "aspect-[21/9]" : "aspect-[329/246]"
        }`}
        style={{ backgroundColor: project.color }}
      >
        <div className="flex h-full w-full flex-col justify-end p-6 sm:p-8">
          <p className="max-w-md text-[18px] font-medium leading-snug text-white sm:text-[22px]">
            {project.tagline}
          </p>
        </div>

        {project.status && (
          <span className="absolute right-4 top-4 rounded-full bg-white/10 px-2.5 py-1 text-[11px] text-white backdrop-blur">
            {project.status}
          </span>
        )}

        <div className="absolute bottom-4 left-4 flex h-9 w-9 items-center justify-end gap-2 overflow-hidden rounded-full bg-[#F26522] pr-2.5 transition-all duration-300 ease-in-out group-hover:w-[168px]">
          <span className="whitespace-nowrap text-[13px] font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:delay-100">
            View project
          </span>
          <ArrowRight
            size={14}
            className="flex-shrink-0 -rotate-45 text-white transition-transform duration-300 ease-in-out group-hover:rotate-0"
          />
        </div>
      </TiltCard>

      <p className="mt-4 text-[13px] leading-relaxed text-zinc-400 sm:text-[14px]">
        {project.description}
      </p>
      <p className="mt-1 text-[14px] font-semibold text-white sm:text-[15px]">
        {project.name}
      </p>
      <ul className="mt-2 space-y-1">
        {project.highlights.map((highlight) => (
          <li
            key={highlight}
            className="flex gap-2 text-[12px] leading-snug text-zinc-500"
          >
            <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-zinc-600" />
            {highlight}
          </li>
        ))}
      </ul>
      <p className="mt-3 text-[12px] tracking-wide text-zinc-600">
        {project.stack.join(" · ")}
      </p>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden bg-[#0a0a0e] pb-16 pt-16 sm:pb-20 sm:pt-20 lg:pb-28 lg:pt-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="glow-blob-slow absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#F26522] opacity-[0.05] blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-[1440px]">
        <div className="mb-6 flex items-center gap-3 px-5 sm:mb-8 sm:px-8 lg:px-12">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F26522] text-[11px] font-semibold text-white sm:h-7 sm:w-7 sm:text-[12px]">
            2
          </div>
          <div className="rounded-full border border-white/15 px-3 py-1 text-[12px] font-medium text-zinc-300 sm:px-4 sm:py-1.5 sm:text-[13px]">
            Selected work
          </div>
        </div>

        <h2 className="mb-10 px-5 text-[clamp(1.75rem,7vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-white sm:mb-14 sm:px-8 sm:text-[clamp(2.5rem,5vw,4.2rem)] lg:mb-16 lg:px-12">
          Projects
        </h2>

        <div className="grid grid-cols-1 gap-5 px-5 sm:gap-6 sm:px-8 md:grid-cols-2 lg:gap-7 lg:px-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
