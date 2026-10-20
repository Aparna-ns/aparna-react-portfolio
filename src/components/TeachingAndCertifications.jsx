import React from "react";
import {
  GraduationCap,
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  MapPin,
  Sparkles
} from "lucide-react";
import {
  teachingExperience,
  educationAndCertifications
} from "../data/portfolioData";

export default function TeachingAndCertifications() {
  return (
    <section id="credentials" className="dual-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Continuous Growth</span>
          <h2 className="section-title">Teaching, Training & Education</h2>
          <p className="section-subtitle">
            Documented experience in programming education, specialized technical training in AI & Django, and formal engineering background.
          </p>
        </div>

        <div className="dual-grid">
          {/* Column 1: Teaching & Knowledge Sharing */}
          <div>
            <div className="dual-column-header">
              <div className="dual-column-icon">
                <BookOpen size={20} />
              </div>
              <h3>Teaching & Knowledge Sharing</h3>
            </div>

            {teachingExperience.map((item) => (
              <div key={item.id} className="cert-card glass-card">
                <div className="cert-card-header">
                  <h4 className="cert-title">{item.role}</h4>
                  <span className="badge">{item.period}</span>
                </div>

                <div className="cert-issuer" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span>{item.organization}</span>
                  <span style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>•</span>
                  <span style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>{item.location}</span>
                </div>

                <p className="cert-desc" style={{ marginBottom: "1rem" }}>
                  {item.summary}
                </p>

                <ul className="modal-features-list" style={{ marginBottom: "1rem" }}>
                  {item.contributions.map((point, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={15} style={{ color: "var(--accent-cyan)", minWidth: "15px", marginTop: "3px" }} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {item.topics.map((t, idx) => (
                    <span key={idx} className="badge">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Column 2: Education & Professional Training */}
          <div>
            <div className="dual-column-header">
              <div className="dual-column-icon">
                <Award size={20} />
              </div>
              <h3>Training, Awards & Education</h3>
            </div>

            {educationAndCertifications.map((item) => (
              <div key={item.id} className="cert-card glass-card">
                <div className="cert-card-header">
                  <h4 className="cert-title">{item.title}</h4>
                  {item.date && <span className="badge">{item.date}</span>}
                </div>

                <div className="cert-issuer">{item.issuer}</div>

                {item.achievement && (
                  <div className="cert-award-pill">
                    <Sparkles size={14} />
                    <span>{item.achievement}</span>
                  </div>
                )}

                <p className="cert-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
