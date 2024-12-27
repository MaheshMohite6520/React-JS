import React, { useState } from "react";

const ShoppingCart = () => {
  const [cart, setCart] = useState({
    apple: { quantity: 0, price: 1.5 },
    banana: { quantity: 0, price: 0.75 },
  });

  const addToCart = (product) => {
    setCart((prevCart) => ({
      ...prevCart,
      [product]: {
        ...prevCart[product],
        quantity: prevCart[product].quantity + 1,
      },
    }));
  };

  const removeFromCart = (product) => {
    if (cart[product].quantity > 0) {
      setCart((prevCart) => ({
        ...prevCart,
        [product]: {
          ...prevCart[product],
          quantity: prevCart[product].quantity - 1,
        },
      }));
    }
  };

  const getCartTotal = () => {
    const appleTotal = cart.apple.quantity * cart.apple.price;
    const bananaTotal = cart.banana.quantity * cart.banana.price;
    return appleTotal + bananaTotal;
  };

  const getTotalQuantity = () => {
    return cart.apple.quantity + cart.banana.quantity;
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded p-6 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

        {/* Product 1: Apple */}
        <div className="mb-4 flex justify-between items-center">
          <span>Apple - ${cart.apple.price}</span>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => addToCart("apple")}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Add to Cart
            </button>
            <button
              onClick={() => removeFromCart("apple")}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Remove from Cart
            </button>
            <span>Quantity: {cart.apple.quantity}</span>
          </div>
        </div>

        {/* Product 2: Banana */}
        <div className="mb-4 flex justify-between items-center">
          <span>Banana - ${cart.banana.price}</span>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => addToCart("banana")}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Add to Cart
            </button>
            <button
              onClick={() => removeFromCart("banana")}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Remove from Cart
            </button>
            <span>Quantity: {cart.banana.quantity}</span>
          </div>
        </div>

        {/* Total Quantity and Price */}
        <div className="mt-6 text-lg font-semibold">
          <p>Total Quantity: {getTotalQuantity()}</p>
          <p>Total Price: ${getCartTotal().toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
