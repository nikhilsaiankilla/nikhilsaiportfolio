import React from 'react'

const PageTitle = ({ title }) => {
    return (
        <h1 class="text-xl md:text-2xl lg:text-5xl capitalize font-bold inline-block rounded-md">
            {title}
        </h1>
    )
}

export default PageTitle