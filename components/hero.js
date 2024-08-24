// ContentPictureComponent.jsx
import React from 'react';
// import './ContentPictureComponent.css'; // Uncomment if you have a CSS file

const ContentPictureComponent = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start p-4">
      {/* Content Section */}
      <div className="lg:w-1/2 p-4 mt-8 lg:mt-32 flex flex-col justify-center text-center">
        <h1 className="typing-animation mb-4 font-bold text-xl lg:text-2xl">Wise Numbers LTD</h1>
        <p className="text-base lg:text-lg text-gray-700">
          Wise Numbers LTD, founded by Farhan Butt, a seasoned Chartered Accountant with Big 4 and Fortune 500 experience, is a family-oriented firm with a strong presence across the UK. Farhan diverse expertise drives the firm mission to offer top-tier financial guidance tailored to each client unique needs. Supported by a team of skilled bookkeepers, accountants, and tax experts, Wise Numbers serves a wide range of clients, from individual freelancers to large organizations. Their comprehensive services, including strategic financial consultancy and advanced tax planning, make them a trusted partner in achieving financial success and peace of mind.
        </p>
      </div>
      
      {/* Picture Section */}
      <div className="lg:w-1/2 p-4 mt-8 lg:mt-16 flex justify-center">
        <img
          src="/gb.svg"
          alt="Description of Image"
          className="object-cover rounded-lg w-full max-w-md lg:max-w-full"
          style={{ height: "auto" }} // Ensure height is auto to maintain aspect ratio
        />
      </div>
    </div>
  );
};

export default ContentPictureComponent;
