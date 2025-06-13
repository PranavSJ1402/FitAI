// components/RevealOnScroll.tsx
"use client";

import { useInView } from "react-intersection-observer";

export default function RevealOnScroll({ children }: { children: React.ReactNode }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className="transition-opacity duration-700 ease-out transform"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
      }}
    >
      {children}
    </div>
  );
}
