import React from "react";
import BuyCard from "../HomePage/Components/BuyCard";

export const JewelleryPage = ({ updateCartItems }) => {

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
          <BuyCard
            title="Personalized name rings"
            imageSrc="images/ring2.png"
            price="10.00"
            description="Personalized name rings - beautiful ring in shiny"
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
          <BuyCard
            title="Personalized name rings"
            imageSrc="images/ring2.png"
            price="10.00"
            description="Personalized name rings - beautiful ring in shiny"
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
          <BuyCard
            title="Personalized name rings"
            imageSrc="images/ring2.png"
            price="10.00"
            description="Personalized name rings - beautiful ring in shiny"
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
        </div>
      </div>
    </div>
  );
};
