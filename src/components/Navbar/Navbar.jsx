import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      const query = searchQuery.toLowerCase().trim();
      const sectionMap = {
        'home': 'hero',
        'solution': 'solutions',
        'solutions': 'solutions',
        'about': 'about',
        'product': 'services',
        'products': 'services',
        'service': 'services',
        'services': 'services',
        'testimonial': 'testimonials',
        'testimonials': 'testimonials',
        'contact': 'contact',
        'feedback': 'contact',
        'email': 'contact'
      };

      const targetId = sectionMap[query] || query;
      const element = document.getElementById(targetId);

      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setSearchQuery("");
        closeMenu();
      } else {
        alert("Section not found. Try 'Solutions' or 'Contact'.");
      }
    }
  };

  return (
    <nav className={`nx-navbar ${isSticky ? 'nx-sticky' : ''}`}>
      <div className="nx-container">
        
        <div className="nx-logo-wrapper">
          <img src={logo} alt="Alvion Logo" className="nx-logo-icon" />
          <div className="nx-logo-text">
            <span className="nx-brand-name">Alvion</span>
            <span className="nx-brand-sub">CONSULTANCY GROUP</span>
          </div>
        </div>

        {isMenuOpen && <div className="nx-nav-overlay" onClick={closeMenu}></div>}

        <ul className={`nx-nav-links ${isMenuOpen ? 'nx-open' : ''}`}>
          <li className="nx-close-menu" onClick={closeMenu}>
            <FaTimes />
          </li>
          
          <li className="nx-search-item">
            <div className="nx-search-box">
              <input 
                type="text" 
                placeholder="Search..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearch}
              />
              <FaSearch className="nx-search-icon" />
            </div>
          </li>
          
          <li><a href="#hero" onClick={closeMenu}>Home</a></li>
          <li><a href="#solutions" onClick={closeMenu}>Our Solution</a></li>
          <li><a href="#about" onClick={closeMenu}>About us</a></li>
          <li><a href="#services" onClick={closeMenu}>Products & services</a></li>
          <li><a href="#testimonial" onClick={closeMenu}>Testimonial</a></li>
          
          <li className="nx-cta-li">
            <a href="#contact" onClick={closeMenu} className="nx-btn">Contact Us</a>
          </li>
        </ul>

        <div className="nx-menu-toggle" onClick={toggleMenu}>
          <FaBars />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;