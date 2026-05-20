"use client";

import { useEffect, useRef } from "react";

const pillars = [
  {
    icon: "🎯",
    title: "Precision-First Mindset",
    desc: "We tape every edge and cover every floor before we ever even open a bucket. We take pride in our prep work.",
  },
  {
    icon: "🛡️",
    title: "Satisfaction Guarantee",
    desc: "Unhappy with something? Let us know. We'll come back and make it right, no hassle, no questions asked.",
  },
  {
    icon: "⚡",
    title: "On-Time, Every Time",
    desc: "We give you a real start date and stick to it. Never a no call or no show.",
  },
  {
    icon: "🎨",
    title: "Premium Materials Only",
    desc: "We use Sherwin-Williams, Benjamin Moore, and PPG. The good stuff holds up.",
  },
  {
    icon: "🏠",
    title: "Fully Insured",
    desc: "We're fully insured so you're covered from start to finish. No surprises, no liability on your end.",
  },
  {
    icon: "🌟",
    title: "Zero-Mess Guarantee",
    desc: "When we leave, you won't even know we were there — except for the fresh paint.",
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
        <div className="text-center mb-20">
          <p className="reveal text-[#fdb822] font-semibold text-sm tracking-widest uppercase mb-4">Why KC10?</p>
          <h2 className="reveal delay-100 font-bold text-[#0d1e47] mb-6" style={{ fontSize: "clamp(2.2rem,4vw,3.25rem)", letterSpacing: "-0.02em" }}>
            The Difference Is
            <br />
            <span className="text-[#2324cc]">In the Details.</span>
          </h2>
          <p className="reveal delay-200 text-gray-500 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Honest pricing, quality work, and we actually show up when we say we will.
          </p>
          <a
            href="tel:4697989325"
            className="reveal delay-300 inline-flex items-center gap-2 px-7 py-3.5 bg-[#2324cc] hover:bg-[#132d70] text-white font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow-royal"
          >
            Call Now for a Free Estimate
          </a>
        </div>

        {/* Pillars grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <div
              key={i}
              className={`reveal delay-${(i % 4 + 1) * 100} group flex gap-5 p-6 rounded-2xl hover:bg-[#f8f9fc] transition-all duration-300 hover:-translate-y-0.5`}
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-[#fdb822]/10 flex items-center justify-center text-xl group-hover:bg-[#fdb822]/15 transition-colors">
                {p.icon}
              </div>
              <div>
                <h3 className="font-bold text-[#0d1e47] text-base mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
