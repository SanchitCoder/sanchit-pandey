import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="bg-white pb-12 pt-16 sm:pb-16 sm:pt-20 lg:pb-24 lg:pt-32">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-6 flex items-center gap-3 px-5 sm:mb-8 sm:px-8 lg:px-12">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 text-[11px] font-semibold text-white sm:h-7 sm:w-7 sm:text-[12px]">
            1
          </div>
          <div className="rounded-full border border-gray-200 px-3 py-1 text-[12px] font-medium sm:px-4 sm:py-1.5 sm:text-[13px]">
            Experience
          </div>
        </div>

        <h2 className="mb-12 px-5 text-[clamp(1.5rem,4vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 sm:mb-16 sm:px-8 lg:mb-20 lg:px-12">
          Where I&apos;ve built and shipped.
        </h2>

        <div className="px-5 sm:px-8 lg:px-12">
          <div className="border-t border-gray-200">
            {experience.map((job) => (
              <div
                key={`${job.company}-${job.role}`}
                className="grid grid-cols-1 gap-4 border-b border-gray-200 py-8 sm:py-10 lg:grid-cols-[26%_1fr] lg:gap-8"
              >
                <div>
                  <p className="text-[16px] font-semibold text-gray-900 sm:text-[18px]">
                    {job.role}
                  </p>
                  <p className="mt-1 text-[14px] text-gray-600">{job.company}</p>
                  <p className="mt-2 text-[13px] text-gray-500">
                    {job.location ? `${job.location} · ` : ""}
                    {job.period}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {job.current && (
                      <span className="inline-block rounded-full bg-gray-900 px-2 py-0.5 text-[11px] text-white">
                        Current
                      </span>
                    )}
                    {job.tag && (
                      <span className="inline-block rounded-full border border-gray-300 px-2 py-0.5 text-[11px] text-gray-600">
                        {job.tag}
                      </span>
                    )}
                  </div>
                </div>
                <div>
                  {job.summary && (
                    <p className="text-[14px] leading-[1.6] text-gray-700 sm:text-[15px]">
                      {job.summary}
                    </p>
                  )}
                  <ul className="mt-3 space-y-2">
                    {job.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-2 text-[13px] leading-[1.6] text-gray-600 sm:text-[14px]"
                      >
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-gray-400" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  {job.stack && job.stack.length > 0 && (
                    <p className="mt-4 text-[12px] tracking-wide text-gray-400">
                      {job.stack.join(" · ")}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
