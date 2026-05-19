"use client";

import { useEffect, useRef, useState } from "react";

const categories = ["All", "Interior", "Exterior", "Specialty", "Cabinets"];

const projects = [
  {
    id: 1,
    title: "Modern Farmhouse Revival",
    category: "Exterior",
    location: "Westside Heights",
    colors: ["#2c3e50", "#ecf0f1", "#f56a00"],
    gradient: "from-slate-700 via-slate-500 to-orange-500",
    size: "large",
  },
  {
    id: 2,
    title: "Open-Concept Living Room",
    category: "Interior",
    location: "Midtown District",
    colors: ["#1a3a8f", "#ffffff", "#e8ecf8"],
    gradient: "from-blue-900 via-blue-600 to-blue-100",
    size: "small",
  },
  {
    id: 3,
    title: "Kitchen Cabinet Overhaul",
    category: "Cabinets",
    location: "Oakwood Estates",
    colors: ["#1c1c1c", "#f5f5f0", "#d4a853"],
    gradient: "from-gray-900 via-gray-200 to-yellow-400",
    size: "small",
  },
  {
    id: 4,
    title: "Venetian Plaster Master Bath",
    category: "Specialty",
    location: "Lakeside Manor",
    colors: ["#c9b99a", "#e8ddd0", "#8b7355"],
    gradient: "from-amber-800 via-amber-200 to-stone-400",
    size: "large",
  },
  {
    id: 5,
    title: "Colonial Two-Story Refresh",
    category: "Exterior",
    location: "Heritage Oaks",
    colors: ["#ffffff", "#1a3a8f", "#d4a853"],
    gradient: "from-white via-blue-900 to-yellow-500",
    size: "small",
  },
  {
    id: 6,
    title: "Limewash Accent Wall",
    category: "Specialty",
    location: "The Arts District",
    colors: ["#c8b8a2", "#e4d5c1", "#9e8265"],
    gradient: "from-stone-400 via-stone-200 to-stone-600",
    size: "small",
  },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filtered = projects.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

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
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="gallery" ref={sectionRef} className="py-28 bg-[#f8f9fc] relative overflow-hidden clip-diagonal-reverse">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            <p className="reveal text-[#f56a00] font-semibold text-sm tracking-widest uppercase mb-4">Portfolio</p>
            <h2 className="reveal delay-100 font-bold text-[#0d1e47]" style={{ fontSize: "clamp(2.2rem,4vw,3.25rem)", letterSpacing: "-0.02em" }}>
              Work We're
              <br />
              <span className="text-[#1a3a8f]">Proud to Show.</span>
            </h2>
          </div>
          <p className="reveal delay-200 text-gray-500 max-w-sm leading-relaxed">
            Every project tells a story. Browse our portfolio to see how we transform homes from ordinary to extraordinary.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="reveal delay-200 flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#1a3a8f] text-white shadow-lg shadow-royal-600/25"
                  : "bg-white text-gray-500 hover:bg-gray-50 border border-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className={`reveal delay-${(i % 4 + 1) * 100} group relative rounded-2xl overflow-hidden cursor-pointer ${
                project.size === "large" ? "row-span-2" : ""
              }`}
              style={{ minHeight: project.size === "large" ? "420px" : "200px" }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Color swatch background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-transform duration-700 group-hover:scale-105`} />

              {/* Color palette dots */}
              <div className="absolute top-4 left-4 flex gap-1.5 z-10">
                {project.colors.map((c, ci) => (
                  <div
                    key={ci}
                    className="w-4 h-4 rounded-full border-2 border-white/40 shadow-sm"
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>

              {/* Category badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className="text-xs font-semibold bg-black/30 backdrop-blur-sm text-white px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>

              {/* Hover overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 transition-opacity duration-400 ${
                  hoveredId === project.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <p className="text-white font-bold text-lg leading-tight mb-1">{project.title}</p>
                <div className="flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 text-[#f56a00]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 15.425 17 13.034 17 10a7 7 0 1 0-14 0c0 3.034 1.698 5.425 3.354 6.986a13.94 13.94 0 0 0 2.758 1.998 7.52 7.52 0 0 0 .282.14l.018.008.006.003ZM10 11.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white/70 text-sm">{project.location}</span>
                </div>
              </div>

              {/* Always-visible bottom gradient on large cards */}
              {project.size === "large" && (
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal delay-300 text-center mt-14">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#1a3a8f] text-[#1a3a8f] font-semibold rounded-xl hover:bg-[#1a3a8f] hover:text-white transition-all duration-300 hover:-translate-y-0.5"
          >
            Start Your Project
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
