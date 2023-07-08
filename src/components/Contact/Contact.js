import './Contact.css'
import emailjs from 'emailjs-com'

function Contact() {
  const sendEmail = e => {
    e.preventDefault()

    emailjs.sendForm('service_j5y4p6b', 'template_zk0a0d8', e.target, 'QRmubVF0swI9cXp3m').then(
      result => {
        console.log(result.text)
      },
      error => {
        console.log(error.text)
      }
    )
    e.target.reset()
  }

  return (
    <section className='contact'>
      <form onSubmit={sendEmail} className='contactForm'>
        <h1> Contact me</h1>
        <h3>Have questions? Don't hesitate to ask. I am open to all opportunities and will take any offer into consideration.</h3>
        <input type='text' placeholder='Name' name='name' />
        <input type='email' placeholder='Email' name='email' />
        <input type='text' placeholder='Subject' name='subject' />
        <textarea type='text' placeholder='Message' name='message' />
        <input type='submit' value='Send Message' />
      </form>
    </section>
  )
}

export default Contact
