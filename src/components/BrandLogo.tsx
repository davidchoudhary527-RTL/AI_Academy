import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: number;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = '', size = 36 }) => {
  return (
    <div 
      className={`relative inline-flex items-center justify-center shrink-0 rounded-2xl overflow-hidden shadow-sm transition-transform hover:scale-105 ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7953f5" />
            <stop offset="50%" stopColor="#6355f3" />
            <stop offset="100%" stopColor="#5364f3" />
          </linearGradient>
          <linearGradient id="coreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
          <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Purple Rounded Square Background */}
        <rect width="100" height="100" rx="26" fill="url(#bgGrad)" />

        {/* Outer dashed halo / orbit */}
        <ellipse 
          cx="50" 
          cy="62" 
          rx="32" 
          ry="12" 
          stroke="rgba(255,255,255,0.4)" 
          strokeWidth="3.5" 
          strokeDasharray="4 4" 
        />

        {/* Inner solid ring */}
        <ellipse 
          cx="50" 
          cy="53" 
          rx="25" 
          ry="9" 
          stroke="rgba(238,242,255,0.9)" 
          strokeWidth="4" 
          fill="none" 
        />

        {/* Floating cross & orb anchor */}
        <g filter="url(#glowFilter)">
          {/* Top cross indicator */}
          <path 
            d="M 50 18 L 50 25 M 46.5 21.5 L 53.5 21.5" 
            stroke="#ffffff" 
            strokeWidth="3" 
            strokeLinecap="round" 
          />

          {/* White outer sphere ring */}
          <circle cx="50" cy="38" r="14" fill="#ffffff" />
          
          {/* Cyan/Blue core planetary orb */}
          <circle cx="50" cy="38" r="8.5" fill="url(#coreGrad)" />

          {/* Sparkles / Gold Stars */}
          {/* Right Star */}
          <path 
            d="M 70 34 Q 72 37 75 38 Q 72 39 70 42 Q 68 39 65 38 Q 68 37 70 34 Z" 
            fill="#fef08a" 
          />
          {/* Left Ring Star */}
          <path 
            d="M 28 50 Q 29.5 52 32 53 Q 29.5 54 28 56 Q 26.5 54 24 53 Q 26.5 52 28 50 Z" 
            fill="#fef08a" 
          />
        </g>
      </svg>
    </div>
  );
};
