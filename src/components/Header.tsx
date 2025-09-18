import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building2, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-primary" />
            <span className="font-poppins font-bold text-xl text-primary">
              thelegacyrealty
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary transition-colors duration-200">
              Home
            </Link>
            <Link to="/projects" className="text-gray-700 hover:text-primary transition-colors duration-200">
              Projects
            </Link>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors duration-200">
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/projects"
                className="text-gray-700 hover:text-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <a
                href="#contact"
                className="text-gray-700 hover:text-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;