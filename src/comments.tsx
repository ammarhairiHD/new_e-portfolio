import { useEffect, useRef } from "react";
import { animate, svg, stagger } from "animejs";
import { MoveDown } from "lucide-react";
import { comments } from "./consts/Comments";

// --- Animated Page Title ---
function MessageTitle() {
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
      className="w-full max-w-5xl mx-auto"
    >
      <defs>
        <linearGradient id="msgGradient" x1="0%" y1="0%" x2="100%" y2="0%">
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
        fill="url(#msgGradient)"
        fillOpacity="0"
        stroke="url(#msgGradient)"
        strokeWidth="2"
      >
        {Array.from("Message in a Bottle").map((char, i) => (
          <tspan key={i} className="line">
            {char}
          </tspan>
        ))}
      </text>
    </svg>
  );
}

export default function CommentsPage() {
  return (
    <div className="relative min-h-screen text-white mb-20">
      {/* Background */}
      <div
        className="fixed inset-0 bg-cover bg-bottom"
        style={{
          backgroundImage: "url('/comments/message_sea.png')",
          opacity: 0.2,
          zIndex: -1,
        }}
      ></div>

      {/* Hero Section */}
      <header className="h-[90vh] flex flex-col justify-center items-center relative z-10 px-6 text-center">
        <MessageTitle />
        <p className="mt-6 text-lg max-w-2xl text-gray-400">
          Ahoy, mate! Send me a message and I’ll read it for sure. Your feedback
          will help make this portfolio shipshape for the big day!
        </p>
        {/* Google Form link */}
        <div className="mt-12 text-center">
          <a
            href="https://forms.gle/gzKbxeKt8njmrqLn9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#04bade] hover:bg-[#b53389] text-white font-bold py-3 px-6 rounded-full transition-colors"
          >
            Leave a Message
          </a>
        </div>
        <p className="absolute bottom-16 flex flex-row items-center gap-2 text-gray-400">
          <MoveDown />
          scroll down
        </p>
      </header>

      {/* Comments Section */}
      <section className="relative z-10 px-6 py-16 max-w-3xl mx-auto space-y-6">
        {[...comments].reverse().map((comment, index) => (
          <div
            key={index}
            className="bg-[#2a2a2a] p-6 rounded-2xl shadow-lg border border-[#04bade]/30 animate-fade-in-up"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="flex justify-between items-center mb-3">
              <div>
                <p className="text-xl font-semibold">{comment.name}</p>
                <p className="text-sm text-[#b53389]">{comment.role}</p>
              </div>
              <span className="text-[#04bade] font-bold">#{index + 1}</span>
            </div>
            <p className="text-gray-200 leading-relaxed">{comment.message}</p>
          </div>
        ))}
      </section>

      {/* Animations */}
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
