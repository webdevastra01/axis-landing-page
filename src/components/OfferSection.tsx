import React, { useState } from "react";
import "../styles/OfferSection.css";
import ContactModal from "./ContactModal";

const offerBenefits = [
  "Brand audit",
  "Content strategy review",
  "Growth opportunities",
];

const OfferSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <section className="offer-section">
      <div className="offer-container">
        {/* Headline */}
        <h2 className="offer-headline">
          Get a Free <span className="text-accent">1-Hour Marketing Audit</span>
        </h2>

        {/* Benefits List */}
        <div className="offer-content">
          <p className="offer-subhead">What you get:</p>
          <ul className="offer-list">
            {offerBenefits.map((benefit, index) => (
              <li key={index} className="offer-item">
                <span className="offer-check">✔</span>
                <span className="offer-text">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <button className="offer-cta" onClick={openModal}>
          Book Free Audit
        </button>
      </div>
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Book a Free Marketing Audit now"
        description="Fill out the form below and we'll get back to you within 24 hours."
      />
    </section>
  );
};

export default OfferSection;
