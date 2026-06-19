import React, { useEffect, useState } from "react";
import {
  ArrowLeft,
  Users,
  Eye,
  MousePointer,
  Target,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import ihubLogo from "../assets/ihub_logo.png";
import ihubHero from "../assets/ihub-hero.jpg";
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
  "ihub-davao": {
    slug: "ihub-davao",
    client: "iHub Coworking Space & Bistro",
    industry: "Coworking | Food & Beverage | Community Experience",
    location: "Davao City",
    executedBy: "Axis Marketing Solutions",
    logo: ihubLogo,
    tagline: "From Coworking Space to Lifestyle & Community Hub",
    heroImage: ihubHero,

    executiveSummary: `iHub Coworking Space & Bistro is a hybrid workspace and lifestyle destination serving students, freelancers, entrepreneurs, and professionals in Davao City.

Axis Marketing Solutions was engaged to elevate iHub beyond its functional identity as a coworking space and reposition it as a community-driven lifestyle brand.

Through structured brand strategy, content systems, and community positioning, iHub was transformed into a recognizable destination where productivity, lifestyle, and human connection coexist.

The result is a clearer brand identity, stronger market positioning, and a more defined emotional connection with its audience.`,

    challengeIntro: `Although iHub had an established operational foundation, its brand presence was not fully aligned with its real customer experience.`,

    challengePoints: [
      "The brand was primarily perceived as a workspace provider",
      "Lifestyle and community value were underrepresented",
      "Content lacked a unified narrative structure",
      "Increasing market competition required stronger differentiation",
      "Digital presence did not fully reflect in-store experience",
    ],

    challengeClosing: `The challenge was not visibility — it was brand clarity and positioning.`,

    strategicObjectiveIntro: `Axis Marketing Solutions aimed to:`,

    strategicObjectives: [
      "Redefine iHub’s brand identity in the market",
      "Strengthen emotional positioning and recall",
      "Build a structured content and storytelling system",
      "Align digital presence with real customer experience",
      "Establish iHub as a workspace + lifestyle destination",
    ],

    strategicObjectiveClosing: `The goal was to transform perception, not increase output.`,

    approach: [
      {
        number: "1",
        title: "Brand Positioning System",
        body: `A new positioning framework was developed:

Create Your Future. Celebrate Your Now.

This dual-layer identity defines iHub as:

A space for productivity, growth, and ambition
A space for lifestyle, connection, and experience

This repositioned iHub from a service provider into an experience-driven brand.`,
      },
      {
        number: "2",
        title: "Lifestyle Content System",
        body: `A structured content ecosystem was implemented, focusing on real user behavior and experience rather than facility promotion.

Content pillars included:

Student and study culture
Freelancer and remote work lifestyle
Food and café experience
Community interaction
Events and social moments
Customer stories and lived experiences

This shifted communication from what we offer to how people experience it.`,
      },
      {
        number: "3",
        title: "Community Development System (iAccess)",
        body: `To strengthen retention and belonging, Axis supported the development of iAccess, a community-driven engagement system designed to:

Encourage repeat visits
Strengthen customer loyalty
Build emotional connection
Reinforce community identity

This positioned iHub as a community ecosystem, not just a physical space.`,
      },
      {
        number: "4",
        title: "Brand Narrative System",
        body: `A structured storytelling framework was implemented to ensure every output reinforced a unified brand identity.

Each content piece was aligned with:

Brand positioning
Lifestyle experience
Community identity
Emotional connection

This created consistency across all digital touchpoints.`,
      },
    ],

    executionScope: [
      "Brand Strategy & Positioning Architecture",
      "Content System Development",
      "Social Media Direction",
      "Creative Direction & Visual Identity System",
      "Campaign Structuring",
      "Community Engagement Framework",
      "Brand Storytelling System",
    ],

    transformation: {
      before: `iHub was primarily perceived as a functional coworking space.`,
      after: `iHub is positioned as a workspace and lifestyle hub, where:

Productivity meets experience
Work meets lifestyle
Individuals meet community
Spaces become destinations

This transformation elevated iHub into a recognizable lifestyle brand within its local market.`,
    },

    strategicInsight: `This project demonstrates a shift from traditional marketing execution to brand system architecture.

Instead of focusing on isolated content outputs, the strategy focused on:

Perception design
Narrative consistency
Community psychology
Experience-based branding

This allowed the brand to evolve from being seen to being recognized.`,

    keyTakeaway: `The success of iHub was not defined by content output or follower growth.

It was defined by the successful transformation of a functional workspace into a community-driven lifestyle brand through structured brand systems.`,

    results: [
      {
        metric: "Unique Accounts Reached",
        value: "112,600+",
        sub: "Latest 3 Months",
        icon: Users,
      },
      {
        metric: "Content Views",
        value: "350,700+",
        sub: "Latest 3 Months",
        icon: Eye,
      },
      {
        metric: "Page Visits",
        value: "24,000+",
        sub: "Latest 3 Months",
        icon: MousePointer,
      },
      {
        metric: "Link Clicks",
        value: "1,400+",
        sub: "Latest 3 Months",
        icon: Target,
      },
      {
        metric: "Community Followers",
        value: "5,000+",
        sub: "Active Audience",
        icon: TrendingUp,
      },
      {
        metric: "Monthly Revenue Stability",
        value: "₱600,000+",
        sub: "Sustained Growth",
        icon: TrendingUp,
      },
    ],

    chartData: [
      { name: "Reach", value: 112600 },
      { name: "Views", value: 350700 },
      { name: "Visits", value: 24000 },
      { name: "Clicks", value: 1400 },
    ],

    testimonial: {
      quote:
        "Axis Marketing helped us become more than just a coworking space. They turned iHub into a true community and lifestyle destination that people love and return to.",
      name: "iHub Davao Team",
      role: "Management",
    },
  },
};

/* ─── COMPONENT ────────────────────────────────────────── */

const CaseStudyPageIhub: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const study = caseStudies["ihub-davao"];

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
    const parts = text.split("\n\n");
    return parts.map((part, idx) => {
      const lines = part.split("\n").filter(Boolean);
      if (lines.length > 1) {
        return (
          <ul key={idx} className="case-list">
            {lines.map((line, li) => (
              <li key={li}>
                <span className="case-list-bullet" />
                {line}
              </li>
            ))}
          </ul>
        );
      }
      return (
        <p key={idx} className="case-paragraph">
          {part}
        </p>
      );
    });
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

        {/* STRATEGIC OBJECTIVE */}
        <section className="case-section bg-light">
          <div className="section-header">
            <span className="section-label">02 — Strategic Objective</span>
            <h2 className="section-title">Strategic Objective</h2>
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
                  <span>{obj}</span>
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
                  {renderBodyWithLists(step.body)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EXECUTION SCOPE */}
        <section className="case-section bg-light">
          <div className="section-header">
            <span className="section-label">04 — Execution Scope</span>
            <h2 className="section-title">Execution Scope</h2>
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

        {/* STRATEGIC INSIGHT */}
        <section className="case-section bg-light">
          <div className="section-header">
            <span className="section-label">06 — Strategic Insight</span>
            <h2 className="section-title">Strategic Insight</h2>
          </div>
          <div className="case-body">
            {renderBodyWithLists(study.strategicInsight)}
          </div>
        </section>

        {/* KEY TAKEAWAY */}
        <section className="case-section case-section--key">
          <div className="section-header">
            <span className="section-label">Key Takeaway</span>
          </div>
          <div className="key-takeaway">
            <div className="key-takeaway-content">
              {renderBodyText(study.keyTakeaway)}
            </div>
          </div>
        </section>

        {/* PROJECT SNAPSHOT / RESULTS */}
        <section className="results-section">
          <div className="section-header section-header--center">
            <span className="section-label">PROJECT SNAPSHOT</span>
            <h2 className="section-title">Results That Speak</h2>
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
            <h3 className="chart-title">
              Performance Snapshot (Last 3 Months)
            </h3>
            <ResponsiveContainer width="100%" height={340}>
              <BarChart data={study.chartData} barCategoryGap="20%">
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" tickLine={false} axisLine={false} />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(v) =>
                    v >= 1000 ? `${(v / 1000).toFixed(0)}K` : v
                  }
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
            We design brand systems that shape perception, strengthen
            positioning, and build long-term market value.
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

export default CaseStudyPageIhub;
