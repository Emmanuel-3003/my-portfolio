
const skillGroups = [
  {
    title: "Programming",
    skills: ["Java", "JavaScript", "SQL"],
  },
  {
    title: "Backend",
    skills: [
      "Spring Boot",
      "Spring MVC",
      "Spring Data JPA",
      "Spring Security",
      "REST APIs",
      "Hibernate",
    ],
  },
  {
    title: "Frontend",
    skills: ["React", "HTML", "CSS", "Responsive Design"],
  },
  {
    title: "Tools & Database",
    skills: [
      "PostgreSQL",
      "Git",
      "GitHub",
      "Postman",
      "Maven",
      "UNIX",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="section-heading">
        <p className="eyebrow">MY TOOLKIT</p>
        <h2>Technical <span className="accent">Skills</span></h2>
        <p>Technologies I use and am learning through practical work.</p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.title}>
            <h3>{group.title}</h3>

            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span className="skill-tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
