const ProjectContainerSkeleton = () => {
    return (
        <div className='p-3 lg:p-4 w-full h-[500px] md:w-[49%] StyledReceipt texture-p my-2'>
            <div className='w-full h-[70%] overflow-hidden bg-gray-300 animate-pulse'>
            </div>

            <div className='w-full h-[30%] flex items-start justify-center flex-col gap-2 text-white'>
                <div className='h-6 w-[70%] bg-gray-300 animate-pulse rounded'></div>
                <div className='h-4 w-[90%] bg-gray-300 animate-pulse rounded'></div>
                <div className='h-5 w-[40%] bg-gray-300 animate-pulse rounded'></div>
            </div>
        </div>

    )
}

export default ProjectContainerSkeleton