import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { SiLeetcode } from 'react-icons/si'

const Footer = () => {
  return (
    <div className='w-[93%] h-[50px] rounded-xl px-3 bg-blue-400 lg:w-[87%] xl:w-[90.2%] flex items-center justify-center md:justify-between flex-wrap gap-2'>
      <p className='text-md font-bold'>nikhilsaiankilla@gmail.com</p>
      <div className="flex gap-2">
        <span>
          <FaLinkedin className="text-md font-bold cursor-pointer text-black" />
        </span>
        <span>
          <SiLeetcode className="text-md font-bold cursor-pointer text-black" />
        </span>
        <span>
          <FaInstagram className="text-md font-bold cursor-pointer text-black" />
        </span>
        <span>
          <FaXTwitter className="text-md font-bold cursor-pointer text-black" />
        </span>
        <span>
          <FaGithub className="text-md font-bold cursor-pointer text-black" />
        </span>
      </div>
    </div>
  )
}

export default Footer