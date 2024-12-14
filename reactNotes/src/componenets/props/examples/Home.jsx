import { useState } from "react";
import Header from "./Header";

let Home = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Header data = {{isLoggedIn, setIsLoggedIn}} />
    </div>
  )
}

export default Home;