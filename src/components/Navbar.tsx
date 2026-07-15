import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Project", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="relative z-20 mx-auto w-full max-w-[1440px] p-2 sm:p-3">
        <div className="flex items-center justify-between rounded-full bg-white p-[5px]">
          <div className="flex items-center gap-6">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 sm:h-10 sm:w-10">
              <span className="text-[10px] font-bold tracking-tight text-white sm:text-[11px]">
                SP
              </span>
            </div>
            <div className="hidden items-center gap-6 md:flex">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[14px] text-gray-900 transition-colors duration-300 hover:text-gray-500"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex items-center gap-2 rounded-full bg-gray-900 pl-4 pr-2 py-2 text-[13px] font-medium text-white md:hidden"
          >
            {menuOpen ? "Close" : "Menu"}
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
              {menuOpen ? <X size={14} /> : <Menu size={14} />}
            </span>
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-50 transition-opacity duration-500 md:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute inset-x-0 bottom-0 mx-3 mb-3 rounded-2xl bg-white p-6 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            menuOpen ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-gray-100 py-3 text-[28px] font-medium text-gray-900 last:border-none sm:text-[32px]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
