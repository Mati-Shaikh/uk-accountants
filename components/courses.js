import React from 'react';

const Course = () => {
    return (
        <div className="relative bg-center min-h-screen bg-white">
            <div className="absolute inset-0 bg-white opacity-75"></div>
            <div className="relative h-full flex flex-col justify-center items-center text-center">
                {/* Heading Section */}
                <div className="max-w-4xl mx-auto px-6 py-12">
                    <h1 className="text-4xl font-extrabold text-black mb-4 animate__animated animate__fadeIn animate__delay-1s">
                        Sectors we Know Best
                    </h1>
                    <p className="text-lg text-gray-900 mb-8 animate__animated animate__fadeIn animate__delay-2s">
                        Over the years, we’ve built up particular experience in working with some specific types of business. Up in Birmingham, Ian knows recruitment, retail and startups, both as an accountant and on the front line. Down in Cornwall, Tom has gained a reputation for his work with dentists and agricultural businesses over the course of a 50-year career.
                    </p>
                    <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300 animate__animated animate__fadeIn animate__delay-3s">
                        All Services
                    </button>
                </div>
                
                {/* Cards Section */}
                <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white bg-opacity-40 p-6 rounded-lg shadow-2xl flex flex-col items-center text-center">
                        <div className="bg-blue-500 text-white p-4 rounded-full mb-4">
                            <i className="fas fa-cogs text-2xl"></i> {/* Replace with actual logo */}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Service 1</h3>
                        <p className="text-gray-700 mb-4">Brief description of the first service offered. Explain the benefits or features briefly.</p>
                        <a href="#" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">Read More</a>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-2xl flex flex-col items-center text-center">
                        <div className="bg-green-500 text-white p-4 rounded-full mb-4">
                            <i className="fas fa-chart-line text-2xl"></i> {/* Replace with actual logo */}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Service 2</h3>
                        <p className="text-gray-700 mb-4">Brief description of the second service offered. Explain the benefits or features briefly.</p>
                        <a href="#" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">Read More</a>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-2xl flex flex-col items-center text-center">
                        <div className="bg-red-500 text-white p-4 rounded-full mb-4">
                            <i className="fas fa-headset text-2xl"></i> {/* Replace with actual logo */}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Service 3</h3>
                        <p className="text-gray-700 mb-4">Brief description of the third service offered. Explain the benefits or features briefly.</p>
                        <a href="#" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;
