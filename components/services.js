import React from 'react';

const cards = [
  {
    logo: '/image1.jpg', // Replace with your logo image path
    name: 'Service One',
    description: 'This is a brief description of the first service.',
  },
  {
    logo: '/image.jpg', // Replace with your logo image path
    name: 'Service Two',
    description: 'This is a brief description of the second service.',
  },
];

const ServiceComponent = () => {
  return (
    <div className="relative bg-cover bg-center" style={{ backgroundImage: "url('/service.jpeg')" }}>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 bg-opacity-50 p-8">
        {/* Content Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">What We Can Do For You</h2>
          <p className="text-gray-300 mb-6">
            Explore our services designed to help you achieve your goals. Our solutions are tailored to meet your needs and exceed your expectations.
          </p>
          <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300">
            All Services
          </button>
        </div>

        {/* Cards Section */}
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {cards.map((card, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg w-full md:w-80 text-center">
              <div className="flex justify-center mb-4">
                <img src={card.logo} alt={card.name} className="w-24 h-24 rounded-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{card.name}</h3>
              <p className="text-gray-700 mb-4">{card.description}</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceComponent;
