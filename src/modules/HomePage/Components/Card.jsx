import React from "react";

const Card = (props) => {
  return (
   
<a href="#" className="w-80 h-auto px-6 pt-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex items-center">
  <div className="flex-grow">
    <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.heading}</h6>
    <p className="font-normal text-gray-700 dark:text-gray-400">{props.text}</p>
  </div>
  <div className="flex-shrink-0 ml-4">
    <img src={props.src} alt="" className="w-28 h-28" />
  </div>
</a>



  );
};

export default Card;
