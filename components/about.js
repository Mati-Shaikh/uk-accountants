import React, { useState } from 'react';

// Import any necessary styles for the image if required

const LogoComponent = () => {
  const [hoveredCity, setHoveredCity] = useState(null);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white pb-24">
      {/* Left Side: Content Section */}
      <div className="flex-1 flex flex-col justify-center items-center bg-white p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">A family firm.</h2>
          <p className="text-gray-700 mb-4">
          Our advice isn’t just built on an in-depth knowledge of tax and accounting but also on real-world experience running and working for SMEs.

We’re led by a close-knit father and son team across two offices, one in Birmingham and one on the Cornish coast, in Falmouth.

Between them, Tom and Ian have experience of supporting businesses in most sectors, from tech startups to dentists, and enjoy helping small businesses across the UK achieve their full potential.
          </p>
          <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300">
            Our Story
          </button>
        </div>
      </div>

      {/* Right Side: Image Section */}
      <div className="relative w-full md:w-1/2 h-96 md:h-auto mt-16 pr-4"> {/* Added mt-16 for spacing */}
        <img 
          src="/boss.jpeg" // Replace with the actual path to your image
          alt="Services Across the UK"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default LogoComponent;
