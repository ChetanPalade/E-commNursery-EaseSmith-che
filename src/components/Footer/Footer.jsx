import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Subscribe to our Newsletter</h3>
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
      <div className="footer-links">
        <div className="column">
          <h4>About Us</h4>
          <ul>
            <li>Our Story</li>
            <li>Contact Us</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="column">
          <h4>Our Services</h4>
          <ul>
            <li>Rent Plants</li>
            <li>Plant Day Care</li>
          </ul>
        </div>
        <div className="column">
          <h4>Useful Links</h4>
          <ul>
            <li>My Account</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
