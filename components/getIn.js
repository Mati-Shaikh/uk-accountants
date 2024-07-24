import React from 'react';
import image1 from '../public/image.jpg'; // Replace with your image file path

const AboutUsComponent = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center h-screen bg-white">
            {/* Left Side (Image) */}
            <div className="md:w-1/2 pl-4">
                <img src='/image1.jpg' alt="About Us" className="w-full h-auto rounded-lg" />
            </div>
            {/* Right Side (Content and Button) */}
            <div className="md:w-1/2 text-black p-8 md:p-12 mt-6 md:mt-0">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us?</h2>
                <p className="text-lg mb-8">
                    Here at HHM Accountants, our skilled Accountants, Tax Consultants, and Business Advisors are here to help small and medium-sized businesses. Our team comprises extensively qualified Chartered Accountants and renowned industry business consultants.
                </p>
                <button className="bg-white text-gray-900 px-6 py-3 rounded-lg shadow-md hover:bg-gray-300 transition duration-300 ease-in-out">
                    About Us
                </button>
            </div>
        </div>
    );
};

export default AboutUsComponent;
