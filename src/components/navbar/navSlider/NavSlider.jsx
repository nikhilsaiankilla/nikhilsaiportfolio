//Importing Styles
import { useSelector } from 'react-redux'
import './../style.scss'

const NavSlider = () => {
  const { value } = useSelector(state => state.navSlider)
  return (
    <div className={`nav-slider ${value ? ' ' : 'open'}`}>
       
    </div>
  )
}

export default NavSlider