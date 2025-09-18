import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "thelegacyrealty made buying my first home seamless and stress-free. Their expertise in the Chandigarh market is unmatched.",
      name: "Rahul Sharma",
      location: "Mohali",
    },
    {
      quote: "Professional service and great property options in Chandigarh. Found the perfect home for my family with their guidance.",
      name: "Neha Kapoor",
      location: "Chandigarh",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="font-inter text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience with us.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 relative hover:shadow-xl transition-shadow duration-300"
            >
              <div className="absolute -top-4 -left-4">
                <div className="bg-secondary rounded-full p-3">
                  <Quote className="h-6 w-6 text-white" />
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-secondary fill-current" />
                ))}
              </div>

              <p className="font-inter text-gray-700 text-lg leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              <div>
                <p className="font-poppins font-semibold text-gray-900">
                  {testimonial.name}
                </p>
                <p className="font-inter text-gray-600">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;