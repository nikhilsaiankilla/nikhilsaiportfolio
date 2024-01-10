import './style.scss'

import PageTitle from '../../components/pageTitle/PageTitle'
import ProjectItem from '../../components/projectItem/ProjectItem';

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from 'react';

import { project1 } from '../../assests/index'

//Requirments
// indicator should be highlight on active 
// click on indicator should take you to the specific slide 
//number of projects === no of indicators
//click on side buttons should take you to respective side


const ProjectsSection = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  const handleSlider = (type) => {
    if (type === 'right') {
      console.log(activeSlide);
      setActiveSlide(2)
    }
  }

  let projects = [
    { 
      id : 1,
      img : project1,
      title : 'IMDB CLONE',
      desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem ipsum maxime praesentium aut neque natus provident dolor consectetur modi laudantium.",
      liveLink : 'https://google.com',
      demoLink : 'https://google.com',
    }
  ]

  return (
    <div className='project-section'>
      <PageTitle title="Projects" color='white' />
      <div className="projects-container">
        <div className="slider-controllers">
          <div className="buttons">
            <FaChevronLeft onClick={() => {
              handleSlider('left');
            }} />
            <div className="indicators">
              <span className="indicator"></span>
              <span className="indicator active"></span>
              <span className="indicator"></span>
            </div>
            <FaChevronRight onClick={() => {
              handleSlider('right');
            }} />
          </div>
        </div>

        <div className="projects-wrapper">
          <div className="projects-box" >
            {
              projects?.map(project =>  <ProjectItem project={project}/>)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsSection