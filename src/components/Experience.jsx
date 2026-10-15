
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
            <span className="timeline-date">May 2025 – Present</span>
            <h3>Associate System Engineer</h3>
            <h4>Tata Consultancy Services (TCS)</h4>

            <ul>
              <li>
                Support enterprise banking applications in an
                Application Management Services environment.
              </li>
              <li>
                Investigate production incidents using logs,
                SQL queries and UNIX commands.
              </li>
              <li>
                Collaborate with relevant teams to troubleshoot
                transaction issues and support application stability.
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
