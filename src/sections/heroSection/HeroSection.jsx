import './style.scss'

//Importing Icons
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

//Importing Components
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className='hero-section'>
      <div className="text-container">
        <h4>Hey I'm your</h4>
        <h1>react developer</h1>
      </div>
      <div className="icons">
        <span className="line line-top"></span>
        <div>
          <Link to="https://github.com/nikhilsaiankilla" target="_blank" className='icon-link'>
            <FaGithub className='icon' />
          </Link>
          <Link to="https://linkedin.com/in/nikhilsaiankilla" target="_blank" className='icon-link'>
            <FaLinkedinIn className='icon' />
          </Link>
          <Link to="https://twitter.com/NikhilsaiAnkil1" target="_blank" className='icon-link'>
            <FaXTwitter className='icon' />
          </Link>
        </div>
        {/* <span className="line line-bottom"></span> */}
      </div>
    </div>
  )
}

export default HeroSection