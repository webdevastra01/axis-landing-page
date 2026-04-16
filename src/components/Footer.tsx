import React from "react";
import { Mail, Phone } from "lucide-react";
import "../styles/Footer.css";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Brand Column */}
          <div className="footer-brand">
            <h3 className="footer-brand-name">Axis Marketing Solutions</h3>
            <p className="footer-tagline">
              Let’s turn your vision into visuals.
            </p>
            <p className="footer-description">
              Helping brands stand out through strategic marketing, creative
              content, and data-driven growth systems.
            </p>
            <div className="footer-social">
              <a
                href="https://web.facebook.com/yourmsaxis"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Visit our Facebook page"
              >
                <svg
                  className="footer-social-icon"
                  fill="currentColor"
                  viewBox="-337 273 123.5 256"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M-260.9,327.8c0-10.3,9.2-14,19.5-14c10.3,0,21.3,3.2,21.3,3.2l6.6-39.2c0,0-14-4.8-47.4-4.8c-20.5,0-32.4,7.8-41.1,19.3c-8.2,10.9-8.5,28.4-8.5,39.7v25.7H-337V396h26.5v133h49.6V396h39.3l2.9-38.3h-42.2V327.8z" />
                </svg>
              </a>
              <span className="footer-social-label">Facebook</span>
            </div>
          </div>

          {/* Contact Column */}
          <div className="footer-contact">
            <h4 className="footer-contact-title">Get in Touch</h4>

            <a
              href="mailto:youraxisms@gmail.com"
              className="footer-contact-item"
            >
              <Mail size={18} strokeWidth={2} />
              <span>youraxisms@gmail.com</span>
            </a>

            <a href="tel:+639309320571" className="footer-contact-item">
              <Phone size={18} strokeWidth={2} />
              <span>+63 930 932 0571</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Axis Marketing Solutions. All rights reserved.
          </p>
          <p className="footer-location">Davao City, Philippines</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
