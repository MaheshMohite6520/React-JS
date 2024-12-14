import Home from "./examples/Home";
import PropsEx1 from "./examples/PropsEx1";
import PropsEx2 from "./examples/PropsEx2";
import PropsEx3 from "./examples/PropsEx3";
import Task from "./examples/Task";

// Props are nothing but properties which is used to send data from one component to another component in the form of object,
// Props are immutable.
// We can create Props in CBC & FBC.
// RFC : React Arrow function component
// RCC : React Arrow Class Component
// 

let PropsIntro = () => {
  return (
    <div>

    {/* <h1>PropsIntro</h1> */}

    {/* <PropsEx1/> */}

    {/* <PropsEx2/> */}

    {/* <PropsEx3 /> */}

    {/* <Task /> */}

    <Home />

    </div>
  )
}

export default PropsIntro;