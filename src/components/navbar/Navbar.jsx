import './style.scss'

// Importing the conponents 

//Importing images
import logo from '../../assests/logo/n.png'

//Importing Hooks
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { hideNav, showNav } from '../../slicer/homeSlice/HomeSlice'

const Navbar = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { value } = useSelector(state => state.navSlider)
  const handleSlider = () => {


    if (value) {
      dispatch(hideNav())
      return;
    }
    dispatch(showNav())
  }

  return (
    <nav className="navbar" >
      <img src={logo} alt="logo" className='logo' onClick={() => { navigate('/') }} />
      <div className={`nav-btn ${value ? 'active' : 'not-active'}`} onClick={handleSlider}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  )
}

export default Navbar