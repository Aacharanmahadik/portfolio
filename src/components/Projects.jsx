import './Projects.css'

const projects = [
  {
    title: 'Portfolio Website',
    description:
      'A modern personal portfolio built with React and Vite to showcase skills, projects, and design.',
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'To-Do App',
    description:
      'A task management app built with vanilla JavaScript to organize daily goals and improve productivity.',
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Weather App',
    description:
      'An API-powered weather dashboard displaying forecasts and current conditions for any location.',
    demoUrl: '#',
    githubUrl: '#',
  },
]

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <span className="section-label">Projects</span>
        <h2>Recent work</h2>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <div className="project-card-tag">Featured</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-actions">
              <a className="button button-text" href={project.demoUrl}>
                View Demo
              </a>
              <a className="button button-outline" href={project.githubUrl}>
                GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
