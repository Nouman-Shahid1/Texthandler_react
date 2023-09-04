import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"; 
const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <section className="gradient-form max-h-screen dark:bg-neutral-700">
      <div className="container mx-auto  ">
        <div className="g-6 flex flex-wrap items-center text-neutral-800 dark:text-neutral-200">
              <div className=" lg:flex lg:flex-wrap items-center">
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    <div className="text-center">
                      <img
                        className="mx-auto w-64"
                        src="images/login.png"
                        alt="logo"
                      />
                      <h4 className="mb-12 pb-1 text-xl font-semibold">
                        We are The ShopEase Team
                      </h4>
                    </div>
                    <form action="/" method="get">
                  <p className="mb-4">Please login to your account</p>
                  <div className="mb-4">
                    <label htmlFor="username" className="block text-gray-700">
                      Username
                    </label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                      required
                    />
                  </div>
                  <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
            <button
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <FontAwesomeIcon icon={faEyeSlash} />
              ) : (
                <FontAwesomeIcon icon={faEye} />
              )}
            </button>
          </div>
        </div>

                  <div className=" pb-1 pt-1 text-center">
                    <button
                      className=" inline-block w-full rounded px-6 pb-2 pt-2.5 bg-yellow-600 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                      type="submit"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      Login
                    </button>
                    <a href="#!">Forgot password?</a>
                  </div>
                  <div className="flex items-center justify-between pb-6">
                    <p className=" mr-2">Don't have an account?</p>
                    <button
                      type="button"
                      className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      <Link to="/signup">SignUP</Link>
                    </button>
                  </div>
                </form>
                  </div>
                </div>
                <div className="lg:w-6/12 ">
                  <div class="px-4 py-3 text-black  md:mx-6 md:p-12">
                    <h4 class="mb-6 text-xl font-semibold">
                      We are more than just a company
                    </h4>
                    <p class="text-sm">
                      Unlock the World of Elegance – Welcome to Shopease
                      Jewelry's Login Portal! Access your account and dive into
                      a realm of exquisite craftsmanship and timeless beauty.
                      Whether you're a returning patron or joining us for the
                      first time, your journey to discovering stunning jewelry
                      begins here. Experience seamless browsing, personalized
                      recommendations, and secure transactions. Your perfect
                      piece of jewelry awaits. Log in now to adorn yourself with
                      elegance." Feel free to adjust and tailor the description
                      to match the tone and branding of your Shopease Jewelry
                      website.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </section>
  );
};

export default LoginPage;
