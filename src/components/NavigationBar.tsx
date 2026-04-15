import React, { useState, useEffect } from "react";
import logo from "../assets/navbar_logo.png";
import "../styles/NavigationBar.css";
import ContactModal from "./ContactModal";

const NavigationBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const openModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
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

        {/* Right - Navigation Links + CTA */}
        <div className="navbar__right">
          <ul className="navbar__links">
            <li className="navbar__item">
              <button
                className="navbar__link"
                onClick={() => scrollToSection("services")}
              >
                Services
              </button>
            </li>
            {/* <li className="navbar__item">
              <button
                className="navbar__link"
                onClick={() => scrollToSection("case-studies")}
              >
                Case Studies
              </button>
            </li> */}
            <li className="navbar__item">
              <button
                className="navbar__link"
                onClick={() => scrollToSection("process")}
              >
                Process
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
    </nav>
  );
};

export default NavigationBar;
