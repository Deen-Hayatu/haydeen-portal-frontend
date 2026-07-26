interface MedPalLogoProps {
  size?: number;
  showText?: boolean;
  className?: string;
}

const STAR_PATH =
  "M50 4 L61.8 35.3 L95.1 36.8 L68.5 57.1 L77.9 89.1 L50 70 L22.1 89.1 L31.5 57.1 L4.9 36.8 L38.2 35.3 Z";

/**
 * MedPal brand lockup: the Ghana Black Star in a gold ring, beside the wordmark.
 * Ported from MedPal's own Brand.tsx/BlackStar.tsx so the mark on this site
 * matches the mark inside the MedPal app exactly.
 */
const MedPalLogo = ({ size = 22, showText = true, className = "" }: MedPalLogoProps) => {
  const ringSize = size + 14;

  return (
    <span className={`inline-flex items-center gap-[0.4em] ${className}`}>
      <span
        className="inline-grid place-items-center rounded-full border-[1.5px] shrink-0"
        style={{ width: ringSize, height: ringSize, borderColor: "#D99B1F" }}
      >
        <svg
          viewBox="0 0 100 93"
          role="img"
          aria-label="Black Star"
          style={{ width: size, height: "auto", display: "block", color: "#1A2420" }}
        >
          <path d={STAR_PATH} fill="currentColor" />
        </svg>
      </span>
      {showText && (
        <span
          className="leading-none"
          style={{
            fontFamily: '"Bricolage Grotesque", sans-serif',
            fontWeight: 700,
            fontSize: "1.3rem",
            letterSpacing: "-0.02em",
            color: "#1A2420",
          }}
        >
          Med<span style={{ color: "#176B45" }}>Pal</span>
        </span>
      )}
    </span>
  );
};

export default MedPalLogo;
