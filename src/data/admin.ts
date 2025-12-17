export const adminInventorySummary = {
  totalProducts: 150, // Dummy value
  totalStockQuantity: 120000, // Dummy value
  lowStockItemsCount: 15, // Dummy value
  outOfStockItemsCount: 5, // Dummy value
};

export const adminLowStockAlerts = [
  { productId: 'PROD-101', name: 'Dummy Product A', currentStock: 10, moq: 20, alertThreshold: 40 },
  { productId: 'PROD-102', name: 'Dummy Product B', currentStock: 5, moq: 10, alertThreshold: 20 },
];

export const adminSalesData = [
  { month: 'Jan', sales: 1200000 },
  { month: 'Feb', sales: 1500000 },
  { month: 'Mar', sales: 1300000 },
  { month: 'Apr', sales: 1700000 },
  { month: 'May', sales: 1600000 },
  { month: 'Jun', sales: 1900000 },
];