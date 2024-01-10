import './style.scss'

import { Link } from 'react-router-dom'

const Button = ({ title, link, className }) => {
  return (
    <Link className={`${className} btn`} to={link} target='_blank'>{title}</Link>
  )
}

export default Button