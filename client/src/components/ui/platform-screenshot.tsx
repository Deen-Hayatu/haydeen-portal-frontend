import ghehrScreenshotPng from '@assets/ghehr-screenshot.webp';
import { buildCdnSources, onCdnImgError } from "@/lib/cdn";

interface PlatformScreenshotProps {
  platform: 'agriconnect' | 'ghehr';
  className?: string;
}

const PlatformScreenshot = ({ platform, className = '' }: PlatformScreenshotProps) => {
  const getScreenshotContent = () => {
    switch (platform) {
      case 'agriconnect':
        return (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Header */}
            <div className="bg-[#27AE60] text-white px-6 py-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#27AE60]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold">AgriConnect</h2>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-300 rounded-full"></div>
                <span className="text-sm">Online</span>
              </div>
            </div>
            
            {/* Dashboard content */}
            <div className="p-6">
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">24°C</div>
                  <div className="text-sm text-gray-600">Temperature</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-base font-bold text-blue-600">Weather Alerts</div>
                  <div className="text-sm text-gray-600">Humidity</div>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <div className="text-base font-bold text-yellow-600">Field Insights</div>
                  <div className="text-sm text-gray-600">Crop health</div>
                </div>
              </div>
              
              {/* Market prices */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-3">Today's Market Prices</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Cocoa (per bag)</span>
                    <span className="font-semibold text-green-600">₵480</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Maize (per bag)</span>
                    <span className="font-semibold text-green-600">₵85</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tomatoes (per crate)</span>
                    <span className="font-semibold text-green-600">₵45</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'ghehr':
        return (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full">
            {(() => {
              const cdn = buildCdnSources("ghehr-screenshot.webp", { widths: [480, 768, 1200, 1600] });
              const fallbackSrc = ghehrScreenshotPng;
              return (
                <img 
                  src={cdn?.src ?? fallbackSrc} 
                  srcSet={cdn?.srcSet}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 1200px"
                  alt="GhEHR Patient Management System - Electronic Health Record platform for Ghana" 
                  className="w-full h-auto"
                  style={{ display: 'block', width: '100%', height: 'auto' }}
                  loading="lazy"
                  decoding="async"
                  onError={onCdnImgError(fallbackSrc)}
                />
              );
            })()}
          </div>
        );
      
      default:
        return <div>Platform not found</div>;
    }
  };

  return (
    <div className={`transform hover:scale-105 transition-transform duration-300 ${className}`}>
      {getScreenshotContent()}
    </div>
  );
};

export default PlatformScreenshot;