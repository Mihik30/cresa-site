"use client";

import { useEffect, useState } from "react";

export function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {/* Huge Outer Glow - Darker Orange */}
      <div
        className="absolute w-[1800px] h-[1800px] rounded-full blur-[450px] opacity-40"
        style={{
          background: "radial-gradient(circle, rgb(255, 102, 0), transparent 85%)",
          left: position.x - 900,
          top: position.y - 900,
        }}
      />
      {/* Middle Glow - More Intense */}
      <div
        className="absolute w-[1400px] h-[1400px] rounded-full blur-[350px] opacity-50"
        style={{
          background: "radial-gradient(circle, rgb(255, 102, 0), transparent 85%)",
          left: position.x - 700,
          top: position.y - 700,
        }}
      />
      {/* Inner Glow - Strong & Rich Orange */}
      <div
        className="absolute w-[1000px] h-[1000px] rounded-full blur-[250px] opacity-70"
        style={{
          background: "radial-gradient(circle, rgb(255, 102, 0), transparent 85%)",
          left: position.x - 500,
          top: position.y - 500,
        }}
      />
    </div>
  );
}
