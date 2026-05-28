"use client";

import { useEffect, useRef } from "react";

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
    title: "Interior Painting",
    desc: "Kitchen, bathrooms, bedrooms, closets, and cabinets.",
    color: "from-royal-600/20 to-royal-800/10",
    accent: "#2324cc",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    title: "Exterior Painting",
    desc: "Siding, brick, stucco, fences, and garage doors.",
    color: "from-orange-500/20 to-orange-700/10",
    accent: "#fdb822",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
      </svg>
    ),
    title: "Drywall Repairs",
    desc: "Holes, cracks, texture repairs, mold, and water damage.",
    color: "from-royal-600/20 to-orange-500/10",
    accent: "#8B5CF6",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c0 0-7.5 8.5-7.5 12.75a7.5 7.5 0 0 0 15 0C19.5 10.75 12 2.25 12 2.25Z" />
      </svg>
    ),
    title: "Water Damage Restoration",
    desc: "Damage assessment, material removal, dehumidifying, mold remediation/prevention, and sheetrock replacement.",
    color: "from-blue-500/20 to-blue-700/10",
    accent: "#0ea5e9",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
      </svg>
    ),
    title: "Apartment Turns & Make Ready",
    desc: "Painting, make ready, and housekeeping.",
    color: "from-green-500/20 to-green-700/10",
    accent: "#16a34a",
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
    <section id="services" ref={sectionRef} className="pt-48 pb-28 bg-white relative overflow-hidden">
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
            Everything Your DFW Home
            <span className="block text-[#2324cc]">Needs, Done Right.</span>
          </h2>
          <p className="reveal delay-200 text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            No shortcuts, no surprises. Just honest work and quality results for DFW homeowners and property managers.
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

              {/* CTA */}
              <a
                href="tel:4697989325"
                className="relative z-10 mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
                style={{ backgroundColor: s.accent }}
                onClick={(e) => e.stopPropagation()}
              >
                Get a Free Estimate
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
              </a>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl"
                style={{ backgroundColor: s.accent }}
              />
            </div>
          ))}
        </div>


        {/* CTA strip */}
        <div className="reveal delay-300 mt-16 bg-gradient-to-r from-[#0d1e47] to-[#2324cc] rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-bold text-2xl">Not sure where to start?</h3>
          </div>
          <a
            href="tel:4697989325"
            className="shrink-0 px-8 py-4 bg-[#fdb822] hover:bg-[#e05e00] text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-glow-orange hover:-translate-y-0.5 whitespace-nowrap"
          >
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
