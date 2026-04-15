import React from "react";
import "../styles/ServicesSection.css";
// Import your service images
import socialMediaImg from "../assets/social-media-management.jpg";
import brandingImg from "../assets/branding.png";
import advertisingImg from "../assets/paid-advertising.jpg";
import productionImg from "../assets/photo-video-production.jpg";
import strategyImg from "../assets/marketing-strategy.jpg";
import consultingImg from "../assets/marketing-consultation.jpg";

const services = [
  {
    image: socialMediaImg,
    title: "Social Media Management",
    description:
      "Strategic content planning and engagement across all platforms.",
  },
  {
    image: brandingImg,
    title: "Branding & Design",
    description: "Logos, visuals, and comprehensive brand identity systems.",
  },
  {
    image: advertisingImg,
    title: "Paid Advertising",
    description: "Conversion-driven ad campaigns that maximize ROI.",
  },
  {
    image: productionImg,
    title: "Photo & Video Production",
    description: "Scroll-stopping visuals that capture attention.",
  },
  {
    image: strategyImg,
    title: "Marketing Strategy",
    description: "Data-driven growth direction and market analysis.",
  },
  {
    image: consultingImg,
    title: "Marketing Consulting",
    description: "Expert guidance and strategic campaign planning.",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        {/* Section Header */}
        <div className="services-header">
          <span className="services-tagline">What We Offer</span>
          <h2 className="services-headline">
            Our <span className="text-accent">Marketing Solutions</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-image-wrapper">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-image"
                />
                <div className="service-image-overlay">
                  <span className="service-read-more">Read Description</span>
                </div>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
