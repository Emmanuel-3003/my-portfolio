
import { Code2, Database, Wrench } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section">
      <div className="section-heading">
        <p className="eyebrow">GET TO KNOW ME</p>
        <h2>About <span className="accent">Me</span></h2>
      </div>

      <div className="about-grid">
        <div className="about-text">
          <h3>From supporting applications to building them.</h3>

          <p>
            I work as an Associate System Engineer in application
            support, where I help investigate production issues,
            analyze logs, use SQL for troubleshooting, and
            collaborate with teams to maintain application stability.
          </p>

          <p>
            Alongside my professional responsibilities, I'm learning
            Java full-stack development with Spring Boot and React.
            I enjoy understanding how backend services, databases,
            APIs and frontend applications work together.
          </p>

          <p>
            My goal is to grow into a software development role
            where I can contribute to building reliable, useful
            applications.
          </p>
        </div>

        <div className="about-cards">
          <article className="info-card">
            <Code2 size={27} />
            <h3>Backend Development</h3>
            <p>Java, Spring Boot, REST APIs and Spring Data JPA.</p>
          </article>

          <article className="info-card">
            <Database size={27} />
            <h3>Database & SQL</h3>
            <p>SQL queries, relational data and persistence.</p>
          </article>

          <article className="info-card">
            <Wrench size={27} />
            <h3>Problem Solving</h3>
            <p>Log analysis, incident investigation and troubleshooting.</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
