import React, { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import { ArrowLeft } from 'lucide-react'; // Not used as Link is commented
// import { Link } from 'react-router-dom'; // Not used as Link is commented

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy | ThorSignia";
  }, []);

  return (
  <>
    <Navbar />
 
    {/* Changed text-base md:text-[18px] to text-[18px] to ensure body text is 18px on all screen sizes */}
    <div className="max-w-6xl mx-auto px-4 py-16 text-gray-800 bg-white text-[18px] leading-relaxed">
    {/*
      <Link to="/" className="inline-flex items-center text-[#88BF42] hover:text-[#7AAD3A] mb-6 transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link>
    */}

      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Privacy Policy</h1> 

      <p className="mb-8 italic text-gray-600">Effective Date: 07 January 2025</p>

      {/* Intro Paragraph */}
      <p className="mb-8">At ThorSignia, we are committed to protecting your privacy and ensuring that your personal information is handled securely. This Privacy Policy explains how we collect, use, store, and protect your information when you engage with our website, products, and services. Additionally, it includes specific terms related to payment gateways such as PhonePe, Razorpay, and PayU Money, ensuring compliance with their privacy policies.</p>

      {/* Section 1: Information We Collect */}
      <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-900">1. Information We Collect</h2>
      <div className="mb-8 space-y-3">
        <div className="flex">
          <span className="w-8 flex-shrink-0 text-right pr-2">1.</span>
          <p className="flex-1">
            <strong className="font-semibold">Personal Information:</strong> Name, email address, phone number, and other details provided voluntarily when you contact us, fill out forms, or use our services.
          </p>
        </div>
        <div className="flex">
          <span className="w-8 flex-shrink-0 text-right pr-2">2.</span>
          <p className="flex-1">
            <strong className="font-semibold">Payment Information:</strong> When you make payments through PhonePe, Razorpay, or PayU Money, we may collect and process payment details such as transaction ID, amount, and payment status.<br />Sensitive payment information like card details or UPI PIN is processed securely by these gateways and is not stored by ThorSignia.
          </p>
        </div>
        <div className="flex">
          <span className="w-8 flex-shrink-0 text-right pr-2">3.</span>
          <p className="flex-1">
            <strong className="font-semibold">Usage Data:</strong> Information about how you access and interact with our website, including IP addresses, browser type, and usage behavior.
          </p>
        </div>
        <div className="flex">
          <span className="w-8 flex-shrink-0 text-right pr-2">4.</span>
          <p className="flex-1">
            <strong className="font-semibold">Third-Party Data:</strong> Information collected from third-party tools or platforms when integrated with our services.
          </p>
        </div>
      </div>

      {/* Section 2: Payment Gateway Policies */}
      <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-900">2. Payment Gateway Policies</h2>
      <div className="mb-8 space-y-4">
        <p><strong className="font-semibold">2.1 PhonePe:</strong> Payments made via PhonePe are governed by their privacy and security policies. PhonePe handles sensitive information like UPI PINs directly, and ThorSignia does not store this data.<br />
          <a href="https://www.phonepe.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-[#3563E9] underline hover:text-[#2a4ea3] transition-colors">PhonePe’s Privacy Policy</a>
        </p>
        <p><strong className="font-semibold">2.2 Razorpay:</strong> Razorpay securely processes payment data, and we only receive transaction details such as transaction ID, payment status, and amount.<br />
          <a href="https://razorpay.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-[#3563E9] underline hover:text-[#2a4ea3] transition-colors">Razorpay’s Privacy Policy</a>
        </p>
        <p><strong className="font-semibold">2.3 PayU Money:</strong> PayU Money handles sensitive payment information securely, and ThorSignia does not have access to your card details, UPI PIN, or other sensitive information.<br />
          <a href="https://payu.in/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#3563E9] underline hover:text-[#2a4ea3] transition-colors">PayU Money’s Privacy Policy</a>
        </p>
      </div>

      {/* Section 3: How We Use Your Information */}
      <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-900">3. How We Use Your Information</h2>
      <div className="mb-8 space-y-3">
        <div className="flex">
          <span className="w-8 flex-shrink-0 text-right pr-2">1.</span>
          <p className="flex-1">Provide, maintain, and improve our services.</p>
        </div>
        <div className="flex">
          <span className="w-8 flex-shrink-0 text-right pr-2">2.</span>
          <p className="flex-1">Process payments and manage your account securely.</p>
        </div>
        <div className="flex">
          <span className="w-8 flex-shrink-0 text-right pr-2">3.</span>
          <p className="flex-1">Communicate with you regarding updates, offers, or support.</p>
        </div>
        <div className="flex">
          <span className="w-8 flex-shrink-0 text-right pr-2">4.</span>
          <p className="flex-1">Ensure compliance with legal obligations and protect against fraud or misuse.</p>
        </div>
      </div>

      {/* Section 4: Information Sharing and Disclosure */}
      <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-900">4. Information Sharing and Disclosure</h2>
      <div className="mb-8">
         <p className="mb-4">We do not sell or rent your personal information. However, we may share your data under the following circumstances:</p>
         <div className="space-y-3">
            <div className="flex">
              <span className="w-8 flex-shrink-0 text-right pr-2">1.</span>
              <p className="flex-1">
                <strong className="font-semibold">With Payment Gateways:</strong> Payment-related data is shared with PhonePe, Razorpay, or PayU Money for secure transaction processing.
              </p>
            </div>
            <div className="flex">
              <span className="w-8 flex-shrink-0 text-right pr-2">2.</span>
              <p className="flex-1">
                <strong className="font-semibold">For Legal Compliance:</strong> When required by law or to protect our legal rights.
              </p>
            </div>
            <div className="flex">
              <span className="w-8 flex-shrink-0 text-right pr-2">3.</span>
              <p className="flex-1">
                <strong className="font-semibold">Business Transfers:</strong> In case of mergers, acquisitions, or sale of company assets.
              </p>
            </div>
         </div>
      </div>

      {/* Section 5: Data Security */}
      <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-900">5. Data Security</h2>
      <div className="mb-8 space-y-3">
        <div className="flex">
          <span className="w-8 flex-shrink-0 text-right pr-2">1.</span>
          <p className="flex-1">We use advanced security measures to protect your personal information, including encryption and secure servers.</p>
        </div>
        <div className="flex">
          <span className="w-8 flex-shrink-0 text-right pr-2">2.</span>
          <p className="flex-1">Payments processed through PhonePe, Razorpay, and PayU Money are secured by their respective encryption protocols and security standards.</p>
        </div>
      </div>

      {/* Section 6: Your Rights */}
      <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-900">6. Your Rights</h2>
      <div className="mb-6 space-y-3">
        <div className="flex">
          <span className="w-8 flex-shrink-0 text-right pr-2">1.</span>
          <p className="flex-1">Access and request a copy of your personal data.</p>
        </div>
        <div className="flex">
          <span className="w-8 flex-shrink-0 text-right pr-2">2.</span>
          <p className="flex-1">Correct inaccuracies in your information.</p>
        </div>
        <div className="flex">
          <span className="w-8 flex-shrink-0 text-right pr-2">3.</span>
          <p className="flex-1">Request deletion of your personal data.</p>
        </div>
        <div className="flex">
          <span className="w-8 flex-shrink-0 text-right pr-2">4.</span>
          <p className="flex-1">Opt-out of marketing communications, including targeted ads.</p>
        </div>
        <div className="flex">
          <span className="w-8 flex-shrink-0 text-right pr-2">5.</span>
          <p className="flex-1">Withdraw consent for data processing where applicable.</p>
        </div>
      </div>
      <p className="mb-8">To exercise your rights, please contact us at <a href="mailto:info@thorsignia.online" className="text-[#3563E9] underline hover:text-[#2a4ea3] transition-colors">info@thorsignia.online</a></p>

      {/* Section 7: Data Retention */}
      <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-900">7. Data Retention</h2>
      <div className="mb-8 space-y-3">
        <div className="flex">
          <span className="w-8 flex-shrink-0 text-right pr-2">1.</span>
          <p className="flex-1">We retain your information only as long as necessary for the purposes outlined in this policy or to comply with legal requirements.</p>
        </div>
        <div className="flex">
          <span className="w-8 flex-shrink-0 text-right pr-2">2.</span>
          <p className="flex-1">Payment transaction data is retained for financial records and legal compliance.</p>
        </div>
      </div>

      {/* Section 8: Third-Party Tools and Platforms */}
      <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-900">8. Third-Party Tools and Platforms</h2>
      <div className="mb-8 space-y-3">
        <div className="flex">
          <span className="w-8 flex-shrink-0 text-right pr-2">1.</span>
          <p className="flex-1">
            <strong className="font-semibold">Meta Ads and Google Ads:</strong> We collect and process data to understand audience behavior, improve campaigns, and generate leads.
          </p>
        </div>
        <div className="flex">
          <span className="w-8 flex-shrink-0 text-right pr-2">2.</span>
          <p className="flex-1">
            <strong className="font-semibold">Hotjar and Microsoft Clarity:</strong> These tools help us analyze website performance and user behavior.
          </p>
        </div>
        <div className="flex">
          <span className="w-8 flex-shrink-0 text-right pr-2">3.</span>
          <p className="flex-1">
            <strong className="font-semibold">PhonePe, Razorpay, and PayU Money:</strong> Payment gateways handle sensitive payment data directly, ensuring secure transactions.
          </p>
        </div>
      </div>

      {/* Section 9: Updates */}
      <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-900">9. Updates to this Privacy Policy</h2>
      <p className="mb-8">We may update this Privacy Policy to reflect changes in our practices or for legal reasons. The updated policy will be posted on our website with the revised effective date.</p>

      {/* Section 10: Collection and Use of Personal Information */}
      <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-900">10. Collection and Use of Personal Information</h2>
      <p className="mb-8">When you voluntarily send us electronic mail / fillup the form, we will keep a record of this information so that we can respond to you. We only collect information from you when you register on our site or fill out a form. Also, when filling out a form on our site, you may be asked to enter your: name, e-mail address or phone number. You may, however, visit our site anonymously. In case you have submitted your personal information and contact details, we reserve the rights to Call, SMS, Email or WhatsApp about our products and offers, even if your number has DND activated on it.</p>

      {/* Section 11: Contact Us */}
      <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-900">11. Contact Us</h2>
      <p className="mb-4">If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
      <div className="mb-8 space-y-3">
        <div className="flex">
          <span className="w-8 flex-shrink-0 text-right pr-2">1.</span> {/* Or use a bullet if preferred for single item lists */}
          <p className="flex-1">
            <strong className="font-semibold">Email:</strong> <a href="mailto:info@thorsignia.online" className="text-[#3563E9] underline hover:text-[#2a4ea3] transition-colors">info@thorsignia.online</a>
          </p>
        </div>
      </div>

      {/* Closing Paragraph */}
      <p className="mt-8">By using our website or services, you agree to the terms of this Privacy Policy. Thank you for trusting ThorSignia!</p>

    </div>
    <Footer />
  </>
);

};
export default PrivacyPolicy;