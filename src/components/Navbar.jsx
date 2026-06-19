import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navItems, personal } from "../data/portfolio";

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      className="nav-wrap"
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <nav className="navbar" aria-label="Primary navigation">
        <a href="#home" className="brand-mark">
          <strong>Bhavesh<span>.</span></strong>
        </a>
        <div className="nav-links">
          {navItems.filter((item) => !["home", "education", "certifications"].includes(item)).map((item) => (
            <a key={item} href={`#${item}`} className={active === item ? "active" : ""}>
              {item}
            </a>
          ))}
        </div>
        <a className="nav-resume" href="/Bhavesh-Sonawane-Resume.pdf" download>
          Resume
        </a>
      </nav>
    </motion.header>
  );
}
