
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
            I have experience as an Associate System Engineer in application support, 
            where I worked on investigating production issues, 
            analyzing application logs, using SQL for troubleshooting, and 
            collaborating with cross-functional teams to maintain application stability.
          </p>

          <p>
             I am currently focused on transitioning into software development, 
             strengthening my skills in Java, Spring Boot, REST APIs, SQL, and 
             React through hands-on projects. I enjoy building applications and understanding how 
             backend services, databases, and frontend technologies work together.
          </p>

          <p>
             I am actively seeking opportunities as a Java Developer or Java Full Stack Developer, 
             where I can apply my technical knowledge, build scalable applications, learn from 
             experienced teams, and grow as a software developer.
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
