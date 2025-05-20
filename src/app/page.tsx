"use client";

import { useEffect, useRef } from "react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ripple effect on hover
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const ripple = document.createElement("div");
      ripple.className =
        "absolute rounded-full bg-white/10 w-20 h-20 -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-ripple";
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;

      containerRef.current.appendChild(ripple);
      setTimeout(() => ripple.remove(), 1000);
    };

    containerRef.current?.addEventListener("mousemove", handleMouseMove);
    return () =>
      containerRef.current?.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-gray-900 flex items-center justify-center cursor-pointer"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full ${
              i % 3 === 0
                ? "bg-purple-600/30"
                : i % 3 === 1
                ? "bg-blue-500/30"
                : "bg-teal-400/30"
            }`}
            style={{
              width: `${Math.random() * 15 + 5}px`,
              height: `${Math.random() * 15 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 15 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}

        {/* Pulsing gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-gray-900 animate-pulse-slow"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 group">
        <h1 className="text-5xl md:text-7xl font-bold italic text-white mb-4 animate-text-glow hover:scale-105 transition-transform duration-300">
          <span className="text-shadow-lg">Welcome to My World</span>
        </h1>
        <h2 className="text-xl md:text-2xl font-medium italic text-gray-300 hover:text-white transition-all duration-500 hover:skew-y-2">
          <span className="text-shadow">Where creativity meets technology</span>
        </h2>
      </div>

      {/* Custom styles */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(
                ${Math.random() * 100 - 50}px,
                ${Math.random() * 100 - 50}px
              )
              rotate(180deg);
          }
          100% {
            transform: translate(0, 0) rotate(360deg);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes text-glow {
          0%,
          100% {
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
          }
          50% {
            text-shadow: 0 0 20px rgba(192, 132, 252, 0.6);
          }
        }

        @keyframes ripple {
          0% {
            transform: translate(-50%, -50%) scale(0.5);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(3);
            opacity: 0;
          }
        }

        .animate-text-glow {
          animation: text-glow 3s ease-in-out infinite;
        }

        .animate-ripple {
          animation: ripple 1s ease-out forwards;
        }

        .text-shadow {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        .text-shadow-lg {
          text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.7),
            0 0 20px rgba(192, 132, 252, 0.4);
        }

        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
