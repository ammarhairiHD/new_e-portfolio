// CustomCursor.tsx
import { useEffect, useRef } from "react";
import * as anime from "animejs";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    if (cursor) {
      const cursorAnimatable = anime.createAnimatable(cursor, {
        translateX: 0,
        translateY: 0,
        easing: "linear",
        duration: 100,
      });

      const handleMouseMove = (e: MouseEvent) => {
        cursorAnimatable.translateX(e.clientX);
        cursorAnimatable.translateY(e.clientY);
      };

      const handleTouchMove = (e: TouchEvent) => {
        const touch = e.touches[0];
        cursorAnimatable.translateX(touch.clientX);
        cursorAnimatable.translateY(touch.clientY);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("touchmove", handleTouchMove);

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("touchmove", handleTouchMove);
      };
    }
  }, []);

  return <div ref={cursorRef} className="custom-cursor" />;
};

export default CustomCursor;
