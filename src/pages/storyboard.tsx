import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import { storyLevels } from "../consts/Storyboard";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Storyboard() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll(".story-card");
      animate(cards, {
        opacity: [0, 1],
        translateY: [40, 0],
        delay: stagger(100),
        duration: 600,
        easing: "easeOutQuad",
      });
    }
  }, []);

  return (
    <div className="relative min-h-screen text-white py-16 px-6 flex flex-col overflow-hidden">
      {/* Background Image Container */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-90 scale-105"
          style={{ backgroundImage: "url('/story/storyboard_menu.jpeg')" }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/60 to-black" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <header className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#04bade] mb-4">
            My Journey
          </h1>
          <p className="text-white/70 text-lg">Select a level to explore</p>
        </header>

        <div ref={containerRef} className="space-y-16">
          {storyLevels.map((lvl) => (
            <section key={lvl.level}>
              <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-2 backdrop-blur-xs">
                <h2 className="text-2xl font-bold text-[#04bade]">{lvl.title}</h2>
                <span className="text-xs px-2.5 py-1 bg-[#b53389]/20 text-[#b53389] rounded-full border border-[#b53389]/40 font-mono">
                  Level {lvl.level}
                </span>
                <span className="text-gray-500">
                  {lvl.ready}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {lvl.chapters.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/storyboard/${lvl.level}/${item.slug}`}
                    className="story-card group relative overflow-hidden rounded-xl aspect-4/3 opacity-0 border border-white/10 hover:border-[#04bade]/50 transition-colors duration-300"
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${item.background})` }}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/60 to-transparent" />
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <span className="text-[#b53389] text-sm mb-1 font-semibold">{item.year}</span>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#04bade] transition-colors">
                        {item.label}
                      </h3>
                      <p className="text-white/70 text-sm line-clamp-2">
                        {item.description}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-[#04bade] opacity-0 -translate-x-2.5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        <span className="text-sm">Read Chapter</span>
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}