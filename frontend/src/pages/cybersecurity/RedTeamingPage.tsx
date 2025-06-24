import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link as RouterLink } from 'react-router-dom';

const RedTeamingPage = () => {
  useEffect(() => {
    document.title = "Red Teaming | ThorSignia";
  }, []);
  // Custom testimonials for Offensive Security
  const offensiveSecurityTestimonials = [
    {
      id: 1,
      quote: "Their offensive security team found vulnerabilities that our automated tools completely missed. The detailed remediation steps were incredibly valuable.",
      name: "Alex Reynolds",
      title: "CISO",
      company: "TechNova Industries",
      image: "/images/testimonials/alex.jpg",
      rating: 5
    },
    {
      id: 2,
      quote: "The ethical hacking assessment was eye-opening. They identified critical attack vectors we hadn't considered and helped us build a more robust security posture.",
      name: "Sophia Chen",
      title: "IT Security Director",
      company: "Datashield Corp",
      image: "/images/testimonials/sophia.jpg",
      rating: 5
    },
    {
      id: 3,
      quote: "Working with their offensive security team gave us confidence in our defenses. They were thorough, professional, and truly understood our business needs.",
      name: "Marcus Johnson",
      title: "CTO",
      company: "SecureFinance",
      image: "/images/testimonials/marcus.jpg",
      rating: 5
    }
  ];

  // Simplified animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const features = [
    {
      title: "Objective-Based Testing",
      description: "We focus on specific objectives that align with your security concerns and business requirements.",
      icon: (
        <svg className="w-8 h-8 text-[#88bf42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      title: "Stealth Operations",
      description: "We operate under the radar to test your ability to detect and respond to sophisticated threats.",
      icon: (
        <svg className="w-8 h-8 text-[#88bf42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      title: "Multi-Vector Attacks",
      description: "We use a combination of technical and social engineering techniques to simulate realistic threat scenarios.",
      icon: (
        <svg className="w-8 h-8 text-[#88bf42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Advanced Persistence",
      description: "We simulate advanced persistent threats to test your long-term detection capabilities.",
      icon: (
        <svg className="w-8 h-8 text-[#88bf42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Scenario-Based Testing",
      description: "We create realistic attack scenarios based on current threat intelligence and your industry-specific risks.",
      icon: (
        <svg className="w-8 h-8 text-[#88bf42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: "Comprehensive Reporting",
      description: "We provide detailed reports on our findings, including entry points, vulnerabilities, and recommendations.",
      icon: (
        <svg className="w-8 h-8 text-[#88bf42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f0326] to-[#1a0845] opacity-5 z-0"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute top-20 left-[10%] w-64 h-64 rounded-full bg-[#88bf42]/5"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.2, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-10 right-[5%] w-96 h-96 rounded-full bg-[#0f0326]/5"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Mobile-only Tagline - Appears FIRST on mobile due to order-1, hidden on desktop */}
          <motion.div
             initial="initial"
             animate="animate"
             variants={fadeIn}
             className="block md:hidden order-1 w-full flex justify-center mb-8"
          >
             <div className="inline-block px-4 py-1.5 rounded-full bg-[#88bf42]/10 text-[#88bf42] text-sm font-medium">
               Advanced Security Testing
             </div>
          </motion.div>


          <div className="flex flex-col md:flex-row items-center gap-12">

            {/* Red Team Operation Animation - Appears SECOND on mobile (order-2) and SECOND on desktop (md:order-2) */}
            {/* Visible on both mobile and desktop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              // order-2 for mobile (after tagline), md:order-2 for desktop, w-full on mobile, md:w-1/2 on desktop, mx-auto/max-w for mobile centering, mb-8 for space below graphic on mobile, md:mb-0 for no space on desktop
              className="order-2 md:order-2 w-full md:w-1/2 mx-auto max-w-sm md:max-w-none mb-8 md:mb-0"
            >
              <div className="relative">
                {/* Added blur gradient element for consistency */}
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-[#88bf42] to-[#0f0326] opacity-30 blur-md"></div>
                {/* Main animation container - Made responsive aspect ratio */}
                 {/* Removed md:p-8 as it was causing issues, keep p-6 */}
                <div className="relative aspect-video bg-gradient-to-br from-[#0f0326] to-[#0f0326]/80 rounded-2xl overflow-hidden shadow-2xl border-2 border-[#0f0326]/20 p-6">
                  {/* Network nodes and connections animation */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      {/* Attack path animation (SVG path and stroke animation scales with container) */}
                       {/* Added preserveAspectRatio */}
                       <svg width="100%" height="100%" viewBox="0 0 400 300" fill="none" preserveAspectRatio="xMidYMid meet">
                          <motion.path
                            d="M20,150 C50,50 150,50 180,150 C210,250 310,250 380,150"
                            stroke="#88bf42"
                            strokeWidth="3"
                            strokeDasharray="0 1"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 0.6 }}
                            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "loop", repeatDelay: 1 }}
                          />
                          {/* Network nodes - Repositioned as SVG circles */}
                           {[
                            { cx: 20, cy: 150, delay: 0 }, // Convert absolute pixel positions to SVG coordinates (which are relative to viewBox)
                            { cx: 180, cy: 150, delay: 0.5 },
                            { cx: 380, cy: 150, delay: 1 },
                            { cx: 100, cy: 80, delay: 1.5 },
                            { cx: 300, cy: 200, delay: 2 },
                            { cx: 100, cy: 220, delay: 2.5 },
                            { cx: 300, cy: 80, delay: 3 }
                           ].map((node, i) => (
                             <motion.circle
                               key={i}
                               cx={node.cx} cy={node.cy} r="6" // Use r for radius
                               fill="white"
                               initial={{ opacity: 0, scale: 0 }}
                               animate={{ opacity: 1, scale: 1 }}
                               transition={{ delay: node.delay, duration: 0.5 }}
                             />
                           ))}

                           {/* Attack indicator - Repositioned as SVG circle */}
                           <motion.circle
                             cx={20} cy={150} r="8" // Use r for radius
                             fill="red"
                             className="drop-shadow-md" // Tailwind class for shadow
                             initial={{ cx: 20, cy: 150, scale: 1 }}
                             animate={{
                               cx: [20, 180, 380],
                               cy: [150, 150, 150], // Assuming the attack stays on the horizontal line
                               scale: [1, 1.2, 1]
                             }}
                             transition={{
                               duration: 4,
                               ease: "easeInOut",
                               repeat: Infinity,
                               repeatType: "loop",
                               repeatDelay: 1,
                               times: [0, 0.5, 1]
                             }}
                           />
                        </svg>
                    </div>
                  </div>

                  {/* Overlay text */}
                   {/* Added responsive padding */}
                   {/* Added responsive text size and centering */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-[#0f0326]/80 backdrop-blur-sm text-center text-sm md:text-base">
                    <p className="text-[#88bf42] font-medium">Red Team Operation in Progress</p>
                  </div>
                </div>

                {/* Decorative elements - Hidden on mobile */}
                 {/* Changed breakpoint to md to match the flex container */}
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#88bf42]/10 rounded-full blur-2xl -z-10 hidden md:block"></div>
                 {/* Changed breakpoint to md to match the flex container */}
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#0f0326]/10 rounded-full blur-2xl -z-10 hidden md:block"></div>
              </div>
            </motion.div>


            {/* Main Text Content (Desktop Tagline, H1, P, Button) - Appears THIRD on mobile (order-3) and FIRST on desktop (md:order-1) */}
            {/* Takes up half width on desktop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
               // order-3 for mobile (after graphic), md:order-1 for desktop, w-full on mobile, md:w-1/2 on desktop, text alignment, mx-auto/max-w for mobile centering, mt-8 for space below graphic on mobile, md:mb-0 for no space on desktop
              className="order-3 md:order-1 w-full md:w-1/2 text-center md:text-left mx-auto max-w-xl md:mx-0 md:max-w-none mt-8 md:mt-0"
            >
              {/* Desktop-only tag line (hidden on mobile) - Moved inside this block */}
               {/* Changed breakpoint to md to match the flex container */}
              <div className="hidden md:inline-block px-3 py-1 mb-4 bg-[#88bf42]/10 rounded-full">
                <span className="text-[#88bf42] font-medium text-sm">Advanced Security Testing</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-[#0f0326] leading-tight mb-6">
                <span className="text-[#88bf42]">Red Teaming</span> Services
              </h1>
              <p className="text-xl text-[#696869] mb-8">
                Simulate sophisticated cyber attacks to test your defense capabilities. Our red team identifies security gaps through real-world attack scenarios.
              </p>
              {/* Adjusted justify */}
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Button
                  size="lg"
                  className="bg-[#88BF42] hover:bg-[#7AAD3A] text-white w-full sm:w-auto h-14 text-lg"
                  asChild
                >
                  <RouterLink
                    to="/contact"
                    className="flex items-center justify-center"
                  >
                    Schedule a Red Team Exercise <ArrowRight className="ml-2 h-5 w-5" />
                  </RouterLink>
                </Button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#0f0326] mb-6">
              Our <span className="text-[#88bf42]">Red Team</span> Approach
            </h2>
            <p className="text-[#696869] max-w-3xl mx-auto text-lg">
              We simulate real-world attacks to test your organization's detection and response capabilities, providing actionable insights to improve your security posture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Objective-Based Testing",
                description: "We focus on specific objectives that align with your security concerns and business requirements.",
                icon: (
                  <svg className="w-8 h-8 text-[#88bf42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                )
              },
              {
                title: "Stealth Operations",
                description: "We operate under the radar to test your ability to detect and respond to sophisticated threats.",
                icon: (
                  <svg className="w-8 h-8 text-[#88bf42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                )
              },
              {
                title: "Multi-Vector Attacks",
                description: "We use a combination of technical and social engineering techniques to simulate realistic threat scenarios.",
                icon: (
                  <svg className="w-8 h-8 text-[#88bf42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              {
                title: "Advanced Persistence",
                description: "We simulate advanced persistent threats to test your long-term detection capabilities.",
                icon: (
                  <svg className="w-8 h-8 text-[#88bf42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: "Scenario-Based Testing",
                description: "We create realistic attack scenarios based on current threat intelligence and your industry-specific risks.",
                icon: (
                  <svg className="w-8 h-8 text-[#88bf42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                )
              },
              {
                title: "Comprehensive Reporting",
                description: "We provide detailed reports on our findings, including entry points, vulnerabilities, and recommendations.",
                icon: (
                  <svg className="w-8 h-8 text-[#88bf42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                )
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#88bf42]/30 group"
              >
                <div className="w-16 h-16 bg-[#88bf42]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#88bf42]/20 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0f0326] mb-4 group-hover:text-[#88bf42] transition-colors duration-300">{feature.title}</h3>
                <p className="text-[#696869]">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#0f0326] mb-6">
              Red Team <span className="text-[#88bf42]">Engagement Process</span>
            </h2>
            <p className="text-[#696869] max-w-3xl mx-auto text-lg">
              Our structured approach ensures thorough assessment of your security defenses from the perspective of a motivated attacker.
            </p>
          </motion.div>

          <div className="space-y-12">
            {[
              {
                number: "01",
                title: "Reconnaissance",
                description: "We gather information about your organization's digital footprint to identify potential entry points."
              },
              {
                number: "02",
                title: "Initial Access",
                description: "We attempt to gain access to your systems using various techniques, from phishing to exploiting vulnerabilities."
              },
              {
                number: "03",
                title: "Persistence",
                description: "Once inside, we establish persistent access to simulate how attackers maintain their presence undetected."
              },
              {
                number: "04",
                title: "Lateral Movement",
                description: "We move through your network to access sensitive systems and data, just as a real attacker would."
              },
              {
                number: "05",
                title: "Data Exfiltration Simulation",
                description: "We simulate the theft of sensitive data to test your data loss prevention capabilities."
              },
              {
                title: "Comprehensive Reporting",
                description: "We provide detailed reports on our findings, including entry points, vulnerabilities, and recommendations.",
                number: "06",
              }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col md:flex-row gap-8 items-center"
              >
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-24 h-24 rounded-full bg-[#88bf42]/10 flex items-center justify-center text-[#88bf42] text-4xl font-bold">
                    {step.number}
                  </div>
                </div>
                <div className="md:w-2/3 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-[#0f0326] mb-4">{step.title}</h3>
                  <p className="text-[#696869] text-lg">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0f0326] to-[#1a0845]">
              <div className="max-w-7xl mx-auto px-4">
                <motion.div
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  className="text-center"
                >
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Ready to Test Your Security Defenses?
                  </h2>
                  <p className="text-gray-300 max-w-3xl mx-auto text-xl mb-10">
                    Our expert red team exercises provide valuable insights into your security posture from an attacker's perspective, helping you identify and address vulnerabilities before they can be exploited.
                  </p>
                  <Button
                    size="lg"
                    className="bg-[#88BF42] hover:bg-[#7AAD3A] text-white w-full sm:w-auto h-14 text-lg"
                    asChild
                  >
                    <RouterLink
                      to="/contact"
                      className="flex items-center justify-center"
                    >
                      Schedule Your Red Team Exercise <ArrowRight className="ml-2 h-5 w-5" />
                    </RouterLink>
                  </Button>
                </motion.div>
              </div>
            </section>

      <Footer />
    </div>
  );
};

export default RedTeamingPage;