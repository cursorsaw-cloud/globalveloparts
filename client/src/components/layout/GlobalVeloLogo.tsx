interface GlobalVeloLogoProps {
  className?: string;
}

export function GlobalVeloLogo({ className = "" }: GlobalVeloLogoProps) {
  return (
    <svg
      viewBox="0 0 220 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="GlobalVelo"
      className={className}
      fill="none"
    >
      <text
        x="0"
        y="38"
        fontFamily="'Arial', 'Helvetica Neue', sans-serif"
        fontStyle="italic"
        fontWeight="700"
        fontSize="36"
        letterSpacing="-0.5"
        fill="#ffffff"
      >
        Global
      </text>
      <text
        x="113"
        y="38"
        fontFamily="'Arial', 'Helvetica Neue', sans-serif"
        fontStyle="italic"
        fontWeight="900"
        fontSize="36"
        letterSpacing="-0.5"
        fill="#7EC800"
      >
        Velo
      </text>
      <line x1="2" y1="50" x2="215" y2="50" stroke="#7EC800" strokeWidth="2.5" strokeDasharray="18 6" strokeLinecap="round" />
    </svg>
  );
}
