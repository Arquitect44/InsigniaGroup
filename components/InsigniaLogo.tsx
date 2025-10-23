export default function InsigniaLogo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer square frame */}
      <rect
        x="5"
        y="5"
        width="90"
        height="90"
        stroke="#d4a574"
        strokeWidth="2.5"
        fill="none"
      />

      {/* Inner filled square */}
      <rect
        x="12"
        y="12"
        width="76"
        height="76"
        fill="#1a1a1a"
      />

      {/* "I" letter */}
      <rect
        x="30"
        y="30"
        width="6"
        height="40"
        fill="#d4a574"
      />

      {/* "G" letter - Redesigned for clarity */}
      <g>
        {/* Top horizontal bar */}
        <rect x="50" y="30" width="20" height="6" fill="#d4a574" />
        {/* Left vertical bar */}
        <rect x="50" y="30" width="6" height="40" fill="#d4a574" />
        {/* Bottom horizontal bar */}
        <rect x="50" y="64" width="20" height="6" fill="#d4a574" />
        {/* Middle horizontal bar (inside cutout) */}
        <rect x="60" y="52" width="10" height="6" fill="#d4a574" />
        {/* Right vertical bar (shorter, for G cutout) */}
        <rect x="64" y="52" width="6" height="18" fill="#d4a574" />
      </g>

      {/* Decorative corner accents */}
      <line x1="5" y1="15" x2="12" y2="15" stroke="#d4a574" strokeWidth="1.5" />
      <line x1="5" y1="85" x2="12" y2="85" stroke="#d4a574" strokeWidth="1.5" />
      <line x1="88" y1="15" x2="95" y2="15" stroke="#d4a574" strokeWidth="1.5" />
      <line x1="88" y1="85" x2="95" y2="85" stroke="#d4a574" strokeWidth="1.5" />
    </svg>
  );
}
