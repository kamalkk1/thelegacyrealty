import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  breadcrumbs?: BreadcrumbItem[];
  projectName?: string;
}

const BreadcrumbSchema = ({ breadcrumbs, projectName }: BreadcrumbSchemaProps) => {
  const location = useLocation();

  useEffect(() => {
    // Default breadcrumbs if not provided
    let items: BreadcrumbItem[] = [
      { name: 'Home', url: 'https://thelegacyrealty.in' }
    ];

    // Add custom breadcrumbs or generate from path
    if (breadcrumbs && breadcrumbs.length > 0) {
      items = items.concat(breadcrumbs);
    } else {
      // Auto-generate from current path
      const pathSegments = location.pathname.split('/').filter(Boolean);
      
      if (pathSegments.includes('project') && projectName) {
        items.push(
          { name: 'Projects', url: 'https://thelegacyrealty.in/projects' },
          { name: projectName, url: `https://thelegacyrealty.in${location.pathname}` }
        );
      } else if (pathSegments[0] === 'cities') {
        items.push(
          { name: 'Cities', url: 'https://thelegacyrealty.in/cities' },
          { name: pathSegments[1]?.charAt(0).toUpperCase() + pathSegments[1]?.slice(1), 
            url: `https://thelegacyrealty.in${location.pathname}` }
        );
      } else if (pathSegments[0]) {
        items.push({
          name: pathSegments[0].charAt(0).toUpperCase() + pathSegments[0].slice(1),
          url: `https://thelegacyrealty.in${location.pathname}`
        });
      }
    }

    // Create BreadcrumbList schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [location.pathname, breadcrumbs, projectName]);

  return null; // This component only adds schema, doesn't render UI
};

export default BreadcrumbSchema;
