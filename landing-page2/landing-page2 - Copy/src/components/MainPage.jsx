import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";

const MainPage = () => {
  return (
    <div className="w-[50vw] h-[120vh] mx-auto text-white flex flex-col bg-[#3490e5]">
      <div className="w-[60%] mx-auto ">
        <div className="flex flex-col justify-center items-center leading-tight py-6">
          <div className="text-[22px] font-bold">POSTER A4 / FLYER A5</div>
          <div>Webinar</div>
        </div>
        <Section1></Section1>
        <Section2></Section2>
        <Section3></Section3>
        <Section4></Section4>
      </div>
    </div>
  );
};

export default MainPage;
