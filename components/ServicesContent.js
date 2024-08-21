import React from 'react';

const LogoComponent = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white pb-24">
      {/* Left Side: Content Section */}
      <div className="flex-1 flex flex-col justify-center items-center bg-white p-8">

        {/* Accounting Services Section */}
        <div className="text-left">
          <h3 className="text-2xl font-semibold mb-4">Accounting Services:</h3>
          <p className="mb-4">
            At Wise Numbers LTD, we cater to a diverse clientele across various industries, each with its unique requirements. We meticulously identify all allowable tax expenses specific to each sector, ensuring full compliance with tax regulations while focusing on minimizing tax liabilities for every client we serve, so you can keep most of your earnings!
          </p>
          <p className="mb-4">
            Our Service Sectors include but are not limited to:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Healthcare:</strong> Medical practices, GPs, dentists, supported living, and care homes.</li>
            <li><strong>Construction:</strong> Contractors, builders, and construction management firms.</li>
            <li><strong>Real Estate:</strong> Property management, real estate agencies, and developers.</li>
            <li><strong>Retail:</strong> Shops, e-commerce businesses on Shopify, Amazon, and TikTok.</li>
            <li><strong>Hospitality:</strong> Hotels, restaurants, and event venues.</li>
            <li><strong>Car Dealerships:</strong> Car garages, mechanics, paint, and spare parts shops.</li>
            <li><strong>Financial Services:</strong> Mortgage brokers, insurance and investment firms, and financial advisors.</li>
            <li><strong>Professional Services:</strong> Legal firms, consulting agencies, and marketing companies.</li>
            <li><strong>Education:</strong> Schools, colleges, universities, and educational institutions.</li>
            <li><strong>Technology:</strong> IT firms, software companies, and tech startups.</li>
            <li><strong>Non-Profit Organizations:</strong> Charities, foundations, and community organizations.</li>
            <li><strong>Transport and Logistics:</strong> Shipping companies, freight carriers, and logistics providers.</li>
            <li><strong>Entertainment and Media:</strong> Film production, music, publishing, and media companies.</li>
            <li><strong>Agriculture:</strong> Farms, agricultural businesses, and agribusinesses.</li>
            <li><strong>Energy and Utilities:</strong> Oil, gas, renewable energy, and utility companies.</li>
            <li><strong>Self-Employed Individuals:</strong>
              <ul className="list-disc list-inside pl-5 space-y-2">
                <li>Chauffeurs – Handling income and expense management.</li>
                <li>Cleaning Businesses – Managing bookkeeping and tax filings.</li>
                <li>Home Food Catering – Financial planning and tax services for caterers.</li>
                <li>Hairdressers and Nail Salons – Personal and business tax assistance, and financial management.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LogoComponent;
