import { Suspense, lazy } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import GoogleAnalytics from "@/components/seo/google-analytics";
import NotFound from "@/pages/not-found";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SkipToMain from "@/components/accessibility/skip-to-main";
import ErrorBoundary from "@/components/ui/error-boundary";
import { OrganizationSchema, WebsiteSchema } from "@/components/seo/schema-markup";
import PreloadManager, { useCriticalResourcePreloader } from "@/components/performance/preload-manager";
import { PerformanceMonitor } from "@/components/performance/performance-monitor";
import AccessibilityWidget from "@/components/accessibility/accessibility-widget";
import CookieConsent from "@/components/cookies/cookie-consent";

const Home = lazy(() => import("@/pages/home"));
const About = lazy(() => import("@/pages/about"));
const Leadership = lazy(() => import("@/pages/about/leadership"));
const Solutions = lazy(() => import("@/pages/solutions/index"));
const Agriconnect = lazy(() => import("@/pages/solutions/agriconnect"));
const GhEHR = lazy(() => import("@/pages/solutions/ghehr"));
const MedPal = lazy(() => import("@/pages/solutions/medpal"));
const WebsiteDesign = lazy(() => import("@/pages/solutions/website-design"));
const Technology = lazy(() => import("@/pages/technology/index"));
const MVPDocumentation = lazy(() => import("@/pages/mvp-documentation"));
const Products = lazy(() => import("@/pages/products"));
const Blog = lazy(() => import("@/pages/blog/index"));
const BlogPost = lazy(() => import("@/pages/blog/post"));
const Careers = lazy(() => import("@/pages/careers"));
const Contact = lazy(() => import("@/pages/contact"));
const JobApplication = lazy(() => import("@/pages/apply"));
const Privacy = lazy(() => import("@/pages/privacy"));
const Terms = lazy(() => import("@/pages/terms"));
const NewsletterUnsubscribe = lazy(() => import("@/pages/newsletter-unsubscribe"));

function Router() {
  useCriticalResourcePreloader();

  return (
    <div className="min-h-screen flex flex-col">
      <SkipToMain />
      
      {/* Global Schema Markup */}
      <OrganizationSchema
        name="Haydeen Technologies"
        description="Innovative software solutions for West African industries"
        url="https://haydeentechnologies.com"
        address={{
          streetAddress: "Bw 14 Benz road",
          addressLocality: "Effiduasi",
          addressRegion: "Ashanti",
          addressCountry: "Ghana"
        }}
        contactPoint={{
          telephone: "+233-241-695-908",
          contactType: "customer service",
          email: "info@haydeentechnologies.com"
        }}
      />
      
      <WebsiteSchema
        name="Haydeen Technologies"
        url="https://haydeentechnologies.com"
        description="Building innovative MVP solutions for Ghana's agriculture and healthcare sectors"
        publisher="Haydeen Technologies"
        inLanguage="en"
      />
      
      {/* PreloadManager removed - images will load when needed */}
      
      <Header />
      <main id="main-content" className="flex-grow" tabIndex={-1}>
        <Suspense
          fallback={
            <div
              className="container py-24 text-center text-muted-foreground"
              role="status"
              aria-live="polite"
            >
              Loading…
            </div>
          }
        >
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/about/leadership" component={Leadership} />
            <Route path="/solutions" component={Solutions} />
            <Route path="/solutions/agriconnect" component={Agriconnect} />
            <Route path="/solutions/ghehr" component={GhEHR} />
            <Route path="/solutions/medpal" component={MedPal} />
            <Route path="/solutions/website-design" component={WebsiteDesign} />
            <Route path="/technology" component={Technology} />
            <Route path="/mvp-progress" component={MVPDocumentation} />
            <Route path="/products" component={Products} />
            <Route path="/blog" component={Blog} />
            <Route path="/blog/:slug" component={BlogPost} />
            <Route path="/careers" component={Careers} />
            <Route path="/contact" component={Contact} />
            <Route path="/apply" component={JobApplication} />
            <Route path="/privacy" component={Privacy} />
            <Route path="/terms" component={Terms} />
            <Route path="/newsletter/unsubscribe" component={NewsletterUnsubscribe} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </main>
      <Footer />
      <AccessibilityWidget />
      <CookieConsent />
    </div>
  );
}

function App() {
  return (
      <ErrorBoundary>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <GoogleAnalytics />
            <PerformanceMonitor />
            <Toaster />
            <Router />
          </TooltipProvider>
        </QueryClientProvider>
      </ErrorBoundary>
  );
}

export default App;
