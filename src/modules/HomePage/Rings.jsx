import React from "react";
import BuyCard from "../HomePage/Components/BuyCard";
import { Link } from "react-router-dom";

export const Rings = ({ updateCartItems }) => {
  return (
    <div>
      <div className="w-full p-1 mt-16 text-center pt-14">
        <h1 className="text-xl md:text-2xl lg:text-5xl font-bold text-center pb-14">
          Our Jewellery Price
        </h1>
        <div className="md:grid md:grid-cols-4 gap-7 mt-9 w-[90%] mx-auto">
          <BuyCard
            title="Golden Ring"
            imageSrc="images/ring.png"
            price="10.00"
            description="Golden Titanium Rings For Girls beautiful ring in shiny"
            updateCartItems={updateCartItems}
          />
          <BuyCard
            title="Finger Rose Flower Ring"
            imageSrc="images/ring3.png"
            price="10.00"
            description="Rose Flower Adjustable Stylish Finger Rose Flower Ring"
            updateCartItems={updateCartItems}
          />
          <BuyCard
            title="Golden Ring"
            imageSrc="images/i-1.png"
            price="15.00"
            description="Beautiful Golden Ring with stylish Design And adjustable Price"
            updateCartItems={updateCartItems}
          />
          <BuyCard
            title="Golden Ring"
            imageSrc="images/ring.png"
            price="10.00"
            description="Golden Titanium Rings For Girls beautiful ring in shiny"
            updateCartItems={updateCartItems}
          />
        </div>
        <Link to="/jewellery">
          <button className="text-black mt-20 hover:text-white hover:bg-[#f7bb2d] bg-white border border-[#FAC851] hover:border-yellow-300 text-base md:text-lg lg:text-xl font-medium px-4 py-2">
            <a href="#" className="block w-full h-full">
              See More
            </a>
          </button>
        </Link>
      </div>
      <div class="w-full mx-auto  py-6 md:py-12">
        <div class="flex flex-col w-[80%] mx-auto py-8   shadow-2xl items-center md:flex-row md:gap-6">
          <div class="text-center md:w-1/2">
            <h4 class="text-xl md:text-3xl font-medium text-yellow-300">
              SPECIAL
            </h4>
            <h2 class="text-2xl md:text-4xl font-medium">Wedding Ring</h2>
            <button class="text-black mt-6 hover:text-black hover:bg-gray-200 border border-black text-sm md:text-base lg:text-lg font-medium px-4 py-2">
              <a href="#" class="block w-full h-full">
                Buy Now
              </a>
            </button>
          </div>
          <div class="mt-6 md:mt-0">
            <img src="images/ring-img.jpg" alt="" class="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
