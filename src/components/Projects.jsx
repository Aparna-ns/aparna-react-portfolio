import React, { useState } from "react";
import {
  additionalProjects
} from "../data/portfolioData";
import {
  Github,
  ArrowUpRight,
  Info,
  CheckCircle2
} from "lucide-react";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Application Portfolio</span>
          <h2 className="section-title">Full-Stack & Web Implementations</h2>
          <p className="section-subtitle">
            Engineered web applications demonstrating database design, authentication, state management, and modern component design.
          </p>
        </div>

        <div className="projects-grid">
          {additionalProjects.map((project) => (
            <div key={project.id} className="project-card glass-card">
              <div className="project-card-header">
                <span className="badge badge-primary">{project.badge}</span>
                {project.statusText && (
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                    {project.statusText}
                  </span>
                )}
              </div>

              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-card-desc">{project.shortDesc}</p>

              <div className="project-features-preview">
                <h5>Core Features</h5>
                <ul className="preview-features-list">
                  {project.keyFeatures.slice(0, 3).map((feat, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={14} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="project-card-bottom">
                <div className="project-card-tech">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="badge">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-card-actions">
                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm"
                        title="Open live website"
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight size={14} />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary btn-sm"
                        title="View GitHub repository"
                      >
                        <Github size={14} />
                        <span>Code</span>
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="btn btn-outline btn-sm"
                    title="View architecture details"
                  >
                    <Info size={14} />
                    <span>Details</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
