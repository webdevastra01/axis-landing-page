import React from "react";
import "../styles/HeroSection.css";
import jmaveLogo from "../assets/jmave_logo.png";
import avarisLogo from "../assets/avaris_logo.png";
import ihubLogo from "../assets/ihub_logo.png";

// Logo components - replace these with your actual logo imports
const JMaveLogo: React.FC = () => (
  <a href="https://facebook.com/JMaveCars" target="_blank">
    <img src={jmaveLogo} alt="J-MaVe Cars" className="hero__trust-logo-img" />
  </a>
);

const AvarisLogo: React.FC = () => (
  <a href="https://facebook.com/profile.php?id=61576153880445" target="_blank">
    <img
      src={avarisLogo}
      alt="Avaris Sales Solutions"
      className="hero__trust-logo-img"
    />
  </a>
);

const IhubLogo: React.FC = () => (
  <a href="https://facebook.com/ihubdvo" target="_blank">
    <img
      src={ihubLogo}
      alt="I-Hub Davao - CoWorking Space and Bistro"
      className="hero__trust-logo-img"
    />
  </a>
);

const HeroSection: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero">
      {/* Background accent circle */}
      <div className="hero__accent-circle" />

      <div className="hero__container">
        {/* Left Side - Text Content */}
        <div className="hero__content">
          {/* Tagline Badge */}
          <span className="hero__tagline">
            Strategic Marketing That Converts
          </span>

          {/* Headline */}
          <h1 className="hero__headline">
            Turn Your Vision Into{" "}
            <span className="hero__headline-accent">Visuals</span> That Grow
            Your Business
          </h1>

          {/* Subheadline */}
          <p className="hero__subheadline">
            Axis Marketing Solutions helps businesses stand out with strategic
            branding, creative design, and marketing systems that turn attention
            into real customers.
          </p>

          <p className="hero__subheadline-secondary">
            Because likes don't pay the bills. Results do.
          </p>

          {/* CTA Buttons */}
          <div className="hero__cta-group">
            <button
              className="hero__cta-primary"
              onClick={() => scrollToSection("contact")}
            >
              Book Your Free 1-Hour Marketing Audit
            </button>
            <button
              className="hero__cta-secondary"
              onClick={() => scrollToSection("process")}
            >
              See How We Help Brands Grow
            </button>
          </div>

          {/* Quick Value Points */}
          <div className="hero__value-points">
            <div className="hero__value-point">
              <span className="hero__check">✔</span>
              <span>Strategic Social Media Management</span>
            </div>
            <div className="hero__value-point">
              <span className="hero__check">✔</span>
              <span>Paid Ads That Convert</span>
            </div>
            <div className="hero__value-point">
              <span className="hero__check">✔</span>
              <span>Branding That People Remember</span>
            </div>
            <div className="hero__value-point">
              <span className="hero__check">✔</span>
              <span>Content That Turns Followers Into Customers</span>
            </div>
          </div>
        </div>

        {/* Right Side - Visual */}
        <div className="hero__visual">
          <div className="hero__dashboard">
            {/* Dashboard Header */}
            <div className="hero__dashboard-header">
              <div className="hero__dashboard-dots">
                <span className="hero__dot hero__dot--red" />
                <span className="hero__dot hero__dot--yellow" />
                <span className="hero__dot hero__dot--green" />
              </div>
              <span className="hero__dashboard-title">Marketing Analytics</span>
            </div>

            {/* Dashboard Content */}
            <div className="hero__dashboard-content">
              {/* Stats Cards */}
              <div className="hero__stats-grid">
                <div className="hero__stat-card">
                  <span className="hero__stat-label">Conversions</span>
                  <span className="hero__stat-value">+147%</span>
                  <span className="hero__stat-trend hero__stat-trend--up">
                    ↑ 12% this month
                  </span>
                </div>
                <div className="hero__stat-card">
                  <span className="hero__stat-label">Lead Quality</span>
                  <span className="hero__stat-value">92%</span>
                  <span className="hero__stat-trend hero__stat-trend--up">
                    ↑ 8% this month
                  </span>
                </div>
                <div className="hero__stat-card hero__stat-card--highlight">
                  <span className="hero__stat-label">ROI</span>
                  <span className="hero__stat-value hero__stat-value--highlight">
                    4.5x
                  </span>
                  <span className="hero__stat-trend hero__stat-trend--up">
                    ↑ 23% this month
                  </span>
                </div>
                <div className="hero__stat-card">
                  <span className="hero__stat-label">Engagement</span>
                  <span className="hero__stat-value">+89%</span>
                  <span className="hero__stat-trend hero__stat-trend--up">
                    ↑ 15% this month
                  </span>
                </div>
              </div>

              {/* Chart Placeholder */}
              <div className="hero__chart">
                <div className="hero__chart-bars">
                  <div className="hero__chart-bar" style={{ height: "40%" }} />
                  <div className="hero__chart-bar" style={{ height: "65%" }} />
                  <div className="hero__chart-bar" style={{ height: "50%" }} />
                  <div className="hero__chart-bar" style={{ height: "85%" }} />
                  <div
                    className="hero__chart-bar hero__chart-bar--highlight"
                    style={{ height: "100%" }}
                  />
                  <div className="hero__chart-bar" style={{ height: "75%" }} />
                  <div className="hero__chart-bar" style={{ height: "90%" }} />
                </div>
                <div className="hero__chart-label">Growth Trajectory</div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="hero__floating-badge hero__floating-badge--1">
            <span className="hero__floating-icon">🚀</span>
            <span>Campaign Live</span>
          </div>
          <div className="hero__floating-badge hero__floating-badge--2">
            <span className="hero__floating-icon">📈</span>
            <span>+234% Traffic</span>
          </div>
        </div>
      </div>

      {/* Trust Indicators - Updated with Logos */}
      <div className="hero__trust">
        <p className="hero__trust-label">Trusted by growing brands</p>
        <div className="hero__trust-logos">
          <div className="hero__trust-item">
            <JMaveLogo />
            <span className="hero__trust-name">J-MaVe Cars</span>
            <span className="hero__trust-tagline">Car Rental Davao</span>
          </div>

          <span className="hero__trust-divider" />

          <div className="hero__trust-item">
            <AvarisLogo />
            <span className="hero__trust-name">Avaris</span>
            <span className="hero__trust-tagline">Sales Solutions</span>
          </div>

          <span className="hero__trust-divider" />

          <div className="hero__trust-item">
            <IhubLogo />
            <span className="hero__trust-name">I-Hub Davao</span>
            <span className="hero__trust-tagline">
              CoWorking Space and Bistro
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
