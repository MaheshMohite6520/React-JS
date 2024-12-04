let JsxRule2 = () => {

  return (

    //! Rule 2 : At a time we can return only one element. If we want to return more than one element then we must wrap them inside one single parent element.

    //! It will work.
    <div>
      <div> <b>Rule 2 :</b> </div>
      <div>- At a time we can return only one element.</div>
      <div>- If we want to return more than one element then we must wrap them inside one single parent element.</div>
    </div>

     //! It will not work.

    //  <div>Rule 2 : </div>
    //  <div>At a time we can return only one element.</div>
    //  <div>If we want to return more than one element then we must wrap them inside one single parent element.</div>


  )
}

export default JsxRule2;