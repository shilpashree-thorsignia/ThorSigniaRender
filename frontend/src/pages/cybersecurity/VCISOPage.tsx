import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link as RouterLink } from 'react-router-dom';

const VCISOPage = () => {
  useEffect(() => {
    document.title = "vCISO Services | ThorSignia";
  }, []);
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 z-0"></div>
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute top-20 right-[10%] w-72 h-72 md:w-96 md:h-96 rounded-full bg-[#88bf42]/5"
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-20 -left-20 w-72 h-72 md:w-96 md:h-96 rounded-full bg-[#0f0326]/5"
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
           <motion.div
              initial="initial"
              animate="animate"
              variants={fadeIn}
              className="lg:hidden order-1 w-full flex justify-center mb-8"
           >
             <div className="inline-block px-4 py-1.5 rounded-full bg-[#88bf42]/10 text-[#88bf42] text-sm font-medium">
               Expert Security Leadership
             </div>
           </motion.div>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeIn}
              transition={{ delay: 0.2 }}
              className="order-2 lg:order-2 w-full mb-8 lg:w-1/2 lg:max-w-none lg:mx-0 lg:mb-0"
            >
              <div className="relative">
                 <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-[#88bf42] to-[#0f0326] opacity-30 blur-md"></div>
                {/* Increased base padding, aspect-video manages overall shape */}
                <div className="relative bg-gradient-to-br from-[#0f0326] to-[#0f0326]/80 rounded-2xl overflow-hidden shadow-2xl border-2 border-[#0f0326]/20 p-3 sm:p-4 md:p-5 lg:p-6 aspect-video  flex h-[500px] w-[400px] lg:h-[500px] lg:w-[500px] px-4 max-w-[95%] sm:max-w-[90%] md:max-w-full mx-auto flex-col">
                  {/* Dashboard Header */}
                  <motion.div
                    className="bg-[#0f0326] rounded-lg p-2 sm:p-2.5 md:p-3 mb-2 sm:mb-3 md:mb-4 flex justify-between items-center flex-shrink-0" // flex-shrink-0
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex items-center">
                      <div className="w-6 h-6 sm:w-7 md:w-8 rounded-full bg-[#88bf42] flex items-center justify-center text-white font-bold mr-2 sm:mr-2.5 md:mr-3 text-xs sm:text-sm">
                        C
                      </div>
                      <span className="text-white font-semibold text-xs sm:text-sm md:text-base leading-tight">vCISO Executive Dashboard</span>
                    </div>
                    <div className="flex space-x-1.5 sm:space-x-2">
                      <div className="w-2.5 h-2.5 sm:w-3 rounded-full bg-red-500"></div>
                      <div className="w-2.5 h-2.5 sm:w-3 rounded-full bg-yellow-500"></div>
                      <div className="w-2.5 h-2.5 sm:w-3 rounded-full bg-green-500"></div>
                    </div>
                  </motion.div>

                  {/* Dashboard Content Grid - flex-grow to take remaining space */}
                  <div className="grid grid-cols-2 gap-2.5 sm:gap-3 md:gap-4 flex-grow">

                    {/* Security Score Card */}
                    <motion.div
                      className="bg-white/10 rounded-lg p-2 sm:p-2.5 md:p-3 flex flex-col justify-around" // justify-around for vertical spacing
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <h3 className="text-white text-sm sm:text-base md:text-lg font-bold leading-tight mb-1">Security Posture Score</h3>
                      <div className="flex items-center justify-between sm:justify-around mt-1">
                        <div className="relative w-16 h-16 sm:w-20 md:w-24 lg:w-[45%] aspect-square"> {/* Use aspect-square and % width */}
                          <svg viewBox="0 0 100 100" className="w-full h-full">
                            <circle cx="50" cy="50" r="45" fill="none" stroke="#1a0845" strokeWidth="9" />
                            <motion.circle
                              cx="50" cy="50" r="45" fill="none" stroke="#88bf42" strokeWidth="9"
                              strokeDasharray="283" initial={{ strokeDashoffset: 283 }}
                              animate={{ strokeDashoffset: 283 * (1 - 0.75) }}
                              transition={{ duration: 1.5, delay: 0.7 }}
                              strokeLinecap="round" transform="rotate(-90 50 50)"
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg sm:text-xl md:text-2xl">75%</div>
                        </div>
                        <div className="space-y-1 sm:space-y-1.5 text-[9px] sm:text-[10px] md:text-xs">
                          <div className="flex items-center">
                            <div className="w-2 h-2 sm:w-2.5 rounded-full bg-green-500 mr-1.5"></div>
                            <span className="text-gray-300">Controls: 28/35</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-2 h-2 sm:w-2.5 rounded-full bg-yellow-500 mr-1.5"></div>
                            <span className="text-gray-300">Policies: 12/15</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-2 h-2 sm:w-2.5 rounded-full bg-red-500 mr-1.5"></div>
                            <span className="text-gray-300">Risks: 5 High</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Compliance Status Card */}
                    <motion.div
                      className="bg-white/10 rounded-lg p-2 sm:p-2.5 md:p-3 flex flex-col justify-center" // justify-center
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <h3 className="text-white text-sm sm:text-base md:text-lg font-bold leading-tight mb-1.5 sm:mb-2">Compliance Status</h3>
                      <div className="space-y-1.5 sm:space-y-2">
                        {[
                          { name: "ISO 27001", percent: 88 },
                          { name: "GDPR", percent: 92 },
                          { name: "NIST CSF", percent: 76 }
                        ].map((item, i) => (
                          <div key={i} className="space-y-0.5 sm:space-y-1">
                            <div className="flex justify-between text-[9px] sm:text-[10px] md:text-xs">
                              <span className="text-gray-300">{item.name}</span>
                              <span className="text-white">{item.percent}%</span>
                            </div>
                            <div className="h-1.5 sm:h-2 bg-[#1a0845] rounded-full overflow-hidden">
                              <motion.div
                                className="h-full bg-[#88bf42] rounded-full"
                                initial={{ width: 0 }} animate={{ width: `${item.percent}%` }}
                                transition={{ duration: 1, delay: 0.8 + (i * 0.2) }}
                              ></motion.div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Risk Trends Card */}
                    <motion.div
                      className="bg-white/10 rounded-lg p-2 sm:p-2.5 md:p-3 col-span-2 flex flex-col"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      <h3 className="text-white text-sm sm:text-base md:text-lg font-bold leading-tight mb-1">Risk Trend Analysis</h3>
                      <div className="flex-grow flex items-end justify-between min-h-[4rem] sm:min-h-[5rem]"> {/* min-h for chart area */}
                        {[35, 28, 42, 30, 25, 38, 22, 18, 24, 20, 15, 12].map((value, i) => (
                          <motion.div
                            key={i} className="w-[7.5%] bg-[#88bf42] rounded-t" // Adjusted width slightly for 12 bars
                            style={{ height: '0%' }} animate={{ height: `${value}%` }}
                            transition={{ duration: 0.4, delay: 1.0 + (i * 0.05) }}
                          ></motion.div>
                        ))}
                      </div>
                      <div className="flex justify-between text-gray-400 text-[8px] sm:text-[9px] md:text-xs mt-1">
                        {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map(m => <span key={m} className="flex-1 text-center truncate">{m}</span>)}
                      </div>
                    </motion.div>
                  </div>

                  {/* Live Notifications */}
                  <motion.div
                    className="absolute bottom-1.5 right-1.5 sm:bottom-2 sm:right-2 md:bottom-2.5 md:right-2.5 bg-[#0f0326] border border-[#88bf42]/30 rounded-md p-1 sm:p-1.5 max-w-[100px] sm:max-w-[130px] md:max-w-[150px]"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 1.8 }}
                  >
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 sm:w-2 rounded-full bg-yellow-500 mt-0.5 sm:mt-1 mr-1 sm:mr-1.5 flex-shrink-0"></div>
                      <p className="text-white text-[8px] sm:text-[9px] md:text-[10px] leading-snug">New policy update required: Data Protection</p>
                    </div>
                  </motion.div>
                </div>
                <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-[#88bf42]/10 rounded-full blur-2xl hidden lg:block -z-10"></div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#0f0326]/10 rounded-full blur-2xl hidden lg:block -z-10"></div>
              </div>
            </motion.div>

            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeIn}
              className="order-3 lg:order-1 w-full lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0"
            >
              <div className="hidden lg:inline-block px-3 py-1 mb-4 bg-[#88bf42]/10 rounded-full">
                <span className="text-[#88bf42] font-medium text-sm">Expert Security Leadership</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-[#0f0326] leading-tight mb-6">
                <span className="text-[#88bf42]">Virtual CISO</span> Services
              </h1>
              <p className="text-xl text-[#696869] mb-8 max-w-xl mx-auto lg:mx-0">
                Expert security leadership without the full-time cost. Our virtual CISO services provide strategic security guidance tailored to your organization.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-[#88BF42] hover:bg-[#7AAD3A] text-white w-full sm:w-auto h-14 text-lg"
                  asChild
                >
                  <RouterLink to="/contact" className="flex items-center justify-center">
                    Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
                  </RouterLink>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section (rest of the page remains the same) */}
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
              Our <span className="text-[#88bf42]">vCISO</span> Services
            </h2>
            <p className="text-[#696869] max-w-3xl mx-auto text-lg">
              Our virtual CISO services provide the security leadership your organization needs without the cost of a full-time executive.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Security Strategy Development",
                description: "Development of comprehensive security strategies aligned with your business objectives and risk tolerance.",
                icon: (
                  <svg className="w-8 h-8 text-[#88bf42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                )
              },
              {
                title: "Compliance Management",
                description: "Expert guidance on meeting regulatory requirements including GDPR, HIPAA, PCI DSS, and industry-specific standards.",
                icon: (
                  <svg className="w-8 h-8 text-[#88bf42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              {
                title: "Security Program Development",
                description: "Creation and implementation of comprehensive security programs tailored to your organization's needs and industry requirements.",
                icon: (
                  <svg className="w-8 h-8 text-[#88bf42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                )
              },
              {
                title: "Risk Assessment & Management",
                description: "Identification, assessment, and management of security risks to protect your critical assets and information.",
                icon: (
                  <svg className="w-8 h-8 text-[#88bf42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                )
              },
              {
                title: "Security Governance",
                description: "Development and oversight of security policies, procedures, and standards to ensure proper governance and accountability.",
                icon: (
                  <svg className="w-8 h-8 text-[#88bf42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                )
              },
              {
                title: "Security Budget Planning",
                description: "Strategic allocation of security resources and budget planning to maximize ROI on security investments.",
                icon: (
                  <svg className="w-8 h-8 text-[#88bf42]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#88bf42]/30 group"
              >
                <div className="w-16 h-16 bg-[#88bf42]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#88bf42]/20 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0f0326] mb-4 group-hover:text-[#88bf42] transition-colors duration-300">{service.title}</h3>
                <p className="text-[#696869]">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#0f0326] mb-6">
              Benefits of <span className="text-[#88bf42]">vCISO</span> Services
            </h2>
            <p className="text-[#696869] max-w-3xl mx-auto text-lg">
              Our virtual CISO services provide numerous benefits to organizations of all sizes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-[#0f0326] to-[#1a0845] rounded-2xl overflow-hidden h-full">
                <div className="p-8 relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-6">Financial Benefits</h3>
                  <ul className="space-y-4">
                    {[
                      "Significant cost savings compared to full-time CISO",
                      "Predictable monthly expenses for security leadership",
                      "Reduced recruitment and turnover costs",
                      "Optimized security budget allocation",
                      "Reduced financial risk from security incidents"
                    ].map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        className="flex items-start"
                      >
                        <svg className="w-6 h-6 text-[#88bf42] mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-200">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Background graphic elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#88bf42]/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#88bf42]/10 rounded-full blur-2xl"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-[#0f0326] to-[#1a0845] rounded-2xl overflow-hidden h-full">
                <div className="p-8 relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-6">Operational Benefits</h3>
                  <ul className="space-y-4">
                    {[
                      "Access to senior security expertise on-demand",
                      "Immediate implementation of security best practices",
                      "Flexible scaling based on changing requirements",
                      "Objective third-party perspective on security issues",
                      "Rapid response to emerging security threats and trends"
                    ].map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        className="flex items-start"
                      >
                        <svg className="w-6 h-6 text-[#88bf42] mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-200">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Background graphic elements */}
                <div className="absolute top-0 left-0 w-40 h-40 bg-[#88bf42]/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#88bf42]/10 rounded-full blur-2xl"></div>
              </div>
            </motion.div>
          </div>

          {/* Additional Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Strategic Advantage",
                description: "Gain a competitive edge with expert security leadership guiding your organization's strategy.",
                icon: "🎯"
              },
              {
                title: "Compliance Assurance",
                description: "Ensure continuous compliance with relevant regulations and industry standards.",
                icon: "✓"
              },
              {
                title: "Risk Reduction",
                description: "Significantly reduce security risk exposure through expert guidance and oversight.",
                icon: "🛡️"
              }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-[#88bf42]/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-[#0f0326] mb-2">{benefit.title}</h3>
                <p className="text-[#696869]">{benefit.description}</p>
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
                  Ready for Expert Security Leadership?
                  </h2>
                  <p className="text-gray-300 max-w-3xl mx-auto text-xl mb-10">
                  Our virtual CISO services provide the security leadership your organization needs at a fraction of the cost of a full-time executive.</p>
                  <Button
                    size="lg"
                    className="bg-[#88BF42] hover:bg-[#7AAD3A] text-white w-full sm:w-auto h-14 text-lg"
                    asChild
                  >
                    <RouterLink
                      to="/contact"
                      className="flex items-center justify-center"
                    >
                     Schedule a Consultation<ArrowRight className="ml-2 h-5 w-5" />
                    </RouterLink>
                  </Button>
                </motion.div>
              </div>
            </section>

      <Footer />
    </div>
  );
};

export default VCISOPage;