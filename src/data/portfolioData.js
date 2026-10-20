export const personalInfo = {
  name: "Aparna NS",
  role: "Junior Software Engineer | Full Stack Developer",
  currentCompany: "Kompetenzen Technologies",
  headline: "Building practical web applications through clean code, thoughtful design, and reliable backend systems.",
  heroDescription:
    "Full Stack Software Developer experienced in Python, Django, React, PostgreSQL, REST APIs, and document automation. Focused on building maintainable applications, developing robust backend functionality, and delivering clean user experiences.",
  location: "Kochi, Kerala, India",
  email: "writetoaparnans@gmail.com",
  phone: "+91 79023 39267",
  github: "https://github.com/Aparna-ns",
  linkedin: "https://www.linkedin.com/in/aparna-ns-0b698333b/",
  portfolioUrl: "https://aparna-react-portfolio.netlify.app/",
  resumeUrl: "/Aparna_NS_Resume.pdf",
};

export const aboutMe = {
  summary: [
    "I am a software developer building full-stack web applications using Python, Django, React, and relational databases. My work and projects involve REST API development, document processing, OCR integration, database management, deployment, and frontend development.",
    "I have also worked with Python and SQL training and teaching, helping learners understand programming fundamentals and practical development concepts.",
    "I am interested in building maintainable applications, automating repetitive workflows, exploring AI technologies, and continuously improving my software engineering skills."
  ],
  highlights: [
    {
      title: "Full-Stack Development",
      description: "End-to-end web engineering pairing Django REST backends with responsive React component architectures."
    },
    {
      title: "Document Automation & OCR",
      description: "Automated extraction, splitting, and processing of multi-page scanned PDF documents using Tesseract and PyMuPDF."
    },
    {
      title: "Databases & APIs",
      description: "Structured relational modeling with PostgreSQL and MySQL, coupled with secure, well-documented RESTful endpoints."
    },
    {
      title: "Technical Mentorship",
      description: "Practical teaching background in Python and SQL fundamentals, guiding students through real application logic."
    }
  ]
};

export const skillCategories = [
  {
    id: "all",
    label: "All Skills"
  },
  {
    id: "backend",
    label: "Backend"
  },
  {
    id: "frontend",
    label: "Frontend"
  },
  {
    id: "database",
    label: "Databases"
  },
  {
    id: "ai-doc",
    label: "AI & Document Processing"
  },
  {
    id: "tools",
    label: "Tools & Deployment"
  }
];

export const skillsList = [
  {
    name: "Python",
    category: "backend",
    description: "Core language for backend systems, scripting, automation, and algorithmic data workflows.",
    tags: ["Python 3.x", "OOP", "Data Structures", "Automation"],
    featured: true
  },
  {
    name: "Django & Django REST Framework",
    category: "backend",
    description: "Architecting MTV backends, RESTful API endpoints, serialization, authentication, and custom ORM logic.",
    tags: ["DRF", "REST APIs", "Django ORM", "Auth"],
    featured: true
  },
  {
    name: "React.js",
    category: "frontend",
    description: "Building responsive single-page applications with reusable components, hooks, state, and clean UI logic.",
    tags: ["React 18+", "Hooks", "Component Architecture", "Vite"],
    featured: true
  },
  {
    name: "JavaScript (ES6+)",
    category: "frontend",
    description: "Modern JavaScript programming, asynchronous promises, DOM handling, and client-side data binding.",
    tags: ["ES6+", "Async/Await", "Fetch/Axios", "Modular JS"],
    featured: false
  },
  {
    name: "PostgreSQL & SQL",
    category: "database",
    description: "Relational database schema modeling, normalized tables, complex queries, joins, and indexing.",
    tags: ["PostgreSQL", "SQL Joins", "Constraints", "Schema Design"],
    featured: true
  },
  {
    name: "MySQL",
    category: "database",
    description: "Database administration, CRUD operations, transactions, and integration with Django ORM.",
    tags: ["MySQL", "Relational DB", "Stored Data", "Transactions"],
    featured: false
  },
  {
    name: "Tesseract OCR & Document Extraction",
    category: "ai-doc",
    description: "Optical Character Recognition pipeline for extracting text from scanned multi-document packages.",
    tags: ["OCR", "Tesseract", "Pattern Matching", "Data Extraction"],
    featured: true
  },
  {
    name: "PyMuPDF & PDF Automation",
    category: "ai-doc",
    description: "Programmatic PDF parsing, page extraction, splitting based on cover sheets, and automated file output.",
    tags: ["PyMuPDF", "PDF Splitting", "File I/O", "Document Automation"],
    featured: true
  },
  {
    name: "Docker Containerization",
    category: "tools",
    description: "Containerizing Django and OCR microservices with Dockerfile and system dependency isolation.",
    tags: ["Docker", "Containerization", "Multi-stage Builds", "Linux"],
    featured: false
  },
  {
    name: "Git & GitHub",
    category: "tools",
    description: "Version control workflows, branch management, code collaboration, and automated CI/CD triggers.",
    tags: ["Git", "GitHub", "Version Control", "Collaboration"],
    featured: false
  },
  {
    name: "Deployment: Render & Netlify",
    category: "tools",
    description: "Hosting full-stack applications with Render (Django/Docker backend) and Netlify (React frontend).",
    tags: ["Render", "Netlify", "Cloud Hosting", "Continuous Deploy"],
    featured: true
  },
  {
    name: "HTML5, CSS3 & Bootstrap",
    category: "frontend",
    description: "Semantic web markup, responsive flexbox/grid styling, design tokens, and Bootstrap layouts.",
    tags: ["HTML5", "CSS Grid", "Flexbox", "Bootstrap 5"],
    featured: false
  }
];

export const featuredProject = {
  id: "document-process-manager",
  title: "Document Process Manager",
  badge: "Primary Featured Project",
  shortDesc:
    "A full-stack web application that processes combined PDF documents and automates document extraction, identification, splitting, storage, and downloading.",
  problem:
    "Organizations frequently receive combined, multi-page scanned PDF bundles containing various distinct documents (such as invoices, agreements, or applications). Manually inspecting hundreds of pages to find document numbers, separating individual cover pages, splitting the files, and indexing them is labor-intensive and prone to human error.",
  solution:
    "Built an end-to-end automated processing pipeline where users upload bulk PDF bundles. The backend uses Tesseract OCR to scan cover pages, detects reference document numbers, programmatically splits the file into distinct PDF documents using PyMuPDF, saves metadata to PostgreSQL, and serves the files via REST API to a responsive React frontend for instant preview and download.",
  techStack: [
    "React.js",
    "Bootstrap 5",
    "Django REST Framework",
    "Python",
    "PostgreSQL",
    "Tesseract OCR",
    "PyMuPDF",
    "Docker",
    "Render",
    "Git / GitHub"
  ],
  keyFeatures: [
    "Bulk multi-page PDF upload with format verification",
    "OCR text extraction from scanned document cover pages via Tesseract",
    "Automatic document number detection & reference identification",
    "Automated PDF splitting into individual single-document files using PyMuPDF",
    "Persistent document metadata storage & retrieval in PostgreSQL",
    "Interactive React interface with upload status, document list, and one-click download",
    "Containerized deployment with Docker on Render with automated GitHub deployment"
  ],
  liveDemoUrl: "https://document-processing-sysytem.onrender.com",
  githubUrl: "https://github.com/Aparna-ns/document_processing_sysytem",
  isVerified: true
};

export const additionalProjects = [
  {
    id: "django-ecommerce",
    title: "Django Full-Stack E-Commerce Application",
    badge: "Full-Stack Application",
    shortDesc:
      "A complete e-commerce web platform featuring user authentication, product catalog filtering, cart dynamics, and administrative inventory control.",
    problem:
      "Modern web commerce requires secure user authentication, reliable state synchronization between cart operations and the backend, and intuitive administrative control over product inventories.",
    solution:
      "Implemented a full-stack Django web application with secure session-based authentication, relational product categorization, cart management with dynamic pricing calculation, and a comprehensive Django Admin portal.",
    techStack: [
      "Python",
      "Django",
      "PostgreSQL",
      "JavaScript",
      "HTML5 / CSS3",
      "Git"
    ],
    keyFeatures: [
      "User authentication, secure login, registration, and user session management",
      "Dynamic product catalog with category-based filtering and instant search",
      "Interactive cart management with real-time total price and quantity calculations",
      "Checkout workflow recording orders with relational database integrity",
      "Comprehensive Django Admin dashboard for product, category, and order oversight"
    ],
    githubUrl: "https://github.com/Aparna-ns/ecommerce",
    liveDemoUrl: null, // Editable placeholder
    statusText: "Repository available • Live demo on request"
  },
  {
    id: "personal-portfolio",
    title: "Personal Developer Portfolio",
    badge: "Frontend & Architecture",
    shortDesc:
      "A fast, responsive, recruiter-focused developer portfolio built with React, Vite, and custom CSS design tokens with full dark/light theme support.",
    problem:
      "Developer portfolios often suffer from template bloat, exaggerated claims, or non-functional buttons, reducing credibility with engineering recruiters.",
    solution:
      "Engineered a streamlined, accessible, and high-performance React portfolio showcasing real-world projects, verified skills, and transparent professional experience with zero external CSS frameworks.",
    techStack: [
      "React.js",
      "Vite",
      "Modern CSS",
      "Glassmorphism",
      "Lucide Icons",
      "Netlify"
    ],
    keyFeatures: [
      "Accessible component-driven React architecture built with Vite",
      "Persistent dark and light themes using custom CSS design tokens",
      "Dedicated featured project spotlight with architecture breakdown",
      "Mobile-first responsive layout with collapsible navigation",
      "Instant recruiter action bar with direct email, LinkedIn, and resume download",
      "Deployed and automated via Netlify continuous deployment"
    ],
    githubUrl: "https://github.com/Aparna-ns",
    liveDemoUrl: "https://aparna-react-portfolio.netlify.app/",
    statusText: "Live & Deployed on Netlify"
  }
];

export const professionalExperience = [
  {
    id: "kompetenzen",
    role: "Junior Software Engineer",
    company: "Kompetenzen Technologies",
    period: "August 2026 – Present",
    status: "Present",
    location: "Kochi, Kerala, India",
    type: "Full-Time",
    isLatest: true,
    summary:
      "Working on full-stack web application development, backend RESTful services, database management, and deployment pipelines.",
    responsibilities: [
      "Developing and maintaining backend services and REST APIs using Python and Django.",
      "Collaborating on frontend integration using React.js and modern JavaScript to deliver responsive user experiences.",
      "Designing and querying relational databases using PostgreSQL to support application features.",
      "Working with document processing workflows, file handling, and web application deployment procedures.",
      "Participating in collaborative team workflows, version control with Git, and software quality maintenance."
    ],
    technologies: [
      "Python",
      "Django",
      "REST APIs",
      "React.js",
      "PostgreSQL",
      "Git"
    ],
    editableNote:
      "Responsibilities reflect verified core focus areas. Team-specific project names can be expanded here as projects release."
  }
];

export const teachingExperience = [
  {
    id: "techolas-training",
    role: "Python & SQL Trainer / Mentor",
    organization: "Techolas Technologies",
    location: "Kochi, Kerala, India",
    period: "July 2025 – July 2026",
    summary:
      "Conducted practical training sessions and technical mentorship in Python programming, SQL databases, and full-stack development concepts.",
    contributions: [
      "Delivered hands-on training sessions in Python programming, object-oriented concepts, and SQL database querying.",
      "Guided learners through full-stack web concepts, including Django MTV architecture and React frontend fundamentals.",
      "Mentored students through coding exercises, practical debugging sessions, and real-world project problem solving.",
      "Taught best practices for code organization, clean architecture, and version control fundamentals with Git."
    ],
    topics: ["Python 3", "SQL Queries", "Django Basics", "React Fundamentals", "Debugging & Git"]
  }
];

export const educationAndCertifications = [
  {
    id: "ai-training",
    title: "AI Training Program",
    issuer: "Techolas Technologies Pvt. Ltd., Kochi",
    achievement: "Recognized with Best Award for Outstanding Project Performance",
    type: "Professional Training & Award",
    description:
      "Completed comprehensive training in AI concepts, Python programming, and practical software implementation. Recognized with the Best Award for demonstrated project excellence."
  },
  {
    id: "fullstack-django",
    title: "Fullstack Python Django Development",
    issuer: "Focus Technolab, Kochi",
    date: "Completed 07/2025",
    type: "Professional Certification",
    description:
      "Intensive practical training program specializing in Python backend engineering, Django MVC architecture, RESTful API development, database operations, and JavaScript integration."
  },
  {
    id: "btech",
    title: "B.Tech in Electronics & Communication",
    issuer: "Mahatma Gandhi University, Kottayam",
    date: "08/2014 – 08/2018",
    type: "Academic Degree",
    description:
      "Foundational engineering coursework in system architecture, digital electronics, microprocessor systems, algorithms, and computational principles."
  }
];

