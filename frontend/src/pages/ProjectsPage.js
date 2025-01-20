import PageTitle from './../components/PageTitle';
import { useDispatch, useSelector } from 'react-redux';
import useFetch from '../hooks/useFetch';
import { useEffect } from 'react';
import { setProjects } from './../slicer/features/projectsSlice';

import ProjectContainer from '../components/ProjectContainer';
import ProjectContainerSkeleton from '../components/ProjectContainerSkeleton';

const ProjectsPage = () => {
  const dispatch = useDispatch();
  const projects = useSelector(state => state.projects.projects);

  const { data, loading, error } = useFetch(projects?.length === 0 ? '/getAllProjects' : null);

  if (error) {
    console.log(error);
  }

  useEffect(() => {
    if (data?.data && projects?.length === 0) {
      dispatch(setProjects(data?.data));
    }
  }, [data, dispatch, projects?.length]);

  return (
    <section className='w-[97%] h-[94%] bg-[#C1BAB0] m-1 lg:m-5 p-4 md:p-8 lg:p-12 xl:p-16 border-2 border-[#1C1C19] overflow-y-scroll scrollbar-custom scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent texture'>
      <PageTitle title="Projects I Made" />
      <div className='w-full mt-3 lg:mt-6 rounded-xl gap-3 lg:gap-4 flex flex-wrap items-center justify-center '>

        {loading && projects.length === 0 ? (
          Array.from({ length: 4 }).map((_, index) => (
            <ProjectContainerSkeleton key={index} />
          ))
        ) : projects.length < 1 ? (
          <p className='text-2xl font-bold text-center mt-5 navLinksStyle text-[#1a1a1a]'>
            No Projects Found.
          </p>
        ) : (
          projects.map((project) => (
            <ProjectContainer project={project} key={project?.id} />
          ))
        )}

      </div>
    </section>
  )
}

export default ProjectsPage

