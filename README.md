# Aparna NS — Full Stack Software Developer Portfolio

Modern, recruiter-focused portfolio engineered with **React 18**, **Vite**, and **custom CSS design tokens**. Reflects real-world software engineering experience, production projects, verified technical skills, and professional growth.

## 🚀 Live Demo & Profiles
- **Live Portfolio:** [https://aparna-react-portfolio.netlify.app/](https://aparna-react-portfolio.netlify.app/)
- **LinkedIn:** [https://www.linkedin.com/in/aparna-ns-0b698333b/](https://www.linkedin.com/in/aparna-ns-0b698333b/)
- **GitHub:** [https://github.com/Aparna-ns](https://github.com/Aparna-ns)
- **Email:** [writetoaparnans@gmail.com](mailto:writetoaparnans@gmail.com)

---

## 🛠️ Tech Stack & Key Features
- **Frontend Framework:** React 18, Vite
- **Icons:** Lucide React
- **Styling:** Custom CSS design system with Dark/Light theme toggles, responsive grid layouts, and glassmorphism.
- **Accessibility:** Semantic HTML5, ARIA labels, accessible navigation, and WCAG AA contrast compliance.
- **Deployment:** Netlify with automatic build & redirects configuration (`netlify.toml`).

---

## 📂 Project Structure
```text
├── public/
│   ├── favicon.svg              # Brand icon
│   └── Aparna_NS_Resume.pdf     # Verified professional resume
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Responsive navigation + theme toggle
│   │   ├── Hero.jsx             # Role headline, verified CTAs & stack card
│   │   ├── About.jsx            # Authentic developer philosophy & highlights
│   │   ├── Skills.jsx           # Categorized skills (no arbitrary percentages)
│   │   ├── FeaturedProject.jsx  # Document Process Manager spotlight
│   │   ├── Projects.jsx         # Full-stack implementations
│   │   ├── ProjectModal.jsx     # Deep architectural drill-down
│   │   ├── Experience.jsx       # Junior Software Engineer @ Kompetenzen
│   │   ├── TeachingAndCertifications.jsx # Python/SQL Training & Awards
│   │   ├── Contact.jsx          # Working mailto form & copy actions
│   │   └── Footer.jsx           # Semantic footer
│   ├── data/
│   │   └── portfolioData.js     # Single source of truth for all content
│   ├── App.jsx                  # Root state & theme persistence
│   ├── index.css                # Cohesive design tokens & animations
│   └── main.jsx                 # Vite React entrypoint
├── netlify.toml                 # Netlify deploy configuration
├── package.json
└── vite.config.js
```

---

## 💻 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production (Netlify)
npm run build
```

