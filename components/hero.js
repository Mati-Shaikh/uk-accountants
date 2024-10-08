import React from 'react';
import Image from 'next/image'; // Import the Image component
// import './ContentPictureComponent.css'; // Uncomment if you have a CSS file

const ContentPictureComponent = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start p-4">
      {/* Content Section */}
      <div className="lg:w-1/2 p-4 mt-24 flex flex-col justify-center text-center">
      <h1 className="font-montserrat typing-animation mb-4 font-bold text-[#3b445f] lg:text-2xl mt-16 " style={{ fontSize: "2.4rem" }}>
      Wise Numbers LTD
    </h1>
        <p className="text-base lg:text-lg text-gray-700 mt-12">
        Wise Numbers LTD, is an Expert-Led Accounting Firm, with extensive experience in the UK. The firm provides tailored financial services to varying client needs. Supported by a skilled team of bookkeepers, accountants, and tax experts, Wise Numbers caters to a diverse clientele, from freelancers to large organizations. Their services include strategic financial consultancy and advanced tax planning, making them a trusted partner for achieving financial success and peace of mind.
</p>

      </div>
      
      {/* Picture Section */}
      <div className="lg:w-1/3 p-4 mt-16 sm:mt-16 lg:mt-32 ml-32 flex justify-center">
    <Image
        src="/1.png" // Image source
        alt="Description of Image" // Alt text for the image
        width={450} // Specify width
        height={450} // Specify height
        className="object-cover rounded-lg w-full max-w-md lg:max-w-full"
    />
</div>
    </div>
  );
};

export default ContentPictureComponent;
