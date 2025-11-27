import React from 'react'

const Footer = () => {
  const socialLinks = [
    { icon: "fab fa-facebook-f", href: "#" },
    { icon: "fab fa-twitter", href: "#" },
    { icon: "fab fa-instagram", href: "#" },
    { icon: "fab fa-discord", href: "#" }
  ]

  return (
    <footer className="footer">
      <div className="container mx-auto">
        <div className="footer-content">
          <div className="logo-section">
            <i className="fas fa-play-circle text-3xl text-primary mr-3"></i>
            <span className="brand-text">Ani<span className="text-primary">Flix</span></span>
          </div>
          
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <a key={index} href={social.href} className="social-link">
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2023 AniFlix. All rights reserved. All anime titles and content are property of their respective owners.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer