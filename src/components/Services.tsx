"use client";

import { useEffect, useRef } from "react";

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    title: "Interior Painting",
    desc: "Flawless finishes on every wall, trim, and ceiling — from bold accent walls to full-home transformations. We prep, protect, and perfect every surface.",
    tag: "Most Popular",
    color: "from-royal-600/20 to-royal-800/10",
    accent: "#2324cc",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
      </svg>
    ),
    title: "Exterior Painting",
    desc: "Weather-resistant coatings and expert prep work that keeps your home protected and beautiful through every season.",
    tag: null,
    color: "from-orange-500/20 to-orange-700/10",
    accent: "#fdb822",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
    title: "Drywall Repairs",
    desc: "Holes, cracks, water damage, and texture matching — we repair and restore your walls to a seamless, paint-ready finish.",
    tag: "Premium",
    color: "from-royal-600/20 to-orange-500/10",
    accent: "#8B5CF6",
  },
];

export default function Services() {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-28 bg-white relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#fdb822]/5 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#2324cc]/5 blur-[60px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="reveal inline-block text-[#fdb822] font-semibold text-sm tracking-widest uppercase mb-4">
            What We Do
          </p>
          <h2 className="reveal delay-100 font-bold text-[#0d1e47] mb-6" style={{ fontSize: "clamp(2.2rem,4vw,3.25rem)", letterSpacing: "-0.02em" }}>
            Services Built for
            <span className="block text-[#2324cc]">Every Home, Every Vision.</span>
          </h2>
          <p className="reveal delay-200 text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            From quick refreshes to full transformations, our team delivers results that exceed expectations — on time, on budget, on point.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className={`reveal delay-${(i % 4 + 1) * 100} group relative bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1 overflow-hidden cursor-pointer`}
            >
              {/* Hover gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Tag */}
              {s.tag && (
                <span
                  className="relative z-10 inline-block text-xs font-semibold px-3 py-1 rounded-full mb-5"
                  style={{ backgroundColor: `${s.accent}18`, color: s.accent }}
                >
                  {s.tag}
                </span>
              )}
              {!s.tag && <div className="mb-5 h-7" />}

              {/* Icon */}
              <div
                className="relative z-10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${s.accent}15`, color: s.accent }}
              >
                {s.icon}
              </div>

              <h3 className="relative z-10 font-bold text-[#0d1e47] text-xl mb-3 group-hover:text-[#2324cc] transition-colors">
                {s.title}
              </h3>
              <p className="relative z-10 text-gray-500 text-sm leading-relaxed">{s.desc}</p>

              {/* Arrow */}
              <div className="relative z-10 mt-6 flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0" style={{ color: s.accent }}>
                Learn more
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </div>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl"
                style={{ backgroundColor: s.accent }}
              />
            </div>
          ))}
        </div>

        {/* Also Available */}
        <div className="reveal mt-12">
          <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">Also Available</p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: "Water Damage Restoration",
                desc: "Fast response to water-damaged walls and ceilings in Dallas-Fort Worth homes — assessment, repair, and repaint all in one.",
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 12 3Z" />
                  </svg>
                ),
              },
              {
                title: "Apartment Turns & Make Ready",
                desc: "Painting, drywall repairs, and full make-ready services between tenants — keeping DFW rental units and homes move-in ready on schedule.",
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
                  </svg>
                ),
              },
            ].map((s, i) => (
              <div key={i} className={`reveal delay-${(i + 1) * 100} group flex gap-4 bg-[#f8f9fc] hover:bg-white border border-gray-100 hover:border-[#2324cc]/20 rounded-2xl p-6 transition-all duration-300 hover:shadow-card hover:-translate-y-0.5`}>
                <div className="shrink-0 w-10 h-10 rounded-xl bg-[#2324cc]/10 text-[#2324cc] flex items-center justify-center group-hover:bg-[#2324cc] group-hover:text-white transition-all duration-300">
                  {s.icon}
                </div>
                <div>
                  <h3 className="font-bold text-[#0d1e47] text-base mb-1">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA strip */}
        <div className="reveal delay-300 mt-16 bg-gradient-to-r from-[#0d1e47] to-[#2324cc] rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-bold text-2xl mb-2">Not sure which service you need?</h3>
            <p className="text-white/60 text-base">Call us or request a free walkthrough — we'll recommend exactly what your home needs.</p>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-8 py-4 bg-[#fdb822] hover:bg-[#e05e00] text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-glow-orange hover:-translate-y-0.5 whitespace-nowrap"
          >
            Book Free Walkthrough
          </a>
        </div>
      </div>
    </section>
  );
}
