module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Desktop/medical/src/app/api/order/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/medical/node_modules/next/server.js [app-route] (ecmascript)");
;
async function POST(request) {
    try {
        const orderData = await request.json();
        console.log('--- Received Mock Order Data ---');
        console.log(JSON.stringify(orderData, null, 2));
        console.log('-------------------------------');
        // Simulate sending email notification to shopkeeper
        const shopkeeperEmail = 'sknaveedsk20@gmail.com';
        const emailSubject = `New Order Received: #${Math.floor(Math.random() * 100000)}`;
        const emailBody = `A new order has been placed!\n\nOrder Details:\n${JSON.stringify(orderData, null, 2)}\n\nPlease process this order.`;
        console.log(`\n--- SIMULATED EMAIL TO SHOPKEEPER ---`);
        console.log(`To: ${shopkeeperEmail}`);
        console.log(`Subject: ${emailSubject}`);
        console.log(`Body: ${emailBody}`);
        console.log(`------------------------------------`);
        // Simulate sending WhatsApp notification to shopkeeper
        const shopkeeperPhone = '+919876543210'; // Placeholder phone number
        const whatsappMessage = `New Order Alert! Order #${emailSubject.split(': ')[1]} received. Details: ${JSON.stringify(orderData.cartItems.map((item)=>`${item.name} (${item.quantity}x)`), null, 2)}. Total: ₹${orderData.totalPrice.toFixed(2)}.`;
        console.log(`\n--- SIMULATED WHATSAPP TO SHOPKEEPER ---`);
        console.log(`To: ${shopkeeperPhone}`);
        console.log(`Message: ${whatsappMessage}`);
        console.log(`----------------------------------------`);
        // In a real application, you would:
        // 1. Validate the orderData
        // 2. Save the order to a database
        // 3. Process payment (via a secure payment gateway, not directly here)
        // 4. Send confirmation emails to the user and shopkeeper (using real email service)
        // 5. Send WhatsApp notifications (using real WhatsApp API)
        // 6. Update inventory
        // Simulate a successful order placement
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            message: 'Order received successfully (mock).'
        }, {
            status: 200
        });
    } catch (error) {
        console.error('Error processing mock order:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$medical$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            message: 'Failed to process mock order.'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__661d8c43._.js.map