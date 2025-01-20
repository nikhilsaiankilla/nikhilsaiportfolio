import React from 'react'

const PageTitle = ({ title }) => {
    return (
        <h1 className="text-3xl lg:text-8xl font-extrabold text-center py-4 md:py-6 bg-[#161616] text-[#e0c9a6dc] capitalize mb-4 lg:mb-7 pageTitle">
            {title}.
        </h1>
    )
}

export default PageTitle