import { products } from './products';

export const orders = [
  {
    id: 'ORD-2025-001',
    date: '2025-11-05',
    status: 'Delivered',
    totalAmount: 75000,
    items: [
      { productId: 'SKU12345', quantity: 50 },
      { productId: 'SKU12347', quantity: 100 },
    ],
  },
  {
    id: 'ORD-2025-002',
    date: '2025-11-12',
    status: 'Delivered',
    totalAmount: 50750,
    items: [
      { productId: 'SKU12346', quantity: 30 },
      { productId: 'SKU12348', quantity: 5 },
    ],
  },
  {
    id: 'ORD-2025-003',
    date: '2025-11-20',
    status: 'Shipped',
    totalAmount: 80000,
    items: [
      { productId: 'SKU12349', quantity: 80 },
      { productId: 'SKU12351', quantity: 10 },
    ],
  },
  {
    id: 'ORD-2025-004',
    date: '2025-12-01',
    status: 'Processing',
    totalAmount: 12500,
    items: [
      { productId: 'SKU12350', quantity: 500 },
    ],
  },
];

export const frequentlyOrderedProductIds = ['SKU12345', 'SKU12347', 'SKU12346', 'SKU12349'];

export const getFrequentlyOrderedProducts = () => {
  return frequentlyOrderedProductIds.map(id => products.find(p => p.product_id === id)).filter(Boolean);
};
