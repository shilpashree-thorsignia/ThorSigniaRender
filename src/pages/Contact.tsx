'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, Mail, Linkedin, Twitter, Instagram, Github, CheckCircle2, MapPin, Phone, Facebook, MessageCircle, TrendingUp, Zap, Globe, AlertTriangle, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { cn } from '@/utils/cn';

const RECAPTCHA_SITE_KEY='6Ld3P1QrAAAAAMF8yMjR62NtkHR3yZ1aT8zkPQ4a';

const socialIcons = {
  facebook: {
    ariaLabel: "Facebook",
    url: "https://www.facebook.com/thorsignia/",
    // Modern Facebook icon SVG with gradient blue background
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8">
        <defs>
          <linearGradient id="facebookGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1877F2"/>
            <stop offset="100%" stopColor="#0C63D4"/>
          </linearGradient>
        </defs>
        <rect width="24" height="24" rx="6" fill="url(#facebookGradient)"/>
        <path fill="white" d="M16.5 8H14c-.3 0-.5.2-.5.5v2h3v2.5h-3V20h-3v-7H8v-2.5h2.5V8c0-2.5 1.5-4 4-4h2V8z"/>
      </svg>
    ),
  },
  x: {
    ariaLabel: "X",
    url: "https://www.x.com/@Thorsignia",
    svg: (
      <img
        src="/assets/x.jpg"
        alt="X"
        className="w-8 h-8 rounded bg-white "
      
      />
    ),
  },
  
  instagram: {
    ariaLabel: "Instagram",
    url: "https://www.instagram.com/thorsignia/",
    // Standard Instagram icon SVG with gradient background applied to the main path
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8">
        <defs>
          <radialGradient id="instagramGradient" cx="19%" cy="99%" r="108%">
            <stop offset="0%" stopColor="#fdf497"/>
            <stop offset="5%" stopColor="#fdf497"/>
            <stop offset="45%" stopColor="#fd5949"/>
            <stop offset="60%" stopColor="#d6249f"/>
            <stop offset="90%" stopColor="#285AEB"/>
          </radialGradient>
        </defs>
        <rect width="24" height="24" rx="6" fill="url(#instagramGradient)"/>
        <g fill="#fff">
          <path d="M12 15.9a3.9 3.9 0 1 1 0-7.8 3.9 3.9 0 0 1 0 7.8zm0-6.6a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4z"/>
          <circle cx="16.1" cy="7.9" r=".9"/>
          <path d="M17.5 5.3h-11a1.2 1.2 0 0 0-1.2 1.2v11c0 .6.6 1.2 1.2 1.2h11c.6 0 1.2-.6 1.2-1.2v-11c0-.6-.6-1.2-1.2-1.2zm0 12.2h-11v-11h11v11z"/>
        </g>
      </svg>
    ),
  },
  linkedin: {
    ariaLabel: "LinkedIn",
    url: "https://www.linkedin.com/company/thorsignia/?originalSubdomain=in",
    // Official LinkedIn logo with square design and rounded corners
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8">
        <rect width="24" height="24" rx="4" fill="#0A66C2"/>
        <path fill="white" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-1.5 1.5h3v9h-3v-9zm4.5 0h3v1.3c.6-1 1.8-1.6 3-1.5 2.7 0 3.5 1.8 3.5 4.2v5h-3v-4.5c0-1.1 0-2.5-1.5-2.5s-1.5 1.2-1.5 2.5v4.5h-3v-9z"/>
      </svg>
    ),
  },
};

// Add API URL configuration
import { config } from '../config/env';

const API_URL = process.env.NODE_ENV === 'production' 
  ? `${config.apiUrl}/api/contact`
  : '/api/contact';

// Rate limiting configuration
const RATE_LIMIT = {
  maxSubmissions: 15, // Maximum submissions per hour
  timeWindow: 60 * 60 * 1000, // 1 hour in milliseconds
  storageKey: 'contact_form_submissions'
};

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const pulseAnimation = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.02, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "mirror" as const
    }
  }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 }
  }
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 }
  }
};

// Add reCAPTCHA interface to window object
declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

// Rate limiting functions
const getSubmissionHistory = () => {
  try {
    const stored = localStorage.getItem(RATE_LIMIT.storageKey);
    if (!stored) return [];
    
    const submissions = JSON.parse(stored);
    const now = Date.now();
    
    // Filter out submissions older than 1 hour
    return submissions.filter(timestamp => (now - timestamp) < RATE_LIMIT.timeWindow);
  } catch (error) {
    console.error('Error reading submission history:', error);
    return [];
  }
};

const addSubmissionTimestamp = () => {
  try {
    const history = getSubmissionHistory();
    history.push(Date.now());
    localStorage.setItem(RATE_LIMIT.storageKey, JSON.stringify(history));
  } catch (error) {
    console.error('Error saving submission history:', error);
  }
};

const canUserSubmit = () => {
  const history = getSubmissionHistory();
  return history.length < RATE_LIMIT.maxSubmissions;
};

const getRemainingSubmissions = () => {
  const history = getSubmissionHistory();
  return Math.max(0, RATE_LIMIT.maxSubmissions - history.length);
};

const getTimeUntilReset = () => {
  const history = getSubmissionHistory();
  if (history.length === 0) return 0;
  
  const oldestSubmission = Math.min(...history);
  const resetTime = oldestSubmission + RATE_LIMIT.timeWindow;
  const now = Date.now();
  
  return Math.max(0, resetTime - now);
};

// Rate limit warning component
const RateLimitWarning = ({ remaining, timeUntilReset }) => {
  if (remaining > 5) return null;
  
  const formatTime = (ms) => {
    const minutes = Math.ceil(ms / (1000 * 60));
    return minutes > 60 ? `${Math.ceil(minutes / 60)} hour(s)` : `${minutes} minute(s)`;
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg"
    >
      <div className="flex items-center">
        <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
        <div>
          <p className="text-sm text-yellow-800">
            <strong>Rate Limit Notice:</strong> You have {remaining} submission{remaining !== 1 ? 's' : ''} remaining this hour.
            {remaining === 0 && timeUntilReset > 0 && (
              <> You can submit again in {formatTime(timeUntilReset)}.</>
            )}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const ContactPage = () => {
  useEffect(() => {
    document.title = "Contact Us | ThorSignia";
  }, []);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    requestType: '',
    message: '',
    authorizeContact: false,
    honeypot: '',
  });
  
  // Rate limiting state
  const [rateLimitInfo, setRateLimitInfo] = useState({
    canSubmit: true,
    remaining: RATE_LIMIT.maxSubmissions,
    timeUntilReset: 0
  });
  
  // Form timing protection
  const formLoadTime = useRef(Date.now());
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  
  // Update rate limit info
  const updateRateLimitInfo = () => {
    setRateLimitInfo({
      canSubmit: canUserSubmit(),
      remaining: getRemainingSubmissions(),
      timeUntilReset: getTimeUntilReset()
    });
  };

  // Load reCAPTCHA script
  useEffect(() => {
    if (!window.grecaptcha) {
      const script = document.createElement('script');
      script.src = 'https://www.google.com/recaptcha/api.js?render=6Ld3P1QrAAAAAMF8yMjR62NtkHR3yZ1aT8zkPQ4a'; 
      script.async = true;
      script.defer = true;
      script.onload = () => {
        setRecaptchaLoaded(true);
      };
      document.head.appendChild(script);
      
      return () => {
        document.head.removeChild(script);
      };
    } else {
      setRecaptchaLoaded(true);
    }
  }, []);

  // Rate limit checking effect
  useEffect(() => {
    updateRateLimitInfo();
    
    // Update every minute
    const interval = setInterval(updateRateLimitInfo, 60000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Execute reCAPTCHA when form is about to be submitted
  const executeRecaptcha = async () => {
    if (!window.grecaptcha) {
      console.error('reCAPTCHA not loaded');
      return null;
    }
    
    try {
      return await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, {action: 'contact_form'}); 
    } catch (error) {
      console.error('reCAPTCHA execution failed:', error);
      return null;
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, requestType: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, authorizeContact: checked }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    
    // Check rate limit first
    if (!canUserSubmit()) {
      const timeLeft = getTimeUntilReset();
      const minutes = Math.ceil(timeLeft / (1000 * 60));
      alert(`You've reached the maximum number of submissions (${RATE_LIMIT.maxSubmissions}) per hour. Please try again in ${minutes} minutes.`);
      return;
    }
    
    // Bot detection checks
    if (formData.honeypot) {
      console.log('Honeypot triggered - likely bot submission');
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
      return;
    }
    
    const timeSinceLoad = Date.now() - formLoadTime.current;
    if (timeSinceLoad < 3000) {
      console.log('Form submitted too quickly - likely bot submission');
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
      return;
    }
    
    // Get reCAPTCHA token
    let token = null;
    if (recaptchaLoaded) {
      token = await executeRecaptcha();
      if (!token) {
        alert('Could not verify you are human. Please try again.');
        return;
      }
    }
    
    setIsLoading(true);
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.firstName,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
          authorizeContact: formData.authorizeContact,
          recaptchaToken: token,
        })
      });
      
      if (!response.ok) {
        // Handle rate limit error from backend
        if (response.status === 429) {
          const errorBody = await response.json();
          alert(errorBody.message || 'Rate limit exceeded. Please try again later.');
          updateRateLimitInfo();
          return;
        }
        
        let errorMessage = `Failed to submit contact form. Status: ${response.status}`;
        try {
          const errorBody = await response.json();
          if (errorBody.error || errorBody.message) {
            errorMessage = errorBody.message || errorBody.error || errorMessage;
          }
        } catch (jsonError) {
          console.error('Error parsing error response:', jsonError);
        }
        throw new Error(errorMessage);
      }
      
      // Add submission timestamp on successful submission
      addSubmissionTimestamp();
      
      setIsSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        requestType: '',
        message: '',
        authorizeContact: false,
        honeypot: '',
      });
      
      // Update rate limit info
      updateRateLimitInfo();
      
      setTimeout(() => setIsSubmitted(false), 5000);

    } catch (error: any) {
      console.error('Submission error:', error);
      alert(`There was an error submitting the form: ${error.message}. Please try again.`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="relative w-full">
        <div className="h-[50vh] max-h-[450px] relative overflow-hidden w-full flex flex-col justify-center items-center px-4 py-12 bg-gradient-to-r from-[#0B0F19] to-[#171E2E]">
          {/* SVG grid pattern overlay */}
          <div className="absolute inset-0 opacity-30 z-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="contact-hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#88bf42" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#contact-hero-grid)" />
            </svg>
          </div>
          {/* Animated floating dots */}
          {Array.from({ length: 16 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                background: i % 2 === 0 ? '#88bf42' : '#009898',
                opacity: 0.1 + Math.random() * 0.1
              }}
              animate={{
                y: [0, Math.random() * 20 - 10, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
            />
          ))}
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-[#171E2E] opacity-70 z-0" />
          <div className="max-w-2xl mx-auto text-center z-20 relative">
            <h1 className="text-3xl md::text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
              <span className="text-white"> Get in </span>
              <span className="text-[#88BF42]">Touch</span>
            </h1>
            <p className="text-white/80 text-base md:text-lg mb-8 max-w-lg mx-auto">
           We'd love to hear from you. Reach out to discuss how our intelligent voice, chat, and campaign automation solutions can help your business grow.
            </p>
            <div className="flex justify-center gap-4 mt-2">
              <Link
                to="/services"
                className="bg-white text-[#88BF42] border border-[#88BF42] px-6 py-3 rounded-md font-semibold shadow hover:bg-[#88BF42] hover:text-white transition-all text-base inline-block"
              >
                Our Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20 relative z-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100"
            >
              <motion.div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0F0326] mb-3">Reach Out</h2>
                <p className="text-[#696869] text-base md:text-lg">Ready to discuss how thorsignia can help your organization? Simply fill out this form to contact sales.</p>
              </motion.div>

              {/* Rate Limit Warning */}
              <RateLimitWarning 
                remaining={rateLimitInfo.remaining} 
                timeUntilReset={rateLimitInfo.timeUntilReset} 
              />

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center justify-center py-10 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-[#88BF42]/20 flex items-center justify-center mb-6">
                    <CheckCircle2 className="h-10 w-10 text-[#88BF42]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0F0326] mb-3">Thank You!</h3>
                  <p className="text-[#696869] text-base md:text-lg mb-6">Your message has been sent successfully. We'll get back to you shortly.</p>
                  <p className="text-sm text-gray-500">
                    Submissions remaining this hour: {rateLimitInfo.remaining}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot field - hidden from humans but bots will fill it */}
                  <div className="absolute opacity-0 h-0 w-0 overflow-hidden pointer-events-none">
                    <Label htmlFor="honeypot" className="text-[#0F0326]">Leave this empty</Label>
                    <Input
                      id="honeypot"
                      name="honeypot"
                      value={formData.honeypot}
                      onChange={handleChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-[#0F0326]">First Name*</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="border-gray-200 focus:border-[#88BF42] focus:ring-[#88BF42]/20 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-[#0F0326]">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="border-gray-200 focus:border-[#88BF42] focus:ring-[#88BF42]/20 transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-[#0F0326]">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="border-gray-200 focus:border-[#88BF42] focus:ring-[#88BF42]/20 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#0F0326]">Email*</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-gray-200 focus:border-[#88BF42] focus:ring-[#88BF42]/20 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-[#0F0326]">Contact Number*</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="border-gray-200 focus:border-[#88BF42] focus:ring-[#88BF42]/20 transition-all"
                    />
                  </div>
                   <div className="space-y-2">
                    <Label htmlFor="message" className="text-[#0F0326]">Any Questions?</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us what you need..."
                      required
                      className="min-h-[80px] border-gray-200 focus:border-[#88BF42] focus:ring-[#88BF42]/20 transition-all"
                    />
                  </div>
                  <div className="flex items-start space-x-2 pt-2">
                    <Checkbox
                      id="authorizeContact"
                      checked={formData.authorizeContact}
                      onCheckedChange={handleCheckboxChange}
                      className="border-gray-300 text-[#88BF42] mt-1 data-[state=checked]:bg-[#88BF42] data-[state=checked]:text-white"
                    />
                    <div className="grid gap-1.5 leading-none">
                      <Label
                        htmlFor="authorizeContact"
                        className="text-sm text-[#696869] font-normal leading-snug peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        I authorise ThorSignia & its representatives to contact me with updates and notifications via Email. This will override DND/NDNC.*
                      </Label>
                    </div>
                  </div>
                  <motion.div
                    variants={fadeIn}
                    whileHover={{ scale: rateLimitInfo.canSubmit ? 1.02 : 1 }}
                    whileTap={{ scale: rateLimitInfo.canSubmit ? 0.98 : 1 }}
                  >
                    <Button
                      type="submit"
                      disabled={isLoading || !formData.authorizeContact || !rateLimitInfo.canSubmit}
                      className="w-full bg-[#88BF42] hover:bg-[#88BF42]/90 text-white py-6 text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                      data-action="submit"
                    >
                      {!rateLimitInfo.canSubmit ? (
                        'Rate Limit Exceeded'
                      ) : isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        'Submit Request'
                      )}
                    </Button>
                  </motion.div>
                  
                  {/* Show remaining submissions */}
                  <div className="text-xs text-gray-500 text-center">
                    Submissions remaining this hour: {rateLimitInfo.remaining}/{RATE_LIMIT.maxSubmissions}
                  </div>
                  
                  {/* Invisible reCAPTCHA badge */}
                  <div className="text-[12px] md:text-[12px] text-gray-500 text-center mt-4">
                    This site is protected by reCAPTCHA and the Google
                    <a href="https://policies.google.com/privacy" className="text-[#88BF42] hover:underline text-[12px] md:text-[14px]"> Privacy Policy</a> and
                    <a href="https://policies.google.com/terms" className="text-[#88BF42] hover:underline text-[12px] md:text-[14px]"> Terms of Service </a>
                     apply.
                  </div>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <div className="space-y-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 h-full flex flex-col"
              >
                {/* Title */}
                <h2 className="text-3xl font-bold text-[#0F0326] mb-4 flex items-center gap-2">
                    <MapPin className="inline-block w-7 h-7 text-[#88BF42] mr-1" />
                    Our Office
                </h2>

                {/* Intro Paragraph */}
                <p className="text-[#696869] text-base md:text-lg mb-6 leading-relaxed">
                    We're more than happy to connect with you! Whether you have questions, need expert guidance, or are exploring innovative ways to grow your business — our dedicated team is here to help. Reach out today and discover how our cutting-edge solutions can drive your success and transform your vision into reality.
                </p>

                {/* Why Reach Out? Section */}
                <div className="mb-8">
                    <h3 className="text-xl font-bold text-[#0F0326] mb-4">Why Reach Out to Us?</h3>
                    <div className="space-y-3">
                        {/* List items */}
                        <div className="flex items-center gap-3">
                            <MessageCircle className="w-6 h-6 text-[#88BF42] flex-shrink-0" />
                            <p className="text-[#696869] text-base md:text-lg">Discuss your project needs and challenges.</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <TrendingUp className="w-6 h-6 text-[#88BF42] flex-shrink-0" />
                            <p className="text-[#696869] text-base md:text-lg">Explore strategies for business growth and innovation.</p>
                        </div>
                        <div className="flex items-center gap-3">
                             <Zap className="w-6 h-6 text-[#88BF42] flex-shrink-0" />
                            <p className="text-[#696869] text-base md:text-lg">Learn about our specific services and solutions.</p>
                        </div>
                    </div>
                </div>

                {/* Contact Details - Vertical Flex Layout */}
                <div className="flex flex-col space-y-6 mb-8">

                  {/* Phone Item */}
                  <div className="flex items-start gap-3">
                    <Phone className="w-6 h-6 text-[#88BF42] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-[#0F0326] mb-1">Phone</h3>
                      <p className="text-[#696869] text-base md:text-lg">+(91) 90080 97780</p>
                    </div>
                  </div>

                  {/* Email Item */}
                  <div className="flex items-start gap-3">
                    <Mail className="w-6 h-6 text-[#88BF42] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-[#0F0326] mb-1">Email</h3>
                      <p className="text-[#696869] text-base md:text-lg">info@thorsignia.online</p>
                    </div>
                  </div>

                </div>

                {/* Social Media Links */}
               <div className="flex space-x-4 items-center mt-6">
                             {Object.entries(socialIcons).map(([key, social]) => (
                               <a
                                 key={key}
                                 href={social.url}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 aria-label={social.ariaLabel}
                                 className={cn(
                                   "inline-flex items-center justify-center w-9 h-9",
                                   "transition-transform duration-200 ease-out hover:scale-110",
                                 )}
                               >
                                 {social.svg}
                               </a>
                             ))}
                           </div>
                         
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* === Modified: We Are Global Section === */}
      <section className="py-12 md:py-20 bg-[#f5f8ff]">
          <div className="container mx-auto px-4">
              {/* Section Title */}
              <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  className="text-center mb-12"
              >
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0F0326] mb-4">
                      <Globe className="inline-block w-8 h-8 text-[#88BF42] mr-2 mb-1" />
                      Our Global Reach
                  </h2>
                  <p className="text-[#696869] text-base md:text-lg max-w-2xl mx-auto">
                      While our office is based in Bengaluru, our impact spans across continents. We work with clients globally, bringing our innovative solutions to diverse markets and helping businesses succeed wherever they are.
                  </p>
              </motion.div>

              {/* Image Map with Locations - Full width map */}
              <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  className="text-center mb-12"
              >
                  
              </motion.div>

              {/* Image Map with Locations - Full width map */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="mt-8 rounded-2xl shadow-xl overflow-hidden bg-white p-0 border border-gray-100 w-full"
            >
                <div className="relative w-full overflow-hidden h-[350px] sm:h-[450px] md:h-[500px] lg:h-[600px]">
                    <img
                        src="/assets/world2.png"
                        alt="World Map showing global presence"
                        className="w-full h-full object-cover"
                    />

                    {/* USA */}
                    <div className="absolute z-10" style={{ top: '38%', left: '19%' }}>
                        <div className="w-2.5 h-2.5 md:w-4 md:h-4 bg-[#007bff] rounded-full animate-pulse"></div>
                        <span className="absolute -top-5 md:-top-6 left-1/2 transform -translate-x-1/2 text-[10px] md:text-xs font-bold text-[#0F0326] bg-white/80 px-1.5 py-0.5 md:px-2 md:py-1 rounded whitespace-nowrap">USA</span>
                    </div>

                    {/* UAE */}
                    <div className="absolute z-10" style={{ top: '42%', left: '60%' }}>
                        <div className="w-2.5 h-2.5 md:w-4 md:h-4 bg-[#007bff] rounded-full animate-pulse"></div>
                        <span className="absolute -top-5 md:-top-6 left-1/2 transform -translate-x-1/2 text-[10px] md:text-xs font-bold text-[#0F0326] bg-white/80 px-1.5 py-0.5 md:px-2 md:py-1 rounded whitespace-nowrap">UAE</span>
                    </div>

                    {/* Hyderabad */}
                    <div className="absolute z-10" style={{ top: '51%', left: '71%' }}>
                        <div className="w-2.5 h-2.5 md:w-4 md:h-4 bg-[#007bff] rounded-full animate-pulse"></div>
                        <span className="
                            absolute whitespace-nowrap
                            text-[10px] font-bold text-[#0F0326] bg-white/80 px-1.5 py-0.5 rounded

                            /* --- Mobile: North-West of its dot, moved left --- */
                            bottom-full right-full mb-0.5 mr-0.5 /* Changed 'left-full mr-0.5' to 'right-full mr-0.5' */

                            /* --- MD+: ABOVE the dot, centered, plus slightly more left shift --- */
                            md:bottom-auto md:right-auto md:mb-0 md:mr-0 /* Reset mobile positioning & margins */
                            md:top-[-1.5rem]                    /* -top-6 */
                            md:left-1/2
                            md:-translate-x-1/2
                            md:text-xs md:px-2 md:py-1
                            md:-ml-6 /* Adjusted: Increased negative left margin */
                        ">Hyderabad</span>
                    </div>

                    {/* Bangalore (Bengaluru) */}
                    <div className="absolute z-10" style={{ top: '52%', left: '70%' }}>
                        <div className="w-2.5 h-2.5 md:w-4 md:h-4 bg-[#88BF42] rounded-full animate-pulse"></div>
                        <span className="
                            absolute whitespace-nowrap
                            text-[10px] font-bold text-[#0F0326] bg-white/80 px-1.5 py-0.5 rounded

                            /* --- Mobile: South-West of its dot, moved left --- */
                            top-full right-full mt-0.5 mr-0.5 /* Changed 'left-full mr-0.5' to 'right-full mr-0.5' */

                            /* --- MD+: BELOW the dot, centered, plus small left shift --- */
                            md:top-auto md:right-auto md:mt-0 md:mr-0 /* Reset mobile positioning & margins */
                            md:top-[1.5rem]                     /* top-6 */
                            md:left-1/2
                            md:-translate-x-1/2
                            md:text-xs md:px-2 md:py-1
                            md:-ml-2 /* Added: Negative left margin */
                        ">Bangalore</span>
                    </div>

                    {/* Malaysia */}
                    <div className="absolute z-10" style={{ top: '50.5%', left: '76.5%' }}>
                        <div className="w-2.5 h-2.5 md:w-4 md:h-4 bg-[#007bff] rounded-full animate-pulse"></div>
                        <span className="
                            absolute whitespace-nowrap
                            text-[10px] font-bold text-[#0F0326] bg-white/80 px-1.5 py-0.5 rounded

                            /* --- Mobile: North-East of its dot, reduced spacing --- */
                            bottom-full left-full mb-0.5 ml-0.5

                            /* --- MD+: ABOVE the dot, centered --- */
                            md:bottom-auto md:left-auto md:mb-0 md:ml-0 /* Reset mobile positioning & margins */
                            md:top-[-1.5rem] /* -top-6 */
                            md:left-1/2
                            md:-translate-x-1/2
                            md:text-xs md:px-2 md:py-1
                        ">Malaysia</span>
                    </div>

                    {/* Singapore */}
                    <div className="absolute z-10" style={{ top: '53.5%', left: '77.5%' }}>
                        <div className="w-2.5 h-2.5 md:w-4 md:h-4 bg-[#007bff] rounded-full animate-pulse"></div>
                        <span className="
                            absolute whitespace-nowrap
                            text-[10px] font-bold text-[#0F0326] bg-white/80 px-1.5 py-0.5 rounded

                            /* --- Mobile: South-East of its dot, reduced spacing --- */
                            top-full left-full mt-0.5 ml-0.5

                            /* --- MD+: BELOW the dot, centered --- */
                            md:top-auto md:left-auto md:mt-0 md:ml-0 /* Reset mobile positioning & margins */
                            md:top-[1.5rem] /* top-6 */
                            md:left-1/2
                            md:-translate-x-1/2
                            md:text-xs md:px-2 md:py-1
                        ">Singapore</span>
                    </div>
                </div>
            </motion.div>
          </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactPage;