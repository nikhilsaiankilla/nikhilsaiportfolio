import React from 'react'

const skillsSkeleton = () => {
    return (
        <div className="w-32 h-40 lg:w-48 lg:h-52 flex items-center justify-center flex-col gap-2 my-1 SmallStyledReceipt">
            <div className="w-full h-40 p-2">
                <div className="w-full h-full bg-gray-200 animate-pulse rounded"></div>
            </div>
            <div className="w-[90%] h-6 bg-gray-200 animate-pulse rounded"></div>
        </div>
    )
}

export default skillsSkeleton