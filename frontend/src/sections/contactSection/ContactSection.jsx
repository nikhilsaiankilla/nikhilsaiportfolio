import { useState } from 'react';
import PageTitle from '../../components/pageTitle/PageTitle'
import './style.scss'
import axios from 'axios';
import { toast } from 'react-hot-toast'

const ContactSection = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!name) {
      return toast.error('please enter your name');
    }

    if (!email) {
      return toast.error('please enter your email');
    }

    if (!message) {
      return toast.error('please enter your message');
    }

    const sendData = {
      email,
      name,
      message
    }

    try {
      setLoading(true);
      const response = await axios.post(`https://nikhilsaiportfolio-1.onrender.com/api/v1/sendMessage`, sendData);

      if (response.status !== 200) {
        return toast.error('something went wrong');
      }
      toast.success('message sent successfully');
      setEmail(null);
      setName(null);
      setMessage(null)
    } catch (error) {
      console.log(error);
      toast.error('something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='contact-section' id='ContactSection'>
      <PageTitle title='contact me' color='white' />
      <form onSubmit={(event) => {
        sendEmail(event)
      }}>
        <input type="text" name='user_name' className='user_name' required placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" name='user_email' className='user_email' required placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="text" name="user_message" className='user_message' required placeholder='Enter your message'value={message} onChange={(e) => setMessage(e.target.value)} />
        <button type='submit' className='submit-btn'>{loading ? "Sending.." : "Send"}</button>
      </form>
    </div>
  )
}

export default ContactSection;