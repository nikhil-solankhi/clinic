import React from 'react';

function Card({ title, description, imgSrc }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 p-4">
      <img src={imgSrc} alt={title} className="w-full h-32 object-cover rounded-t-lg" />
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-primary-dark">{title}</h3>
        <p className="text-gray-700 mt-2">{description}</p>
      </div>
    </div>
  );
}

export default Card;
