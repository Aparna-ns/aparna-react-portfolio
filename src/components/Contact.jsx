import React, { useState } from "react";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Send,
  Download,
  Copy,
  Check,
  ExternalLink,
  MessageSquare
} from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [status, setStatus] = useState(null); // 'idle' | 'success' | 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      return;
    }

    // Direct mailto link preparation so recruiter's action is genuinely handled
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || `Portfolio Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.open(mailtoUrl, "_blank");
    setStatus("success");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Let's Connect</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Whether discussing full-stack software opportunities, document automation, or collaborative development, I welcome your message.
          </p>
        </div>

        <div className="contact-grid">
          {/* Direct Verified Contact Channels */}
          <div className="contact-info-cards">
            <div className="contact-card-item glass-card">
              <div className="contact-card-icon">
                <Mail size={22} />
              </div>
              <div className="contact-card-content" style={{ flex: 1 }}>
                <h4>Email Address</h4>
                <a href={`mailto:${personalInfo.email}`} title="Email Aparna NS">
                  {personalInfo.email}
                </a>
              </div>
              <button
                onClick={copyEmailToClipboard}
                className="btn btn-outline btn-sm"
                title="Copy email to clipboard"
                aria-label="Copy email address"
              >
                {copiedEmail ? <Check size={14} style={{ color: "#10b981" }} /> : <Copy size={14} />}
                <span>{copiedEmail ? "Copied" : "Copy"}</span>
              </button>
            </div>

            <div className="contact-card-item glass-card">
              <div className="contact-card-icon">
                <Linkedin size={22} />
              </div>
              <div className="contact-card-content">
                <h4>LinkedIn Profile</h4>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}
                >
                  <span>linkedin.com/in/aparna-ns</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            <div className="contact-card-item glass-card">
              <div className="contact-card-icon">
                <Github size={22} />
              </div>
              <div className="contact-card-content">
                <h4>GitHub Profile</h4>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}
                >
                  <span>github.com/Aparna-ns</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            <div className="contact-card-item glass-card">
              <div className="contact-card-icon">
                <MapPin size={22} />
              </div>
              <div className="contact-card-content">
                <h4>Location</h4>
                <p>{personalInfo.location}</p>
              </div>
            </div>

            <div className="contact-card-item glass-card">
              <div className="contact-card-icon">
                <Download size={22} />
              </div>
              <div className="contact-card-content">
                <h4>Resume & Credentials</h4>
                <a
                  href={personalInfo.resumeUrl}
                  download="Aparna_NS_Resume.pdf"
                  style={{ color: "var(--accent-cyan)", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}
                >
                  <span>Download aparna_ns_resume.pdf</span>
                  <Download size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Verified Message Form */}
          <div className="contact-form-container glass-card">
            <h3 style={{ fontSize: "1.35rem", marginBottom: "0.5rem" }}>Send a Direct Message</h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "1.5rem" }}>
              Submitting opens your default email client with your message prepared, ensuring direct delivery.
            </p>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="e.g. Sarah Jenkins"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="e.g. sarah@company.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="e.g. Full-Stack Engineering Opportunity"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Hi Aparna, I came across your portfolio and would like to discuss..."
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                <Send size={18} />
                <span>Send Message</span>
              </button>

              {status === "success" && (
                <div className="form-status-msg success">
                  <Check size={16} />
                  <span>Your email client has been opened with your message. Thank you for reaching out!</span>
                </div>
              )}

              {status === "error" && (
                <div className="form-status-msg error">
                  <span>Please fill in all required fields (Name, Email, and Message).</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

