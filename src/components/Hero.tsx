"use client";

import { useEffect, useRef } from "react";

const stats = [
  { value: "110+", label: "Homes Painted" },
  { value: "Same Day", label: "Response Time" },
  { value: "5 Stars", label: "on Google" },
  { value: "DFW", label: "Local & Proud" },
];

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;
    el.classList.add("visible");
    const section = el.closest("section");
    if (section) {
      section.querySelectorAll(".reveal, .reveal-right").forEach((node, i) => {
        setTimeout(() => node.classList.add("visible"), i * 100);
      });
    }
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-hero-pattern noise-overlay">
      {/* Decorative orbs */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-[#2324cc]/40 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#fdb822]/10 blur-[100px] pointer-events-none" />
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 pt-48 pb-24 text-center">
        <div>
            {/* Headline */}
            <h1
              ref={headlineRef}
              className="reveal font-bold text-white leading-[1.05] mb-6"
              style={{ fontSize: "clamp(3.2rem, 7vw, 5.5rem)", letterSpacing: "-0.02em" }}
            >
              <span className="gradient-text">Painting</span>
              <br />
              Dallas-Fort Worth
            </h1>

            {/* Sub */}
            <p className="reveal delay-200 text-white/65 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Residential painting, drywall repairs, water damage restoration, and make-ready services for DFW homeowners, landlords, and property managers. Done right, on time, every time.
            </p>

            {/* CTAs */}
            <div className="reveal delay-300 flex flex-wrap justify-center gap-4 mb-16">
              <a
                href="/contact"
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-[#fdb822] text-white font-semibold rounded-xl text-base overflow-hidden transition-all duration-300 hover:shadow-glow-orange hover:-translate-y-1"
              >
                <span className="relative z-10">Get Free Estimate</span>
                <svg className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
              <a
                href="/gallery"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/25 text-white/90 font-medium rounded-xl text-base hover:bg-white/10 transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
                View Our Work
              </a>
            </div>

            {/* Trust badges */}
            <div className="reveal delay-400 flex flex-wrap justify-center gap-6">
              {["Insured", "Satisfaction Guarantee", "Local Family Business"].map((b) => (
                <div key={b} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#fdb822] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white/60 text-sm font-medium">{b}</span>
                </div>
              ))}
            </div>
        </div>

        {/* Stats bar */}
        <div className="reveal delay-500 mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
          {stats.map((s, i) => (
            <div key={i} className="bg-white/5 hover:bg-white/10 transition-colors px-8 py-6 text-center">
              <p className="text-[#fdb822] font-bold text-3xl mb-1 counter-wrapper">{s.value}</p>
              <p className="text-white/50 text-sm font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

function HouseIllustration() {
  return (
    <svg viewBox="0 0 400 420" className="w-72 h-72 opacity-80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Sky gradient */}
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2324cc" stopOpacity="0" />
          <stop offset="100%" stopColor="#0d1e47" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="wall" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="roof" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fdb822" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#c25500" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      {/* House body */}
      <rect x="80" y="200" width="240" height="180" rx="4" fill="url(#wall)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
      {/* Roof */}
      <polygon points="60,205 200,90 340,205" fill="url(#roof)" />
      <polygon points="60,205 200,90 340,205" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      {/* Chimney */}
      <rect x="260" y="110" width="28" height="60" rx="2" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      {/* Door */}
      <rect x="170" y="300" width="60" height="80" rx="4" fill="rgba(245,106,0,0.3)" stroke="rgba(245,106,0,0.6)" strokeWidth="1.5" />
      <circle cx="220" cy="342" r="4" fill="rgba(245,106,0,0.8)" />
      {/* Windows */}
      <rect x="100" y="240" width="60" height="55" rx="4" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
      <line x1="130" y1="240" x2="130" y2="295" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      <line x1="100" y1="268" x2="160" y2="268" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      <rect x="240" y="240" width="60" height="55" rx="4" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
      <line x1="270" y1="240" x2="270" y2="295" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      <line x1="240" y1="268" x2="300" y2="268" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      {/* Ground */}
      <ellipse cx="200" cy="385" rx="160" ry="12" fill="rgba(255,255,255,0.04)" />
      {/* Paint brush decorative */}
      <rect x="330" y="155" width="8" height="50" rx="3" fill="rgba(245,106,0,0.6)" transform="rotate(25,330,155)" />
      <ellipse cx="340" cy="210" rx="7" ry="10" fill="rgba(245,106,0,0.8)" transform="rotate(25,340,210)" />
    </svg>
  );
}
