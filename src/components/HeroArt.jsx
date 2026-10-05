// Small laptop + plant illustration for the hero panel (pure SVG, no image file).
export default function HeroArt() {
  return (
    <svg className="hero-art" viewBox="0 0 260 190" role="img" aria-label="Laptop showing code">
      <ellipse cx="125" cy="170" rx="110" ry="12" fill="#87CEEB" opacity=".55" />
      <g transform="rotate(-5 110 80)">
        <rect x="45" y="28" width="130" height="88" rx="10" fill="#0B6285" />
        <rect x="55" y="38" width="110" height="68" rx="5" fill="#0E7FA6" />
        <g fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="94,60 80,72 94,84" />
          <polyline points="126,60 140,72 126,84" />
          <line x1="116" y1="56" x2="104" y2="88" />
        </g>
      </g>
      <path d="M22 134h172l-10 18H34z" fill="#0B6285" />
      <rect x="38" y="148" width="140" height="8" rx="4" fill="#87CEEB" />
      <g stroke="#0B6285" strokeWidth="3" strokeLinecap="round" opacity=".7">
        <line x1="185" y1="40" x2="196" y2="28" />
        <line x1="198" y1="52" x2="214" y2="46" />
        <line x1="176" y1="30" x2="178" y2="16" />
      </g>
      <g fill="#0E7FA6">
        <path d="M222 150c-14-6-20-26-8-44 14 8 18 28 8 44z" />
        <path d="M222 150c10-4 28-14 26-36-16 4-28 18-26 36z" fill="#0B6285" />
      </g>
      <path d="M208 150h28l-5 20h-18z" fill="#0B6285" />
    </svg>
  )
}
