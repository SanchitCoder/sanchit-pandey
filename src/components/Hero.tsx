import { Swirl, ChromaFlow, FlutedGlass, FilmGrain, Shader } from "shaders/react";
import Navbar from "./Navbar";
import RollButton from "./RollButton";
import Lanyard from "./Lanyard/Lanyard";
import professionalPfp from "./Lanyard/professional-pfp.webp";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[#EFEFEF]">
      <div className="absolute inset-0 z-10 pointer-events-none">
        <Shader className="h-full w-full">
          <Swirl colorA="#ffffff" colorB="#f0f0f0" detail={1.7} />
          <ChromaFlow
            baseColor="#ffffff"
            downColor="#ff5f03"
            leftColor="#ff5f03"
            rightColor="#ff5f03"
            upColor="#ff5f03"
            momentum={13}
            radius={3.5}
          />
          <FlutedGlass
            aberration={0.61}
            angle={31}
            frequency={8}
            highlight={0.12}
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
          <p className="mb-5 text-[13px] tracking-wide text-gray-900 sm:mb-8 sm:text-[14px]">
            Sanchit Pandey
          </p>
          <h1 className="text-[clamp(1.75rem,7vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 sm:text-[clamp(2.5rem,5vw,4.2rem)]">
            I build AI automation
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            and full-stack products
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            that ship and get used.
          </h1>

          <div className="mt-8 flex flex-col gap-4 sm:mt-12 sm:flex-row sm:gap-5">
            <RollButton
              text="View my work"
              href="#projects"
              wrapperClassName="bg-[#F26522] hover:bg-[#e05a1a] text-white rounded-full pl-5 sm:pl-6 pr-2 py-2"
              textSizeClassName="text-[13px] sm:text-[14px]"
              circleClassName="w-7 h-7 sm:w-8 sm:h-8 bg-white"
              arrowClassName="text-[#F26522]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
