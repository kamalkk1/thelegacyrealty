import { FileText, Scale, AlertTriangle, Users, Home, DollarSign } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-foreground to-secondary text-white px-8 py-12">
            <div className="flex items-center gap-4 mb-4">
              <Scale className="w-8 h-8" />
              <h1 className="font-poiret font-bold text-4xl">Terms of Service</h1>
            </div>
            <p className="font-inter text-lg opacity-90">
              Your agreement with The Legacy Realty
            </p>
            <p className="font-inter text-sm opacity-80 mt-2">
              Last updated: October 17, 2025
            </p>
          </div>

          {/* Content */}
          <div className="px-8 py-12 space-y-8">
            
            {/* Introduction */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-secondary" />
                <h2 className="font-poiret font-bold text-2xl text-gray-900">Introduction</h2>
              </div>
              <p className="font-inter text-gray-700 leading-relaxed">
                Welcome to The Legacy Realty. These Terms of Service ("Terms") govern your use of our website, services, and any real estate transactions facilitated by us. By accessing our services, you agree to be bound by these Terms. Please read them carefully.
              </p>
            </section>

            {/* About Our Services */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Home className="w-6 h-6 text-secondary" />
                <h2 className="font-poiret font-bold text-2xl text-gray-900">Our Real Estate Services</h2>
              </div>
              <div className="font-inter text-gray-700 space-y-3">
                <p>The Legacy Realty provides comprehensive real estate services including:</p>
                <ul className="space-y-1 ml-4">
                  <li>• Property consultation and advisory services</li>
                  <li>• Residential and commercial property sales</li>
                  <li>• Property investment guidance</li>
                  <li>• Market analysis and property valuation</li>
                  <li>• Assistance with property documentation and legal processes</li>
                  <li>• Project marketing for developers in Mohali, Chandigarh, and New Chandigarh</li>
                </ul>
              </div>
            </section>

            {/* User Responsibilities */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-secondary" />
                <h2 className="font-poiret font-bold text-2xl text-gray-900">User Responsibilities</h2>
              </div>
              <div className="font-inter text-gray-700 space-y-3">
                <p><strong>Accurate Information:</strong> You must provide accurate, complete, and current information when using our services.</p>
                <p><strong>Lawful Use:</strong> You agree to use our services only for lawful purposes and in accordance with these Terms.</p>
                <p><strong>Due Diligence:</strong> You are responsible for conducting your own due diligence on any property or investment opportunity.</p>
                <p><strong>Financial Capability:</strong> You must have the financial capability to complete any property transaction you initiate.</p>
                <p><strong>Document Verification:</strong> You are responsible for verifying all property documents and legal aspects before completing any transaction.</p>
              </div>
            </section>

            {/* Property Information */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-secondary" />
                <h2 className="font-poiret font-bold text-2xl text-gray-900">Property Information Disclaimer</h2>
              </div>
              <div className="font-inter text-gray-700 space-y-3">
                <p>While we strive to provide accurate property information:</p>
                <ul className="space-y-1 ml-4">
                  <li>• All property details are provided by developers and third parties</li>
                  <li>• We do not guarantee the accuracy of all specifications, amenities, or pricing</li>
                  <li>• Property prices, availability, and offers are subject to change without notice</li>
                  <li>• Virtual tours, images, and floor plans are for illustrative purposes only</li>
                  <li>• Actual property may vary from marketing materials</li>
                  <li>• All investments are subject to market risks</li>
                </ul>
              </div>
            </section>

            {/* Financial Terms */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="w-6 h-6 text-secondary" />
                <h2 className="font-poiret font-bold text-2xl text-gray-900">Financial Terms and Payments</h2>
              </div>
              <div className="font-inter text-gray-700 space-y-3">
                <p><strong>Brokerage:</strong> Our brokerage fees are as per industry standards and will be clearly disclosed before any transaction.</p>
                <p><strong>Payment Terms:</strong> All payments to developers must be made as per the agreed payment schedule.</p>
                <p><strong>Refund Policy:</strong> Refund policies are governed by the respective developer's terms and conditions.</p>
                <p><strong>Third-Party Costs:</strong> You are responsible for additional costs including registration, stamp duty, legal fees, and taxes.</p>
                <p><strong>Market Fluctuations:</strong> Property values are subject to market conditions and may fluctuate.</p>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="font-poiret font-bold text-2xl text-gray-900 mb-4">Limitation of Liability</h2>
              <div className="font-inter text-gray-700 space-y-3">
                <p>The Legacy Realty acts as an intermediary and facilitator. We are not liable for:</p>
                <ul className="space-y-1 ml-4">
                  <li>• Delays in project completion by developers</li>
                  <li>• Changes in property specifications or amenities</li>
                  <li>• Market fluctuations affecting property values</li>
                  <li>• Legal disputes between buyers and developers</li>
                  <li>• Force majeure events affecting property delivery</li>
                  <li>• Third-party services or recommendations</li>
                </ul>
                <p className="text-sm italic mt-4">
                  Our liability is limited to the extent of brokerage received for the specific transaction.
                </p>
              </div>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="font-poiret font-bold text-2xl text-gray-900 mb-4">Intellectual Property</h2>
              <p className="font-inter text-gray-700 leading-relaxed">
                All content on our website, including text, graphics, logos, images, and software, is the property of The Legacy Realty or our content suppliers and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our written permission.
              </p>
            </section>

            {/* Privacy and Data Protection */}
            <section>
              <h2 className="font-poiret font-bold text-2xl text-gray-900 mb-4">Privacy and Data Protection</h2>
              <p className="font-inter text-gray-700 leading-relaxed">
                Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy. By using our services, you consent to the collection and use of information as outlined in our Privacy Policy.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="font-poiret font-bold text-2xl text-gray-900 mb-4">Governing Law and Jurisdiction</h2>
              <p className="font-inter text-gray-700 leading-relaxed">
                These Terms are governed by the laws of India. Any disputes arising from these Terms or our services shall be subject to the exclusive jurisdiction of the courts in Chandigarh, India. We encourage resolving disputes through mediation or arbitration before pursuing legal action.
              </p>
            </section>

            {/* RERA Compliance */}
            <section>
              <h2 className="font-poiret font-bold text-2xl text-gray-900 mb-4">RERA Compliance</h2>
              <div className="font-inter text-gray-700 space-y-3">
                <p>We are committed to compliance with the Real Estate (Regulation and Development) Act, 2016:</p>
                <ul className="space-y-1 ml-4">
                  <li>• All advertised projects have valid RERA registrations</li>
                  <li>• RERA registration numbers are displayed for applicable projects</li>
                  <li>• We provide accurate project information as per RERA guidelines</li>
                  <li>• Buyers' rights are protected as per RERA provisions</li>
                </ul>
              </div>
            </section>

            {/* Modifications */}
            <section>
              <h2 className="font-poiret font-bold text-2xl text-gray-900 mb-4">Modifications to Terms</h2>
              <p className="font-inter text-gray-700 leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes will be effective when posted on our website with an updated revision date. Your continued use of our services after changes constitutes acceptance of the new Terms.
              </p>
            </section>

            {/* Termination */}
            <section>
              <h2 className="font-poiret font-bold text-2xl text-gray-900 mb-4">Termination</h2>
              <p className="font-inter text-gray-700 leading-relaxed">
                We may terminate or suspend your access to our services immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties, or for any other reason in our sole discretion.
              </p>
            </section>

            {/* Contact Information */}
            <section className="bg-gray-50 rounded-xl p-6">
              <h2 className="font-poiret font-bold text-2xl text-gray-900 mb-4">Contact Information</h2>
              <p className="font-inter text-gray-700 mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2">
                <p className="font-inter text-gray-600">
                  <strong>The Legacy Realty</strong><br/>
                  SCO 275, 2nd Floor, Sector 118<br/>
                  TDI City, Mohali, Punjab 140308<br/>
                  India
                </p>
                <p className="font-inter text-gray-600">
                  <strong>Email:</strong> info.thelegacyrealty@gmail.com<br/>
                  <strong>Phone:</strong> +91 98882 47787, +91 94639 00803, +91 96957 98957
                </p>
              </div>
            </section>

            {/* Acknowledgment */}
            <section className="border-l-4 border-secondary pl-6 bg-blue-50 p-4 rounded">
              <p className="font-inter text-gray-700 text-sm">
                <strong>By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy.</strong>
              </p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
