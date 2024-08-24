// ContentPictureComponent.jsx
import React from 'react';
//import './.css'; // Import the CSS file for animations and fonts

const ContentPictureComponent = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start p-4">
      {/* Content Section */}
      <div className="lg:w-1/2 p-4 mt-32 flex flex-col justify-center">
  <h1 className="typing-animation mb-4 text-center font-bold">Wise Numbers LTD</h1>
  <p className="text-lg text-gray-700 truncate-text  text-center">
    Wise Numbers LTD, founded by Farhan Butt, a seasoned Chartered Accountant with Big 4 and Fortune 500 experience, is a family-oriented firm with a strong presence across the UK. Farhan's diverse expertise drives the firm's mission to offer top-tier financial guidance tailored to each client's unique needs. Supported by a team of skilled bookkeepers, accountants, and tax experts, Wise Numbers serves a wide range of clients, from individual freelancers to large organizations. Their comprehensive services, including strategic financial consultancy and advanced tax planning, make them a trusted partner in achieving financial success and peace of mind.
  </p>
</div>

      
      {/* Picture Section */}
      <div className="lg:w-1/2 p-4 mt-16">
        <img
          src="/gb.svg"
          alt="Description of Image"
          className="object-cover rounded-lg"
          style={{height:"500px"}}
        />
      </div>
    </div>
  );
};

export default ContentPictureComponent;
