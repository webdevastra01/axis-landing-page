import React, { useState } from "react";
import {
  X,
  Mail,
  User,
  MessageSquare,
  Tag,
  Building2,
  Briefcase,
  Phone,
  Check,
} from "lucide-react";
import "../styles/ContactModal.css";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
}

const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    businessName: "",
    position: "",
    contactNumber: "",
    preferredContact: "email",
    consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed");

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        businessName: "",
        position: "",
        contactNumber: "",
        preferredContact: "email",
        consent: false,
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Close modal on escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          className="modal__close"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div className="modal__header">
          <h2 className="modal__title">{title}</h2>
          <p className="modal__subtitle">
            {description ||
              "Fill out the form below and we'll get back to you shortly."}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="modal__form">
          {/* Name Field */}
          <div className="modal__field">
            <label htmlFor="name" className="modal__label">
              <User size={18} />
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Smith"
              required
              className="modal__input"
            />
          </div>

          {/* Email Field */}
          <div className="modal__field">
            <label htmlFor="email" className="modal__label">
              <Mail size={18} />
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@company.com"
              required
              className="modal__input"
            />
          </div>

          {/* Business Name Field */}
          <div className="modal__field">
            <label htmlFor="businessName" className="modal__label">
              <Building2 size={18} />
              Business Name
            </label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              placeholder="Your Company Inc."
              className="modal__input"
            />
          </div>

          {/* Position/Role Field */}
          <div className="modal__field">
            <label htmlFor="position" className="modal__label">
              <Briefcase size={18} />
              Position / Role
            </label>
            <input
              type="text"
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              placeholder="Marketing Manager"
              className="modal__input"
            />
          </div>

          {/* Contact Number Field */}
          <div className="modal__field">
            <label htmlFor="contactNumber" className="modal__label">
              <Phone size={18} />
              Contact Number
            </label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              placeholder="+1 (555) 123-4567"
              className="modal__input"
            />
          </div>

          {/* Preferred Contact Method Field */}
          <div className="modal__field">
            <label htmlFor="preferredContact" className="modal__label">
              <MessageSquare size={18} />
              Preferred Contact Method *
            </label>
            <select
              id="preferredContact"
              name="preferredContact"
              value={formData.preferredContact}
              onChange={handleChange}
              required
              className="modal__input modal__select"
            >
              <option value="email">Email</option>
              <option value="phone">Phone Call</option>
              <option value="sms">SMS/Text</option>
              <option value="whatsapp">WhatsApp</option>
            </select>
          </div>

          {/* Subject Field */}
          <div className="modal__field">
            <label htmlFor="subject" className="modal__label">
              <Tag size={18} />
              Service Interest *
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="modal__input modal__select"
            >
              <option value="" disabled>
                Select a service
              </option>
              <option value="social-media">Social Media Management</option>
              <option value="branding-design">Branding & Design</option>
              <option value="paid-advertising">Paid Advertising</option>
              <option value="photo-video">Photo & Video Production</option>
              <option value="marketing-strategy">Marketing Strategy</option>
              <option value="marketing-consulting">Marketing Consulting</option>
              <option value="general">General Inquiry</option>
            </select>
          </div>

          {/* Message Field */}
          <div className="modal__field">
            <label htmlFor="message" className="modal__label">
              <MessageSquare size={18} />
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your business and what you're looking for..."
              required
              rows={4}
              className="modal__input modal__textarea"
            />
          </div>

          {/* Consent Checkbox */}
          <div className="modal__field modal__field--checkbox">
            <label className="modal__checkbox-label">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleCheckboxChange}
                required
                className="modal__checkbox"
              />
              <span className="modal__checkbox-custom">
                <Check size={14} />
              </span>
              <span className="modal__checkbox-text">
                I agree to be contacted by Axis Marketing Solutions for this
                promo and future updates. *
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="modal__submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="modal__spinner"></span>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </form>

        {/* Status Messages */}
        {submitStatus === "success" && (
          <div className="modal__status modal__status--success">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <span>Message sent successfully! We'll be in touch soon.</span>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="modal__status modal__status--error">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="15" y1="9" x2="9" y2="15"></line>
              <line x1="9" y1="9" x2="15" y2="15"></line>
            </svg>
            <span>Something went wrong. Please try again.</span>
          </div>
        )}

        {/* Footer Note */}
        <p className="modal__footer">
          Prefer email? Reach us directly at{" "}
          <a href="mailto:contact@youraxisms@gmail.com">youraxisms@gmail.com</a>
        </p>
      </div>
    </div>
  );
};

export default ContactModal;
