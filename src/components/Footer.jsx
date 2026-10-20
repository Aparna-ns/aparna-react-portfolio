import React from "react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="footer-logo">{personalInfo.name}</span>
            <span style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
              {personalInfo.role} • {personalInfo.currentCompany}
            </span>
          </div>

          <div className="footer-socials">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <Github size={18} />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="footer-social-link"
              aria-label="Email Aparna NS"
              title="Email"
            >
              <Mail size={18} />
            </a>

            <button
              onClick={scrollToTop}
              className="footer-social-link"
              aria-label="Scroll back to top"
              title="Back to Top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
          <p style={{ color: "var(--text-muted)" }}>
            Engineered with React 18, Vite, and semantic modern CSS • Ready for Netlify Deployment
          </p>
        </div>
      </div>
    </footer>
  );
}

