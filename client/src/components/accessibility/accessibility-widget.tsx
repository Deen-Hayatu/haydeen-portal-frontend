import { useState, useEffect, useCallback } from "react";
import { 
  X, Accessibility, RotateCcw, Eye, Zap, Brain, Target, Keyboard, Volume2, 
  Type, Link2, AlignCenter, Plus, Minus, Moon, Sun, Contrast,
  Droplet, CircleDot, ImageOff, BookOpen, MousePointer2, Crosshair,
  VolumeX, Pause, Hand, Focus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AccessibilitySettings {
  seizureSafe: boolean;
  visionImpaired: boolean;
  adhdFriendly: boolean;
  cognitiveDisability: boolean;
  keyboardNavigation: boolean;
  screenReader: boolean;
  readableFont: boolean;
  highlightTitles: boolean;
  highlightLinks: boolean;
  textMagnifier: boolean;
  textSize: number;
  alignCenter: boolean;
  darkContrast: boolean;
  lightContrast: boolean;
  highContrast: boolean;
  highSaturation: boolean;
  monochrome: boolean;
  lowSaturation: boolean;
  textColor: string | null;
  titleColor: string | null;
  backgroundColor: string | null;
  muteSounds: boolean;
  hideImages: boolean;
  readMode: boolean;
  readingMask: boolean;
  stopAnimations: boolean;
  highlightHover: boolean;
  highlightFocus: boolean;
  bigBlackCursor: boolean;
  bigWhiteCursor: boolean;
}

const defaultSettings: AccessibilitySettings = {
  seizureSafe: false,
  visionImpaired: false,
  adhdFriendly: false,
  cognitiveDisability: false,
  keyboardNavigation: false,
  screenReader: false,
  readableFont: false,
  highlightTitles: false,
  highlightLinks: false,
  textMagnifier: false,
  textSize: 100,
  alignCenter: false,
  darkContrast: false,
  lightContrast: false,
  highContrast: false,
  highSaturation: false,
  monochrome: false,
  lowSaturation: false,
  textColor: null,
  titleColor: null,
  backgroundColor: null,
  muteSounds: false,
  hideImages: false,
  readMode: false,
  readingMask: false,
  stopAnimations: false,
  highlightHover: false,
  highlightFocus: false,
  bigBlackCursor: false,
  bigWhiteCursor: false,
};

const STORAGE_KEY = "haydeen-accessibility-settings";

const colorOptions = [
  { color: "#185abd", label: "Blue" },
  { color: "#0e4ea3", label: "Dark Blue" },
  { color: "#107c10", label: "Green" },
  { color: "#eab308", label: "Yellow" },
  { color: "#000000", label: "Black" },
];

export default function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>(defaultSettings);
  const [activeColorPicker, setActiveColorPicker] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setSettings({ ...defaultSettings, ...parsed });
      } catch (e) {
        console.error("Failed to parse accessibility settings");
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    applySettings(settings);
  }, [settings]);

  const applySettings = useCallback((s: AccessibilitySettings) => {
    const root = document.documentElement;

    root.classList.toggle("a11y-seizure-safe", s.seizureSafe);
    root.classList.toggle("a11y-vision-impaired", s.visionImpaired);
    root.classList.toggle("a11y-adhd-friendly", s.adhdFriendly);
    root.classList.toggle("a11y-cognitive", s.cognitiveDisability);
    root.classList.toggle("a11y-keyboard-nav", s.keyboardNavigation);
    root.classList.toggle("a11y-screen-reader", s.screenReader);
    root.classList.toggle("a11y-readable-font", s.readableFont);
    root.classList.toggle("a11y-highlight-titles", s.highlightTitles);
    root.classList.toggle("a11y-highlight-links", s.highlightLinks);
    root.classList.toggle("a11y-text-magnifier", s.textMagnifier);
    root.classList.toggle("a11y-align-center", s.alignCenter);
    
    root.classList.toggle("a11y-dark-contrast", s.darkContrast);
    root.classList.toggle("a11y-light-contrast", s.lightContrast);
    root.classList.toggle("a11y-high-contrast", s.highContrast);
    root.classList.toggle("a11y-high-saturation", s.highSaturation);
    root.classList.toggle("a11y-monochrome", s.monochrome);
    root.classList.toggle("a11y-low-saturation", s.lowSaturation);
    
    root.classList.toggle("a11y-hide-images", s.hideImages);
    root.classList.toggle("a11y-read-mode", s.readMode);
    root.classList.toggle("a11y-reading-mask", s.readingMask);
    root.classList.toggle("a11y-stop-animations", s.stopAnimations);
    root.classList.toggle("a11y-highlight-hover", s.highlightHover);
    root.classList.toggle("a11y-highlight-focus", s.highlightFocus);
    root.classList.toggle("a11y-big-black-cursor", s.bigBlackCursor);
    root.classList.toggle("a11y-big-white-cursor", s.bigWhiteCursor);
    
    root.classList.toggle("a11y-font-scaled", s.textSize !== 100);
    root.style.setProperty("--a11y-font-scale", `${s.textSize / 100}`);
    
    if (s.textColor) {
      root.style.setProperty("--a11y-text-color", s.textColor);
      root.classList.add("a11y-custom-text-color");
    } else {
      root.classList.remove("a11y-custom-text-color");
    }
    
    if (s.titleColor) {
      root.style.setProperty("--a11y-title-color", s.titleColor);
      root.classList.add("a11y-custom-title-color");
    } else {
      root.classList.remove("a11y-custom-title-color");
    }
    
    if (s.backgroundColor) {
      root.style.setProperty("--a11y-bg-color", s.backgroundColor);
      root.classList.add("a11y-custom-bg-color");
    } else {
      root.classList.remove("a11y-custom-bg-color");
    }

    if (s.muteSounds) {
      document.querySelectorAll('video, audio').forEach((el) => {
        (el as HTMLMediaElement).muted = true;
      });
    }
  }, []);

  const resetSettings = () => {
    setSettings(defaultSettings);
    setActiveColorPicker(null);
  };

  const updateSetting = <K extends keyof AccessibilitySettings>(
    key: K,
    value: AccessibilitySettings[K]
  ) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const adjustTextSize = (delta: number) => {
    setSettings((prev) => ({
      ...prev,
      textSize: Math.min(120, Math.max(90, prev.textSize + delta * 0.5)),
    }));
  };

  const ProfileToggle = ({
    label,
    description,
    icon: Icon,
    settingKey,
  }: {
    label: string;
    description: string;
    icon: typeof Eye;
    settingKey: keyof AccessibilitySettings;
  }) => (
    <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
      <div className="flex items-center gap-3">
        <div className="flex gap-1">
          <button
            onClick={() => updateSetting(settingKey, false)}
            className={cn(
              "px-2 py-1 text-xs font-medium rounded-l border",
              !settings[settingKey]
                ? "bg-gray-800 text-white border-gray-800"
                : "bg-white text-gray-600 border-gray-300"
            )}
            data-testid={`toggle-${settingKey}-off`}
          >
            OFF
          </button>
          <button
            onClick={() => updateSetting(settingKey, true)}
            className={cn(
              "px-2 py-1 text-xs font-medium rounded-r border",
              settings[settingKey]
                ? "bg-[#0A3D62] text-white border-[#0A3D62]"
                : "bg-white text-gray-600 border-gray-300"
            )}
            data-testid={`toggle-${settingKey}-on`}
          >
            ON
          </button>
        </div>
        <div>
          <p className="font-medium text-sm text-gray-900">{label}</p>
          <p className="text-xs text-gray-500">{description}</p>
        </div>
      </div>
      <Icon className="h-5 w-5 text-gray-400" />
    </div>
  );

  const TextSizeControl = () => (
    <div className="bg-gray-50 rounded-lg p-3 col-span-3">
      <div className="flex items-center gap-2 mb-2">
        <Type className="h-4 w-4 text-gray-600" />
        <span className="text-sm font-medium text-gray-700">Text Size</span>
      </div>
      <div className="flex items-center justify-between">
        <button
          onClick={() => adjustTextSize(-10)}
          className="w-8 h-8 rounded-full bg-[#0A3D62] text-white flex items-center justify-center hover:bg-[#0A3D62]/90"
          data-testid="textSize-decrease"
        >
          <Minus className="h-4 w-4" />
        </button>
        <span className="text-sm font-medium text-gray-700">
          {settings.textSize === 100 ? "Default" : `${settings.textSize}%`}
        </span>
        <button
          onClick={() => adjustTextSize(10)}
          className="w-8 h-8 rounded-full bg-[#0A3D62] text-white flex items-center justify-center hover:bg-[#0A3D62]/90"
          data-testid="textSize-increase"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </div>
  );

  const ToggleButton = ({
    label,
    icon: Icon,
    settingKey,
    active,
    onClick,
  }: {
    label: string;
    icon: typeof Type;
    settingKey?: keyof AccessibilitySettings;
    active?: boolean;
    onClick?: () => void;
  }) => {
    const isActive = active !== undefined ? active : (settingKey ? !!settings[settingKey] : false);
    const handleClick = onClick || (settingKey ? () => updateSetting(settingKey, !settings[settingKey]) : undefined);
    
    return (
      <button
        onClick={handleClick}
        className={cn(
          "flex flex-col items-center justify-center p-3 rounded-lg border transition-colors min-h-[70px]",
          isActive
            ? "bg-[#0A3D62] text-white border-[#0A3D62]"
            : "bg-white text-gray-700 border-gray-200 hover:border-gray-300"
        )}
        data-testid={`button-${settingKey || label.toLowerCase().replace(/\s/g, '-')}`}
      >
        <Icon className="h-5 w-5 mb-1" />
        <span className="text-xs font-medium text-center leading-tight">{label}</span>
      </button>
    );
  };

  const ColorPickerRow = ({
    label,
    settingKey,
    pickerKey,
  }: {
    label: string;
    settingKey: "textColor" | "titleColor" | "backgroundColor";
    pickerKey: string;
  }) => (
    <div className="col-span-2 bg-gray-50 rounded-lg p-3">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        {settings[settingKey] && (
          <button
            onClick={() => updateSetting(settingKey, null)}
            className="text-xs text-red-600 hover:text-red-700"
            data-testid={`cancel-${settingKey}`}
          >
            Cancel
          </button>
        )}
      </div>
      <div className="flex gap-2 flex-wrap">
        {colorOptions.map((opt) => (
          <button
            key={opt.color}
            onClick={() => updateSetting(settingKey, opt.color)}
            className={cn(
              "w-7 h-7 rounded-full border-2 transition-transform hover:scale-110",
              settings[settingKey] === opt.color ? "border-[#0A3D62] ring-2 ring-[#0A3D62]/30" : "border-gray-300"
            )}
            style={{ backgroundColor: opt.color }}
            title={opt.label}
            data-testid={`color-${settingKey}-${opt.label.toLowerCase()}`}
          />
        ))}
      </div>
    </div>
  );

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-[#0A3D62] text-white shadow-lg hover:bg-[#0A3D62]/90 flex items-center justify-center transition-transform hover:scale-105"
        aria-label="Open accessibility menu"
        data-testid="accessibility-widget-button"
      >
        <Accessibility className="h-6 w-6" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          />

          <div className="relative w-full max-w-md h-full bg-white shadow-xl overflow-y-auto animate-in slide-in-from-left duration-300">
            <div className="sticky top-0 bg-[#1a1a2e] text-white p-4 z-10">
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white/10 rounded"
                  data-testid="close-accessibility-panel"
                >
                  <X className="h-5 w-5" />
                </button>
                <span className="text-sm">ENGLISH (US)</span>
              </div>
              <h2 className="text-xl font-semibold text-center mb-4">
                Accessibility Adjustments
              </h2>
              <div className="flex justify-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={resetSettings}
                  className="bg-transparent border-white/30 text-white hover:bg-white/10"
                  data-testid="reset-accessibility"
                >
                  <RotateCcw className="h-4 w-4 mr-1" />
                  Reset Settings
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-transparent border-white/30 text-white hover:bg-white/10"
                  data-testid="accessibility-statement"
                >
                  Statement
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="bg-transparent border-white/30 text-white hover:bg-white/10"
                  data-testid="hide-accessibility"
                >
                  Hide Interface
                </Button>
              </div>
            </div>

            <div className="p-4">
              <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
                <h3 className="text-sm font-semibold text-gray-800 mb-3">
                  Choose the right accessibility profile for you
                </h3>

                <ProfileToggle
                  label="Seizure Safe Profile"
                  description="Clear flashes & reduces color"
                  icon={Zap}
                  settingKey="seizureSafe"
                />
                <ProfileToggle
                  label="Vision Impaired Profile"
                  description="Enhances website's visuals"
                  icon={Eye}
                  settingKey="visionImpaired"
                />
                <ProfileToggle
                  label="ADHD Friendly Profile"
                  description="More focus & fewer distractions"
                  icon={Target}
                  settingKey="adhdFriendly"
                />
                <ProfileToggle
                  label="Cognitive Disability Profile"
                  description="Assists with reading & focusing"
                  icon={Brain}
                  settingKey="cognitiveDisability"
                />
                <ProfileToggle
                  label="Keyboard Navigation (Motor)"
                  description="Use website with the keyboard"
                  icon={Keyboard}
                  settingKey="keyboardNavigation"
                />
                <ProfileToggle
                  label="Blind Users (Screen Reader)"
                  description="Optimize website for screen-readers"
                  icon={Volume2}
                  settingKey="screenReader"
                />
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-800 mb-3">
                  Content Adjustments
                </h3>

                <div className="grid grid-cols-3 gap-3 mb-3">
                  <TextSizeControl />
                </div>

                <div className="grid grid-cols-3 gap-3 mb-3">
                  <ToggleButton
                    label="Readable Font"
                    icon={Type}
                    settingKey="readableFont"
                  />
                  <ToggleButton
                    label="Highlight Titles"
                    icon={Type}
                    settingKey="highlightTitles"
                  />
                  <ToggleButton
                    label="Highlight Links"
                    icon={Link2}
                    settingKey="highlightLinks"
                  />
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <ToggleButton
                    label="Reading Guide"
                    icon={BookOpen}
                    settingKey="textMagnifier"
                  />
                  <ToggleButton
                    label="Align Center"
                    icon={AlignCenter}
                    settingKey="alignCenter"
                  />
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-800 mb-3">
                  Color Adjustments
                </h3>

                <div className="grid grid-cols-3 gap-3 mb-3">
                  <ToggleButton
                    label="Dark Contrast"
                    icon={Moon}
                    settingKey="darkContrast"
                  />
                  <ToggleButton
                    label="Light Contrast"
                    icon={Sun}
                    settingKey="lightContrast"
                  />
                  <ToggleButton
                    label="High Contrast"
                    icon={Contrast}
                    settingKey="highContrast"
                  />
                </div>

                <div className="grid grid-cols-3 gap-3 mb-3">
                  <ToggleButton
                    label="High Saturation"
                    icon={Droplet}
                    settingKey="highSaturation"
                  />
                  <ToggleButton
                    label="Monochrome"
                    icon={CircleDot}
                    settingKey="monochrome"
                  />
                  <ToggleButton
                    label="Low Saturation"
                    icon={Droplet}
                    settingKey="lowSaturation"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <ColorPickerRow
                    label="Adjust Text Colors"
                    settingKey="textColor"
                    pickerKey="textColor"
                  />
                  <ColorPickerRow
                    label="Adjust Title Colors"
                    settingKey="titleColor"
                    pickerKey="titleColor"
                  />
                  <ColorPickerRow
                    label="Adjust Background Colors"
                    settingKey="backgroundColor"
                    pickerKey="backgroundColor"
                  />
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-800 mb-3">
                  Orientation Adjustments
                </h3>

                <div className="grid grid-cols-3 gap-3 mb-3">
                  <ToggleButton
                    label="Mute Sounds"
                    icon={VolumeX}
                    settingKey="muteSounds"
                  />
                  <ToggleButton
                    label="Hide Images"
                    icon={ImageOff}
                    settingKey="hideImages"
                  />
                  <ToggleButton
                    label="Read Mode"
                    icon={BookOpen}
                    settingKey="readMode"
                  />
                </div>

                <div className="grid grid-cols-3 gap-3 mb-3">
                  <ToggleButton
                    label="Reading Mask"
                    icon={Hand}
                    settingKey="readingMask"
                  />
                  <ToggleButton
                    label="Stop Animations"
                    icon={Pause}
                    settingKey="stopAnimations"
                  />
                  <ToggleButton
                    label="Highlight Hover"
                    icon={Crosshair}
                    settingKey="highlightHover"
                  />
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <ToggleButton
                    label="Highlight Focus"
                    icon={Focus}
                    settingKey="highlightFocus"
                  />
                  <ToggleButton
                    label="Big Black Cursor"
                    icon={MousePointer2}
                    settingKey="bigBlackCursor"
                  />
                  <ToggleButton
                    label="Big White Cursor"
                    icon={MousePointer2}
                    settingKey="bigWhiteCursor"
                  />
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 bg-[#1a1a2e] text-white p-3 text-center text-sm">
              <span className="text-gray-400">Web Accessibility By </span>
              <span className="font-semibold">Haydeen Technologies</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
