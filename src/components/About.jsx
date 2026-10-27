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
          <h3>Java backend developer building secure, reliable systems.</h3>

          <p>
            I'm a Java Backend Developer with 1+ year of experience working on
            Spring Boot applications for banking clients at TCS. I developed and
            modified REST APIs, entities, and service-layer logic, and used SQL
            root-cause analysis to debug production issues, cutting average
            incident-triage time by 30%.
          </p>

          <p>
            Working on live banking systems showed me how backend code behaves in
            production, and it shapes how I write code today. Outside of work, I
            build my own projects: a banking API with JWT security and
            double-entry transfers, and an e-commerce backend with role-based
            access control. Both use Spring Boot, Spring Security, and JPA/Hibernate
            with MySQL and PostgreSQL. I've also built React frontends and deployed
            my work using Docker.
          </p>

          <p>
            I'm open to Java Developer and Java Full Stack Developer roles where I
            can build scalable backend systems, learn from experienced teams, and
            keep growing as a software developer. I'm available to join
            immediately.
          </p>
        </div>

        <div className="about-cards">
          <article className="info-card">
            <Code2 size={27} />
            <h3>Backend Development</h3>
            <p>
              Java, Spring Boot, REST APIs, Spring Security (JWT, RBAC) &
              Spring Data JPA.
            </p>
          </article>

          <article className="info-card">
            <Database size={27} />
            <h3>Database & SQL</h3>
            <p>
              MySQL, PostgreSQL, Hibernate, schema design and SQL
              troubleshooting.
            </p>
          </article>

          <article className="info-card">
            <Wrench size={27} />
            <h3>Debugging & Delivery</h3>
            <p>
              Log analysis, root-cause analysis, Postman testing, Git, Maven &
              Docker.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;