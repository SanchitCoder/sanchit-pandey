import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Project", to: { pathname: "/", hash: "projects" } },
  { label: "Experience", to: { pathname: "/", hash: "experience" } },
  { label: "Resources", to: "/resources" },
  { label: "Contact", to: { pathname: "/", hash: "contact" } },
] as const;

function linkClassName(isActive: boolean) {
  return `group relative rounded-full px-4 py-2 text-[14px] transition-colors duration-300 ${
    isActive ? "text-white" : "text-zinc-300 hover:text-white"
  }`;
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative z-20 mx-auto w-full max-w-[1440px] p-2 sm:p-3"
      >
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/[0.04] p-[5px] shadow-[0_0_40px_rgba(0,0,0,0.4)] backdrop-blur-xl">
          <div className="flex items-center gap-6">
            <Link
              to="/"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F26522] shadow-[0_0_16px_rgba(242,101,34,0.5)] sm:h-10 sm:w-10"
              aria-label="Home"
            >
              <span className="text-[10px] font-bold tracking-tight text-white sm:text-[11px]">
                SP
              </span>
            </Link>
            <div className="hidden items-center gap-1 md:flex">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    linkClassName(
                      typeof link.to === "string" ? isActive : false
                    )
                  }
                >
                  {({ isActive }) => {
                    const showActive =
                      typeof link.to === "string" ? isActive : false;
                    return (
                      <>
                        <span className="relative z-10">{link.label}</span>
                        <span
                          className={`absolute inset-0 rounded-full transition-all duration-300 ${
                            showActive
                              ? "scale-100 bg-white/[0.08] opacity-100"
                              : "scale-90 bg-white/0 opacity-0 group-hover:scale-100 group-hover:bg-white/[0.06] group-hover:opacity-100"
                          }`}
                        />
                      </>
                    );
                  }}
                </NavLink>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex items-center gap-2 rounded-full bg-[#F26522] pl-4 pr-2 py-2 text-[13px] font-medium text-white md:hidden"
          >
            {menuOpen ? "Close" : "Menu"}
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black/15">
              {menuOpen ? <X size={14} /> : <Menu size={14} />}
            </span>
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 md:hidden"
          >
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              className="absolute inset-x-0 bottom-0 mx-3 mb-3 rounded-2xl border border-white/10 bg-[#0c0c12] p-6 shadow-[0_0_60px_rgba(0,0,0,0.6)]"
            >
              <nav className="flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.35 }}
                  >
                    <Link
                      to={link.to}
                      onClick={() => setMenuOpen(false)}
                      className="block border-b border-white/10 py-3 text-[28px] font-medium text-white last:border-none sm:text-[32px]"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
