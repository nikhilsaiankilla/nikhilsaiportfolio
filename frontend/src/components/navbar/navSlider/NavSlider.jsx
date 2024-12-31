//Importing Styles
import { useDispatch, useSelector } from 'react-redux'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import './../style.scss'
import { hideNav } from '../../../slicer/homeSlice/HomeSlice';

const NavSlider = () => {
  const { value } = useSelector(state => state.navSlider);
  const dispatch = useDispatch();

  const navLinks = [
    {
      name: 'Home',
      section: "HeroSection"
    },
    {
      name: 'About',
      section: "AboutSection"
    },
    {
      name: 'Skills',
      section: "SkillsSection"
    },
    {
      name: 'Projects',
      section: "ProjectsSection"
    },
    {
      name: 'Contact me',
      section: "ContactSection"
    },
  ]

  const handleNavLinkClick = (section) => {
    scroll.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });

    dispatch(hideNav())
  };

  return (
    <div className={`nav-slider ${value ? ' ' : 'open'}`}>
      <ul>
        {navLinks.map((link, index) => (
          <li key={index}
          >
            <ScrollLink
              to={link.section}
              smooth={true}
              duration={800}
              onClick={() => handleNavLinkClick(link.section)}
            >
              {'<'} {link.name} {'/>'}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NavSlider