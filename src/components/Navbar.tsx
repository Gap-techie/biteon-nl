
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'frosted-glass shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/1ab722f3-1445-4d3a-8f83-37c38d179fa4.png" 
            alt="Biteon" 
            className="h-8 md:h-10 w-auto" 
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#"
            onClick={() => scrollToSection('home')}
            className="text-gray-800 hover:text-biteon-blue hover-underline-animation font-medium transition-colors"
          >
            Home
          </a>
          <a 
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('services');
            }}
            className="text-gray-800 hover:text-biteon-blue hover-underline-animation font-medium transition-colors"
          >
            Services
          </a>
          <a 
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}
            className="text-gray-800 hover:text-biteon-blue hover-underline-animation font-medium transition-colors"
          >
            About Us
          </a>
          <a 
            href="#technologies"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('technologies');
            }}
            className="text-gray-800 hover:text-biteon-blue hover-underline-animation font-medium transition-colors"
          >
            Technologies
          </a>
          <a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
            className="text-gray-800 hover:text-biteon-blue hover-underline-animation font-medium transition-colors"
          >
            Contact
          </a>
        </nav>

        <div className="hidden md:block">
          <Button 
            onClick={() => scrollToSection('contact')}
            className="glass-button hover:bg-biteon-dark-blue text-white font-medium px-6 py-2 rounded-md transition-all duration-300 transform hover:scale-105"
          >
            Chat with Us
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 frosted-glass z-40 transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '60px' }}
      >
        <nav className="flex flex-col p-6 space-y-6">
          <a
            href="#"
            onClick={() => scrollToSection('home')}
            className="text-gray-800 hover:text-biteon-blue font-medium text-lg py-2 transition-colors"
          >
            Home
          </a>
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('services');
            }}
            className="text-gray-800 hover:text-biteon-blue font-medium text-lg py-2 transition-colors"
          >
            Services
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}
            className="text-gray-800 hover:text-biteon-blue font-medium text-lg py-2 transition-colors"
          >
            About Us
          </a>
          <a
            href="#technologies"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('technologies');
            }}
            className="text-gray-800 hover:text-biteon-blue font-medium text-lg py-2 transition-colors"
          >
            Technologies
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
            className="text-gray-800 hover:text-biteon-blue font-medium text-lg py-2 transition-colors"
          >
            Contact
          </a>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="glass-button hover:bg-biteon-dark-blue text-white font-medium px-6 py-2 rounded-md transition-all w-full mt-4"
          >
            Chat with Us
          </Button>
        </nav>
      </div>
    </header>
  );
}
