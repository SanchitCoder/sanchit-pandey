import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [hash]);

  return (
    <>
      <Hero />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}
