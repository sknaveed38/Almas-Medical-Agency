import { Product } from '@/components/ProductCard'; // Assuming ProductCard defines the Product interface

export const isNearExpiry = (product: Product, monthsThreshold: number = 3): boolean => {
  if (!product.batches || product.batches.length === 0) {
    return false;
  }

  const now = new Date();
  const thresholdDate = new Date();
  thresholdDate.setMonth(now.getMonth() + monthsThreshold);

  for (const batch of product.batches) {
    const expiryDate = new Date(batch.expiry);
    if (expiryDate <= thresholdDate && expiryDate >= now) {
      return true; // At least one batch is expiring within the threshold
    }
  }
  return false;
};

export const getSoonestExpiry = (product: Product): string | null => {
  if (!product.batches || product.batches.length === 0) {
    return null;
  }

  // Sort batches by expiry date in ascending order
  const sortedBatches = [...product.batches].sort((a, b) => new Date(a.expiry).getTime() - new Date(b.expiry).getTime());

  // Return the expiry date of the first batch
  return sortedBatches[0].expiry;
};
