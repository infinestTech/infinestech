import React from 'react';
import '../css/Card.css'; // Make sure this path is correct

const Card = ({ img, title, content, flipDirection,className }) => {
  
  return (
    <div className={`box-item ${className} mr-20 ml-20`}>
      <div className="flip-box font-poppins">
        <div className="flip-box-front text-center" style={{ backgroundImage: `url(${img})` }}>
          <div className="inner ">
            <h3 className="flip-box-header text-yellow-500 font-bold ">{title}</h3>
            <p className='backtopper '>{content}</p>
           
          </div>
        </div>
        <div className="flip-box-back text-center" style={{ backgroundImage: `url(${img})` }}>
          <div className="inner ">
            <h3 className="flip-box-header text-yellow-500 font-bold">{title}</h3>
            <p className='backtopper '>{content}</p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
