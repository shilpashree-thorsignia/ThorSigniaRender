import React, { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import { ArrowLeft } from 'lucide-react'; // Not used as Link is commented
// import { Link } from 'react-router-dom'; // Not used as Link is commented

const TermsAndConditions = () => {
  useEffect(() => {
    document.title = "Terms and Conditions | ThorSignia";
  }, []);
  return (
  <>
    <Navbar />
    {/* Set global text size to 18px and leading-relaxed for body content */}
    <div className="max-w-6xl mx-auto px-4 py-16 text-gray-800 bg-white text-[18px] leading-relaxed">
    {/* <Link to="/" className="inline-flex items-center text-[#88BF42] hover:text-[#7AAD3A] mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link> */}
      
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Terms and Conditions</h1>

      {/* Text size will be 18px due to parent div */}
      <p className="mb-8 italic text-gray-600">Last Updated: 07 January 2025</p> 

      {/* Text size will be 18px due to parent div */}
      <p className="mb-8">Welcome to ThorSignia! These Terms and Conditions ("Terms") govern your access to and use of our website, products, and services. By engaging with us, you agree to comply with these Terms. Please read them carefully.</p> 

      
      <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-900">1. Definitions</h2> 
      {/* Replaced ol and li tags */}
      <div className="mb-8 space-y-3">
        <div className="flex">
          <span className="w-7 flex-shrink-0 font-semibold text-right pr-2">1.</span>
          <p className="flex-1"><strong className="font-semibold">"Company":</strong> ThorSignia.</p>
        </div>
        <div className="flex">
          <span className="w-7 flex-shrink-0 font-semibold text-right pr-2">2.</span>
          <p className="flex-1"><strong className="font-semibold">"Client":</strong> Any individual, organization, or entity engaging with ThorSignia for services.</p>
        </div>
        <div className="flex">
          <span className="w-7 flex-shrink-0 font-semibold text-right pr-2">3.</span>
          <p className="flex-1"><strong className="font-semibold">"Services":</strong> All services offered by ThorSignia, including but not limited to digital marketing, website development, SEO, branding, and automation.</p>
        </div>
      </div>

      
      <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-900">2. General Terms</h2> 
      <div className="mb-8 space-y-3">
        <div className="flex">
          <span className="w-7 flex-shrink-0 font-semibold text-right pr-2">1.</span>
          <p className="flex-1">By using our services, you agree to these Terms and our Privacy Policy.</p>
        </div>
        <div className="flex">
          <span className="w-7 flex-shrink-0 font-semibold text-right pr-2">2.</span>
          <p className="flex-1">ThorSignia reserves the right to update these Terms at any time without prior notice.</p>
        </div>
        <div className="flex">
          <span className="w-7 flex-shrink-0 font-semibold text-right pr-2">3.</span>
          <p className="flex-1">Clients must provide accurate and complete information necessary for the delivery of services.</p>
        </div>
      </div>

      
      <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-900">3. Services</h2> 
      <div className="mb-8 space-y-3">
        <div className="flex">
          <span className="w-7 flex-shrink-0 font-semibold text-right pr-2">1.</span>
          <p className="flex-1">ThorSignia commits to delivering services as outlined in the signed agreement or proposal.</p>
        </div>
        <div className="flex">
          <span className="w-7 flex-shrink-0 font-semibold text-right pr-2">2.</span>
          <p className="flex-1">Timelines and deliverables will be mutually agreed upon and documented.</p>
        </div>
        <div className="flex">
          <span className="w-7 flex-shrink-0 font-semibold text-right pr-2">3.</span>
          <p className="flex-1">Any changes to the scope of work may incur additional charges and adjusted timelines.</p>
        </div>
      </div>

      
      <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-900">4. Payment Terms</h2> 
      <div className="mb-8 space-y-3">
        <div className="flex">
          <span className="w-7 flex-shrink-0 font-semibold text-right pr-2">1.</span>
          <p className="flex-1">Payment terms will be outlined in the invoice or agreement.</p>
        </div>
        <div className="flex">
          <span className="w-7 flex-shrink-0 font-semibold text-right pr-2">2.</span>
          <p className="flex-1">Payments are due as per the agreed schedule. Late payments may attract penalties or service suspension.</p>
        </div>
        <div className="flex">
          <span className="w-7 flex-shrink-0 font-semibold text-right pr-2">3.</span>
          <p className="flex-1">Any third-party tools, licenses, or software required will be billed separately.</p>
        </div>
      </div>

      
      <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-900">5. Refund Policy</h2> 
      <div className="mb-8 space-y-3">
        <div className="flex">
          <span className="w-7 flex-shrink-0 font-semibold text-right pr-2">1.</span>
          <p className="flex-1">Refunds will be processed as per ThorSignia's Refund Policy.</p>
        </div>
        <div className="flex">
          <span className="w-7 flex-shrink-0 font-semibold text-right pr-2">2.</span>
          <p className="flex-1">No refunds will be issued for services already delivered or completed.</p>
        </div>
      </div>

      
      <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-900">6. Confidentiality</h2> 
      <div className="mb-8 space-y-3">
        <div className="flex">
          <span className="w-7 flex-shrink-0 font-semibold text-right pr-2">1.</span>
          <p className="flex-1">ThorSignia will maintain confidentiality of all client information and data shared during the course of the project.</p>
        </div>
        <div className="flex">
          <span className="w-7 flex-shrink-0 font-semibold text-right pr-2">2.</span>
          <p className="flex-1">Clients agree not to disclose ThorSignia’s proprietary methods, strategies, or processes to third parties without written consent.</p>
        </div>
      </div>

      
      <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-900">7. Intellectual Property</h2> 
      <div className="mb-8 space-y-3">
        <div className="flex">
          <span className="w-7 flex-shrink-0 font-semibold text-right pr-2">1.</span>
          <p className="flex-1">Any materials, content, or deliverables created by ThorSignia remain the intellectual property of the company until full payment is received.</p>
        </div>
        <div className="flex">
          <span className="w-7 flex-shrink-0 font-semibold text-right pr-2">2.</span>
          <p className="flex-1">Upon payment completion, clients are granted non-exclusive, royalty-free rights to use the deliverables for agreed purposes.</p>
        </div>
      </div>

      
      <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-900">8. Limitation of Liability</h2> 
      <div className="mb-8 space-y-3">
        <div className="flex">
          <span className="w-7 flex-shrink-0 font-semibold text-right pr-2">1.</span>
          <div className="flex-1">
             <p>ThorSignia will not be held liable for:</p>
             {/* Replaced ul and li for nested list */}
             <div className="pl-6 mt-2 space-y-2">
                <div className="flex">
                    <span className="w-6 flex-shrink-0 text-center pr-2">•</span>
                    <p className="flex-1">Delays caused by client inaction or lack of communication.</p>
                </div>
                <div className="flex">
                    <span className="w-6 flex-shrink-0 text-center pr-2">•</span>
                    <p className="flex-1">Third-party failures, such as hosting providers or advertising platforms.</p>
                </div>
                <div className="flex">
                    <span className="w-6 flex-shrink-0 text-center pr-2">•</span>
                    <p className="flex-1">Losses caused by force majeure events (e.g., natural disasters, government actions).</p>
                </div>
             </div>
           </div>
        </div>
        <div className="flex">
          <span className="w-7 flex-shrink-0 font-semibold text-right pr-2">2.</span>
          <p className="flex-1">Total liability under any claim shall not exceed the amount paid for the specific service in question.</p>
        </div>
      </div>

      
      <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-900">9. Termination</h2> 
      <div className="mb-8 space-y-3">
        <div className="flex">
          <span className="w-7 flex-shrink-0 font-semibold text-right pr-2">1.</span>
          <p className="flex-1">Either party may terminate the agreement by providing 30 days' written notice.</p>
        </div>
        <div className="flex">
          <span className="w-7 flex-shrink-0 font-semibold text-right pr-2">2.</span>
          <p className="flex-1">ThorSignia reserves the right to terminate services immediately in case of breach of these Terms by the client.</p>
        </div>
      </div>

      
      <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-900">10. Governing Law</h2> 
      <div className="mb-8 space-y-3">
        <div className="flex">
          <span className="w-7 flex-shrink-0 font-semibold text-right pr-2">1.</span>
          <p className="flex-1">These Terms are governed by and construed in accordance with the laws of [Bangalore Jurisdiction].</p>
        </div>
        <div className="flex">
          <span className="w-7 flex-shrink-0 font-semibold text-right pr-2">2.</span>
          <p className="flex-1">Any disputes will be resolved under the jurisdiction of the courts in [Bangalore Location].</p>
        </div>
      </div>

      
      <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-900">11. Indemnity</h2> 
      <div className="mb-8 space-y-3">
        <div className="flex">
          <span className="w-7 flex-shrink-0 font-semibold text-right pr-2">1.</span>
          <p className="flex-1">Clients agree to indemnify ThorSignia against any claims, damages, or liabilities arising from their use of our services.</p>
        </div>
      </div>

      
      <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-900">12. Contact Us</h2> 
      {/* Text size will be 18px due to parent div */}
      <p className="mb-4">For questions or concerns regarding these Terms, please contact us:</p> 
      <div className="mb-8 space-y-3">
        <div className="flex">
          <span className="w-7 flex-shrink-0 font-semibold text-right pr-2">1.</span> {/* Using number for consistency as it was an ol */}
          <p className="flex-1"><strong className="font-semibold">Email:</strong> <a href="mailto:info@thorsignia.online" className="text-[#3563E9] underline hover:text-[#2a4ea3] transition-colors" target="_blank" rel="noopener noreferrer">info@thorsignia.online</a></p>
        </div>
      </div>

      {/* Text size will be 18px due to parent div */}
      <p className="mt-8">By engaging with ThorSignia, you acknowledge and agree to these Terms and Conditions. Thank you for choosing us!</p> 

    </div>
    <Footer />
  </>
);

};
export default TermsAndConditions;