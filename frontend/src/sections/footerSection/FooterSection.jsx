import './style.scss'

//Importing Icons 
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';

const FooterSection = () => {

  return (
    <div className='footer'>
      <p className="developer">developed by nikhil sai ankilla</p>
      <div className="icons">
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
  )
}

export default FooterSection