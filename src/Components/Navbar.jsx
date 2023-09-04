import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import CartItem from '../modules/JewlaryPage/CartItem';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]); // State to hold cart items

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <nav className="">
      <div className="px-2 sm:px-6 lg:px-8 pt-4">
        <div className="relative flex items-center justify-between h-16 sm:h-auto">
          <div className="flex items-center">
            <img className="h-10 w-auto" src="images/logo.png" alt="Your Company" />
            <span className="ml-2 md:text-xl sm:text-base font-extrabold">ShopEase</span>
          </div>

          <div className={`hidden sm:block ml-6 ${isMobileMenuOpen ? 'hidden' : ''}`}>
            <div className="flex space-x-12 items-center">
  <Link to="/" className="text-white hover:text-yellow-300 px-3 py-2 text-lg font-medium">Home</Link>
  <Link to="/about" className="text-white hover:text-yellow-300 px-3 py-2 text-lg font-medium">About</Link>
  <Link to="/jewellery" className="text-white hover:text-yellow-300 px-3 py-2 text-lg font-medium">Jewellery</Link>
  <Link to="/contact" className="text-white hover:text-yellow-300 px-3 py-2 text-lg font-medium">Contact us</Link>
  <Link to="/login" className="text-white hover:text-yellow-300 px-3 py-2 text-lg font-medium">Login</Link>
              <div className="navbar-cart">
                <FaShoppingCart onClick={toggleCart} className='text-white'/>
                {isCartOpen && (
                  <div className="cart-dropdown">
                    {cartItems.length > 0 ? (
                      cartItems.map((item, index) => (
                        <CartItem key={index} item={item} />
                      ))
                    ) : (
                      <p>Your cart is empty.</p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className={`fixed top-0 right-0 bg-yellow-300 w-2/3 z-10 h-screen transform transition-transform ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} id="mobile-menu-overlay">
            <div className="py-16 px-4 flex flex-col items-end ">
              <Link to="/" className="text-white hover:bg-yellow-300 block rounded-md px-3 py-2 text-base font-medium">Home</Link>
              <Link to="/about" className="text-white hover:bg-yellow-300 block rounded-md px-3 py-2 text-base font-medium">About</Link>
              <Link to="/jewellery" className="text-white hover:bg-yellow-300 block rounded-md px-3 py-2 text-base font-medium">Jewellery</Link>
              <Link to="/contact" className="text-white hover:bg-yellow-300 block rounded-md px-3 py-2 text-base font-medium">Contact us</Link>
              <Link to="/login" className="text-white hover:bg-yellow-300 block rounded-md px-3 py-2 text-base font-medium">Login</Link>
            </div>
          </div>

          <button
            type="button"
            onClick={toggleMobileMenu}
            className={`sm:hidden relative z-10 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`}
            aria-controls="mobile-menu-overlay"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <svg className={`hidden h-6 w-6 ${isMobileMenuOpen ? 'hidden' : ''}`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
       
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
