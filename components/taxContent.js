import React, { useState } from 'react';
import { useRouter } from 'next/router';

const LogoComponent = () => {
  const [hoveredCity, setHoveredCity] = useState(null);
  const router = useRouter();

  // Array of tax services
  const taxServices = [
    { title: 'Corporation Tax', description: 'Maximize Your Business Savings! Our corporation tax service expertly navigates complex tax regulations to ensure your business stays compliant and optimally positioned.' },
    { title: 'Self-Assessment Tax', description: 'Simplify Your Personal Taxes! We handle the paperwork, ensure accuracy, and find deductions you might miss.' },
    { title: 'Inheritance Tax', description: 'Protect Your Legacy! Plan your estate effectively with our inheritance tax service to minimize tax burdens on your heirs.' },
    { title: 'Landlord Rental Income', description: 'Optimize Your Rental Income! We assist with accurate reporting and expense identification to reduce your tax liability.' },
    { title: 'Foreign Income Taxation', description: 'Navigate Global Tax Challenges! We ensure you comply with global tax laws and optimize your tax position.' },
    { title: 'Remittance-Based Tax', description: 'Efficiently Manage Foreign Remittances! We help you navigate the tax implications of remitted income and uncover opportunities for tax savings.' },
    { title: 'Capital Gains Tax', description: 'Maximize Your Profits! Our capital gains tax service helps you manage the tax impact efficiently when selling assets.' },
    { title: 'Value Added Tax (VAT)', description: 'Streamline Your VAT Compliance! We offer comprehensive support, from registration to return submissions.' },
    { title: 'Tax Planning', description: 'Strategic Tax Solutions! We analyze your financial situation and tailor strategies to reduce your tax burden.' },
    { title: 'PAYE and Workplace Pension', description: 'Efficient Payroll and Pension Management! We handle the complexities of payroll compliance and employee benefits.' },
    { title: 'Non-Residential Overseas Income', description: 'Seamless Tax Solutions for International Earnings! We help you comply with tax laws both locally and internationally.' },
    { title: 'Tax Investigations and Disputes', description: 'Expert resolution of tax disputes and investigations, including Self-Assessment, VAT, PAYE, and more.' }
  ];

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Heading */}
      <div className="text-center my-8">
        <h1 className="text-4xl font-extrabold text-black mt-8">Our Tax Services</h1>
        <p className="text-lg text-gray-700 mb-8">
          We provide expert tax solutions tailored to your needs.
        </p>
      </div>

      {/* Grid of Cards */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {taxServices.map((service, index) => (
          <div key={index} className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
            <p className="text-gray-700 text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoComponent;
