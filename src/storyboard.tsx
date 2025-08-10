import { useEffect, useRef, useState } from "react";
import { animate } from "animejs";
import { storyItems } from "./consts/Storyboard";
import { MoveDown } from "lucide-react";

export default function Storyboard() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const barRef = useRef<HTMLDivElement | null>(null);
  const iconRef = useRef<HTMLDivElement | null>(null);
  const [pageHeight, setPageHeight] = useState<number | null>(null);
  const [activeScene, setActiveScene] = useState(0);

  useEffect(() => {
    function calcHeight() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const totalScenes = storyItems.length;
      const translateMax = w * (totalScenes - 1);
      const scrollHeight = translateMax + h;
      setPageHeight(scrollHeight);
    }

    calcHeight();
    window.addEventListener("resize", calcHeight);
    return () => window.removeEventListener("resize", calcHeight);
  }, []);

  useEffect(() => {
    const totalScenes = storyItems.length;
    if (!pageHeight) return;

    const onScroll = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const translateMax = w * (totalScenes - 1);
      const scrollMax = pageHeight - h;
      const scrollY = Math.min(window.scrollY, scrollMax);
      const tx = Math.min(scrollY, translateMax);

      if (containerRef.current) {
        containerRef.current.style.transform = `translateX(-${tx}px)`;
      }

      const progress = translateMax === 0 ? 0 : tx / translateMax;

      if (barRef.current && iconRef.current) {
        const barWidth = barRef.current.offsetWidth;
        const iconWidth = iconRef.current.offsetWidth;
        const maxX = Math.max(0, barWidth - iconWidth);
        const targetX = progress * maxX;

        animate(iconRef.current, {
          translateX: targetX,
          duration: 260,
          easing: "easeOutQuad",
        });
      }

      const currentScene = Math.round(tx / w);
      setActiveScene((prev) => (prev === currentScene ? prev : currentScene));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pageHeight]);

  useEffect(() => {
    if (!iconRef.current) return;
    const img = iconRef.current.querySelector("img");
    if (!img) return;

    const rotationAnim = animate(img, {
      rotate: "1turn",
      duration: 4000,
      easing: "linear",
      loop: true,
    });

    return () => {
      rotationAnim.pause();
    };
  }, []);

  return (
    <div style={{ height: pageHeight ? `${pageHeight}px` : "200vh" }}>
      {/* Horizontal Scenes */}
      <div
        ref={containerRef}
        className="fixed top-0 left-0 h-screen flex"
        style={{
          width: `${storyItems.length * 100}vw`,
          transition: "transform 0.08s linear",
        }}
      >
        {storyItems.map((item, i) => {
          const isActive = activeScene === i;
          const textStyle = {
            transform: isActive ? "translateX(0)" : "translateX(-50px)",
            opacity: isActive ? 1 : 0,
            transition: "transform 0.5s ease, opacity 0.5s ease",
          };

          return (
            <section
              key={item.id}
              className="relative w-screen h-screen flex items-center justify-center bg-cover bg-center"
              style={{ backgroundImage: `url(${item.background})` }}
            >
              {/* Background overlay */}
              <div className="absolute inset-0 bg-black opacity-80 rounded-lg pointer-events-none" />

              {activeScene === 0 && (
                <p className="absolute bottom-44 flex flex-row items-center gap-2 text-gray-400">
                  <MoveDown />
                  scroll down
                </p>
              )}

              {/* Content container */}
              <div
                className="relative z-10 text-center px-8 text-white max-w-xl pb-16"
                style={textStyle}
              >
                <p className="text-4xl font-bold text-[#04bade]">
                  {item.label}
                </p>
                <p className=" text-[#b53389]">{item.year}</p>
                <p className="mt-4 max-w-2xl text-sm md:text-lg">
                  {item.description}
                </p>

                {item.story && (
                  <p className="mt-4 max-w-2xl text-sm md:text-lg">
                    {item.story}
                  </p>
                )}
                {item.quote && (
                  <p className="mt-6 text-[#b53389] max-w-2xl text-lg">
                    {item.quote}
                  </p>
                )}
              </div>
            </section>
          );
        })}
      </div>

      <div
        className="fixed left-1/2 -translate-x-1/2 bottom-24 w-[70vw] max-w-3xl px-4"
        style={{ pointerEvents: "none" }}
      >
        <div
          ref={barRef}
          className="relative h-1 rounded-full bg-white/20"
          style={{ pointerEvents: "auto" }}
        >
          {/* milestone dots */}
          {storyItems.map((_, i) => {
            const pct =
              storyItems.length === 1 ? 0 : (i / (storyItems.length - 1)) * 100;
            return (
              <div
                key={i}
                className="absolute -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#b53389]"
                style={{ left: `${pct}%`, top: "50%" }}
                aria-hidden
              />
            );
          })}

          {/* moving icon */}
          <div
            ref={iconRef}
            className="absolute -translate-y-1/2 w-10 h-10 bottom-4"
            style={{ left: 0, transform: "translateX(0)" }}
          >
            <img
              src="/headphone.png"
              alt="progress"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
