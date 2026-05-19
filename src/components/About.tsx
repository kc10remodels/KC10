"use client";

import { useEffect, useRef } from "react";

const team = [
  { name: "Kevin C.", role: "Founder & Lead Painter", years: "15 yrs", initials: "KC" },
  { name: "Maria L.", role: "Color Consultant", years: "8 yrs", initials: "ML" },
  { name: "Dave H.", role: "Exterior Specialist", years: "12 yrs", initials: "DH" },
  { name: "Alex J.", role: "Prep & Finishing Lead", years: "6 yrs", initials: "AJ" },
];

const values = [
  { label: "Honesty", desc: "We tell you what you need, not what makes us more money." },
  { label: "Craft", desc: "We take pride in every coat, every edge, every surface." },
  { label: "Respect", desc: "Your home, your time, and your budget are treated like our own." },
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
            <div className="relative bg-gradient-to-br from-[#0d1e47] to-[#1a3a8f] rounded-3xl overflow-hidden p-12 text-white">
              {/* Decorative circle */}
              <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[#f56a00]/20 blur-3xl" />
              <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-[#1a3a8f]/30 blur-2xl" />

              <div className="relative z-10">
                <span className="text-[#f56a00] font-semibold text-sm tracking-widest uppercase">Founded 2009</span>
                <p className="text-white font-black mt-4 mb-6" style={{ fontSize: "clamp(3rem,6vw,5rem)", lineHeight: "1" }}>
                  15<br />
                  <span className="text-white/30 font-light text-3xl">years of craft</span>
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
            <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full bg-[#f56a00] flex flex-col items-center justify-center text-white shadow-glow-orange animate-spin-slow">
              <svg className="w-7 h-7 mb-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clipRule="evenodd" />
              </svg>
              <span className="font-bold text-xs text-center leading-tight">Top Rated<br />2024</span>
            </div>
          </div>

          {/* Right: copy */}
          <div>
            <p className="reveal text-[#f56a00] font-semibold text-sm tracking-widest uppercase mb-4">Our Story</p>
            <h2 className="reveal delay-100 font-bold text-[#0d1e47] mb-6" style={{ fontSize: "clamp(2.2rem,4vw,3.25rem)", letterSpacing: "-0.02em" }}>
              A Family Business
              <span className="block text-[#1a3a8f]">Built on Trust.</span>
            </h2>
            <div className="reveal delay-200 space-y-5 text-gray-500 leading-relaxed">
              <p>
                KC10 Painting started in 2009 when founder Kevin C. left a corporate job to pursue what he'd always loved — the craft of painting. With a truck, a few brushes, and a commitment to doing every job right, he built the company one satisfied homeowner at a time.
              </p>
              <p>
                Today we're a team of 12 specialists, each an expert in their discipline. But we've never lost the values that started it all: honest communication, meticulous craft, and genuine respect for every home we touch.
              </p>
              <p>
                We're your neighbors. We live in the same communities where we work, and we take that personally.
              </p>
            </div>

            {/* Values */}
            <div className="reveal delay-300 mt-8 space-y-4">
              {values.map((v, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-[#f56a00]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-[#f56a00]" fill="currentColor" viewBox="0 0 20 20">
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

        {/* Team */}
        <div>
          <div className="text-center mb-12">
            <p className="reveal text-[#f56a00] font-semibold text-sm tracking-widest uppercase mb-3">The Team</p>
            <h3 className="reveal delay-100 font-bold text-[#0d1e47] text-3xl">The Crew Behind the Craft.</h3>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((member, i) => (
              <div key={i} className={`reveal delay-${(i + 1) * 100} group text-center`}>
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#1a3a8f] to-[#0d1e47] mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl group-hover:shadow-glow-royal transition-shadow duration-300">
                  {member.initials}
                </div>
                <p className="font-bold text-[#0d1e47] mb-0.5">{member.name}</p>
                <p className="text-gray-500 text-sm">{member.role}</p>
                <span className="inline-block mt-2 text-xs text-[#f56a00] font-medium">{member.years}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
