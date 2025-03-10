import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Zap } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-dark-800/90 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <Zap className={`h-8 w-8 ${isScrolled ? 'text-primary-600 dark:text-primary-500' : 'text-white'}`} />
          <span className={`text-xl font-bold font-display ${isScrolled ? 'text-dark-900 dark:text-white' : 'text-white'}`}>
            Ocavior
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors duration-200 ${
                isScrolled
                  ? 'text-dark-600 dark:text-dark-100 hover:text-primary-600 dark:hover:text-primary-400'
                  : 'text-white hover:text-white/80'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center space-x-4">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors ${
              isScrolled 
                ? 'hover:bg-dark-100 dark:hover:bg-dark-700' 
                : 'hover:bg-white/10'
            }`}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className={`h-5 w-5 ${isScrolled ? 'text-dark-900 dark:text-white' : 'text-white'}`} />
            ) : (
              <Moon className={`h-5 w-5 ${isScrolled ? 'text-dark-900 dark:text-white' : 'text-white'}`} />
            )}
          </button>

          {/* CTA Button - Desktop */}
          <Link
            to="/contact"
            className={`hidden md:inline-flex px-4 py-2 rounded-md transition-colors ${
              isScrolled
                ? 'bg-primary-600 text-white hover:bg-primary-700'
                : 'bg-white text-dark-900 hover:bg-white/90'
            }`}
          >
            Get a Free Consultation
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-md ${
              isScrolled 
                ? 'hover:bg-dark-100 dark:hover:bg-dark-700'
                : 'hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-dark-900 dark:text-white' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-dark-900 dark:text-white' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-dark-800 shadow-lg py-4 animate-fade-in">
          <div className="container flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md ${
                  location.pathname === link.path
                    ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                    : 'text-dark-600 dark:text-dark-100 hover:bg-primary-50 dark:hover:bg-primary-900/10'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-primary-600 text-white hover:bg-primary-700 px-4 py-2 rounded-md text-center mt-2"
            >
              Get a Free Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;