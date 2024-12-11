import { useState } from "react";

let UseStateEx4 = () => {

  const [square, setSquare] = useState(false)

  return (
    <div>

      <h3>UseStateEx4</h3>

      <button onClick={() => {
         setSquare(!square)
      }}>
        Change Shape
      </button>

      <div style={{
        height : 100,
        width : 100,
        backgroundColor : 'orange',
        borderRadius : square ? 0 : 50
      }}>

      </div>

    </div>
  )
}

export default UseStateEx4;