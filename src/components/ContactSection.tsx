import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import "../styles/ContactSection.css";

const ContactSection: React.FC = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "youraxisms@gmail.com",
      href: "mailto:youraxisms@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+63 930 932 0571",
      href: "tel:+639309320571",
    },
    {
      icon: MapPin,
      label: "Office Address",
      value: "Pines Place, Pioneer Drive",
      subValue: "Bajada, Davao City",
      note: "Near Bluepost Boiling Crabs & Shrimps",
      href: "https://maps.app.goo.gl/5MbCRRe86jG3j6A29",
    },
    {
      icon: Clock,
      label: "Business Hours",
      value: "24/7 Marketing Support",
      isHighlight: true,
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Header */}
        <div className="contact-header">
          <span className="contact-tagline">Contact</span>
          <h2 className="contact-title">Contact Axis Marketing Solutions</h2>
          <p className="contact-subtitle">
            Ready to transform your marketing? Reach out and let's discuss how
            we can help your brand stand out.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="contact-grid">
          {contactInfo.map((item, index) => {
            const IconComponent = item.icon;
            const CardContent = (
              <>
                <div
                  className={`contact-icon ${item.isHighlight ? "icon-highlight" : ""}`}
                >
                  <IconComponent size={24} strokeWidth={2} />
                </div>
                <div className="contact-details">
                  <span className="contact-label">{item.label}</span>
                  <span
                    className={`contact-value ${item.isHighlight ? "value-highlight" : ""}`}
                  >
                    {item.value}
                  </span>
                  {item.subValue && (
                    <span className="contact-subvalue">{item.subValue}</span>
                  )}
                  {item.note && (
                    <span className="contact-note">{item.note}</span>
                  )}
                </div>
              </>
            );

            if (item.href) {
              return (
                <a
                  key={index}
                  href={item.href}
                  className="contact-card clickable"
                >
                  {CardContent}
                </a>
              );
            }

            return (
              <div key={index} className="contact-card">
                {CardContent}
              </div>
            );
          })}
        </div>

        {/* Decorative bottom element */}
        <div className="contact-footer">
          <div className="footer-line"></div>
          <p className="footer-text">We typically respond within 2 hours</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
