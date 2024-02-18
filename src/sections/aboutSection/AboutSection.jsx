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
    <div className='about-section' id='AboutSection'>
      <div className="main-container">
        <div className="blocks-container">
          {blocks}
        </div>
        <div className="content-container">
          <PageTitle title='about me' />
          <p>I'm Nikhil Sai, a front-end developer from Hyderabad. I specialize in technologies like React, Redux, and React Router and am seeking internship opportunities and freelance projects.</p>
          <h2>i can help you to make your vision into the reality with my skills </h2>
          <p>I can use my expertise to contribute to your team's success with web development and the latest technologies. I thrive in dynamic environments and can bring innovation and efficiency to your projects.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutSection