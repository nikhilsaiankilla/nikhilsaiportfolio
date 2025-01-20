import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSkills } from '../slicer/features/skillsSlice';
import useFetch from './../hooks/useFetch';
import PageTitle from './../components/PageTitle';
import SkillsSkeleton from './../components/skillsSkeleton';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import 'react-lazy-load-image-component/src/effects/blur.css';
const SkillsPage = () => {
  const dispatch = useDispatch();

  const skills = useSelector((state) => state.skills.skills);

  const { data, loading, error } = useFetch(skills.length === 0 ? '/getAllSkills' : null);

  if (error) {
    console.log(error);
  }

  useEffect(() => {
    if (data?.data && skills?.length === 0) {
      dispatch(setSkills(data?.data));
    }
  }, [data, dispatch, skills?.length]);

  return (
    <section className='w-[97%] h-[94%] bg-[#C1BAB0] m-1 lg:m-5 p-3 md:p-8 lg:p-12 xl:p-16 border-2 border-[#1C1C19] overflow-y-scroll scrollbar-custom scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent texture'>
      <PageTitle title="My Skills" />
      <div className="w-full texture mt-3 lg:mt-6 gap-4 py-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 place-items-center">
        {loading && skills.length === 0 ? (
          Array.from({ length: 12 }).map((_, index) => (
            <SkillsSkeleton key={index} />
          ))
        ) : skills.length < 1 ? (
          <p className='text-2xl font-bold text-center mt-5 navLinksStyle text-[#1a1a1a]'>
            No Skills Found.
          </p>
        ) : (
          skills.map((skill) => (
            <div
              key={skill.id}
              className="w-32 h-40 lg:w-48 lg:h-52 flex items-center justify-center flex-col gap-2 my-1 SmallStyledReceipt"
              id={skill.id}
            >
              <div className="w-full h-40 p-2">
                <LazyLoadImage
                  effect="blur"
                  alt={skill.name}
                  src={skill.image_url}
                  className="w-full h-full object-contain"
                  wrapperProps={{
                    style: { transitionDelay: "1s" },
                  }}
                />
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-[#1a1a1a] navLinksStyle capitalize">
                {skill.name}
              </h4>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default SkillsPage;
