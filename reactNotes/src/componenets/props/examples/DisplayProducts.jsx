let DisplayProducts = (props) => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-8">
        Product List
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {props.data.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex flex-col items-center">
              <img
                className="w-24 h-24 rounded-md shadow-md mb-4"
                src={product.thumbnail}
              />
              <h2 className="text-lg font-semibold text-gray-700 text-center">
                {product.title}
              </h2>
              <p className="text-gray-500 text-center">
                {product.description}
              </p>
              <p className="text-gray-800 font-bold mt-2">
                ${product.price.toFixed(2)}
              </p>
              <p className="text-gray-500 text-sm">
                Rating: {product.rating} ⭐
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayProducts;
