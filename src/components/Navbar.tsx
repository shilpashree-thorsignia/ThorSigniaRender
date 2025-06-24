'use client';

// import logoImage from "../assets/images/thor-signia-logo.png"; // Assuming logo is in public folder
import React, { useState, useRef, useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";
import { Button } from "@/components/ui/button";

import {
  LucideIcon,
  Speech,
  Users,
  Cpu,
  Bot,
  ListTree,
  Shield,
  Mic,
  MessageSquare,
  Share2,
  LineChart,
  BrainCircuit,
  Megaphone,
  BarChart3,
  ShieldAlert,
  ClipboardCheck,
  Stethoscope,
  Briefcase,
  Landmark,
  Sparkles,
  Wrench,
  Bug,
  CloudAlert,
  Terminal,
  Swords,
  CircuitBoard,
  GraduationCap,
  FlaskConical,
  Book,
  ShieldCheck,
  TrendingUp,
  ChevronDown,
  Settings,
  Database,
  Icon,
  List,
} from "lucide-react";

const iconMap = {
  Speech, Users, Cpu, Bot, ListTree, Shield, Mic, MessageSquare, Share2, LineChart,
  BrainCircuit, Megaphone, BarChart3, ShieldAlert, ClipboardCheck, Stethoscope,
  Briefcase, Landmark, Sparkles, Wrench, Bug, CloudAlert, Terminal, Swords,
  CircuitBoard, GraduationCap, FlaskConical, Book, ShieldCheck, TrendingUp,
  Settings, Database, List, ChevronDown,
  Icon,
};

type IconName = keyof typeof iconMap;

type LucideIconComponentProps = {
  size?: number | string;
  color?: string;
  strokeWidth?: number;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any;
};

const IconComponent = ({
  name,
  ...props
}: { name: IconName } & LucideIconComponentProps) => {
  const IconToRender = iconMap[name];

  if (!IconToRender) {
    console.warn(`Icon "${name}" not found in iconMap.`);
    return <div className={cn("w-4 h-4 inline-block bg-red-400 rounded-full", props.className)} style={props.style} {...props}></div>;
  }
  return <IconToRender {...props} />;
};

interface NavItem {
  title: string;
  href: string;
  dropdown: boolean;
  items?: {
    title: string;
    href: string;
    icon?: string;
  }[];
  mainIcon?: IconName;
  mainDescription?: string;
}

const navItems: NavItem[] = [
  { title: "Home", href: "/", dropdown: false },
  { title: "About", href: "/about#top", dropdown: false },
  {
    title: "Services", href: "/services#top", dropdown: true, mainIcon: "Settings",
    mainDescription: "Explore all our cutting-edge Enterprise AI Solutions.",
    items: [
      { title: "Intelligent Voice Automation", href: "/services/intelligent-voice-automation", icon: "Mic" },
      { title: "Social Engagement Automation", href: "/services/social-engagement-automation", icon: "Share2" },
      { title: "AI-Powered Lead Intelligence", href: "/services/lead-intelligence", icon: "BarChart3" },
      { title: "Interactive AI Chatbots", href: "/services/interactive-ai-chatbots", icon: "Bot" },
      { title: "Automated Campaign Orchestration", href: "/services/automated-campaign-orchestration", icon: "Megaphone" },
      { title: "AI-Powered Threat Detection", href: "/services/threat-detection", icon: "ShieldAlert" },
    ],
  },
  {
    title: "Cybersecurity", href: "/cyber-security#top", dropdown: true, mainIcon: "ShieldCheck",
    mainDescription: "Explore our comprehensive cybersecurity services.",
    items: [
      { title: "Vulnerability Assessment & Pen Testing", href: "/cyber-security/vulnerability-assessment", icon: "Bug" },
      { title: "Cloud Security Assessments", href: "/cyber-security/cloud-security-assessments", icon: "CloudAlert" },
      { title: "Offensive Security", href: "/cyber-security/offensive-security", icon: "Terminal" },
      { title: "Red Teaming Services", href: "/cyber-security/red-teaming", icon: "Swords" },
      { title: "IOT/OT Security", href: "/cyber-security/iot-security", icon: "CircuitBoard" },
      { title: "vCISO Services", href: "/cyber-security/vciso-services", icon: "Briefcase" },
      { title: "Security Training & Awareness", href: "/cyber-security/security-training", icon: "GraduationCap" },
    ],
  },
  { title: "On Demand AI", href: "/ai-engineers#top", dropdown: false },
  { title: "Case Studies", href: "/case-studies#top", dropdown: false },
  {
    title: "Blog", href: "/blog#top", dropdown: true, mainIcon: "Book",
    mainDescription: "Stay updated with our latest articles on Enterprise AI, Industry insights, and Tech.",
    items: [
      { title: "The Future of Enterprise AI: Trends to Watch in 2025", href: "/blog/future-of-enterprise-ai-trends-2025#top", icon: "TrendingUp" },
      { title: "How Custom AI Solutions Are Transforming Manufacturing", href: "/blog/how-custom-ai-solutions-are-transforming-manufacturing#top", icon: "Wrench" },
      { title: "Ethical Considerations in AI Development and Deployment", href: "/blog/ethical-considerations-in-ai-development-and-deployment#top", icon: "ShieldCheck" },
      { title: "Building a Successful Enterprise AI Strategy From Scratch", href: "/blog/building-a-successful-enterprise-ai-strategy-from-scratch#top", icon: "Settings" },
      { title: "Real-time Data Processing: How AI Is Enabling Faster Decision Making", href: "/blog/real-time-data-processing-how-ai-is-enabling-faster-decision-making#top", icon: "Cpu" },
      { title: "How to Build a High-Performing AI Development Team", href: "/blog/how-to-build-a-high-performing-ai-development-team#top", icon: "Users" },
    ],
  },
  { title: "Accolades", href: "/awards#top", dropdown: false },
  { title: "Careers", href: "/careers#top", dropdown: false },
  { title: "Contact", href: "/contact#top", dropdown: false },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const pathname = location.pathname;
  const currentHash = location.hash;

  const desktopNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      // Check if desktop nav is visible (xl breakpoint: 1280px)
      if (window.innerWidth >= 1280 && desktopNavRef.current && !desktopNavRef.current.contains(event.target as Node) && openDropdown !== null) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [openDropdown]);

  useEffect(() => {
    setIsMenuOpen(false);
    setOpenDropdown(null);

    if (currentHash) {
      const targetElement = document.getElementById(currentHash.substring(1));
      if (targetElement) {
        requestAnimationFrame(() => {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      }
    } else {
      if (location.key !== 'default') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
         window.scrollTo({ top: 0, behavior: 'instant' });
      }
    }
  }, [location, pathname, currentHash]);


  const isLinkActive = (href: string, isBasePathOnly: boolean = false) => {
    const currentFullUrl = pathname + (currentHash || '');
    const hrefPath = href.split('#')[0];
    const currentPath = pathname;

    if (href === '/' && currentPath === '/' && (currentHash === '' || currentHash === '#top' || !currentHash)) return true;
    if (!isBasePathOnly && href === currentFullUrl) return true;

    if (isBasePathOnly && hrefPath !== '/') {
        return currentPath.startsWith(hrefPath) && 
               (currentPath.length === hrefPath.length || (currentPath.length > hrefPath.length && currentPath[hrefPath.length] === '/'));
    }
    return false;
  };

  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-white border-b">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8"> {/* lg:px-8 for wider screens */}
        <div className="flex items-center justify-between h-20">
          <div className="w-36 md:w-40 lg:w-44 flex-shrink-0 mr-2 md:mr-3 lg:mr-4"> {/* Adjusted logo width */}
          <RouterLink to="/">
    <img
      src="/thor-signia-logo.png"
      alt="Thor Signia Logo"
      className="w-full h-full object-contain"
       width="150"
      height="80"
    />
</RouterLink>

          </div>

          {/* Desktop Navigation: Hidden below 'xl' (1280px), flex above */}
          <div
            className="hidden xl:flex xl:space-x-3 2xl:space-x-4 flex-1 justify-end" // Changed lg to xl for visibility and spacing
            ref={desktopNavRef}
          >
            {navItems.map((item) => {
              const isActiveSection = isLinkActive(item.href, true);
              const isDropdownOpen = openDropdown === item.title;
              const isTriggerHighlighted = isDropdownOpen || (item.dropdown && isActiveSection && !isDropdownOpen);


              return (
                <div key={item.title} className="relative group h-full flex items-center">
                  {item.dropdown ? (
                    <button
                      onClick={() => setOpenDropdown(isDropdownOpen ? null : item.title)}
                      className={cn(
                        "font-semibold transition-colors h-full flex items-center whitespace-nowrap",
                        "xl:text-sm 2xl:text-base", // Adjusted text size for new breakpoint
                        "px-1 xl:px-2 2xl:px-3", // Adjusted padding for new breakpoint
                        "hover:text-[#88bf42]",
                        isDropdownOpen ? "text-[#88bf42] border-b-2 border-[#88bf42]" :
                        isActiveSection ? "text-[#88bf42] border-b-2 border-[#88bf42]" : "text-foreground border-b-2 border-transparent",
                        "flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      )}
                      aria-haspopup="menu"
                      aria-expanded={isDropdownOpen}
                    >
                      <span className={isTriggerHighlighted ? "text-[#88bf42]" : "text-foreground"}>
                        {item.title}
                      </span>
                      <ChevronDown className={cn(
                        "h-4 w-4 transition-transform duration-200",
                        isDropdownOpen ? "rotate-180" : "",
                        isTriggerHighlighted ? "text-[#88bf42]" : "text-foreground"
                      )} />
                    </button>
                  ) : (
                    <RouterLink
                      to={item.href}
                      className={cn(
                        "font-semibold transition-colors hover:text-[#88bf42] h-full flex items-center whitespace-nowrap",
                        "xl:text-sm 2xl:text-base", // Adjusted text size
                        "px-1 xl:px-2 2xl:px-3", // Adjusted padding
                        isLinkActive(item.href) ? "text-[#88bf42] border-b-2 border-[#88bf42]" : "text-foreground border-b-2 border-transparent",
                        "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      )}
                    >
                      {item.title}
                    </RouterLink>
                  )}

                  {item.dropdown && isDropdownOpen && item.items && (
                    <div
                      className={cn(
                        "absolute top-full left-1/2 -translate-x-1/2 mt-0",
                        "w-[700px] max-w-[calc(100vw-32px)]",
                        "bg-background border rounded-md shadow-lg p-6",
                        "z-50 animate-in slide-in-from-top-1 fade-in-0",
                        "flex gap-8"
                      )}
                      role="menu" aria-orientation="vertical"
                    >
                      <div className="w-64 flex-shrink-0">
                        <RouterLink
                          to={item.href}
                          className={cn(
                            "flex flex-col h-full p-5 rounded-md",
                            "bg-[#88bf42]/10 hover:bg-[#88bf42]/20",
                            "transition-colors duration-200",
                            "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                            isActiveSection ? "border border-[#88bf42]" : "border border-transparent"
                          )}
                          role="menuitem"
                        >
                          {item.mainIcon && typeof iconMap[item.mainIcon] !== 'undefined' && (
                            <IconComponent name={item.mainIcon} className="h-10 w-10 text-[#88bf42] mb-4" />
                          )}
                          <div className="text-lg md:text-xl font-semibold text-foreground leading-tight mb-1">{item.title} Overview</div>
                          {item.mainDescription && (
                            <p className="text-sm text-muted-foreground leading-snug">{item.mainDescription}</p>
                          )}
                        </RouterLink>
                      </div>
                      <div className="flex-1">
                        <ul className="flex flex-col gap-y-3">
                          {item.items.map((subItem) => {
                            const subItemIconName = subItem.icon as IconName | undefined;
                            const hasValidIcon = subItemIconName && typeof iconMap[subItemIconName] !== 'undefined';
                            const isSubItemCurrentlyActive = isLinkActive(subItem.href);
                            return (
                              <li key={subItem.title}>
                                <RouterLink
                                  to={subItem.href}
                                  className={cn(
                                    "flex items-center gap-3 rounded-sm px-3 py-2 outline-none transition-colors text-base",
                                    "hover:bg-[#88bf42]/20 hover:text-[#88bf42] focus:bg-[#88bf42]/20 focus:text-[#88bf42]",
                                    isSubItemCurrentlyActive ? "text-[#88bf42] font-semibold" : "text-foreground"
                                  )}
                                  role="menuitem"
                                >
                                  {hasValidIcon && (
                                    <IconComponent name={subItemIconName} className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
                                  )}
                                  <span className="leading-snug">{subItem.title}</span>
                                </RouterLink>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile menu button: Visible below 'xl' (1280px) */}
          <div className="xl:hidden"> {/* Changed lg to xl */}
            <Button
              variant="ghost"
              className="h-14 w-14 text-foreground hover:text-[#88bf42]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ height: '40px', width: '40px' }}
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ height: '40px', width: '40px' }}
                >
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel: Visible below 'xl' (1280px) */}
      {isMenuOpen && (
         <div className="xl:hidden absolute top-20 left-0 w-full bg-white border-t h-[calc(100vh-80px)] overflow-y-auto px-4 sm:px-6 pb-4"> {/* Changed lg to xl */}
          <nav className="flex flex-col space-y-1 mt-4">
            {navItems.map((item) => {
              const isActiveSectionMobile = isLinkActive(item.href, true);
              const isMobileDropdownOpen = openDropdown === item.title;
              return (
              <div key={item.title}>
                {!item.dropdown ? (
                  <RouterLink
                    to={item.href}
                    className={cn(
                      "text-lg font-medium block py-2.5 px-2 rounded-md",
                      isLinkActive(item.href) ? "text-[#88bf42] bg-[#88bf42]/10 font-bold" : "text-foreground hover:bg-muted/50",
                    )}
                  >
                    {item.title}
                  </RouterLink>
                ) : (
                  <div>
                    <button
                      onClick={() => setOpenDropdown(isMobileDropdownOpen ? null : item.title)}
                      className={cn(
                        "text-lg font-medium w-full text-left py-2.5 px-2 rounded-md",
                        "flex justify-between items-center",
                        (isMobileDropdownOpen || isActiveSectionMobile) ? "text-[#88bf42] bg-[#88bf42]/10 font-bold" : "text-foreground hover:bg-muted/50"
                      )}
                      aria-expanded={isMobileDropdownOpen}
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 transition-transform duration-200",
                          isMobileDropdownOpen ? "rotate-180" : "",
                          (isMobileDropdownOpen || isActiveSectionMobile) ? "text-[#88bf42]" : "text-muted-foreground"
                        )}
                      />
                    </button>
                    {item.items && isMobileDropdownOpen && (
                      <div className="mt-2 ml-3 pl-3 border-l-2 border-muted/50 flex flex-col space-y-1">
                        <RouterLink
                          to={item.href}
                          className={cn(
                            "text-base font-semibold py-2 px-2 rounded-md",
                            isActiveSectionMobile ? "text-[#88bf42] bg-[#88bf42]/10" : "text-foreground hover:bg-muted/50",
                            "flex items-center gap-2"
                          )}
                        >
                          {item.mainIcon && typeof iconMap[item.mainIcon] !== 'undefined' && (
                            <IconComponent name={item.mainIcon} className="h-4 w-4 text-muted-foreground" />
                          )}
                          <span>{item.title} Overview</span>
                        </RouterLink>

                        {item.items.map((subItem) => {
                          const subItemIconName = subItem.icon as IconName | undefined;
                          const hasValidIcon = subItemIconName && typeof iconMap[subItemIconName] !== 'undefined';
                          const isSubItemCurrentlyActiveMobile = isLinkActive(subItem.href);
                          return (
                            <RouterLink
                              key={subItem.title}
                              to={subItem.href}
                              className={cn(
                                "text-base py-2 px-2 rounded-md",
                                isSubItemCurrentlyActiveMobile ? "text-foreground bg-muted/80 font-semibold" : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                                "flex items-center gap-2"
                              )}
                            >
                              {hasValidIcon && (
                                <IconComponent name={subItemIconName} className="h-5 w-5 flex-shrink-0" />
                              )}
                              <span>{subItem.title}</span>
                            </RouterLink>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}