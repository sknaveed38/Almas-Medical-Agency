"use client";

import React from 'react';
import { mockInvoices, Invoice } from '@/data/invoices';
import { Download, FileText } from 'lucide-react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

// Extend the jsPDF type to include the autoTable method
declare module 'jspdf' {
  interface jsPDF {
    autoTable: (options: any) => jsPDF;
  }
}

const InvoicesPage = () => {

  const generateInvoicePdf = (invoice: Invoice) => {
    const doc = new jsPDF();

    // Header
    doc.setFontSize(22);
    doc.text("TAX INVOICE", 105, 20, { align: 'center' });

    // Seller Details
    doc.setFontSize(10);
    doc.text("Seller:", 14, 30);
    doc.setFontSize(12);
    doc.text(invoice.sellerDetails.name, 14, 35);
    doc.setFontSize(10);
    doc.text(invoice.sellerDetails.address, 14, 40);
    doc.text(`GSTIN: ${invoice.sellerDetails.gstin}`, 14, 45);

    // Buyer Details
    doc.setFontSize(10);
    doc.text("Bill To:", 14, 55);
    doc.setFontSize(12);
    doc.text(invoice.buyerDetails.name, 14, 60);
    doc.setFontSize(10);
    doc.text(invoice.buyerDetails.address, 14, 65);
    doc.text(`GSTIN: ${invoice.buyerDetails.gstin}`, 14, 70);

    // Invoice Details
    doc.setFontSize(10);
    doc.text(`Invoice No: ${invoice.invoiceId}`, 140, 35);
    doc.text(`Invoice Date: ${invoice.invoiceDate}`, 140, 40);
    doc.text(`Due Date: ${invoice.dueDate}`, 140, 45);

    // Items Table
    doc.autoTable({
      startY: 80,
      head: [['#', 'Product Name', 'HSN', 'Qty', 'Unit Price', 'GST Rate', 'GST Amt', 'Total']],
      body: invoice.items.map((item, index) => [
        index + 1,
        item.name,
        item.hsnCode,
        item.quantity,
        item.unitPrice.toFixed(2),
        `${item.gstRate}%`,
        item.gstAmount.toFixed(2),
        item.totalAmount.toFixed(2),
      ]),
      theme: 'grid',
      headStyles: { fillColor: [22, 163, 74] },
      styles: { fontSize: 8 },
      columnStyles: {
        0: { cellWidth: 10 },
        3: { cellWidth: 15 },
        4: { cellWidth: 20, halign: 'right' },
        5: { cellWidth: 15, halign: 'center' },
        6: { cellWidth: 20, halign: 'right' },
        7: { cellWidth: 25, halign: 'right' },
      },
    });

    // Totals
    const finalY = (doc as any).autoTable.previous.finalY;
    doc.setFontSize(10);
    doc.text(`Sub Total: ₹${invoice.subTotal.toFixed(2)}`, 140, finalY + 10);
    doc.text(`Total GST: ₹${invoice.totalGst.toFixed(2)}`, 140, finalY + 15);
    doc.setFontSize(12);
    doc.text(`Grand Total: ₹${invoice.grandTotal.toFixed(2)}`, 140, finalY + 25);

    // Footer
    doc.setFontSize(8);
    doc.text("Thank you for your business!", 14, doc.internal.pageSize.height - 20);
    doc.text("This is a computer generated invoice and does not require a signature.", 14, doc.internal.pageSize.height - 15);

    doc.save(`Invoice_${invoice.invoiceId}.pdf`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">My Invoices</h1>

      {mockInvoices.length === 0 ? (
        <p className="text-gray-500">You have no invoices.</p>
      ) : (
        <div className="space-y-6">
          {mockInvoices.map((invoice) => (
            <div key={invoice.invoiceId} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center border-b pb-4 mb-4">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">Invoice #{invoice.invoiceId}</h2>
                  <p className="text-sm text-gray-500">Date: {invoice.invoiceDate} | Due: {invoice.dueDate}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    Total: ₹{invoice.grandTotal.toLocaleString('en-IN')}
                  </span>
                  <button
                    onClick={() => generateInvoicePdf(invoice)}
                    className="flex items-center px-4 py-2 bg-emerald-600 text-white font-semibold rounded-lg shadow-md hover:bg-emerald-700 transition-colors"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download PDF
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3">Product</th>
                      <th scope="col" className="px-6 py-3">HSN</th>
                      <th scope="col" className="px-6 py-3 text-right">Qty</th>
                      <th scope="col" className="px-6 py-3 text-right">Unit Price</th>
                      <th scope="col" className="px-6 py-3 text-right">GST Rate</th>
                      <th scope="col" className="px-6 py-3 text-right">GST Amt</th>
                      <th scope="col" className="px-6 py-3 text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoice.items.map((item) => (
                      <tr key={item.productId} className="bg-white border-b hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{item.name}</td>
                        <td className="px-6 py-4">{item.hsnCode}</td>
                        <td className="px-6 py-4 text-right">{item.quantity}</td>
                        <td className="px-6 py-4 text-right">₹{item.unitPrice.toFixed(2)}</td>
                        <td className="px-6 py-4 text-right">{item.gstRate}%</td>
                        <td className="px-6 py-4 text-right">₹{item.gstAmount.toFixed(2)}</td>
                        <td className="px-6 py-4 text-right">₹{item.totalAmount.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 text-right text-sm text-gray-700">
                <p>Sub Total: ₹{invoice.subTotal.toFixed(2)}</p>
                <p>Total GST: ₹{invoice.totalGst.toFixed(2)}</p>
                <p className="font-bold text-base">Grand Total: ₹{invoice.grandTotal.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InvoicesPage;
