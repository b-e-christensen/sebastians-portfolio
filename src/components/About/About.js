import React from 'react'
import './About.css'
import selfImg from '../../assets/img/Self.jpg'

function About() {
  return (
    <section>
      <img src={selfImg} alt='Profile Pic' className='Self' />
      <p id='bio'>
        Sebastian Alvarado became a Full Stack Developer in a coding bootcamp at the University of Texas at Austin. He is an undergrad at UT Austin
        majoring in Computational Biology. Sebastian is constantly learning new things and is currently diving into cybersecurity. Through diligence
        and hard work, he was able to prove himself to the Directors of Seminaut Inc. and joined the board. Now, he is the Guild Development Director
        responsible for managing the entire development department on a day-to-day basis.
        <br></br>
        <br></br>{' '}
        <q>
          <i>It isn't about what was or wasn't accomplished in the past, but the success that can be achieved in the future</i>
        </q>
        <br></br> ~ Sebastian Alvarado
      </p>
    </section>
  )
}

export default About
