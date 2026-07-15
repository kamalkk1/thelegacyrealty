import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is RERA approval and why is it important?",
    answer:
      "RERA (Real Estate Regulation Act) approval ensures that a property project is registered with the government and follows legal compliance. According to RERA Punjab Authority, all residential projects must be RERA-approved before sale. The Legacy Realty ensures all projects are RERA-compliant, protecting your investment with legal protection and transparency.",
  },
  {
    question: "Which areas does The Legacy Realty serve?",
    answer:
      "The Legacy Realty operates across the Tricity region including Mohali, Chandigarh, New Chandigarh, Panchkula, Kharar, and Zirakpur. We also have premium properties in Himachal Pradesh including Kasauli, Dharampur, and surrounding areas with breathtaking mountain views.",
  },
  {
    question: "What are the payment options available?",
    answer:
      "We offer flexible payment plans tailored to your needs: Bank financing is available through major financial institutions like HDFC, ICICI, Axis Bank, and others at competitive rates with minimal documentation.",
  },
  {
    question: "How do I book a site visit?",
    answer:
      "Click the 'Book Site Visit' button on any project page to schedule through Calendly, or contact us directly at +91-98882-47787 or +91-94639-00803. Our experienced team will coordinate a convenient time for you to visit and explore the property.",
  },
  {
    question: "What documents are required for property purchase?",
    answer:
      "Typically required documents include: government-issued ID proof, address proof, recent bank statements, PAN card, Aadhaar card, and income certificate. Our legal team will guide you through the complete documentation process and ensure all compliance requirements are met smoothly.",
  },
  {
    question: "Do you assist NRI clients and foreign nationals?",
    answer:
      "Yes, we have extensive experience assisting NRI clients with property purchases in India. You can invest directly or through an Indian relative as nominee. We handle all legal, regulatory, and documentation requirements as per FEMA guidelines and RBI regulations to ensure a smooth transaction.",
  },
];

const HomeFAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-poiret font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about buying property with The Legacy
            Realty
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="rounded-xl overflow-hidden border border-gray-200 bg-gray-50 shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 hover:bg-gray-100 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-inter font-semibold text-base lg:text-lg text-gray-900">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-secondary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-secondary flex-shrink-0" />
                )}
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5">
                      <p className="font-inter text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFAQSection;
