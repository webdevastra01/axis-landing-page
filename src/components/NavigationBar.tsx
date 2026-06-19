import React, { useState, useEffect } from "react";
import logo from "../assets/navbar_logo.png";
import "../styles/NavigationBar.css";
import ContactModal from "./ContactModal";
import { Menu, X } from "lucide-react";

const NavigationBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // Check if we are on the index page
    if (window.location.pathname !== "/") {
      // Redirect to index and include the sectionId in the URL
      window.location.href = `/#${sectionId}`;
      return;
    }

    // If already on index, just scroll
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    setIsMobileMenuOpen(false);
  };

  const openModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}>
        <div className="navbar__container">
          {/* Left - Logo */}
          <div className="navbar__logo">
            <a href="/" className="navbar__logo-link">
              <img
                src={logo}
                alt="Axis Marketing Logo"
                className="navbar__logo-img"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="navbar__right navbar__right--desktop">
            <ul className="navbar__links">
              <li className="navbar__item">
                <button
                  className="navbar__link"
                  onClick={() => scrollToSection("services")}
                >
                  Services
                </button>
              </li>
              <li className="navbar__item">
                <button
                  className="navbar__link"
                  onClick={() => scrollToSection("process")}
                >
                  Process
                </button>
              </li><li className="navbar__item">
                <button
                  className="navbar__link"
                  onClick={() => (window.location.href = "/works")}
                >
                  Works
                </button>
              </li>
              <li className="navbar__item">
                <button
                  className="navbar__link"
                  onClick={() => (window.location.href = "/case-studies")}
                >
                  Case Studies
                </button>
              </li>
              <li className="navbar__item">
                <button
                  className="navbar__link"
                  onClick={() => scrollToSection("about")}
                >
                  About
                </button>
              </li>
              <li className="navbar__item">
                <button
                  className="navbar__link"
                  onClick={() => scrollToSection("contact")}
                >
                  Contact
                </button>
              </li>
            </ul>

            <button className="navbar__cta" onClick={openModal}>
              Book Free Audit
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="navbar__mobile-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`navbar__mobile-overlay ${
          isMobileMenuOpen ? "navbar__mobile-overlay--open" : ""
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`navbar__mobile-menu ${
          isMobileMenuOpen ? "navbar__mobile-menu--open" : ""
        }`}
      >
        <div className="navbar__mobile-header">
          <span className="navbar__mobile-title">Menu</span>
          <button
            className="navbar__mobile-close"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <ul className="navbar__mobile-links">
          <li className="navbar__mobile-item">
            <button
              className="navbar__mobile-link"
              onClick={() => scrollToSection("services")}
            >
              Services
            </button>
          </li>
          <li className="navbar__mobile-item">
            <button
              className="navbar__mobile-link"
              onClick={() => scrollToSection("process")}
            >
              Process
            </button>
          </li>
          <li className="navbar__mobile-item">
            <button
              className="navbar__mobile-link"
              onClick={() => scrollToSection("about")}
            >
              About
            </button>
          </li>
          <li className="navbar__mobile-item">
            <button
              className="navbar__mobile-link"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </button>
          </li>
        </ul>

        <div className="navbar__mobile-footer">
          <button
            className="navbar__cta navbar__cta--mobile"
            onClick={openModal}
          >
            Book Free Marketing Audit
          </button>
        </div>
      </div>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Book a Free Marketing Audit now"
        description="Fill out the form below and we'll get back to you within 24 hours."
      />
    </>
  );
};

export default NavigationBar;
