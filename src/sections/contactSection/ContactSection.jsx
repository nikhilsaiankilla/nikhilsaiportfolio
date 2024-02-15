import emailjs from '@emailjs/browser';
import PageTitle from '../../components/pageTitle/PageTitle'
import { useRef } from 'react';
import { useState } from 'react';

import './style.scss'

const ContactSection = () => {
  const form = useRef();
  const [done, setDone] = useState(false)
  const [error, setError] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1uhqref', 'template_hfxjk4i', form.current, 'ah_t0Bdumhr9niCrl')
      .then((result) => {
        console.log(result.text);
        setDone(true);

        setTimeout(() => {
          setDone(false)
        }, 5000)

      }, (error) => {
        setError(true)
        setTimeout(() => {
          setDone(false)
        }, 5000)
        console.log(error.text);
      });
  };

  return (
    <div className='contact-section' id='ContactSection'>
      <PageTitle title='contact me' color='white' />
      <form ref={form} onSubmit={(event) => {
        sendEmail(event)
      }}>
        <label className='text'>
          I'm
          <span>
            <input type="text" name='user_name' className='user_name' required />
          </span>
          . and I've got a mission for you.  My email is
          <span>
            <input type="email" required name='user_email' className='user_email' />
          </span>
          . I've got this grand idea, and I need your coding superpowers to bring it to life. The quest?
          <span>
            <input type="text" name="user_message" className='user_message' />
          </span>
          . Ready for the challenge?
        </label>
        <button type='submit' className='submit-btn'>Send</button>
        {done && <p className='feedback'>thanks for contacting me</p>}
        {error && <p className='error'>Something went wrong please try again</p>}
      </form>
    </div>
  )
}

export default ContactSection