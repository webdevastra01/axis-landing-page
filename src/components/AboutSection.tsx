import React from "react";
import "../styles/AboutSection.css";

const beliefs = ["Clearer", "Stronger", "More visible", "More profitable"];

const AboutSection: React.FC = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Left: Visual Element */}
        <div className="about-visual">
          <div className="about-visual-card">
            <div className="about-accent-bar"></div>
            <div className="about-quote-mark">"</div>
            <p className="about-quote">Every brand has potential.</p>
            <div className="about-signature">
              <span className="about-signature-line"></span>
              <span className="about-signature-text">Our Core Belief</span>
            </div>
          </div>
          <div className="about-glow"></div>
          <div className="about-accent-circle"></div>
        </div>

        {/* Right: Content */}
        <div className="about-content">
          <span className="about-tagline">Who We Are</span>
          <h2 className="about-headline">
            About <span className="text-accent">Axis Marketing Solutions</span>
          </h2>

          <div className="about-body">
            <p className="about-lead">
              Axis was built on a simple belief:{" "}
              <strong>Every brand has potential.</strong>
            </p>

            <p className="about-text">
              Our mission is to unlock that potential through strategic
              marketing, creative design, and powerful storytelling.
            </p>

            <p className="about-text about-highlight">
              We're not here to create noise.
            </p>

            <p className="about-text">We're here to help businesses become:</p>

            <ul className="about-beliefs">
              {beliefs.map((belief, index) => (
                <li key={index} className="about-belief-item">
                  <span className="about-belief-check">✔</span>
                  <span className="about-belief-text">{belief}</span>
                </li>
              ))}
            </ul>

            <p className="about-closing">
              Because when <span className="text-accent">strategy</span> meets{" "}
              <span className="text-accent">creativity</span>, marketing becomes{" "}
              <strong>unstoppable</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
