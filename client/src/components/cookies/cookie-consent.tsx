import { useState, useEffect, useCallback } from "react";
import { X, Cookie, Shield, Settings, ChevronDown, ChevronUp, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

interface CookiePreferences {
  necessary: boolean;
  preferences: boolean;
  statistics: boolean;
  marketing: boolean;
}

const defaultPreferences: CookiePreferences = {
  necessary: true,
  preferences: false,
  statistics: false,
  marketing: false,
};

const STORAGE_KEY = "haydeen-cookie-consent";
const CONSENT_VERSION = "1.0";

interface ConsentData {
  preferences: CookiePreferences;
  consentDate: string;
  version: string;
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const data: ConsentData = JSON.parse(saved);
        if (data.version === CONSENT_VERSION) {
          setPreferences(data.preferences);
          setShowBanner(false);
        } else {
          setShowBanner(true);
        }
      } catch (e) {
        setShowBanner(true);
      }
    } else {
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const saveConsent = useCallback((prefs: CookiePreferences) => {
    const data: ConsentData = {
      preferences: prefs,
      consentDate: new Date().toISOString(),
      version: CONSENT_VERSION,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    setShowBanner(false);
    setShowSettings(false);
  }, []);

  const acceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      preferences: true,
      statistics: true,
      marketing: true,
    };
    setPreferences(allAccepted);
    saveConsent(allAccepted);
  };

  const acceptSelected = () => {
    saveConsent(preferences);
  };

  const rejectAll = () => {
    const onlyNecessary: CookiePreferences = {
      necessary: true,
      preferences: false,
      statistics: false,
      marketing: false,
    };
    setPreferences(onlyNecessary);
    saveConsent(onlyNecessary);
  };

  const updatePreference = (key: keyof CookiePreferences, value: boolean) => {
    if (key === "necessary") return;
    setPreferences((prev) => ({ ...prev, [key]: value }));
  };

  const openSettings = () => {
    setShowBanner(true);
    setShowSettings(true);
  };

  const CategoryRow = ({
    title,
    description,
    settingKey,
    locked = false,
  }: {
    title: string;
    description: string;
    settingKey: keyof CookiePreferences;
    locked?: boolean;
  }) => (
    <div className="flex items-start justify-between py-4 border-b border-gray-100 last:border-0">
      <div className="flex-1 pr-4">
        <div className="flex items-center gap-2 mb-1">
          {locked ? (
            <Shield className="h-4 w-4 text-gray-500" />
          ) : preferences[settingKey] ? (
            <Check className="h-4 w-4 text-green-600" />
          ) : null}
          <h4 className="font-medium text-gray-900">{title}</h4>
          {locked && (
            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
              Always Active
            </span>
          )}
        </div>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      {!locked && (
        <Switch
          checked={preferences[settingKey]}
          onCheckedChange={(checked) => updatePreference(settingKey, checked)}
          data-testid={`cookie-toggle-${settingKey}`}
        />
      )}
    </div>
  );

  if (!showBanner && !showSettings) {
    return (
      <button
        onClick={openSettings}
        className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-[#0A3D62] text-white shadow-lg hover:bg-[#0A3D62]/90 flex items-center justify-center transition-transform hover:scale-105"
        aria-label="Cookie settings"
        data-testid="cookie-settings-button"
      >
        <Cookie className="h-5 w-5" />
      </button>
    );
  }

  return (
    <>
      {showSettings ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowSettings(false)}
          />
          <div className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-semibold text-gray-900">Cookie Settings</h2>
                <button
                  onClick={() => setShowSettings(false)}
                  className="p-1 hover:bg-gray-100 rounded"
                  data-testid="close-cookie-settings"
                >
                  <X className="h-5 w-5 text-gray-500" />
                </button>
              </div>
              <p className="text-sm text-gray-600">
                Manage your cookie preferences. You can enable or disable different types of cookies below.
              </p>
            </div>

            <div className="p-6 max-h-[60vh] overflow-y-auto">
              <h3 className="text-sm font-semibold text-gray-800 mb-2">Your Current State</h3>
              
              <CategoryRow
                title="Necessary"
                description="Essential cookies required for the website to function properly. They enable basic features like page navigation and access to secure areas."
                settingKey="necessary"
                locked
              />
              <CategoryRow
                title="Preferences"
                description="Preference cookies enable the website to remember information that changes the way the website behaves or looks, like your preferred language."
                settingKey="preferences"
              />
              <CategoryRow
                title="Statistics"
                description="Statistics cookies help us understand how visitors interact with our website by collecting and reporting information anonymously."
                settingKey="statistics"
              />
              <CategoryRow
                title="Marketing"
                description="Marketing cookies are used to track visitors across websites to display relevant advertisements based on their interests."
                settingKey="marketing"
              />

              <button
                onClick={() => setShowDetails(!showDetails)}
                className="flex items-center gap-2 text-sm text-[#0A3D62] font-medium mt-4 hover:underline"
                data-testid="show-cookie-details"
              >
                {showDetails ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                {showDetails ? "Hide details" : "Show details"}
              </button>

              {showDetails && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg text-sm text-gray-600">
                  <p className="mb-2">
                    <strong>About cookies:</strong> Cookies are small text files stored on your device when you visit a website. They help improve your experience by remembering your preferences and providing relevant content.
                  </p>
                  <p>
                    You can change your cookie preferences at any time by clicking the cookie icon in the bottom-right corner of the page.
                  </p>
                </div>
              )}
            </div>

            <div className="p-6 border-t border-gray-200 bg-gray-50">
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="outline"
                  onClick={rejectAll}
                  className="flex-1"
                  data-testid="reject-all-cookies"
                >
                  Reject All
                </Button>
                <Button
                  variant="outline"
                  onClick={acceptSelected}
                  className="flex-1"
                  data-testid="accept-selected-cookies"
                >
                  Accept Selected
                </Button>
                <Button
                  onClick={acceptAll}
                  className="flex-1 bg-[#0A3D62] hover:bg-[#0A3D62]/90"
                  data-testid="accept-all-cookies"
                >
                  Accept All
                </Button>
              </div>
              <p className="text-xs text-gray-500 text-center mt-4">
                Powered by <span className="font-semibold">Haydeen Technologies</span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom duration-300">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="hidden sm:flex w-12 h-12 rounded-full bg-[#0A3D62]/10 items-center justify-center flex-shrink-0">
                  <Cookie className="h-6 w-6 text-[#0A3D62]" />
                </div>
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">
                    We value your privacy
                  </h2>
                  <p className="text-sm text-gray-600 mb-4">
                    We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. You can manage your preferences by clicking "Cookie Settings".
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      variant="outline"
                      onClick={rejectAll}
                      className="sm:order-1"
                      data-testid="banner-reject-cookies"
                    >
                      Reject All
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setShowSettings(true)}
                      className="sm:order-2"
                      data-testid="banner-cookie-settings"
                    >
                      <Settings className="h-4 w-4 mr-2" />
                      Cookie Settings
                    </Button>
                    <Button
                      onClick={acceptAll}
                      className="bg-[#0A3D62] hover:bg-[#0A3D62]/90 sm:order-3"
                      data-testid="banner-accept-all-cookies"
                    >
                      Accept All
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
