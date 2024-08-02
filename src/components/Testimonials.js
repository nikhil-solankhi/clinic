import React from 'react';

function Testimonials() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-serif font-bold text-primary-dark mb-6 text-center">
        Testimonials
      </h2>
      <div className="space-y-8 max-w-2xl mx-auto">
        <blockquote className="text-lg text-gray-700 border-l-4 border-primary-dark pl-4">
          <p>"The best dermatology clinic I've ever been to. Highly recommend!"</p>
          <footer>- John Doe</footer>
        </blockquote>
        <blockquote className="text-lg text-gray-700 border-l-4 border-primary-dark pl-4">
          <p>"Amazing service and great results. Will definitely come back!"</p>
          <footer>- Jane Smith</footer>
        </blockquote>
      </div>
    </div>
  );
}

export default Testimonials;
