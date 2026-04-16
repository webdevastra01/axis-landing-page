import React, { useState } from "react";
import "../styles/ServicesSection.css";
// Import your service images
import socialMediaImg from "../assets/social-media-management.jpg";
import brandingImg from "../assets/branding.png";
import advertisingImg from "../assets/paid-advertising.jpg";
import productionImg from "../assets/photo-video-production.jpg";
import strategyImg from "../assets/marketing-strategy.jpg";
import consultingImg from "../assets/marketing-consultation.jpg";
import ServiceModal from "./ServiceModal";
import ContactModal from "./ContactModal";

interface Service {
  image: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
}

const services: Service[] = [
  {
    image: socialMediaImg,
    title: "Social Media Management",
    shortDescription:
      "Strategic content planning and engagement across all platforms.",
    fullDescription:
      "We create and execute comprehensive social media strategies that build brand awareness, engage your audience, and drive conversions. Our team handles everything from content creation to community management.",
    features: [
      "Content calendar development and scheduling",
      "Community engagement and reputation management",
      "Analytics tracking and performance reporting",
      "Paid social campaign management",
    ],
  },
  {
    image: brandingImg,
    title: "Branding & Design",
    shortDescription:
      "Logos, visuals, and comprehensive brand identity systems.",
    fullDescription:
      "We craft distinctive brand identities that resonate with your target audience and set you apart from competitors. From logo design to complete brand guidelines, we ensure consistency across all touchpoints.",
    features: [
      "Logo design and visual identity systems",
      "Brand strategy and positioning",
      "Marketing collateral design",
      "Brand guidelines documentation",
      "Packaging and merchandise design",
    ],
  },
  {
    image: advertisingImg,
    title: "Paid Advertising",
    shortDescription: "Conversion-driven ad campaigns that maximize ROI.",
    fullDescription:
      "Our data-driven approach to paid advertising ensures every dollar spent contributes to your business growth. We optimize campaigns across multiple platforms to reach your ideal customers at the right time.",
    features: [
      "Google Ads and search campaign management",
      "Meta (Facebook/Instagram) advertising",
      "Retargeting and remarketing setups",
    ],
  },
  {
    image: productionImg,
    title: "Photo & Video Production",
    shortDescription: "Scroll-stopping visuals that capture attention.",
    fullDescription:
      "Professional photography and videography services that elevate your brand's visual storytelling. From product shoots to brand documentaries, we create content that engages and converts.",
    features: [
      "Professional product photography",
      "Brand story and documentary videos",
      "Social media content creation",
      "Drone and aerial videography",
      "Post-production and editing services",
    ],
  },
  {
    image: strategyImg,
    title: "Marketing Strategy",
    shortDescription: "Data-driven growth direction and market analysis.",
    fullDescription:
      "We develop comprehensive marketing strategies aligned with your business objectives. Our analytical approach ensures every tactic supports your long-term growth and market positioning goals.",
    features: [
      "Market research and competitive analysis",
      "Customer persona development",
      "Multi-channel strategy planning",
      "KPI definition and tracking setup",
      "Quarterly strategy reviews and adjustments",
    ],
  },
  {
    image: consultingImg,
    title: "Marketing Consulting",
    shortDescription: "Expert guidance and strategic campaign planning.",
    fullDescription:
      "Get expert marketing guidance without the overhead of a full-time CMO. Our consulting services provide strategic direction, team training, and ongoing support to elevate your marketing efforts.",
    features: [
      "Marketing audit and gap analysis",
      "Team training and workshops",
      "Campaign planning and oversight",
      "Vendor selection and management",
      "Monthly strategy sessions",
    ],
  },
];

const ServicesSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const openModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
    setSelectedService(null);
  };

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
            <div
              key={index}
              className="service-card"
              onClick={() => setSelectedService(service)}
            >
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
              <p className="service-description">{service.shortDescription}</p>
            </div>
          ))}
        </div>
      </div>

      <ServiceModal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        getStartedClicked={openModal}
        service={selectedService}
      />
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`Inquire about ${selectedService ? selectedService.title : "our services"}`}
        description="Fill out the form below and we'll get back to you within 24 hours."
      />
    </section>
  );
};

export default ServicesSection;
