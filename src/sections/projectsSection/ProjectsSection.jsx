import './style.scss'

//Importing Components
import PageTitle from '../../components/pageTitle/PageTitle'
import ProjectItem from '../../components/projectItem/ProjectItem';

//Importing thirdParty components and hooks 
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from 'react';

//Importing Images
import { project1 } from '../../assests/index'

const ProjectsSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  let projects = [
    {
      img: project1,
      title: 'IMDB CLONE',
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem ipsum maxime praesentium aut neque natus provident dolor consectetur modi laudantium.",
      liveLink: 'https://google.com',
      demoLink: 'https://google.com',
    },
    {
      img: "https://images.pexels.com/photos/957002/berchtesgaden-alpine-watzmann-berchtesgaden-national-park-957002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: 'IMDB CLONE',
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem ipsum maxime praesentium aut neque natus provident dolor consectetur modi laudantium.",
      liveLink: 'https://google.com',
      demoLink: 'https://google.com',
    },
    {
      img: "https://images.pexels.com/photos/227692/landscape-reflection-waves-ripples-227692.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: 'IMDB CLONE',
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem ipsum maxime praesentium aut neque natus provident dolor consectetur modi laudantium.",
      liveLink: 'https://google.com',
      demoLink: 'https://google.com',
    },
    {
      img: "https://images.pexels.com/photos/672451/pexels-photo-672451.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: 'IMDB CLONE',
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem ipsum maxime praesentium aut neque natus provident dolor consectetur modi laudantium.",
      liveLink: 'https://google.com',
      demoLink: 'https://google.com',
    },
  ]

  //Handling Carousel Slider
  const handleCarouselSlider = (type) => {

    //If type ==> PREV moves to left, 
    if (type === 'PREV') {
      setActiveSlide((prev) => {
        if (prev === 0) {
          return 0;
        } else {
          return prev - 1;
        }
      })
    }

    // If type ==> NEXT moves to Right
    if (type === 'NEXT') {
      setActiveSlide((prev) => {
        if (prev !== (projects.length - 1)) {
          return prev + 1;
        } else {
          return projects.length - 1;
        }
      })
    }
  }

  // Changes Slider on Click on the Indicators 
  const changeSlide = (index) => {
    // If Index ==> 1 then It slides to the 1 Slide 
    setActiveSlide(index);
  }
  return (
    <div className='project-section' id='ProjectsSection'>
      <PageTitle title="Projects" color='white' />
      <div className="projects-container">
        <div className="slider-controllers">
          <div className="buttons">
            <FaChevronLeft onClick={() => {
              handleCarouselSlider('PREV');
            }} className='slider-btn' />
            <div className="indicators">
              {projects.map((indicator, index) => <span className={`indicator ${activeSlide === index ? 'active' : " "}`} key={index} onClick={() => { changeSlide(index) }}></span>)}
            </div>
            <FaChevronRight onClick={() => {
              handleCarouselSlider('NEXT');
            }} className='slider-btn' />
          </div>
        </div>

        <div className="projects-wrapper">
          <div className="projects-box" style={{ transform: `translateX(${activeSlide * -100}vw)`, width: `${projects.length * 100}vw` }}>
            {
              projects?.map((project, index) => <ProjectItem project={project} key={index} index={index} />)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsSection