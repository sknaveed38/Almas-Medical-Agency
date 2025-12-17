import { getFrequentlyOrderedProducts } from '@/data/orders';
import ProductCard from '@/components/ProductCard';
import { User } from 'lucide-react';

const DashboardPage = () => {
  const frequentProducts = getFrequentlyOrderedProducts();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <User className="w-10 h-10 text-emerald-600 mr-4" />
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Client Dashboard</h1>
          <p className="text-lg text-gray-600">Welcome back, MediSupply Customer!</p>
        </div>
      </div>

      {/* Frequently Ordered Products */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Ordered Products</h2>
        {frequentProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {frequentProducts.map((product) => (
              product ? <ProductCard key={product.product_id} product={product} /> : null
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No frequently ordered products found.</p>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
