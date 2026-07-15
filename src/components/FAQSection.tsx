// components/sections/FAQSection.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "Is Mohali High Street RERA approved?",
      answer: "Yes, Mohali High Street is fully RERA approved. All legal documents and approvals are in place for safe investment. You can verify the RERA registration number with the authorities."
    },
    {
      question: "What are the sizes of showrooms available?",
      answer: "Current price lists show three configurations: 16.6 × 66 ft with Ground + Basement at ₹3.30 Cr, First Floor at ₹1.65 Cr, Second Floor at ₹1.40 Cr, and Third Floor at ₹1.15 Cr; 16.6 × 50 ft with Ground + Basement at ₹2.00 Cr, First Floor at ₹1.20 Cr, Second Floor at ₹0.95 Cr, and Third Floor at ₹0.85 Cr; and a 14 × 40 ft unit with Basement + Ground + First at ₹2.50 Cr."
    },
    {
      question: "What is the payment plan for commercial space?",
      answer: "The payment plan in the latest price sheet is 10% on booking, 15% within 30 days of booking, 25% at layout or plan approval, 25% at super structure, and 25% at possession."
    },
    {
      question: "When will the project be ready for possession?",
      answer: "Project details currently position Mohali High Street as ready for possession while bookings remain open. Before booking, it is still best to confirm the exact handover status of the specific unit or floor you are evaluating."
    },
    {
      question: "What is the expected rental yield?",
      answer: "Rental yield depends on the frontage, floor level, and commercial use case. Ground + basement inventory typically commands stronger visibility-led rents, while upper floors are usually evaluated for office, clinic, or service-led usage. We can estimate rent and ROI once you shortlist a specific unit."
    },
    {
      question: "Are there any additional charges?",
      answer: "Apart from the base price, there may be additional charges for utilities, club membership, and maintenance. All charges are transparently disclosed before booking. No hidden costs are involved."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-4xl font-bold text-center mb-12 font-poiret"
        >
          Frequently Asked Questions
        </motion.h2>
        
        <div className="max-w-4xl mx-auto space-y-4 relative before:absolute before:inset-0 before:bg-white before:-z-[1]">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-100 transition-colors"
              >
                <h3 className="font-semibold text-lg pr-4">{faq.question}</h3>
                {openFAQ === index ? (
                  <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                )}
              </button>
              
              <AnimatePresence>
                {openFAQ === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
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

export default FAQSection;
