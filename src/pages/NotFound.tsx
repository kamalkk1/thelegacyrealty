import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, MapPin, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 404 Number */}
          <div className="mb-8">
            <span className="text-8xl md:text-9xl font-bold text-secondary opacity-20">404</span>
          </div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Oops! Property Not Found
            </h1>
            <p className="text-lg text-gray-600 mb-6 max-w-lg mx-auto">
              The property or page you're looking for seems to have moved to a new location, 
              just like our premium real estate projects!
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-secondary hover:bg-foreground text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
            >
              <Home className="w-5 h-5" />
              Go Home
            </Link>
            
            <Link
              to="/cities/mohali"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-secondary border-2 border-secondary font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
            >
              <MapPin className="w-5 h-5" />
              Browse Properties
            </Link>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Popular Destinations
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                to="/cities/mohali"
                className="group p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="text-secondary font-semibold mb-1 group-hover:text-foreground transition-colors">
                  Mohali Properties
                </div>
                <div className="text-sm text-gray-600">
                  IT City & Modern Living
                </div>
              </Link>
              
              <Link
                to="/cities/chandigarh"
                className="group p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="text-secondary font-semibold mb-1 group-hover:text-foreground transition-colors">
                  Chandigarh Properties
                </div>
                <div className="text-sm text-gray-600">
                  Beautiful City Living
                </div>
              </Link>
              
              <Link
                to="/cities/himachal"
                className="group p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="text-secondary font-semibold mb-1 group-hover:text-foreground transition-colors">
                  Himachal Properties
                </div>
                <div className="text-sm text-gray-600">
                  Mountain Retreats
                </div>
              </Link>
            </div>
          </motion.div>

          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8"
          >
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 text-gray-600 hover:text-secondary transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
