import React, { useEffect } from "react";

const UseEffectEx8ForEx7 = () => {
  let timer = setInterval(() => {
    console.log("child component removed");
  }, 1000);

  useEffect(() => {
    // Clearance
    return () => {
      console.log("child component removed");
      clearInterval(timer);
    };
  });

  return <div>UseEffectEx8ForEx7</div>;
};

export default UseEffectEx8ForEx7;
