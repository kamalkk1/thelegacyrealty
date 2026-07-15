import { motion } from "framer-motion";

const StatisticsSection = () => {
  const stats = [
    { number: "25+", label: "Premium Projects", icon: "🏢", detail: "Across Tricity & Himachal" },
    { number: "500+", label: "Happy Customers", icon: "👨‍👩‍👧‍👦", detail: "Satisfied property owners" },
    { number: "₹100 Cr+", label: "Portfolio Value", icon: "💰", detail: "Combined project value" },
    { number: "15+", label: "Years Experience", icon: "📅", detail: "In real estate business" },
  ];

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

  return (
    <section className="py-20 bg-gradient-to-r from-secondary to-primary text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full -ml-48 -mb-48"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-poppins">
            Our Impact in Tricity Real Estate
          </h2>
          <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto">
            Trusted by thousands of customers to deliver exceptional real estate solutions across Chandigarh, Mohali, and beyond.
          </p>
        </motion.div>

        {/* Statistics Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              {/* Icon */}
              <motion.div
                className="text-5xl mb-4"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {stat.icon}
              </motion.div>

              {/* Number */}
              <div className="text-4xl md:text-5xl font-bold mb-2 font-poppins">
                {stat.number}
              </div>

              {/* Label */}
              <p className="text-lg font-semibold mb-2">{stat.label}</p>

              {/* Detail */}
              <p className="text-white/70 text-sm">{stat.detail}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-white/80 text-lg">
            According to RERA Punjab Authority, Mohali has emerged as a <span className="font-semibold">high-growth real estate hub</span> with <span className="font-semibold">15% year-on-year appreciation</span> — and The Legacy Realty leads the way.
          </p>
        </motion.div>
      </div>

      {/* Structured Data for Search Engines */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RealEstateAgent",
          "name": "The Legacy Realty",
          "url": "https://thelegacyrealty.in",
          "statistics": {
            "projects": 25,
            "customers": 500,
            "portfolioValue": "₹100 Crores",
            "experience": "15+ years"
          },
          "areaServed": [
            "Mohali",
            "Chandigarh",
            "New Chandigarh",
            "Panchkula",
            "Kharar",
            "Zirakpur",
            "Kasauli",
            "Dharampur"
          ]
        })}
      </script>
    </section>
  );
};

export default StatisticsSection;
