import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { TfiFacebook } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa6";

const Block3 = () => {
  return (
    <div className='px-20 py-14'>
      <div className='grid grid-cols-2 gap-y-4 '>
        <div className='bg-black rounded-full w-[40px] h-[40px] mx-auto place-items-center place-content-center'>
          <FaTwitter color='white' size={20}/>
        </div>
        <div className='bg-black rounded-full w-[40px] h-[40px] mx-auto place-items-center place-content-center'>
          <FaWhatsapp color='white' size={20}/>
        </div>
        <div className='bg-black rounded-full w-[40px] h-[40px] mx-auto place-items-center place-content-center'>
          <TfiFacebook color='white' size={20}/>
        </div>
        <div className='bg-black rounded-full w-[40px] h-[40px] mx-auto place-items-center place-content-center'>
          <FaInstagram color='white' size={20}/>
        </div>
      </div>
    </div>
  )
}

export default Block3