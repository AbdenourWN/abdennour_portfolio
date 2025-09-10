// components/ui/animated-arrow.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { animate } from "animejs";

interface AnimatedArrowProps {
  startRef: React.RefObject<HTMLElement | null>;
  endRef: React.RefObject<HTMLElement | null>;
  containerRef: React.RefObject<HTMLElement | null>;
}

export const AnimatedArrow = ({
  startRef,
  endRef,
  containerRef,
}: AnimatedArrowProps) => {
  const pathRef = useRef<SVGPathElement>(null);
  const [pathD, setPathD] = useState("");

  // --- PATH CALCULATION (UNCHANGED, as requested) ---
  useEffect(() => {
    const calculatePath = () => {
      if (!startRef.current || !endRef.current || !containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const startRect = startRef.current.getBoundingClientRect();
      const endRect = endRef.current.getBoundingClientRect();

      const startX = startRect.left - containerRect.left + startRect.width / 2;
      const startY = startRect.bottom - containerRect.top;
      const endX = endRect.left - containerRect.left + endRect.width / 2;
      const endY = endRect.top - containerRect.top;
      const controlX1 = startX + 100;
      const controlY1 = startY + 75;
      const controlX2 = endX - 10;
      const controlY2 = endY - 5;

      setPathD(
        `M ${startX} ${startY - 5 } C ${controlX1} ${controlY1}, ${
          controlX2
        } ${controlY2}, ${endX - 5} ${endY + 125}`
      );
    };

    calculatePath();
    window.addEventListener("resize", calculatePath);
    return () => window.removeEventListener("resize", calculatePath);
  }, [startRef, endRef, containerRef]);

  // --- ANIMATION LOGIC (ONLY CHANGE IS HERE) ---
  useEffect(() => {
    if (pathRef.current && pathD) {
      const pathElement = pathRef.current;
      const pathLength = pathElement.getTotalLength();
      pathElement.style.strokeDasharray = `${pathLength}`;
      pathElement.style.strokeDashoffset = `${pathLength}`;

      animate(
        pathElement,
        {
          strokeDashoffset: [pathLength, 0],
          easing: "easeInOutSine",
          duration: 1500,
          delay: 200,
          loop: 3,
        }
      );
    }
  }, [pathD]);

  // --- SVG RENDERING (UNCHANGED) ---
  return (
    <svg
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 15 }}
    >
      <defs>
        <linearGradient
          id="arrow-gradient-final"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
      <path
        ref={pathRef}
        d={pathD}
        fill="none"
        stroke="url(#arrow-gradient-final)"
        strokeWidth="1.5"
      />
    </svg>
  );
};