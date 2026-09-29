"use client";

import { useEffect, useRef } from "react";

export default function MouseFollower() {
  const circleRef = useRef<HTMLDivElement>(null);

  const mouse = useRef({
    x: 0,
    y: 0,
  });

  const position = useRef({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      if (circleRef.current) {
        circleRef.current.style.opacity = "1";
      }
    };

    const handleMouseLeave = () => {
      if (circleRef.current) {
        circleRef.current.style.opacity = "0";
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    let animationFrame: number;

    const animate = () => {
      const speed = 0.12;

      position.current.x += (mouse.current.x - position.current.x) * speed;

      position.current.y += (mouse.current.y - position.current.y) * speed;

      if (circleRef.current) {
        circleRef.current.style.transform = `
          translate3d(
            ${position.current.x}px,
            ${position.current.y}px,
            0
          )
          translate(-50%, -50%)
        `;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      ref={circleRef}
      style={{
        width: "13px",
        height: "13px",
        backgroundColor: "#d7b273",
        borderRadius: "50%",
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: 99999,
        pointerEvents: "none",
        opacity: 0,
      }}
    />
  );
}
