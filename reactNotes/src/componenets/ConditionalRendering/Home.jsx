let Home = () => {
  return (
    <div>
       <header className="flex justify-between items-center p-6 bg-gray-800 text-white">
      
            <div className="text-lg font-bold flex items-center space-x-2 text-yellow-500">
              <SiFlipkart className="w-8 h-8" />
              <span>Flipkart</span>
            </div>
      
            <div className="flex space-x-4">
              {
                props.data.isLoggedIn ? (
                  <>
                    <a href="#" className="hover:text-gray-400">Home</a>
                    <a href="#" className="hover:text-gray-400">Menu</a>
      
                    <a href="#" className="hover:text-gray-400" onClick={() => {
                      props.data.setIsLoggedIn(false)
                      alert('Logout Successful')
                    }}>LogOut</a>
                  </>
                ) : (
                  <>
                    <a href="#" className="hover:text-gray-400" onClick={() => {
                      alert("Please Login")
                    }}>Home</a>
      
                    <a href="#" className="hover:text-gray-400">Menu</a>
      
                    <a href="#" className="hover:text-gray-400" onClick={() => {
                      props.data.setIsLoggedIn(true)
                      alert('Logn successful')
                    }}>Login</a>
      
                    <a href="#" className="hover:text-gray-400">SignUp</a>
                  </>
                )
              }
            </div>
          </header>
    </div>
  )
}

export default Home;