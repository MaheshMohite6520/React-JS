import DisplayProducts from "./DisplayProducts";

let Task = () => {

  const products = [
    {
      "id": 1,
      "title": "iPhone 13",
      "description": "Latest Apple smartphone with A15 Bionic chip",
      "price": 999,
      "rating": 4.8,
      "stock": 50,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://via.placeholder.com/150"
    },
    {
      "id": 2,
      "title": "Samsung Galaxy S21",
      "description": "Flagship phone with powerful performance",
      "price": 799,
      "rating": 4.7,
      "stock": 75,
      "brand": "Samsung",
      "category": "smartphones",
      "thumbnail": "https://via.placeholder.com/150"
    },
    {
      "id": 3,
      "title": "MacBook Pro 16",
      "description": "High-performance laptop for professionals",
      "price": 2499,
      "rating": 4.9,
      "stock": 30,
      "brand": "Apple",
      "category": "laptops",
      "thumbnail": "https://via.placeholder.com/150"
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
  ]

  return  (
    <div>
      <DisplayProducts data = {products} />
    </div>
  )
}

export default Task;