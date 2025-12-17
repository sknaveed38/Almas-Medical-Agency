import React from 'react';
import { FileText } from 'lucide-react';

const CreditRequestPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="flex items-center mb-6">
          <FileText className="w-8 h-8 text-emerald-600 mr-3" />
          <h1 className="text-3xl font-bold text-gray-800">Credit Account Application</h1>
        </div>
        <p className="text-gray-600 mb-6">
          To apply for a credit account, please download the application form, fill it out, and email it to us along with the required documents.
        </p>
        <div className="bg-gray-100 p-6 rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Instructions</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Download the Credit Application Form (PDF).</li>
            <li>Fill out the form completely.</li>
            <li>Scan the filled form and your business license.</li>
            <li>Email the documents to <a href="mailto:credit@pharma-distro.com" className="text-emerald-600 hover:underline">credit@pharma-distro.com</a>.</li>
          </ol>
        </div>
        <div className="mt-8 text-center">
          <button className="bg-emerald-600 text-white font-semibold px-8 py-3 rounded-md hover:bg-emerald-700 transition-colors">
            Download Application Form
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-6 text-center">
          Our team will review your application and get back to you within 3-5 business days.
        </p>
      </div>
    </div>
  );
};

export default CreditRequestPage;
