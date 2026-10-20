import React from "react";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Edit3
} from "lucide-react";
import { professionalExperience } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Work History</span>
          <h2 className="section-title">Professional Software Experience</h2>
          <p className="section-subtitle">
            Current engineering position and core contributions to production web development, backend APIs, and database systems.
          </p>
        </div>

        {professionalExperience.map((job) => (
          <div key={job.id} className="experience-card glass-card">
            <div className="experience-header">
              <div>
                <h3 className="experience-role">{job.role}</h3>
                <span className="experience-company">{job.company}</span>
              </div>

              <div className="experience-meta">
                <span className="experience-period">
                  <Calendar size={15} />
                  <span>{job.period}</span>
                </span>
                <span className="experience-location">
                  <MapPin size={14} style={{ display: "inline", marginRight: "3px" }} />
                  {job.location}
                </span>
              </div>
            </div>

            <p className="experience-summary">{job.summary}</p>

            <ul className="experience-list">
              {job.responsibilities.map((resp, idx) => (
                <li key={idx}>
                  <CheckCircle2 size={16} />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>

            <div className="experience-tech-used">
              <span className="tech-used-label">Technologies:</span>
              {job.technologies.map((tech, idx) => (
                <span key={idx} className="badge">
                  {tech}
                </span>
              ))}
            </div>

            {job.editableNote && (
              <div className="experience-editable-badge">
                <Edit3 size={13} />
                <span>{job.editableNote}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
