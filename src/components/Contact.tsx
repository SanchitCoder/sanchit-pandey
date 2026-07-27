import { motion } from "framer-motion";
import RollButton from "./RollButton";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#08080c] pb-20 pt-16 sm:pb-28 sm:pt-20 lg:pb-32 lg:pt-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="glow-blob absolute bottom-0 left-1/4 h-[420px] w-[420px] rounded-full bg-[#F26522] opacity-[0.1] blur-[120px]" />
        <div className="glow-blob-slow absolute right-1/4 top-0 h-[380px] w-[380px] rounded-full bg-violet-600 opacity-[0.1] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="mb-6 flex items-center gap-3 sm:mb-8">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F26522] text-[11px] font-semibold text-white sm:h-7 sm:w-7 sm:text-[12px]">
            3
          </div>
          <div className="rounded-full border border-white/15 px-3 py-1 text-[12px] font-medium text-zinc-300 sm:px-4 sm:py-1.5 sm:text-[13px]">
            Contact
          </div>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-8 text-[clamp(1.75rem,7vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-white sm:mb-10 sm:text-[clamp(2.5rem,5vw,4.2rem)]"
        >
          Let&apos;s build something.
        </motion.h2>

        <p className="mb-8 max-w-xl text-[15px] leading-[1.6] text-zinc-400 sm:text-[17px]">
          Open to new projects, contract work and full-time roles.
        </p>

        <RollButton
          text="sanchitpandey07@hotmail.com"
          href="mailto:sanchitpandey07@hotmail.com"
          wrapperClassName="bg-white text-[#08080c] rounded-full pl-5 sm:pl-6 pr-2 py-2 shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_45px_rgba(255,255,255,0.25)] transition-shadow duration-300"
          textSizeClassName="text-[13px] sm:text-[14px]"
          circleClassName="w-7 h-7 sm:w-8 sm:h-8 bg-[#F26522]"
          arrowClassName="text-white"
        />
      </div>
    </section>
  );
}
