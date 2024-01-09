import './style.scss'

import PageTitle from '../../components/pageTitle/PageTitle'

import HTMLIcon from '../../assests/html.webp'
import CssIcon from '../../assests/css.webp'
import JsIcon from '../../assests/js.webp'
import SassIcon from '../../assests/sass.webp'
import TailwindIcon from '../../assests/tailwind.webp'
import ReactIcon from '../../assests/react.webp'
import GsapIcon from '../../assests/gsap.webp'
import ReduxIcon from '../../assests/redux.webp'
import GitIcon from '../../assests/git.webp'
import GithubIcon from '../../assests/github.webp'

const SkillsSection = () => {

  const data = [
    {
      id: '1',
      image: HTMLIcon,
      title: 'HTML 5'
    },
    {
      id: '2',
      image: CssIcon,
      title: 'CSS 3'
    },
    {
      id: '3',
      image: JsIcon,
      title: 'Javascript'
    },
    {
      id: '4',
      image: TailwindIcon,
      title: 'Tailwind css'
    },
    {
      id: '5',
      image: SassIcon,
      title: 'Sass'
    },
    {
      id: '6',
      image: ReactIcon,
      title: 'React Js'
    },
    {
      id: '7',
      image: ReduxIcon,
      title: 'Redux'
    },
    {
      id: '8',
      image: GsapIcon,
      title: 'Gsap Animations'
    },
    {
      id: '9',
      image: GitIcon,
      title: 'git'
    },
    {
      id: '10',
      image: GithubIcon,
      title: 'github'
    },
  ]

  console.log(data);
  return (
    <div className='skills-section'>
      <PageTitle title='Skills' color="white" />
      <div className="skills-container">
        {
          data.map(skill => (
            <div className="skill-block" key={skill?.id}>
              <div className="skill-img">
                <img src={skill?.image} alt="" />
              </div>
              <h6 className='skill-title'>{'< '}{skill?.title}{" />"}</h6>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default SkillsSection