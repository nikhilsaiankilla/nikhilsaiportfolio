
import Headers from './../sections/Header';

import { Outlet } from 'react-router-dom';

const Template = () => {

    return (
        <div className='w-full min-h-screen flex items-center flex-col gap-5 bg-[#FEF3E2]'>
            <Headers/>
            <main className='w-[95%] h-[97%] bg-[#C1BAB0] lg:absolute lg:top-5 lg:right-2 lg:w-[90%] lg:h-[95%] xl:h-[96%] xl:w-[92%]'>
                <Outlet/>
            </main>
        </div>
    )
}

export default Template