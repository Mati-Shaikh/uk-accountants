import React, { useState } from 'react';
import { useRouter } from 'next/router';

// Import any necessary styles for the image if required

const LogoComponent = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/story');
  };

  return (

    <div className="min-h-screen flex flex-col md:flex-row bg-white pb-24">
      {/* Left Side: Content Section */}
      <div className="flex-1 flex flex-col justify-center items-center bg-white p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">A family firm.</h2>
          <p className="text-gray-700 mb-4">
          Wise Numbers LTD, founded by Farhan Butt, a seasoned Chartered Accountant with Big 4 and Fortune 500 experience, is a family-oriented firm with a strong presence across the UK. Farhan diverse expertise drives the firm mission to offer top-tier financial guidance tailored to each client unique needs. Supported by a team of skilled bookkeepers, accountants, and tax experts, Wise Numbers serves a wide range of clients, from individual freelancers to large organizations. Their comprehensive services, including strategic financial consultancy and advanced tax planning, make them a trusted partner in achieving financial success and peace of mind
          </p>
          <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300" onClick={handleClick}>
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
