import { Fragment } from "react";

let JsxRule5Fragment = () => {
  return  (

    <>
      <h1>Rule 5 : React Fragment</h1>
      <p>- This are the empty angular braces.</p>
      <p>- By using React fragments we are avoiding creation of extra nodes so that it will help to boost the app performance.</p>
      <p>- We can write the fragments in 3 ways :</p>
        <p>1] By using empty angular braces.</p>
        <p>2] By using React.Fragment  </p>
        <p>3] By using Fragment only but for this we need to import Fragment from react like import <span>{"{ Fragment }"}</span> from "react";</p>
    </>

      //! Way-1 :  1] By using empty angular braces.

      // <>
      // </>

    //! Way-2 : 2] By using React.Fragment

    // <React.Fragment>
    // </React.Fragment>

    //! Way-3 : By using Fragment only but for this we need to import Fragment from react like import { Fragment }from "react";

    // <Fragment></Fragment>

    //! Why we need React.Fragment when we have <> </> ?

    // By using empty angular braces we cannot use key attribute.
    // But by using React.Fragment & Fragment we can use key attribute but we have to pass the value otherwise we will get compile time error.
    
  )
}

export default JsxRule5Fragment;