import './style.scss';
import DOMPurify from "dompurify";

const About = ({ userData }) => {
  return (
    <div className='about-page'>
      <h1 className='title'>Who I Am</h1>

      <div
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(userData?.bio || '') }}
        className="desc"
      />

    </div>
  )
}

export default About