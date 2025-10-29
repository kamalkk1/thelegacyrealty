// Sitemap Generator for The Legacy Realty
// This creates a dynamic sitemap for better SEO

export const generateSitemap = () => {
  const baseUrl = 'https://thelegacyrealty.com';
  
  // Static pages
  const staticPages = [
    { url: '', changefreq: 'daily', priority: '1.0' }, // Homepage
    { url: '/aboutus', changefreq: 'monthly', priority: '0.8' },
    { url: '/our-team', changefreq: 'monthly', priority: '0.7' },
    { url: '/contact-us', changefreq: 'monthly', priority: '0.8' },
    { url: '/location-map-mohali-chandigarh-zirakpur-tricity', changefreq: 'weekly', priority: '0.7' },
    { url: '/privacy-policy', changefreq: 'yearly', priority: '0.3' },
    { url: '/terms-of-service', changefreq: 'yearly', priority: '0.3' },
    { url: '/careers', changefreq: 'monthly', priority: '0.6' },
  ];

  // City pages
  const cityPages = [
    { url: '/cities/mohali', changefreq: 'weekly', priority: '0.9' },
    { url: '/cities/chandigarh', changefreq: 'weekly', priority: '0.9' },
    { url: '/cities/new-chandigarh', changefreq: 'weekly', priority: '0.9' },
    { url: '/cities/himachal', changefreq: 'weekly', priority: '0.9' },
  ];

  // Project type pages
  const projectTypePages = [
    { url: '/projects/residential', changefreq: 'weekly', priority: '0.8' },
    { url: '/projects/commercial', changefreq: 'weekly', priority: '0.8' },
  ];

  // Individual project pages (these would be dynamic in a real implementation)
  const projectPages = [
    { url: '/project/mdb-lutyens', changefreq: 'weekly', priority: '0.8' },
    { url: '/project/greenwoods-sector-115', changefreq: 'weekly', priority: '0.8' },
    { url: '/project/the-clermont', changefreq: 'weekly', priority: '0.8' },
    { url: '/project/amari-vintage-arc', changefreq: 'weekly', priority: '0.8' },
    { url: '/project/noble-willasa', changefreq: 'weekly', priority: '0.8' },
    { url: '/project/medallion-aurum', changefreq: 'weekly', priority: '0.8' },
    { url: '/project/plbl-wellness-city', changefreq: 'weekly', priority: '0.8' },
    { url: '/project/gardenia-boutique', changefreq: 'weekly', priority: '0.8' },
    { url: '/project/omaxe-the-lake', changefreq: 'weekly', priority: '0.8' },
    { url: '/project/connaught-homes-117', changefreq: 'weekly', priority: '0.8' },
    { url: '/project/mayfields', changefreq: 'weekly', priority: '0.8' },
    { url: '/project/bollywood-green-city-phase-iv', changefreq: 'weekly', priority: '0.8' },
    { url: '/project/stj-pinnacle', changefreq: 'weekly', priority: '0.8' },
    { url: '/project/khetan-swiss-garden', changefreq: 'weekly', priority: '0.8' },
    { url: '/project/the-kasul-kasauli', changefreq: 'weekly', priority: '0.8' },
    { url: '/project/carnation-hills-dharampur', changefreq: 'weekly', priority: '0.8' },
    { url: '/project/tiara-new-chandigarh', changefreq: 'weekly', priority: '0.8' },
    { url: '/project/wave-gardens', changefreq: 'weekly', priority: '0.8' },
  ];

  const allPages = [...staticPages, ...cityPages, ...projectTypePages, ...projectPages];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemapXml;
};

// Function to create sitemap.xml file
export const createSitemapFile = () => {
  const sitemapContent = generateSitemap();
  
  // In a real implementation, you would write this to public/sitemap.xml
  // For now, we'll return the content
  return sitemapContent;
};
