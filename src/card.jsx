// Card.jsx
import React, { useState } from 'react';

const Card = ({ sentences }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === sentences.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? sentences.length - 1 : prevIndex - 1));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      
      <p>{sentences[currentIndex]}</p>
      <div className="bg-white shadow-md rounded p-4 m-4">
        <button onClick={handlePrev} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-l">
          Prev
        </button>
        <button onClick={handleNext} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r">
          Next
        </button>
      </div>
    </div>
  );
};

export default Card;
