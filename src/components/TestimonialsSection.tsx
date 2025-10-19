
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      quote: "The Legacy Realty provided exceptional service throughout our home buying journey. Their knowledge of the Mohali market and attention to detail made the entire process smooth and stress-free. Highly recommended!",
      name: "Rajesh Kumar",
      location: "Mohali",
      rating: 5,
      date: "2 months ago",
      avatar: "RK"
    },
    {
      quote: "Outstanding real estate consultancy! They helped us find the perfect property in Chandigarh within our budget. Professional, reliable, and truly customer-focused. Thank you for making our dream home a reality.",
      name: "Priya Sharma",
      location: "Chandigarh",
      rating: 5,
      date: "1 month ago",
      avatar: "PS"
    },
    {
      quote: "Excellent experience with The Legacy Realty. Their team is knowledgeable, honest, and goes above and beyond to help clients. Found us a great commercial space in New Chandigarh. Definitely recommend their services!",
      name: "Amit Singh",
      location: "New Chandigarh",
      rating: 5,
      date: "3 weeks ago",
      avatar: "AS"
    },
    {
      quote: "Very professional and trustworthy real estate consultants. They understood our requirements perfectly and showed us properties that matched our criteria. Great communication and follow-up throughout the process.",
      name: "Neha Kapoor",
      location: "Zirakpur",
      rating: 5,
      date: "1 week ago",
      avatar: "NK"
    },
    {
      quote: "The Legacy Realty made our property investment decision easy with their expert guidance and market insights. They are transparent, efficient, and truly care about their clients' satisfaction. Excellent service!",
      name: "Vikram Mehta",
      location: "Mohali",
      rating: 5,
      date: "2 weeks ago",
      avatar: "VM"
    },
    {
      quote: "Amazing experience! The team at The Legacy Realty is highly professional and helped us navigate the complex property buying process. Their local expertise and commitment to excellence is truly commendable.",
      name: "Sunita Gupta",
      location: "Chandigarh",
      rating: 5,
      date: "4 days ago",
      avatar: "SG"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 3 >= testimonials.length ? 0 : prevIndex + 3
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 3 < 0 ? Math.max(0, testimonials.length - 3) : prevIndex - 3
    );
  };

  const currentTestimonials = testimonials.slice(currentIndex, currentIndex + 3);

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poiret font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="font-inter text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Authentic reviews from our satisfied clients on Google Maps
          </p>
          
          {/* Google Reviews Header */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="w-8 h-8">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="font-semibold text-gray-800">Google</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="font-semibold text-gray-800 ml-2">5.0</span>
              <span className="text-gray-600">(86 reviews)</span>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-shadow duration-300 group"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="h-6 w-6 text-gray-600 group-hover:text-secondary transition-colors" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-shadow duration-300 group"
            disabled={currentIndex + 3 >= testimonials.length}
          >
            <ChevronRight className="h-6 w-6 text-gray-600 group-hover:text-secondary transition-colors" />
          </button>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentTestimonials.map((testimonial, index) => (
              <div
                key={currentIndex + index}
                className="bg-white rounded-2xl shadow-lg p-6 relative hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Google Review Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-poiret font-semibold text-gray-900">
                        {testimonial.name}
                      </p>
                      <p className="font-inter text-sm text-gray-500">
                        {testimonial.date}
                      </p>
                    </div>
                  </div>
                  <svg viewBox="0 0 24 24" className="w-5 h-5">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </div>

                {/* Star Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="font-inter text-gray-700 text-sm leading-relaxed mb-4">
                  {testimonial.quote}
                </p>

                {/* Location */}
                <div className="flex items-center text-gray-500 text-sm">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  {testimonial.location}
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * 3)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  Math.floor(currentIndex / 3) === index
                    ? 'bg-secondary'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Google Maps Integration Note */}
        <div className="text-center mt-12 relative before:absolute before:inset-0 before:bg-white before:-z-[1]">
          <p className="font-inter text-gray-600 mb-4">
            Visit our Google Maps listing to see more reviews and get directions
          </p>
          <a
            href="https://maps.google.com/maps?q=The+Legacy+Realty,+Sector+118,+Sahibzada+Ajit+Singh+Nagar,+Punjab&ll=30.727329,76.6810989&z=15&t=m"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-lg hover:bg-secondary/90 transition-colors duration-300"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            View on Google Maps
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;