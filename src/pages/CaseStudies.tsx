import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "../components/ui/button";
import { 
  ArrowRight, 
  BarChart, 
  Clock, 
  LineChart,
  Users,
} from "lucide-react";
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import caseStudiesData from '@/data/caseStudies';
import AnimatedCaseStudiesHeader from '@/components/AnimatedCaseStudiesHeader';
import { motion } from "framer-motion";

const CaseStudiesPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    document.title = "Case Studies | ThorSignia";
  }, []);

  const gridContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardItemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.4,
      }
    },
  };

  const handleCardClick = (slug) => {
    navigate(`/case-studies/${slug}`);
  };

  const renderStyledCaseStudyCard = (study) => {
    return (
      <motion.div 
        key={study.slug}
        className="bg-white rounded-xl border border-gray-200/90 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-[#88bf42] focus-visible:ring-offset-2 transition-all duration-300 ease-in-out overflow-hidden group flex flex-col cursor-pointer"
        variants={cardItemVariants}
        onClick={() => handleCardClick(study.slug)} // Use onClick for navigation
        // Add tabIndex to make the div focusable for keyboard users if it wasn't already
        // and onKeyDown for Enter/Space key press if desired for better a11y
        tabIndex={0} 
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault(); // Prevent space from scrolling
            handleCardClick(study.slug);
          }
        }}
        role="link" // Inform assistive technologies that this acts like a link
        aria-label={`View case study: ${study.category}`} // More descriptive label
      >
        <div className="relative h-52 overflow-hidden">
          <img 
            src={study.coverImage} 
            alt={study.category} // Alt text can also be category if title is not primarily displayed
            className="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
        </div>
        
        <div className="p-5 md:p-6 flex flex-col flex-grow items-center text-center"> {/* Centered content */}
          {/* If you still want to show the original 'title' as a sub-text or smaller detail, you can add it here */}
          {/* For example:
          {study.title && (
            <p className="text-sm text-gray-500 mb-1 group-hover:text-gray-600 transition-colors duration-300">
              {study.title}
            </p>
          )} 
          */}
          <h3 className="text-lg md:text-xl font-bold text-gray-800 group-hover:text-[#7aa83b] transition-colors duration-300 flex-grow min-h-[3em] flex items-center justify-center"> 
            {/* Displaying category as the main heading */}
            {study.category}
          </h3>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <AnimatedCaseStudiesHeader />
      
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-[#88bf42]/10 text-[#88bf42] text-sm font-medium">
              Success Stories
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Client Results Across Industries
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how our AI solutions have transformed businesses across diverse sectors
            </p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={gridContainerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {caseStudiesData.map((study) => renderStyledCaseStudyCard(study))}
          </motion.div>
          
          <div className="mt-16 text-center">
            <Button
              asChild
              variant="outline"
              className="border-[#88bf42] text-[#88bf42] hover:bg-[#88bf42] hover:text-white px-8 py-3 text-base h-auto rounded-lg"
            >
              <Link to="/contact">
                Discuss Your Project <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* ... rest of your page (Metrics, CTA, Footer) ... */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-[#88bf42]/10 text-[#88bf42] text-sm font-medium">
            Proven Impact
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our AI in Action, Measurable Results That Matter
            </h2>
            <p className="text-gray-600">
            Thor Signia’s AI solutions consistently deliver transformational value across industries, use
            cases, and company sizes.      </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
            {[
              { value: "157%", label: "Increase in ROI", description: "AI automations that maximize your output per dollar",icon: <BarChart className="h-7 w-7 text-[#88bf42]" /> },
              { value: "42%", label: "Operational Efficiency Gains", description: "Streamlined workflows reduce delays and manual load.",icon: <Clock className="h-7 w-7 text-[#88bf42]" /> },
              { value: "6 Months", label: "Avg Deployment Timeline", description: "From idea to AI-powered implementation, fast.",icon: <LineChart className="h-7 w-7 text-[#88bf42]" /> },
              { value: "99.9%", label: "Client Satisfaction", description: "Our clients don’t just like our work—they return and refer",icon: <Users className="h-7 w-7 text-[#88bf42]" /> }
            ].map((stat, index) => (
              <div 
                key={index}
                className="relative bg-[#88bf42]/10 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-100 overflow-hidden text-center w-full h-full min-h-[240px] flex flex-col justify-between"
              >
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div className="w-16 h-16 bg-[#88bf42]/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-[#88bf42] mb-2">{stat.value}</h3>
                  <p className="text-black font-semibold">{stat.label}</p>
                  <p className="text-[#686868]">{stat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 border border-gray-100 text-center">
            <div className="inline-block px-3 py-1 mb-3 rounded-full bg-[#88bf42]/10 text-[#88bf42] text-sm font-medium">
              Ready to Transform?
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Let’s Build Your Success Story
            </h2>
            <p className="text-gray-600 mb-6 text-sm md:text-base text-center">
              Join the growing list of businesses achieving breakthrough results with our AI solutions.
              Schedule a consultation to discuss your unique challenges.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-[#88bf42] text-white px-6 py-3 w-72 rounded-md font-medium hover:bg-[#7aa83b]">
              <Link to="/contact">
                Schedule Consultation
              </Link>
              </button>
              <button className="border border-[#88bf42] text-[#88bf42] px-6 py-3 w-72 rounded-md font-medium hover:bg-[#88bf42]/10">
              <Link to="/services">
                Explore Services
              </Link>
              </button>
            </div>
          </div>
        </div>
      </section>  
      <Footer />

    </div>
  );
};

export default CaseStudiesPage;