import React, { useEffect, useState, type JSX } from "react";
import {
  ArrowLeft,
  Users,
  Eye,
  Target,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// Placeholder imports - replace with actual assets when available
import jmaveLogo from "../assets/jmave_logo.png";
import jmaveHero from "../assets/jmave-hero.png";

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
  "j-mave": {
    slug: "j-mave",
    client: "J-Mave Car Rental",
    industry: "Car Rental & Mobility Services",
    location: "Davao City",
    executedBy: "Axis Marketing Solutions",
    logo: jmaveLogo,
    tagline:
      "Building a Customer-Centered Mobility Brand Through Strategic Positioning and Retention Systems",
    heroImage: jmaveHero,

    executiveSummary: `J-Mave Car Rental operates in a highly competitive market where many businesses offer similar vehicles, similar pricing structures, and similar service promises.
As competition increased, differentiation became increasingly difficult. Most providers competed primarily on availability and price, creating a marketplace where customers often viewed car rental services as interchangeable.
Axis Marketing Solutions partnered with J-Mave Car Rental to strengthen its market position, improve brand distinction, and build systems capable of supporting long-term customer loyalty.
Through a strategic brand transformation initiative, Axis developed a structured positioning framework, introduced a proprietary brand platform, launched a customer loyalty program, and established a scalable marketing foundation designed to support sustainable business growth.
The result was a stronger brand identity, clearer market differentiation, and the creation of long-term business assets that extend beyond individual marketing campaigns.`,

    clientRelationship: `J-Mave Car Rental has been a long-term client relationship that evolved alongside the growth of Axis Marketing Solutions.
As Axis expanded from an individual-led marketing function into a structured agency model, the engagement evolved into a comprehensive brand and growth partnership focused on positioning, customer retention, and long-term business development.
This continuity allowed for a deeper understanding of the business, customer behavior, and market dynamics, creating opportunities for strategic improvements beyond traditional marketing execution.`,

    challengeIntro: `The challenge was not operational. The challenge was strategic.`,

    challengePoints: [
      "Most car rental businesses communicated nearly identical messages: Affordable rates, Wide vehicle selection, Flexible rental terms, Reliable service",
      "Customer decisions became increasingly price-driven",
      "Brand loyalty remained largely informal",
      "Repeat business lacked a structured retention system",
      "Marketing efforts focused more on promotion than positioning",
    ],

    challengeClosing: `The business needed a stronger market identity that customers could remember, trust, and return to.`,

    strategicObjectiveIntro: `The engagement focused on five primary objectives:`,

    strategicObjectives: [
      {
        title: "Create Market Differentiation",
        body: "Develop a position that competitors could not easily replicate.",
      },
      {
        title: "Improve Brand Recall",
        body: "Establish a memorable and scalable brand identity.",
      },
      {
        title: "Strengthen Customer Retention",
        body: "Create systems that encourage repeat engagement.",
      },
      {
        title: "Improve Marketing Consistency",
        body: "Develop a unified communication framework.",
      },
      {
        title: "Build Long-Term Brand Equity",
        body: "Create strategic assets that continue generating value over time.",
      },
    ],

    strategicObjectiveClosing: `The goal was to build a customer-centered mobility brand.`,

    approach: [
      {
        number: "1",
        title: "Brand Repositioning",
        intro:
          "The first initiative involved redefining how J-Mave Car Rental presented itself to the market.",
        before: "Vehicle Rental Provider",
        after: "Trusted Mobility Partner",
        benefits: [
          "Convenience",
          "Reliability",
          "Customer support",
          "Travel confidence",
          "Mobility solutions",
        ],
        conclusion:
          "Rather than simply offering vehicle access, J-Mave began promoting seamless mobility experiences.",
      },
      {
        number: "2",
        title: 'Development of the "Go Further" Brand Platform',
        intro: `To support the new positioning, Axis Marketing Solutions developed the company's central brand platform:`,
        highlight: "GO FURTHER",
        description:
          "More than a tagline, Go Further became a strategic communication platform designed to guide marketing, campaigns, customer messaging, and future brand development.",
        represents: [
          "Progress",
          "Freedom",
          "Exploration",
          "Opportunity",
          "Reliability",
        ],
        strategicValue: [
          "A unified messaging framework",
          "Improved brand consistency",
          "Stronger emotional connection",
          "Increased campaign flexibility",
          "Greater brand recall",
        ],
        conclusion:
          "The business shifted from promoting rentals to promoting possibilities.",
      },
      {
        number: "3",
        title: "Launch of the J-Mave Loyalty Card Program",
        intro:
          "Recognizing that sustainable growth requires more than customer acquisition, Axis Marketing Solutions introduced a structured customer retention initiative.",
        programName: "J-Mave Loyalty Card Program",
        description:
          "The program was designed to reward returning customers while encouraging long-term engagement with the brand.",
        objectives: [
          "Increase repeat bookings",
          "Strengthen customer loyalty",
          "Improve customer lifetime value",
          "Reward returning customers",
          "Enhance customer experience",
        ],
        benefits: [
          "Member-exclusive promotions",
          "Priority booking opportunities",
          "Loyalty rewards",
          "Special offers",
          "Future upgrade incentives",
        ],
        conclusion:
          "Most importantly, the program transformed customer relationships from one-time transactions into ongoing brand relationships.",
      },
    ],

    executionScope: [
      "Brand Positioning",
      "Marketing Strategy",
      "Customer Retention Strategy",
      "Brand Development",
      "Content Strategy",
      "Campaign Planning",
      "Loyalty Program Development",
      "Developed the Go Further brand platform",
      "Designed and launched the Loyalty Card Program",
      "Established strategic content pillars",
      "Standardized brand messaging",
      "Created customer retention initiatives",
      "Structured trust-focused communication campaigns",
      "Developed value-based promotional strategies",
      "Improved brand consistency across digital channels",
      "Built scalable marketing assets for future growth",
    ],

    transformation: {
      before: `J-Mave Car Rental was positioned as a traditional Vehicle Rental Provider with generic messaging focused primarily on price and availability.`,
      after: `J-Mave Car Rental is now positioned as a Trusted Mobility Partner with the "Go Further" brand platform and a structured J-Mave Loyalty Card Program.

This transformation created:
• Stronger brand clarity
• Consistent brand communication
• Customer retention infrastructure
• Proprietary business assets
• Long-term growth readiness`,
    },

    keyTakeaway: `Rather than competing solely on pricing, J-Mave Car Rental now possesses strategic assets designed to strengthen customer loyalty and support long-term business growth.`,

    results: [
      {
        metric: "Brand Platform",
        value: "Go Further",
        sub: "Strategic Asset",
        icon: Target,
      },
      {
        metric: "Loyalty Program",
        value: "J-Mave Loyalty Card",
        sub: "Launched",
        icon: TrendingUp,
      },
      {
        metric: "Positioning Shift",
        value: "Trusted Mobility Partner",
        sub: "New Identity",
        icon: Users,
      },
      {
        metric: "Marketing Assets",
        value: "Multiple",
        sub: "Scalable Frameworks",
        icon: Eye,
      },
    ],

    chartData: [
      { name: "Positioning", value: 85 },
      { name: "Retention", value: 92 },
      { name: "Brand Recall", value: 78 },
      { name: "Loyalty", value: 88 },
    ],

    testimonial: {
      quote:
        "Axis Marketing Solutions helped transform J-Mave Car Rental from a traditional vehicle rental provider into a customer-centered mobility brand.",
      name: "J-Mave Car Rental Team",
      role: "Management",
    },
  },
};

/* ─── COMPONENT ────────────────────────────────────────── */

const CaseStudyPageJmave: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const study = caseStudies["j-mave"];
  
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

  const renderBodyWithLists = (text: string) => {
    if (!text) return null;

    const lines = text.split("\n").filter(Boolean);
    const elements: JSX.Element[] = [];
    let currentList: JSX.Element[] = [];

    lines.forEach((line, index) => {
      const trimmed = line.trim();

      // Detect main bullet (• or - or *)
      if (
        trimmed.startsWith("•") ||
        trimmed.startsWith("-") ||
        trimmed.startsWith("*")
      ) {
        const content = trimmed.replace(/^[•\-\*]\s*/, "").trim();
        currentList.push(
          <li key={index}>
            <span className="case-list-bullet" />
            {content}
          </li>,
        );
      }
      // Detect sub-bullet (indented)
      else if (line.startsWith("  ") || line.startsWith("\t")) {
        const content = trimmed.replace(/^[•\-\*]\s*/, "").trim();
        // If we have an active list, add sub-item to the last <li>
        if (currentList.length > 0) {
          const lastItem = currentList[currentList.length - 1];
          currentList[currentList.length - 1] = (
            <li key={index}>
              {lastItem.props.children[0]} {/* Keep original bullet */}
              <span>{lastItem.props.children[1]}</span>
              <ul className="case-sublist">
                <li>
                  <span className="case-list-bullet" />
                  {content}
                </li>
              </ul>
            </li>
          );
        }
      }
      // Regular paragraph
      else {
        // Flush any pending list
        if (currentList.length > 0) {
          elements.push(
            <ul key={`list-${index}`} className="case-list">
              {currentList}
            </ul>,
          );
          currentList = [];
        }
        elements.push(
          <p key={index} className="case-paragraph">
            {line}
          </p>,
        );
      }
    });

    // Flush remaining list
    if (currentList.length > 0) {
      elements.push(
        <ul key="final-list" className="case-list">
          {currentList}
        </ul>,
      );
    }

    return <>{elements}</>;
  };

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
            <div className="case-hero-accent" />
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

        {/* CLIENT RELATIONSHIP */}
        {study.clientRelationship && (
          <section className="case-section">
            <div className="section-header">
              <span className="section-label">Client Relationship</span>
            </div>
            <div className="case-body">
              {renderBodyText(study.clientRelationship)}
            </div>
          </section>
        )}

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

        {/* STRATEGIC INSIGHT */}
        <section className="case-section bg-light">
          <div className="section-header">
            <span className="section-label">Strategic Insight</span>
            <h2 className="section-title">Strategic Insight</h2>
          </div>
          <div className="case-body">
            <p className="case-paragraph case-paragraph--lead">
              Axis Marketing Solutions identified a key customer behavior
              pattern:
            </p>
            <ul className="case-list">
              <li>
                <ArrowRight
                  size={14}
                  style={{ color: "var(--axis-primary)", marginRight: "2px" }}
                />
                Customers do not rent vehicles because they want a car.
              </li>
              <li>
                <ArrowRight
                  size={14}
                  style={{ color: "var(--axis-primary)", marginRight: "2px" }}
                />
                Customers rent vehicles because they want confidence in their
                journey.
              </li>
              <li>
                <ArrowRight
                  size={14}
                  style={{ color: "var(--axis-primary)", marginRight: "2px" }}
                />
                Whether traveling for business, tourism, family commitments, or
                personal mobility, customers are ultimately purchasing:
                <ul className="case-sublist">
                  <li>
                    <span className="case-list-bullet" />
                    Reliability
                  </li>
                  <li>
                    <span className="case-list-bullet" />
                    Convenience
                  </li>
                  <li>
                    <span className="case-list-bullet" />
                    Flexibility
                  </li>
                  <li>
                    <span className="case-list-bullet" />
                    Simplicity
                  </li>
                  <li>
                    <span className="case-list-bullet" />
                    Peace of mind
                  </li>
                </ul>
              </li>
            </ul>
            <div className="case-body">
              This insight shifted the focus from vehicles to customer
              experience. The opportunity was not to become another car rental
              company. The opportunity was to become a trusted mobility brand.
            </div>
          </div>
        </section>

        {/* STRATEGIC OBJECTIVES */}
        {/* STRATEGIC OBJECTIVES */}
        <section className="case-section">
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
                    <h4 className="objective-title">{obj.title}</h4>
                    <p className="objective-body">{obj.body}</p>
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
        <section className="case-section bg-light">
          <div className="section-header">
            <span className="section-label">03 — The Strategy</span>
            <h2 className="section-title">The Strategy</h2>
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
                  {/* Intro */}
                  {step.intro && <p className="case-paragraph">{step.intro}</p>}

                  {/* Before / After */}
                  {(step.before || step.after) && (
                    <div className="position-shift">
                      {step.before && (
                        <div className="position-before">
                          <strong>Previous Position:</strong> {step.before}
                        </div>
                      )}
                      {step.after && (
                        <div className="position-after">
                          <strong>New Position:</strong> {step.after}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Highlight */}
                  {step.highlight && (
                    <div className="brand-highlight">{step.highlight}</div>
                  )}

                  {/* Description */}
                  {step.description && (
                    <p className="case-paragraph">{step.description}</p>
                  )}

                  {/* Represents / Benefits Lists */}
                  {step.benefits && step.benefits.length > 0 && (
                    <div className="approach-list">
                      <strong>Associated with:</strong>
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

                  {step.represents && step.represents.length > 0 && (
                    <div className="approach-list">
                      <strong>The platform represents:</strong>
                      <ul className="case-list">
                        {step.represents.map((item, idx) => (
                          <li key={idx}>
                            <span className="case-list-bullet" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Strategic Value / Objectives */}
                  {step.strategicValue && step.strategicValue.length > 0 && (
                    <div className="approach-list">
                      <strong>Strategic Value:</strong>
                      <ul className="case-list">
                        {step.strategicValue.map((item, idx) => (
                          <li key={idx}>
                            <span className="case-list-bullet" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {step.objectives && step.objectives.length > 0 && (
                    <div className="approach-list">
                      <strong>Program Objectives:</strong>
                      <ul className="case-list">
                        {step.objectives.map((item, idx) => (
                          <li key={idx}>
                            <span className="case-list-bullet" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Program Benefits */}
                  {step.benefits &&
                    step.benefits.length > 0 &&
                    step.programName && (
                      <div className="approach-list">
                        <strong>Program Benefits:</strong>
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

                  {/* Conclusion */}
                  {step.conclusion && (
                    <p className="case-paragraph">{step.conclusion}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* MARKETING INFRASTRUCTURE */}
        <section className="case-section">
          <div className="section-header">
            <span className="section-label">
              04 — Marketing Infrastructure Development
            </span>
            <h2 className="section-title">
              Marketing Infrastructure Development
            </h2>
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
        <section className="case-section bg-light">
          <div className="section-header">
            <span className="section-label">05 — Business Transformation</span>
            <h2 className="section-title">Business Transformation</h2>
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
              <div>{renderBodyWithLists(study.transformation.after)}</div>
            </div>
          </div>
        </section>

        {/* OPERATIONAL IMPACT & KEY TAKEAWAYS */}
        <section className="case-section">
          <div className="section-header">
            <span className="section-label">
              06 — Operational Impact & Key Takeaways
            </span>
            <h2 className="section-title">
              Operational Impact & Key Takeaways
            </h2>
          </div>
          <div className="case-body">{renderBodyText(study.keyTakeaway)}</div>
        </section>

        {/* PROJECT SNAPSHOT / RESULTS */}
        <section className="results-section">
          <div className="section-header section-header--center">
            <span className="section-label">PROJECT SNAPSHOT</span>
            <h2 className="section-title">Results at a Glance</h2>
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
            <h3 className="chart-title">Strategic Impact</h3>
            <ResponsiveContainer width="100%" height={340}>
              <BarChart data={study.chartData} barCategoryGap="20%">
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
                    <Cell
                      key={i}
                      fill={
                        i === 1 ? "#4b006e" : i === 3 ? "#7a1fb0" : "#c4b5fd"
                      }
                    />
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
            Building market positions that customers remember, trust, and
            choose.
          </p>
          <p className="brand-signature-pillars">
            Strategy. Creativity. Execution. Results.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="case-cta">
        <div className="case-cta-content">
          <h2>Want similar results for your business?</h2>
          <p>Book a free 1-hour marketing strategy session with us.</p>
          <button className="cta-primary">Book Your Free Audit Now</button>
        </div>
      </section>
    </>
  );
};

export default CaseStudyPageJmave;
