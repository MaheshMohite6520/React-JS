let JsxRule3 = () => {
  return (
    <div>
      <h1> Rule 3 : </h1> 
      <p> - Each & Every tag in JSX must be closed. Otherwise we will get error.</p>
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