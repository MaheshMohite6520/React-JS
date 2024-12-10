import UseStateEx1 from "./examples/UseStateEx1";

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

      <UseStateEx1/>
      
    </div>
  )
}

export default UseState_Intro;