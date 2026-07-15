import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface RelatedItem {
  title: string;
  description: string;
  slug: string;
  category: 'project' | 'city' | 'page';
  icon?: string;
}

interface InternalLinksProps {
  relatedItems: RelatedItem[];
  title?: string;
}

const InternalLinks = ({ 
  relatedItems, 
  title = "Explore More"
}: InternalLinksProps) => {
  
  const getLink = (item: RelatedItem) => {
    switch (item.category) {
      case 'project':
        return `/project/${item.slug}`;
      case 'city':
        return `/cities/${item.slug}`;
      default:
        return `/${item.slug}`;
    }
  };

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  if (!relatedItems || relatedItems.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-poppins mb-4">
            {title}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-secondary to-primary rounded"></div>
        </motion.div>

        {/* Related Items Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {relatedItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <Link to={getLink(item)}>
                <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 h-full border border-gray-100 hover:border-secondary/50">
                  {/* Icon */}
                  {item.icon && (
                    <div className="text-4xl mb-4">
                      {item.icon}
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-secondary transition-colors font-poppins">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {item.description}
                  </p>

                  {/* Link Arrow */}
                  <div className="flex items-center text-secondary group-hover:translate-x-2 transition-transform">
                    <span className="text-sm font-semibold">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Structured Data for Internal Links */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "itemListElement": relatedItems.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.title,
            "description": item.description,
            "url": `https://thelegacyrealty.in${getLink({ ...item })}`
          }))
        })}
      </script>
    </section>
  );
};

export default InternalLinks;
