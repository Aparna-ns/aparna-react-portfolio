import React, { useState } from "react";
import {
  skillCategories,
  skillsList
} from "../data/portfolioData";
import {
  Terminal,
  Code2,
  Database,
  FileSearch,
  Wrench,
  Check
} from "lucide-react";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const getCategoryIcon = (category) => {
    switch (category) {
      case "backend":
        return <Terminal size={22} />;
      case "frontend":
        return <Code2 size={22} />;
      case "database":
        return <Database size={22} />;
      case "ai-doc":
        return <FileSearch size={22} />;
      case "tools":
      default:
        return <Wrench size={22} />;
    }
  };

  const filteredSkills =
    activeCategory === "all"
      ? skillsList
      : skillsList.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Technical Competencies</span>
          <h2 className="section-title">Verified Technical Skills</h2>
          <p className="section-subtitle">
            Grouped by architectural domain. Every capability is grounded in production experience or verified project implementations.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="skills-tabs" role="tablist">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeCategory === cat.id}
              className={`skills-tab-btn ${activeCategory === cat.id ? "active" : ""}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill, idx) => (
            <div key={idx} className="skill-card glass-card">
              <div className="skill-card-top">
                <div className="skill-card-header">
                  <div className="skill-icon-wrap">
                    {getCategoryIcon(skill.category)}
                  </div>
                  <h3 className="skill-title">{skill.name}</h3>
                </div>
                <p className="skill-description">{skill.description}</p>
              </div>

              <div className="skill-tags">
                {skill.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="badge">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
