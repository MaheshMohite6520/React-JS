import Navbar from "./components/Navbar";
import Join from "./components/Join";
import Title from "./components/Title";
import Image from "./assets/girl.png";
import Block1 from "./components/Block1";
import Block2 from "./components/Block2";
import Block3 from "./components/Block3";

function App() {
  return (
    <div className="w-[100vw] border-b-2 border-black bg-black">
      <div className="w-[80vw] mx-auto bg-white">
      <Navbar />
      <div className="flex flex-row ">
        <div className="w-[42%] border-x-2 border-black">
          <Join></Join>
          <Title></Title>
        </div>
        <div className="w-[35%] border-2">
        <img src={Image} alt="" />
        </div>
        
        <div className="w-[23%] border-x-2 border-black">
          <Block1></Block1>
          <Block2></Block2>
          <Block3></Block3>
        </div>
      </div>
      </div>
      
    </div>
  );
}

export default App;
