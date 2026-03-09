interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

/**
 * die Platzmacher – Bold Slash Logo
 * Icon: Double forward-slash (//) on a tinted block
 * Light variant: navbar (white bg) – dark block, orange slashes, dark text
 * Dark variant:  footer / hero    – subtle block, orange slashes, white text
 */
const Logo = ({ variant = "light", className = "" }: LogoProps) => {
  const isLight = variant === "light";

  const blockFill  = isLight ? "#0F172A"             : "rgba(255,255,255,0.08)";
  const slash2     = isLight ? "rgba(255,92,0,0.35)" : "rgba(255,255,255,0.25)";
  const textColor  = isLight ? "#0F172A"             : "#ffffff";

  return (
    <a
      href="#"
      className={`inline-flex items-center shrink-0 ${className}`}
      aria-label="die Platzmacher – Zurück zur Startseite"
    >
      <svg
        width="184"
        height="46"
        viewBox="0 0 184 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Icon block */}
        <rect x="0" y="0" width="44" height="46" rx="6" fill={blockFill} />

        {/* Double forward slash – speed & action */}
        <line x1="12" y1="38" x2="26" y2="8" stroke="#FF5C00" strokeWidth="4.5" strokeLinecap="round" />
        <line x1="24" y1="38" x2="38" y2="8" stroke={slash2}  strokeWidth="4.5" strokeLinecap="round" />

        {/* "die" – italic, light */}
        <text
          x="56" y="18"
          fontFamily="'Poppins', system-ui, sans-serif"
          fontStyle="italic"
          fontWeight="300"
          fontSize="12"
          fill="#FF5C00"
          letterSpacing={3}
          opacity={0.9}
        >
          die
        </text>

        {/* "Platzmacher" – black */}
        <text
          x="56" y="40"
          fontFamily="'Poppins', system-ui, sans-serif"
          fontWeight="900"
          fontSize="21"
          fill={textColor}
          letterSpacing={-0.5}
        >
          Platzmacher
        </text>
      </svg>
    </a>
  );
};

export default Logo;
