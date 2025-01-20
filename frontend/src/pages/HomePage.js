import { SiLeetcode } from "react-icons/si";
import { FaInstagram, FaGithub, FaLinkedin, FaArrowRight, FaDownload } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { setAbout } from './../slicer/features/aboutSlice'
import { useEffect } from 'react';
import useFetch from './../hooks/useFetch'
import { useDispatch, useSelector } from 'react-redux';
import Button from "../components/Button";

const HomePage = () => {
  const dispatch = useDispatch();
  const about = useSelector(state => state.about.about);
  const { data, error } = useFetch(Object.keys(about).length === 0 ? '/getAdmin' : null);

  if (error) {
    console.log(error);
  }

  useEffect(() => {
    if (data?.data[0] && Object.keys(about).length === 0) {
      dispatch(setAbout(data?.data[0]));
    }
  }, [data, dispatch, Object.keys(about).length === 0]);

  return (
    <section className='w-[97%] h-[94%] bg-[#e0c9a6] m-1 lg:m-5 p-6 md:p-8 lg:p-12 xl:p-16 flex items-start justify-center flex-col border-2 border-[#1C1C19] texture'>
      <h1 className='text-3xl font-bold md:font-extrabold leading-relaxed sm:text-5xl lg:text-6xl xl:text-7xl text-[#1C1C19] pageTitle'>Hey I'm <br /> Nikhil Sai Ankilla, <br /> Software Developer Engineer, <br /> based in Hyderabad.</h1>
      <div className="flex gap-4 mt-5 md:mt-8 ">
        <span>
          <FaLinkedin className="text-xl md:text-3xl font-bold cursor-pointer text-[#1C1C19]" />
        </span>
        <span>
          <SiLeetcode className="text-xl md:text-3xl font-bold cursor-pointer text-[#1C1C19]" />
        </span>
        <span>
          <FaInstagram className="text-xl md:text-3xl font-bold cursor-pointer text-[#1C1C19]" />
        </span>
        <span>
          <FaXTwitter className="text-xl md:text-3xl font-bold cursor-pointer text-[#1C1C19]" />
        </span>
        <span>
          <FaGithub className="text-xl md:text-3xl font-bold cursor-pointer text-[#1C1C19]" />
        </span>
      </div>

      <div className="flex gap-2 mt-4 md:mt-8 flex-wrap">
        <Button title="Download Resume" link={about?.profile_resume} icon={<FaDownload />} theme={true}/>
        <Button title="About Me" link="/about" icon={<FaArrowRight />} theme={true} newPage={true}/>
      </div>
    </section>
  )
}

export default HomePage