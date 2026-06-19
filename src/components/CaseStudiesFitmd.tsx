import React, { useEffect, useState } from "react";
import {
  ArrowLeft,
  Users,
  Target,
  TrendingUp,
  ArrowRight,
  Stethoscope,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// Placeholder imports - replace with actual assets
import fitmdLogo from "../assets/fitmd_logo.jpg";

import "../styles/CaseStudyPage.css";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

/* ─── DATA ─────────────────────────────────────────────── */

const caseStudies = {
  fitmd: {
    slug: "fitmd",
    client: "FitMD Medical Clinic",
    industry: "Healthcare / Physician-Led Metabolic Wellness",
    location: "Davao City",
    executedBy: "Axis Marketing Solutions",
    logo: fitmdLogo,
    tagline: "Building a Physician-Led Healthcare Brand Before Launch",
    heroImage: fitmdLogo,

    executiveSummary: `FitMD Medical Clinic is a new physician-led metabolic wellness clinic preparing for market entry. 

Axis Marketing Solutions was engaged in the pre-launch phase to build a strong strategic foundation focused on trust, credibility, and patient-centered positioning — before the clinic even opened its doors.

Rather than rushing into promotional campaigns, the partnership focused on developing a complete marketing system: clear brand positioning, patient psychology frameworks, structured patient journey design, and educational content architecture.

This pre-launch preparation ensures FitMD enters the market with professional clarity, medical credibility, and systems ready for sustainable growth.`,

    challengeIntro: `The challenge was bigger than launching a clinic.`,

    challengePoints: [
      "Building patient trust before the first interaction",
      "Differentiating in a crowded wellness market full of generic claims",
      "Creating credibility as a new physician-led practice",
      "Navigating complex patient decision psychology in healthcare",
      "Establishing structured communication before visibility",
    ],

    challengeClosing: `Patients needed to feel confident choosing FitMD even before walking through the door.`,

    strategicObjectiveIntro: `Axis Marketing Solutions focused on building a complete pre-launch marketing system:`,

    strategicObjectives: [
      "Establish physician-led metabolic wellness positioning",
      "Develop patient trust and credibility frameworks",
      "Design structured patient journey pathways",
      "Create educational content & communication architecture",
      "Prepare marketing infrastructure for launch",
    ],

    strategicObjectiveClosing: `Build the foundation first. Create trust before conversion.`,

    approach: [
      {
        number: "1",
        title: "Brand Positioning Strategy",
        intro:
          "Developed a clear differentiation framework in a saturated wellness market.",
        before: "Generic wellness provider",
        after: "Physician-led metabolic wellness system",
        benefits: [
          "Structured & supervised programs",
          "Medical expertise and credibility",
          "Progressive health improvement focus",
          "Patient-centered methodology",
        ],
        conclusion:
          "Positioned FitMD as a trusted medical partner rather than another wellness trend.",
      },
      {
        number: "2",
        title: "Patient Psychology Framework",
        intro:
          "Built communication around real patient challenges and decision factors.",
        highlight:
          "Frustration Cycle → Accountability Gap → Desire for Control",
        description:
          "Addressed key psychological barriers: repeated failed attempts, information confusion, and lack of structured guidance.",
        conclusion:
          "Created messaging that resonates deeply with the target audience’s lived experiences.",
      },
      {
        number: "3",
        title: "Patient Journey & Content Architecture",
        intro:
          "Designed a four-stage journey and content system to guide potential patients from awareness to consultation.",
        benefits: [
          "Education Authority",
          "System Positioning",
          "Trust Building",
          "Soft Conversion",
        ],
        conclusion:
          "Every piece of content supports patient decision-making rather than hard selling.",
      },
      {
        number: "4",
        title: "Founder Access Program & Infrastructure",
        intro:
          "Structured early engagement systems and full marketing infrastructure preparation.",
        description:
          "Including messaging guidelines, social media launch framework, paid advertising structure, and performance monitoring systems.",
        conclusion:
          "Ensured the clinic would launch with professional systems already in place.",
      },
    ],

    executionScope: [
      "Pre-Launch Brand Strategy",
      "Physician-Led Positioning",
      "Patient Psychology Framework",
      "Patient Journey Design",
      "Content Strategy & Pillars",
      "Founder Access Program Structure",
      "Marketing Infrastructure Setup",
      "Messaging Architecture",
      "Trust-Building Systems",
      "Launch Readiness Preparation",
    ],

    transformation: {
      before: `A new clinic with strong medical expertise but no established market position or patient trust systems.`,
      after: `A professionally positioned, physician-led metabolic wellness brand with:
• Clear differentiation
• Structured patient journey
• Educational content system
• Trust-building framework
• Ready-to-execute marketing infrastructure`,
    },

    keyTakeaway: `In healthcare, trust must be built before conversion. FitMD now enters the market with a complete strategic foundation rather than just promotional assets.`,

    results: [
      {
        metric: "Brand Position",
        value: "Defined",
        sub: "Physician-Led",
        icon: Stethoscope,
      },
      {
        metric: "Patient Framework",
        value: "Complete",
        sub: "Psychology + Journey",
        icon: Users,
      },
      {
        metric: "Marketing System",
        value: "Ready",
        sub: "Pre-Launch",
        icon: Target,
      },
      {
        metric: "Launch Readiness",
        value: "June 24, 2026",
        sub: "Campaign Begins",
        icon: TrendingUp,
      },
    ],

    chartData: [
      { name: "Positioning", value: 95 },
      { name: "Trust Systems", value: 90 },
      { name: "Journey Design", value: 88 },
      { name: "Infrastructure", value: 92 },
    ],

    testimonial: {
      quote:
        "Axis helped us build a credible, professional brand foundation before we even opened. We’re launching with clarity and confidence.",
      name: "FitMD Medical Clinic",
      role: "Founder & Medical Team",
    },
  },
};

/* ─── COMPONENT ────────────────────────────────────────── */

const CaseStudyPageFitmd: React.FC = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const study = caseStudies["fitmd"];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!study) {
    return (
      <div className="case-study-page">
        <div className="not-found">Case study not found</div>
      </div>
    );
  }

  const renderBodyText = (text: string) =>
    text.split("\n\n").map((paragraph, idx) => (
      <p key={idx} className="case-paragraph">
        {paragraph}
      </p>
    ));

  return (
    <>
      <div className="case-study-page">
        {/* NAV */}
        {/* <nav className="case-nav">
        <button className="back-button" onClick={() => navigate("/works")}>
          <ArrowLeft size={18} /> Back to All Work
        </button>
      </nav> */}

        {/* HERO */}
        <section className="case-hero">
          <div className="case-hero-content">
            <div className="case-meta">
              <span className="case-meta-label">CASE STUDY</span>
              <span className="case-meta-divider" />
              <span className="case-meta-value">{study.location}</span>
            </div>
            <img src={study.logo} alt={study.client} className="case-logo" />
            <h1 className="case-headline">{study.tagline}</h1>
            <p className="case-industry">{study.industry}</p>
            <p className="case-executed">
              Client: <strong>{study.client}</strong>
              <br />
              Executed by <strong>{study.executedBy}</strong>
            </p>
          </div>
          <div className="case-hero-visual">
            <img
              src={study.heroImage}
              alt={`${study.client} Case Study`}
              className="case-hero-image"
            />
          </div>
        </section>

        {/* EXECUTIVE SUMMARY */}
        <section className="case-section case-section--highlight">
          <div className="section-header">
            <span className="section-label">Executive Summary</span>
          </div>
          <div className="case-body">
            {renderBodyText(study.executiveSummary)}
          </div>
        </section>

        {/* THE CHALLENGE */}
        <section className="case-section">
          <div className="section-header">
            <span className="section-label">01 — The Challenge</span>
            <h2 className="section-title">The Challenge</h2>
          </div>
          <div className="case-body">
            <p className="case-paragraph case-paragraph--lead">
              {study.challengeIntro}
            </p>
            <div className="challenge-cards">
              {study.challengePoints.map((point, i) => (
                <div key={i} className="challenge-card">
                  <span className="challenge-card-num">0{i + 1}</span>
                  <p>{point}</p>
                </div>
              ))}
            </div>
            <p className="case-paragraph case-paragraph--closing">
              {study.challengeClosing}
            </p>
          </div>
        </section>

        {/* STRATEGIC OBJECTIVES */}
        <section className="case-section bg-light">
          <div className="section-header">
            <span className="section-label">02 — Strategic Objectives</span>
            <h2 className="section-title">Strategic Objectives</h2>
          </div>
          <div className="case-body">
            <p className="case-paragraph case-paragraph--lead">
              {study.strategicObjectiveIntro}
            </p>

            <div className="objective-grid">
              {study.strategicObjectives.map((obj, i) => (
                <div key={i} className="objective-item">
                  <div className="objective-icon">
                    <ArrowRight size={18} />
                  </div>
                  <div className="objective-content">
                    <p>{obj}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="case-paragraph case-paragraph--closing">
              {study.strategicObjectiveClosing}
            </p>
          </div>
        </section>

        {/* STRATEGIC APPROACH */}
        <section className="case-section">
          <div className="section-header">
            <span className="section-label">03 — Strategic Approach</span>
            <h2 className="section-title">Strategic Approach</h2>
          </div>
          <div className="approach-steps">
            {study.approach.map((step, i) => (
              <div
                key={i}
                className={`approach-step ${activeStep === i ? "is-active" : ""}`}
                onMouseEnter={() => setActiveStep(i)}
                onMouseLeave={() => setActiveStep(null)}
              >
                <div className="approach-step-header">
                  <span className="approach-step-num">{step.number}</span>
                  <h3 className="approach-step-title">{step.title}</h3>
                </div>

                <div className="approach-step-body">
                  {step.intro && <p className="case-paragraph">{step.intro}</p>}

                  {(step.before || step.after) && (
                    <div className="position-shift">
                      {step.before && (
                        <div className="position-before">
                          <strong>Before:</strong> {step.before}
                        </div>
                      )}
                      {step.after && (
                        <div className="position-after">
                          <strong>After:</strong> {step.after}
                        </div>
                      )}
                    </div>
                  )}

                  {step.highlight && (
                    <div className="brand-highlight">{step.highlight}</div>
                  )}
                  {step.description && (
                    <p className="case-paragraph">{step.description}</p>
                  )}

                  {step.benefits && (
                    <div className="approach-list">
                      <strong>Key Elements:</strong>
                      <ul className="case-list">
                        {step.benefits.map((item, idx) => (
                          <li key={idx}>
                            <span className="case-list-bullet" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {step.conclusion && (
                    <p className="case-paragraph">{step.conclusion}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* MARKETING INFRASTRUCTURE */}
        <section className="case-section bg-light">
          <div className="section-header">
            <span className="section-label">04 — Marketing Infrastructure</span>
            <h2 className="section-title">Marketing Infrastructure</h2>
          </div>
          <div className="services-grid">
            {study.executionScope.map((service, i) => (
              <div key={i} className="service-item">
                <span className="service-check">✓</span>
                <span>{service}</span>
              </div>
            ))}
          </div>
        </section>

        {/* BUSINESS TRANSFORMATION */}
        <section className="case-section">
          <div className="section-header">
            <span className="section-label">
              05 — Pre-Launch Transformation
            </span>
            <h2 className="section-title">Pre-Launch Transformation</h2>
          </div>
          <div className="transformation-grid">
            <div className="transformation-card transformation-card--before">
              <span className="transformation-badge transformation-badge--before">
                Before
              </span>
              <p>{study.transformation.before}</p>
            </div>
            <div className="transformation-arrow">
              <ArrowRight size={32} />
            </div>
            <div className="transformation-card transformation-card--after">
              <span className="transformation-badge transformation-badge--after">
                After
              </span>
              <p>{study.transformation.after}</p>
            </div>
          </div>
        </section>

        {/* PROJECT SNAPSHOT */}
        <section className="results-section">
          <div className="section-header section-header--center">
            <span className="section-label">PROJECT SNAPSHOT</span>
            <h2 className="section-title">Pre-Launch Results</h2>
          </div>
          <div className="results-grid">
            {study.results.map((result, index) => (
              <div key={index} className="result-block">
                <div className="result-icon">
                  <result.icon size={28} />
                </div>
                <div className="result-value">{result.value}</div>
                <div className="result-metric">{result.metric}</div>
                <div className="result-sub">{result.sub}</div>
              </div>
            ))}
          </div>

          <div className="results-chart-container">
            <h3 className="chart-title">Strategic Foundation Strength</h3>
            <ResponsiveContainer width="100%" height={340}>
              <BarChart data={study.chartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" tickLine={false} axisLine={false} />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(v) => `${v}%`}
                />
                <Tooltip />
                <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                  {study.chartData.map((_, i) => (
                    <Cell key={i} fill={i === 0 ? "#4b006e" : "#7a1fb0"} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>
      </div>
      {/* TESTIMONIAL */}
      <section className="testimonial-section">
        <div className="testimonial-content">
          <div className="testimonial-quote-mark">"</div>
          <p className="testimonial-quote">{study.testimonial.quote}</p>
          <div className="testimonial-author">
            <p className="testimonial-name">{study.testimonial.name}</p>
            <p className="testimonial-role">{study.testimonial.role}</p>
          </div>
        </div>
      </section>

      {/* BRAND SIGNATURE */}
      <section className="brand-signature">
        <div className="brand-signature-content">
          <h2 className="brand-signature-name">Axis Marketing Solutions</h2>
          <p className="brand-signature-tagline">
            Building trustworthy healthcare brands through strategy and systems.
          </p>
          <p className="brand-signature-pillars">
            Strategy. Credibility. Education. Trust.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="case-cta">
        <div className="case-cta-content">
          <h2>Launching a healthcare brand?</h2>
          <p>
            Let’s build a strong strategic foundation before you go to market.
          </p>
          <button className="cta-primary">
            Book Your Free Strategy Session
          </button>
        </div>
      </section>
    </>
  );
};

export default CaseStudyPageFitmd;
