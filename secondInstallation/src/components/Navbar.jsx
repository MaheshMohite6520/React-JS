import logo from '../assets/logo.png';

import React from 'react'

const Navbar = () => {
  return (
    <div className='h-[17vh] flex flex-row justify-around items-center border-2 border-black'>
      <div className='flex flex-row gap-2'>
        <div><img className='w-[80px]' src={logo} alt="" /></div>
        <div className='flex flex-col justify-center text-[15px] font-bold text-gray-800'>
          <div>Business</div>
          <div>Webinar</div>
        </div>
      </div>
      <div className='flex flex-row text-[18px] gap-16 mx-10 font-bold text-gray-800'>
        <div>Home</div>
        <div>Campaign</div>
        <div>About</div>
        <div>Contact</div>
      </div>
      <div >
        <input type="text" className='border-2 border-gray-600' size={30} />
      </div>
    </div>
  )
}

export default Navbar