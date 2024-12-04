let JsxRule3 = () => {
  return (
    <div> 
      <p> <b>Rule 3 : </b> Each & Every tag in JSX must be closed. Otherwise we will get error.</p>
    </div>

    //! With closing tags

    // <div>
    //   <br />
    //   <hr />
    //   <img src="" alt="" />
    //   <input type="text" />
    // </div>

    //! Without closing tags

    // <div>
    //   <br >
    //   <hr >
    //   <img src="" alt="" >
    //   <input type="text" >
    // </div>

  )
}

export default JsxRule3;