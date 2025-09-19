
import { Card, CardContent } from "../components/ui/card";





const CitySection = () => {
  const cards = [
    {
      src: "https://creatifyindia.com/thelegacyrealty/wp-content/uploads/2024/10/2-1-694x1024.png",
      title: "Mohali",
    },
    {
      src: "https://creatifyindia.com/thelegacyrealty/wp-content/uploads/2024/10/4-694x1024.png",
      title: "Chandigarh",
    },
    {
      src: "https://creatifyindia.com/thelegacyrealty/wp-content/uploads/2024/10/3-694x1024.png",
      title: "New Chandigarh",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-gray-900">
            EXPLORE THE CITIES
          </h2>
          <p className="mt-3 text-lg text-gray-600 font-inter">
            Find Your Properties
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <Card
              key={index}
              className="relative group shadow-md hover:shadow-xl transition-all rounded-[90px] overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Image */}
                <div className="aspect-[8/8] w-full overflow-hidden">
                  <img
                    src={card.src}
                    alt={card.title}
                    className="w-full h-full object-fill transform transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Overlay Title */}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-secondary to-transparent p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                  <h3 className="text-white text-lg font-semibold font-poppins text-center">
                    {card.title}
                  </h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CitySection;

