import './style.scss'

import PageTitle from '../../components/pageTitle/PageTitle'
import MButton from '../../components/buttons/Mbutton'

const AboutSection = () => {

  return (
    <div className='about-section' id='AboutSection'>
      <div className="content-container">
        <PageTitle title='about me' />
        <p>I'm Nikhil Sai, a full stack developer from Hyderabad. I specialize in technologies like React, Node js, express js Mysql Database and other technologies and am seeking internship/jobs opportunities</p>
        <h2>i can help you to make your vision into the reality with my skills </h2>
        <MButton button="More About Me" navigationLink='/about'/>
        </div>
    </div>
  )
}

export default AboutSection