
import { Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const email = "degabriels03@gmail.com";

  return (
    <section id="contact" className="section">
      <div className="contact-box">
        <p className="eyebrow">LET'S CONNECT</p>

        <h2>
          Have an opportunity in mind?
        </h2>

        <p>
          I'm interested in software development opportunities
          where I can continue learning and contribute to
          building useful applications.
        </p>

        <a
          className="btn btn-primary"
          href={`mailto:${email}?subject=Software%20Development%20Opportunity`}
        >
          <Mail size={18} /> Contact Me <Send size={17} />
        </a>

        <div className="social-links contact-socials">
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
    </section>
  );
};

export default Contact;
