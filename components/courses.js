import React from 'react';

const Course = () => {
    return (
        <div className="relative bg-cover bg-center min-h-screen" style={{ backgroundImage: 'url("/image1.jpg")' }}>
            <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
            <div className="relative h-full flex justify-center items-center">
                <div className="max-w-6xl mx-auto px-6 py-12"> {/* Added py-12 for vertical padding */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-white bg-opacity-30 p-8 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold mb-4">Content Card 1</h2>
                            <p className="text-gray-700">This is where your content goes.</p>
                        </div>
                        {/* Card 2 */}
                        <div className="bg-white bg-opacity-30 p-8 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold mb-4">Content Card 2</h2>
                            <p className="text-gray-700">This is where your content goes.</p>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-white bg-opacity-30 p-8 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold mb-4">Content Card 3</h2>
                            <p className="text-gray-700">This is where your content goes.</p>
                        </div>
                        {/* Card 4 */}
                        <div className="bg-white bg-opacity-30 p-8 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold mb-4">Content Card 4</h2>
                            <p className="text-gray-700">This is where your content goes.</p>
                        </div>
                        {/* Card 5 */}
                        <div className="bg-white bg-opacity-30 p-8 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold mb-4">Content Card 5</h2>
                            <p className="text-gray-700">This is where your content goes.</p>
                        </div>
                        {/* Card 6 */}
                        <div className="bg-white bg-opacity-30 p-8 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold mb-4">Content Card 6</h2>
                            <p className="text-gray-700">This is where your content goes.</p>
                        </div>
                        {/* Card 7 */}
                        <div className="bg-white bg-opacity-30 p-8 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold mb-4">Content Card 7</h2>
                            <p className="text-gray-700">This is where your content goes.</p>
                        </div>
                        {/* Card 8 */}
                        <div className="bg-white bg-opacity-30 p-8 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold mb-4">Content Card 8</h2>
                            <p className="text-gray-700">This is where your content goes.</p>
                        </div>
                        {/* Card 9 */}
                        <div className="bg-white bg-opacity-30 p-8 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold mb-4">Content Card 9</h2>
                            <p className="text-gray-700">This is where your content goes.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;
