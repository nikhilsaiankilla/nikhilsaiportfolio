import { LazyLoadImage } from 'react-lazy-load-image-component';

import 'react-lazy-load-image-component/src/effects/blur.css';
import { NavLink } from 'react-router-dom';
import { FaLongArrowAltRight } from "react-icons/fa";

import { trimText } from './../utils/utils';

const ProjectContainer = ({ project }) => {
    return (
        < div className='p-3 lg:p-4 w-full md:w-[49%] StyledReceipt texture-p my-2' key={project?.id}>
            <div className='w-full h-[70%] overflow-hidden border-4 border-[#1C1C19]'>

                <LazyLoadImage
                    effect="blur"
                    alt={project?.name + "Thumbnail"}
                    src={project?.image_url}
                    className="w-full h-full object-cover hover:scale-105 transition-all duration-400 ease-in-out"
                    wrapperProps={{
                        style: { transitionDelay: "1s" },
                    }}
                />

            </div>
            <div className='w-full py-5 flex items-start justify-center flex-col gap-2 text-white'>
                <h1 className='text-xl lg:text-4xl font-bold navLinksStyle'>{project?.name}</h1>
                <p className='text-base text-md navLinksStyle'>{trimText(project?.tagline, 50)}</p>
                <p className='w-full flex'>
                    <NavLink
                        to={`/project/${project?.id}`}
                        className="py-1 flex gap-3 border-b-2 border-white group navLinksStyle"
                    >
                        View Details
                        <FaLongArrowAltRight className='text-xl transform transition-transform group-hover:translate-x-2' />
                    </NavLink>
                </p>
            </div>
        </div >
    )
}

export default ProjectContainer