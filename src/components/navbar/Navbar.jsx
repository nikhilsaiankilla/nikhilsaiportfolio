import './style.scss'

// Importing the conponents 

//Importing images
import logo from '../../assests/logo/n.png'

//Importing Hooks
import { useNavigate } from 'react-router-dom'

const Navbar = (props) => {
  const navigate = useNavigate();
  return (
    <nav className="navbar" >
      <img src={logo} alt="logo" className='logo' onClick={() => { navigate('/') }} />
      <div className="hamburger">
        <span className='line'></span>
        <span className='line'></span>
        <span className='line'></span>
      </div>
    </nav>
  )
}

export default Navbar