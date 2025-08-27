import React, { useState } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';


const Footer = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    // Basic email regex
    return /\S+@\S+\.\S+/.test(email);
  };

  const submitEmail = () => {
    if (!email) {
      setError('Email is required.');
    } else if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
    } else {
      setError('');
      // Simulate submission
      alert(`Subscribed successfully with: ${email}`);
      setEmail('');
    }
  };
  return (
    <footer className="footer mt-5">
      <div className="newsletter-section text-center text-white py-5">
        <h4>Subscribe to Our Newsletter</h4>
        {error && <div className="error-message text-dark mt-2">{error}</div>}

        <div className="newsletter-input mt-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email Address"
            className={error ? 'input-error' : ''}
          />
          <button onClick={submitEmail} className="subscribe-btn">
            SUBSCRIBE ➔
          </button>
        </div>
      </div>

      <div className="footer-content text-white py-5">
        <div className="container">
          <div className="row">
            {/* Company Info */}
            <div className="col-md-4 mb-3">
              <a className="navbar-brand d-flex align-items-center" href="#">
                <img
                  src={`${process.env.PUBLIC_URL}/img/logo_sofa1.png`} // <- make sure this is in public folder
                  alt="SG Sofa Center"
                  height="50"
                  className="me-2"
                />

              </a>
              <p>
                <span className='fw-bold'>Noida’s Most Trusted Sofa Repair Experts</span><br></br>
                15 years of experience in sofa repair and reupholstery, we have become the go-to choice for countless homes and businesses across Noida.
              </p>
            </div>

            {/* Navigation */}
            <div className="col-md-2 mb-3">
              <h4>Quick Links</h4>
              <ul className="list-unstyled">
                <li><Link to="/" className='text-white text-decoration-none'> → Home</Link></li>
                <li><Link to="/about" className='text-white text-decoration-none'>→ About</Link></li>
                <li><Link to="/sofa_repair" className='text-white text-decoration-none'>→ Services</Link></li>
                <li><Link to="/contact_us" className='text-white text-decoration-none'>→ Contact us</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div className="col-md-3 mb-3">
              <h4>Our Services</h4>
              <ul className="list-unstyled">
                <li>→ Custom Sofa Manufacturing</li>
                <li>→ Sofa Repair & Reupholstery</li>
                <li>→ At-Home Fabric Selection</li>
                <li>→ Luxury Sofa Sets</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="col-md-3">
              <h4>Contact Us</h4>
              <a href="tel:+919742549058" className="text-white text-decoration-none ">
                <p>  📞 +917351139800</p>
              </a>
              <a href="mailto:support@sgsofacenter.in" className="text-white text-decoration-none " >
                <p>  ✉ support@sgsofacenter.com</p>
              </a>

              <a href="https://share.google/SoKSoIMKuCDxVWWjq" className="text-white text-decoration-none " >
                <p>📍 Gali Number 3,Sec‑ 104 Noida, India</p></a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom text-center text-white py-3">
        <small>Copyright © 2025 SG Sofa Center. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
