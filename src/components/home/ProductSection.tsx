"use client";
import Link from 'next/link';
import ProductCard, { Product } from '@/components/ProductCard';

interface ProductSectionProps {
  title: string;
  products: Product[];
  viewAllLink: string;
  isDeal?: boolean;
}

const ProductSection: React.FC<ProductSectionProps> = ({ title, products, viewAllLink, isDeal = false }) => {
  if (products.length === 0) {
    return null;
  }

  const titleClasses = isDeal
    ? "text-2xl font-bold text-center text-red-600 mb-8"
    : "text-2xl font-bold text-center text-gray-800 mb-8";
  
  const linkClasses = isDeal
    ? "text-red-600 font-semibold hover:underline"
    : "text-emerald-600 font-semibold hover:underline";

  return (
    <section className="py-12">
      <h2 className={titleClasses}>
        {isDeal && '🔥 '}
        {title}
        {isDeal && ' 🔥'}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="text-center mt-12">
        <Link href={viewAllLink} className={linkClasses}>
          View All {title} &rarr;
        </Link>
      </div>
    </section>
  );
};

export default ProductSection;
