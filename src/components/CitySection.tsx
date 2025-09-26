import { Card, CardContent } from "../components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const CitySection = () => {

    // Animation variants for different directions
  const variants = {
    left:   { hidden: { x: -80, opacity: 0 }, visible: { x: 0, opacity: 1 } },
    right:  { hidden: { x: 80,  opacity: 0 }, visible: { x: 0, opacity: 1 } },
    center: { hidden: { y: 80,  opacity: 0 }, visible: { y: 0, opacity: 1 } },
  };
  const cards = [
    {
      src: "https://creatifyindia.com/thelegacyrealty/wp-content/uploads/2024/10/2-1-694x1024.png",
      title: "Mohali",
      route: "/cities/mohali"
    },
    {
      src: "https://creatifyindia.com/thelegacyrealty/wp-content/uploads/2024/10/4-694x1024.png",
      title: "Chandigarh",
      route: "/cities/chandigarh"
    },
    {
      src: "https://creatifyindia.com/thelegacyrealty/wp-content/uploads/2024/10/3-694x1024.png",
      title: "New Chandigarh",
      route: "/cities/new-chandigarh"
    },
  ];

  return (
       <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-gray-900">
            EXPLORE THE CITIES
          </h2>
          <p className="mt-3 text-lg text-gray-600 font-inter">
            Find Your Properties
          </p>
        </motion.div>

        {/* Animated Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => {
            // Decide animation direction:
            let direction: "left" | "right" | "center";
            if (index % 3 === 0) direction = "left";
            else if (index % 3 === 1) direction = "center";
            else direction = "right";

            return (
              <Link key={index} to={card.route} className="block">
                <motion.div
                  variants={variants[direction]}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
                >
                  <Card className="border-0 bg-gradient-to-br from-white to-secondary hover:from-foreground hover:to-secondary relative group shadow-md hover:shadow-xl transition-all rounded-[90px] overflow-hidden cursor-pointer">
                    <CardContent className="px-0">
                      {/* Image */}
                      <div className="aspect-[6/8] w-full overflow-hidden">
                        <img
                          src={card.src}
                          alt={card.title}
                          className="w-full h-full object-fill transform transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>

                      {/* Overlay Title */}
                      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-primary to-transparent p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                        <h3 className="text-white text-2xl font-semibold font-poppins text-center">
                          {card.title}
                        </h3>
                      </div>

                      {/* Explore Button */}
                      <div className="absolute text-nowrap top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="bg-white text-primary px-6 py-2 rounded-full font-semibold shadow-lg group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                          Explore {card.title}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CitySection;
