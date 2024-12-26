import React, { useEffect, useState } from "react";

// When we passs empty state in dependancy  array it act as a componentDidMount() life cycle method.
// So that it will execute only once throught the life-cycle.
// It will execute at the end of the mounting phase.
// We will use this syntax mostly for calling the API's so that API's will not get called uneccessaryly and repeatedly.

const UseEffectEx2 = () => {
  let [state, setState] = useState(0);
  useEffect(() => {
    let fun = async () => {
      let jsonData = await fetch("https://api.github.com/users");
      let data = await jsonData.json();
      console.log(data);
      console.log(
        "use effect only called only once when component changes when we pass the state in the array argument"
      );
    };
    fun();
  }, []);

  return (
    <div>
      <h3>
        when we passs empty state in dependancy array it act as a component did
        mount life cycle methode
        <br></br>so that it will execute only once throught the lifecycle
        <br></br> It will execute at the end of the mounting phase.
        <br></br> We will use this syntax mostly for calling the API's so that
        API's will not get called uneccessaryly and repeatedly
      </h3>
      <h2>{state}</h2>
      <button
        className="bg-rose-400 px-4 text-white"
        onClick={() => {
          setState(state + 1);
        }}
      >
        Increament
      </button>
    </div>
  );
};

export default UseEffectEx2;
