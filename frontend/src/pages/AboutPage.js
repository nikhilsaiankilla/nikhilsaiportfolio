import PageTitle from './../components/PageTitle';
import Button from './../components/Button';
import { FaLinkedin } from 'react-icons/fa';
import useFetch from './../hooks/useFetch'
import { useDispatch, useSelector } from 'react-redux';
import { setAbout } from './../slicer/features/aboutSlice'
import { useEffect } from 'react';
import DOMPurify from "dompurify";

const AboutPage = () => {
  const dispatch = useDispatch();
  const about = useSelector(state => state.about.about);

  const { data, loading, error } = useFetch(Object.keys(about).length === 0 ? '/getAdmin' : null);

  if (error) {
    console.log(error);
  }

  useEffect(() => {
    if (data?.data[0] && Object.keys(about).length === 0) {
      dispatch(setAbout(data?.data[0]));
    }
  }, [data, dispatch, Object.keys(about).length === 0]);

  return (
    <section className='w-[97%] h-[94%] bg-[#C1BAB0] m-1 lg:m-5 p-6 md:p-8 lg:p-12 xl:p-16 border-2 border-[#1C1C19] overflow-y-scroll scrollbar-custom scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent texture' >
      <PageTitle title="About Me" />
      {
        loading && Object.keys(about).length === 0
          ?
          (<div className='w-full px-5 pb-6 flex flex-col items-start gap-3 mt-3 lg:mt-8 bg-[#cc9c80] StyledReceipt'>
            <div className='h-8 md:h-10 lg:h-12 w-2/3 bg-gray-300 rounded animate-pulse'></div>
            <div className='flex flex-col gap-2 w-full'>
              <div className='h-4 md:h-6 w-full bg-gray-300 rounded animate-pulse'></div>
              <div className='h-4 md:h-6 w-5/6 bg-gray-300 rounded animate-pulse'></div>
              <div className='h-4 md:h-6 w-4/6 bg-gray-300 rounded animate-pulse'></div>
            </div>
            <div className='flex flex-col gap-2 w-full mt-2'>
              <div className='h-4 md:h-6 w-full bg-gray-300 rounded animate-pulse'></div>
              <div className='h-4 md:h-6 w-5/6 bg-gray-300 rounded animate-pulse'></div>
              <div className='h-4 md:h-6 w-4/6 bg-gray-300 rounded animate-pulse'></div>
            </div>
            <div className='flex flex-col gap-2 w-full mt-2'>
              <div className='h-4 md:h-6 w-full bg-gray-300 rounded animate-pulse'></div>
              <div className='h-4 md:h-6 w-5/6 bg-gray-300 rounded animate-pulse'></div>
              <div className='h-4 md:h-6 w-4/6 bg-gray-300 rounded animate-pulse'></div>
            </div>
            <div className='h-10 w-40 bg-gray-300 rounded-full animate-pulse mt-4'></div>
          </div>)
          :
          Object.keys(about).length < 1
            ?
            (<p className='text-2xl font-bold text-center mt-5 navLinksStyle text-[#f4f4f4]'>
              No Projects Found.
            </p>)
            :
            (< div className='w-full px-5 pb-6 flex flex-col items-start gap-3 mt-3 lg:mt-8 bg-[#cc9c80] StyledReceipt' >
              <h1 className='text-2xl md:text-3xl lg:text-4xl my-1 lg:my-5 font-bold leading-normal capitalize text-[#f4f4f4] navLinksStyle'>
                I'm nikhil sai ankilla,<br /> Software Developer Engineer.
              </h1>
              <div className='w-full text-custom' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(about?.bio || '') }}>
                {

                }
              </div>
              <Button title="Connect with me on LinkedIn" theme={false} icon={<FaLinkedin />} link="https://www.linkedin.com/in/nikhilsaiankilla/"/>
            </div >
            )
      }
    </section>
  )
}

export default AboutPage

