import './style.scss'

//Importing Components
import HeroSection from '../../sections/heroSection/HeroSection'
import AboutSection from '../../sections/aboutSection/AboutSection'
import SkillsSection from '../../sections/skillsSection/SkillsSection'
import ProjectsSection from '../../sections/projectsSection/ProjectsSection'
import ContactSection from '../../sections/contactSection/ContactSection'


const Home = ({ userData }) => {

  return (
    <div>
      <HeroSection user={userData} />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}

export default Home