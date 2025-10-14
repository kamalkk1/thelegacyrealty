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
      answer: "Two options are available: 16.6 × 50 ft showrooms priced at ₹3.5 Cr with Basement + G + 1 + 2 floors, and 16.6 × 66 ft premium showrooms at ₹6.5 Cr with Basement + G + 1 + 2 + 3 floors."
    },
    {
      question: "What is the payment plan for commercial space?",
      answer: "We offer flexible payment plans tailored to your investment capacity. Options include construction-linked payments, down payment plans, and bank loan assistance. Contact our experts for customized payment schedules."
    },
    {
      question: "When will the project be ready for possession?",
      answer: "Construction is progressing as per schedule. The project is expected to be ready for possession by [specific timeline]. We provide regular construction updates to all our investors."
    },
    {
      question: "What is the expected rental yield?",
      answer: "Based on market analysis, the expected rental yield ranges from 12-15% annually. ₹3.5 Cr showrooms can generate ₹35,000-45,000/month, while ₹6.5 Cr showrooms can fetch ₹65,000-80,000/month in rent."
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
