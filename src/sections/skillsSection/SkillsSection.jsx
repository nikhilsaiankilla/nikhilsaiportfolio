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
import GithubIcon from '../../assests/github.png'
import NodeJsIcon from '../../assests/nodeJs.webp'
import ExpressJsIcon from '../../assests/expressJs.webp'
import mySqlIcon from '../../assests/mySql.webp'
import RestApiIcon from '../../assests/restApi.webp'

const SkillsSection = () => {

  const data = [
    {
      id: '1',
      image: ReactIcon,
      title: 'React Js'
    },
    {
      id: '2',
      image: NodeJsIcon,
      title: 'Node js'
    },
    {
      id: '3',
      image: ExpressJsIcon,
      title: 'express js'
    },
    {
      id: '4',
      image: mySqlIcon,
      title: 'my sql'
    },
    {
      id: '5',
      image: ReduxIcon,
      title: 'Redux'
    },
    {
      id: '6',
      image: HTMLIcon,
      title: 'HTML 5'
    },
    {
      id: '7',
      image: CssIcon,
      title: 'CSS 3'
    },
    {
      id: '8',
      image: JsIcon,
      title: 'Javascript'
    },
    {
      id: '9',
      image: TailwindIcon,
      title: 'Tailwind css'
    },
    {
      id: '10',
      image: SassIcon,
      title: 'Sass'
    },
    {
      id: '11',
      image: GsapIcon,
      title: 'Gsap Animations'
    },
    {
      id: '12',
      image: GitIcon,
      title: 'git'
    },
    {
      id: '13',
      image: GithubIcon,
      title: 'github'
    },
    {
      id:'14',
      image : RestApiIcon,
      title : "rest API"
    }
  ]

  return (
    <div className='skills-section' id='SkillsSection'>
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