import { useEffect } from 'react';
import type { Project } from '../context/ProjectContext';

interface ProductSchemaProps {
  project: Project;
}

const ProductSchema = ({ project }: ProductSchemaProps) => {
  useEffect(() => {
    // Generate Product Schema for real estate projects
    const productSchema = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": project.name,
      "description": project.description,
      "url": `https://thelegacyrealty.in/project/${project.slug}`,
      "image": project.gallery?.[0] || "https://thelegacyrealty.in/assets/tlrlogo.webp",
      "brand": {
        "@type": "Brand",
        "name": "The Legacy Realty"
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "INR",
        "price": project.specifications?.price || "Contact for price",
        "availability": "https://schema.org/InStock",
        "url": `https://thelegacyrealty.in/project/${project.slug}`
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.7",
        "reviewCount": "50",
        "bestRating": "5",
        "worstRating": "1"
      },
      "areaServed": project.connectivity?.map(conn => conn.split(':')[0].trim()) || [],
      "category": "RealEstateProject",
      "location": {
        "@type": "Place",
        "name": `${project.name} - ${project.city}`,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": project.city,
          "addressRegion": "Punjab",
          "addressCountry": "IN"
        }
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(productSchema);
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [project]);

  return null; // This component only adds schema, doesn't render UI
};

export default ProductSchema;
