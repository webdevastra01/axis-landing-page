import React, { useState } from "react";
import "../styles/FinalConversionSection.css";
import ContactModal from "./ContactModal";

const FinalConversionSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <section className="final-conversion-section">
      <div className="final-conversion-container">

        {/* Headline */}
        <h2 className="final-conversion-headline">
          Stop Blending In.
          <br />
          <span className="text-accent">Start Standing Out.</span>
        </h2>

        {/* Supporting Copy */}
        <div className="final-conversion-copy">
          <p>Your competitors are already capturing attention.</p>
          <p>Make sure your brand is the one customers remember.</p>
        </div>

        {/* CTA Button */}
        <button className="final-conversion-cta" onClick={openModal}>
          Book Free Marketing Audit
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

export default FinalConversionSection;
