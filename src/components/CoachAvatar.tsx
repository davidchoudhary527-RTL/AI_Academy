import React from 'react';

interface CoachAvatarProps {
  className?: string;
  size?: number;
}

export const CoachAvatar: React.FC<CoachAvatarProps> = ({ className = '', size = 32 }) => {
  return (
    <div 
      className={`relative inline-flex items-center justify-center shrink-0 rounded-full overflow-hidden shadow-xs border-2 border-white ring-1 ring-indigo-200 ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="avatarBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef3c7" />
            <stop offset="40%" stopColor="#fed7aa" />
            <stop offset="100%" stopColor="#ccfbf1" />
          </linearGradient>
          <clipPath id="circleClip">
            <circle cx="50" cy="50" r="50" />
          </clipPath>
        </defs>

        <g clipPath="url(#circleClip)">
          {/* Background circle gradient */}
          <rect width="100" height="100" fill="url(#avatarBg)" />
          
          {/* Subtle background shapes */}
          <circle cx="20" cy="35" r="12" fill="#fde047" opacity="0.3" />
          <polygon points="85,30 95,45 75,45" fill="#f43f5e" opacity="0.2" />
          <polygon points="85,60 92,72 78,72" fill="#38bdf8" opacity="0.25" />

          {/* Hair back layer */}
          <ellipse cx="50" cy="48" rx="30" ry="28" fill="#58311b" />
          <ellipse cx="28" cy="54" rx="14" ry="18" fill="#6c3c21" />
          <ellipse cx="72" cy="54" rx="14" ry="18" fill="#6c3c21" />

          {/* Shoulders & Sweater */}
          <path 
            d="M 16 100 C 18 78 34 70 50 70 C 66 70 82 78 84 100 Z" 
            fill="#475569" 
          />
          {/* Sweater Collar */}
          <ellipse cx="50" cy="73" rx="16" ry="6" fill="#334155" />
          <path d="M 40 73 Q 50 78 60 73" stroke="#64748b" strokeWidth="2" fill="none" />

          {/* Neck */}
          <rect x="44" y="58" width="12" height="14" rx="4" fill="#fbcfe8" />

          {/* Head */}
          <ellipse cx="50" cy="46" rx="20" ry="22" fill="#fed7aa" />

          {/* Ears */}
          <circle cx="30" cy="48" r="5" fill="#fbcfe8" />
          <circle cx="70" cy="48" r="5" fill="#fbcfe8" />

          {/* Hair front waves */}
          <path 
            d="M 28 36 C 30 22 45 18 52 18 C 65 18 74 26 73 38 C 68 30 58 26 50 28 C 42 30 35 34 28 36 Z" 
            fill="#784426" 
          />
          <path 
            d="M 28 36 C 24 45 22 55 27 62 C 30 52 32 46 35 44 Z" 
            fill="#6c3c21" 
          />
          <path 
            d="M 72 36 C 76 45 78 55 73 62 C 70 52 68 46 65 44 Z" 
            fill="#6c3c21" 
          />

          {/* Eyebrows */}
          <path d="M 37 38 Q 43 36 46 39" stroke="#58311b" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M 54 39 Q 57 36 63 38" stroke="#58311b" strokeWidth="1.8" strokeLinecap="round" />

          {/* Eyes */}
          <circle cx="42" cy="43" r="3.8" fill="#3b2010" />
          <circle cx="43.2" cy="41.8" r="1.3" fill="#ffffff" />
          <circle cx="58" cy="43" r="3.8" fill="#3b2010" />
          <circle cx="59.2" cy="41.8" r="1.3" fill="#ffffff" />

          {/* Smile */}
          <path d="M 44 53 Q 50 58 56 53" stroke="#831843" strokeWidth="1.8" fill="#be185d" strokeLinecap="round" />
          <path d="M 46 53 Q 50 55 54 53" fill="#ffffff" />

          {/* Cheeks */}
          <circle cx="36" cy="50" r="3" fill="#fda4af" opacity="0.6" />
          <circle cx="64" cy="50" r="3" fill="#fda4af" opacity="0.6" />

          {/* Round Glasses */}
          <circle cx="42" cy="43" r="8" stroke="#94a3b8" strokeWidth="1.6" fill="rgba(255,255,255,0.2)" />
          <circle cx="58" cy="43" r="8" stroke="#94a3b8" strokeWidth="1.6" fill="rgba(255,255,255,0.2)" />
          <path d="M 50 43 L 50 43" stroke="#94a3b8" strokeWidth="1.6" strokeLinecap="round" />
          <line x1="49" y1="43" x2="51" y2="43" stroke="#94a3b8" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
};
