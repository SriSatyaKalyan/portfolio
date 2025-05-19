import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="font-bold text-xl text-blue-600">Kalyan Kallepalli</div>
        {/* Mobile menu button */}
        <button className="md:hidden p-2" onClick={toggleMenu} aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}>
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="hover:text-blue-600 transition-colors">
            About
          </a>
          <a href="#skills" className="hover:text-blue-600 transition-colors">
            Skills
          </a>
          <a href="#experience" className="hover:text-blue-600 transition-colors">
            Experience
          </a>
          <a href="#projects" className="hover:text-blue-600 transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">
            Contact
          </a>
        </nav>
      </div>
      {/* Mobile navigation */}
      {isMenuOpen && <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
            <a href="#about" className="py-2 hover:text-blue-600 transition-colors" onClick={toggleMenu}>
              About
            </a>
            <a href="#skills" className="py-2 hover:text-blue-600 transition-colors" onClick={toggleMenu}>
              Skills
            </a>
            <a href="#experience" className="py-2 hover:text-blue-600 transition-colors" onClick={toggleMenu}>
              Experience
            </a>
            <a href="#projects" className="py-2 hover:text-blue-600 transition-colors" onClick={toggleMenu}>
              Projects
            </a>
            <a href="#contact" className="py-2 hover:text-blue-600 transition-colors" onClick={toggleMenu}>
              Contact
            </a>
          </div>
        </div>}
    </header>;
}