"use client";

import { useEffect, useRef, useState } from "react";

const categories = ["All", "Painting", "Drywall Repair", "Water Restoration"];

const projects = [
  {
    id: 1,
    title: "Closet Painting",
    category: "Painting",
    location: "Dallas-Fort Worth",
    caption: "Closet painting — Dallas-Fort Worth",
    image: "/Closet.JPG",
    step: null,
  },
  {
    id: 9,
    title: "Painting",
    category: "Painting",
    location: "Dallas-Fort Worth",
    caption: "Closet painting — Dallas-Fort Worth",
    image: "/M closet.JPG",
    step: null,
  },
  {
    id: 10,
    title: "Painting",
    category: "Painting",
    location: "Dallas-Fort Worth",
    caption: "Room painting — Dallas-Fort Worth",
    image: "/M room.JPG",
    step: null,
  },
  {
    id: 11,
    title: "Painting",
    category: "Painting",
    location: "Dallas-Fort Worth",
    caption: "Bathroom painting — Dallas-Fort Worth",
    image: "/M bathroom.JPG",
    step: null,
  },
  {
    id: 2,
    title: "Drywall Repair",
    category: "Drywall Repair",
    location: "Dallas-Fort Worth",
    caption: "Drywall repair — Dallas-Fort Worth",
    image: "/62061.JPG",
    step: null,
  },
  {
    id: 3,
    title: "Drywall Repair",
    category: "Drywall Repair",
    location: "Dallas-Fort Worth",
    caption: "Drywall repair — Dallas-Fort Worth",
    image: "/62062.JPG",
    step: null,
  },
  {
    id: 4,
    title: "Vanity Drywall Repair",
    category: "Drywall Repair",
    location: "Dallas-Fort Worth",
    caption: "Vanity drywall repair — seamless finish",
    image: "/vanity drywall repair.JPG",
    step: null,
  },
  {
    id: 5,
    title: "Water Restoration — Step 1",
    category: "Water Restoration",
    location: "Dallas-Fort Worth",
    caption: "Assess damage",
    image: "/61061.JPG",
    step: 1,
  },
  {
    id: 6,
    title: "Water Restoration — Step 2",
    category: "Water Restoration",
    location: "Dallas-Fort Worth",
    caption: "Remove affected material, dry and dehumidify",
    image: "/61062.JPG",
    step: 2,
  },
  {
    id: 7,
    title: "Water Restoration — Step 3",
    category: "Water Restoration",
    location: "Dallas-Fort Worth",
    caption: "Tape and bed, spray texture",
    image: "/61063.JPG",
    step: 3,
  },
  {
    id: 8,
    title: "Water Restoration — Step 4",
    category: "Water Restoration",
    location: "Dallas-Fort Worth",
    caption: "Prime, paint and add the finishing touches",
    image: "/61064.JPG",
    step: 4,
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
            <p className="reveal text-[#fdb822] font-semibold text-sm tracking-widest uppercase mb-4">Our Work</p>
            <h2 className="reveal delay-100 font-bold text-[#0d1e47]" style={{ fontSize: "clamp(2.2rem,4vw,3.25rem)", letterSpacing: "-0.02em" }}>
              Work We're
              <br />
              <span className="text-[#2324cc]">Proud to Show.</span>
            </h2>
          </div>
          <p className="reveal delay-200 text-gray-500 max-w-sm leading-relaxed">
            Real jobs. Real results. See how KC10 Remodels transforms DFW homes and properties from start to finish.
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
                  ? "bg-[#2324cc] text-white shadow-lg shadow-royal-600/25"
                  : "bg-white text-gray-500 hover:bg-gray-50 border border-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className={`reveal delay-${(i % 4 + 1) * 100} group relative rounded-2xl overflow-hidden cursor-pointer`}
              style={{ height: "320px" }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Real photo */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Category badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className="text-xs font-semibold bg-black/40 backdrop-blur-sm text-white px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>

              {/* Step number */}
              {project.step && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-xs font-bold bg-[#fdb822] text-white px-3 py-1 rounded-full">
                    Step {project.step}
                  </span>
                </div>
              )}

              {/* Hover overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 transition-opacity duration-300 ${
                  hoveredId === project.id ? "opacity-100" : "opacity-0"
                }`}
              >
                {project.category !== "Painting" && project.category !== "Drywall Repair" && (
                  <p className="text-white font-bold text-lg leading-tight mb-1">{project.title}</p>
                )}
                {project.category !== "Drywall Repair" && (
                  <p className="text-white/70 text-sm">{project.caption}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal delay-300 text-center mt-14">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#2324cc] text-[#2324cc] font-semibold rounded-xl hover:bg-[#2324cc] hover:text-white transition-all duration-300 hover:-translate-y-0.5"
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
