import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOMetaProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
}

const SEOMeta: React.FC<SEOMetaProps> = ({
  title = 'The Legacy Realty - Premium Properties in Tricity | Mohali, Chandigarh, Himachal',
  description = 'Discover luxury residential and commercial properties in Mohali, Chandigarh, New Chandigarh, and Himachal Pradesh. The Legacy Realty offers premium real estate solutions with trusted developers.',
  keywords = 'real estate mohali, properties chandigarh, luxury apartments mohali, commercial spaces chandigarh, himachal properties, new chandigarh real estate, tricity properties, the legacy realty',
  canonical,
  ogTitle,
  ogDescription,
  ogImage = 'https://thelegacyrealty.in/assets/tlrlogo.webp',
  ogType = 'website'
}) => {
  const location = useLocation();

  useEffect(() => {
    // Set document title
    document.title = title;

    // Get or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    // Update basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    // Update Open Graph tags
    updateMetaTag('og:title', ogTitle || title, true);
    updateMetaTag('og:description', ogDescription || description, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:url', `https://thelegacyrealty.in${location.pathname}`, true);

    // Update Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', ogTitle || title);
    updateMetaTag('twitter:description', ogDescription || description);
    updateMetaTag('twitter:image', ogImage);

    // Set canonical URL
    const canonicalUrl = canonical || `https://thelegacyrealty.in${location.pathname}`;
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    
    canonicalLink.href = canonicalUrl;

    // Add structured data for real estate
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "RealEstateAgent",
      "name": "The Legacy Realty",
      "url": "https://thelegacyrealty.in",
      "logo": "https://thelegacyrealty.in/assets/tlrlogo.webp",
      "description": description,
      "telephone": "+91-98882-47787",
      "email": "info.thelegacyrealty@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2nd floor, sco 275, Sector 118",
        "addressLocality": "Sahibzada Ajit Singh Nagar",
        "addressRegion": "Punjab",
        "addressCountry": "IN"
      },
      "areaServed": [
        "Mohali",
        "Chandigarh", 
        "New Chandigarh",
        "Himachal Pradesh",
        "Kasauli",
        "Dharampur"
      ],
      "serviceType": [
        "Residential Real Estate",
        "Commercial Real Estate", 
        "Property Investment",
        "Real Estate Consulting"
      ]
    };

    // Add or update structured data script
    let structuredDataScript = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
    if (!structuredDataScript) {
      structuredDataScript = document.createElement('script');
      structuredDataScript.type = 'application/ld+json';
      document.head.appendChild(structuredDataScript);
    }
    structuredDataScript.textContent = JSON.stringify(structuredData);

  }, [title, description, keywords, canonical, ogTitle, ogDescription, ogImage, ogType, location.pathname]);

  return null;
};

export default SEOMeta;
