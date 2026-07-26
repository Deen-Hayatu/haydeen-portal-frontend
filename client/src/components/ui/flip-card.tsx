import { Link } from "wouter";
import type { LucideIcon } from "lucide-react";

interface FlipCardProps {
  title: string;
  category: string;
  description: string;
  href: string;
  gradient: string;
  icon?: LucideIcon;
}

const FlipCard = ({ title, category, description, href, gradient, icon: Icon }: FlipCardProps) => {
  const isAnchor = href.startsWith('#');
  
  const handleClick = (e: React.MouseEvent) => {
    if (isAnchor) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const cardContent = (
    <div className="flip-card-inner relative w-full h-full [transform-style:preserve-3d] transition-transform duration-500 group-hover:[transform:rotateY(180deg)]">
      {/* Front Face */}
      <div className="flip-card-front absolute inset-0 w-full h-full [backface-visibility:hidden] [-webkit-backface-visibility:hidden]">
        <div className="w-full h-full flex flex-col rounded-xl overflow-hidden shadow-md">
          {/* Image/Gradient Area */}
          <div className={`flex-1 ${gradient} relative`}>
            {Icon && (
              <div className="absolute inset-0 flex items-center justify-center opacity-30">
                <Icon className="w-20 h-20 text-white" />
              </div>
            )}
          </div>
          {/* Text Label Area */}
          <div className="bg-white py-4 px-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#22c55e] mb-1">
              About Haydeen
            </p>
            <h3 className="text-lg font-bold text-[#0a3d62]">
              {title}
            </h3>
          </div>
        </div>
      </div>
      
      {/* Back Face */}
      <div className="flip-card-back absolute inset-0 w-full h-full [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:rotateY(180deg)]">
        <div className="w-full h-full rounded-xl bg-[#e8e6f0] flex flex-col items-center justify-center p-8 text-center shadow-md">
          <h3 className="text-base font-bold uppercase tracking-wide text-[#0a3d62] mb-4">
            {title}
          </h3>
          <p className="text-neutral-600 leading-relaxed mb-6 text-sm">
            {description}
          </p>
          <span className="inline-flex items-center px-6 py-2.5 bg-[#6b21a8] text-white text-sm font-semibold uppercase tracking-wide rounded-full">
            Learn More
          </span>
        </div>
      </div>
    </div>
  );

  const className = "flip-card group block h-72 [perspective:1000px] cursor-pointer";
  const testId = `card-about-${title.toLowerCase().replace(/\s+/g, '-')}`;

  if (isAnchor) {
    return (
      <a 
        href={href} 
        onClick={handleClick}
        className={className}
        data-testid={testId}
      >
        {cardContent}
      </a>
    );
  }

  return (
    <Link 
      href={href}
      className={className}
      data-testid={testId}
    >
      {cardContent}
    </Link>
  );
};

export default FlipCard;
