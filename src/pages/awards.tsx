import { awardsData } from "../consts/Awards";
import { ExternalLink, Trophy, Award as AwardIcon } from "lucide-react";

export default function Awards() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden px-4 sm:px-6 pt-24 pb-20">
      {/* Background Image Container */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-90 scale-105"
          style={{ backgroundImage: "url('/story/storyboard_menu.jpeg')" }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/60 to-black" />
      </div>

      <main className="max-w-4xl mx-auto relative z-10">

        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-[#b53389]/10 text-[#b53389] border border-[#b53389]/30 rounded-full text-xs font-mono uppercase tracking-widest mb-3">
            Hall of Fame
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-[#04bade] mb-3">
            Awards & Recognitions
          </h1>
          <p className="text-white/70 text-sm sm:text-base max-w-lg mx-auto">
            Milestones and accolades collected along the journey from sea to software.
          </p>
        </div>

        {/* Awards Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {awardsData.map((award) => (
            <div
              key={award.id}
              className="group relative flex flex-col justify-between p-6 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-md hover:border-[#04bade]/50 transition-all duration-300 shadow-xl hover:shadow-[#04bade]/10"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono bg-[#04bade]/10 text-[#04bade] border border-[#04bade]/30">
                    {award.isWinner ? <Trophy size={12} /> : <AwardIcon size={12} />}
                    {award.badgeText}
                  </span>
                  <span className="text-xs font-mono text-white/40">{award.year}</span>
                </div>

                <h2 className="text-xl font-bold text-white group-hover:text-[#04bade] transition-colors mb-1">
                  {award.title}
                </h2>

                <p className="text-xs text-[#b53389] font-mono mb-4">
                  {award.organization} • {award.category}
                </p>

                <p className="text-sm text-white/80 leading-relaxed font-['Lexend'] mb-6">
                  {award.description}
                </p>
              </div>

              {award.link && (
                <a
                  href={award.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono text-[#04bade] hover:underline mt-auto"
                >
                  <span>View Official Listing</span>
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}