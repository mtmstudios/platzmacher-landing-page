interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

const Logo = ({ variant = "light", className = "" }: LogoProps) => {
  const iconColor = variant === "light" ? "#FF5C00" : "white";
  const textColor = variant === "light" ? "#1a1a1a" : "white";
  const dieColor = variant === "light" ? "#FF5C00" : "rgba(255,255,255,0.8)";

  return (
    <a
      href="#"
      className={`inline-flex items-center shrink-0 ${className}`}
      aria-label="die Platzmacher – Zurück zur Startseite"
    >
      <svg
        width="178"
        height="46"
        viewBox="0 0 178 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Frame corners – symbolise "Platz schaffen" */}
        <polyline points="1,13 1,3 11,3"   stroke={iconColor} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="23,3 33,3 33,13"  stroke={iconColor} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="1,33 1,43 11,43"  stroke={iconColor} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="23,43 33,43 33,33" stroke={iconColor} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>

        {/* "die" – italic, smaller, brand accent */}
        <text
          x="44" y="17"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontStyle="italic"
          fontSize="12"
          fill={dieColor}
          letterSpacing={2}
        >
          die
        </text>

        {/* "Platzmacher" – bold, dominant */}
        <text
          x="44" y="39"
          fontFamily="system-ui, -apple-system, 'Segoe UI', Arial, sans-serif"
          fontWeight="900"
          fontSize="21"
          fill={textColor}
          letterSpacing={-0.3}
        >
          Platzmacher
        </text>
      </svg>
    </a>
  );
};

export default Logo;
