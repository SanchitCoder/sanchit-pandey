import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Download, FileText, Lock } from "lucide-react";
import {
  resources,
  resourceCategories,
  categoryLabels,
  type ResourceCategory,
  type ResourceEntry,
} from "../data/resources";

function ResourceCard({ resource, index }: { resource: ResourceEntry; index: number }) {
  const isAvailable = resource.available;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-colors duration-300 hover:border-[#F26522]/35 sm:p-7"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-[#F26522] transition-colors duration-300 group-hover:border-[#F26522]/30 group-hover:bg-[#F26522]/10">
          <FileText size={20} strokeWidth={1.75} />
        </div>
        <span className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] font-medium tracking-wide text-zinc-400">
          {categoryLabels[resource.category]}
        </span>
      </div>

      <h3 className="mt-5 text-[18px] font-semibold leading-snug text-white sm:text-[19px]">
        {resource.title}
      </h3>
      <p className="mt-2 flex-1 text-[13px] leading-[1.6] text-zinc-400 sm:text-[14px]">
        {resource.description}
      </p>

      <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/10 pt-5">
        <div className="flex items-center gap-2 text-[12px] text-zinc-500">
          <span className="uppercase tracking-wider">PDF</span>
          {resource.updated && (
            <>
              <span className="text-zinc-700">·</span>
              <span>{resource.updated}</span>
            </>
          )}
          {resource.pages != null && (
            <>
              <span className="text-zinc-700">·</span>
              <span>{resource.pages} pages</span>
            </>
          )}
        </div>

        {isAvailable ? (
          <a
            href={resource.file}
            download
            className="inline-flex items-center gap-2 rounded-full bg-[#F26522] px-3.5 py-2 text-[12px] font-medium text-white transition-all duration-300 hover:bg-[#ff7a3d] hover:shadow-[0_0_24px_rgba(242,101,34,0.35)]"
          >
            <Download size={14} />
            Download
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3.5 py-2 text-[12px] font-medium text-zinc-500">
            <Lock size={13} />
            Coming soon
          </span>
        )}
      </div>

      <motion.div
        className="pointer-events-none absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#F26522] to-transparent"
        initial={{ width: "0%" }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.45 }}
      />
    </motion.article>
  );
}

export default function Resources() {
  const [activeCategory, setActiveCategory] = useState<ResourceCategory | "all">("all");

  const filtered =
    activeCategory === "all"
      ? resources
      : resources.filter((r) => r.category === activeCategory);

  return (
    <main className="relative pb-20 pt-8 sm:pb-28 sm:pt-10 lg:pb-32 lg:pt-12">
      <div className="relative mx-auto max-w-[1440px]">
        <div className="mb-6 px-5 sm:mb-8 sm:px-8 lg:px-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[13px] text-zinc-400 transition-colors duration-300 hover:text-white"
          >
            <ArrowLeft size={14} />
            Back to home
          </Link>
        </div>

        <div className="mb-6 flex items-center gap-3 px-5 sm:mb-8 sm:px-8 lg:px-12">
          <div className="rounded-full border border-white/15 px-3 py-1 text-[12px] font-medium text-zinc-300 sm:px-4 sm:py-1.5 sm:text-[13px]">
            Free downloads
          </div>
        </div>

        <div className="mb-8 px-5 sm:mb-10 sm:px-8 lg:mb-12 lg:px-12">
          <h1 className="mb-4 text-[clamp(1.75rem,7vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-white sm:text-[clamp(2.5rem,5vw,4.2rem)]">
            Resources
          </h1>
          <p className="max-w-xl text-[15px] leading-[1.6] text-zinc-400 sm:text-[17px]">
            Playbooks, prompt libraries, and agentic prompt packs — downloadable PDFs you can use in your own work.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-2 px-5 sm:mb-10 sm:px-8 lg:px-12">
          {resourceCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-full px-4 py-2 text-[13px] font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-[#F26522] text-white shadow-[0_0_20px_rgba(242,101,34,0.3)]"
                    : "border border-white/10 bg-white/[0.03] text-zinc-400 hover:border-white/20 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-4 px-5 sm:gap-5 sm:px-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 lg:px-12">
          <AnimatePresence mode="popLayout">
            {filtered.map((resource, i) => (
              <ResourceCard key={resource.id} resource={resource} index={i} />
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <p className="px-5 text-center text-[14px] text-zinc-500 sm:px-8 lg:px-12">
            No resources in this category yet.
          </p>
        )}
      </div>
    </main>
  );
}
