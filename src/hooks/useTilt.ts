import { useRef, useCallback } from "react";

interface TiltConfig {
  maxTilt?: number;
  scale?: number;
  speed?: number;
}

export const useTilt = (config: TiltConfig = {}) => {
  const { maxTilt = 12, scale = 1.02, speed = 400 } = config;
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;

      const rotateX = (-mouseY / (rect.height / 2)) * maxTilt;
      const rotateY = (mouseX / (rect.width / 2)) * maxTilt;

      const gradientX = ((e.clientX - rect.left) / rect.width) * 100;
      const gradientY = ((e.clientY - rect.top) / rect.height) * 100;

      el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`;
      el.style.transition = `transform ${speed / 4}ms ease-out`;

      const spotlight = el.querySelector(".tilt-spotlight") as HTMLElement;
      if (spotlight) {
        spotlight.style.background = `radial-gradient(circle at ${gradientX}% ${gradientY}%, rgba(255,255,255,0.12) 0%, transparent 60%)`;
        spotlight.style.opacity = "1";
      }
    },
    [maxTilt, scale, speed]
  );

  const handleMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;

    el.style.transform = `perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    el.style.transition = `transform ${speed}ms ease-out`;

    const spotlight = el.querySelector(".tilt-spotlight") as HTMLElement;
    if (spotlight) {
      spotlight.style.opacity = "0";
    }
  }, [speed]);

  return { ref, handleMouseMove, handleMouseLeave };
};
