import { motion } from "framer-motion";
import { Swirl, ChromaFlow, FlutedGlass, FilmGrain, Shader } from "shaders/react";
import Navbar from "./Navbar";
import RollButton from "./RollButton";
import Lanyard from "./Lanyard/Lanyard";
import professionalPfp from "./Lanyard/professional-pfp.webp";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[#06060a]">
      <div className="absolute inset-0 z-10 pointer-events-none">
        <Shader className="h-full w-full">
          <Swirl colorA="#0a0a10" colorB="#131320" detail={1.7} />
          <ChromaFlow
            baseColor="#0a0a10"
            downColor="#F26522"
            leftColor="#7c3aed"
            rightColor="#F26522"
            upColor="#7c3aed"
            momentum={13}
            radius={3.5}
          />
          <FlutedGlass
            aberration={0.61}
            angle={31}
            frequency={8}
            highlight={0.16}
            highlightSoftness={0}
            lightAngle={-90}
            refraction={4}
            shape="rounded"
            softness={1}
            speed={0.15}
          />
          <FilmGrain strength={0.05} />
        </Shader>
      </div>

      <div className="pointer-events-none absolute inset-0 z-[12] mix-blend-screen">
        <div className="glow-blob absolute -left-24 -top-24 h-[420px] w-[420px] rounded-full bg-[#F26522] opacity-[0.16] blur-[110px]" />
        <div className="glow-blob-slow absolute -right-24 top-1/3 h-[380px] w-[380px] rounded-full bg-violet-600 opacity-[0.14] blur-[110px]" />
      </div>

      <div className="absolute inset-0 z-[15]">
        <Lanyard
          position={[0, 0, 20]}
          gravity={[0, -40, 0]}
          frontImage={professionalPfp}
          imageFit="cover"
        />
      </div>

      <div className="relative z-20 flex min-h-screen flex-col">
        <Navbar />

        <div className="flex-1" />

        <div className="mx-auto w-full max-w-[1440px] px-5 pb-14 sm:px-8 sm:pb-16 lg:px-12 lg:pb-20">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-5 text-[13px] tracking-wide text-zinc-400 sm:mb-8 sm:text-[14px]"
          >
            Sanchit Pandey
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-[clamp(1.75rem,7vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-white sm:text-[clamp(2.5rem,5vw,4.2rem)]"
          >
            I build AI automation
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            and full-stack products
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            that ship and get used.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-8 flex flex-col gap-4 sm:mt-12 sm:flex-row sm:gap-5"
          >
            <RollButton
              text="View my work"
              href="#projects"
              wrapperClassName="bg-[#F26522] hover:bg-[#e05a1a] text-white rounded-full pl-5 sm:pl-6 pr-2 py-2 shadow-[0_0_30px_rgba(242,101,34,0.4)] hover:shadow-[0_0_45px_rgba(242,101,34,0.6)] transition-shadow duration-300"
              textSizeClassName="text-[13px] sm:text-[14px]"
              circleClassName="w-7 h-7 sm:w-8 sm:h-8 bg-white"
              arrowClassName="text-[#F26522]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
