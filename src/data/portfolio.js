import {
  FaGithub,
  FaLinkedin,
  FaJava,
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt
} from "react-icons/fa";
import {
  SiJavascript,
  SiMysql,
  SiTensorflow,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiTailwindcss,
  SiVite,
  SiSpringboot,
  SiSocketdotio
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export const personal = {
  name: "Bhavesh Sonawane",
  role: "Aspiring Java Developer",
  college: "Trinity Academy of Engineering",
  email: "bhaveshsonawane135@gmail.com",
  phone: "+91 9359899689",
  github: "https://github.com/BSonawan",
  linkedin: "https://www.linkedin.com/in/bhavesh-sonawane-b84100341/",
  typingRoles: [
    "MCA Student",
    "Java Developer",
    "Machine Learning Enthusiast",
    "Future Software Engineer"
  ]
};

export const socials = [
  { label: "GitHub", href: personal.github, icon: FaGithub },
  { label: "LinkedIn", href: personal.linkedin, icon: FaLinkedin }
];

export const skills = [
  {
    group: "Programming",
    items: [
      { name: "Java", icon: FaJava, href: "https://www.java.com/" },
      { name: "Python", icon: FaPython, href: "https://www.python.org/" },
      { name: "SQL", icon: SiMysql, href: "https://www.mysql.com/" },
      { name: "JavaScript", icon: SiJavascript, href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" }
    ]
  },
  {
    group: "Machine Learning",
    items: [
      { name: "TensorFlow", icon: SiTensorflow, href: "https://www.tensorflow.org/" },
      { name: "Pandas", icon: SiPandas, href: "https://pandas.pydata.org/" },
      { name: "NumPy", icon: SiNumpy, href: "https://numpy.org/" },
      { name: "Scikit-Learn", icon: SiScikitlearn, href: "https://scikit-learn.org/" }
    ]
  },
  {
    group: "Web Development",
    items: [
      { name: "HTML", icon: FaHtml5, href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
      { name: "CSS", icon: FaCss3Alt, href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
      { name: "React", icon: FaReact, href: "https://react.dev/" },
      { name: "Tailwind CSS", icon: SiTailwindcss, href: "https://tailwindcss.com/" }
    ]
  },
  {
    group: "Tools",
    items: [
      { name: "Git", icon: FaGitAlt, href: "https://git-scm.com/" },
      { name: "GitHub", icon: FaGithub, href: "https://github.com/" },
      { name: "VS Code", icon: VscVscode, href: "https://code.visualstudio.com/" },
      { name: "MySQL", icon: SiMysql, href: "https://www.mysql.com/" }
    ]
  }
];

export const educationTimeline = [
  {
    year: "Current",
    title: "MCA Program",
    place: "Trinity Academy of Engineering",
    description:
      "Building strong foundations in software engineering, Java development, database systems, web technologies, and intelligent systems."
  },
  {
    year: "Focus",
    title: "Career Preparation",
    place: "Software Engineering Path",
    description:
      "Improving technical depth through projects, certifications, machine learning practice, and full-stack application development."
  },
  {
    year: "Goal",
    title: "Future Software Engineer and Entrepreneur",
    place: "Technology Driven Career",
    description:
      "Aiming to create practical products, contribute to professional teams, and build scalable solutions with real-world value."
  }
];

export const projects = [
  {
    title: "FlowerSense AI",
    category: "Machine Learning",
    description:
      "An intelligent flower classification and recognition system using machine learning and computer vision techniques.",
    details:
      "FlowerSense AI identifies flower species from uploaded images and returns accurate classification results using a trained ML workflow supported by Python data libraries.",
    role: "ML workflow, preprocessing, model training, and prediction flow",
    impact: "Turns image input into practical species predictions through a trained computer vision pipeline.",
    features: [
      "Image upload and flower species prediction",
      "Dataset preprocessing with Python data libraries",
      "Model training workflow for classification"
    ],
    learning: "Improved understanding of image classification, model evaluation, and ML project structure.",
    tech: ["Python", "TensorFlow", "NumPy", "Pandas", "Machine Learning"],
    color: "from-cyan-400 to-emerald-400",
    github: personal.github,
    live: "#"
  },
  {
    title: "Intranet Chatting Application with Whiteboard",
    category: "Realtime Collaboration",
    description:
      "A real-time communication platform with messaging, group chats, file sharing, and collaborative whiteboard features.",
    details:
      "Designed for organizations and educational institutions, this app supports authentication, WebSocket communication, shared files, and an interactive whiteboard workspace.",
    role: "Backend logic, realtime communication flow, database structure, and UI integration",
    impact: "Helps teams communicate inside a local network with messaging and shared visual collaboration.",
    features: [
      "Realtime one-to-one and group messaging",
      "Collaborative whiteboard workspace",
      "File sharing and authenticated access"
    ],
    learning: "Strengthened Java, Spring Boot, WebSocket, and database-backed application development.",
    tech: ["Java", "Spring Boot", "WebSocket", "MySQL", "HTML", "CSS", "JavaScript"],
    icons: [SiSpringboot, SiSocketdotio],
    color: "from-blue-500 to-violet-500",
    github: personal.github,
    live: "#"
  },
  {
    title: "Campus Connect",
    category: "Campus Platform",
    description:
      "A campus communication platform connecting students and faculty through announcements, events, and academic resources.",
    details:
      "Campus Connect centralizes dashboards, campus updates, academic resource sharing, event notifications, and faculty-student communication.",
    role: "Application planning, frontend screens, database flow, and feature implementation",
    impact: "Brings important campus communication into one organized student-friendly platform.",
    features: [
      "Announcements, events, and academic resources",
      "Student and faculty communication support",
      "Central dashboard for campus updates"
    ],
    learning: "Practiced full-stack thinking, database design, and user-focused feature planning.",
    tech: ["Java", "MySQL", "HTML", "CSS", "JavaScript"],
    color: "from-fuchsia-500 to-cyan-400",
    github: personal.github,
    live: "#"
  }
];

export const certifications = [
  "Java Development Foundations",
  "Machine Learning Practice",
  "Full Stack Web Development",
  "Database Management with MySQL"
];

export const achievements = [
  {
    title: "College Chess Competition Winner",
    description: "Demonstrated focus, strategy, and decision-making under pressure."
  },
  {
    title: "NSS Volunteer",
    description: "Contributed to community-focused initiatives with teamwork and responsibility."
  }
];

export const navItems = ["home", "about", "skills", "education", "projects", "certifications", "achievements", "contact"];
