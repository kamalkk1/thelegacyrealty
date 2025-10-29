import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// Define URL redirects for old/changed URLs
const URL_REDIRECTS: { [key: string]: string } = {
  // Old project URLs that might have changed
  '/properties/mohali': '/cities/mohali',
  '/properties/chandigarh': '/cities/chandigarh',
  '/mohali-properties': '/cities/mohali',
  '/chandigarh-properties': '/cities/chandigarh',
  '/about': '/aboutus',
  '/team': '/our-team',
  '/contact': '/contact-us',
  '/maps': '/location-map-mohali-chandigarh-zirakpur-tricity',
  '/sitemap': '/sitemap.xml',
  
  // Old project specific URLs (examples)
  '/projects/mdb-lutyens': '/project/mdb-lutyens',
  '/properties/greenwoods': '/project/greenwoods-sector-115',
  '/luxury-apartments-mohali': '/cities/mohali',
  '/commercial-spaces-chandigarh': '/projects/commercial',
  
  // Handle common typos or variations
  '/mohali': '/cities/mohali',
  '/chandigarh': '/cities/chandigarh',
  '/himachal': '/cities/himachal',
  
  // Landing pages that should redirect to main sections
  '/residential': '/projects/residential',
  '/commercial': '/projects/commercial',
  
  // Remove trailing slashes issues
  '/aboutus/': '/aboutus',
  '/contact-us/': '/contact-us',
  '/our-team/': '/our-team',
};

const URLRedirectHandler: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    
    // Check if current URL needs redirection
    if (URL_REDIRECTS[currentPath]) {
      // Perform redirect
      navigate(URL_REDIRECTS[currentPath], { replace: true });
      return;
    }

    // Handle case-insensitive redirects
    const lowercasePath = currentPath.toLowerCase();
    if (lowercasePath !== currentPath && URL_REDIRECTS[lowercasePath]) {
      navigate(URL_REDIRECTS[lowercasePath], { replace: true });
      return;
    }

    // Handle trailing slash issues
    if (currentPath.endsWith('/') && currentPath.length > 1) {
      const pathWithoutSlash = currentPath.slice(0, -1);
      // Check if the URL without trailing slash exists
      if (URL_REDIRECTS[pathWithoutSlash] || isValidRoute(pathWithoutSlash)) {
        navigate(pathWithoutSlash, { replace: true });
        return;
      }
    }

    // Handle old query parameters (example)
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.has('page')) {
      const page = searchParams.get('page');
      if (page === 'about') {
        navigate('/aboutus', { replace: true });
        return;
      }
      if (page === 'contact') {
        navigate('/contact-us', { replace: true });
        return;
      }
    }

  }, [location.pathname, location.search, navigate]);

  return null;
};

// Helper function to check if a route is valid
const isValidRoute = (path: string): boolean => {
  const validRoutes = [
    '/',
    '/aboutus',
    '/our-team', 
    '/contact-us',
    '/location-map-mohali-chandigarh-zirakpur-tricity',
    '/cities/mohali',
    '/cities/chandigarh',
    '/cities/new-chandigarh',
    '/cities/himachal',
    '/projects/residential',
    '/projects/commercial',
    '/privacy-policy',
    '/terms-of-service',
    '/careers'
  ];
  
  return validRoutes.includes(path) || 
         path.startsWith('/project/') || 
         path.startsWith('/commercial/');
};

export default URLRedirectHandler;
