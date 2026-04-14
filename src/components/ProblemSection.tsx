import React from "react";
import "../styles/ProblemSection.css";

const problems = [
  {
    icon: "📉",
    title: "Low Engagement",
    description: "Your content gets posted, but people don't interact.",
  },
  {
    icon: "📊",
    title: "No Clear Strategy",
    description: "Random posts without a clear direction.",
  },
  {
    icon: "🎯",
    title: "Followers But No Sales",
    description: "Attention doesn't convert into customers.",
  },
];

const ProblemSection: React.FC = () => {
  return (
    <section className="problem-section">
      <div className="problem-container">
        {/* Section Header */}
        <div className="problem-header">
          <span className="problem-tagline">The Problem</span>
          <h2 className="problem-headline">
            Your Marketing Looks Busy…
            <br />
            <span className="text-accent">
              But It's Not Growing Your Business
            </span>
          </h2>
        </div>

        {/* Problem Cards Grid */}
        <div className="problem-grid">
          {problems.map((problem, index) => (
            <div key={index} className="problem-card">
              <div className="problem-card-icon">{problem.icon}</div>
              <h3 className="problem-card-title">{problem.title}</h3>
              <p className="problem-card-description">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
