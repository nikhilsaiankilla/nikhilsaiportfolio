import './style.scss'

//Importing Icons
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaLinkedinIn, FaFileDownload } from "react-icons/fa";
import pdf from "./../../assests/resume/resume.pdf"

//Importing Components
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const gridBox = [];
  for (let index = 0; index < 100; index++) {
    gridBox.push(<span className='grid-block' key={index}></span>)
  }
  return (
    <div className='hero-section' id='HeroSection'>
      <div className="grid-layout">
        {gridBox.map(grid => grid)}
      </div>
      <div className="text-container">
        <h4>Hey I'm your</h4>
        <h1>Full Stack developer</h1>
        <a href={pdf} download className='download-pdf'>Download Resume <FaFileDownload /></a>
      </div>
      <div className="icon-container">
        <span className="line"></span>
        <div className='icons'>
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
      </div>
    </div>
  )
}

export default HeroSection