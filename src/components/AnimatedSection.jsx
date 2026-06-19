import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 44, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function AnimatedSection({ id, className = "", children }) {
  return (
    <motion.section
      id={id}
      className={`section-shell ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-90px" }}
      variants={variants}
    >
      {children}
    </motion.section>
  );
}
