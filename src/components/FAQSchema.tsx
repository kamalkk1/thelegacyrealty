import { useEffect } from 'react';

const FAQSchema = () => {
  useEffect(() => {
    const faqStructuredData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is RERA approval and why is it important?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "RERA (Real Estate Regulation Act) approval ensures that a property project is registered with the government and follows legal compliance. According to RERA Punjab Authority, all residential projects must be RERA-approved before sale. The Legacy Realty ensures all projects are RERA-compliant, protecting your investment with legal protection and transparency."
          }
        },
        {
          "@type": "Question",
          "name": "Which areas does The Legacy Realty serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Legacy Realty operates across the Tricity region including Mohali, Chandigarh, New Chandigarh, Panchkula, Kharar, and Zirakpur. We also have premium properties in Himachal Pradesh including Kasauli, Dharampur, and surrounding areas with breathtaking mountain views."
          }
        },
        {
          "@type": "Question",
          "name": "What are the payment options available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer flexible payment plans tailored to your needs: Bank financing is available through major financial institutions like HDFC, ICICI, Axis Bank, and others at competitive rates with minimal documentation."
          }
        },
        {
          "@type": "Question",
          "name": "How do I book a site visit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Click the 'Book Site Visit' button on any project page to schedule through Calendly, or contact us directly at +91-98882-47787 or +91-94639-00803. Our experienced team will coordinate a convenient time for you to visit and explore the property."
          }
        },
        {
          "@type": "Question",
          "name": "What documents are required for property purchase?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Typically required documents include: government-issued ID proof, address proof, recent bank statements, PAN card, Aadhaar card, and income certificate. Our legal team will guide you through the complete documentation process and ensure all compliance requirements are met smoothly."
          }
        },
        {
          "@type": "Question",
          "name": "Do you assist NRI clients and foreign nationals?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we have extensive experience assisting NRI clients with property purchases in India. You can invest directly or through an Indian relative as nominee. We handle all legal, regulatory, and documentation requirements as per FEMA guidelines and RBI regulations to ensure a smooth transaction."
          }
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(faqStructuredData);
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null; // This component only adds schema, doesn't render UI
};

export default FAQSchema;
