import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const RefundPolicy = () => {
  useEffect(() => {
    document.title = "Refund Policy | ThorSignia";
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-white">
        {/* Changed text-base md:text-[18px] to text-[18px] to ensure body text is 18px on all screen sizes */}
        <div className="max-w-6xl mx-auto px-4 py-16 text-gray-800 bg-white text-[18px] leading-relaxed">
          
          <h1 className="text-[22px] md:text-4xl font-bold text-gray-900 mb-8">Refund Policy</h1>

          {/* Text size classes removed, will inherit 18px from parent div */}
          <p className="lead font-medium text-gray-900 mb-8 text-[18px]">
            At ThorSignia, we prioritize client satisfaction and aim to deliver high-quality services that meet your business goals.
            Our refund policy is designed to ensure fairness and transparency while balancing the nature of our services.
          </p>

          <h2 className="text-[20px] md:text-2xl font-bold text-gray-900 mt-12 mb-4">Eligibility for Refund</h2>
          <p className="mb-4">Refund requests will be considered only under the following circumstances:</p>
          
          {/* Replaced <ol> and <li> with <div> elements and manual numbering/styling */}
          <div className="mb-8 space-y-3"> {/* Increased space-y for clarity if needed */}
            <div className="flex">
              <span className="w-7 flex-shrink-0 font-semibold text-right pr-2">1.</span>
              <p className="flex-1">
                <strong className="font-semibold text-[18px]">Service Not Delivered:</strong> If a service outlined in the agreement has not been initiated or delivered within the specified timeline, and no prior communication has been made about delays.
              </p>
            </div>
            <div className="flex">
              <span className="w-7 flex-shrink-0 font-semibold text-right pr-2">2.</span>
              <p className="flex-1">
                <strong className="font-semibold">Project Cancellation:</strong> If the project is canceled before any substantial work has been undertaken by ThorSignia.
              </p>
            </div>
            <div className="flex">
              <span className="w-7 flex-shrink-0 font-semibold text-right pr-2">3.</span>
              <p className="flex-1">
                <strong className="font-semibold">Non-Satisfactory Work:</strong> If the client is dissatisfied with the quality of work delivered, and attempts to resolve the issues have not been successful.
              </p>
            </div>
          </div>

          <h2 className="text-[20px] md:text-2xl font-bold text-gray-900 mt-12 mb-4">Refund Timeline</h2>
          <p className="mb-4">All refund requests must be submitted within 7 days of the issue or delivery of the service.</p>
          <p className="mb-8">Refunds will be processed within 15 working days from the date of approval of the refund request.</p>

          <h2 className="text-[20px] md:text-2xl font-bold text-gray-900 mt-12 mb-4">Non-Refundable Conditions</h2>
          <p className="mb-4">Refunds will not be issued under the following circumstances:</p>
          
          <div className="mb-8 space-y-3">
            <div className="flex">
              <span className="w-7 flex-shrink-0 font-semibold text-right pr-2">1.</span>
              <p className="flex-1">For services already delivered as per the agreed scope of work.</p>
            </div>
            <div className="flex">
              <span className="w-7 flex-shrink-0 font-semibold text-right pr-2">2.</span>
              <p className="flex-1">If the client fails to provide necessary inputs, approvals, or information required for project completion, leading to delays or issues.</p>
            </div>
            <div className="flex">
              <span className="w-7 flex-shrink-0 font-semibold text-right pr-2">3.</span>
              <p className="flex-1">If the client changes the scope of the project or cancels it mid-way after substantial work has been completed.</p>
            </div>
            <div className="flex">
              <span className="w-7 flex-shrink-0 font-semibold text-right pr-2">4.</span>
              <p className="flex-1">For any third-party tools, licenses, or software purchased on behalf of the client.</p>
            </div>
            <div className="flex">
              <span className="w-7 flex-shrink-0 font-semibold text-right pr-2">5.</span>
              <p className="flex-1">Refund requests made beyond the specified refund timeline.</p>
            </div>
          </div>

          <h2 className="text-[20px] md:text-2xl font-bold text-gray-900 mt-12 mb-4">Process for Refund Request</h2>
          <p className="mb-4">To initiate a refund request, please follow these steps:</p>
          
          <div className="mb-8 space-y-3">
            <div className="flex">
              <span className="w-7 flex-shrink-0 font-semibold text-right pr-2">1.</span>
              <p className="flex-1">
                Email your request to <a href="mailto:info@thorsignia.online" className="text-[#3563E9] underline hover:text-[#2a4ea3] transition-colors" target="_blank" rel="noopener noreferrer">info@thorsignia.online</a> with the subject line "Refund Request."
              </p>
            </div>
            <div className="flex">
              <span className="w-7 flex-shrink-0 font-semibold text-right pr-2">2.</span>
              <p className="flex-1">Include your name, project details, invoice number, and a detailed explanation of the issue.</p>
            </div>
            <div className="flex">
              <span className="w-7 flex-shrink-0 font-semibold text-right pr-2">3.</span>
              <p className="flex-1">Our team will review your request and may contact you for further clarification or resolution.</p>
            </div>
          </div>

          <h2 className="text-[20px] md:text-2xl font-bold text-gray-900 mt-12 mb-4">Resolution and Alternatives</h2>
          <p className="mb-4">In case of dissatisfaction, ThorSignia is committed to providing alternative solutions, including:</p>
          
          {/* Replaced <ul> and <li> with <div> elements and manual bullet styling */}
          <div className="mb-8 space-y-3">
            <div className="flex">
              <span className="w-7 flex-shrink-0 text-center pr-2">•</span> {/* Bullet character */}
              <p className="flex-1">Revisions or adjustments to the project at no additional cost.</p>
            </div>
            <div className="flex">
              <span className="w-7 flex-shrink-0 text-center pr-2">•</span> {/* Bullet character */}
              <p className="flex-1">Credit towards future services instead of a monetary refund, upon mutual agreement.</p>
            </div>
          </div>

          <h2 className="text-[20px] md:text-2xl font-bold text-gray-900 mt-12 mb-4">Contact Us</h2>
          <p className="mb-8">For any questions or concerns regarding our refund policy, please contact our support team at <a href="mailto:info@thorsignia.online" className="text-[#3563E9] underline hover:text-[#2a4ea3] transition-colors" target="_blank" rel="noopener noreferrer">info@thorsignia.online</a></p>

          <p className="mt-8">We appreciate your trust in ThorSignia and strive to deliver value-driven services. This refund policy is subject to revision as per company guidelines.</p>

          <p className="italic text-gray-600 mt-8">Last updated: May 21, 2025</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RefundPolicy;