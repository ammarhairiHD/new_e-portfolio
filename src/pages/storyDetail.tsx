import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { animate } from "animejs";
import { storyLevels } from "../consts/Storyboard";
import { ArrowLeft, ArrowRight, Home } from "lucide-react";

export default function StoryDetail() {
  const { level, chapter } = useParams<{ level: string; chapter: string }>();
  const navigate = useNavigate();
  const contentRef = useRef<HTMLDivElement>(null);

  // Flatten all chapters into a single searchable array
  const allChapters = storyLevels.flatMap((lvl) =>
    lvl.chapters.map((ch) => ({ ...ch, level: lvl.level }))
  );

  const storyIndex = allChapters.findIndex(
    (item) => String(item.level) === level && item.slug === chapter
  );

  const targetStory = allChapters[storyIndex];

  // Active displayed story state
  const [activeStory, setActiveStory] = useState<(typeof allChapters)[0] | null>(targetStory);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Ref to keep track of previous index for calculating slide direction
  const prevIndexRef = useRef<number>(storyIndex);

  const prevStory = storyIndex > 0 ? allChapters[storyIndex - 1] : null;
  const nextStory = storyIndex < allChapters.length - 1 ? allChapters[storyIndex + 1] : null;

  useEffect(() => {
    if (!targetStory) {
      navigate("/storyboard");
      return;
    }

    if (!activeStory) {
      setActiveStory(targetStory);
      return;
    }

    // Trigger directional slide transition when switching chapters
    if (activeStory.level !== targetStory.level || activeStory.slug !== targetStory.slug) {
      if (!contentRef.current) return;

      setIsTransitioning(true);

      // Determine slide direction (isNext: user went forward vs backward)
      const isNext = storyIndex > prevIndexRef.current;
      prevIndexRef.current = storyIndex;

      // Offsets based on direction
      const exitX = isNext ? -50 : 50;  // Exit left if going Next, exit right if going Prev
      const enterX = isNext ? 50 : -50; // Enter from right if going Next, enter from left if going Prev

      // Phase 1: Slide OUT current content
      animate(contentRef.current, {
        opacity: [1, 0],
        translateX: [0, exitX],
        duration: 250,
        easing: "easeInQuad",
        onComplete: () => {
          // Swap text data
          setActiveStory(targetStory);

          if (!contentRef.current) return;
          contentRef.current.style.transform = `translateX(${enterX}px)`;

          // Phase 2: Slide IN new content
          animate(contentRef.current, {
            opacity: [0, 1],
            translateX: [enterX, 0],
            duration: 350,
            easing: "easeOutQuad",
            onComplete: () => setIsTransitioning(false),
          });
        },
      });
    }
  }, [targetStory, navigate, activeStory, storyIndex]);

  if (!activeStory) return null;

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed relative overflow-x-hidden transition-all duration-700"
      style={{ backgroundImage: `url(${activeStory.background})` }}
    >
      <div className="absolute inset-0 bg-black/85" />

      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-24 pb-20">
        <div className="max-w-2xl w-full text-center text-white">
          
          {/* Animated Text Block  */}
          <div ref={contentRef}>
            <span className="inline-block px-3 py-1 bg-[#04bade]/10 text-[#04bade] border border-[#04bade]/30 rounded-full text-xs font-mono uppercase tracking-widest mb-4">
              Level {activeStory.level}
            </span>
            
            <h1 className="text-3xl sm:text-5xl font-bold text-[#04bade] mb-2 leading-tight">
              {activeStory.label}
            </h1>
            
            <p className="text-[#b53389] text-base sm:text-lg mb-8 font-medium">{activeStory.year}</p>

            <p className=" sm:text-lg leading-relaxed mb-6 font-['Lexend'] text-white/90">
              {activeStory.description}
            </p>

            {activeStory.story && (
              <p className="font-['Lexend'] sm:text-lg leading-relaxed mb-6 text-white/90">
                {activeStory.story}
              </p>
            )}

            {activeStory.quote && (
              <blockquote className="mt-8 text-base sm:text-lg italic text-[#b53389] border-l-4 border-[#b53389] pl-4 text-left">
                {activeStory.quote}
              </blockquote>
            )}
          </div>

          {/*  Navigation Controls  */}
          <div className="mt-12 sm:mt-16 w-full max-w-xl mx-auto">
            <nav className={`flex flex-col sm:flex-row items-center justify-between gap-4 p-3 sm:p-4 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-md shadow-2xl ${isTransitioning ? 'pointer-events-none' : ''}`}>
              
              <Link
                to="/storyboard"
                className="flex items-center gap-2 px-3 py-1.5 text-xs sm:text-sm text-white/70 hover:text-[#04bade] transition-colors rounded-lg hover:bg-white/5 order-2 sm:order-1"
              >
                <Home size={16} />
                <span>All Levels</span>
              </Link>

              <div className="flex flex-col items-center gap-1.5 order-1 sm:order-2">
                <div className="flex items-center gap-2">
                  {allChapters.map((item, i) => (
                    <Link
                      key={`${item.level}-${item.slug}`}
                      to={`/storyboard/${item.level}/${item.slug}`}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === storyIndex
                          ? "bg-[#b53389] w-6 scale-100"
                          : "bg-white/30 hover:bg-white/70 w-2"
                      }`}
                      aria-label={`Go to Level ${item.level} Chapter`}
                    />
                  ))}
                </div>
                <span className="text-[11px] font-mono text-white/50">
                  <span className="text-[#04bade]">LVL {activeStory.level}</span> • {storyIndex + 1}/{allChapters.length}
                </span>
              </div>

              <div className="flex items-center gap-2 order-3">
                {prevStory ? (
                  <Link
                    to={`/storyboard/${prevStory.level}/${prevStory.slug}`}
                    className="p-2 sm:px-3 sm:py-1.5 rounded-lg bg-white/5 hover:bg-[#04bade]/20 text-white/80 hover:text-[#04bade] transition-all flex items-center gap-1 text-xs sm:text-sm font-medium border border-white/5 hover:border-[#04bade]/30"
                  >
                    <ArrowLeft size={16} />
                    <span className="hidden sm:inline">Prev</span>
                  </Link>
                ) : (
                  <span className="p-2 sm:px-3 sm:py-1.5 text-white/20 flex items-center gap-1 text-xs sm:text-sm cursor-not-allowed">
                    <ArrowLeft size={16} />
                  </span>
                )}

                {nextStory ? (
                  <Link
                    to={`/storyboard/${nextStory.level}/${nextStory.slug}`}
                    className="p-2 sm:px-3 sm:py-1.5 rounded-lg bg-white/5 hover:bg-[#04bade]/20 text-white/80 hover:text-[#04bade] transition-all flex items-center gap-1 text-xs sm:text-sm font-medium border border-white/5 hover:border-[#04bade]/30"
                  >
                    <span className="hidden sm:inline">Next</span>
                    <ArrowRight size={16} />
                  </Link>
                ) : (
                  <span className="p-2 sm:px-3 sm:py-1.5 text-white/20 flex items-center gap-1 text-xs sm:text-sm cursor-not-allowed">
                    <ArrowRight size={16} />
                  </span>
                )}
              </div>

            </nav>
          </div>

        </div>
      </main>
    </div>
  );
}