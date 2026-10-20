import React, { useEffect } from "react";
import { X, CheckCircle2, Github, ExternalLink, ArrowUpRight } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close project details"
        >
          <X size={20} />
        </button>

        <h3 className="modal-title">{project.title}</h3>
        <div className="modal-badge">
          <span className="badge badge-primary">{project.badge}</span>
        </div>

        <h4 className="modal-section-title">Problem Statement</h4>
        <p className="modal-text">{project.problem}</p>

        <h4 className="modal-section-title">Implemented Architecture</h4>
        <p className="modal-text">{project.solution}</p>

        <h4 className="modal-section-title">Key Engineered Features</h4>
        <ul className="modal-features-list">
          {project.keyFeatures.map((feature, idx) => (
            <li key={idx}>
              <CheckCircle2 size={16} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <h4 className="modal-section-title">Technologies Used</h4>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
          {project.techStack.map((tech, idx) => (
            <span key={idx} className="badge">
              {tech}
            </span>
          ))}
        </div>

        <div className="modal-footer">
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              <span>View Live Demo</span>
              <ArrowUpRight size={16} />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
            >
              <Github size={16} />
              <span>Source Repository</span>
            </a>
          )}

          <button onClick={onClose} className="btn btn-outline btn-sm">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

