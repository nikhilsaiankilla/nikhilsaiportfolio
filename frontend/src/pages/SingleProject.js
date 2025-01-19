import Button from './../components/Button';
import PageTitle from '../components/PageTitle';

const SingleProject = () => {
  return (
    <section className='w-[97%] h-[94%] bg-[#C1BAB0] m-1 lg:m-5 p-6 md:p-8 lg:p-12 border-2 border-[#1C1C19] overflow-y-scroll scrollbar-custom scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent texture'>
      <PageTitle title="project title" />
      <div className='w-full h-screen md:h-96 p-2 lg:p-4 border-2 border-[#1a1a1a]'>
        <div className='w-full h-full overflow-hidden'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpu-FlGMi8tIw7zLxcOX2RxsAyaQC_OR2Bxg&s'
            alt='project photo'
            className='w-full h-full object-cover hover:scale-105 transition-all duration-200 ease-in'
          />
        </div>
      </div>
      <div className='w-full p-4 md:p-5'>
        <h2 className='text-center font-medium text-xl md:text-2xl lg:text-3xl capitalize mt-3'>project tagline</h2>
        <div className='w-full flex items-center justify-between'>
          <div className='flex items-center justify-between gap-5'>
            <Button title="Demo" />
            <Button title="Code" />
          </div>
          <div className='flex gap-5'>
            <Button title="edit" />
            <Button title="delete" />
          </div>
        </div>

        <div className='w-full project-desc'>

        </div>
      </div>
    </section>
  )
}

export default SingleProject