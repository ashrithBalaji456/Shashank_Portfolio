import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Code2, 
  Database, 
  Terminal, 
  Settings, 
  Layers, 
  Send, 
  ExternalLink,
  Menu,
  X,
  CheckCircle2,
  ChevronRight,
  Sun,
  Moon
} from 'lucide-react';
import ParticleBackground from './components/ParticleBackground';
import './App.css';

// Custom inline SVG components for brand icons that are missing in Lucide v1+
const Github = ({ size = 20, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 20, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

function App() {
  const [theme, setTheme] = useState('dark');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Synchronize body class list with theme
  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  // Track page scroll to style navbar dynamically
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Set up scroll reveal Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Simulate sending message
    setFormSubmitted(true);
    
    // Clear form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    // Dismiss toast notification after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="app-container">
      {/* Dynamic Particle Canvas Background */}
      <ParticleBackground theme={theme} />

      {/* Navigation Header */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
            <a href="#hero" className="logo-container" onClick={closeMobileMenu}>
              <span>Shashank.dev</span>
            </a>
            <div className="nav-status-badge">
              <span className="pulse-dot"></span>
              <span>Open to Opportunities</span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
            {/* Desktop Navigation Links */}
            <ul className="nav-links">
              <li><a href="#hero" className="nav-link">Home</a></li>
              <li><a href="#skills" className="nav-link">Skills</a></li>
              <li><a href="#experience" className="nav-link">Experience</a></li>
              <li><a href="#projects" className="nav-link">Projects</a></li>
              <li><a href="#education" className="nav-link">Education</a></li>
              <li><a href="#contact" className="nav-link">Contact</a></li>
            </ul>

            {/* Theme Toggle Button */}
            <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle Theme">
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile menu expanded state */}
        {mobileMenuOpen && (
          <div style={{
            background: theme === 'dark' ? 'rgba(5, 10, 24, 0.95)' : 'rgba(243, 244, 246, 0.98)',
            borderBottom: '1px solid var(--border-color)',
            position: 'absolute',
            width: '100%',
            left: 0,
            padding: '1.5rem',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
          }}>
            <ul style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.2rem',
              listStyle: 'none',
              textAlign: 'center'
            }}>
              <li><a href="#hero" className="nav-link" onClick={closeMobileMenu}>Home</a></li>
              <li><a href="#skills" className="nav-link" onClick={closeMobileMenu}>Skills</a></li>
              <li><a href="#experience" className="nav-link" onClick={closeMobileMenu}>Experience</a></li>
              <li><a href="#projects" className="nav-link" onClick={closeMobileMenu}>Projects</a></li>
              <li><a href="#education" className="nav-link" onClick={closeMobileMenu}>Education</a></li>
              <li><a href="#contact" className="nav-link" onClick={closeMobileMenu}>Contact</a></li>
            </ul>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="section hero-section tech-hero">
        {/* Background Code and Circuit Board Traces Underlays */}
        <div className="tech-underlay code-underlay">
          <pre>
{`@RestController
public class UserController {
    @Autowired
    private UserService userService;
    
    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUser(
            @PathVariable Long id) {
        User user = userService.getUserById(id);
        return ResponseEntity.ok(user);
    }
    
    @PostMapping("/users")
    public ResponseEntity<User> createUser(
            @RequestBody User user) {
        User createdUser = userService.save(user);
        return ResponseEntity.status(201).body(
                createdUser);
    }
}`}
          </pre>
        </div>
        
        <div className="tech-underlay circuit-underlay">
          <svg width="100%" height="100%" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50 H300 L350 100 V250 L400 300 H550" stroke="rgba(10, 102, 194, 0.12)" strokeWidth="1.5" strokeDasharray="5 5" />
            <path d="M150 120 H280 L320 160 V220 L360 260 H500" stroke="rgba(139, 92, 246, 0.08)" strokeWidth="1.5" />
            <path d="M50 350 H200 L250 300 V150 L300 100 H450" stroke="rgba(10, 102, 194, 0.1)" strokeWidth="1.5" />
            <circle cx="550" cy="300" r="4" fill="rgba(10, 102, 194, 0.3)" />
            <circle cx="500" cy="260" r="3" fill="rgba(139, 92, 246, 0.2)" />
            <circle cx="450" cy="100" r="4.5" fill="rgba(10, 102, 194, 0.3)" />
          </svg>
        </div>

        <div className="hero-content reveal-onload">
          <h1 className="hero-name-new">
            Shashank <span className="blue-text">Kudha</span>
          </h1>
          
          <div className="hero-separator">
            <span className="separator-dot"></span>
          </div>
          
          <h2 className="hero-title-new">Java Backend Developer</h2>
          <div className="hero-tags-new">
            <span>Spring Boot</span>
            <span className="tag-divider">|</span>
            <span>SQL</span>
            <span className="tag-divider">|</span>
            <span>JavaScript</span>
          </div>

          <div className="hero-opportunities-row">
            <a href="#contact" className="opportunities-badge-pill">
              <Briefcase size={16} />
              <span>Open to Opportunities</span>
            </a>
            
            <div className="tech-icon-boxes">
              <div className="tech-icon-box" title="Java Console / Terminal">
                <Terminal size={16} />
              </div>
              <div className="tech-icon-box" title="Database">
                <Database size={16} />
              </div>
              <div className="tech-icon-box" title="JavaScript">
                <span className="js-icon-text">JS</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-avatar-container reveal-onload-delay">
          <div className="avatar-wrapper">
            <img src="/profile.jpg" alt="Shashank Kudha" className="avatar-image" />
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section id="skills" className="section">
        <h2 className="section-title reveal">Technical Skills</h2>
        <div className="skills-grid">
          {/* Languages */}
          <div className="glass-card skill-category reveal" style={{ transitionDelay: '0.05s' }}>
            <div className="skill-header">
              <Terminal size={20} />
              <h3>Languages</h3>
            </div>
            <div className="skill-tags">
              <span className="skill-tag">Java</span>
              <span className="skill-tag">SQL</span>
            </div>
          </div>

          {/* Backend Stack */}
          <div className="glass-card skill-category reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="skill-header">
              <Code2 size={20} />
              <h3>Backend Development</h3>
            </div>
            <div className="skill-tags">
              <span className="skill-tag">Spring Boot</span>
              <span className="skill-tag">Spring Security</span>
              <span className="skill-tag">Spring Cloud</span>
              <span className="skill-tag">Spring Data JPA</span>
              <span className="skill-tag">Hibernate</span>
              <span className="skill-tag">REST APIs</span>
            </div>
          </div>

          {/* Databases */}
          <div className="glass-card skill-category reveal" style={{ transitionDelay: '0.15s' }}>
            <div className="skill-header">
              <Database size={20} />
              <h3>Databases</h3>
            </div>
            <div className="skill-tags">
              <span className="skill-tag">MySQL</span>
              <span className="skill-tag">PostgreSQL</span>
            </div>
          </div>

          {/* Tools & Platforms */}
          <div className="glass-card skill-category reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="skill-header">
              <Settings size={20} />
              <h3>Tools & Platforms</h3>
            </div>
            <div className="skill-tags">
              <span className="skill-tag">Git</span>
              <span className="skill-tag">GitHub</span>
              <span className="skill-tag">Docker</span>
              <span className="skill-tag">Postman</span>
            </div>
          </div>

          {/* Core Concepts */}
          <div className="glass-card skill-category reveal" style={{ transitionDelay: '0.25s' }}>
            <div className="skill-header">
              <Layers size={20} />
              <h3>Core Concepts</h3>
            </div>
            <div className="skill-tags">
              <span className="skill-tag">Data Structures & Algorithms</span>
              <span className="skill-tag">OOP</span>
              <span className="skill-tag">DBMS</span>
              <span className="skill-tag">API Testing</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <h2 className="section-title reveal">Experience</h2>
        <div className="timeline">
          <div className="timeline-item reveal">
            <div className="timeline-dot"></div>
            <div className="glass-card timeline-card">
              <div className="timeline-header">
                <div>
                  <h3 className="role-title">LLM Fine-Tuning Intern</h3>
                  <h4 className="company-name">Ethara AI</h4>
                </div>
                <span className="timeline-date">Feb 2026 -- Apr 2026</span>
              </div>
              <ul className="bullet-list">
                <li>Evaluated LLM-generated responses across correctness, coherence, relevance, and instruction-following criteria during a 3-month internship.</li>
                <li>Reviewed and analyzed 500+ LLM-generated responses, identifying quality issues and contributing to dataset refinement efforts.</li>
                <li>Applied structured annotation guidelines across 100+ evaluation tasks while maintaining high accuracy and meeting project deadlines.</li>
                <li>Collaborated with a team of 5+ reviewers to resolve feedback and improve consistency in response evaluation workflows.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2 className="section-title reveal">Projects</h2>
        <div className="projects-grid">
          {/* Employee Payroll System */}
          <div className="glass-card project-card reveal" style={{ transitionDelay: '0.05s' }}>
            <div className="project-icon-row">
              <Briefcase size={28} />
              <div className="project-links">
                <a href="https://github.com/shashank51-code/EmployeePayrollSystem" target="_blank" rel="noopener noreferrer" className="icon-link" title="View Source on GitHub">
                  <Github size={18} />
                </a>
              </div>
            </div>
            <h3 className="project-title">Employee Payroll Management System</h3>
            <p className="project-desc">
              A comprehensive backend payroll administration system covering employee records, department reports, salary calculations, and payment logs. Implements secure role-based API endpoints.
            </p>
            <div className="project-tech" style={{ marginBottom: '1.5rem' }}>
              <span className="tech-badge">Java</span>
              <span className="tech-badge">Spring Boot</span>
              <span className="tech-badge">Spring Security</span>
              <span className="tech-badge">REST APIs</span>
              <span className="tech-badge">PostgreSQL</span>
            </div>
            <ul className="bullet-list" style={{ fontSize: '0.9rem' }}>
              <li>Developed backend payroll covering 5+ modules (salary processing, payslip, reports).</li>
              <li>Architected REST APIs for 6+ workflows (employee records & transaction trails).</li>
              <li>Secured endpoints with Spring Security, 2 user roles, and BCrypt encryption.</li>
            </ul>
          </div>

          {/* Bank Management System */}
          <div className="glass-card project-card reveal" style={{ transitionDelay: '0.15s' }}>
            <div className="project-icon-row">
              <Database size={28} />
              <div className="project-links">
                <a href="https://github.com/shashank51-code/BankManagementSystem" target="_blank" rel="noopener noreferrer" className="icon-link" title="View Source on GitHub">
                  <Github size={18} />
                </a>
              </div>
            </div>
            <h3 className="project-title">Bank Management System</h3>
            <p className="project-desc">
              Engineered banking backend system automating user accounts, transactions, transfers, and balance search queries. Employs secure Pin hashing and file serialization databases.
            </p>
            <div className="project-tech" style={{ marginBottom: '1.5rem' }}>
              <span className="tech-badge">Java</span>
              <span className="tech-badge">REST APIs</span>
              <span className="tech-badge">Java Serialization</span>
              <span className="tech-badge">SHA-256</span>
              <span className="tech-badge">PostgreSQL</span>
            </div>
            <ul className="bullet-list" style={{ fontSize: '0.9rem' }}>
              <li>Engineered backend banking supporting 8+ core financial operations.</li>
              <li>Automated transfers, searches, statements, and status freezing/unfreezing.</li>
              <li>Secured customer pins using SHA-256 hashing and serialized storage mechanisms.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section">
        <h2 className="section-title reveal">Education</h2>
        <div className="glass-card edu-card reveal">
          <div className="edu-header">
            <div className="degree-container">
              <h3 className="institution">Institute of Aeronautical Engineering, Hyderabad</h3>
              <span className="degree">B.Tech in Computer Science and Engineering (AI & ML)</span>
            </div>
            <span className="timeline-date">Graduated: April 2026</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <GraduationCap size={22} style={{ color: 'var(--primary)' }} />
            <span className="gpa-tag">GPA: 7.05 / 10.0</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section" style={{ paddingBottom: '7rem' }}>
        <h2 className="section-title reveal">Get In Touch</h2>
        <div className="contact-container">
          <div className="contact-info reveal">
            <div className="glass-card contact-card reveal" style={{ transitionDelay: '0.05s' }}>
              <div className="contact-icon">
                <Mail size={20} />
              </div>
              <div className="contact-details">
                <h4>Email</h4>
                <a href="mailto:shashankkudha51@gmail.com">shashankkudha51@gmail.com</a>
              </div>
            </div>

            <div className="glass-card contact-card reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="contact-icon">
                <Phone size={20} />
              </div>
              <div className="contact-details">
                <h4>Phone</h4>
                <a href="tel:+916302421538">+91 6302421538</a>
              </div>
            </div>

            <div className="glass-card contact-card reveal" style={{ transitionDelay: '0.15s' }}>
              <div className="contact-icon">
                <MapPin size={20} />
              </div>
              <div className="contact-details">
                <h4>Location</h4>
                <p>Hyderabad, India</p>
              </div>
            </div>
          </div>

          <div className="glass-card contact-form-card reveal" style={{ transitionDelay: '0.2s' }}>
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label className="form-label">Name</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input" 
                  placeholder="Your Name" 
                  required 
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input" 
                  placeholder="your.email@example.com" 
                  required 
                />
              </div>
              <div className="form-group">
                <label className="form-label">Subject</label>
                <input 
                  type="text" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="form-input" 
                  placeholder="Inquiry Subject" 
                />
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea 
                  name="message" 
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-input form-textarea" 
                  placeholder="Your Message..." 
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                <span>Send Message</span>
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Toast popup feedback notification */}
      {formSubmitted && (
        <div style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          display: 'flex',
          alignItems: 'center',
          gap: '0.8rem',
          background: '#0a1d37',
          border: '1px solid var(--primary)',
          borderRadius: '8px',
          padding: '1rem 1.5rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
          zIndex: 1000,
          animation: 'slideIn 0.3s ease-out'
        }}>
          <CheckCircle2 style={{ color: '#10b981' }} />
          <div>
            <h4 style={{ color: 'white', fontSize: '0.95rem', fontWeight: 600 }}>Message Sent!</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Thank you, Shashank will get back to you shortly.</p>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>© 2026 Shashank Kudha. All rights reserved.</p>
          <p>Built with Java-inspired backend discipline, React, and Vite.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
