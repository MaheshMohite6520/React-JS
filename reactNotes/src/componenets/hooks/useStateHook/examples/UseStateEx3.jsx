import { useState } from "react";

let UseStateEx3 = () => {

  const [changeBackground, setChangeBackground] = useState(false)

  return (
   <div>

    <div>UseStateEx3</div>

     <div>
      <button 
      onClick={() => {
        setChangeBackground(!changeBackground)
      }}>
        Click
      </button>
    </div>

      <h1 style={{
        backgroundColor : changeBackground ? "red" : "white"
      }}>
        Hello
        </h1>
    
   </div>

  )
}

export default UseStateEx3;