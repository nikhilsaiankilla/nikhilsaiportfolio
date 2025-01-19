import PageTitle from './../components/PageTitle';

const SkillsPage = () => {
  const skills = [
    { name: "react js", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQITV1JMSFvp7hF8bNDJk_uDnCwmnU-D-ufbQ&s" },
    { name: "Node js", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQITV1JMSFvp7hF8bNDJk_uDnCwmnU-D-ufbQ&s" },
    { name: "Express js", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQITV1JMSFvp7hF8bNDJk_uDnCwmnU-D-ufbQ&s" },
    { name: "MySql", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQITV1JMSFvp7hF8bNDJk_uDnCwmnU-D-ufbQ&s" },
    { name: "HTML", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQITV1JMSFvp7hF8bNDJk_uDnCwmnU-D-ufbQ&s" },
    { name: "CSS", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQITV1JMSFvp7hF8bNDJk_uDnCwmnU-D-ufbQ&s" },
    { name: "react js", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQITV1JMSFvp7hF8bNDJk_uDnCwmnU-D-ufbQ&s" },
    { name: "Node js", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQITV1JMSFvp7hF8bNDJk_uDnCwmnU-D-ufbQ&s" },
    { name: "Express js", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQITV1JMSFvp7hF8bNDJk_uDnCwmnU-D-ufbQ&s" },
    { name: "MySql", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQITV1JMSFvp7hF8bNDJk_uDnCwmnU-D-ufbQ&s" },
    { name: "HTML", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQITV1JMSFvp7hF8bNDJk_uDnCwmnU-D-ufbQ&s" },
    { name: "CSS", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQITV1JMSFvp7hF8bNDJk_uDnCwmnU-D-ufbQ&s" },
    { name: "react js", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQITV1JMSFvp7hF8bNDJk_uDnCwmnU-D-ufbQ&s" },
    { name: "Node js", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQITV1JMSFvp7hF8bNDJk_uDnCwmnU-D-ufbQ&s" },
    { name: "Express js", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQITV1JMSFvp7hF8bNDJk_uDnCwmnU-D-ufbQ&s" },
    { name: "MySql", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQITV1JMSFvp7hF8bNDJk_uDnCwmnU-D-ufbQ&s" },
    { name: "HTML", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQITV1JMSFvp7hF8bNDJk_uDnCwmnU-D-ufbQ&s" },
    { name: "CSS", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQITV1JMSFvp7hF8bNDJk_uDnCwmnU-D-ufbQ&s" },
    { name: "react js", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQITV1JMSFvp7hF8bNDJk_uDnCwmnU-D-ufbQ&s" },
    { name: "Node js", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQITV1JMSFvp7hF8bNDJk_uDnCwmnU-D-ufbQ&s" },
    { name: "Express js", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQITV1JMSFvp7hF8bNDJk_uDnCwmnU-D-ufbQ&s" },
    { name: "MySql", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQITV1JMSFvp7hF8bNDJk_uDnCwmnU-D-ufbQ&s" },
    { name: "HTML", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQITV1JMSFvp7hF8bNDJk_uDnCwmnU-D-ufbQ&s" },
    { name: "CSS", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQITV1JMSFvp7hF8bNDJk_uDnCwmnU-D-ufbQ&s" },
  ]
  return (
    <section className='w-[97%] h-[94%] bg-[#C1BAB0] m-1 lg:m-5 p-3 md:p-8 lg:p-12 xl:p-16 border-2 border-[#1C1C19] overflow-y-scroll scrollbar-custom scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent texture' >
      <PageTitle title="my Skills" />
      <div className="w-full texture mt-3 lg:mt-6 gap-4 py-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {
          skills?.map(skill => (
            <div className="w-32 h-40 lg:w-48 lg:h-52 flex items-center justify-center flex-col gap-2 my-1 SmallStyledReceipt">
              <div className="w-full h-40">
                <img
                  src={skill?.image}
                  alt={skill?.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-[#1a1a1a] navLinksStyle">{skill?.name}</h4>
            </div>
          ))
        }
      </div>

    </section>
  )
}

export default SkillsPage