import './style.scss'

//Importing Components
import PageTitle from '../../components/pageTitle/PageTitle'
import Project from '../../components/Project/Project'

import { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { setProjects } from '../../slicer/homeSlice/HomeSlice'


const ProjectsSection = () => {
  const [loading, setLoading] = useState();

  const dispatch = useDispatch();
  const projects = useSelector(state => state.navSlider.projects);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://nikhilsaiportfolio-1.onrender.com/api/v1/getAllProjects`);

        if (response.status === 200) {
          const projects = response?.data?.data;
          dispatch(setProjects(projects))
        }
      } catch (error) {
        console.log(error);
        toast.error('something went wrong');
      }
      setLoading(false); 
    }

    fetchProjects();
  }, [dispatch])

  const sortedProjects = [...projects]?.sort((a, b) => {
    if (a.star && !b.star) return -1; 
    if (!a.star && b.star) return 1; 
    return 0;
  });
  

  return (
    <div className='project-section' id='ProjectsSection'>
      <PageTitle title="Projects" color='white' />

      <div className="project-container">
        {
          loading ? (
            <div className='skeleton-container'>
              <div className="skeleton-loader">
                <div className="image-skeleton" />
                <div className="info-skeleton" />
              </div>
              <div className="skeleton-loader">
                <div className="image-skeleton" />
                <div className="info-skeleton" />
              </div>
              <div className="skeleton-loader">
                <div className="image-skeleton" />
                <div className="info-skeleton" />
              </div>
            </div>
          ) : sortedProjects?.length > 0 ? sortedProjects.map(p => {
            return (<Project project={p} key={p?.id} />)
          }) : "No Projects Found"
        }
      </div>
    </div>
  )
}

export default ProjectsSection
