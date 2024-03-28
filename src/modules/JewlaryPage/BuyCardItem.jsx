import React from "react";

const BuyCarditem = ({ title, imageSrc, price, description, addToCart }) => {
  const handleAddToCart = () => {
    addToCart({ title, imageSrc, price });
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
          ${price}
        </span>
        <button
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-900 transition duration-300"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default BuyCarditem;
