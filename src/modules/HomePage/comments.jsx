import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const Reviews = (props) => {
  return (
    <div className="py-10 text-center">
      <h2 className='lg:text-4xl md:text-2xl sm:text-xl text-2xl font-bold'>Testimonial</h2>
      <h4 className='lg:text-2xl font-medium mt-4 mb-8'>
        What is says our customer
      </h4>
      <div className="max-w-5xl mx-auto">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
          transitionTime={500}
          emulateTouch={true}
        >
          {props.reviews.map(review => (
            <div key={review.id} className="p-6 rounded-md bg-white shadow-md items-center md:flex flex-wrap text-center  justify-between">
              <div className='flex w-[45%] items-center gap-8'>
                <div className='w-[35%]'><img src="images/client.png" alt="" /></div>
                <div className='sm:block flex gap-2' >
                  <p className="text-xl font-extrabold">{review.name}</p>
                  <p className="text-yellow-400 text-lg font-medium">{review.position}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4 md:w-[55%] w-full text-center md:text-left">
                {review.text}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
