import React, { useCallback } from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { FaXTwitter } from 'react-icons/fa6';
import PageTitle from './../components/PageTitle';

const ContactPage = () => {
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    console.log('Form Submitted:', data);
    e.target.reset(); // Clear the input fields after submission
  }, []);

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
            className='w-fit px-10 py-2 text-lg font-medium border-0 outline-none bg-red-200 cursor-pointer navLinksStyle'
          >
            Submit
          </button>
        </form>

        <div className="flex gap-4 mt-5 md:mt-8 ">
          <span>
            <FaLinkedin className="text-xl md:text-3xl font-bold cursor-pointer text-black" />
          </span>
          <span>
            <SiLeetcode className="text-xl md:text-3xl font-bold cursor-pointer text-black" />
          </span>
          <span>
            <FaInstagram className="text-xl md:text-3xl font-bold cursor-pointer text-black" />
          </span>
          <span>
            <FaXTwitter className="text-xl md:text-3xl font-bold cursor-pointer text-black" />
          </span>
          <span>
            <FaGithub className="text-xl md:text-3xl font-bold cursor-pointer text-black" />
          </span>
        </div>

      </div>
    </section>
  );
};

export default React.memo(ContactPage);
