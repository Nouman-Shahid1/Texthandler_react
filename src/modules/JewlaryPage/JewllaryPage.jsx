import React, { useState } from 'react';
// import BuyCarditem from './BuyCard';
// import BuyCarditem from './BuyCardItem';
import CartItem from './CartItem';

import BuyCard from '../HomePage/Components/BuyCard';

export const JewelleryPage = () => {
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

                  <div className="w-full p-1 mt-16 text-center pt-14">
        <h1 className="text-xl md:text-2xl lg:text-5xl font-bold text-center pb-14">
          Our Jewellery Price
        </h1>
      <div className="md:grid md:grid-cols-4 gap-7 mt-9 w-[90%] mx-auto">
      
                  <BuyCard
          title="Baby bath Seat"
          imageSrc="images/baby.png"
            price="10.00"
                      description="Golden Titanium Rings For Girls beautiful ring in shiny"
                      onAddToCart={handleAddToCart}
        />
        <BuyCard
          title="Personalized name rings"
          imageSrc="images/ring2.png"
          price="10.00"
          description="Personalized name rings - beautiful ring in shiny"
          onAddToCart={handleAddToCart}
        />
        <BuyCard
          title="Finger Rose Flower Ring"
          imageSrc="images/ring3.png"
          price="10.00"
          description="Rose Flower Adjustable Stylish Finger Rose Flower Ring"
          onAddToCart={handleAddToCart}
        />
        <BuyCard
          title="Golden Ring"
          imageSrc="images/i-1.png"
          price="15.00"
          description="Beautiful Golden Ring with stylish Design And adjustable Price"
          onAddToCart={handleAddToCart}
              />
                 <BuyCard
          title="Golden Ring"
          imageSrc="images/ring.png"
          price="10.00"
          description="Golden Titanium Rings For Girls beautiful ring in shiny"
          onAddToCart={handleAddToCart}
        />
        <BuyCard
          title="Personalized name rings"
          imageSrc="images/ring2.png"
          price="10.00"
          description="Personalized name rings - beautiful ring in shiny"
          onAddToCart={handleAddToCart}
        />
        <BuyCard
          title="Finger Rose Flower Ring"
          imageSrc="images/ring3.png"
          price="10.00"
          description="Rose Flower Adjustable Stylish Finger Rose Flower Ring"
          onAddToCart={handleAddToCart}
        />
        <BuyCard
          title="Golden Ring"
          imageSrc="images/i-1.png"
          price="15.00"
          description="Beautiful Golden Ring with stylish Design And adjustable Price"
          onAddToCart={handleAddToCart}
              />
                 <BuyCard
          title="Golden Ring"
          imageSrc="images/ring.png"
          price="10.00"
          description="Golden Titanium Rings For Girls beautiful ring in shiny"
          onAddToCart={handleAddToCart}
        />
        <BuyCard
          title="Personalized name rings"
          imageSrc="images/ring2.png"
          price="10.00"
          description="Personalized name rings - beautiful ring in shiny"
          onAddToCart={handleAddToCart}
        />
        <BuyCard
          title="Finger Rose Flower Ring"
          imageSrc="images/ring3.png"
          price="10.00"
          description="Rose Flower Adjustable Stylish Finger Rose Flower Ring"
          onAddToCart={handleAddToCart}
        />
        <BuyCard
          title="Golden Ring"
          imageSrc="images/i-1.png"
          price="15.00"
          description="Beautiful Golden Ring with stylish Design And adjustable Price"
          onAddToCart={handleAddToCart}
              />
                 <BuyCard
          title="Golden Ring"
          imageSrc="images/ring.png"
          price="10.00"
          description="Golden Titanium Rings For Girls beautiful ring in shiny"
          onAddToCart={handleAddToCart}
        />
        <BuyCard
          title="Personalized name rings"
          imageSrc="images/ring2.png"
          price="10.00"
          description="Personalized name rings - beautiful ring in shiny"
          onAddToCart={handleAddToCart}
        />
        <BuyCard
          title="Finger Rose Flower Ring"
          imageSrc="images/ring3.png"
          price="10.00"
          description="Rose Flower Adjustable Stylish Finger Rose Flower Ring"
          onAddToCart={handleAddToCart}
        />
        <BuyCard
          title="Golden Ring"
          imageSrc="images/i-1.png"
          price="15.00"
          description="Beautiful Golden Ring with stylish Design And adjustable Price"
          onAddToCart={handleAddToCart}
        />
      </div>
      </div>
    </div>
  );
};
