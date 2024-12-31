import './style.scss'

//Importing Components
import HeroSection from '../../sections/heroSection/HeroSection'
import AboutSection from '../../sections/aboutSection/AboutSection'
import SkillsSection from '../../sections/skillsSection/SkillsSection'
import ProjectsSection from '../../sections/projectsSection/ProjectsSection'
import ContactSection from '../../sections/contactSection/ContactSection'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useEffect, useState } from 'react'

const Home = () => {
  const [userData, setUserData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://nikhilsaiportfolio-1.onrender.com/api/v1/getAdmin`);

        if (response.status !== 200) {
          return toast.error('something went wrong unable to fetch data');
        }

        setUserData(response?.data?.data[0])
      } catch (error) {
        console.log(error);
        return toast.error('something went wrong unable to fetch data');
      }
    }
    fetchData();
  }, [])
  return (
    <div>
      <HeroSection user={userData} />
      <AboutSection/>
      <SkillsSection/>
      <ProjectsSection/>
      <ContactSection/>
    </div>
  )
}

export default Home