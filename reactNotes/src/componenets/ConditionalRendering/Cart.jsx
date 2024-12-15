import { products } from "./Home";

let Cart = ({ cartItems }) => {
  let removeItem = (id) => {
    products.pop();
    // cartItems.pop();
  };
  console.log(cartItems);

  return (
    <div className="p-4 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-gray-600">${item.price}</p>
                </div>
              </div>
              <button
                onClick={() => {
                  removeItem(item.id);
                }}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
