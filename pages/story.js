import React from 'react';
import About from '../components/about';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import Testimonial from '../components/testimonials';
import Talk from '../components/talk';
const Story = () => {
    return (
        <div>
      <Navbar />
      
        <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url("/back.jpg")' }}>
            <div className="absolute inset-0 bg-gray-900 opacity-40"></div>
            <div className="relative h-full flex flex-col justify-center items-center">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h1 className="text-white text-4xl md:text-6xl font-bold animate-bounce">
                        Our Story
                    </h1>
                    <p className="text-white mt-4 mb-8 text-lg md:text-2xl">
                        Experience the Best Services with Us
                    </p>
                    
                </div>
            </div>
<About/>
<Testimonial/>
<Talk/>
<Footer/>
        </div>
       
        </div>
    );
};

export default Story;
