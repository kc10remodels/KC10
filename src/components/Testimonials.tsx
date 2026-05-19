"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Westside Heights",
    rating: 5,
    text: "KC10 completely transformed our 1970s colonial. The crew was on time every single day, the prep work was immaculate, and the final result blew us away. Our neighbors keep asking who we used.",
    project: "Exterior — Full Home",
    avatar: "SM",
    color: "bg-[#1a3a8f]",
  },
  {
    name: "James & Lisa T.",
    location: "Oakwood Estates",
    rating: 5,
    text: "We had three other quotes before KC10 and none of them came close to the level of detail in their proposal. They matched our trim color perfectly and we got zero overspray anywhere. Professional top to bottom.",
    project: "Interior — Whole House",
    avatar: "JT",
    color: "bg-[#f56a00]",
  },
  {
    name: "Michael R.",
    location: "Heritage Oaks",
    rating: 5,
    text: "The cabinet refinishing job looks better than new cabinets would have. They used a sprayer which gave it that flawless factory finish. Already saved us $15,000 over replacement. Unbelievable value.",
    project: "Kitchen Cabinet Refinish",
    avatar: "MR",
    color: "bg-[#059669]",
  },
  {
    name: "Diana K.",
    location: "Midtown District",
    rating: 5,
    text: "I asked for venetian plaster in my master bathroom and the result is stunning — like a luxury hotel. They spent extra time getting the technique right and never rushed a single coat. Worth every penny.",
    project: "Specialty — Venetian Plaster",
    avatar: "DK",
    color: "bg-[#8B5CF6]",
  },
  {
    name: "Tom & Gwen F.",
    location: "Lakeside Manor",
    rating: 5,
    text: "From the first consultation to the final walkthrough, KC10 made everything easy. They communicated daily, respected our schedule, and left the house spotless. We already have them booked for the exterior.",
    project: "Interior — Master Suite & Living",
    avatar: "TF",
    color: "bg-[#D97706]",
  },
  {
    name: "Amy S.",
    location: "The Arts District",
    rating: 5,
    text: "The limewash walls in my studio turned out exactly as I imagined — and honestly even better. The color consultant they sent over was incredibly helpful and really understood the aesthetic I was going for.",
    project: "Specialty — Limewash Feature Wall",
    avatar: "AS",
    color: "bg-[#EC4899]",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(count)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#f56a00]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => setActive((a) => (a + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="py-28 bg-[#f8f9fc] relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#1a3a8f]/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="reveal text-[#f56a00] font-semibold text-sm tracking-widest uppercase mb-4">Reviews</p>
          <h2 className="reveal delay-100 font-bold text-[#0d1e47] mb-4" style={{ fontSize: "clamp(2.2rem,4vw,3.25rem)", letterSpacing: "-0.02em" }}>
            Homeowners Love
            <span className="block text-[#1a3a8f]">What They See.</span>
          </h2>
          {/* Star summary */}
          <div className="reveal delay-200 inline-flex items-center gap-3 bg-white border border-gray-100 rounded-full px-6 py-3 shadow-card">
            <StarRating count={5} />
            <span className="font-bold text-[#0d1e47]">4.9</span>
            <span className="text-gray-400 text-sm">based on 250+ reviews</span>
          </div>
        </div>

        {/* Featured / large testimonial */}
        <div className="reveal delay-100 mb-8">
          <div className="relative bg-gradient-to-br from-[#0d1e47] to-[#1a3a8f] rounded-3xl p-10 lg:p-14 overflow-hidden">
            {/* Quote mark */}
            <div className="absolute top-8 right-10 text-white/5 font-black" style={{ fontSize: "14rem", lineHeight: 1 }}>"</div>

            <div className="relative z-10 grid lg:grid-cols-[auto_1fr] gap-8 items-start">
              <div className={`w-16 h-16 rounded-2xl ${testimonials[active].color} flex items-center justify-center text-white font-bold text-xl shrink-0`}>
                {testimonials[active].avatar}
              </div>
              <div>
                <StarRating count={testimonials[active].rating} />
                <blockquote className="text-white text-xl lg:text-2xl font-medium leading-relaxed my-6" style={{ letterSpacing: "-0.01em" }}>
                  "{testimonials[active].text}"
                </blockquote>
                <div className="flex flex-wrap items-center gap-4">
                  <div>
                    <p className="text-white font-bold">{testimonials[active].name}</p>
                    <p className="text-white/50 text-sm">{testimonials[active].location}</p>
                  </div>
                  <span className="text-xs font-semibold bg-[#f56a00]/20 text-[#f56a00] px-3 py-1 rounded-full">
                    {testimonials[active].project}
                  </span>
                </div>
              </div>
            </div>

            {/* Dots */}
            <div className="relative z-10 flex gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? "bg-[#f56a00] w-8" : "bg-white/20 w-4 hover:bg-white/40"}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Card grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              onClick={() => setActive(i)}
              className={`reveal delay-${(i % 3 + 1) * 100} cursor-pointer bg-white rounded-2xl p-7 border transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 ${
                i === active ? "border-[#1a3a8f] shadow-card" : "border-gray-100"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl ${t.color} flex items-center justify-center text-white font-bold text-sm`}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-[#0d1e47] text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.location}</p>
                  </div>
                </div>
                <StarRating count={t.rating} />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">"{t.text}"</p>
              <span className="inline-block mt-3 text-xs font-medium text-[#1a3a8f] bg-[#1a3a8f]/8 px-3 py-1 rounded-full">
                {t.project}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
