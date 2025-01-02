import DOMPurify from "dompurify";
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { LazyLoadImage } from 'react-lazy-load-image-component';

import './style.scss'
import 'react-lazy-load-image-component/src/effects/blur.css';

import Mbutton from './../../components/buttons/Mbutton'


const Project = () => {
  const { projectId } = useParams();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const token = useSelector(state => state.auth.token);

  useEffect(() => {
    setLoading(true);
    const fetchProject = async (projectId) => {
      try {
        const response = await axios.get(`https://nikhilsaiportfolio-1.onrender.com/api/v1/getProject/${projectId}`);

        if (response.status === 404) {
          toast.error('project Not Found')
        }

        if (response.status === 200) {
          setData(response?.data?.data);
          toast.success('project fetched successfull')
        }
      } catch (error) {
        console.log(error);
        toast.error("something went wrong");
      }
    }
    fetchProject(projectId);
    setLoading(false);
  }, [projectId])

  console.log(loading);

  return (
    <div className='project-page'>
      <div className="thumbnail">
        <LazyLoadImage
          effect="blur"
          alt={data?.name}
          src={data?.image_url}
          wrapperProps={{
            style: { transitionDelay: "1s" },
          }}
        />
      </div>
      {
        loading ? "Loading please wait" : <div className='project-info'>
          <h1 className="title">{data?.name}</h1>
          <h6 className="tagline">{data?.tagline}</h6>
          <div className='btn-container'>
            <div className='btns'>
              <Mbutton button={"Demo"} link={data?.demo_url} />
              <Mbutton button={"Code"} link={data?.code_url} />
            </div>
            {
              token && <div className='btns'>
                <Mbutton button={"Edit"} />
                <Mbutton button={"Delete"} deleteProject={projectId} />
              </div>
            }
          </div>
          <div className="skills">
            <h4>Technologies used in Project</h4>
            <div className="skills-container">
              {
                data?.Skills?.map(skill => (<div className="skill" key={skill?.id}>
                  <img src={skill?.image_url} alt={skill?.name} className="skill-image" />
                  <div className="skill-details">
                    <p className="skill-name">{skill?.name}</p>
                  </div>
                </div>))
              }
            </div>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data?.description || '') }}
            className="desc"
          />
        </div>
      }
    </div>
  )
}

export default Project