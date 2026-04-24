'use client';

export default function TruckAnimation() {
  return (
    <div className="relative w-full h-full overflow-hidden pointer-events-none">
      {/* Sky gradient already provided by parent */}

      {/* Distant Lisbon skyline silhouette */}
      <svg
        className="absolute bottom-[18%] left-0 w-full h-auto opacity-40"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="skyline" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#bcdfff" />
            <stop offset="100%" stopColor="#82c5ff" />
          </linearGradient>
        </defs>
        <path
          fill="url(#skyline)"
          d="M0,120 L0,80 L40,80 L40,60 L80,60 L80,70 L120,70 L120,40 L160,40 L160,55 L200,55 L200,30 L230,30 L230,20 L260,20 L260,50 L300,50 L300,65 L340,65 L340,45 L380,45 L380,55 L420,55 L420,35 L460,35 L460,50 L500,50 L500,25 L540,25 L540,45 L580,45 L580,60 L620,60 L620,40 L660,40 L660,55 L700,55 L700,35 L740,35 L740,50 L780,50 L780,30 L820,30 L820,45 L860,45 L860,60 L900,60 L900,40 L940,40 L940,55 L980,55 L980,35 L1020,35 L1020,50 L1060,50 L1060,65 L1100,65 L1100,45 L1140,45 L1140,55 L1200,55 L1200,120 Z"
        />
        {/* Scattered windows */}
        <g fill="#f0f7ff" opacity="0.6">
          <rect x="50" y="68" width="3" height="4" />
          <rect x="60" y="68" width="3" height="4" />
          <rect x="130" y="50" width="3" height="5" />
          <rect x="140" y="50" width="3" height="5" />
          <rect x="240" y="30" width="3" height="4" />
          <rect x="310" y="55" width="3" height="4" />
          <rect x="390" y="50" width="3" height="4" />
          <rect x="510" y="35" width="3" height="4" />
          <rect x="710" y="45" width="3" height="4" />
          <rect x="790" y="40" width="3" height="4" />
          <rect x="870" y="50" width="3" height="4" />
          <rect x="990" y="45" width="3" height="4" />
          <rect x="1110" y="55" width="3" height="4" />
        </g>
      </svg>

      {/* Road line */}
      <div className="absolute bottom-[15%] left-0 right-0 h-[2px] bg-brand-200" />
      <div
        className="absolute bottom-[15%] left-0 right-0 h-[1px]"
        style={{
          backgroundImage: 'repeating-linear-gradient(to right, #82c5ff 0, #82c5ff 20px, transparent 20px, transparent 40px)',
          transform: 'translateY(8px)',
        }}
      />

      {/* Floating boxes for atmosphere */}
      <svg
        className="absolute top-[15%] left-[10%] w-12 h-12 animate-float opacity-60"
        viewBox="0 0 40 40"
        aria-hidden="true"
      >
        <rect x="4" y="8" width="32" height="28" fill="#f59e0b" stroke="#d97706" strokeWidth="1.5" rx="1" />
        <path d="M4 8 L20 2 L36 8" fill="#fbbf24" stroke="#d97706" strokeWidth="1.5" />
        <path d="M20 2 L20 36" stroke="#d97706" strokeWidth="1" opacity="0.5" />
      </svg>

      <svg
        className="absolute top-[25%] right-[12%] w-10 h-10 animate-float-slow opacity-60"
        viewBox="0 0 40 40"
        aria-hidden="true"
      >
        <rect x="4" y="8" width="32" height="28" fill="#f59e0b" stroke="#d97706" strokeWidth="1.5" rx="1" />
        <path d="M4 8 L20 2 L36 8" fill="#fbbf24" stroke="#d97706" strokeWidth="1.5" />
      </svg>

      <svg
        className="absolute top-[8%] right-[28%] w-8 h-8 animate-float opacity-50"
        style={{ animationDelay: '1.5s' }}
        viewBox="0 0 40 40"
        aria-hidden="true"
      >
        <rect x="4" y="8" width="32" height="28" fill="#f59e0b" stroke="#d97706" strokeWidth="1.5" rx="1" />
        <path d="M4 8 L20 2 L36 8" fill="#fbbf24" stroke="#d97706" strokeWidth="1.5" />
      </svg>

      {/* The truck - drives across the road */}
      <div className="absolute bottom-[15%] left-0 w-44 md:w-56 animate-truck-drive" style={{ transform: 'translateY(2px)' }}>
        <svg viewBox="0 0 220 100" className="w-full h-auto" aria-hidden="true">
          {/* Cargo container */}
          <rect x="10" y="20" width="130" height="60" fill="#ffffff" stroke="#0368e6" strokeWidth="2.5" rx="3" />
          <rect x="15" y="25" width="120" height="50" fill="#f0f7ff" />
          {/* Logo on truck */}
          <text x="75" y="54" textAnchor="middle" fontFamily="system-ui" fontSize="10" fontWeight="700" fill="#0368e6">
            REMOVALS
          </text>
          <text x="75" y="64" textAnchor="middle" fontFamily="system-ui" fontSize="8" fontWeight="600" fill="#0368e6">
            LISBON
          </text>

          {/* Cab */}
          <path
            d="M140 80 L140 40 Q140 35 145 35 L175 35 L185 55 L200 55 Q205 55 205 60 L205 80 Z"
            fill="#0368e6"
            stroke="#0552b8"
            strokeWidth="2"
          />
          {/* Windscreen */}
          <path
            d="M148 40 L148 52 L183 52 L175 40 Z"
            fill="#bcdfff"
            stroke="#0552b8"
            strokeWidth="1.5"
          />
          {/* Headlight */}
          <circle cx="201" cy="68" r="3" fill="#fbbf24" />
          {/* Door line */}
          <line x1="162" y1="52" x2="162" y2="78" stroke="#0552b8" strokeWidth="1" />

          {/* Wheels */}
          <g>
            <circle cx="40" cy="82" r="10" fill="#1f2937" />
            <circle cx="40" cy="82" r="4" fill="#6b7280" className="origin-center">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 40 82"
                to="360 40 82"
                dur="0.8s"
                repeatCount="indefinite"
              />
            </circle>
            <line x1="40" y1="78" x2="40" y2="86" stroke="#9ca3af" strokeWidth="1">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 40 82"
                to="360 40 82"
                dur="0.8s"
                repeatCount="indefinite"
              />
            </line>
          </g>
          <g>
            <circle cx="100" cy="82" r="10" fill="#1f2937" />
            <circle cx="100" cy="82" r="4" fill="#6b7280" />
            <line x1="100" y1="78" x2="100" y2="86" stroke="#9ca3af" strokeWidth="1">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 100 82"
                to="360 100 82"
                dur="0.8s"
                repeatCount="indefinite"
              />
            </line>
          </g>
          <g>
            <circle cx="185" cy="82" r="10" fill="#1f2937" />
            <circle cx="185" cy="82" r="4" fill="#6b7280" />
            <line x1="185" y1="78" x2="185" y2="86" stroke="#9ca3af" strokeWidth="1">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 185 82"
                to="360 185 82"
                dur="0.8s"
                repeatCount="indefinite"
              />
            </line>
          </g>
        </svg>
      </div>
    </div>
  );
}
