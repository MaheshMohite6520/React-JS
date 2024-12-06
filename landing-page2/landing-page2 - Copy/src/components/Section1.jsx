import React from "react";
import logo from "../assets/logo.png";

const Section1 = () => {
  return (
    <div className="flex flex-row border-b-[1px] border-gray-900">
      {/*//! Section-1 */}
      {/* Block-1 */}
      <div className="w-[40%] h-[15vh] bg-white flex flex-row justify-center items-center ">
        <div className="flex flex-row gap-2">
          <div>
            <img className="w-[40px]" src={logo} alt="" />
          </div>
          <div className="flex flex-col justify-center text-[12px] font-bold text-gray-800 leading-tight">
            <div>Business</div>
            <div>Webinar</div>
          </div>
        </div>
      </div>

      {/* Block-2 */}
      <div className="w-[30%] h-[15vh] bg-white text-gray-900 flex flex-col justify-center border-x-[1px] border-gray-900 italic px-6">
        <div className="font-bold text-[14px]">Join Now</div>
        <div className="text-[8px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem maxime.</div>
      </div>

      {/* Block-3 */}
      <div className="w-[30%] h-[15vh] bg-[#ffb23c] px-2 py-2 flex flex-row justify-center items-center">
        <div className="text-[16px] text-gray-900 font-bold italic leading-tight text-center">
          FREE FOR EVERYONE
        </div>
      </div>
    </div>
  );
};

export default Section1;
