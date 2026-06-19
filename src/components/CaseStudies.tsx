import React from "react";
import { useNavigate } from "react-router-dom";
import { Users, Target, TrendingUp, ArrowRight } from "lucide-react";

import jmaveLogo from "../assets/jmave_logo_square.png";
import ihubLogo from "../assets/ihub_logo_square.png";
import jmaveHero from "../assets/jmave-hero.png";
import ihubHero from "../assets/ihub-hero.jpg";
import fitmdLogo from "../assets/fitmd_logo.jpg";

import "../styles/CaseStudyPage.css";

/* ─── HUB DATA ─────────────────────────────────────────── */

const caseHubItems = [
  {
    slug: "j-mave",
    client: "J-Mave Car Rental",
    industry: "Car Rental & Mobility Services",
    location: "Davao City",
    logo: jmaveLogo,
    heroImage: jmaveHero,
    tagline: "Building a Customer-Centered Mobility Brand",
    excerpt:
      'Transformed a traditional car rental business into a trusted mobility partner through strategic positioning, the "Go Further" brand platform, and a loyalty program that drives repeat business.',
    keyResults: [
      { label: "New Brand Platform", value: "Go Further" },
      { label: "Loyalty Program", value: "Launched" },
      { label: "Positioning", value: "Trusted Mobility Partner" },
    ],
    color: "#4b006e",
  },
  {
    slug: "ihub-davao",
    client: "iHub Coworking Space & Bistro",
    industry: "Coworking • Lifestyle • Community",
    location: "Davao City",
    logo: ihubLogo,
    heroImage: ihubHero,
    tagline: "From Coworking Space to Lifestyle & Community Hub",
    excerpt:
      "Elevated iHub from a functional workspace into a recognized community-driven lifestyle destination through brand repositioning, content systems, and community engagement frameworks.",
    keyResults: [
      { label: "Accounts Reached", value: "112,600+" },
      { label: "Content Views", value: "350,700+" },
      { label: "Visits", value: "24,000+" },
    ],
    color: "#7a1fb0",
  },
  {
    slug: "fitmd",
    client: "FitMD Medical Clinic",
    industry: "Healthcare / Physician-Led Wellness",
    location: "Davao City",
    logo: fitmdLogo,
    heroImage: fitmdLogo,
    tagline: "Building a Physician-Led Healthcare Brand Before Launch",
    excerpt:
      "Developed a complete pre-launch strategic foundation focused on trust, credibility, and patient-centered systems for a new metabolic wellness clinic.",
    keyResults: [
      { label: "Brand Position", value: "Defined" },
      { label: "Patient Framework", value: "Complete" },
      { label: "Launch Ready", value: "June 24, 2026" },
    ],
    color: "#0f766e", // Teal/medical tone
  },
];

/* ─── COMPONENT ────────────────────────────────────────── */

const CaseStudiesHub: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="case-hub-page">
        {/* HERO */}
        <section className="case-hub-hero">
          <div className="case-hub-hero-content">
            {/* <div className="case-meta">
            <span className="case-meta-label">FEATURED WORK</span>
          </div> */}
            <h1 className="case-hub-headline">Real Results. Real Brands.</h1>
            <p className="case-hub-subtitle">
              Two in-depth case studies from Axis Marketing Solutions —
              showcasing strategic brand transformation in Davao City.
            </p>
          </div>
        </section>

        {/* STUDIES GRID */}
        <section className="case-hub-grid">
          {caseHubItems.map((study) => (
            <div
              key={study.slug}
              className="case-hub-card"
              style={{ "--accent-color": study.color } as React.CSSProperties}
            >
              <div className="case-hub-visual">
                <img
                  src={study.heroImage}
                  alt={`${study.client} Hero`}
                  className="case-hub-hero-image"
                />
                <div className="case-hub-overlay" />
                <img
                  src={study.logo}
                  alt={study.client}
                  className="case-hub-logo"
                />
              </div>

              <div className="case-hub-content">
                <div className="case-hub-meta">
                  <span>{study.location}</span>
                  <span className="case-hub-divider">•</span>
                  <span>{study.industry}</span>
                </div>

                <h2 className="case-hub-client">{study.client}</h2>
                <p className="case-hub-tagline">{study.tagline}</p>
                <p className="case-hub-excerpt">{study.excerpt}</p>

                <div className="case-hub-results">
                  <p className="case-hub-results-label">Key Outcomes</p>
                  <div className="case-hub-results-grid">
                    {study.keyResults.map((result, i) => {
                      if (study.slug === "j-mave") {
                        return (
                          <div
                            key={i}
                            className="case-hub-result-item"
                            style={{
                              display: "flex",
                              flexDirection: "column", // stack value and label vertically
                              justifyContent: "flex-end", // push both to the bottom
                              height: "100px", // ensures space for bottom alignment
                            }}
                          >
                            <div
                              className="case-hub-result-value"
                              style={{ fontSize: "16px" }}
                            >
                              {result.value}
                            </div>
                            <div
                              className="case-hub-result-label"
                              style={{ fontSize: "12px" }}
                            >
                              {result.label}
                            </div>
                          </div>
                        );
                      }

                      if (study.slug === "ihub-davao") {
                        return (
                          <div key={i} className="case-hub-result-item">
                            <div className="case-hub-result-value">
                              {result.value}
                            </div>
                            <div className="case-hub-result-label">
                              {result.label}
                            </div>
                          </div>
                        );
                      }

                      if (study.slug === "fitmd") {
                        return (
                          <div
                            key={i}
                            className="case-hub-result-item"
                            style={{
                              display: "flex",
                              flexDirection: "column", // stack value and label vertically
                              justifyContent: "flex-end", // push both to the bottom
                              height: "100px", // ensures space for bottom alignment
                            }}
                          >
                            <div
                              className="case-hub-result-value"
                              style={{ fontSize: "16px" }}
                            >
                              {result.value}
                            </div>
                            <div
                              className="case-hub-result-label"
                              style={{ fontSize: "12px" }}
                            >
                              {result.label}
                            </div>
                          </div>
                        );
                      }

                      return null;
                    })}
                  </div>
                </div>

                <button
                  className="case-hub-cta"
                  onClick={() => navigate(`/case-studies/${study.slug}`)}
                >
                  Read Full Case Study
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </section>

        {/* COMMON THEMES */}
        <section className="case-hub-themes">
          <div className="section-header section-header--center">
            <span className="section-label">APPROACH</span>
            <h2 className="section-title">What These Projects Share</h2>
          </div>

          <div className="themes-grid">
            {[
              {
                icon: Target,
                title: "Deep Brand Strategy",
                desc: "Moved beyond tactics into positioning systems that create lasting differentiation.",
              },
              {
                icon: Users,
                title: "Customer-Centric Systems",
                desc: "Built retention and community mechanisms that turn one-time users into loyal advocates.",
              },
              {
                icon: TrendingUp,
                title: "Scalable Assets",
                desc: "Created brand platforms, content systems, and frameworks designed for long-term growth.",
              },
            ].map((theme, i) => (
              <div key={i} className="theme-card">
                <div className="theme-icon">
                  <theme.icon size={42} />
                </div>
                <h3>{theme.title}</h3>
                <p>{theme.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      {/* FINAL CTA */}
      <section className="case-cta">
        <div className="case-cta-content">
          <h2>Ready to build a brand that stands out?</h2>
          <p>
            Let's create strategic marketing systems that deliver measurable,
            sustainable growth.
          </p>
          <button className="cta-primary" onClick={() => navigate("/contact")}>
            Book Your Free Strategy Session
          </button>
        </div>
      </section>
    </>
  );
};

export default CaseStudiesHub;
