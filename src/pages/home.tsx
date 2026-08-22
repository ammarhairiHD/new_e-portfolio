import { Link } from "react-router-dom";
import { Trophy } from "lucide-react";

export default function Home() {
  return (
    <div className="background-container">
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <div className="mb-8 md:mb-12 px-5 text-center max-w-2xl">
          <a
            href="https://www.mwa.my/nominees/2025/personal-portfolio-3/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2  mb-3 px-4 py-2.5 rounded-2xl bg-black/60 border border-[#04bade]/40 text-[#04bade] hover:bg-[#04bade]/10 hover:border-[#04bade] transition-all text-xs font-['Lexend'] backdrop-blur-sm shadow-lg"
          >
            <Trophy size={14} className="text-[#04bade] animate-bounce" />
            <span>MWA 2025 Nominee</span>
          </a>
          <h1 className="text-[#04bade] text-center text-3xl sm:text-5xl font-bold mb-3">
            Code of the Sea
          </h1>
          <h2 className="text-[#b53389] text-center text-base sm:text-xl font-medium">
            Explore{" "}
            <span className="text-[#04bade]">Ammar Hairi's journey</span> from a{" "}
            <span className="text-[#04bade]">marine</span> to a{" "}
            <span className="text-[#04bade]">software engineer</span>.
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/storyboard"
            className="border-2 border-[#b53389] rounded-2xl px-6 py-2.5 hover:border-[#04bade] hover:scale-105 transition-all bg-black/40 backdrop-blur-sm"
          >
            <p className="text-white font-bold tracking-widest text-sm">START</p>
          </Link>
        </div>
      </div>
    </div>
  );
}