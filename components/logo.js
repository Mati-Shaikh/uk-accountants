import React from 'react';

const LogoComponent = () => {
    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <div className="max-w-lg p-8 bg-white shadow-lg rounded-lg">
                <div className="flex items-center justify-center mb-6">
                    <img
                        src="/logo.svg" // Replace with your logo path
                        alt="Logo"
                        className="h-24"
                    />
                </div>
                <div className="text-center">
                    <h2 className="text-xl font-bold mb-2">Logo Description</h2>
                    <p className="text-gray-700">Your logo description goes here. Explain what your logo represents or signifies.</p>
                </div>
            </div>
        </div>
    );
};

export default LogoComponent;
