"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  "Interior Painting",
  "Exterior Painting",
  "Drywall Repairs",
  "Water Damage Restoration",
  "Apartment Turns & Make Ready",
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal, .reveal-right").forEach((el, i) => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-28 bg-[#0d1e47] relative overflow-hidden clip-diagonal">
      {/* Decorative orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-[#2324cc]/40 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#fdb822]/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: copy */}
          <div>
            <p className="reveal text-[#fdb822] font-semibold text-sm tracking-widest uppercase mb-5">Get In Touch</p>
            <h2 className="reveal delay-100 font-bold text-white mb-6" style={{ fontSize: "clamp(2.2rem,4vw,3.25rem)", letterSpacing: "-0.02em" }}>
              Contact Us
              <br />
              <span className="gradient-text">Today.</span>
            </h2>
            <p className="reveal delay-200 text-white/55 text-lg leading-relaxed mb-10">
              Fill out the form and we'll reach out within 16 hours to schedule your free estimate.
            </p>

            {/* Contact info */}
            <div className="reveal delay-300 space-y-5">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                  ),
                  label: "Call or Text",
                  value: "(469) 798-9325",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  ),
                  label: "Email Us",
                  value: "kc10remodels@gmail.com",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  ),
                  label: "Business Hours",
                  value: "Mon – Sat: 8am – 6pm",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-[#fdb822] shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white/40 text-xs font-medium uppercase tracking-widest">{item.label}</p>
                    <p className="text-white font-semibold">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Service area note */}
            <div className="reveal delay-400 mt-10 p-5 rounded-xl bg-white/5 border border-white/10">
              <p className="text-white/60 text-sm leading-relaxed mb-3">
                <span className="text-[#fdb822] font-semibold">Cities We Service:</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Dallas", "Fort Worth", "Irving", "Arlington", "Garland",
                  "Mesquite", "Richardson", "Lewisville", "Addison", "Coppell",
                  "Rowlett", "Rockwall", "Balch Springs", "Plano"
                ].map((city) => (
                  <span key={city} className="text-xs font-medium text-white/50 bg-white/8 border border-white/10 px-3 py-1 rounded-full">
                    {city}, TX
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="reveal-right delay-200">
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-[0_40px_100px_rgba(0,0,0,0.3)]">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-[#2324cc]/10 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-[#2324cc]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-[#0d1e47] text-2xl mb-3">We got your message!</h3>
                  <p className="text-gray-500 text-base leading-relaxed">
                    Expect a call or email from us within 16 hours. We look forward to working with you!
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="font-bold text-[#0d1e47] text-2xl mb-2">Request Free Estimate</h3>
                  <p className="text-gray-400 text-sm mb-8">Response within 16 hours.</p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Jane Smith"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[#0d1e47] placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2324cc]/30 focus:border-[#2324cc] transition-all text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="(555) 000-0000"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[#0d1e47] placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2324cc]/30 focus:border-[#2324cc] transition-all text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="jane@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[#0d1e47] placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2324cc]/30 focus:border-[#2324cc] transition-all text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                        Service Interested In
                      </label>
                      <select
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[#0d1e47] focus:outline-none focus:ring-2 focus:ring-[#2324cc]/30 focus:border-[#2324cc] transition-all text-sm bg-white"
                      >
                        <option value="">Select a service…</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                        Tell Us About Your Project
                      </label>
                      <textarea
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="e.g. 3-bedroom house, needs full interior, walls only, neutral tones…"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[#0d1e47] placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2324cc]/30 focus:border-[#2324cc] transition-all text-sm resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-[#fdb822] hover:bg-[#e05e00] text-white font-bold text-base rounded-xl transition-all duration-300 hover:shadow-glow-orange hover:-translate-y-0.5 active:translate-y-0"
                    >
                      Send My Request →
                    </button>

                    <p className="text-gray-400 text-xs text-center">
                      We'll never sell your info or spam you.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
