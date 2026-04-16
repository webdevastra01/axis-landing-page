import React from "react";
import "../styles/SalesCTA.css";
import { SquareArrowOutUpRight } from "lucide-react";

const SalesCTA: React.FC = () => {
  return (
    <section id="sales-cta" className="sales-cta-section">
      <div className="sales-cta-container">
        <div className="sales-cta-content">
          <h2 className="sales-cta-headline">
            Got leads but struggling to convert them into sales?
          </h2>
          <p className="sales-cta-description">
            We also help businesses build systems that close deals, not just
            generate leads.
          </p>
          <a
            href="https://avarissalessolutions.vercel.app/"
            className="sales-cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Check out Avaris Sales Solutions</span>
            <span className="sales-cta-arrow"><SquareArrowOutUpRight size={16} /></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SalesCTA;
