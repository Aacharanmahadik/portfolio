import './Skills.css'

const skills = [
  { name: 'HTML', level: 92 },
  { name: 'CSS', level: 90 },
  { name: 'JavaScript', level: 86 },
  { name: 'React', level: 83 },
  { name: 'Git & GitHub', level: 80 },
  { name: 'Basic Backend Knowledge', level: 72 },
]

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <span className="section-label">Skills</span>
        <h2>What I work with</h2>
      </div>
      <div className="skills-grid">
        {skills.map((skill) => (
          <article key={skill.name} className="skill-card">
            <div className="skill-card-top">
              <h3>{skill.name}</h3>
              <span>{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-fill" style={{ width: `${skill.level}%` }} />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills
