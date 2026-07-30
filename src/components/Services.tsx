import { motion } from "framer-motion";
import { Bot, LayoutTemplate, Workflow } from "lucide-react";
import { services, type ServiceEntry } from "../data/services";

const serviceIcons = {
  "agentic-ai-automations": Bot,
  "modern-designed-websites": LayoutTemplate,
  "content-systems-pipelines": Workflow,
} as const;

function ServiceCard({ service, index }: { service: ServiceEntry; index: number }) {
  const Icon = serviceIcons[service.id as keyof typeof serviceIcons] ?? Bot;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-colors duration-300 hover:border-[#F26522]/35 sm:p-7"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-[#F26522] transition-colors duration-300 group-hover:border-[#F26522]/30 group-hover:bg-[#F26522]/10">
        <Icon size={20} strokeWidth={1.75} />
      </div>

      <h3 className="mt-5 text-[18px] font-semibold leading-snug text-white sm:text-[19px]">
        {service.title}
      </h3>
      <p className="mt-2 text-[13px] leading-[1.6] text-zinc-400 sm:text-[14px]">
        {service.description}
      </p>

      <motion.div
        className="pointer-events-none absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#F26522] to-transparent"
        initial={{ width: "0%" }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.45 }}
      />
    </motion.article>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#08080c] pb-16 pt-16 sm:pb-20 sm:pt-20 lg:pb-28 lg:pt-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="glow-blob absolute -left-20 top-1/4 h-[420px] w-[420px] rounded-full bg-[#F26522] opacity-[0.07] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1440px]">
        <div className="mb-6 flex items-center gap-3 px-5 sm:mb-8 sm:px-8 lg:px-12">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F26522] text-[11px] font-semibold text-white sm:h-7 sm:w-7 sm:text-[12px]">
            1
          </div>
          <div className="rounded-full border border-white/15 px-3 py-1 text-[12px] font-medium text-zinc-300 sm:px-4 sm:py-1.5 sm:text-[13px]">
            What I offer
          </div>
        </div>

        <h2 className="mb-10 px-5 text-[clamp(1.75rem,7vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-white sm:mb-14 sm:px-8 sm:text-[clamp(2.5rem,5vw,4.2rem)] lg:mb-16 lg:px-12">
          Services
        </h2>

        <div className="grid grid-cols-1 gap-4 px-5 sm:gap-5 sm:px-8 md:grid-cols-3 lg:gap-6 lg:px-12">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
