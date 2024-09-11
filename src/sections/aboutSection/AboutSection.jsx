import './style.scss'

import PageTitle from '../../components/pageTitle/PageTitle'

const AboutSection = () => {

  return (
    <div className='about-section' id='AboutSection'>
      <div className="content-container">
        <PageTitle title='about me' />
        <p>I'm Nikhil Sai, a full stack developer from Hyderabad. I specialize in technologies like React, Node js, express js Mysql Database and other technologies and am seeking internship/jobs opportunities</p>
        <h2>i can help you to make your vision into the reality with my skills </h2>
        <p>I can use my expertise to contribute to your team's success with web development and the latest technologies. I thrive in dynamic environments and can bring innovation and efficiency to your projects.</p>
      </div>
    </div>
  )
}

export default AboutSection