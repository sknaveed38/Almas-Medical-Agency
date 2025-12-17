import { products } from './products';
import { UserRole } from '@/types/roles';

export interface InvoiceItem {
  productId: string;
  name: string;
  hsnCode: string;
  quantity: number;
  unitPrice: number; // Price per unit before GST
  gstRate: number; // Percentage
  gstAmount: number;
  totalAmount: number; // Quantity * (unitPrice + gstAmount per unit)
}

export interface Invoice {
  invoiceId: string;
  invoiceDate: string; // YYYY-MM-DD
  dueDate: string; // YYYY-MM-DD
  sellerDetails: {
    name: string;
    address: string;
    gstin: string;
  };
  buyerDetails: {
    name: string;
    address: string;
    gstin: string;
  };
  items: InvoiceItem[];
  subTotal: number;
  totalGst: number;
  grandTotal: number;
}

// Helper to calculate item totals
const calculateInvoiceItem = (productId: string, quantity: number, role: UserRole): InvoiceItem | null => {
  const product = products.find(p => p.product_id === productId);
  if (!product) return null;

  const unitPrice = product.pricing[role] || product.pricing[UserRole.REGULAR];
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
    totalAmount: itemTotalAmount,
  };
};

// Mock Invoices
const mockInvoice1Items = [
  calculateInvoiceItem('SKU12345', 100, UserRole.WHOLESALER), // Paracetamol
  calculateInvoiceItem('SKU12347', 50, UserRole.WHOLESALER),   // Cough Syrup
].filter(Boolean) as InvoiceItem[];

const mockInvoice2Items = [
  calculateInvoiceItem('SKU12346', 200, UserRole.DISTRIBUTOR), // Amoxicillin
  calculateInvoiceItem('SKU12348', 10, UserRole.DISTRIBUTOR),   // Syringes
  calculateInvoiceItem('SKU12351', 5, UserRole.DISTRIBUTOR),    // Thermometer
].filter(Boolean) as InvoiceItem[];

const calculateInvoiceTotals = (items: InvoiceItem[]) => {
  const subTotal = items.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0);
  const totalGst = items.reduce((sum, item) => sum + item.gstAmount, 0);
  const grandTotal = subTotal + totalGst;
  return { subTotal, totalGst, grandTotal };
};

const totals1 = calculateInvoiceTotals(mockInvoice1Items);
const totals2 = calculateInvoiceTotals(mockInvoice2Items);

export const mockInvoices: Invoice[] = [
  {
    invoiceId: 'INV-2025-001',
    invoiceDate: '2025-11-10',
    dueDate: '2025-12-10',
    sellerDetails: {
      name: 'MediSupply Distributors',
      address: '123 Pharma Road, Health City, State, 123456',
      gstin: '22ABCDE1234F1Z5',
    },
    buyerDetails: {
      name: 'City Pharmacy',
      address: '456 Main Street, Townsville, State, 654321',
      gstin: '07ABCDE1234F1Z6',
    },
    items: mockInvoice1Items,
    ...totals1,
  },
  {
    invoiceId: 'INV-2025-002',
    invoiceDate: '2025-11-25',
    dueDate: '2025-12-25',
    sellerDetails: {
      name: 'MediSupply Distributors',
      address: '123 Pharma Road, Health City, State, 123456',
      gstin: '22ABCDE1234F1Z5',
    },
    buyerDetails: {
      name: 'Rural Health Clinic',
      address: '789 Village Lane, Countryside, State, 987654',
      gstin: '09ABCDE1234F1Z7',
    },
    items: mockInvoice2Items,
    ...totals2,
  },
];
