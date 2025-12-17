"use client";

import { creditStatus, ledgerTransactions } from '@/data/credit';
import { Download, TrendingUp, TrendingDown, Wallet, Calendar } from 'lucide-react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

// Extend the jsPDF type to include the autoTable method
declare module 'jspdf' {
  interface jsPDF {
    autoTable: (options: any) => jsPDF;
  }
}

const CreditPage = () => {

  const handleDownloadPdf = () => {
    const doc = new jsPDF();

    // Add Title
    doc.setFontSize(20);
    doc.text("Account Ledger", 14, 22);

    // Add Client Info
    doc.setFontSize(12);
    doc.text("Client: MediSupply Customer", 14, 32);
    doc.text(`Date: ${new Date().toLocaleDateString('en-US')}`, 14, 38);

    // Add Summary
    doc.setFontSize(12);
    doc.text("Credit Summary", 14, 50);
    const summaryText = `
      Credit Limit: ${creditStatus.creditLimit.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
      Outstanding Balance: ${creditStatus.outstandingBalance.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
      Available Credit: ${creditStatus.availableCredit.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
      Next Payment Due: ${new Date(creditStatus.dueDate).toLocaleDateString()}
    `;
    doc.setFontSize(10);
    doc.text(summaryText, 14, 56);

    // Add Table
    doc.autoTable({
      startY: 85,
      head: [['Date', 'Description', 'Debit (INR)', 'Credit (INR)', 'Balance (INR)']],
      body: ledgerTransactions.map(txn => [
        txn.date,
        txn.description,
        txn.debit > 0 ? txn.debit.toFixed(2) : '-',
        txn.credit > 0 ? txn.credit.toFixed(2) : '-',
        txn.balance.toFixed(2)
      ]),
      theme: 'grid',
      headStyles: { fillColor: [22, 163, 74] }, // Emerald color
    });

    doc.save('MediSupply_Ledger.pdf');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Credit Management</h1>
        <button
          onClick={handleDownloadPdf}
          className="flex items-center px-4 py-2 bg-emerald-600 text-white font-semibold rounded-lg shadow-md hover:bg-emerald-700 transition-colors"
        >
          <Download className="w-5 h-5 mr-2" />
          Download Ledger PDF
        </button>
      </div>

      {/* Credit Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <Wallet className="w-8 h-8 text-blue-500" />
            <div className="ml-4">
              <p className="text-sm text-gray-500">Credit Limit</p>
              <p className="text-2xl font-bold text-gray-800">₹{creditStatus.creditLimit.toLocaleString('en-IN')}</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <TrendingUp className="w-8 h-8 text-red-500" />
            <div className="ml-4">
              <p className="text-sm text-gray-500">Outstanding Balance</p>
              <p className="text-2xl font-bold text-red-500">₹{creditStatus.outstandingBalance.toLocaleString('en-IN')}</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <TrendingDown className="w-8 h-8 text-green-500" />
            <div className="ml-4">
              <p className="text-sm text-gray-500">Available Credit</p>
              <p className="text-2xl font-bold text-green-500">₹{creditStatus.availableCredit.toLocaleString('en-IN')}</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <Calendar className="w-8 h-8 text-yellow-500" />
            <div className="ml-4">
              <p className="text-sm text-gray-500">Payment Due Date</p>
              <p className="text-2xl font-bold text-gray-800">{new Date(creditStatus.dueDate).toLocaleDateString('en-US')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Ledger Table */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Transaction Ledger</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">Date</th>
                <th scope="col" className="px-6 py-3">Description</th>
                <th scope="col" className="px-6 py-3 text-right">Debit</th>
                <th scope="col" className="px-6 py-3 text-right">Credit</th>
                <th scope="col" className="px-6 py-3 text-right">Balance</th>
              </tr>
            </thead>
            <tbody>
              {ledgerTransactions.map((txn) => (
                <tr key={txn.id} className="bg-white border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{txn.date}</td>
                  <td className="px-6 py-4">{txn.description}</td>
                  <td className="px-6 py-4 text-right text-red-600">{txn.debit > 0 ? `₹${txn.debit.toLocaleString('en-IN')}` : '-'}</td>
                  <td className="px-6 py-4 text-right text-green-600">{txn.credit > 0 ? `₹${txn.credit.toLocaleString('en-IN')}` : '-'}</td>
                  <td className="px-6 py-4 text-right font-semibold">₹{txn.balance.toLocaleString('en-IN')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CreditPage;
