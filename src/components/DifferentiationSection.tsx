import React from "react";
import "../styles/DifferentiationSection.css";

const differentiationCards = [
  {
    title: "Clarity Over Chaos",
    description: "No random posting.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
  {
    title: "Systems Over Guesswork",
    description: "Structured marketing workflows.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    title: "Strategy + Creativity",
    description: "Execution backed by strategy.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

const DifferentiationSection: React.FC = () => {
  return (
    <section className="differentiation-section">
      <div className="differentiation-container">
        {/* Tagline */}
        <span className="differentiation-tagline">
          Why choose Axis instead of other agencies?
        </span>

        {/* Headline */}
        <h2 className="differentiation-headline">
          Why Brands Choose <span className="text-accent">Axis</span>
        </h2>

        {/* Cards Grid */}
        <div className="differentiation-grid">
          {differentiationCards.map((card, index) => (
            <div key={index} className="differentiation-card">
              <div className="differentiation-card-icon">{card.icon}</div>
              <h3 className="differentiation-card-title">{card.title}</h3>
              <p className="differentiation-card-description">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentiationSection;
