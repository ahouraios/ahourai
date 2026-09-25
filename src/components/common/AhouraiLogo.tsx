import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  variant?: 'hub' | 'nest' | 'digital';
}

export const AhouraiWingedLogo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  variant = 'hub'
}) => {
  const sizeMap = {
    sm: { w: 36, h: 36, text: 'text-sm' },
    md: { w: 52, h: 48, text: 'text-lg' },
    lg: { w: 84, h: 76, text: 'text-2xl' },
    xl: { w: 120, h: 108, text: 'text-3xl' },
  };

  const currentSize = sizeMap[size];

  // Specific logo styling per brand variant
  const getGradients = () => {
    if (variant === 'nest') {
      return {
        wing1: '#E5C494',
        wing2: '#C8A97E',
        wing3: '#8E7350',
        metal1: '#F5EDE0',
        metal2: '#B89B6C',
        glow: 'rgba(200, 169, 126, 0.4)'
      };
    }
    if (variant === 'digital') {
      return {
        wing1: '#38BDF8',
        wing2: '#0284C7',
        wing3: '#0369A1',
        metal1: '#E0F2FE',
        metal2: '#0EA5E9',
        glow: 'rgba(56, 189, 248, 0.45)'
      };
    }
    // Default Hub
    return {
      wing1: '#00F0FF',
      wing2: '#00A3FF',
      wing3: '#0052CC',
      metal1: '#E2E8F0',
      metal2: '#64748B',
      glow: 'rgba(0, 240, 255, 0.4)'
    };
  };

  const colors = getGradients();

  return (
    <div className={`flex flex-col items-center justify-center select-none ${className}`}>
      <svg
        width={currentSize.w}
        height={currentSize.h}
        viewBox="0 0 120 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 hover:scale-105 drop-shadow-[0_0_15px_rgba(0,210,255,0.3)]"
      >
        <defs>
          <linearGradient id={`wingLeft-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colors.wing1} />
            <stop offset="60%" stopColor={colors.wing2} />
            <stop offset="100%" stopColor={colors.wing3} />
          </linearGradient>
          <linearGradient id={`wingRight-${variant}`} x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={colors.wing1} />
            <stop offset="60%" stopColor={colors.wing2} />
            <stop offset="100%" stopColor={colors.wing3} />
          </linearGradient>
          <linearGradient id={`metal-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colors.metal1} />
            <stop offset="50%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor={colors.metal2} />
          </linearGradient>
          <filter id={`glow-${variant}`} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Left Wing Feathers */}
        <g opacity="0.95" filter={`url(#glow-${variant})`}>
          {/* Top Upper Feather */}
          <path
            d="M 54 48 C 42 32, 24 16, 4 8 C 8 18, 16 32, 32 40 C 40 44, 48 46, 54 48 Z"
            fill={`url(#wingLeft-${variant})`}
          />
          {/* Mid Upper Feather */}
          <path
            d="M 52 52 C 38 42, 18 30, 8 26 C 14 36, 24 48, 38 52 C 44 54, 48 53, 52 52 Z"
            fill={`url(#wingLeft-${variant})`}
          />
          {/* Mid Lower Feather */}
          <path
            d="M 52 58 C 36 54, 18 48, 12 44 C 18 54, 28 62, 42 63 C 46 63, 50 60, 52 58 Z"
            fill={`url(#wingLeft-${variant})`}
          />
          {/* Bottom Feather */}
          <path
            d="M 54 66 C 42 66, 26 62, 20 60 C 26 68, 36 72, 46 71 C 50 70, 53 68, 54 66 Z"
            fill={`url(#wingLeft-${variant})`}
          />
        </g>

        {/* Right Wing Feathers */}
        <g opacity="0.95" filter={`url(#glow-${variant})`}>
          {/* Top Upper Feather */}
          <path
            d="M 66 48 C 78 32, 96 16, 116 8 C 112 18, 104 32, 88 40 C 80 44, 72 46, 66 48 Z"
            fill={`url(#wingRight-${variant})`}
          />
          {/* Mid Upper Feather */}
          <path
            d="M 68 52 C 82 42, 102 30, 112 26 C 106 36, 96 48, 82 52 C 76 54, 72 53, 68 52 Z"
            fill={`url(#wingRight-${variant})`}
          />
          {/* Mid Lower Feather */}
          <path
            d="M 68 58 C 84 54, 102 48, 108 44 C 102 54, 92 62, 78 63 C 74 63, 70 60, 68 58 Z"
            fill={`url(#wingRight-${variant})`}
          />
          {/* Bottom Feather */}
          <path
            d="M 66 66 C 78 66, 94 62, 100 60 C 94 68, 84 72, 74 71 C 70 70, 67 68, 66 66 Z"
            fill={`url(#wingRight-${variant})`}
          />
        </g>

        {/* Central Monogram / Architectural "A" */}
        <g>
          {/* Shadow / Base */}
          <path
            d="M 60 14 L 38 82 L 50 82 L 56 62 L 64 62 L 70 82 L 82 82 L 60 14 Z M 60 36 L 62.5 52 L 57.5 52 L 60 36 Z"
            fill="#0F172A"
          />
          {/* Metallic Core Letter A */}
          <path
            d="M 60 16 L 41 80 L 51 80 L 56.5 60 L 63.5 60 L 69 80 L 79 80 L 60 16 Z M 60 38 L 62 50 L 58 50 L 60 38 Z"
            fill={`url(#metal-${variant})`}
            stroke="#1E293B"
            strokeWidth="0.8"
          />
          {/* Crossbar Accent */}
          <rect
            x="48"
            y="54"
            width="24"
            height="5"
            rx="1.5"
            fill={`url(#wingLeft-${variant})`}
            opacity="0.9"
          />
        </g>
      </svg>

      {showText && (
        <div className="flex flex-col items-center mt-1">
          <span
            className={`font-extrabold tracking-[0.22em] text-slate-100 ${currentSize.text} uppercase`}
            style={{ letterSpacing: '0.25em' }}
          >
            {variant === 'nest' ? 'AHOURAI NEST' : variant === 'digital' ? 'AHOURAI DIGITAL' : 'AHOURAI'}
          </span>
          <span className="text-[10px] text-cyan-400/80 font-medium tracking-widest mt-0.5">
            {variant === 'nest' ? 'آشیانـه اهـورایی' : variant === 'digital' ? 'اهورایی دیـجیتـال' : 'گــروه اهـــورایـی'}
          </span>
        </div>
      )}
    </div>
  );
};
