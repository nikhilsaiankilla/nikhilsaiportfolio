import './style.scss'

import { useState } from 'react';

import PageTitle from '../../components/pageTitle/PageTitle'

const AboutSection = () => {
  const [activeBlock, setActiveBlock] = useState(null)

  const addHoverEffect = (index) => {
    setActiveBlock(index);
  }

  const removeHoverEffect = () => {
    setActiveBlock(null);
  }

  const blocks = [];
  for (let index = 0; index < 256; index++) {
    blocks.push(
      <span
        key={index}
        className={`block ${activeBlock === index ? 'active' : ''}`}
        onMouseEnter={() => {
          addHoverEffect(index);
        }}
        onMouseLeave={() => removeHoverEffect()}
      ></span>
    );
  }
  return (
    <div className='about-section'>
      <div className="main-container">
        <div className="blocks-container">
          {blocks}
        </div>
        <div className="content-container">
          <PageTitle title='about me' />
          <p>hey i am nikhil sai based in hyderabad looking for the internship and freeleance projects..!!</p>
          <h2>i can help you to make your vision into the reality with my skills </h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been </p>
        </div>
      </div>
    </div>
  )
}

export default AboutSection