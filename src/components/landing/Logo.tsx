// Logo Cometta (SVG inline, extraído del diseño original).
export function Logo({ width = 148, height = 32 }: { width?: number; height?: number }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 148 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Cometta"
      style={{ display: "block" }}
    >
      <g>
        <path
          d="M5 27C5 27 8.5 18 16 13.5C22.5 9.6 27 6 27 6"
          stroke="#4ade2a"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="M9 25.5C9 25.5 12 19 17.5 15.5"
          stroke="#7c3aed"
          strokeWidth="2.4"
          strokeLinecap="round"
          opacity="0.55"
        />
        <circle cx="24" cy="9" r="6" fill="#7c3aed" />
        <circle cx="26.2" cy="6.8" r="1.7" fill="#fff" opacity="0.85" />
      </g>
      <text
        x="40"
        y="22"
        fontFamily="Geist, system-ui, sans-serif"
        fontSize="19"
        fontWeight="600"
        letterSpacing="-0.4"
        fill="#212529"
      >
        cometta
      </text>
    </svg>
  );
}
