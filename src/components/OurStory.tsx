import { Card, CardContent } from "../components/ui/card";
import { Building2, Gem } from "lucide-react";

const OurStory = () => {
  return (
    <section className="relative bg-gray-50 py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://creatifyindia.com/thelegacyrealty/wp-content/uploads/2024/11/Gaurav-Bajwa-1-1024x1024.png"
            alt="The Legacy Realty"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side - Content */}
        <div>
          {/* Badge */}
          <div className="mb-4 inline-block bg-teal-100 px-4 py-1 rounded-full text-sm font-medium text-teal-800">
            Our Journey
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl text-foreground lg:text-5xl font-bold leading-tight mb-6 font-poppins">
            Our <span className="text-primary">Story</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-600 mb-8 font-inter">
            At <span className="font-semibold">The Legacy Realty</span>, we started with
            a vision to help people find their dream spaces — whether it’s a modern
            home, a thriving commercial hub, or the perfect investment plot. Over
            the years, we’ve grown into a trusted real estate brand in
            <span className="font-semibold"> Chandigarh & Mohali</span>, helping
            families and investors make smarter property decisions.
          </p>

          {/* Mission & Values Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="p-2 rounded-full bg-primary/10 text-primary">
                    <Building2 className="h-5 w-5" />
                  </span>
                  <h3 className="font-semibold text-lg font-poppins">Our Mission</h3>
                </div>
                <p className="text-sm text-gray-600 font-inter">
                  To provide premium residential, commercial, and plot options
                  tailored for both investment opportunities and personal living,
                  ensuring trust, quality, and long-term value.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="p-2 rounded-full bg-primary/10 text-primary">
                    <Gem className="h-5 w-5" />
                  </span>
                  <h3 className="font-semibold text-lg font-poppins">Our Values</h3>
                </div>
                <p className="text-sm text-gray-600 font-inter">
                  Integrity, transparency, and customer-first service guide every
                  step we take — from guiding first-time home buyers to helping
                  seasoned investors grow their portfolios with confidence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
