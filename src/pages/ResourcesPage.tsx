import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Resources from "../components/Resources";

export default function ResourcesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#06060a]">
      <div className="pointer-events-none absolute inset-0">
        <div className="glow-blob absolute -left-24 -top-24 h-[420px] w-[420px] rounded-full bg-[#F26522] opacity-[0.1] blur-[110px]" />
        <div className="glow-blob-slow absolute -right-24 top-1/3 h-[380px] w-[380px] rounded-full bg-violet-600 opacity-[0.08] blur-[110px]" />
      </div>

      <div className="relative z-20">
        <Navbar />
      </div>

      <Resources />
    </div>
  );
}
