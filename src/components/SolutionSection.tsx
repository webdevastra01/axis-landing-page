import React from "react";
import "../styles/SolutionSection.css";

const promises = [
  "Increase visibility",
  "Attract qualified leads",
  "Build strong brand identities",
  "Turn content into revenue",
];

const SolutionSection: React.FC = () => {
  return (
    <section className="solution-section">
      <div className="solution-container">
        {/* Left: Text Content */}
        <div className="solution-content">
          <span className="solution-tagline">The Solution</span>
          <h2 className="solution-headline">
            Marketing Systems That Turn{" "}
            <span className="text-accent">Attention Into Revenue</span>
          </h2>

          <div className="solution-promise">
            <p className="solution-intro">
              <strong>Axis Marketing Solutions</strong> helps businesses:
            </p>
            <ul className="solution-list">
              {promises.map((promise, index) => (
                <li key={index} className="solution-item">
                  <span className="solution-check">✔</span>
                  <span className="solution-text">{promise}</span>
                </li>
              ))}
            </ul>
          </div>

          <button className="btn btn-primary solution-cta">Get Started</button>
        </div>

        {/* Right: Visual */}
        <div className="solution-visual">
          <div className="solution-visual-card">
            <div className="solution-visual-accent"></div>
            <div className="solution-visual-content">
              <div className="solution-metric">
                <span className="solution-metric-value">3x</span>
                <span className="solution-metric-label">More Leads</span>
              </div>
              <div className="solution-metric">
                <span className="solution-metric-value">+150%</span>
                <span className="solution-metric-label">Engagement</span>
              </div>
              <div className="solution-metric">
                <span className="solution-metric-value">2.5x</span>
                <span className="solution-metric-label">ROI Increase</span>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="solution-glow"></div>
          <div className="solution-accent-circle"></div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
