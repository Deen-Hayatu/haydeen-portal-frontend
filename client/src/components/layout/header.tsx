import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import CompanyLogo from "@/components/ui/company-logo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

const navigationConfig = {
  solutions: {
    label: "Solutions",
    items: [
      {
        label: "GhEHR",
        path: "/solutions/ghehr",
        description: "Electronic health records for Ghana's healthcare system",
        badge: "Live"
      },
      {
        label: "MedPal",
        path: "/solutions/medpal",
        description: "AI clinical decision support built on Ghana's treatment guidelines",
        badge: "Live"
      },
      {
        label: "AgriConnect",
        path: "/solutions/agriconnect",
        description: "Agricultural marketplace connecting farmers to markets",
        badge: "MVP"
      },
      {
        label: "Website Design",
        path: "/solutions/website-design",
        description: "Custom websites for businesses and organizations"
      },
      {
        label: "Custom Software",
        path: "/contact",
        description: "Tailored software solutions for your business needs"
      },
    ],
  },
  company: {
    label: "Company",
    items: [
      { label: "About Us", path: "/about", description: "Our mission and team" },
      { label: "Technology", path: "/technology", description: "How we build solutions" },
      { label: "Careers", path: "/careers", description: "Join our team" },
      { label: "Blog", path: "/blog", description: "Insights and updates" },
    ],
  },
  resources: {
    label: "Resources",
    items: [
      { label: "Products", path: "/products", description: "View our product suite" },
      { label: "MVP Progress", path: "/mvp-progress", description: "Development milestones" },
    ],
  },
};

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setExpandedMobileSection(null);
  }, [location]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMobileSection = (section: string) => {
    setExpandedMobileSection(expandedMobileSection === section ? null : section);
  };

  return (
    <header 
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : "shadow-sm"
      }`} 
      role="banner"
    >
      <div className="container">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link 
            href="/" 
            className="flex items-center focus-ring rounded-md"
            aria-label="Haydeen Technologies - Home"
            data-testid="link-home"
          >
            <CompanyLogo size="md" />
          </Link>

          <nav className="hidden lg:flex items-center space-x-1" role="navigation" aria-label="Main navigation">
            <NavigationMenu>
              <NavigationMenuList className="space-x-1">
                {Object.entries(navigationConfig).map(([key, section]) => (
                  <NavigationMenuItem key={key}>
                    <NavigationMenuTrigger 
                      className="text-sm font-medium text-neutral-700 hover:text-[#0A3D62] bg-transparent px-4 py-2"
                      data-testid={`nav-${key}`}
                    >
                      {section.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-2 p-4 w-[400px]">
                        {section.items.map((item) => (
                          <li key={item.path + item.label}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={item.path}
                                className="block select-none rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-neutral-100 focus:bg-neutral-100"
                                data-testid={`nav-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                              >
                                <div className="flex items-center gap-2">
                                  <span className="text-sm font-medium text-[#0A3D62]">
                                    {item.label}
                                  </span>
                                  {'badge' in item && item.badge && (
                                    <span className="text-xs bg-[#27AE60] text-white px-2 py-0.5 rounded-full">
                                      {item.badge}
                                    </span>
                                  )}
                                </div>
                                <p className="text-sm text-neutral-500 mt-1">
                                  {item.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          <div className="hidden lg:flex items-center gap-5">
            <Link href="/contact" className="text-sm font-medium text-neutral-600 hover:text-[#0A3D62] transition-colors" data-testid="button-contact">
              Contact
            </Link>
            <Link href="/contact?intent=demo">
              <Button className="bg-[#27AE60] hover:bg-[#1E8B4D] text-white" data-testid="button-book-call">
                Request Demo
              </Button>
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-neutral-700 hover:text-[#0A3D62] rounded-lg focus-ring"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white z-50 lg:hidden overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b">
              <span className="font-semibold text-[#0A3D62]">Menu</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-neutral-500 hover:text-neutral-700 rounded-lg"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="p-4 space-y-2" role="navigation" aria-label="Mobile navigation">
              {Object.entries(navigationConfig).map(([key, section]) => (
                <div key={key} className="border-b border-neutral-100 pb-2">
                  <button
                    onClick={() => toggleMobileSection(key)}
                    className="flex items-center justify-between w-full py-3 text-left font-medium text-[#0A3D62]"
                    aria-expanded={expandedMobileSection === key}
                  >
                    {section.label}
                    <ChevronDown 
                      className={`h-4 w-4 transition-transform ${
                        expandedMobileSection === key ? "rotate-180" : ""
                      }`} 
                    />
                  </button>
                  
                  {expandedMobileSection === key && (
                    <div className="pl-4 pb-2 space-y-1">
                      {section.items.map((item) => (
                        <Link
                          key={item.path + item.label}
                          href={item.path}
                          className="block py-2 text-sm text-neutral-600 hover:text-[#27AE60]"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className="flex items-center gap-2">
                            {item.label}
                            {'badge' in item && item.badge && (
                              <span className="text-xs bg-[#27AE60] text-white px-1.5 py-0.5 rounded">
                                {item.badge}
                              </span>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="p-4 space-y-3 border-t">
              <Link href="/contact" className="block">
                <Button variant="outline" className="w-full border-neutral-300 text-neutral-700">
                  Contact
                </Button>
              </Link>
              <Link href="/contact?intent=demo" className="block">
                <Button className="w-full bg-[#27AE60] hover:bg-[#1E8B4D] text-white">
                  Request Demo
                </Button>
              </Link>
            </div>

            <div className="p-4 bg-neutral-50 border-t">
              <div className="flex items-center gap-2 text-sm text-neutral-600 mb-2">
                <Phone className="h-4 w-4" />
                <span>+233 241 695 908</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-600">
                <Mail className="h-4 w-4" />
                <span>info@haydeentechnologies.com</span>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
