import './style.scss'

//Importing Components
import PageTitle from '../../components/pageTitle/PageTitle'
import ProjectItem from '../../components/projectItem/ProjectItem';

//Importing thirdParty components and hooks 
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from 'react';

//Importing Images
import { project1, gpt, spotify, portfolio, ecom, blog, moviesApp } from '../../assests/index'

const ProjectsSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  let projects = [
    {
      img: blog,
      title: 'full stack blog with authentication',
      desc: "A full-stack blog application built with React for the frontend and Node.js with Express.js for the backend. It uses MySQL for data storage and JWT tokens for secure user authentication. Features include dynamic content management and smooth navigation with React Router.",
      liveLink: 'https://myblogs24.vercel.app/',
      gitLink: 'https://github.com/nikhilsaiankilla/BLOG-BACKEND',
    },
    {
      img: spotify,
      title: 'spotify clone',
      desc: "Crafted a dynamic Spotify clone employing React, React Router, useContext, and useReducer for state management, while seamlessly interfacing with the Spotify API for data retrieval. Implemented user authentication to generate personalized access tokens, resulting in a streamlined music streaming experience.",
      liveLink: 'https://spotifyclone-nikhil.vercel.app/',
      gitLink: 'https://github.com/nikhilsaiankilla/SpotifyCloneReact',
    },
    {
      img: ecom,
      title: 'Nik-Store Ecommerce',
      desc: "Engineered NikStore, a sleek e-commerce site, using React, React Redux, and React Router. Optimized performance with Axios for API calls and incorporated lazy loading. Key features include a cart and wishlist. Backend powered by Strapi for seamless data management. NikStore epitomizes modern, responsive, and efficient online shopping",
      liveLink: 'https://nikstore-ecommerce.vercel.app/',
      gitLink: 'https://github.com/nikhilsaiankilla/ecommerce-project',
    },
    {
      img: portfolio,
      title: 'My Portfolio',
      desc: "Developed my personal portfolio using React, React Router for navigation, and Redux for efficient state management. The clean UI design incorporates subtle animations for a polished look. Explore my portfolio to witness a seamless blend of technology and design, showcasing my skills in creating user-friendly and visually appealing web applications.",
      liveLink: 'https://nikhilsaiportfolio.vercel.app/',
      gitLink: 'https://github.com/nikhilsaiankilla/Nikhil-s-portfolio',
    },
    {
      img: moviesApp,
      title: 'Movies App (IMDb Clone)',
      desc: "A movie database app that lets users search for movies, view ratings, and access detailed information. Developed with React and React Router for a smooth interface and navigation. Utilizes a movies API for real-time data retrieval and comprehensive search functionality.",
      liveLink: 'https://movie-app-react-js-nikhil.vercel.app/',
      gitLink: 'https://github.com/nikhilsaiankilla/MovieAppReactjs.git',
    },
    {
      img: project1,
      title: 'mirianda',
      desc: "Crafted a fully functional, responsive newspaper-themed website using HTML, CSS, and JavaScript, with dynamic animations powered by GSAP. Explore the nostalgic retro design while enjoying a seamless user experience. This project reflects my proficiency in front-end development and my ability to bring creative themes to life with engaging animations.",
      liveLink: 'https://mirandaclonebynikhil.netlify.app/',
      gitLink: 'https://github.com/nikhilsaiankilla/miranda-clone',
    },
    {
      img: gpt,
      title: 'gpt-3 landing page',
      desc: "Crafted a responsive GPT-3 landing page using React and SCSS for my inaugural project. This showcases my skills in creating visually appealing and user-friendly interfaces. Explore the simplicity and elegance of this responsive design, highlighting my dedication to engaging web experiences",
      liveLink: 'https://gpt-3-reactjs.vercel.app/',
      gitLink: 'https://github.com/nikhilsaiankilla/GPT-3-ReactJS-',
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