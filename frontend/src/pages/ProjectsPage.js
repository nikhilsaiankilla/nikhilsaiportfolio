import PageTitle from './../components/PageTitle';
import { NavLink } from 'react-router-dom';
import { FaLongArrowAltRight } from "react-icons/fa";

const ProjectsPage = () => {
  return (
    <section className='w-[97%] h-[94%] bg-[#C1BAB0] m-1 lg:m-5 p-4 md:p-8 lg:p-12 xl:p-16 border-2 border-[#1C1C19] overflow-y-scroll scrollbar-custom scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent texture'>
      <PageTitle title="Projects I Made" />
      <div className='w-full mt-3 lg:mt-6 rounded-xl gap-3 lg:gap-4 flex flex-wrap items-center justify-center '>

        <div className='p-3 lg:p-4 w-full h-[500px] md:w-[49%] StyledReceipt texture-p my-2'>

          <div className='w-full h-[70%] flex items-center justify-center overflow-hidden border-4 border-[#1C1C19]'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1gJMkYJmKc5LGORN_R_uKiH0Inilnac9X1Q&s'
              alt='project thumbnail'
              className='w-full h-full object-cover hover:scale-105 transition-all duration-300 ease-linear'
            />
          </div>

          <div className='w-full h-[30%] flex items-start justify-center flex-col gap-2 text-white'>
            <h1 className='text-2xl lg:text-4xl font-bold navLinksStyle'>Project Title</h1>
            <p className='text-base navLinksStyle'>Some brief information about the project.</p>
            <p className='w-full flex'>
              <NavLink
                to="/project/2"
                className="py-1 flex gap-3 border-b-2 border-white group navLinksStyle"
              >
                View Details
                <FaLongArrowAltRight className='text-xl transform transition-transform group-hover:translate-x-2' />
              </NavLink>
            </p>
          </div>

        </div>

        <div className='p-3 lg:p-4 w-full h-[500px] md:w-[49%] StyledReceipt texture-p my-2'>

          <div className='w-full h-[70%] flex items-center justify-center overflow-hidden border-4 border-[#1C1C19]'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1gJMkYJmKc5LGORN_R_uKiH0Inilnac9X1Q&s'
              alt='project thumbnail'
              className='w-full h-full object-cover hover:scale-105 transition-all duration-300 ease-linear'
            />
          </div>

          <div className='w-full h-[30%] flex items-start justify-center flex-col gap-2 text-white'>
            <h1 className='text-2xl lg:text-4xl font-bold'>Project Title</h1>
            <p className='text-base'>Some brief information about the project.</p>
            <p className='w-full flex'>
              <NavLink
                to="/project/2"
                className="py-1 flex gap-3 border-b-2 border-white group"
              >
                View Details
                <FaLongArrowAltRight className='text-xl transform transition-transform group-hover:translate-x-2' />
              </NavLink>
            </p>
          </div>

        </div>

        <div className='p-3 lg:p-4 w-full h-[500px] md:w-[49%] StyledReceipt texture-p my-2'>

          <div className='w-full h-[70%] flex items-center justify-center overflow-hidden border-4 border-[#1C1C19]'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1gJMkYJmKc5LGORN_R_uKiH0Inilnac9X1Q&s'
              alt='project thumbnail'
              className='w-full h-full object-cover hover:scale-105 transition-all duration-300 ease-linear'
            />
          </div>

          <div className='w-full h-[30%] flex items-start justify-center flex-col gap-2 text-white'>
            <h1 className='text-2xl lg:text-4xl font-bold'>Project Title</h1>
            <p className='text-base'>Some brief information about the project.</p>
            <p className='w-full flex'>
              <NavLink
                to="/project/2"
                className="py-1 flex gap-3 border-b-2 border-white group"
              >
                View Details
                <FaLongArrowAltRight className='text-xl transform transition-transform group-hover:translate-x-2' />
              </NavLink>
            </p>
          </div>

        </div>

        <div className='p-3 lg:p-4 w-full h-[500px] md:w-[49%] StyledReceipt texture-p my-2'>

          <div className='w-full h-[70%] flex items-center justify-center overflow-hidden border-4 border-[#1C1C19]'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1gJMkYJmKc5LGORN_R_uKiH0Inilnac9X1Q&s'
              alt='project thumbnail'
              className='w-full h-full object-cover hover:scale-105 transition-all duration-300 ease-linear'
            />
          </div>

          <div className='w-full h-[30%] flex items-start justify-center flex-col gap-2 text-white'>
            <h1 className='text-2xl lg:text-4xl font-bold'>Project Title</h1>
            <p className='text-base'>Some brief information about the project.</p>
            <p className='w-full flex'>
              <NavLink
                to="/project/2"
                className="py-1 flex gap-3 border-b-2 border-white group"
              >
                View Details
                <FaLongArrowAltRight className='text-xl transform transition-transform group-hover:translate-x-2' />
              </NavLink>
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default ProjectsPage