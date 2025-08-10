import { useState, useEffect, useRef } from "react";
import { animate, svg, stagger } from "animejs";
import type { SkillItem, SkillCategory } from "./consts/Skills";
import { skillItems } from "./consts/Skills";
import { Code, Server, Database, ToolCase, MoveDown } from "lucide-react";

function NavigationChartTitle() {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const paths = svgRef.current.querySelectorAll<SVGElement>(".line");
    const drawables = svg.createDrawable(paths);

    animate(drawables, {
      draw: ["0 0", "0 1", "1 1"],
      ease: "inOutQuad",
      duration: 2000,
      delay: stagger(150),
      loop: true,
    });

    // Fill fade-in
    animate(paths, {
      fillOpacity: [0, 1],
      delay: 2500,
      duration: 1000,
      easing: "easeInOutQuad",
    });
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 800 200"
      className="w-full max-w-4xl mx-auto"
    >
      <defs>
        <linearGradient
          id="navigationChartGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="#b53389" />
          <stop offset="100%" stopColor="#04bade" />
        </linearGradient>
      </defs>

      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="80"
        fontFamily="'Pixelify Sans', monospace"
        fill="url(#navigationChartGradient)"
        fillOpacity="0"
        stroke="url(#navigationChartGradient)"
        strokeWidth="2"
      >
        <tspan className="line">N</tspan>
        <tspan className="line">a</tspan>
        <tspan className="line">v</tspan>
        <tspan className="line">i</tspan>
        <tspan className="line">g</tspan>
        <tspan className="line">a</tspan>
        <tspan className="line">t</tspan>
        <tspan className="line">i</tspan>
        <tspan className="line">o</tspan>
        <tspan className="line">n</tspan>
        <tspan dx="15" className="line">
          C
        </tspan>
        <tspan className="line">h</tspan>
        <tspan className="line">a</tspan>
        <tspan className="line">r</tspan>
        <tspan className="line">t</tspan>
      </text>
    </svg>
  );
}

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | "all">(
    "all"
  );
  const [filteredSkills, setFilteredSkills] = useState<SkillItem[]>(skillItems);

  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredSkills(skillItems);
    } else {
      setFilteredSkills(
        skillItems.filter((skill) => skill.category === activeCategory)
      );
    }
  }, [activeCategory]);

  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>(".skill-item");
    items.forEach((item, index) => {
      item.animate(
        [
          { opacity: 0, transform: "translateY(20px)" },
          { opacity: 1, transform: "translateY(0)" },
        ],
        {
          duration: 300,
          delay: index * 50,
          easing: "ease-out",
          fill: "forwards",
        }
      );
    });
  }, [filteredSkills]);

  const getCategoryIcon = (category: SkillCategory) => {
    switch (category) {
      case "language":
        return <Code size={20} className="inline-block mr-2" />;
      case "framework":
        return <Server size={20} className="inline-block mr-2" />;
      case "database":
        return <Database size={20} className="inline-block mr-2" />;
      case "tool":
        return <ToolCase size={20} className="inline-block mr-2" />;
      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-screen text-white">
      {/* Background */}
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/skills/inside_the_ships.png')",
          opacity: 0.5,
          zIndex: -1,
        }}
      ></div>

      {/* Fullscreen header with animation */}
      <header className="text-center h-[95vh] flex flex-col justify-center items-center relative z-10">
        <NavigationChartTitle />
        <p className="mt-4 text-xl text-gray-400">
          The technologies and tools I navigate with.
        </p>
        <p className="absolute bottom-24 flex flex-row items-center gap-2 text-gray-400">
          <MoveDown />
          scroll down
        </p>
      </header>

      {/* Skills section */}
      <section className="relative z-10 my-20 p-8 md:p-16">
        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-6 py-2 rounded-full font-8bit-retro transition-all duration-300 ${
              activeCategory === "all"
                ? "bg-[#b53389] text-white"
                : "bg-gray-700 text-gray-300 hover:bg-[#b53389]"
            }`}
          >
            All
          </button>
          {["language", "framework", "database", "tool"].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category as SkillCategory)}
              className={`px-6 py-2 rounded-full font-8bit-retro transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#04bade] text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-[#04bade]"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}s
            </button>
          ))}
        </div>

        {/* Skills */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="skill-item p-2 bg-gray-800 rounded-lg shadow-lg flex items-center justify-between border-2 border-transparent transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                borderColor:
                  skill.category === "language" ? "#b53389" : "#04bade",
              }}
            >
              <div className="flex items-center">
                {getCategoryIcon(skill.category)}
                <span className="text-lg font-bold">{skill.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
