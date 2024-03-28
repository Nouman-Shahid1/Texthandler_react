import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaPlus,
  FaMinus,
} from "react-icons/fa";

function NavBar({ cartItems, setCartItems }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const increaseQuantity = (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity++;
    setCartItems(updatedCart);
  };

  const decreaseQuantity = (index) => {
    const updatedCart = [...cartItems];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity--;
    }
    setCartItems(updatedCart);
  };

  return (
    <nav className="fixed z-50 top-0 w-full bg-[#FAC851] pb-2">
      <div className="px-2 sm:px-6 lg:px-8 pt-4">
        <div className="relative flex items-center justify-between h-16 sm:h-auto">
          <div className="flex items-center">
            <img
              className="h-10 w-auto"
              src="images/logo.png"
              alt="Your Company"
            />
            <span className="ml-2 md:text-xl sm:text-base font-extrabold text-black">
              ShopEase
            </span>
          </div>

          <button
            onClick={toggleMobileMenu}
            className="sm:hidden text-white flex items-center focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>

          <div
            className={`hidden sm:block ml-6 ${
              isMobileMenuOpen ? "hidden" : ""
            }`}
          >
            <div className="flex space-x-12 items-center">
              <Link
                to="/"
                className="text-white hover:text-yellow-300 px-3 py-2 text-lg font-medium"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-white hover:text-yellow-300 px-3 py-2 text-lg font-medium"
              >
                About
              </Link>
              <Link
                to="/jewellery"
                className="text-white hover:text-yellow-300 px-3 py-2 text-lg font-medium"
              >
                Jewellery
              </Link>
              <Link
                to="/contact"
                className="text-white hover:text-yellow-300 px-3 py-2 text-lg font-medium"
              >
                Contact us
              </Link>
              <Link
                to="/login"
                className="text-white hover:text-yellow-300 px-3 py-2 text-lg font-medium"
              >
                Login
              </Link>
              <div className="relative">
                <button
                  onClick={toggleCart}
                  className="text-white flex items-center focus:outline-none"
                >
                  <span className="mr-1">
                    <FaShoppingCart className="h-6 w-6" />
                  </span>
                  Cart{" "}
                  <span className="ml-1 text-yellow-200">
                    ({cartItems.length})
                  </span>
                </button>
                {isCartOpen && (
                  <div className="absolute top-12 z-50 right-0 bg-white p-2 shadow-md w-96">
                    {cartItems.length > 0 ? (
                      <>
                        <ul className="divide-y divide-gray-200">
                          {cartItems.map((item, index) => (
                            <li key={index} className="py-2">
                              <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                  <span className="text-gray-900">
                                    {item.name}
                                  </span>
                                  <button
                                    onClick={() => removeFromCart(index)}
                                    className="text-red-700 hover:text-red-900 focus:outline-none ml-2"
                                  >
                                    <FaTimes />
                                  </button>
                                </div>
                                <div className="flex items-center">
                                  <button
                                    onClick={() => decreaseQuantity(index)}
                                    className="text-gray-700 hover:text-gray-900 focus:outline-none"
                                  >
                                    <FaMinus />
                                  </button>
                                  <span className="text-gray-600 mx-2">
                                    {item.quantity}
                                  </span>
                                  <button
                                    onClick={() => increaseQuantity(index)}
                                    className="text-gray-700 hover:text-gray-900 focus:outline-none"
                                  >
                                    <FaPlus />
                                  </button>
                                </div>
                                <span className="text-gray-600">
                                  ${item.price * item.quantity.toFixed(2)}
                                </span>
                              </div>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4 flex justify-between items-center">
                          <span className="text-gray-700 font-semibold">
                            Total:
                          </span>
                          <span className="text-gray-900 font-semibold">
                            ${totalPrice.toFixed(2)}
                          </span>
                        </div>
                        <div className="mt-4">
                          <button
                            onClick={clearCart}
                            className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:text-red-900 focus:outline-none mr-2"
                          >
                            Clear Cart
                          </button>
                          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:text-green-900 focus:outline-none">
                            Checkout
                          </button>
                        </div>
                      </>
                    ) : (
                      <p className="text-gray-500">Your cart is empty.</p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div
            className={`fixed top-0 right-0 bg-yellow-300 w-[50%] z-10 h-screen transform transition-transform ease-in-out ${
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
            id="mobile-menu-overlay"
          >
            <div className="py-2 px-0 flex flex-col items-end ">
              <svg
                onClick={toggleMobileMenu}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
              <div className="py-2 px-4 flex flex-col items-end ">
                <Link
                  to="/"
                  className="text-white hover:bg-yellow-300 block rounded-md px-3 py-2 text-base font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-white hover:bg-yellow-300 block rounded-md px-3 py-2 text-base font-medium"
                >
                  About
                </Link>
                <Link
                  to="/jewellery"
                  className="text-white hover:bg-yellow-300 block rounded-md px-3 py-2 text-base font-medium"
                >
                  Jewellery
                </Link>
                <Link
                  to="/contact"
                  className="text-white hover:bg-yellow-300 block rounded-md px-3 py-2 text-base font-medium"
                >
                  Contact us
                </Link>
                <Link
                  to="/login"
                  className="text-white hover:bg-yellow-300 block rounded-md px-3 py-2 text-base font-medium"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
