import { Link } from "wouter";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import CompanyLogo from "@/components/ui/company-logo";

const footerLinks = {
  solutions: {
    title: "Solutions",
    links: [
      { label: "GhEHR", path: "/solutions/ghehr" },
      { label: "MedPal", path: "/solutions/medpal" },
      { label: "AgriConnect", path: "/solutions/agriconnect" },
      { label: "Website Design", path: "/solutions/website-design" },
      { label: "Custom Software", path: "/contact" },
    ],
  },
  industries: {
    title: "Industries",
    links: [
      { label: "Healthcare", path: "/solutions/ghehr" },
      { label: "Agriculture", path: "/solutions/agriconnect" },
      { label: "Public Sector", path: "/contact" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About Us", path: "/about" },
      { label: "Technology", path: "/technology" },
      { label: "Careers", path: "/careers" },
      { label: "Blog", path: "/blog" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { label: "Products", path: "/products" },
      { label: "MVP Progress", path: "/mvp-progress" },
      { label: "Contact", path: "/contact" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { label: "Privacy Policy", path: "/privacy" },
      { label: "Terms of Service", path: "/terms" },
    ],
  },
};

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          <div className="col-span-2">
            <div className="mb-6">
              <CompanyLogo size="md" />
            </div>
            <p className="text-neutral-400 text-sm mb-6 max-w-xs">
              Software for healthcare and agriculture in West Africa.
            </p>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 text-neutral-400">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Bw 14 Benz road, Effiduase, Ashanti, Ghana</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-400">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:info@haydeentechnologies.com" className="hover:text-white transition">
                  info@haydeentechnologies.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-neutral-400">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+233241695908" className="hover:text-white transition">
                  +233 241 695 908
                </a>
              </div>
              <div className="flex items-center gap-3 text-neutral-400">
                <Clock className="h-4 w-4 flex-shrink-0" />
                <span>Mon–Fri, 9am–6pm GMT</span>
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h3 className="font-semibold text-sm uppercase tracking-wide mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.path}
                      className="text-sm text-neutral-400 hover:text-white transition"
                      data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-neutral-800">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
            <p>
              &copy; {new Date().getFullYear()} Haydeen Technologies. All rights reserved.
            </p>
            <p>
              Effiduase, Ashanti Region, Ghana
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
