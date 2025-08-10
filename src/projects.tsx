import { useEffect, useRef } from "react";
import { animate, svg, stagger } from "animejs";
import { vesselLogItems } from "./consts/Projects";
import type { VesselLogItem } from "./consts/Projects";
import { ShipWheel, Anchor, MoveDown } from "lucide-react";

function VesselLogTitle() {
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
          id="vesselLogGradient"
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
        fill="url(#vesselLogGradient)"
        fillOpacity="0"
        stroke="url(#vesselLogGradient)"
        strokeWidth="2"
      >
        <tspan className="line">V</tspan>
        <tspan className="line">e</tspan>
        <tspan className="line">s</tspan>
        <tspan className="line">s</tspan>
        <tspan className="line">e</tspan>
        <tspan className="line">l</tspan>
        <tspan dx="15" className="line">
          L
        </tspan>
        <tspan className="line">o</tspan>
        <tspan className="line">g</tspan>
      </text>
    </svg>
  );
}

export default function VesselLog() {
  const projects = vesselLogItems.filter((item) => item.type === "project");
  const contributions = vesselLogItems.filter(
    (item) => item.type === "contribution"
  );

  const ProjectCard = ({ item }: { item: VesselLogItem }) => (
    <div
      className="p-4 bg-gray-800 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl border-2"
      style={{
        borderColor: item.type === "project" ? "#b53389" : "#04bade",
      }}
    >
      <img
        src={item.image}
        alt={item.label}
        className="w-full h-48 object-cover rounded-md mb-4 border-2"
        style={{
          borderColor: item.type === "project" ? "#b53389" : "#04bade",
        }}
      />
      <h3 className="text-2xl font-bold font-8bit-retro mb-2 text-white">
        {item.label}
      </h3>
      <p className="text-gray-300 text-sm">{item.description}</p>
    </div>
  );

  return (
    <div className="relative min-h-screen text-white">
      {/* Background layer */}
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/projects/voyage.png')",
          opacity: 0.2,
          zIndex: -1,
        }}
      ></div>

      <header className="text-center h-[95vh] flex flex-col justify-center items-center relative z-10">
        <VesselLogTitle />
        <p className="mt-4 text-xl text-gray-400">
          A record of my digital voyages.
        </p>
        <p className="absolute bottom-24 flex flex-row">
          <MoveDown />
          scroll down
        </p>
      </header>

      <section className="mb-12 relative z-10">
        <h2 className="text-4xl font-bold font-8bit-retro mb-8 border-b-4 pb-2 px-5 inline-block text-[#b53389]">
          <ShipWheel />
          My Voyages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
          {projects.map((item) => (
            <ProjectCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      <section className="mb-20 relative z-10">
        <h2 className="text-4xl font-bold font-8bit-retro mb-8 border-b-4 pb-2 px-5 inline-block text-[#04bade]">
          <Anchor />
          Crew Contributions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
          {contributions.map((item) => (
            <ProjectCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
