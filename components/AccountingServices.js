import React from 'react';

const AccountingServices = () => {
  // Array of accounting services
  const services = [
    { 
      title: 'Bookkeeping - Accurate and Reliable Bookkeeping!', 
      description: 'From daily transactions to monthly reconciliations, we manage your books with precision. Wise Numbers LTD provides thorough bookkeeping to keep your finances in check.'
    },
    { 
      title: 'Year End Accounts - Clear and Precise Financial Reporting!', 
      description: 'Ensure your financial statements are accurate and comply with regulations. Wise Numbers LTD prepares your annual accounts, delivering detailed financial reporting to help you comply with companies house and HMRC requirements.'
    },
    { 
      title: 'Strategic Management Accounting - Insights for Smarter Decisions!', 
      description: 'Gain valuable insights into your business financial performance with our strategic management accounting. Wise Numbers LTD provides the analysis you need for better decision-making, including cash flow, forecast, budgets, and profitability reports.'
    },
    { 
      title: 'VAT Compliance & Digital Reporting - Stay Ahead with VAT and MTD!', 
      description: 'We manage your VAT returns and digital reporting requirements with ease, ensuring compliance and reducing administrative stress. Wise Numbers LTD keeps your business aligned with the latest VAT regulations.'
    },
    { 
      title: 'Self-Employment Tax Solutions - Simplified Tax Filing for Freelancers!', 
      description: 'Navigate your self-employment taxes with ease. We handle everything from account filing to deductions, helping you save time and money. Wise Numbers LTD makes tax season stress-free.'
    },
    { 
      title: 'Partnership Tax Services - Expert Tax Solutions for Partnerships!', 
      description: 'Manage your partnership’s tax obligations efficiently. We offer tailored advice to optimize tax outcomes and ensure compliance. Wise Numbers LTD helps your partnership thrive.'
    },
    { 
      title: 'Payroll & Employment Tax Management - Effortless Payroll and Tax Processing!', 
      description: 'Simplify your payroll and employment tax management with our comprehensive solutions. We ensure accuracy and compliance, so you can focus on running your business.'
    },
    { 
      title: 'Construction Industry Tax Services - Specialized Tax Support for Construction!', 
      description: 'Navigate the complexities of tax regulations in the construction sector with our expert services. Wise Numbers LTD provides tailored solutions to meet industry-specific requirements.'
    },
    { 
      title: 'Company Secretarial – Executive Support to Your Business!', 
      description: 'We provide secretarial services to comply with the Companies Act Regulations. Our services include company formation, shareholder management, and corporate governance.'
    }
  ];

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Heading */}
      <div className="text-center my-8">
        <h1 className="text-4xl font-extrabold text-black mb-4">Accounting Services</h1>
        <p className="text-lg text-gray-700 mb-8">
          We provide a range of professional accounting services to meet your business needs.
        </p>
      </div>

      {/* Grid of Accounting Services */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
            <p className="text-gray-700 text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountingServices;
