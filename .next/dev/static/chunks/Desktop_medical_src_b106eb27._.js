(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/medical/src/data/products.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "products",
    ()=>products
]);
const products = [];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/medical/src/data/invoices.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mockInvoices",
    ()=>mockInvoices
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/medical/src/data/products.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$src$2f$types$2f$roles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/medical/src/types/roles.ts [app-client] (ecmascript)");
;
;
// Helper to calculate item totals
const calculateInvoiceItem = (productId, quantity, role)=>{
    const product = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$src$2f$data$2f$products$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["products"].find((p)=>p.product_id === productId);
    if (!product) return null;
    const unitPrice = product.pricing[role] || product.pricing[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$src$2f$types$2f$roles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRole"].REGULAR];
    const gstRate = product.gst_rate; // e.g., 12 for 12%
    const itemSubTotal = unitPrice * quantity;
    const itemGstAmount = itemSubTotal * (gstRate / 100);
    const itemTotalAmount = itemSubTotal + itemGstAmount;
    return {
        productId: product.product_id,
        name: product.name,
        hsnCode: product.hsn_code,
        quantity: quantity,
        unitPrice: unitPrice,
        gstRate: gstRate,
        gstAmount: itemGstAmount,
        totalAmount: itemTotalAmount
    };
};
// Mock Invoices
const mockInvoice1Items = [
    calculateInvoiceItem('SKU12345', 100, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$src$2f$types$2f$roles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRole"].WHOLESALER),
    calculateInvoiceItem('SKU12347', 50, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$src$2f$types$2f$roles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRole"].WHOLESALER)
].filter(Boolean);
const mockInvoice2Items = [
    calculateInvoiceItem('SKU12346', 200, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$src$2f$types$2f$roles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRole"].DISTRIBUTOR),
    calculateInvoiceItem('SKU12348', 10, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$src$2f$types$2f$roles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRole"].DISTRIBUTOR),
    calculateInvoiceItem('SKU12351', 5, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$src$2f$types$2f$roles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRole"].DISTRIBUTOR)
].filter(Boolean);
const calculateInvoiceTotals = (items)=>{
    const subTotal = items.reduce((sum, item)=>sum + item.unitPrice * item.quantity, 0);
    const totalGst = items.reduce((sum, item)=>sum + item.gstAmount, 0);
    const grandTotal = subTotal + totalGst;
    return {
        subTotal,
        totalGst,
        grandTotal
    };
};
const totals1 = calculateInvoiceTotals(mockInvoice1Items);
const totals2 = calculateInvoiceTotals(mockInvoice2Items);
const mockInvoices = [
    {
        invoiceId: 'INV-2025-001',
        invoiceDate: '2025-11-10',
        dueDate: '2025-12-10',
        sellerDetails: {
            name: 'MediSupply Distributors',
            address: '123 Pharma Road, Health City, State, 123456',
            gstin: '22ABCDE1234F1Z5'
        },
        buyerDetails: {
            name: 'City Pharmacy',
            address: '456 Main Street, Townsville, State, 654321',
            gstin: '07ABCDE1234F1Z6'
        },
        items: mockInvoice1Items,
        ...totals1
    },
    {
        invoiceId: 'INV-2025-002',
        invoiceDate: '2025-11-25',
        dueDate: '2025-12-25',
        sellerDetails: {
            name: 'MediSupply Distributors',
            address: '123 Pharma Road, Health City, State, 123456',
            gstin: '22ABCDE1234F1Z5'
        },
        buyerDetails: {
            name: 'Rural Health Clinic',
            address: '789 Village Lane, Countryside, State, 987654',
            gstin: '09ABCDE1234F1Z7'
        },
        items: mockInvoice2Items,
        ...totals2
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/medical/src/app/dashboard/invoices/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/medical/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$src$2f$data$2f$invoices$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/medical/src/data/invoices.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/Desktop/medical/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/medical/node_modules/jspdf/dist/jspdf.es.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$jspdf$2d$autotable$2f$dist$2f$jspdf$2e$plugin$2e$autotable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/medical/node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const InvoicesPage = ()=>{
    const generateInvoicePdf = (invoice)=>{
        const doc = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
        // Header
        doc.setFontSize(22);
        doc.text("TAX INVOICE", 105, 20, {
            align: 'center'
        });
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
            head: [
                [
                    '#',
                    'Product Name',
                    'HSN',
                    'Qty',
                    'Unit Price',
                    'GST Rate',
                    'GST Amt',
                    'Total'
                ]
            ],
            body: invoice.items.map((item, index)=>[
                    index + 1,
                    item.name,
                    item.hsnCode,
                    item.quantity,
                    item.unitPrice.toFixed(2),
                    `${item.gstRate}%`,
                    item.gstAmount.toFixed(2),
                    item.totalAmount.toFixed(2)
                ]),
            theme: 'grid',
            headStyles: {
                fillColor: [
                    22,
                    163,
                    74
                ]
            },
            styles: {
                fontSize: 8
            },
            columnStyles: {
                0: {
                    cellWidth: 10
                },
                3: {
                    cellWidth: 15
                },
                4: {
                    cellWidth: 20,
                    halign: 'right'
                },
                5: {
                    cellWidth: 15,
                    halign: 'center'
                },
                6: {
                    cellWidth: 20,
                    halign: 'right'
                },
                7: {
                    cellWidth: 25,
                    halign: 'right'
                }
            }
        });
        // Totals
        const finalY = doc.autoTable.previous.finalY;
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto px-4 py-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold text-gray-800 mb-8",
                children: "My Invoices"
            }, void 0, false, {
                fileName: "[project]/Desktop/medical/src/app/dashboard/invoices/page.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$src$2f$data$2f$invoices$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockInvoices"].length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-500",
                children: "You have no invoices."
            }, void 0, false, {
                fileName: "[project]/Desktop/medical/src/app/dashboard/invoices/page.tsx",
                lineNumber: 97,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$src$2f$data$2f$invoices$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockInvoices"].map((invoice)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-6 rounded-lg shadow-md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center border-b pb-4 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-semibold text-gray-800",
                                                children: [
                                                    "Invoice #",
                                                    invoice.invoiceId
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/medical/src/app/dashboard/invoices/page.tsx",
                                                lineNumber: 104,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-500",
                                                children: [
                                                    "Date: ",
                                                    invoice.invoiceDate,
                                                    " | Due: ",
                                                    invoice.dueDate
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/medical/src/app/dashboard/invoices/page.tsx",
                                                lineNumber: 105,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/medical/src/app/dashboard/invoices/page.tsx",
                                        lineNumber: 103,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800",
                                                children: [
                                                    "Total: ₹",
                                                    invoice.grandTotal.toLocaleString('en-IN')
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/medical/src/app/dashboard/invoices/page.tsx",
                                                lineNumber: 108,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>generateInvoicePdf(invoice),
                                                className: "flex items-center px-4 py-2 bg-emerald-600 text-white font-semibold rounded-lg shadow-md hover:bg-emerald-700 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                        className: "w-5 h-5 mr-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/medical/src/app/dashboard/invoices/page.tsx",
                                                        lineNumber: 115,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "Download PDF"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/medical/src/app/dashboard/invoices/page.tsx",
                                                lineNumber: 111,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/medical/src/app/dashboard/invoices/page.tsx",
                                        lineNumber: 107,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/medical/src/app/dashboard/invoices/page.tsx",
                                lineNumber: 102,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-x-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "w-full text-sm text-left text-gray-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            className: "text-xs text-gray-700 uppercase bg-gray-50",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        scope: "col",
                                                        className: "px-6 py-3",
                                                        children: "Product"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/medical/src/app/dashboard/invoices/page.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        scope: "col",
                                                        className: "px-6 py-3",
                                                        children: "HSN"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/medical/src/app/dashboard/invoices/page.tsx",
                                                        lineNumber: 126,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        scope: "col",
                                                        className: "px-6 py-3 text-right",
                                                        children: "Qty"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/medical/src/app/dashboard/invoices/page.tsx",
                                                        lineNumber: 127,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        scope: "col",
                                                        className: "px-6 py-3 text-right",
                                                        children: "Unit Price"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/medical/src/app/dashboard/invoices/page.tsx",
                                                        lineNumber: 128,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        scope: "col",
                                                        className: "px-6 py-3 text-right",
                                                        children: "GST Rate"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/medical/src/app/dashboard/invoices/page.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        scope: "col",
                                                        className: "px-6 py-3 text-right",
                                                        children: "GST Amt"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/medical/src/app/dashboard/invoices/page.tsx",
                                                        lineNumber: 130,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        scope: "col",
                                                        className: "px-6 py-3 text-right",
                                                        children: "Total"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/medical/src/app/dashboard/invoices/page.tsx",
                                                        lineNumber: 131,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/medical/src/app/dashboard/invoices/page.tsx",
                                                lineNumber: 124,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/medical/src/app/dashboard/invoices/page.tsx",
                                            lineNumber: 123,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: invoice.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "bg-white border-b hover:bg-gray-50",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap",
                                                            children: item.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/medical/src/app/dashboard/invoices/page.tsx",
                                                            lineNumber: 137,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-6 py-4",
                                                            children: item.hsnCode
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/medical/src/app/dashboard/invoices/page.tsx",
                                                            lineNumber: 138,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-6 py-4 text-right",
                                                            children: item.quantity
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/medical/src/app/dashboard/invoices/page.tsx",
                                                            lineNumber: 139,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-6 py-4 text-right",
                                                            children: [
                                                                "₹",
                                                                item.unitPrice.toFixed(2)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/medical/src/app/dashboard/invoices/page.tsx",
                                                            lineNumber: 140,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-6 py-4 text-right",
                                                            children: [
                                                                item.gstRate,
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/medical/src/app/dashboard/invoices/page.tsx",
                                                            lineNumber: 141,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-6 py-4 text-right",
                                                            children: [
                                                                "₹",
                                                                item.gstAmount.toFixed(2)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/medical/src/app/dashboard/invoices/page.tsx",
                                                            lineNumber: 142,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "px-6 py-4 text-right",
                                                            children: [
                                                                "₹",
                                                                item.totalAmount.toFixed(2)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/medical/src/app/dashboard/invoices/page.tsx",
                                                            lineNumber: 143,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, item.productId, true, {
                                                    fileName: "[project]/Desktop/medical/src/app/dashboard/invoices/page.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/medical/src/app/dashboard/invoices/page.tsx",
                                            lineNumber: 134,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/medical/src/app/dashboard/invoices/page.tsx",
                                    lineNumber: 122,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/medical/src/app/dashboard/invoices/page.tsx",
                                lineNumber: 121,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 text-right text-sm text-gray-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "Sub Total: ₹",
                                            invoice.subTotal.toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/medical/src/app/dashboard/invoices/page.tsx",
                                        lineNumber: 150,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "Total GST: ₹",
                                            invoice.totalGst.toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/medical/src/app/dashboard/invoices/page.tsx",
                                        lineNumber: 151,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-bold text-base",
                                        children: [
                                            "Grand Total: ₹",
                                            invoice.grandTotal.toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/medical/src/app/dashboard/invoices/page.tsx",
                                        lineNumber: 152,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/medical/src/app/dashboard/invoices/page.tsx",
                                lineNumber: 149,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, invoice.invoiceId, true, {
                        fileName: "[project]/Desktop/medical/src/app/dashboard/invoices/page.tsx",
                        lineNumber: 101,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/Desktop/medical/src/app/dashboard/invoices/page.tsx",
                lineNumber: 99,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/medical/src/app/dashboard/invoices/page.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = InvoicesPage;
const __TURBOPACK__default__export__ = InvoicesPage;
var _c;
__turbopack_context__.k.register(_c, "InvoicesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_medical_src_b106eb27._.js.map