import { useState, type MouseEvent as ReactMouseEvent } from "react";
import { motion } from "framer-motion";
import { experience, type ExperienceEntry } from "../data/experience";

function TimelineCard({ job, index }: { job: ExperienceEntry; index: number }) {
  const isEven = index % 2 === 0;
  const [active, setActive] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: px, y: py });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, x: isEven ? -30 : 30 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className={`relative mb-10 md:mb-14 md:w-1/2 ${
        isEven ? "md:pr-10 md:ml-0" : "md:pl-10 md:ml-auto"
      }`}
    >
      <div
        className={`absolute top-6 z-20 hidden h-3.5 w-3.5 -translate-y-1/2 rounded-full md:block ${
          isEven ? "right-[-7px]" : "left-[-7px]"
        }`}
      >
        <motion.span
          className="block h-full w-full rounded-full bg-[#F26522]"
          animate={{
            boxShadow: active
              ? [
                  "0 0 0px rgba(242,101,34,0.6)",
                  "0 0 16px rgba(242,101,34,0.9)",
                  "0 0 0px rgba(242,101,34,0.6)",
                ]
              : "0 0 0px rgba(242,101,34,0)",
          }}
          transition={{ repeat: active ? Infinity : 0, duration: 1.6 }}
        />
      </div>

      <div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => {
          setActive(false);
          setTilt({ x: 0, y: 0 });
        }}
        style={{
          transformStyle: "preserve-3d",
          transform: `perspective(1000px) rotateY(${tilt.x * (isEven ? -4 : 4)}deg) rotateX(${
            tilt.y * -4
          }deg)`,
          transition: "transform 0.25s ease-out",
        }}
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-colors duration-300 hover:border-[#F26522]/40 sm:p-7"
      >
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-[12px] tracking-wide text-[#F26522]">
            {job.period}
          </span>
          {job.location && (
            <span className="text-[12px] text-zinc-500">{job.location}</span>
          )}
        </div>

        <h3 className="mt-3 text-[19px] font-semibold text-white sm:text-[21px]">
          {job.role}
        </h3>
        <p className="mt-1 text-[14px] text-zinc-400">{job.company}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {job.current && (
            <span className="inline-block rounded-full bg-[#F26522]/15 px-2.5 py-0.5 text-[11px] font-medium text-[#F26522]">
              Current
            </span>
          )}
          {job.tag && (
            <span className="inline-block rounded-full border border-white/15 px-2.5 py-0.5 text-[11px] text-zinc-400">
              {job.tag}
            </span>
          )}
        </div>

        {job.summary && (
          <p className="mt-4 text-[14px] leading-[1.6] text-zinc-300">
            {job.summary}
          </p>
        )}

        <ul className="mt-3 space-y-2">
          {job.bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex gap-2 text-[13px] leading-[1.6] text-zinc-400 sm:text-[14px]"
            >
              <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-[#F26522]/70" />
              {bullet}
            </li>
          ))}
        </ul>

        {job.stack && job.stack.length > 0 && (
          <p className="mt-4 text-[11.5px] tracking-wide text-zinc-500">
            {job.stack.join(" · ")}
          </p>
        )}

        <motion.div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#F26522] to-transparent"
          initial={{ width: "0%" }}
          animate={{ width: active ? "100%" : "0%" }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const [blobs] = useState(() =>
    Array.from({ length: 6 }, (_, i) => ({
      size: 60 + i * 26,
      duration: 20 + i * 3,
      isViolet: i % 2 === 0,
      left: `${8 + i * 15}%`,
      top: `${10 + ((i * 17) % 70)}%`,
    }))
  );

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#08080c] pb-20 pt-16 sm:pb-24 sm:pt-20 lg:pb-32 lg:pt-28"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {blobs.map((b, i) => (
          <div
            key={i}
            className={`glow-blob absolute rounded-full opacity-[0.12] blur-3xl ${
              b.isViolet ? "bg-violet-500" : "bg-[#F26522]"
            }`}
            style={{
              width: b.size,
              height: b.size,
              left: b.left,
              top: b.top,
              animationDuration: `${b.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px]">
        <div className="mb-6 flex items-center gap-3 px-5 sm:mb-8 sm:px-8 lg:px-12">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F26522] text-[11px] font-semibold text-white sm:h-7 sm:w-7 sm:text-[12px]">
            1
          </div>
          <div className="rounded-full border border-white/15 px-3 py-1 text-[12px] font-medium text-zinc-300 sm:px-4 sm:py-1.5 sm:text-[13px]">
            Experience
          </div>
        </div>

        <h2 className="mb-12 px-5 text-[clamp(1.5rem,4vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-white sm:mb-16 sm:px-8 lg:mb-20 lg:px-12">
          Where I&apos;ve built and shipped.
        </h2>

        <div className="relative px-5 sm:px-8 lg:px-12">
          <div
            className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 md:block"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(242,101,34,0.5), rgba(139,92,246,0.4), transparent)",
            }}
          />
          {experience.map((job, index) => (
            <TimelineCard key={`${job.company}-${job.role}`} job={job} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
