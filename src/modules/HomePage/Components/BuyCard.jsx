import React, { useState } from "react";

const BuyCarditem = ({
  title,
  imageSrc,
  price,
  description,
  updateCartItems,
}) => {
  const [quantity, setQuantity] = useState(1);

  const addToCart = () => {
    const newItem = {
      name: title,
      quantity: quantity,
      price: price,
    };
    updateCartItems((prevItems) => [...prevItems, newItem]);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="bg-white shadow-md p-6 rounded-lg border mb-2 border-black sm:w-[80%] w-[100%]">
      <div className="aspect-w-4 aspect-h-3 mb-4">
        <img
          src={imageSrc}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>
      <h3 className="text-lg md:text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap justify-between items-center">
        <span className="text-xl md:text-2xl font-bold text-black">
          ${parseFloat(price) * quantity.toFixed(2)}{" "}
        </span>
        <div className="flex items-center">
          <button onClick={decreaseQuantity}>-</button>
          <span className="mx-2">{quantity}</span>
          <button onClick={increaseQuantity}>+</button>
        </div>
        <button
          onClick={addToCart}
          className="text-black border-black border px-3 hover:text-blue-600 hover:border-yellow-300 py-1"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default BuyCarditem;
