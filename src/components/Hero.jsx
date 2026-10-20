import React from "react";
import {
  ArrowRight,
  Download,
  Mail,
  MapPin,
  Github,
  Linkedin,
  Layers,
  Terminal,
  Database,
  Cpu,
  FileCode2,
  ExternalLink
} from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Hero() {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 75;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-glow-1" aria-hidden="true" />
      <div className="hero-glow-2" aria-hidden="true" />

      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Introduction & CTAs */}
          <div className="hero-text-content">
            <div className="hero-badge-status">
              <span className="pulse-dot" />
              <span>
                {personalInfo.role} at{" "}
                <strong className="hero-role-company">{personalInfo.currentCompany}</strong>
              </span>
            </div>

            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            <p className="hero-headline">{personalInfo.headline}</p>

            <p className="hero-description">{personalInfo.heroDescription}</p>

            <div className="hero-ctas">
              <button
                onClick={() => scrollTo("featured")}
                className="btn btn-primary"
                aria-label="View Featured Projects"
              >
                <span>View My Projects</span>
                <ArrowRight size={18} />
              </button>

              <a
                href={personalInfo.resumeUrl}
                download="Aparna_NS_Resume.pdf"
                className="btn btn-secondary"
                aria-label="Download Aparna NS Resume"
              >
                <Download size={18} />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Quick Verified Contact & Profiles */}
            <div className="hero-contact-bar">
              <a
                href={`mailto:${personalInfo.email}`}
                className="contact-quick-link"
                title="Send email to Aparna NS"
              >
                <Mail size={16} />
                <span>{personalInfo.email}</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-quick-link"
                title="View LinkedIn Profile"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
                <ExternalLink size={12} style={{ opacity: 0.6 }} />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-quick-link"
                title="View GitHub Profile"
              >
                <Github size={16} />
                <span>GitHub</span>
                <ExternalLink size={12} style={{ opacity: 0.6 }} />
              </a>

              <span className="contact-quick-link">
                <MapPin size={16} />
                <span>{personalInfo.location}</span>
              </span>
            </div>
          </div>

          {/* Right Column: Architectural Overview Card */}
          <div className="hero-visual-card glass-card">
            <div className="visual-header">
              <span className="visual-header-title">
                <Layers size={18} className="gradient-text" />
                Technical Capabilities
              </span>
              <span className="visual-status-pill">Active Developer</span>
            </div>

            <div className="visual-stack-list">
              <div className="visual-stack-row">
                <span className="visual-stack-label">Backend Architecture</span>
                <div className="visual-stack-badges">
                  <span className="badge badge-primary">Python</span>
                  <span className="badge badge-primary">Django</span>
                  <span className="badge badge-primary">Django REST Framework</span>
                  <span className="badge">RESTful APIs</span>
                </div>
              </div>

              <div className="visual-stack-row">
                <span className="visual-stack-label">Frontend Development</span>
                <div className="visual-stack-badges">
                  <span className="badge badge-primary">React.js</span>
                  <span className="badge">JavaScript (ES6+)</span>
                  <span className="badge">HTML5 / CSS3</span>
                  <span className="badge">Bootstrap</span>
                </div>
              </div>

              <div className="visual-stack-row">
                <span className="visual-stack-label">Database Management</span>
                <div className="visual-stack-badges">
                  <span className="badge badge-primary">PostgreSQL</span>
                  <span className="badge">MySQL</span>
                  <span className="badge">Schema Modeling</span>
                </div>
              </div>

              <div className="visual-stack-row">
                <span className="visual-stack-label">Document Automation & AI</span>
                <div className="visual-stack-badges">
                  <span className="badge badge-primary">Tesseract OCR</span>
                  <span className="badge badge-primary">PyMuPDF</span>
                  <span className="badge">Text Extraction</span>
                </div>
              </div>

              <div className="visual-stack-row">
                <span className="visual-stack-label">Containerization & Cloud</span>
                <div className="visual-stack-badges">
                  <span className="badge">Docker</span>
                  <span className="badge">Render</span>
                  <span className="badge">Netlify</span>
                  <span className="badge">Git / GitHub CI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

