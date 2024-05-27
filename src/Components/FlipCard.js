import React from 'react';
import '../css/index.css'; 

const FlipCard = ({ frontImage, title, content }) => {
  return (
    <div className="flip-card font-poppins w-64 h-80  mx-auto my-8 cursor-pointer overflow-hidden">
      <div className="flip-card-inner relative w-full h-full">
        <div className="card-face front absolute w-full h-full bg-white shadow-md rounded-lg">
          <img src={frontImage} alt="Front" className="object-cover rounded-lg w-full h-full" />
          <div className="absolute bottom-0 w-full text-center bg-opacity-75 bg-white py-2">
            <h2 className="text-xl font-semibold ">{title}</h2>
          </div>
        </div>
        <div className="card-face back absolute w-full h-full shadow-md rounded-lg flex flex-col justify-center items-center transform rotate-y-180">
          <div className="p-4">
            <h2 className="text-xl font-bold mb-1 text-yellow-500">{title}</h2>
            <p className='bg-gradient-to-r text-black font-bold'>{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
