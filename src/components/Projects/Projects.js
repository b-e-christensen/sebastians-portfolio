import './Projects.css'

function Project({ work }) {
  const { title, type, description, link, repo, id } = work
  return (
    <section className='project' key={title}>
      <div>
        <h3 className='application-title'>
          {title}
          <br></br>
          <span>{type}</span>
        </h3>
      </div>
      <a href={link} className='project' target='_blank' rel='noreferrer'>
        <img src={require(`../../assets/img/${id}.jpg`)} alt={title} className='project-img'></img>
      </a>
      <div className='repo-container'>
        <a href={repo} className='project-repo' target='_blank' rel='noreferrer'>
          Github Repository
        </a>
      </div>
      <p className='application-description'>{description}</p>
    </section>
  )
}

export default Project
