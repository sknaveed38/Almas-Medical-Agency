import { NextResponse } from 'next/server';

export async function POST(request: Request) {
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
    const whatsappMessage = `New Order Alert! Order #${emailSubject.split(': ')[1]} received. Details: ${JSON.stringify(orderData.cartItems.map((item: any) => `${item.name} (${item.quantity}x)`), null, 2)}. Total: ₹${orderData.totalPrice.toFixed(2)}.`;
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
    return NextResponse.json({ success: true, message: 'Order received successfully (mock).' }, { status: 200 });
  } catch (error) {
    console.error('Error processing mock order:', error);
    return NextResponse.json({ success: false, message: 'Failed to process mock order.' }, { status: 500 });
  }
}
