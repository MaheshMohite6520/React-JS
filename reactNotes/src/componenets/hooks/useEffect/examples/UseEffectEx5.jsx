import React, { useEffect, useState } from "react";

const UseEffectEx5 = () => {
  let [cartItem, setCartItem] = useState(0);
  let [total, setTotal] = useState(0);

  useEffect(() => {
    console.log("Item added to the cart", total);
    setTotal(total + cartItem);
  }, [cartItem]);

  useEffect(() => {
    total > 1000
      ? console.log("you will get free delevery")
      : console.log("you will not get free delevery");
  }, [total]);

  return (
    <div>
      <h2 className="text-[30px]">{cartItem}</h2>
      <br />
      <br />
      <h2 className="text-[30px]">{total}</h2>
      <br />
      <br />
      <button
        className="bg-rose-400 px-4 text-white h-10 rounded-lg m-5"
        onClick={() => {
          setCartItem(cartItem + 100);
        }}
      >
        Add To Cart
      </button>

      <br />
      <br />
      <button
        className="bg-rose-400 px-4 text-white h-10 rounded-lg m-5"
        onClick={() => {
          setTotal(total + cartItem);
        }}
      >
        Total
      </button>
    </div>
  );
};

export default UseEffectEx5;
