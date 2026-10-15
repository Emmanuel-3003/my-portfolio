import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, ArrowDown, FileText } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="hero section">
      <div className="hero-content">
        <p className="eyebrow">
          HELLO, I'M EMMANUEL GABRIEL
        </p>

        <h1>
          Building web applications with{" "}
          <span className="accent">Java & React.</span>
        </h1>

        <h2>Java Full Stack Developer</h2>

        <p className="hero-description">
          I work in application support and am developing my skills
          in Java, Spring Boot, REST APIs, SQL and React by building
          full-stack applications.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            Explore Projects <ArrowDown size={20} />
          </a>

          <a
            href="/resume.pdf"
            className="btn btn-outline"
            target="_blank"
            rel="noreferrer"
          >
            <FileText size={18} /> View Resume
          </a>
        </div>

        <div className="social-links">
          <a
            href="https://github.com/Emmanuel-3003"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/emmanuel-gabriel3003"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="code-card">
          <div className="code-card-header">
            <span></span><span></span><span></span>
            <p>Developer.java</p>
          </div>

          <pre>
            <code>{`class Developer {
  String language = "Java";
  String backend = "Spring Boot";
  String frontend = "React";

  void build() {
    learn();
    create();
    improve();
  }
}`}</code>
          </pre>

          <div className="code-card-footer">
            <span className="status-dot"></span>
            Always learning, always building
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
