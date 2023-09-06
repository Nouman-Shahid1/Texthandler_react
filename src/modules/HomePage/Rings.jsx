import React from 'react'
import BuyCard from './Components/BuyCard'
import CartItem from '../JewlaryPage/CartItem';
import { useState } from 'react';
export const Rings = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };
  return (
    <div>
      <div className="cart">
        
        {cartItems.map((item, index) => (
          <CartItem key={index} item={item} />
        ))}
      </div>
                <div className="w-full bg-gray-100 p-1 mt-16 text-center pt-14">
        <h1 className="text-xl md:text-2xl lg:text-5xl font-bold text-center pb-14">
          Our Jewellery Price
        </h1>
        <div className="md:flex gap-12 mt-9 w-[82%] mx-auto">
          <BuyCard
            title="Golden Ring"
            imageSrc="images/ring.png"
            price="10.00"
            link="https://amzn.to/44L4vmq"
            description="Golden Titanium Rings For Girls beautiful ring in shiny"
            onAddToCart={handleAddToCart}
          />
          <BuyCard
            title="Personalized name rings"
            imageSrc="images/ring2.png"
            price="10.00"
            link="https://amzn.to/44L4vmq"
            description="Personalized name rings - beautiful ring in shiny"
            onAddToCart={handleAddToCart}
          />
          <BuyCard
            title="Finger Rose Flower Ring"
            imageSrc="images/ring3.png"
            price="10.00"
            link="https://amzn.to/44L4vmq"
            description="Rose Flower Adjustable Stylish Finger Rose Flower Ring"
            onAddToCart={handleAddToCart}
          />
          <BuyCard
            title="Golden Ring"
            imageSrc="images/i-1.png"
            price="15.00"
            link="https://amzn.to/44L4vmq"
            description="Beautiful Golden Ring with stylish Design And adjustable Price"
            onAddToCart={handleAddToCart}
          />
        </div>
        <button className="text-white mt-20 hover:text-black hover:bg-white bg-black border border-black hover:border-black text-base md:text-lg lg:text-xl font-medium px-4 py-2">
          <a href="#" className="block w-full h-full">
            See More
          </a>
        </button>
          </div>
          <div class='w-full mx-auto  py-6 md:py-12'>
    <div class='flex flex-col w-[80%] mx-auto py-8   shadow-2xl items-center md:flex-row md:gap-6'>
        <div class='text-center md:w-1/2'>
            <h4 class='text-xl md:text-3xl font-medium text-yellow-300'>SPECIAL</h4>
            <h2 class='text-2xl md:text-4xl font-medium'>Wedding Ring</h2>
            <button class="text-black mt-6 hover:text-black hover:bg-gray-200 border border-black text-sm md:text-base lg:text-lg font-medium px-4 py-2">
                <a href="#" class="block w-full h-full">
                    Buy Now
                </a>
            </button>
        </div>
        <div class='mt-6 md:mt-0'>
            <img src="images/ring-img.jpg" alt="" class="w-full" />
        </div>
    </div>
</div>

    </div>
  )
}
