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

  // Keyboard navigation with left/right arrow keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isTransitioning) return;
      if (e.key === "ArrowLeft" && prevStory) {
        navigate(`/storyboard/${prevStory.level}/${prevStory.slug}`);
      } else if (e.key === "ArrowRight" && nextStory) {
        navigate(`/storyboard/${nextStory.level}/${nextStory.slug}`);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevStory, nextStory, isTransitioning, navigate]);

  if (!activeStory) return null;

  const chapterImages = [activeStory.image1, activeStory.image2].filter(
    (src): src is string => Boolean(src)
  );

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed relative overflow-x-hidden transition-all duration-700"
      style={{ backgroundImage: `url(${activeStory.background})` }}
    >
      <div className="absolute inset-0 bg-black/60" />

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

            {chapterImages.length > 0 && (
              <div
                className={`grid gap-4 mb-6 ${
                  chapterImages.length > 1 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 max-w-lg mx-auto"
                }`}
              >
                {chapterImages.map((src) => (
                  <div
                    key={src}
                    className="aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-black/40"
                  >
                    <img
                      src={src}
                      alt={activeStory.label}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}

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

          <Link
            to="/storyboard"
            className="mt-12 sm:mt-16 inline-flex items-center gap-2 px-3 py-1.5 text-xs sm:text-sm text-white/50 hover:text-[#04bade] transition-colors"
          >
            <Home size={16} />
            <span>All Levels</span>
          </Link>

        </div>
      </main>

      {/*  Side Navigation Arrows  */}
      {prevStory && (
        <Link
          to={`/storyboard/${prevStory.level}/${prevStory.slug}`}
          className={`fixed left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-black/40 border border-white/10 backdrop-blur-md text-white/70 hover:text-[#04bade] hover:bg-[#04bade]/20 hover:border-[#04bade]/40 transition-all ${isTransitioning ? "pointer-events-none" : ""}`}
          aria-label="Previous chapter"
        >
          <ArrowLeft className="w-5 h-5 sm:w-7 sm:h-7" />
        </Link>
      )}

      {nextStory && (
        <Link
          to={`/storyboard/${nextStory.level}/${nextStory.slug}`}
          className={`fixed right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-black/40 border border-white/10 backdrop-blur-md text-white/70 hover:text-[#04bade] hover:bg-[#04bade]/20 hover:border-[#04bade]/40 transition-all ${isTransitioning ? "pointer-events-none" : ""}`}
          aria-label="Next chapter"
        >
          <ArrowRight className="w-5 h-5 sm:w-7 sm:h-7" />
        </Link>
      )}
    </div>
  );
}