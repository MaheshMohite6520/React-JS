import twitter from './assets/twitter.png'; 
import facebook from './assets/facebook.png'; 
import whatsapp from './assets/whatsapp.png'; 
import instagram from './assets/instagram.png'; 

let Logos = () => {
  return (
    <div>

    <div>
      <img src={twitter} alt="twitter" />
    </div>
    <div>
      <img src={whatsapp} alt="whatsapp" />
    </div>
    <div>
      <img src={facebook} alt="facebook" />
    </div>
    <div>
      <img src={instagram} alt="instagram" />
    </div>

    </div>
  )
}

export default Logos;