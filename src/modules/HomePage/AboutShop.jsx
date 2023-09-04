import React from "react";

export const AboutShop = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="w-full max-w-[1200px] px-4 md:px-6 lg:px-8 xl:px-10 mt-24">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-[55%]">
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                About Jewellery Shop
              </h2>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Welcome to ShopEase Jewelry, where elegance meets affordability.
                Explore our exquisite collection of finely crafted jewelry
                pieces that cater to all tastes and occasions. Discover timeless
                designs that effortlessly blend sophistication and style,
                curated to bring a touch of glamour to your life. Indulge in the
                art of accessorizing with ShopEase Jewelry today
              </p>
              <button className="text-white hover:text-black hover:bg-white bg-black border border-black hover:border-black text-base md:text-lg lg:text-xl font-medium px-6 py-2 mt-7">
                <a href="#" className="block w-full h-full">
                  Read More
                </a>
              </button>
            </div>
            <div className="md:ml-4 md:w-[45%]">
              <img
                src="images/about-img.png"
                alt=""
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

    </>
  );
};
