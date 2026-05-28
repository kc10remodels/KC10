"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Testimonials", href: "/testimonials" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    const base = href.split("#")[0];
    return base === pathname;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0d1e47]/95 backdrop-blur-md shadow-lg shadow-black/20 py-3"
          : "bg-[#0d1e47] py-6"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <img
            src="/logo.png.png"
            alt="KC10 Remodels"
            className="h-14 lg:h-28 w-auto group-hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.label}>
              <Link
                href={l.href}
                className={`text-sm font-medium transition-colors duration-200 relative group ${
                  isActive(l.href) ? "text-white" : "text-white/70 hover:text-white"
                }`}
              >
                {l.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-[#fdb822] transition-all duration-300 rounded-full ${
                    isActive(l.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className="px-5 py-2.5 bg-[#fdb822] hover:bg-[#e05e00] text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_24px_rgba(245,106,0,0.5)] hover:-translate-y-0.5"
          >
            Free Estimate
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#0d1e47]/98 backdrop-blur-md px-6 pb-6 pt-2 space-y-1">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg font-medium transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="block mt-3 px-4 py-3 bg-[#fdb822] text-white text-center font-semibold rounded-lg"
          >
            Free Estimate
          </Link>
        </div>
      </div>
    </header>
  );
}
