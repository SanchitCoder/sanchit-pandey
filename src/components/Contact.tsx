import RollButton from "./RollButton";

export default function Contact() {
  return (
    <section id="contact" className="bg-white pb-20 pt-16 sm:pb-28 sm:pt-20 lg:pb-32 lg:pt-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="mb-6 flex items-center gap-3 sm:mb-8">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 text-[11px] font-semibold text-white sm:h-7 sm:w-7 sm:text-[12px]">
            3
          </div>
          <div className="rounded-full border border-gray-200 px-3 py-1 text-[12px] font-medium sm:px-4 sm:py-1.5 sm:text-[13px]">
            Contact
          </div>
        </div>

        <h2 className="mb-8 text-[clamp(1.75rem,7vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 sm:mb-10 sm:text-[clamp(2.5rem,5vw,4.2rem)]">
          Let&apos;s build something.
        </h2>

        <p className="mb-8 max-w-xl text-[15px] leading-[1.6] text-gray-600 sm:text-[17px]">
          Open to new projects, contract work and full-time roles.
        </p>

        <RollButton
          text="sanchitpandey07@hotmail.com"
          href="mailto:sanchitpandey07@hotmail.com"
          wrapperClassName="bg-gray-900 text-white rounded-full pl-5 sm:pl-6 pr-2 py-2"
          textSizeClassName="text-[13px] sm:text-[14px]"
          circleClassName="w-7 h-7 sm:w-8 sm:h-8 bg-white"
          arrowClassName="text-gray-900"
        />
      </div>
    </section>
  );
}
