import React, { useState, useEffect } from "react";
import "./styles.css";

const baseUrl = import.meta.env.BASE_URL || "./";

const links = {
  email: "mailto:shashankkudha51@gmail.com",
  rawEmail: "shashankkudha51@gmail.com",
  phone: "tel:+916302421538",
  rawPhone: "+91 6302421538",
  linkedin: "https://www.linkedin.com/in/shashank-kudha-5ba284252/",
  github: "https://github.com/Shashank51-code",
  payroll: "https://github.com/shashank51-code/EmployeePayrollSystem",
  helpdesk: "https://github.com/shashank51-code/InternalHelpdeskTicketSystem",
  resume: `${baseUrl}Shashank_Kudha_Resume.pdf`,
};

const skillCategories = [
  {
    category: "Languages",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    skills: ["Java"],
  },
  {
    category: "Backend Development",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
    skills: ["Spring Boot", "Spring Data JPA", "Hibernate", "RESTful APIs"],
  },
  {
    category: "Databases",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    skills: ["PostgreSQL", "MySQL"],
  },
  {
    category: "Tools",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
    skills: ["Git", "GitHub", "Postman", "Maven"],
  },
  {
    category: "Core Concepts",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
    skills: ["OOP", "Collections", "Exception Handling", "SQL", "DBMS", "DSA"],
  },
];

const projects = [
  {
    title: "Employee Payroll Management System – Backend",
    category: "backend",
    subtitle: "Enterprise payroll calculations, payslip generation & 15+ REST APIs",
    date: "Apr 2026 – Jun 2026",
    tech: ["Java", "Spring Boot", "Spring Data JPA", "Hibernate", "PostgreSQL", "REST APIs"],
    href: links.payroll,
    impact: "Engineered comprehensive backend payroll covering 15+ REST APIs, payslip generation, and automated monthly net salary calculation.",
    bullets: [
      "Implemented employee management features including add, view, update, delete, and search, along with department creation and employee-to-department assignment.",
      "Built payroll module to generate monthly payroll by calculating basic salary, allowances, deductions, and final net salary for each employee.",
      "Designed payslip generation and viewing functionality with payroll history to store, view, and search past monthly records.",
      "Applied layered architecture using Spring Boot, Hibernate, and PostgreSQL, and validated 15+ REST APIs across all modules using Postman.",
    ],
    architecture: "Built with layered architecture using Spring Boot, Spring Data JPA, Hibernate, and PostgreSQL, with comprehensive validation of 15+ REST APIs via Postman."
  },
  {
    title: "Internal Helpdesk Ticket Management System – Backend",
    category: "backend",
    subtitle: "Ticket lifecycle tracking, engineer assignment & 10+ REST APIs",
    date: "Jan 2026 – Mar 2026",
    tech: ["Java", "Spring Boot", "Spring Data JPA", "Hibernate", "PostgreSQL", "REST APIs"],
    href: links.helpdesk,
    impact: "Created complete internal helpdesk ticketing platform with support engineer assignment, multi-stage status workflows, and 10+ Postman API tests.",
    bullets: [
      "Developed user management covering creation, updates, deletion, and profile viewing, with department setup and user-to-department assignment.",
      "Created ticket management system to create, view, update, and delete tickets, including assigning and reassigning tickets to support engineers.",
      "Managed ticket status tracking across open, in-progress, resolved, and closed stages, with comment functionality for adding and viewing updates.",
      "Built dashboard to display total, open, closed, and pending tickets, and verified all module endpoints through 10+ REST API tests in Postman.",
    ],
    architecture: "Employed Spring Boot layered backend with Spring Data JPA & Hibernate for ticket-user associations, comment threads, and stage tracking, tested across 10+ endpoints in Postman."
  },
];

function ExternalLink({ href, children, className = "", ...props }) {
  const isExternal = href.startsWith("http");
  return (
    <a 
      className={className} 
      href={href} 
      target={isExternal ? "_blank" : undefined} 
      rel={isExternal ? "noopener noreferrer" : undefined}
      {...props}
    >
      {children}
    </a>
  );
}

function SplashScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Initializing backend environment...");
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        const next = prev + 5;
        if (next >= 30 && next < 60) {
          setStatusText("Booting Spring Boot & API microservices...");
        } else if (next >= 60 && next < 90) {
          setStatusText("Configuring PostgreSQL & AI evaluation pipelines...");
        } else if (next >= 90) {
          setStatusText("Systems initialized. Welcome to portfolio!");
        }
        return next;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const exitTimer = setTimeout(() => {
        setIsExiting(true);
        const hideTimer = setTimeout(() => {
          onComplete();
        }, 550);
        return () => clearTimeout(hideTimer);
      }, 300);
      return () => clearTimeout(exitTimer);
    }
  }, [progress, onComplete]);

  const handleSkip = () => {
    setIsExiting(true);
    setTimeout(() => {
      onComplete();
    }, 300);
  };

  return (
    <aside className={`intro-splash-screen ${isExiting ? "exiting" : ""}`} aria-label="Loading portfolio">
      <button className="intro-skip-btn" onClick={handleSkip}>
        Skip Intro ✕
      </button>

      <div className="intro-ambient-glow" />

      <div className="intro-content-box">
        <div className="intro-logo-ring-wrapper">
          <div className="intro-spinning-ring" />
          <div className="intro-logo-center">SK</div>
        </div>

        <h1 className="intro-title">
          Shashank <span className="gradient-text">Kudha</span>
        </h1>

        <div className="intro-subtitle">
          <span>&gt; {statusText}</span>
          <span className="intro-terminal-cursor" />
        </div>

        <div className="intro-progress-wrapper">
          <div className="intro-progress-bar-bg">
            <div className="intro-progress-bar-fill" style={{ width: `${progress}%` }} />
          </div>
          <div className="intro-progress-stats">
            <span>PORTFOLIO_OS</span>
            <span>{progress}%</span>
          </div>
        </div>
      </div>
    </aside>
  );
}

function App() {
  const [showSplash, setShowSplash] = useState(true);

  // Theme State
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio-theme-shashank") || "dark";
  });

  // Scroll Progress
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Mobile Menu State
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toast Notification
  const [toastMessage, setToastMessage] = useState("");

  // Projects Filter & Expanded View
  const [projectFilter, setProjectFilter] = useState("all");
  const [expandedProject, setExpandedProject] = useState(null);

  // Contact Form State
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [formSending, setFormSending] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme-shashank", theme);
  }, [theme]);

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
      setShowBackToTop(window.scrollY > 350);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [projectFilter]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage("");
    }, 3200);
  };

  const copyEmail = () => {
    const email = links.rawEmail;
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(email)
        .then(() => showToast("Email copied to clipboard! ✨"))
        .catch(() => fallbackCopy(email));
    } else {
      fallbackCopy(email);
    }
  };

  const fallbackCopy = (text) => {
    try {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand("copy");
      textArea.remove();
      showToast("Email copied to clipboard! ✨");
    } catch {
      showToast(`Email: ${text}`);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.message) return;
    
    setFormSending(true);

    fetch("https://formsubmit.co/ajax/shashankkudha51@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: contactForm.name,
        email: contactForm.email || "No email provided",
        message: contactForm.message
      })
    })
    .then((res) => res.json())
    .then(() => {
      setFormSending(false);
      setContactForm({ name: "", email: "", message: "" });
      showToast("Message sent successfully! 🚀");
    })
    .catch(() => {
      setFormSending(false);
      const subject = encodeURIComponent(`Portfolio Inquiry from ${contactForm.name}`);
      const body = encodeURIComponent(
        `Hi Shashank,\n\n${contactForm.message}\n\nBest,\n${contactForm.name}\nEmail: ${contactForm.email || 'N/A'}`
      );
      window.open(`mailto:${links.rawEmail}?subject=${subject}&body=${body}`, "_blank");
      showToast("Opening your email client... 🚀");
    });
  };

  const filteredProjects = projects.filter(p => {
    if (projectFilter === "all") return true;
    return p.category === projectFilter;
  });

  return (
    <>
      {/* Opening Intro Splash Screen */}
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}

      {/* Scroll Progress Bar */}
      <div className="scroll-progress-container">
        <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />
      </div>

      {/* Sticky Glass Navbar */}
      <header className="navbar">
        <div className="nav-container">
          <a href="#top" className="nav-brand">
            <div className="nav-logo-badge">SK</div>
            <span>Shashank Kudha</span>
            <div className="nav-status-indicator">
              <span className="status-dot"></span>
              <span>Open to Opportunities</span>
            </div>
          </a>

          <nav>
            <ul className={`nav-links ${mobileMenuOpen ? "open" : ""}`}>
              <li><a href="#about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About</a></li>
              <li><a href="#experience" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Experience</a></li>
              <li><a href="#skills" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Skills</a></li>
              <li><a href="#projects" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Projects</a></li>
              <li><a href="#education" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Education</a></li>
              <li><a href="#contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
            </ul>
          </nav>

          <div className="nav-right-actions">
            <button 
              className="theme-toggle-btn" 
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>

            <a href="#contact" className="button primary" style={{ minHeight: "40px", padding: "0 18px", fontSize: "0.88rem" }}>
              Let's Talk
            </a>

            <button 
              className="mobile-menu-btn" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileMenuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Main Resume Shell */}
      <main className="resume-shell">
        {/* Hero Section */}
        <section className="hero" id="top">
          <div className="hero-copy">
            <span className="eyebrow">
              <span className="status-dot"></span>
              Java Backend Developer
            </span>
            <h1>
              Hi, I'm <span className="gradient-text">Shashank Kudha</span>
            </h1>
            <p className="lead">
              Java Backend Developer with hands-on experience in building RESTful APIs and CRUD applications using Spring Boot, Spring Data JPA, Hibernate, and PostgreSQL. Proficient in layered architecture, JPA/Hibernate mappings, and API testing with Postman. Eager to contribute to scalable backend systems.
            </p>

            <div className="hero-actions" aria-label="Primary portfolio actions">
              <ExternalLink className="button primary" href={links.resume}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Resume
              </ExternalLink>

              <a className="button secondary" href="#projects">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <line x1="3" y1="9" x2="21" y2="9" />
                  <line x1="9" y1="21" x2="9" y2="9" />
                </svg>
                Explore Projects
              </a>

              <button className="button secondary" onClick={copyEmail} title="Copy email address to clipboard">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
                Copy Email
              </button>

              <ExternalLink className="button secondary icon-btn" href={links.linkedin} aria-label="LinkedIn Profile">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.86 0 1.55-.7 1.55-1.55a1.55 1.55 0 0 0-1.55-1.55 1.55 1.55 0 0 0-1.55 1.55c0 .85.69 1.55 1.55 1.55m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                </svg>
              </ExternalLink>

              <ExternalLink className="button secondary icon-btn" href={links.github} aria-label="GitHub Profile">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                </svg>
              </ExternalLink>
            </div>

            <div className="contact-quick-strip">
              <span className="contact-quick-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Hyderabad, India
              </span>
              <ExternalLink className="contact-quick-item" href={links.phone}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +91 6302421538
              </ExternalLink>
              <button className="contact-quick-item" onClick={copyEmail} style={{ background: "none", border: "none", cursor: "pointer" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                shashankkudha51@gmail.com
              </button>
            </div>
          </div>

          {/* Portrait Container */}
          <div className="hero-visual">
            <div className="portrait-glow-ring"></div>

            <div className="portrait-card">
              <div className="portrait-img-wrapper">
                <img 
                  src={`${baseUrl}profile.jpg`} 
                  alt="Shashank Kudha" 
                  onError={(e) => {
                    if (!e.currentTarget.dataset.retried) {
                      e.currentTarget.dataset.retried = "true";
                      e.currentTarget.src = "./profile.jpg";
                    }
                  }}
                />
              </div>
            </div>

            {/* Floating Info Chips */}
            <div className="floating-chip chip-one">
              <div className="chip-icon">☕</div>
              <div>
                <span style={{ display: "block", fontSize: "0.72rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Core Stack</span>
                <span>Java + Spring Boot</span>
              </div>
            </div>

            <div className="floating-chip chip-two">
              <div className="chip-icon green">🛠️</div>
              <div>
                <span style={{ display: "block", fontSize: "0.72rem", color: "var(--text-muted)", textTransform: "uppercase" }}>Database & APIs</span>
                <span>PostgreSQL + REST</span>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="metrics-section reveal" aria-label="Key accomplishments">
          <div className="metrics-grid">
            {[
              { number: "15+", label: "REST APIs Validated", desc: "Payroll & compensation endpoints tested in Postman" },
              { number: "10+", label: "Helpdesk Endpoints", desc: "Ticket lifecycle, dashboard & user management" },
              { number: "Layered", label: "Architecture", desc: "Spring Boot, Spring Data JPA, Hibernate & PostgreSQL" },
              { number: "Post-Training", label: "LLM Evaluation", desc: "Annotation & dataset quality intern at Ethara AI" },
            ].map((m) => (
              <div className="metric-card" key={m.label}>
                <div className="metric-number">{m.number}</div>
                <div className="metric-label">{m.label}</div>
                <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "4px" }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="section reveal" id="about">
          <div className="section-header">
            <span className="eyebrow">About Me</span>
            <h2>Architecting resilient backend systems with modern engineering rigor.</h2>
            <p className="section-sub">
              Hands-on Java backend engineering, layered Spring Boot architectures, and rigorous API validation.
            </p>
          </div>

          <div className="about-card">
            <div className="about-text">
              <p>
                I am a Java Backend Developer with hands-on experience in building RESTful APIs and CRUD applications using Spring Boot, Spring Data JPA, Hibernate, and PostgreSQL.
              </p>
              <p>
                Proficient in layered architecture, JPA/Hibernate mappings, and API testing with Postman. Experienced in developing payroll and helpdesk ticketing backend systems, with a strong focus on clean code, database normalization, and scalable backend services.
              </p>
            </div>

            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                    <line x1="6" y1="6" x2="6.01" y2="6" />
                    <line x1="6" y1="18" x2="6.01" y2="18" />
                  </svg>
                </div>
                <div>
                  <strong>Spring Boot & Layered Architecture</strong>
                  <p>Controller, Service, Repository patterns with Hibernate/JPA object relational mapping.</p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </svg>
                </div>
                <div>
                  <strong>RESTful APIs & Postman Testing</strong>
                  <p>Validated 15+ payroll endpoints and 10+ helpdesk ticket endpoints across complete CRUD cycles.</p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <ellipse cx="12" cy="5" rx="9" ry="3" />
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                  </svg>
                </div>
                <div>
                  <strong>PostgreSQL & MySQL Databases</strong>
                  <p>Designed relational schemas, foreign key constraints, and optimized queries for business logic.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="section reveal" id="experience">
          <div className="section-header">
            <span className="eyebrow">Work History</span>
            <h2>Experience</h2>
            <p className="section-sub">Professional internship and model evaluation experience.</p>
          </div>

          <div className="experience-timeline">
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-card">
                <div className="timeline-header">
                  <div className="timeline-title">
                    <h3>LLM Post-Training Intern</h3>
                    <div className="timeline-company">Ethara AI</div>
                  </div>
                  <span className="timeline-period-badge">Feb 2026 – Apr 2026</span>
                </div>

                <ul className="timeline-bullets">
                  <li className="timeline-bullet-item">
                    Reviewed LLM-generated responses for correctness, coherence, relevance, and instruction-following to support model improvement efforts.
                  </li>
                  <li className="timeline-bullet-item">
                    Identified incomplete, inconsistent, and low-quality responses from daily outputs and reported them to enhance overall dataset quality.
                  </li>
                  <li className="timeline-bullet-item">
                    Applied structured annotation guidelines while reviewing repeated response sets, maintaining consistent accuracy and meeting daily deadlines.
                  </li>
                  <li className="timeline-bullet-item">
                    Collaborated with team members and quality leads to resolve feedback issues, improving evaluation consistency across the annotation process.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Matrix */}
        <section className="section reveal" id="skills">
          <div className="section-header">
            <span className="eyebrow">Capabilities</span>
            <h2>Technical Toolkit</h2>
            <p className="section-sub">Tools, frameworks, and technologies I use to build robust software systems.</p>
          </div>

          <div className="skills-grid">
            {skillCategories.map((group) => (
              <div className="skill-category-card" key={group.category}>
                <div className="skill-cat-header">
                  <div className="skill-cat-icon">{group.icon}</div>
                  <h3>{group.category}</h3>
                </div>
                <div className="skill-tags-wrapper">
                  {group.skills.map((s) => (
                    <span className="skill-pill" key={s}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Showcase */}
        <section className="section reveal" id="projects">
          <div className="section-header">
            <span className="eyebrow">Portfolio Work</span>
            <h2>Featured Projects</h2>
            <p className="section-sub">Backend applications designed for reliability, concurrency, and security.</p>
          </div>

          <div className="project-filters">
            <button 
              className={`filter-btn ${projectFilter === "all" ? "active" : ""}`}
              onClick={() => setProjectFilter("all")}
            >
              All Systems ({projects.length})
            </button>
            <button 
              className={`filter-btn ${projectFilter === "backend" ? "active" : ""}`}
              onClick={() => setProjectFilter("backend")}
            >
              Backend & APIs
            </button>
          </div>

          <div className="project-grid">
            {filteredProjects.map((project, index) => {
              const isExpanded = expandedProject === index;
              return (
                <article className="project-card" key={project.title}>
                  <div className="project-top-bar">
                    <span className="project-date">{project.date}</span>
                    <div className="project-links">
                      <ExternalLink className="project-icon-link" href={project.href} aria-label={`View ${project.title} on GitHub`}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </ExternalLink>
                    </div>
                  </div>

                  <h3>{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>

                  <div className="project-impact-badge">
                    <strong>Impact:</strong> {project.impact}
                  </div>

                  <ul className="project-bullets">
                    {project.bullets.map((b) => (
                      <li className="project-bullet" key={b}>{b}</li>
                    ))}
                  </ul>

                  {/* Expandable Architecture Drawer */}
                  {isExpanded && (
                    <div style={{
                      padding: "12px",
                      marginBottom: "16px",
                      borderRadius: "var(--radius-sm)",
                      background: "rgba(99, 102, 241, 0.08)",
                      border: "1px dashed rgba(99, 102, 241, 0.3)",
                      fontSize: "0.85rem",
                      color: "var(--text-secondary)",
                      lineHeight: "1.5"
                    }}>
                      <strong style={{ display: "block", color: "var(--accent-primary)", marginBottom: "4px" }}>Architecture Highlight:</strong>
                      {project.architecture}
                    </div>
                  )}

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                    <button 
                      onClick={() => setExpandedProject(isExpanded ? null : index)}
                      style={{ fontSize: "0.82rem", color: "var(--accent-primary)", fontWeight: "700", textDecoration: "underline" }}
                    >
                      {isExpanded ? "Hide Architecture ▲" : "View Architecture Note ▼"}
                    </button>
                    <ExternalLink href={project.href} style={{ fontSize: "0.82rem", fontWeight: "700", color: "var(--text-secondary)" }}>
                      Source Code →
                    </ExternalLink>
                  </div>

                  <div className="project-tech-tags">
                    {project.tech.map((t) => (
                      <span className="tech-tag" key={t}>{t}</span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Education & Certifications Section */}
        <section className="section reveal" id="education">
          <div className="section-header">
            <span className="eyebrow">Academic & Industry Credentials</span>
            <h2>Education & Certifications</h2>
            <p className="section-sub">Formal computer science, engineering degrees, and professional certifications.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px", maxWidth: "1000px", margin: "0 auto" }}>
            <div className="credential-column-card" style={{ margin: 0 }}>
              <h3>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent-primary)" }}>
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
                Education
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div className="edu-box">
                  <h4>B.Tech – Computer Science and Engineering (AI & ML)</h4>
                  <p>Institute of Aeronautical Engineering, Hyderabad</p>
                  <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center" }}>
                    <span className="edu-score-pill">GPA: 7.05 / 10</span>
                    <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>May 2026</span>
                  </div>
                </div>

                <div className="edu-box">
                  <h4>Diploma</h4>
                  <p>T.R.R. College of Technology, Hyderabad</p>
                  <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center" }}>
                    <span className="edu-score-pill">GPA: 6.8 / 10</span>
                    <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>May 2023</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="credential-column-card" style={{ margin: 0 }}>
              <h3>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent-primary)" }}>
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                Certifications
              </h3>

              <div className="edu-box">
                <h4>Salesforce Certification</h4>
                <p>Salesforce Certified Credential</p>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center" }}>
                  <span className="edu-score-pill" style={{ background: "rgba(99, 102, 241, 0.12)", color: "var(--accent-primary)", borderColor: "rgba(99, 102, 241, 0.3)" }}>
                    Verified
                  </span>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Apr 2025</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section reveal" id="contact">
          <div className="contact-section-card">
            <div className="contact-left">
              <span className="eyebrow">Get In Touch</span>
              <h2>Let's connect and build something impactful.</h2>
              <p>
                Interested in discussing Java backend engineering roles, Spring Boot architectures, or LLM evaluation pipelines? Feel free to reach out directly.
              </p>

              <div className="contact-channels">
                <div className="contact-channel-item" onClick={copyEmail} style={{ cursor: "pointer" }} role="button" tabIndex={0}>
                  <div className="channel-left">
                    <div className="channel-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Email Me</div>
                      <div>shashankkudha51@gmail.com</div>
                    </div>
                  </div>
                  <span style={{ fontSize: "0.82rem", color: "var(--accent-primary)", fontWeight: "700" }}>Copy 📋</span>
                </div>

                <ExternalLink className="contact-channel-item" href={links.phone}>
                  <div className="channel-left">
                    <div className="channel-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Call Directly</div>
                      <div>+91 6302421538</div>
                    </div>
                  </div>
                  <span style={{ fontSize: "0.82rem", color: "var(--accent-primary)", fontWeight: "700" }}>Call ↗</span>
                </ExternalLink>

                <ExternalLink className="contact-channel-item" href={links.linkedin}>
                  <div className="channel-left">
                    <div className="channel-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.86 0 1.55-.7 1.55-1.55a1.55 1.55 0 0 0-1.55-1.55 1.55 1.55 0 0 0-1.55 1.55c0 .85.69 1.55 1.55 1.55m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>LinkedIn Network</div>
                      <div>Shashank Kudha</div>
                    </div>
                  </div>
                  <span style={{ fontSize: "0.82rem", color: "var(--accent-primary)", fontWeight: "700" }}>Connect ↗</span>
                </ExternalLink>
              </div>
            </div>

            {/* Quick Interactive Message Form */}
            <form className="quick-message-card" onSubmit={handleSendMessage}>
              <h3 style={{ fontSize: "1.2rem", color: "var(--text-primary)" }}>Send a Quick Note</h3>
              
              <div className="form-group">
                <label htmlFor="shashank-contact-name">Your Name</label>
                <input 
                  id="shashank-contact-name" 
                  type="text" 
                  placeholder="e.g. Alex Smith"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="shashank-contact-email">Your Email (Optional)</label>
                <input 
                  id="shashank-contact-email" 
                  type="email" 
                  placeholder="alex@example.com"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="shashank-contact-message">Message</label>
                <textarea 
                  id="shashank-contact-message" 
                  rows="4" 
                  placeholder="Tell me about your project or role inquiry..."
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  required
                />
              </div>

              <button type="submit" className="button primary" style={{ width: "100%", marginTop: "8px" }} disabled={formSending}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
                {formSending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="portfolio-footer">
          <div>
            © {new Date().getFullYear()} Shashank Kudha. Built with React & Vite.
          </div>
          <div className="footer-links">
            <ExternalLink href={links.github}>GitHub</ExternalLink>
            <ExternalLink href={links.linkedin}>LinkedIn</ExternalLink>
            <a href="#top">Back to Top ↑</a>
          </div>
        </footer>
      </main>

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button 
          className="back-to-top-btn" 
          onClick={scrollToTop} 
          aria-label="Scroll back to top"
          title="Scroll back to top"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </button>
      )}

      {/* Toast Notification Alert */}
      {toastMessage && (
        <div className="toast-banner" role="alert">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span>{toastMessage}</span>
        </div>
      )}
    </>
  );
}

export default App;
