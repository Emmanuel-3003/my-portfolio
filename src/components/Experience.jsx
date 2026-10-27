import { BriefcaseBusiness, GraduationCap } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="section-heading">
        <p className="eyebrow">MY JOURNEY</p>
        <h2>Experience & <span className="accent">Learning</span></h2>
      </div>

      <div className="timeline">
        <article className="timeline-item">
          <div className="timeline-icon">
            <BriefcaseBusiness size={21} />
          </div>

          <div className="timeline-content">
            <span className="timeline-date">May 2025 – Oct 2026</span>
            <h3>Associate System Engineer</h3>
            <h4>Tata Consultancy Services (TCS)</h4>

            <ul>
              <li>
                Developed and modified REST endpoints, entities, and
                service-layer logic across the controller, service, and
                repository layers of Spring Boot banking applications.
              </li>
              <li>
                Used Spring Data JPA and Hibernate for database operations
                and added request validation to API inputs.
              </li>
              <li>
                Built fixes and enhancements for the reporting features of a
                Regulatory Reporting Tool (RRT) for a banking client.
              </li>
              <li>
                Debugged defects using application logs, API responses, and
                SQL root-cause analysis, cutting average incident-triage time
                by 30%.
              </li>
              <li>
                Resolved 15-20 production incidents per week within SLA
                timelines.
              </li>
              <li>
                Tested every change with Postman and unit tests before
                release.
              </li>
              <li>
                Delivered work through Agile sprints, collaborating with
                Development, QA, and 4 cross-functional teams.
              </li>
            </ul>
          </div>
        </article>

        <article className="timeline-item">
          <div className="timeline-icon">
            <GraduationCap size={21} />
          </div>

          <div className="timeline-content">
            <span className="timeline-date">Ongoing</span>
            <h3>Java Full Stack Development</h3>
            <h4>Self-directed learning and projects</h4>

            <ul>
              <li>
                Learning Java, Spring Boot, REST APIs and
                database integration.
              </li>
              <li>
                Developing React frontend applications and
                integrating them with backend APIs.
              </li>
              <li>
                Practising authentication, persistence,
                Git workflows and application deployment.
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Experience;
