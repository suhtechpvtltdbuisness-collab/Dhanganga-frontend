import React from "react";

function MovingBanner({
  text = "तेरा सपना सच हो",
  speed = 15,
  direction = "left"
}) {
  const animationName = direction === "right" ? "slide-right" : "slide-left";

  return (
    <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] overflow-hidden my-12.5 h-[80px]">
      {/* Animated gradient background */}
      <div className="relative bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 py-3 shadow-2xl">
        {/* Overlay pattern */}
        <div className="absolute inset-0 bg-black opacity-10"></div>

        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 shimmer"></div>

        {/* Scrolling text */}
        <div className="relative z-10">
          <div
            className="inline-block whitespace-nowrap font-black text-2xl md:text-4xl lg:text-5xl text-white tracking-wide"
            style={{
              animation: `${animationName} ${speed}s linear infinite`,
              textShadow:
                "0 2px 10px rgba(0,0,0,0.3), 0 0 20px rgba(255,255,255,0.2)"
            }}
          >
            {[...Array(8)].map((_, i) => (
              <span key={i} className="inline-block px-8 md:px-12">
                <span className="inline-block animate-pulse-slow">🌟</span>
                <span className="mx-4 md:mx-5">{text}</span>
                <span className="inline-block animate-pulse-slow">🌟</span>
              </span>
            ))}
          </div>
        </div>

        {/* Decorative top border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300"></div>

        {/* Decorative bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300"></div>
      </div>

      <style>{`
        @keyframes slide-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        @keyframes slide-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.15);
          }
        }

        .shimmer {
          animation: shimmer 3s infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }

        /* Pause animation on hover */
        .w-screen:hover div[style*="animation"] {
          animation-play-state: paused;
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          div[style*="animation"],
          .shimmer,
          .animate-pulse-slow {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </div>
  );
}

export default MovingBanner;