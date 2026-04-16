import React from "react";
import { AlertTriangle, TrendingDown, Target, Users } from "lucide-react";
import "../styles/ProblemSection.css";

const ProblemSection: React.FC = () => {
  return (
    <section className="problem-section">
      <div className="problem-container">
        {/* Section Header */}
        <div className="problem-header">
          <span className="problem-tagline">The Problem</span>
          <h2 className="problem-headline">
            When there's no clear direction,
            <br />
            <span className="text-accent">
              marketing becomes effort without results.
            </span>
          </h2>
        </div>

        {/* Problem Content */}
        <div className="problem-content">
          <div className="problem-statement">
            <p className="problem-intro">
              Without a strategic foundation, businesses find themselves trapped
              in a cycle of activity without progress.
            </p>

            <ul className="problem-list">
              <li className="problem-item">
                <span className="problem-bullet">
                  <TrendingDown size={24} />
                </span>
                <div className="problem-text">
                  <strong>
                    Results become inconsistent and unpredictable.
                  </strong>
                  <span>
                    One month shows promise, the next falls flat—leaving you
                    guessing what actually works.
                  </span>
                </div>
              </li>

              <li className="problem-item">
                <span className="problem-bullet">
                  <Users size={24} />
                </span>
                <div className="problem-text">
                  <strong>
                    Brand presence becomes scattered across platforms.
                  </strong>
                  <span>
                    Your message gets lost in the noise, failing to build
                    recognition or trust with your audience.
                  </span>
                </div>
              </li>

              <li className="problem-item">
                <span className="problem-bullet">
                  <Target size={24} />
                </span>
                <div className="problem-text">
                  <strong>
                    And businesses struggle to turn attention into paying
                    customers.
                  </strong>
                  <span>
                    Traffic and likes don't translate to revenue when there's no
                    clear path from interest to purchase.
                  </span>
                </div>
              </li>
            </ul>

            <div className="problem-cta">
              <AlertTriangle size={20} />
              <p>This is what happens when tactics replace strategy.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
