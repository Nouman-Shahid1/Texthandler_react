import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Card from "./Components/Card";

export const MainSection = () => {
  return (
    <>
      <div>
        <section className="">
          <div className="carousel-container pt-36 mx-auto w-[95%] sm:w-[73%]">
            <Carousel
              showStatus={false}
              showThumbs={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={5000}
              stopOnHover={false}
              showArrows={false}
            >
              <div className="carousel-item flex flex-col md:flex-row gap-24 items-center w-full">
                <div className="carousel-text lg:w-[45%] md:w-[60%] sm:w-[75%] w-[90%] text-left">
                  <h2 className="text-black text-3xl md:text-4xl lg:text-3xl font-semibold mb-2">
                    New Collection
                  </h2>
                  <h1 className="text-black text-4xl md:text-5xl lg:text-8xl font-extrabold mb-4">
                    Jewellery
                  </h1>
                  <p className="text-black text-sm md:text-base lg:text-lg mb-6">
                    Elegance and brilliance come together in this exquisite
                    diamond ring. Crafted with precision, the timeless design
                    showcases a dazzling diamond, radiating a captivating
                    sparkle. An embodiment of eternal love and sophistication,
                    this ring is the perfect symbol for cherished moments and
                    unforgettable memories. Make a statement that lasts a
                    lifetime with this remarkable piece
                  </p>
                  <div>
                    <button className="text-white hover:text-black hover:bg-white bg-black border border-black hover:border-black text-base md:text-lg lg:text-xl font-medium px-4 py-2">
                      <a href="#" className="block w-full h-full">
                        Shop Now
                      </a>
                    </button>
                  </div>
                </div>
                <div className=" lg:w-[50%] md:w-[65%] sm:w-[85%] w-[70%]">
                  <img src="images/slider-img.png" alt="" className="-mt-8" />
                </div>
              </div>
              <div className="carousel-item flex flex-col md:flex-row gap-24 items-center w-full">
                <div className="carousel-text lg:w-[45%] md:w-[60%] sm:w-[75%] w-[90%] text-left">
                  <h2 className="text-black text-3xl md:text-4xl lg:text-3xl font-semibold mb-2">
                    New Collection
                  </h2>
                  <h1 className="text-black text-4xl md:text-5xl lg:text-8xl font-extrabold mb-4">
                    Jewellery
                  </h1>
                  <p className="text-black text-sm md:text-base lg:text-lg mb-6">
                    Elegance and brilliance come together in this exquisite
                    diamond ring. Crafted with precision, the timeless design
                    showcases a dazzling diamond, radiating a captivating
                    sparkle. An embodiment of eternal love and sophistication,
                    this ring is the perfect symbol for cherished moments and
                    unforgettable memories. Make a statement that lasts a
                    lifetime with this remarkable piece
                  </p>
                  <div>
                    <button className="text-white hover:text-black hover:bg-white bg-black border border-black hover:border-black text-base md:text-lg lg:text-xl font-medium px-4 py-2">
                      <a href="#" className="block w-full h-full">
                        Shop Now
                      </a>
                    </button>
                  </div>
                </div>
                <div className=" lg:w-[50%] md:w-[65%] sm:w-[85%] w-[70%]">
                  <img src="images/slider-img.png" alt="" className="-mt-8" />
                </div>
              </div>
              <div className="carousel-item flex flex-col md:flex-row gap-24 items-center w-full">
                <div className="carousel-text lg:w-[45%] md:w-[60%] sm:w-[75%] w-[90%] text-left">
                  <h2 className="text-black text-3xl md:text-4xl lg:text-3xl font-semibold mb-2">
                    New Collection
                  </h2>
                  <h1 className="text-black text-4xl md:text-5xl lg:text-8xl font-extrabold mb-4">
                    Jewellery
                  </h1>
                  <p className="text-black text-sm md:text-base lg:text-lg mb-6">
                    Elegance and brilliance come together in this exquisite
                    diamond ring. Crafted with precision, the timeless design
                    showcases a dazzling diamond, radiating a captivating
                    sparkle. An embodiment of eternal love and sophistication,
                    this ring is the perfect symbol for cherished moments and
                    unforgettable memories. Make a statement that lasts a
                    lifetime with this remarkable piece
                  </p>
                  <div>
                    <button className="text-white hover:text-black hover:bg-white bg-black border border-black hover:border-black text-base md:text-lg lg:text-xl font-medium px-4 py-2">
                      <a href="#" className="block w-full h-full">
                        Shop Now
                      </a>
                    </button>
                  </div>
                </div>
                <div className=" lg:w-[50%] md:w-[65%] sm:w-[85%] w-[70%]">
                  <img src="images/slider-img.png" alt="" className="-mt-8" />
                </div>
              </div>
            </Carousel>
          </div>
        </section>
      </div>
      <div className="flex flex-wrap mx-auto w-[90%] sm:w-[70%] gap-16 mt-16 sm:mt-32">
        <Card heading="BEST PRICE" src="images/i-1.png" text="Bracelet" />
        <Card heading="BEST PRICE" src="images/ring.png" text="Ring" />
        <Card heading="BEST PRICE" src="images/i-3.png" text=" Earings" />
      </div>
    </>
  );
};
