import Button from './../components/Button';

const SingleProject = () => {
  return (
    <section className='w-full h-full rounded-md bg-[#FA812F] p-2 sm:p-4 md:p-6 lg:p-8 overflow-y-scroll scrollbar-custom scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent'>
      <div className='w-full h-screen md:h-2/3 rounded-lg overflow-hidden'>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpu-FlGMi8tIw7zLxcOX2RxsAyaQC_OR2Bxg&s'
          alt='project photo'
          className='w-full h-full object-cover hover:scale-105 transition-all duration-300 ease-in'
        />
      </div>
      <div className='w-full p-4 md:p-7 lg:p-10 mt-4'>
        <h1 className='text-center font-bold text-3xl md:text-4xl lg:text-6xl capitalize'>Project title</h1>
        <h2 className='text-center font-medium text-xl md:text-2xl lg:text-3xl capitalize mt-3'>project tagline</h2>
        <div className='w-full flex items-center justify-between'>
          <div className='flex items-center justify-between gap-5'>
            <Button title="Demo" />
            <Button title="Code" />
          </div>
          <div className='flex gap-5'>
            <Button title="edit" />
            <Button title="delete"/>
          </div>
        </div>

        <div className='w-full project-desc'>
          
        </div>
      </div>
    </section>
  )
}

export default SingleProject