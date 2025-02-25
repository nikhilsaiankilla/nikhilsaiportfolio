import React, { useCallback, useState } from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { FaXTwitter } from 'react-icons/fa6';
import PageTitle from './../components/PageTitle';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';

const ContactPage = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    if (!data.email || !data.message || !data.name) {
      return toast.error('all fields required')
    }

    await sendMessage(data);
    e.target.reset();
  }, []);

  const sendMessage = async (data) => {
    try {
      setLoading(true);
      const response = await axios.post(`https://nikhilsaiportfolio-1.onrender.com/api/v1/sendMessage`, data);

      if (response.status !== 200) {
        return toast.error('something went wrong.')
      }

      if (response.status === 200) {
        toast.success('sent successfully.')
      }
    } catch (error) {
      console.log(error);
      toast.error('something went wrong.')
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className='w-[97%] h-[94%] bg-[#C1BAB0] m-1 lg:m-5 p-4 md:p-8 lg:p-12 xl:p-16 border-2 border-[#1C1C19] overflow-y-scroll scrollbar-custom scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent texture'>
      <PageTitle title="Contact me" />
      <div className='w-full p-4 lg:p-6 mt-3 lg:mt-4 gap-4 lg:gap-5 flex flex-col items-center justify-center texture-p StyledReceipt'>
        <h2 className='text-2xl text-center lg:text-6xl font-bold text-white navLinksStyle'>How Can i help you?</h2>
        <p className='text-md lg:text-lg text-center text-white navLinksStyle'>Do you have a question or are you intrested in working with me? <br /> just fill out the form fields below.</p>
        <form
          className='w-full flex flex-col gap-3'
          onSubmit={handleSubmit}
          noValidate
        >
          <input
            type='text'
            id='name'
            name='name'
            className='bg-transparent py-3 px-3 text-md text-white placeholder:text-white border-b-2 focus:bg-transparent border-white outline-none navLinksStyle'
            placeholder='Name'
            required
          />

          <input
            type='email'
            id='email'
            name='email'
            className='bg-transparent py-3 px-3 text-md text-white placeholder:text-white border-b-2 focus:bg-transparent border-white outline-none navLinksStyle'
            placeholder='Email'
            required
          />
          <textarea
            id='message'
            name='message'
            className='bg-transparent py-3 px-3 text-md text-white placeholder:text-white border-b-2 focus:bg-transparent border-white outline-none navLinksStyle'
            placeholder='Message'
            rows='4'
            required
          >
          </textarea>
          <button
            type='submit'
            className={`w-fit px-10 py-2 border-2 border-black bg-[#FEF3E2] text-black hover:bg-black hover:text-white focus:ring-[#FEF3E2] font-semibold text-md md:text-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 active:scale-95 flex items-center justify-center gap-2 navLinksStyle`}>
            {
              loading ? "sending..." : "Submit"
            }
          </button>
        </form>

        <div className="flex gap-4 mt-5 md:mt-8 ">
          <NavLink to='https://www.linkedin.com/in/nikhilsaiankilla/' target='_blank'>
            <FaLinkedin className="text-xl md:text-3xl font-bold cursor-pointer text-[#e0c9a6dc]" />
          </NavLink>
          <NavLink to='https://leetcode.com/u/nikhilsai24/' target='_blank'>
            <SiLeetcode className="text-xl md:text-3xl font-bold cursor-pointer text-[#e0c9a6dc]" />
          </NavLink>
          <NavLink to='https://x.com/NikhilsaiAnkil1' target='_blank'>
            <FaXTwitter className="text-xl md:text-3xl font-bold cursor-pointer text-[#e0c9a6dc]" />
          </NavLink>
          <NavLink to='https://github.com/nikhilsaiankilla' target='_blank'>
            <FaGithub className="text-xl md:text-3xl font-bold cursor-pointer text-[#e0c9a6dc]" />
          </NavLink>
        </div>

        <p className='mt-3 text-white font-bold'>nikhilsaiankilla@gmail.com</p>
      </div>
    </section>
  );
};

export default React.memo(ContactPage);
