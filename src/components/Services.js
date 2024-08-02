import React from 'react';

function Services() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-serif font-bold text-primary-dark mb-6 text-center">
        Our Services
      </h2>
      <ul className="list-disc pl-5 space-y-4 text-lg text-gray-700 max-w-2xl mx-auto">
        <li>Skin Consultations</li>
        <li>Acne Treatments</li>
        <li>Anti-Aging Solutions</li>
        <li>Laser Treatments</li>
      </ul>
    </div>
  );
}

export default Services;
