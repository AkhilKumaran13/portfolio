import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import profileImage from '../photo/profile.jpeg';

import {
  Brain,
  ChevronDown,
  Code2,
  Download,
  Github,
  Linkedin,
  Mail,
  Menu,
  Sparkles,
  X
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;

        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const skills = {
    programming: ['Python', 'Java', 'C++', 'C'],
    aiml: ['Machine Learning Basics', 'Generative AI', 'Agentic AI'],
    web: ['HTML', 'CSS', 'JavaScript', 'React'],
    tools: ['VS Code', 'GitHub', 'Git'],
    other: ['DSA (C)', 'Problem Solving']
  };

  const projects = [
    {
      title: 'AI Lost & Found System',
      description:
        'Campus platform for posting lost and found items with AI-powered matching through image and text similarity, plus real-time user chat.',
      tech: ['Django', 'JavaScript', 'CLIP', 'all-MiniLM-L6-v2'],
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: 'Smart Expense Analyzer',
      description:
        'Expense tracking application that categorizes spending behavior and presents practical financial insights in a simple interface.',
      tech: ['Streamlit', 'Python', 'Data Analysis'],
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      title: 'Smart Routine AI',
      description:
        'AI-assisted schedule generator that creates personalized daily routines designed around focus, productivity, and consistency.',
      tech: ['Streamlit', 'Python', 'AI'],
      icon: <Code2 className="w-6 h-6" />
    }
  ];

  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
      <div className="app">
        <div className="bg-grid"></div>
        <div className="bg-gradient"></div>

        <motion.nav
          className="navbar"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="nav-container">
            <motion.div
              className="logo"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="logo-text">AK</div>
            </motion.div>

            <div className="nav-links">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`nav-link ${activeSection === item ? 'active' : ''}`}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </motion.button>
              ))}
              <motion.button
                className="theme-toggle"
                onClick={() => setIsDarkMode(!isDarkMode)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                {isDarkMode ? 'Light' : 'Dark'}
              </motion.button>
            </div>

            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {mobileMenuOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="mobile-nav-link"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </motion.div>
          )}
        </motion.nav>

        <section id="home" className="hero-section">
          <div className="hero-container">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <motion.div
                className="profile-image-container"
                initial={{ opacity: 0, scale: 0.82 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="profile-ring"></div>
                <div className="profile-ring-2"></div>
                <div className="profile-image">
                  <img src={profileImage} alt="Akhil Kumaran S" />
                </div>
              </motion.div>

              <motion.p
                className="hero-eyebrow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
              >
                Portfolio
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
              >
                <h1 className="hero-name">
                  <span className="gradient-text">Akhil Kumaran S</span>
                </h1>
              </motion.div>

              <motion.h2
                className="hero-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
              >
                Computer Science Student focused on AI engineering and product-driven development
              </motion.h2>

              <motion.p
                className="hero-tagline"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.65 }}
              >
                Building thoughtful AI products with a focus on practical problem-solving, strong fundamentals, and continuous growth.
              </motion.p>

              <motion.div
                className="hero-cta"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.75 }}
              >
                <button className="btn-primary" onClick={() => scrollToSection('projects')}>
                  View Projects
                </button>
                <button className="btn-secondary" onClick={() => scrollToSection('contact')}>
                  Contact Me
                </button>
              </motion.div>

              <motion.div
                className="social-links"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <a
                  href="https://github.com/akhilkumaran"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Github />
                </a>
                <a
                  href="https://www.linkedin.com/in/akhil-kumaran-s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Linkedin />
                </a>
                <a href="mailto:akhildevcoder@gmail.com" className="social-link">
                  <Mail />
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              className="scroll-indicator"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title">
                <span className="gradient-text">About Me</span>
              </h2>

              <div className="about-content">
                <div className="about-text">
                  <p className="about-paragraph">
                    I am a Computer Science and Engineering student at <span className="highlight">Rajalakshmi Engineering College</span>,
                    currently in my second year (4th semester). My strongest interests are in
                    <span className="highlight"> Generative AI</span>, <span className="highlight">Agentic AI</span>, and
                    <span className="highlight"> Machine Learning</span>.
                  </p>
                  <p className="about-paragraph">
                    I enjoy building projects that turn technical ideas into useful experiences. My work is shaped by curiosity,
                    structured learning, and a strong preference for solving real problems with simple, reliable solutions.
                  </p>
                  <p className="about-paragraph">
                    My long-term goal is to grow into an <span className="highlight">AI Engineer</span> who can design impactful
                    systems, contribute to ambitious products, and eventually take on broader innovation and leadership roles.
                  </p>

                  <div className="education-card">
                    <h3 className="education-title">Education</h3>
                    <div className="education-details">
                      <p className="education-degree">Bachelor of Engineering (CSE)</p>
                      <p className="education-school">Rajalakshmi Engineering College</p>
                      <p className="education-year">2024 - 2028</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title">
                <span className="gradient-text">Skills & Technologies</span>
              </h2>

              <div className="skills-grid">
                <motion.div className="skill-category" whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                  <div className="skill-category-header">
                    <Code2 className="skill-icon" />
                    <h3>Programming</h3>
                  </div>
                  <div className="skill-tags">
                    {skills.programming.map((skill, index) => (
                      <motion.span
                        key={index}
                        className="skill-tag"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.25, delay: index * 0.06 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                <motion.div className="skill-category" whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                  <div className="skill-category-header">
                    <Brain className="skill-icon" />
                    <h3>AI & ML</h3>
                  </div>
                  <div className="skill-tags">
                    {skills.aiml.map((skill, index) => (
                      <motion.span
                        key={index}
                        className="skill-tag"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.25, delay: index * 0.06 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                <motion.div className="skill-category" whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                  <div className="skill-category-header">
                    <Sparkles className="skill-icon" />
                    <h3>Web Development</h3>
                  </div>
                  <div className="skill-tags">
                    {skills.web.map((skill, index) => (
                      <motion.span
                        key={index}
                        className="skill-tag"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.25, delay: index * 0.06 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                <motion.div className="skill-category" whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                  <div className="skill-category-header">
                    <Code2 className="skill-icon" />
                    <h3>Tools & Other</h3>
                  </div>
                  <div className="skill-tags">
                    {[...skills.tools, ...skills.other].map((skill, index) => (
                      <motion.span
                        key={index}
                        className="skill-tag"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.25, delay: index * 0.06 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title">
                <span className="gradient-text">Featured Projects</span>
              </h2>
              <p className="section-subtitle">
                Selected work across AI experimentation, product thinking, and applied software development.
              </p>

              <div className="projects-grid">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    className="project-card"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    whileHover={{ y: -6 }}
                  >
                    <div className="project-content">
                      <div className="project-icon">{project.icon}</div>
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-description">{project.description}</p>
                      <div className="project-tech">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="project-note">
                        <small>Source link can be shared on request. Current builds have been tested locally.</small>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title">
                <span className="gradient-text">Let&apos;s Connect</span>
              </h2>
              <p className="section-subtitle">
                Open to internships, collaborations, and conversations around AI, software, and product ideas.
              </p>

              <div className="contact-grid">
                <motion.a
                  href="mailto:akhildevcoder@gmail.com"
                  className="contact-card"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <Mail className="contact-icon" />
                  <h3>Email</h3>
                  <p>akhildevcoder@gmail.com</p>
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/akhil-kumaran-s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <Linkedin className="contact-icon" />
                  <h3>LinkedIn</h3>
                  <p>Connect professionally</p>
                </motion.a>

                <motion.a
                  href="https://github.com/akhilkumaran"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <Github className="contact-icon" />
                  <h3>GitHub</h3>
                  <p>Explore selected work</p>
                </motion.a>
              </div>

              <motion.div
                className="resume-download"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <button className="btn-download">
                  <Download className="w-5 h-5" />
                  Download Resume
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <footer className="footer">
          <div className="footer-content">
            <p>© 2024 Akhil Kumaran S. Built with React.</p>
            <div className="footer-links">
              <a href="https://github.com/akhilkumaran" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/akhil-kumaran-s" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:akhildevcoder@gmail.com">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
