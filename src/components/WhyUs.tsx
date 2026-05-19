"use client";

import { useEffect, useRef } from "react";

const pillars = [
  {
    icon: "🎯",
    title: "Precision-First Mindset",
    desc: "We tape every edge, cover every floor, and inspect every inch. Precision isn't a bonus — it's the baseline.",
  },
  {
    icon: "🛡️",
    title: "5-Year Workmanship Guarantee",
    desc: "If it peels, chips, or fades within 5 years due to our work, we come back and fix it. No questions, no charge.",
  },
  {
    icon: "⚡",
    title: "On-Time, Every Time",
    desc: "We set realistic schedules and stick to them. You'll know exactly when we start, when we'll be done, and when we're gone.",
  },
  {
    icon: "🎨",
    title: "Premium Materials Only",
    desc: "We use Sherwin-Williams, Benjamin Moore, and PPG — no bargain-bin substitutes on your most valuable asset.",
  },
  {
    icon: "🏠",
    title: "Fully Licensed & Insured",
    desc: "Every crew member is background-checked. We carry full liability and workers' comp coverage so you're always protected.",
  },
  {
    icon: "🌟",
    title: "Zero-Mess Guarantee",
    desc: "We protect your furniture, floors, and landscaping before we touch anything. We leave your home cleaner than we found it.",
  },
];

const differentiators = [
  { label: "Client Satisfaction", value: 98, suffix: "%" },
  { label: "Projects On-Time", value: 97, suffix: "%" },
  { label: "5-Star Reviews", value: 250, suffix: "+" },
  { label: "Years in Business", value: 15, suffix: "+" },
];

export default function WhyUs() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 80);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-us" ref={sectionRef} className="py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <p className="reveal text-[#f56a00] font-semibold text-sm tracking-widest uppercase mb-4">Why KC10?</p>
            <h2 className="reveal delay-100 font-bold text-[#0d1e47] mb-6" style={{ fontSize: "clamp(2.2rem,4vw,3.25rem)", letterSpacing: "-0.02em" }}>
              The Difference Is
              <br />
              <span className="text-[#1a3a8f]">In the Details.</span>
            </h2>
            <p className="reveal delay-200 text-gray-500 text-lg leading-relaxed mb-8">
              Anyone can slap on a coat of paint. We build lasting finishes — through meticulous prep, premium products, and a crew that cares about your home as much as you do.
            </p>
            <a
              href="#contact"
              className="reveal delay-300 inline-flex items-center gap-2 px-7 py-3.5 bg-[#1a3a8f] hover:bg-[#132d70] text-white font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow-royal"
            >
              Schedule a Consultation
            </a>
          </div>

          {/* Stats */}
          <div className="reveal-right delay-200 grid grid-cols-2 gap-4">
            {differentiators.map((d, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-[#f8f9fc] to-white border border-gray-100 rounded-2xl p-7 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <p className="font-black text-[#1a3a8f] mb-2 counter-wrapper" style={{ fontSize: "clamp(2.4rem,4vw,3.2rem)" }}>
                  {d.value}
                  <span className="text-[#f56a00]">{d.suffix}</span>
                </p>
                <p className="text-gray-500 font-medium text-sm">{d.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pillars grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <div
              key={i}
              className={`reveal delay-${(i % 4 + 1) * 100} group flex gap-5 p-6 rounded-2xl hover:bg-[#f8f9fc] transition-all duration-300 hover:-translate-y-0.5`}
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-[#f56a00]/10 flex items-center justify-center text-xl group-hover:bg-[#f56a00]/15 transition-colors">
                {p.icon}
              </div>
              <div>
                <h3 className="font-bold text-[#0d1e47] text-base mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div className="reveal delay-200 mt-20 rounded-2xl overflow-hidden border border-gray-100 shadow-card">
          <div className="grid grid-cols-3 bg-[#0d1e47] text-white px-8 py-5">
            <div className="font-semibold text-white/60">What matters</div>
            <div className="font-bold text-center">KC10 Painting</div>
            <div className="font-semibold text-center text-white/40">The other guys</div>
          </div>
          {[
            ["Written guarantee", true, false],
            ["Background-checked crew", true, false],
            ["Premium paint brands only", true, false],
            ["Same crew start to finish", true, false],
            ["Free color consultation", true, false],
            ["Post-job cleanup included", true, true],
          ].map(([label, us, them], i) => (
            <div key={i} className={`grid grid-cols-3 px-8 py-5 items-center ${i % 2 === 0 ? "bg-white" : "bg-[#f8f9fc]"}`}>
              <span className="text-gray-700 font-medium text-sm">{label as string}</span>
              <div className="flex justify-center">
                {us ? (
                  <span className="w-6 h-6 rounded-full bg-[#1a3a8f]/10 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-[#1a3a8f]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                    </svg>
                  </span>
                ) : (
                  <span className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                    </svg>
                  </span>
                )}
              </div>
              <div className="flex justify-center">
                {them ? (
                  <span className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                    </svg>
                  </span>
                ) : (
                  <span className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-red-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                    </svg>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
