import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { FaArrowUp, FaEnvelope, FaExternalLinkAlt, FaGithub, FaPhoneAlt } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import AnimatedSection from "./components/AnimatedSection";
import BackgroundFX from "./components/BackgroundFX";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import SectionHeading from "./components/SectionHeading";
import {
  achievements,
  certifications,
  educationTimeline,
  personal,
  projects,
  skills,
  socials
} from "./data/portfolio";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  return (
    <section id="home" className="hero-section mockup-hero">
      <h1 className="sr-only">{personal.name} portfolio</h1>
      <motion.a
        className="hero-mascot"
        href="#about"
        aria-label="Click to know more about Bhavesh"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img src="/bhavesh-interface-reference.png" alt="" />
      </motion.a>
      <motion.a
        className="hero-click-cue"
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.34, duration: 0.65 }}
      >
        <span className="mouse-icon" />
        <strong>Click on Me</strong>
        <span>to explore my world</span>
      </motion.a>
    </section>
  );
}

function SocialDock() {
  return (
    <div className="social-dock" aria-label="Social and contact links">
      {socials.map((social) => {
        const Icon = social.icon;
        return (
          <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}>
            <Icon />
          </a>
        );
      })}
      <a href={`mailto:${personal.email}`} aria-label="Email Bhavesh">
        <FaEnvelope />
      </a>
    </div>
  );
}

function About() {
  return (
    <AnimatedSection id="about">
      <SectionHeading kicker="About Me" title="Java Developer | Machine Learning Enthusiast | Future Software Engineer." />
      <div className="about-grid">
        <div className="glass-card about-card">
          <div className="about-copy">
            <a className="about-cta" href="#about-details">
          
            </a>
            <p id="about-details">
  Hi, I'm <strong>{personal.name}</strong>, an MCA student at {personal.college}
   with a strong interest in Java development, machine learning, and full-stack
  application development.
</p>

<p>
  I enjoy building practical software solutions that address real-world challenges.
  Some of my projects include <strong>Campus Connect</strong>, a platform designed
  to improve communication and collaboration within educational institutions;
  <strong> Intranet Chatting Application</strong> with a collaborative Whiteboard
  feature for real-time interaction; and <strong>FlowerSense AI</strong>, a machine
  learning-based application focused on intelligent plant and flower recognition.
</p>

<p>
  What sets me apart is my ability to combine traditional software engineering
  with artificial intelligence to create innovative and user-focused solutions.
  I am passionate about learning new technologies, experimenting with new ideas,
  and turning concepts into functional products.
</p>

<p>
  My goal is to become a skilled software engineer and entrepreneur by building
  impactful technology, continuously improving my technical expertise, and
  contributing to meaningful projects that solve real-world problems.
</p>
          </div>
        </div>
        <div className="timeline">
          {educationTimeline.map((item) => (
            <div className="timeline-item" key={item.title}>
              <span>{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

function Skills() {
  return (
    <AnimatedSection id="skills">
      <SectionHeading kicker="Skills" title="Animated technology cards across programming, AI, web, and tools." />
      <div className="skills-grid">
        {skills.map((group) => (
          <motion.div className="glass-card skill-group tilt-card" key={group.group} whileHover={{ y: -10, rotateX: 4, rotateY: -4 }}>
            <h3>{group.group}</h3>
            <div className="skill-list">
              {group.items.map((skill) => {
                const Icon = skill.icon;
                return (
                  <a className="skill-chip" key={skill.name} href={skill.href} target="_blank" rel="noreferrer">
                    <Icon />
                    <span>{skill.name}</span>
                  </a>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
}

function Education() {
  return (
    <AnimatedSection id="education">
      <SectionHeading kicker="Education" title="Academic foundation shaped for software engineering." />
      <div className="education-card glass-card">
        <div>
          <p className="section-kicker">Trinity Academy of Engineering</p>
          <h3>MCA Program</h3>
          <p>
            Developing expertise in Java, database management, web development, machine learning,
            and software project execution.
          </p>
        </div>
        <div className="achievement-strip">
          <span>Academic Growth</span>
          <span>Project Learning</span>
          <span>Career Ready</span>
        </div>
      </div>
    </AnimatedSection>
  );
}

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div
        className="project-modal glass-card"
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 20 }}
        onClick={(event) => event.stopPropagation()}
      >
        <button className="modal-close" type="button" onClick={onClose} aria-label="Close project details">
          x
        </button>
        <p className="section-kicker">{project.category}</p>
        <h3>{project.title}</h3>
        <p>{project.details}</p>
        <div className="project-detail-grid">
          <div>
            <strong>My Role</strong>
            <p>{project.role}</p>
          </div>
          <div>
            <strong>Impact</strong>
            <p>{project.impact}</p>
          </div>
          <div>
            <strong>Learning</strong>
            <p>{project.learning}</p>
          </div>
        </div>
        <ul className="project-feature-list">
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        <div className="tech-pills">
          {project.tech.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <AnimatedSection id="projects">
      <SectionHeading kicker="Projects" title="Practical builds with clear roles, features, and learning outcomes." />
      <div className="project-grid">
        {projects.map((project) => (
          <motion.article className="project-card glass-card tilt-card" key={project.title} whileHover={{ y: -12, rotateX: 3, rotateY: 3 }}>
            <div className={`project-shot bg-gradient-to-br ${project.color}`}>
              <div className="project-window">
                <span />
                <span />
                <span />
              </div>
              <strong>{project.category}</strong>
              <span className="project-shot-label">{project.title}</span>
            </div>
            <div className="project-body">
              <p className="section-kicker">{project.category}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="project-feature-list compact">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <div className="tech-pills">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <div className="project-actions">
                <a className="mini-btn" href={project.github} target="_blank" rel="noreferrer">
                  <FaGithub /> GitHub
                </a>
                {project.live && project.live !== "#" ? (
                  <a className="mini-btn" href={project.live} target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                ) : (
                  <span className="mini-btn is-disabled">
                    <FaExternalLinkAlt /> Demo Soon
                  </span>
                )}
                <button className="mini-btn" type="button" onClick={() => setSelectedProject(project)}>
                  Details
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </AnimatedSection>
  );
}

function Certifications() {
  return (
    <AnimatedSection id="certifications">
      <SectionHeading kicker="Certifications" title="Continuous learning through focused technical tracks." />
      <div className="cert-grid">
        {certifications.map((cert, index) => (
          <motion.div className="glass-card cert-card" key={cert} whileHover={{ scale: 1.04, rotate: index % 2 ? 1 : -1 }}>
            <span>0{index + 1}</span>
            <h3>{cert}</h3>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
}

function Achievements() {
  return (
    <AnimatedSection id="achievements">
      <SectionHeading kicker="Achievements" title="Strategy, responsibility, and leadership beyond code." />
      <div className="achievement-grid">
        {achievements.map((achievement) => (
          <motion.div className="glass-card achievement-card" key={achievement.title} whileHover={{ y: -8, scale: 1.02 }}>
            <h3>{achievement.title}</h3>
            <p>{achievement.description}</p>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
}

function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");

  const sendEmail = async (event) => {
    event.preventDefault();
    setStatus("Sending...");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("Add EmailJS values in .env to enable sending.");
      return;
    }

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, { publicKey });
      formRef.current.reset();
      setStatus("Message sent successfully.");
    } catch {
      setStatus("Message failed. Please email directly.");
    }
  };

  return (
    <AnimatedSection id="contact">
      <SectionHeading kicker="Contact" title="Let us build something useful, intelligent, and scalable." />
      <div className="contact-grid">
        <form className="glass-card contact-form" ref={formRef} onSubmit={sendEmail}>
          <label>
            Full Name
            <input name="from_name" type="text" required />
          </label>
          <label>
            Email Address
            <input name="from_email" type="email" required />
          </label>
          <label>
            Phone Number
            <input name="phone" type="tel" />
          </label>
          <label>
            Subject
            <input name="subject" type="text" required />
          </label>
          <label className="full-span">
            Message
            <textarea name="message" rows="5" required />
          </label>
          <button className="btn btn-primary full-span" type="submit">
            <FiSend /> Send Message
          </button>
          {status && <p className="form-status full-span">{status}</p>}
        </form>

        <div className="glass-card contact-card">
          <a href={`mailto:${personal.email}`}>
            <FaEnvelope /> {personal.email}
          </a>
          <a href={`tel:${personal.phone.replaceAll(" ", "")}`}>
            <FaPhoneAlt /> {personal.phone}
          </a>
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                <Icon /> {social.label} Profile
              </a>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>{personal.name}</strong>
        <p>Copyright {new Date().getFullYear()} | Future Software Engineer and Entrepreneur</p>
      </div>
      <div className="footer-actions">
        {socials.map((social) => {
          const Icon = social.icon;
          return (
            <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}>
              <Icon />
            </a>
          );
        })}
        <a href="#home" aria-label="Back to top">
          <FaArrowUp />
        </a>
      </div>
    </footer>
  );
}

export default function App() {
  useEffect(() => {
    gsap.utils.toArray(".tilt-card").forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 42 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 88%" }
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <>
      <BackgroundFX />
      <ScrollProgress />
      <Navbar />
      <SocialDock />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
