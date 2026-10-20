import React from "react";
import { aboutMe } from "../data/portfolioData";
import { Code, FileText, Database, GraduationCap, CheckCircle2 } from "lucide-react";

export default function About() {
  const getIcon = (index) => {
    switch (index) {
      case 0:
        return <Code size={20} />;
      case 1:
        return <FileText size={20} />;
      case 2:
        return <Database size={20} />;
      case 3:
        return <GraduationCap size={20} />;
      default:
        return <CheckCircle2 size={20} />;
    }
  };

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">Professional Background & Engineering Philosophy</h2>
          <p className="section-subtitle">
            Building reliable full-stack web applications and automating real-world workflows with clean, maintainable code.
          </p>
        </div>

        <div className="about-grid">
          {/* Narrative Column */}
          <div className="about-text-content">
            {aboutMe.summary.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Highlights Column */}
          <div className="about-highlights-grid">
            {aboutMe.highlights.map((item, idx) => (
              <div key={idx} className="about-highlight-card glass-card">
                <div className="about-highlight-icon">
                  {getIcon(idx)}
                </div>
                <div>
                  <h3 className="about-highlight-title">{item.title}</h3>
                  <p className="about-highlight-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
