
import { Shield, Lock, Eye, Database, Mail, Phone } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-secondary to-foreground text-white px-8 py-12">
            <div className="flex items-center gap-4 mb-4">
              <Shield className="w-8 h-8" />
              <h1 className="font-poiret font-bold text-4xl">Privacy Policy</h1>
            </div>
            <p className="font-inter text-lg opacity-90">
              Protecting your privacy is our commitment to you
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
                <Eye className="w-6 h-6 text-secondary" />
                <h2 className="font-poiret font-bold text-2xl text-gray-900">Introduction</h2>
              </div>
              <p className="font-inter text-gray-700 leading-relaxed">
                The Legacy Realty ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, engage with our services, or interact with us regarding real estate properties in Mohali, Chandigarh, and New Chandigarh.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-secondary" />
                <h2 className="font-poiret font-bold text-2xl text-gray-900">Information We Collect</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-poiret font-semibold text-lg text-gray-800 mb-2">Personal Information</h3>
                  <ul className="font-inter text-gray-700 space-y-1 ml-4">
                    <li>• Name, email address, and phone number</li>
                    <li>• Address and location preferences</li>
                    <li>• Property interests and budget information</li>
                    <li>• Communication preferences</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-poiret font-semibold text-lg text-gray-800 mb-2">Property-Related Information</h3>
                  <ul className="font-inter text-gray-700 space-y-1 ml-4">
                    <li>• Property search criteria and preferences</li>
                    <li>• Investment interests and requirements</li>
                    <li>• Property viewing history and feedback</li>
                    <li>• Financial qualification information (when applicable)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-poiret font-semibold text-lg text-gray-800 mb-2">Technical Information</h3>
                  <ul className="font-inter text-gray-700 space-y-1 ml-4">
                    <li>• IP address and browser information</li>
                    <li>• Website usage data and analytics</li>
                    <li>• Device information and preferences</li>
                    <li>• Cookies and tracking technologies</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-6 h-6 text-secondary" />
                <h2 className="font-poiret font-bold text-2xl text-gray-900">How We Use Your Information</h2>
              </div>
              <div className="font-inter text-gray-700 space-y-3">
                <p><strong>Property Services:</strong> To provide property recommendations, schedule viewings, and assist with real estate transactions.</p>
                <p><strong>Communication:</strong> To respond to inquiries, send property updates, and provide customer support.</p>
                <p><strong>Marketing:</strong> To send relevant property listings, market updates, and promotional materials (with your consent).</p>
                <p><strong>Legal Compliance:</strong> To comply with real estate regulations and legal requirements.</p>
                <p><strong>Business Operations:</strong> To improve our services, analyze market trends, and enhance user experience.</p>
              </div>
            </section>

            {/* Information Sharing */}
            <section>
              <h2 className="font-poiret font-bold text-2xl text-gray-900 mb-4">Information Sharing and Disclosure</h2>
              <div className="font-inter text-gray-700 space-y-3">
                <p><strong>Property Developers:</strong> We may share your information with relevant property developers and projects you've expressed interest in.</p>
                <p><strong>Service Providers:</strong> With trusted third-party vendors who assist in our operations (legal services, marketing platforms, etc.).</p>
                <p><strong>Legal Requirements:</strong> When required by law, court order, or to protect our rights and safety.</p>
                <p><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets.</p>
                <p className="text-sm italic">We do not sell your personal information to third parties for their marketing purposes.</p>
              </div>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="font-poiret font-bold text-2xl text-gray-900 mb-4">Data Security</h2>
              <p className="font-inter text-gray-700 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="font-poiret font-bold text-2xl text-gray-900 mb-4">Your Rights</h2>
              <div className="font-inter text-gray-700 space-y-2">
                <p><strong>Access:</strong> Request a copy of the personal information we hold about you.</p>
                <p><strong>Correction:</strong> Request correction of inaccurate or incomplete information.</p>
                <p><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements).</p>
                <p><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time.</p>
                <p><strong>Data Portability:</strong> Request transfer of your data to another service provider.</p>
              </div>
            </section>

            {/* Cookies Policy */}
            <section>
              <h2 className="font-poiret font-bold text-2xl text-gray-900 mb-4">Cookies and Tracking</h2>
              <p className="font-inter text-gray-700 leading-relaxed">
                We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and personalize content. You can control cookie settings through your browser preferences. Disabling cookies may affect website functionality.
              </p>
            </section>

            {/* Third-Party Links */}
            <section>
              <h2 className="font-poiret font-bold text-2xl text-gray-900 mb-4">Third-Party Links</h2>
              <p className="font-inter text-gray-700 leading-relaxed">
                Our website may contain links to third-party websites, including property developer sites, financial institutions, and service providers. We are not responsible for the privacy practices of these external sites. Please review their privacy policies before providing any information.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="font-poiret font-bold text-2xl text-gray-900 mb-4">Children's Privacy</h2>
              <p className="font-inter text-gray-700 leading-relaxed">
                Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete such information.
              </p>
            </section>

            {/* Changes to Policy */}
            <section>
              <h2 className="font-poiret font-bold text-2xl text-gray-900 mb-4">Changes to This Policy</h2>
              <p className="font-inter text-gray-700 leading-relaxed">
                We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of significant changes by posting the updated policy on our website and updating the "Last updated" date.
              </p>
            </section>

            {/* Contact Information */}
            <section className="bg-gray-50 rounded-xl p-6">
              <h2 className="font-poiret font-bold text-2xl text-gray-900 mb-4">Contact Us</h2>
              <p className="font-inter text-gray-700 mb-4">
                If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-secondary" />
                  <a href="mailto:info.thelegacyrealty@gmail.com" className="font-inter text-secondary hover:underline">
                    info.thelegacyrealty@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-secondary" />
                  <a href="tel:+919888247787" className="font-inter text-secondary hover:underline">
                    +91 98882 47787
                  </a>
                </div>
                <p className="font-inter text-gray-600 mt-2">
                  The Legacy Realty<br/>
                  SCO 275, 2nd Floor, Sector 118<br/>
                  TDI City, Mohali, Punjab 140308
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
