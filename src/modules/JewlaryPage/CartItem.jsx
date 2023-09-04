import React from 'react';

const CartItem = ({ item }) => {
    return (
        <div>
               <h2>items in cart </h2>
      <div className="cart-item w-[25%] flex">
      <img src={item.imageSrc} alt={item.title} className="cart-item-image w-[10%]" />
      <div>
        <h3>{item.title}</h3>
        <p>Price: ${item.price}</p>
      </div>
    </div>
     </div>
  );
};

export default CartItem;
