import Button from './../components/Button';
import PageTitle from '../components/PageTitle';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import 'react-lazy-load-image-component/src/effects/blur.css';
import { useParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSingleProject } from './../slicer/features/singleProjectSlice';
import axios from 'axios';
import DOMPurify from "dompurify";
import { FaHome } from "react-icons/fa";

const SingleProject = () => {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const dispatch = useDispatch();
  const singleProject = useSelector((state) => state.singleProject.singleProject);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://nikhilsaiportfolio-1.onrender.com/api/v1/getProject/${id}`
      );
      if (response.status === 200) {
        dispatch(setSingleProject(response?.data?.data));
      }
    } catch (error) {
      console.error('Error fetching project:', error);
    } finally {
      setLoading(false);
    }
  }, [id, dispatch]);

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, [fetchData]);


  if (!singleProject) {
    return <p className='navLinksStyle'>No project found</p>;
  }

  return (
    <>
      {
        loading ? (<section className='w-[97%] h-[94%] bg-[#C1BAB0] m-1 lg:m-5 p-6 md:p-8 lg:p-12 border-2 border-[#1C1C19] overflow-y-scroll scrollbar-custom scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent texture'>
          <div className='w-1/3 h-6 md:h-8 lg:h-10 bg-gray-300 rounded-md animate-pulse mx-auto mb-6'></div>

          <div className='w-full h-screen md:h-96 p-2 lg:p-4 border-2 border-[#1a1a1a]'>
            <div className='w-full h-full bg-gray-300 rounded-md animate-pulse'></div>
          </div>

          <div className='w-full p-4 md:p-5'>
            <div className='w-2/3 h-6 md:h-8 lg:h-10 bg-gray-300 rounded-md animate-pulse mx-auto mb-6'></div>

            <div className='w-full flex items-center justify-between mb-6'>
              <div className='flex items-center justify-between gap-5'>
                <div className='w-24 h-10 bg-gray-300 rounded-md animate-pulse'></div>
                <div className='w-24 h-10 bg-gray-300 rounded-md animate-pulse'></div>
              </div>
              <div className='flex gap-5'>
                <div className='w-24 h-10 bg-gray-300 rounded-md animate-pulse'></div>
                <div className='w-24 h-10 bg-gray-300 rounded-md animate-pulse'></div>
              </div>
            </div>

            <div className='w-full space-y-3'>
              <div className='w-full h-5 bg-gray-300 rounded-md animate-pulse'></div>
              <div className='w-4/5 h-5 bg-gray-300 rounded-md animate-pulse'></div>
              <div className='w-3/4 h-5 bg-gray-300 rounded-md animate-pulse'></div>
            </div>
          </div>
        </section>)
          :
          singleProject && Object.keys(singleProject).length > 0
            ?
            (
              <section className='w-[97%] h-[94%] bg-[#C1BAB0] m-1 lg:m-5 p-6 md:p-8 lg:p-12 border-2 border-[#1C1C19] overflow-y-scroll scrollbar-custom scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent texture'>
                <PageTitle title={singleProject?.name} />
                <div className='w-full h-[200px] md:h-96 p-2 lg:p-4 border-2 border-[#1a1a1a]'>
                  <div className='w-full h-full overflow-hidden'>
                    <LazyLoadImage
                      effect="blur"
                      alt={singleProject?.name + " Thumbnail"}
                      src={singleProject?.image_url}
                      className='w-full h-full object-cover hover:scale-105 transition-all duration-200 ease-in'
                      wrapperProps={{
                        style: { transitionDelay: "1s" },
                      }}
                    />
                  </div>
                </div>
                <div className='w-full py-4 md:p-5'>
                  <h2 className='text-center font-medium text-xl md:text-2xl capitalize mt-3 navLinksStyle'>
                    {singleProject?.tagline}
                  </h2>
                  <div className='w-full flex items-center justify-center md:justify-between flex-wrap gap-5 mt-5'>
                    <div className='w-full md:w-[48%] flex items-center justify-between md:justify-start gap-5'>
                      <Button title="Demo" link={singleProject?.demo_url} />
                      <Button title="Code" link={singleProject?.code_url} />
                    </div>
                    <div className='w-full md:w-[48%] flex items-end justify-between md:justify-end gap-5'>
                      <Button title="edit" />
                      <Button title="delete" />
                    </div>
                  </div>

                  <div
                    className='w-full project-desc navLinksStyle mt-5'
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(singleProject?.description || ''),
                    }}
                  />
                </div>
              </section>
            )
            :
            <section className='w-[97%] h-[94%] bg-[#C1BAB0] m-1 lg:m-5 p-6 md:p-8 lg:p-12 border-2 border-[#1C1C19] overflow-y-scroll scrollbar-custom scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent texture flex items-center justify-center flex-col gap-5'>
              <p className='navLinksStyle text-center text-4xl font-bold'><span className='text-6xl md:text-9xl mb-10 text-[#f4f4f4]'>404</span> <br/> No project found</p>
              <Button link='/' title="Go to homepage" icon={<FaHome />} theme={false} newPage={true}/>
            </section>
      }
    </>
  );
};

export default SingleProject;