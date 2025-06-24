import React from 'react';
import { Suspense, lazy } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop";

// Lazy load all page components
const Index = lazy(() => import("./pages/Index"));
const ContactPage = lazy(() => import("./pages/Contact"));
const AIEngineersPage = lazy(() => import("./pages/AIEngineers"));
const AboutPage = lazy(() => import("./pages/About"));
const AwardsPage = lazy(() => import("./pages/Awards"));
const ServicesPage = lazy(() => import("./pages/Services"));
const IntelligentVoiceAutomation = lazy(() => import("./pages/services/IntelligentVoiceAutomation"));
const SocialEngagementAutomation = lazy(() => import("./pages/services/SocialEngagementAutomation"));
const LeadIntelligence = lazy(() => import("./pages/services/LeadIntelligence"));
const InteractiveAIChatbots = lazy(() => import("./pages/services/InteractiveAIChatbots"));
const AutomatedCampaignOrchestration = lazy(() => import("./pages/services/AutomatedCampaignOrchestration"));
const ThreatDetection = lazy(() => import("./pages/services/ThreatDetection"));
const CaseStudiesPage = lazy(() => import("./pages/CaseStudies"));
const CaseStudyDetail = lazy(() => import("./pages/CaseStudyDetail"));
const Careers = lazy(() => import('./pages/careers/index'));
const NotFound = lazy(() => import("./pages/NotFound"));
const CyberSecurity = lazy(() => import("@/pages/CyberSecurity"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const RefundPolicy = lazy(() => import("./pages/RefundPolicy"));
const PenetrationTestPage = lazy(() => import("@/pages/cybersecurity/PenetrationTestPage"));
const CloudSecurityPage = lazy(() => import("@/pages/cybersecurity/CloudSecurityPage"));
const OffensiveSecurityPage = lazy(() => import("@/pages/cybersecurity/OffensiveSecurityPage"));
const RedTeamingPage = lazy(() => import("@/pages/cybersecurity/RedTeamingPage"));
const IOTSecurityPage = lazy(() => import("@/pages/cybersecurity/IOTSecurityPage"));
const VCISOPage = lazy(() => import("@/pages/cybersecurity/VCISOPage"));
const SecurityTrainingPage = lazy(() => import("@/pages/cybersecurity/SecurityTrainingPage"));
const PricingPage = lazy(() => import("./pages/Pricing"));
const JobDetailsPage = lazy(() => import('./pages/careers/JobDetailsPage'));
const SitemapPage = lazy(() => import('./pages/SitemapPage'));
const BlogPage = lazy(() => import('./pages/blog/index'));
const SingleBlogPostPage = lazy(() => import('./pages/blog/[slug]'));

// Loading component for Suspense fallback
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-black">
    <div className="animate-pulse text-white text-lg">Loading...</div>
  </div>
);

const queryClient = new QueryClient();

// Enhanced ScrollToTop component that forces scroll reset on every navigation
const ScrollToTopOnMount = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Force scroll to top with multiple approaches
    const forceScrollToTop = () => {
      // 1. Direct scroll to top
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      // 2. Try to scroll main content elements
      const mainElements = [
        document.querySelector('main'),
        document.querySelector('#root'),
        document.querySelector('#app'),
        document.querySelector('.main-content'),
        document.querySelector('.content')
      ];
      
      mainElements.forEach(el => {
        if (el instanceof HTMLElement) {
          el.scrollTop = 0;
        }
      });
    };

    forceScrollToTop();
    
    if (location.hash) {
      window.history.replaceState(
        {},
        document.title,
        location.pathname + location.search
      );
    }
    
    const timers = [
      setTimeout(forceScrollToTop, 0),
      setTimeout(forceScrollToTop, 50),
      setTimeout(forceScrollToTop, 100),
      setTimeout(forceScrollToTop, 200)
    ];
    
    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [location.pathname, location.search]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/ai-engineers" element={<AIEngineersPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/awards" element={<AwardsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<SingleBlogPostPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/intelligent-voice-automation" element={<IntelligentVoiceAutomation />} />
            <Route path="/services/social-engagement-automation" element={<SocialEngagementAutomation />} />
            <Route path="/services/lead-intelligence" element={<LeadIntelligence />} />
            <Route path="/services/interactive-ai-chatbots" element={<InteractiveAIChatbots />} />
            <Route path="/services/automated-campaign-orchestration" element={<AutomatedCampaignOrchestration />} />
            <Route path="/services/threat-detection" element={<ThreatDetection />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/careers/:id" element={<JobDetailsPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/cyber-security" element={<CyberSecurity />} />
            <Route path="/cyber-security/vulnerability-assessment" element={<PenetrationTestPage />} />
            <Route path="/cyber-security/cloud-security-assessments" element={<CloudSecurityPage />} />
            <Route path="/cyber-security/offensive-security" element={<OffensiveSecurityPage />} />
            <Route path="/cyber-security/red-teaming" element={<RedTeamingPage />} />
            <Route path="/cyber-security/iot-security" element={<IOTSecurityPage />} />
            <Route path="/cyber-security/vciso-services" element={<VCISOPage />} />
            <Route path="/cyber-security/security-training" element={<SecurityTrainingPage />} />
            <Route path="/penetration-testing" element={<PenetrationTestPage />} />
            <Route path="/cloud-security" element={<CloudSecurityPage />} />
            <Route path="/offensive-security" element={<OffensiveSecurityPage />} />
            <Route path="/red-teaming" element={<RedTeamingPage />} />
            <Route path="/iot-security" element={<IOTSecurityPage />} />
            <Route path="/vciso-services" element={<VCISOPage />} />
            <Route path="/securitytraining" element={<SecurityTrainingPage />} />
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
            <Route path="/RefundPolicy" element={<RefundPolicy />} />
            <Route path="/sitemap" element={<SitemapPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);
export default App;
