import emailjs from '@emailjs/browser';
import PageTitle from '../../components/pageTitle/PageTitle'
import { useRef } from 'react';
import { useState } from 'react';

import './style.scss'

const ContactSection = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_1uhqref', 'template_hfxjk4i', form.current, 'ah_t0Bdumhr9niCrl')
      .then(
        (result) => {
          console.log(result.text);
          setStatus('success');
          setTimeout(() => setStatus(''), 5000);
        },
        (error) => {
          console.error(error.text);
          setStatus('error');
          setTimeout(() => setStatus(''), 5000);
        }
      );


  };

  return (
    <div className='contact-section' id='ContactSection'>
      <PageTitle title='contact me' color='white' />
      <form ref={form} onSubmit={(event) => {
        sendEmail(event)
      }}>
        <input type="text" name='user_name' className='user_name' required placeholder='Enter your name' />
        <input type="email" name='user_email' className='user_email' required placeholder='Enter your email' />
        <input type="text" name="user_message" className='user_message' required placeholder='Enter your message' />
        <button type='submit' className='submit-btn'>Send</button>

        {status === 'success' && <p>Hey, your message has been sent!</p>}
        {status === 'error' && <p>Sorry, something went wrong. Please try again.</p>}
      </form>
    </div>
  )
}




// user_name
// user_email
// user_message
export default ContactSection