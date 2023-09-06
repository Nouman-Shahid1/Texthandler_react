import React from "react";
import { Link } from "react-router-dom";
// import BuyNow from "./BuyNow";
const BuyCard = ({ title, imageSrc, price, description,link, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart({ title, imageSrc, price ,link});
  };
 
  return (
    <div className="bg-white shadow-md p-6 rounded-lg border mb-2 border-black sm:w-[80%] w-[100%]">
    <div className="aspect-w-4 aspect-h-3 mb-4">
      <img src={imageSrc} alt={title} className="object-cover w-full h-full" />
    </div>
    <h3 className="text-lg md:text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="flex flex-wrap justify-between items-center">
      <span className="text-xl md:text-2xl font-bold text-black">${price}</span>
      <button
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-900 transition duration-300"
            onClick={() => {
              window.location.href = link;
            }}
          >
            Buy Now
          </button>
                  <button onClick={handleAddToCart} className='bg-black text-white px-4 py-2 rounded-md hover:bg-gray-900 transition duration-300'>Add to Cart</button>
    </div>
  </div>
  );
};

export default BuyCard;
