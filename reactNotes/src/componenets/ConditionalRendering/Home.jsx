import { useState } from "react";
import { SiFlipkart } from "react-icons/si";
import { FaShoppingCart } from "react-icons/fa";
import Cart from "./Cart";
export const products = [
  {
    id: 1,
    title: "iPhone 13",
    description: "Latest Apple smartphone with A15 Bionic chip",
    price: 999,
    rating: 4.8,
    stock: 50,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Samsung Galaxy S21",
    description: "Flagship phone with powerful performance",
    price: 799,
    rating: 4.7,
    stock: 75,
    brand: "Samsung",
    category: "smartphones",
    thumbnail: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "MacBook Pro 16",
    description: "High-performance laptop for professionals",
    price: 2499,
    rating: 4.9,
    stock: 30,
    brand: "Apple",
    category: "laptops",
    thumbnail: "https://via.placeholder.com/150",
  },
  {
    "id": 4,
    "title": "Dell XPS 13",
    "description": "Ultra-portable laptop with stunning display",
    "price": 1199,
    "rating": 4.6,
    "stock": 40,
    "brand": "Dell",
    "category": "laptops",
    "thumbnail": "https://via.placeholder.com/150"
  },
  {
    "id": 5,
    "title": "Sony WH-1000XM4",
    "description": "Noise-canceling wireless headphones",
    "price": 349,
    "rating": 4.8,
    "stock": 100,
    "brand": "Sony",
    "category": "headphones",
    "thumbnail": "https://via.placeholder.com/150"
  },
  {
    "id": 6,
    "title": "Logitech MX Master 3",
    "description": "Advanced wireless mouse for productivity",
    "price": 99,
    "rating": 4.7,
    "stock": 200,
    "brand": "Logitech",
    "category": "accessories",
    "thumbnail": "https://via.placeholder.com/150"
  },
  {
    "id": 7,
    "title": "Samsung QLED TV",
    "description": "65-inch 4K UHD smart TV with HDR",
    "price": 1399,
    "rating": 4.5,
    "stock": 25,
    "brand": "Samsung",
    "category": "televisions",
    "thumbnail": "https://via.placeholder.com/150"
  },
  {
    "id": 8,
    "title": "PlayStation 5",
    "description": "Next-gen gaming console",
    "price": 499,
    "rating": 4.9,
    "stock": 15,
    "brand": "Sony",
    "category": "gaming",
    "thumbnail": "https://via.placeholder.com/150"
  },
  {
    "id": 9,
    "title": "Amazon Echo Dot",
    "description": "Smart speaker with Alexa",
    "price": 49,
    "rating": 4.6,
    "stock": 150,
    "brand": "Amazon",
    "category": "smart home",
    "thumbnail": "https://via.placeholder.com/150"
  },
  {
    "id": 10,
    "title": "Fitbit Charge 5",
    "description": "Fitness tracker with health metrics",
    "price": 179,
    "rating": 4.4,
    "stock": 60,
    "brand": "Fitbit",
    "category": "wearables",
    "thumbnail": "https://via.placeholder.com/150"
  }
];

let Home = () => {

  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div>
    
      <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <div className="text-lg font-bold flex items-center space-x-2 text-yellow-500">
          <SiFlipkart className="w-8 h-8" />
          <span>Flipkart</span>
        </div>
        <button
          onClick={() => setShowCart(!showCart)}
          className="flex items-center space-x-2 bg-yellow-500 text-gray-800 px-4 py-2 rounded-lg hover:bg-yellow-400 transition duration-300 ease-in-out"
        >
          <FaShoppingCart className="w-5 h-5" />
          <span>Cart ({cartItems.length})</span>
        </button>
      </div>

      
      {showCart ? (
        <Cart cartItems={cartItems} />
      ) : (
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 bg-gray-100">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-40 object-cover rounded-md"
              />
              <h2 className="text-lg font-bold mt-2">{product.title}</h2>
              <p className="text-gray-600 text-sm mt-1">{product.description}</p>
              <p className="text-gray-800 font-semibold mt-2">${product.price}</p>
              <p className="text-yellow-500 text-sm">Rating: {product.rating}</p>
              <button
                onClick={() => addToCart(product)}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
