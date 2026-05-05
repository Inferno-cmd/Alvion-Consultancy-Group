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

  return (
    <nav className={`nx-navbar ${isSticky ? 'nx-sticky' : ''}`}>
      <div className="nx-container">
        <div className="nx-logo-wrapper">
          <img src={logo} alt="NexaTech" className="nx-logo" />
        </div>

  
        <ul className={`nx-nav-links ${isMenuOpen ? 'nx-open' : ''}`}>
          {/* Close Icon inside the menu for mobile */}
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
              />
              <FaSearch className="nx-search-icon" />
            </div>
          </li>

          <li><a href="#hero" onClick={closeMenu}>Home</a></li>
          <li><a href="#solutions" onClick={closeMenu}>Our Solution</a></li>
          <li><a href="#about" onClick={closeMenu}>About us</a></li>
          <li><a href="#services" onClick={closeMenu}>Products & services</a></li>
          <li><a href="#testimonials" onClick={closeMenu}>Testimonial</a></li>
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