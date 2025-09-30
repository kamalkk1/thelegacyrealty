
import { Card, CardContent } from "../components/ui/card";



const InstagramSection = () => {
  const shorts = [
    "https://www.youtube.com/embed/bdAHx_AB6Ew?autoplay=1&mute=1&loop=1&playlist=bdAHx_AB6Ew",
    "https://www.youtube.com/embed/c6jj3TDdUeU?autoplay=1&mute=1&loop=1&playlist=c6jj3TDdUeU",
    "https://www.youtube.com/embed/Gej9OVFsfAw?autoplay=1&mute=1&loop=1&playlist=Gej9OVFsfAw",
    "https://www.youtube.com/embed/jdrFmzpPPa8?autoplay=1&mute=1&loop=1&playlist=jdrFmzpPPa8",
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold font-poiret text-gray-900">
            Follow Us on Instagram
          </h2>
          <p className="mt-3 text-lg text-gray-600 font-inter">
            Stay updated with our latest projects and events
          </p>
        </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {shorts.map((url, index) => (
            <Card
              key={index}
              className="relative before:absolute before:inset-0 before:bg-white before:-z-[1] bg-white/100 backdrop-blur-xl shadow-md hover:shadow-lg transition-all rounded-xl overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="aspect-[9/16] w-full overflow-hidden">
                  <iframe
                    src={url}
                    className="w-full h-full border-0"
                    allow="autoplay; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
