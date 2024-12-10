import { useState } from "react";

let UseStateEx1 = () => {

  let UseMyState = (a) => {
    let setMyState = (a) = {
      // Modify currnet state
    }
  
    return [a, setMyState];
  }
  
  let [state1, setMyState1] = UseMyState();
  console.log(state1)

  let [state, setState] = useState(0);

  return (
    <div>
      <h3>useState Example-1 : </h3>

      <h3>Count : {state}</h3>
      <button onClick={() => { setState(state + 1) } }>Increment</button>
    </div>

  )
}

export default UseStateEx1;
