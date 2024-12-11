import UseStateEx1 from "./examples/UseStateEx1";
import UseStateEx2 from "./examples/UseStateEx2";
import UseStateEx3 from "./examples/UseStateEx3";
import UseStateEx4 from "./examples/UseStateEx4";
import UseStateEx5 from "./examples/UseStateEx5";
import UseStateEx6 from "./examples/UseStateEx6";

let UseState_Intro = () => {
  return (
    <div>
      <h1> useState Hook Introduction</h1>

      <h3>- Hooks : </h3>
      <p>Hooks are nothing but the in-built methods or functions.</p>
      <p>Hooks name starts with use.</p>
      <p>Ex. useState, useEffect, useContext, useRuducer, useDispatch, useCallback, useMemo</p>
      <p>We can create any function & will name it useXYZ. Such functions can be treated as 'custom hooks'.</p>

      {/* <p>Ex. 
        let useAddition = () => {
          return a + b;
      }
      
      let sum = useAddition(10, 20);
      consolle.log(sum);
      
      </p> */}

      {/* <UseStateEx1/> */}

      <UseStateEx2/>

      <UseStateEx3/>

      <UseStateEx4/>

      <UseStateEx5/>

      <UseStateEx6/>
      
    </div>
  )
}

export default UseState_Intro;