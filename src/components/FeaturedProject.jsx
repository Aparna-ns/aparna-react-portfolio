import React from "react";
import {
  ExternalLink,
  Github,
  CheckCircle2,
  FileText,
  Cpu,
  Layers,
  ArrowUpRight,
  ShieldCheck
} from "lucide-react";
import { featuredProject } from "../data/portfolioData";

export default function FeaturedProject() {
  return (
    <section id="featured" className="featured-project-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Featured Full-Stack Project</span>
          <h2 className="section-title">Automating Document Workflows</h2>
          <p className="section-subtitle">
            Demonstrating practical full-stack engineering, OCR text extraction, programmatic PDF manipulation, and containerized cloud deployment.
          </p>
        </div>

        <div className="featured-project-card glass-card">
          {/* Header */}
          <div className="featured-project-header">
            <div className="featured-title-wrap">
              <span className="featured-badge-pill">
                <ShieldCheck size={14} />
                {featuredProject.badge}
              </span>
              <h3 style={{ marginTop: "0.5rem" }}>{featuredProject.title}</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "1rem" }}>
                {featuredProject.shortDesc}
              </p>
            </div>

            <div className="featured-actions">
              {featuredProject.liveDemoUrl && (
                <a
                  href={featuredProject.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  title="Open live deployed demo on Render"
                >
                  <span>Live Demo</span>
                  <ArrowUpRight size={18} />
                </a>
              )}

              {featuredProject.githubUrl && (
                <a
                  href={featuredProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  title="View source code on GitHub"
                >
                  <Github size={18} />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>
          </div>

          {/* Project Body: Problem & Solution Narrative + Feature Box */}
          <div className="featured-project-body">
            <div className="featured-narrative">
              <h4>The Real-World Problem</h4>
              <p>{featuredProject.problem}</p>

              <h4>The Technical Solution</h4>
              <p>{featuredProject.solution}</p>
            </div>

            <div className="featured-features-box">
              <h4>
                <Layers size={18} className="gradient-text" />
                Key Engineered Capabilities
              </h4>
              <ul className="featured-features-list">
                {featuredProject.keyFeatures.map((feat, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={16} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer: Tech Stack Badges */}
          <div className="featured-footer">
            <div className="featured-tech-row">
              {featuredProject.techStack.map((tech, idx) => (
                <span key={idx} className="badge badge-primary">
                  {tech}
                </span>
              ))}
            </div>

            <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
              Continuous deployment via Docker & Render from GitHub
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
