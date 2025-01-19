import { SiLeetcode } from "react-icons/si";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import Button from "../components/Button";

const HomePage = () => {
  return (
      <section className='w-[97%] h-[94%] bg-[#C1BAB0] m-5 p-6 md:p-8 lg:p-12 xl:p-16 flex items-start justify-center flex-col border-2 border-[#1C1C19]'>
        <h1 className='text-3xl font-bold md:font-extrabold sm:text-5xl lg:text-6xl xl:text-7xl text-[#1C1C19]'>Hey I'm <br /> Nikhil Sai Ankilla, <br /> Software Developer Engineer, <br /> based in Hyd.</h1>
        <div className="flex gap-4 mt-5 md:mt-8 ">
          <span>
            <FaLinkedin className="text-xl md:text-3xl font-bold cursor-pointer text-[#1C1C19]"/>
          </span>
          <span>
            <SiLeetcode className="text-xl md:text-3xl font-bold cursor-pointer text-[#1C1C19]"/>
          </span>
          <span>
            <FaInstagram className="text-xl md:text-3xl font-bold cursor-pointer text-[#1C1C19]"/>
          </span>
          <span>
            <FaXTwitter className="text-xl md:text-3xl font-bold cursor-pointer text-[#1C1C19]"/>
          </span>
          <span>
            <FaGithub className="text-xl md:text-3xl font-bold cursor-pointer text-[#1C1C19]"/>
          </span>
        </div>

        <div className="flex gap-2 mt-4 md:mt-8 flex-wrap">
          <Button title="Download Resume" link="https://excalidraw.com/"/>
          <Button title="About Me" link="https://excalidraw.com/"/>
        </div>
      </section>
  )
}

export default HomePage