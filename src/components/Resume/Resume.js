import './Resume.css'

function Resume() {
  return (
    <section className='resume-section'>
      <h2 className='sub-title'>Resume</h2>
      <div className='download-div'>
        <a href={require(`../../assets/files/Resume.pdf`)} download className='download'>
          Click here to download my resume
        </a>
      </div>
      <div className='paper'>
        <div className='top-section'>
          <h1 className='name'>SEBASTIAN ALVARADO</h1>
          <div className='contact'>
            www.linkedin.com/in/ska246801 | (956) 873-7201 | sebastianalvarado246801@gmail.com | Portfolio:
            https://ska246801.github.io/React-Portfolio/ Github: https://github.com/SKA246801/
          </div>
        </div>

        <h2 className='sub-headers'>INTRO</h2>
        <p className='intro'>
          Sebastian Alvarado became a Full Stack Developer in a coding bootcamp at the University of Texas at Austin. He is an undergrad at UT Austin
          majoring in Computational Biology. Sebastian is constantly learning new things and is currently diving into cybersecurity. Through diligence
          and hard work, he was able to prove himself to the Directors of Seminaut Inc. and joined the board. Now, he is the Guild Development
          Director responsible for managing the development department on a day-to-day basis.
        </p>
        <h2 className='sub-headers'>WORK EXPERIENCE</h2>
        <div className='work-header'>
          <h3 className='work-title'>Seminaut</h3>
          <h3 className='work-title'>Austin, Texas</h3>
        </div>
        <div className='work-header'>
          <p className='work-title'>
            <i>Guild Development Director</i>
          </p>
          <p className='work-title'>September 2022 - Present</p>
        </div>
        <ul>
          <li className='work-info'>Managing the development department</li>
          <li className='work-info'>Mentoring Managers, Seniors, and Interns</li>
        </ul>
        <div className='work-header'>
          <p className='work-title'>
            <i>Lead Front End Developer</i>
          </p>
          <p className='work-title'>June 2022 - September 2022</p>
        </div>
        <ul>
          <li className='work-info'>Leading a group of developers in order to help them gain the experience they need to be successful</li>
          <li className='work-info'>Working on all aspects of the site to give the best consumer experience possible</li>
        </ul>
        <div className='work-header'>
          <p className='work-title'>
            <i>Software Developer Intern</i>
          </p>
          <p className='work-title'>March 2022 - June 2022</p>
        </div>
        <ul>
          <li className='work-info'>A part of a team to build a website in order to connect the world of gamers</li>
        </ul>
        <div className='work-header'>
          <h3 className='work-title'>2U</h3>
          <h3 className='work-title'>Austin, Texas</h3>
        </div>
        <div className='work-header'>
          <p className='work-title'>
            <i>Learning Assistant</i>
          </p>
          <p className='work-title'> August 2022 - Present</p>
        </div>
        <ul>
          <li className='work-info'>Assist Coding Bootcamp students in debugging their program errors</li>
          <li className='work-info'>Provide resources in order to further their learning</li>
        </ul>
        <h2 className='sub-headers'>TECHNICAL SKILLS</h2>
        <div className='skill-section'>
          <p className='skills'>
            <span className='skill-title'>Languages:</span> Javascript, Python, HTML/CSS, SQL, GraphQL
          </p>
          <p className='skills'>
            <span className='skill-title'>Software & Frameworks:</span> Windows, Linux, Virtual Machines, Node.js, SQLAlchemy, Flask, Express,
            React.js, Bootstrap, Git, Visual Studio Code, Sequelize, GitHub, GitLab
          </p>
          <p className='skills'>
            <span className='skill-title'>Databases:</span> MySQL, MongoDB
          </p>
          <p className='skills'>
            <span className='skill-title'>Cloud:</span> Firebase
          </p>
        </div>
        <h2 className='sub-headers'>EDUCATION</h2>
        <div className='education-header'>
          <h3 className='education-title'>University of Texas at Austin</h3>
          <h3 className='education-title'>Austin, Texas</h3>
        </div>
        <div className='education-header'>
          <p className='education-title'>Fullstack Engineering bootcamp</p>
          <p className='education-title'>March 2021 - August 2021</p>
        </div>
        <ul>
          <li className='education-info'>
            This is a certification course designed to give students full stack web development skills with technologies such as jQuery, Bootstrap,
            Node.js, React.js, Express.js, MySQL, MongoDB and more.
          </li>
        </ul>
        <div className='education-header'>
          <h3 className='education-title'>University of Texas at Austin</h3>
          <h3 className='education-title'>Austin, Texas</h3>
        </div>
        <div className='education-header'>
          <p className='education-title'>Computational Biology</p>
          <p className='education-title'>August 2020 - Present</p>
        </div>
        <ul>
          <li className='education-info'>GPA: 3.4/4.0</li>
        </ul>
        <h2 className='sub-headers'>PROJECTS</h2>
        <div className='project-section'>
          <div className='project-header'>
            <h3 className='project-title'>Netflix Clone</h3>
            <h3 className='project-link'>
              Live URL:{' '}
              <a href='https://sebastians-netflix-clone.herokuapp.com' target='_blank' rel='noreferrer'>
                https://sebastians-netflix-clone.herokuapp.com
              </a>
            </h3>
          </div>
          <ul>
            <li className='project-info'>A clone of Netflix's online streaming service</li>
            <li className='project-info'>Uses the MERN stack</li>
            <li className='project-info'>There is an admin dashboard for CRUD operations of the site</li>
          </ul>
          <div className='project-header'>
            <h3 className='project-title'>Amazon Clone</h3>
            <h3 className='project-link'>
              Live URL:{' '}
              <a href='https://clone-39f35.firebaseapp.com' target='_blank' rel='noreferrer'>
                https://clone-39f35.firebaseapp.com
              </a>
            </h3>
          </div>
          <ul>
            <li className='project-info'>A clone of Amazon's online store</li>
            <li className='project-info'>Uses firebase and React.js</li>
          </ul>

          <div className='project-header'>
            <h3 className='project-title'>Instagram Clone</h3>
            <h3 className='project-link'>
              Live URL:{' '}
              <a href='https://instagram-clone-8a613.firebaseapp.com' target='_blank' rel='noreferrer'>
                https://instagram-clone-8a613.firebaseapp.com
              </a>
            </h3>
          </div>
          <ul>
            <li className='project-info'>A clone of Instagram's social media site</li>
            <li className='project-info'>Uses firebase and React.js</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Resume
