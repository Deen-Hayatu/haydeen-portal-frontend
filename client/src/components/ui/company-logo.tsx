import logoImage from "@assets/haydeen_logo_cropped_transparent_2x_1765994531134.webp";
import { buildCdnSources, onCdnImgError } from "@/lib/cdn";

interface CompanyLogoProps {
  size?: "sm" | "md" | "lg";
}

const CompanyLogo = ({
  size = "md",
}: CompanyLogoProps) => {
  const sizeClasses = {
    sm: "h-12",
    md: "h-14",
    lg: "h-20",
  };
  const intrinsicSize = {
    sm: { width: 192, height: 48 },
    md: { width: 224, height: 56 },
    lg: { width: 320, height: 80 },
  } as const;

  const cdn = buildCdnSources("haydeen_logo_cropped_transparent_2x_1765994531134.webp", {
    widths: [240, 360, 480],
    quality: 80,
  });

  return (
    <img
      src={cdn?.src ?? logoImage}
      srcSet={cdn?.srcSet}
      sizes="(max-width: 768px) 50vw, 320px"
      alt="Haydeen Technologies"
      className={`${sizeClasses[size]} w-auto block`}
      width={intrinsicSize[size].width}
      height={intrinsicSize[size].height}
      loading="eager"
      decoding="async"
      fetchPriority="high"
      onError={onCdnImgError(logoImage)}
    />
  );
};

export default CompanyLogo;
