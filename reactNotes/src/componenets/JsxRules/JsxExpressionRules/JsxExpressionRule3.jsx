import { Fragment } from "react";

let JsxExpressionRule3 = () => {

  let nums = [1, 214, 34, 4, 7]

  return (
    <div>
      <h3>JsxExpressionRule3 : </h3>
      
      <p>- We cannot use all looping statements inside JSX Expression.</p>
      <p>- We can use only the higher order functions, but all of the higher order functions are not useful, only those are useful that can return the JSX.</p>
    </div>

//     <div>
//       <p>Numbers are {nums.map((val, i) => {
 //       // instead of creating new elements we go with fragments
//         return <Fragment key={i}>{val + " "}</Fragment>
//       })}</p>

// <p>Numbers are {nums.filter((val, i) => {
//                 //instead of creating new elements we go with fragments
//                 return val > 10 && <Fragment key={i}>{val + " "}</Fragment>
//             })}</p>
//     </div>

    
  )
}

export default JsxExpressionRule3;