import React, { useState } from 'react';

const Talk = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/send-email', { // Your backend endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Your message has been sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                alert('There was a problem sending your message.');
            }
        } catch (error) {
            alert('There was a problem sending your message.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div 
            className="h-screen flex flex-col md:flex-row bg-cover bg-center relative"
            style={{ backgroundImage: 'url("/image2.jpg")' }} // Replace with your image path
        >
            {/* Overlay to darken the background image */}
            <div className="absolute inset-0 bg-gray-900 opacity-40"></div>
            
            {/* Left Side: Talk to Us Section */}
            <div className="flex-1 flex flex-col justify-center items-center relative z-10 p-8">
                <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold mb-4 text-white">Talk to Us</h3>
                    <hr className="border-t-2 border-gray-400 mb-4 mx-auto w-16" />
                    <h2 className="text-2xl font-bold mb-4 text-white">We Are Here to Help</h2>
                    <p className="text-lg text-gray-300 mb-4">
                        If you have any questions or need further assistance, feel free to reach out to us.
                    </p>
                    <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300">
                        Contact Us
                    </button>
                </div>
            </div>

            {/* Right Side: Form Section */}
            <div className="flex-1 flex justify-center items-center p-8 relative z-10">
                <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
                    <h4 className="text-xl font-bold mb-4">Get in Touch</h4>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Talk;
