import React from 'react'

const CTA = () => {
  return (
    <section id="cta" className="cta-section">
      <div className="container mx-auto text-center">
        <h2 className="cta-title">Ready to Dive into <span className="text-white">AniFlix</span>?</h2>
        <p className="cta-description">
          Join thousands of anime fans enjoying unlimited streaming of their favorite shows.
        </p>
        
        <a href="home.html" className="cta-button ripple">
          <i className="fas fa-crown"></i> Get Premium Access
        </a>
      </div>
    </section>
  )
}

export default CTA