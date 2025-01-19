import PageTitle from './../components/PageTitle';
import { NavLink } from 'react-router-dom';
import { FaLongArrowAltRight } from "react-icons/fa";

const ProjectsPage = () => {
  return (
    <section className='w-full h-full rounded-md bg-[#FA812F] p-2 sm:p-4 md:p-6 lg:p-8 overflow-y-scroll scrollbar-custom scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent'>
      <PageTitle title="Projects I Made" />
      <div className='w-full p-4 lg:p-6 bg-red-600 mt-3 lg:mt-6 rounded-xl gap-3 lg:gap-4 flex flex-wrap items-center justify-center'>

        <div className='bg-green-400 p-3 lg:p-4 w-full h-96 lg:w-[49%] rounded-md relative group overflow-hidden'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1gJMkYJmKc5LGORN_R_uKiH0Inilnac9X1Q&s'
            alt='project thumbnail'
            className='absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-80 group-hover:scale-105 transition-all duration-400 ease-linear'
          />

          <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center text-center'>
            <div className='text-white'>
              <h3 className='text-2xl lg:text-3xl font-bold'>Project Title</h3>
              <p className='mt-2 text-base'>Some brief information about the project.</p>
              <p className='w-full flex items-center justify-center'>
                <NavLink
                  to="/project/2"
                  className="mt-3 py-1 flex items-center justify-center gap-3 border-b-2 border-white group"
                >
                  View Details
                  <FaLongArrowAltRight className='text-xl transform transition-transform group-hover:translate-x-2' />
                </NavLink>
              </p>
            </div>
          </div>
        </div>

        <div className='bg-green-400 p-3 lg:p-4 w-full h-96 lg:w-[49%] rounded-md relative group overflow-hidden'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1gJMkYJmKc5LGORN_R_uKiH0Inilnac9X1Q&s'
            alt='project thumbnail'
            className='absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-80 group-hover:scale-105 transition-all duration-400 ease-linear'
          />

          <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center text-center'>
            <div className='text-white'>
              <h3 className='text-2xl lg:text-3xl font-bold'>Project Title</h3>
              <p className='mt-2 text-base'>Some brief information about the project.</p>
              <p className='w-full flex items-center justify-center'>
                <NavLink
                  to="/project/2"
                  className="mt-3 py-1 flex items-center justify-center gap-3 border-b-2 border-white group"
                >
                  View Details
                  <FaLongArrowAltRight className='text-xl transform transition-transform group-hover:translate-x-2' />
                </NavLink>
              </p>
            </div>
          </div>
        </div>

        <div className='bg-green-400 p-3 lg:p-4 w-full h-96 lg:w-[49%] rounded-md relative group overflow-hidden'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1gJMkYJmKc5LGORN_R_uKiH0Inilnac9X1Q&s'
            alt='project thumbnail'
            className='absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-80 group-hover:scale-105 transition-all duration-400 ease-linear'
          />

          <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center text-center'>
            <div className='text-white'>
              <h3 className='text-2xl lg:text-3xl font-bold'>Project Title</h3>
              <p className='mt-2 text-base'>Some brief information about the project.</p>
              <p className='w-full flex items-center justify-center'>
                <NavLink
                  to="/project/2"
                  className="mt-3 py-1 flex items-center justify-center gap-3 border-b-2 border-white group"
                >
                  View Details
                  <FaLongArrowAltRight className='text-xl transform transition-transform group-hover:translate-x-2' />
                </NavLink>
              </p>
            </div>
          </div>
        </div>

        <div className='bg-green-400 p-3 lg:p-4 w-full h-96 lg:w-[49%] rounded-md relative group overflow-hidden'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1gJMkYJmKc5LGORN_R_uKiH0Inilnac9X1Q&s'
            alt='project thumbnail'
            className='absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-80 group-hover:scale-105 transition-all duration-400 ease-linear'
          />

          <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center text-center'>
            <div className='text-white'>
              <h3 className='text-2xl lg:text-3xl font-bold'>Project Title</h3>
              <p className='mt-2 text-base'>Some brief information about the project.</p>
              <p className='w-full flex items-center justify-center'>
                <NavLink
                  to="/project/2"
                  className="mt-3 py-1 flex items-center justify-center gap-3 border-b-2 border-white group"
                >
                  View Details
                  <FaLongArrowAltRight className='text-xl transform transition-transform group-hover:translate-x-2' />
                </NavLink>
              </p>
            </div>
          </div>
        </div>

        <div className='bg-green-400 p-3 lg:p-4 w-full h-96 lg:w-[49%] rounded-md relative group overflow-hidden'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1gJMkYJmKc5LGORN_R_uKiH0Inilnac9X1Q&s'
            alt='project thumbnail'
            className='absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-80 group-hover:scale-105 transition-all duration-400 ease-linear'
          />

          <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center text-center'>
            <div className='text-white'>
              <h3 className='text-2xl lg:text-3xl font-bold'>Project Title</h3>
              <p className='mt-2 text-base'>Some brief information about the project.</p>
              <p className='w-full flex items-center justify-center'>
                <NavLink
                  to="/project/2"
                  className="mt-3 py-1 flex items-center justify-center gap-3 border-b-2 border-white group"
                >
                  View Details
                  <FaLongArrowAltRight className='text-xl transform transition-transform group-hover:translate-x-2' />
                </NavLink>
              </p>
            </div>
          </div>
        </div>

        <div className='bg-green-400 p-3 lg:p-4 w-full h-96 lg:w-[49%] rounded-md relative group overflow-hidden'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1gJMkYJmKc5LGORN_R_uKiH0Inilnac9X1Q&s'
            alt='project thumbnail'
            className='absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-80 group-hover:scale-105 transition-all duration-400 ease-linear'
          />

          <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center text-center'>
            <div className='text-white'>
              <h3 className='text-2xl lg:text-3xl font-bold'>Project Title</h3>
              <p className='mt-2 text-base'>Some brief information about the project.</p>
              <p className='w-full flex items-center justify-center'>
                <NavLink
                  to="/project/2"
                  className="mt-3 py-1 flex items-center justify-center gap-3 border-b-2 border-white group"
                >
                  View Details
                  <FaLongArrowAltRight className='text-xl transform transition-transform group-hover:translate-x-2' />
                </NavLink>
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ProjectsPage