"use client";

import { useEffect, useRef } from "react";

const team = [
  { name: "Kevin C.", role: "Founder & Lead Painter", years: "15 yrs", initials: "KC" },
  { name: "Maria L.", role: "Color Consultant", years: "8 yrs", initials: "ML" },
  { name: "Dave H.", role: "Exterior Specialist", years: "12 yrs", initials: "DH" },
  { name: "Alex J.", role: "Prep & Finishing Lead", years: "6 yrs", initials: "AJ" },
];

const values = [
  { label: "Locally Owned", desc: "We're based right here in DFW — no call centers, no middlemen, just your neighbors doing great work." },
  { label: "Quality Craft", desc: "We take pride in every coat, every edge, and every surface we touch." },
  { label: "Your Home, Our Standard", desc: "Your home, your time, and your budget are treated with the same care we'd give our own." },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
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
    <section id="about" ref={sectionRef} className="py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Main story block */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          {/* Left: visual */}
          <div className="reveal-left relative">
            {/* Main card */}
            <div className="relative bg-gradient-to-br from-[#0d1e47] to-[#2324cc] rounded-3xl overflow-hidden p-12 text-white">
              {/* Decorative circle */}
              <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[#fdb822]/20 blur-3xl" />
              <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-[#2324cc]/30 blur-2xl" />

              <div className="relative z-10">
                <span className="text-[#fdb822] font-semibold text-sm tracking-widest uppercase">Locally Owned & Operated — DFW</span>
                <p className="text-white font-black mt-4 mb-6" style={{ fontSize: "clamp(3rem,6vw,5rem)", lineHeight: "1" }}>
                  DFW<br />
                  <span className="text-white/30 font-light text-3xl">proud & local</span>
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {[
                    { n: "500+", l: "Projects" },
                    { n: "4.9★", l: "Avg. Rating" },
                    { n: "$0", l: "Hidden Fees" },
                    { n: "100%", l: "Insured" },
                  ].map((s, i) => (
                    <div key={i} className="glass rounded-xl px-4 py-3">
                      <p className="text-white font-bold text-xl">{s.n}</p>
                      <p className="text-white/50 text-xs font-medium">{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Award badge */}
            <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full bg-[#fdb822] flex flex-col items-center justify-center text-white shadow-glow-orange animate-spin-slow">
              <svg className="w-7 h-7 mb-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clipRule="evenodd" />
              </svg>
              <span className="font-bold text-xs text-center leading-tight">Top Rated<br />2024</span>
            </div>
          </div>

          {/* Right: copy */}
          <div>
            <p className="reveal text-[#fdb822] font-semibold text-sm tracking-widest uppercase mb-4">Our Story</p>
            <h2 className="reveal delay-100 font-bold text-[#0d1e47] mb-6" style={{ fontSize: "clamp(2.2rem,4vw,3.25rem)", letterSpacing: "-0.02em" }}>
              Locally Owned &
              <span className="block text-[#2324cc]">DFW Proud.</span>
            </h2>
            <div className="reveal delay-200 space-y-5 text-gray-500 leading-relaxed">
              <p>
                KC10 Remodels & Residential Painting is a locally owned and operated business proudly serving the Dallas-Fort Worth Metroplex. We're not a franchise — we're your neighbors, and we treat every home like it's our own.
              </p>
              <p>
                From interior and exterior painting to drywall repairs, water damage restoration, and make-ready services, our experienced crew delivers quality results you can see and trust. We show up on time, communicate clearly, and never cut corners.
              </p>
              <p>
                Whether you're a homeowner, landlord, or property manager in Dallas, Fort Worth, Irving, Arlington, or anywhere across DFW — KC10 is the team you can count on to get it done right the first time.
              </p>
            </div>

            {/* Values */}
            <div className="reveal delay-300 mt-8 space-y-4">
              {values.map((v, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-[#fdb822]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-[#fdb822]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-[#0d1e47] text-sm">{v.label}</p>
                    <p className="text-gray-500 text-sm mt-0.5">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why local matters */}
        <div className="reveal grid md:grid-cols-2 gap-6">
          {[
            { icon: "📍", title: "Based in DFW", desc: "We live and work right here in the Dallas-Fort Worth Metroplex — no out-of-town crews." },
            { icon: "⭐", title: "Community Reputation", desc: "Our business grows through referrals and five-star reviews from real DFW homeowners." },
          ].map((item, i) => (
            <div key={i} className={`reveal delay-${(i + 1) * 100} text-center p-8 rounded-2xl bg-[#f8f9fc] border border-gray-100`}>
              <div className="text-4xl mb-4">{item.icon}</div>
              <h4 className="font-bold text-[#0d1e47] text-lg mb-2">{item.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
