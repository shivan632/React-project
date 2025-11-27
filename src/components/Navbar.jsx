import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero', icon: 'fas fa-home' },
    { name: 'Featured', href: '#featured', icon: 'fas fa-compass' },
    { name: 'Trending', href: '#trending', icon: 'fas fa-fire' },
    { name: 'Category', href: '#category', icon: 'fas fa-bookmark' },
    { name: 'CTA', href: '#cta', icon: 'fas fa-star' }
  ];

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          {/* Logo */}
          <div className="nav-logo">
            <i className="fas fa-play-circle nav-logo-icon"></i>
            <span className="nav-logo-text">Ani<span>Flix</span></span>
          </div>

          {/* Desktop Navigation */}
          <div className="nav-links">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-link"
              >
                <i className={item.icon}></i>
                <span>{item.name}</span>
              </a>
            ))}
          </div>

          {/* Search and User Section */}
          <div className="nav-actions">
            <div className="search-container">
              <i className="fas fa-search search-icon"></i>
              <input 
                type="text" 
                placeholder="Search anime..." 
                className="search-input"
              />
            </div>
            
            <div className="user-menu">
              <div className="user-avatar">
                <i className="fas fa-user"></i>
              </div>
              <div className="dropdown-arrow">
                <i className="fas fa-chevron-down"></i>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
              <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
              <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-content">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="mobile-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <i className={item.icon}></i>
                <span>{item.name}</span>
              </a>
            ))}
            
            <div className="mobile-search">
              <div className="search-container mobile">
                <i className="fas fa-search search-icon"></i>
                <input 
                  type="text" 
                  placeholder="Search anime..." 
                  className="search-input"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;