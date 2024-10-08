import React, { useState } from 'react';
import { useRouter } from 'next/router';

// Import any necessary styles for the image if required

const LogoComponent = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/story');
  };

  return (

    <div className="min-h-screen flex flex-col md:flex-row bg-white pb-24">
      {/* Left Side: Content Section */}
      <div className="flex-1 flex flex-col justify-center items-center bg-white p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-8"></h2>
          <p className="text-gray-700 mb-4">
          With a presence in multiple cities across the UK, our accounting firm is led by Farhan Butt, a Certified Chartered Accountant with extensive experience from the Big 4 accounting firms and US Fortune 500 companies. With a diverse background across different sectors, he ensures that at Wise Numbers top-tier expertise and strategic financial guidance is provided to all our clients.

Our team comprises experienced bookkeepers, accountants, tax experts, financial advisors, and support professionals, ensuring we deliver excellent customer support and efficient, timely solutions for all your accounting and tax needs.

We have successfully worked with a wide range of clients, from individuals and small businesses to large organizations. Our clients are based across the UK and overseas. Examples of our clients include individual contractors, freelancers, and healthcare professionals; small businesses such as retailers, training and writing services; and large organizations like car dealerships and import/export companies. Our firm prides itself on delivering tailored, client-centric solutions that ensure your financial success and peace of mind.

At Wise Numbers LTD, we offer a full spectrum of accounting and tax services: bookkeeping, year-end accounts, management accounts, rental income accounts, payroll, pension scheme management, self-assessment, personal tax planning, VAT preparation, corporation tax, capital gains tax, inheritance tax, and company secretarial services. We also provide strategic decision-making support to businesses, where we provide forecast, budgets, cashflow projections, profitability, KPIs and business performance reports. We also provide comprehensive audit services to the clients where needed. Our niche services, such as strategic management support, financial consultancy, and advanced tax planning, truly set us apart from other accounting firms.

Contact us today to discover how our expertise and personalized approach can support your financial goals. Let Wise Numbers LTD be your trusted partner in achieving financial excellence.

          </p>
          <button className="bg-[#3b445f] text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300" onClick={handleClick}>
            Our Story
          </button>
        </div>
      </div>

      {/* Right Side: Image Section */}
      <div className="relative w-full md:w-1/2 h-96 md:h-auto mt-16 pr-4"> {/* Added mt-16 for spacing */}
        <img 
          src="/2.png" // Replace with the actual path to your image
          alt="Services Across the UK"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
    
  );
};

export default LogoComponent;
