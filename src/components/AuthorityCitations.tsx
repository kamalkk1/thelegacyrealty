import { motion } from "framer-motion";
import { ExternalLink, CheckCircle } from "lucide-react";

const AuthorityCitations = () => {
  const certifications = [
    {
      icon: "✅",
      title: "RERA Approved",
      description: "All projects registered with RERA Punjab Authority as per Real Estate Regulation Act, 2016",
      link: "https://rera.punjab.gov.in",
      linkText: "Verify on RERA Punjab",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: "🏢",
      title: "MCA Registered",
      description: "Registered with Ministry of Corporate Affairs for transparency and legal compliance",
      link: "https://www.mca.gov.in",
      linkText: "Verify Registration",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: "📋",
      title: "GST Registered",
      description: "Fully GST compliant to ensure transparent pricing and legal transactions",
      link: "https://www.gst.gov.in",
      linkText: "Learn about GST",
      color: "from-green-500 to-green-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-gray-900">
              Trust & Compliance
            </h2>
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            The Legacy Realty is fully compliant with all legal and regulatory requirements. Your investment is protected by government-mandated oversight and transparent practices.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 h-full border border-gray-100 hover:border-gray-300">
                {/* Icon Background */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-r ${cert.color} text-white text-3xl mb-4`}
                >
                  {cert.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 font-poppins">
                  {cert.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {cert.description}
                </p>

                {/* Link */}
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold group/link transition-colors"
                >
                  {cert.linkText}
                  <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                </a>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Market Authority Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4 font-poppins flex items-center gap-3">
            <span className="text-3xl">📊</span>
            Market Leadership
          </h3>
          <div className="space-y-3 text-gray-700">
            <p>
              <span className="font-semibold">According to RERA Punjab Authority:</span> Mohali has emerged as a
              <span className="text-blue-600 font-semibold"> high-growth real estate hub</span> with a
              <span className="text-blue-600 font-semibold"> 15% year-on-year appreciation</span> in property values.
            </p>
            <p>
              <span className="font-semibold">Tricity Market Report:</span> The Chandigarh-Mohali-Panchkula region has
              added <span className="text-blue-600 font-semibold">25,000+ new residential units</span> in the last 5 years,
              making it one of India's fastest-growing real estate markets.
            </p>
            <p>
              <span className="font-semibold">Real Estate Trends:</span> Property values in Punjab have shown consistent
              growth of <span className="text-blue-600 font-semibold">8-12% annually</span>, with Mohali leading the appreciation curve.
            </p>
          </div>
        </motion.div>

        {/* Investment Protection Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-green-50 rounded-xl p-8 border border-green-200"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4 font-poppins flex items-center gap-3">
            <span className="text-3xl">🛡️</span>
            Your Investment is Protected
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <span><span className="font-semibold">RERA Compliance:</span> 100% of project funds held in escrow accounts</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <span><span className="font-semibold">Legal Registration:</span> All properties registered with proper documentation</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <span><span className="font-semibold">Transparent Pricing:</span> GST-compliant transparent cost breakdown</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <span><span className="font-semibold">Developer Track Record:</span> Backed by 10+ year established developers</span>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Structured Data for Search Engines */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "The Legacy Realty",
          "url": "https://thelegacyrealty.in",
          "logo": "https://thelegacyrealty.in/assets/tlrlogo.webp",
          "description": "Premium real estate company offering residential and commercial properties in Tricity region",
          "sameAs": [
            "https://www.linkedin.com/company/thelegacyrealty",
            "https://www.instagram.com/thelegacyrealty",
            "https://www.facebook.com/thelegacyrealty"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Customer Service",
            "telephone": "+91-98882-47787"
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "2nd floor, SCO 275, Sector 118",
            "addressLocality": "Sahibzada Ajit Singh Nagar (Mohali)",
            "addressRegion": "Punjab",
            "postalCode": "160055",
            "addressCountry": "IN"
          },
          "foundingDate": "2010",
          "areaServed": [
            "Mohali",
            "Chandigarh",
            "New Chandigarh",
            "Panchkula",
            "Kharar",
            "Zirakpur",
            "Kasauli",
            "Dharampur"
          ],
          "knowsAbout": [
            "Real Estate",
            "Residential Properties",
            "Commercial Properties",
            "Investment Properties",
            "RERA Approved Projects"
          ]
        })}
      </script>
    </section>
  );
};

export default AuthorityCitations;
