import './style.scss'

import PageTitle from '../../components/pageTitle/PageTitle'
import { setSkills } from './../../slicer/homeSlice/HomeSlice'

import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { useEffect } from 'react'

const SkillsSection = () => {

  const skills = useSelector(state => state.navSlider.skills);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSkills = async () => {
      const response = await axios.get('https://nikhilsaiportfolio-1.onrender.com/api/v1/getAllSkills');

      if (response.status === 200) {
        const skills = response?.data?.data;
        dispatch(setSkills(skills));
      }
    }
    fetchSkills();
  }, [dispatch])

  return (
    <div className='skills-section' id='SkillsSection'>
      <PageTitle title='Skills' color="white" />
      <div className="skills-container">
        {
          skills?.length > 0 ? skills.map(skill => (
            <div className="skill-block" key={skill?.id}>
              <div className="skill-img">
                <img src={skill?.image_url} alt="" />
              </div>
              <h6 className='skill-title'>{'< '}{skill?.name}{" />"}</h6>
            </div>
          )) : "No Skills Found"
        }
      </div>
    </div>
  )
}

export default SkillsSection