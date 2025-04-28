import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? isDarkMode 
            ? 'bg-gray-900 shadow-lg shadow-gray-800/20' 
            : 'bg-white shadow-lg'
          : isDarkMode 
            ? 'bg-transparent' 
            : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a 
          href="#home" 
          className="text-2xl font-bold tracking-tight transition-colors duration-300"
        >
          <span className="text-blue-500">Portfolio</span>
          <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-base font-medium transition-all duration-300 hover:text-blue-500 ${
                isScrolled 
                  ? isDarkMode 
                    ? 'text-gray-300' 
                    : 'text-gray-900'
                  : isDarkMode 
                    ? 'text-white' 
                    : 'text-gray-900'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <X className={`h-6 w-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className={`md:hidden transition-all duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-base font-medium hover:text-blue-500 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;