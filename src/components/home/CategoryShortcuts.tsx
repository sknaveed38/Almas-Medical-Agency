import Link from 'next/link';
import { Syringe, Pill, Beaker, Stethoscope, Package } from 'lucide-react';

const categoryIcons = {
  "Tablets": <Pill className="w-8 h-8 mx-auto mb-2 text-emerald-600" />,
  "Syrups": <Beaker className="w-8 h-8 mx-auto mb-2 text-emerald-600" />,
  "Injections": <Syringe className="w-8 h-8 mx-auto mb-2 text-emerald-600" />,
  "Equipment": <Stethoscope className="w-8 h-8 mx-auto mb-2 text-emerald-600" />,
  "Consumables": <Package className="w-8 h-8 mx-auto mb-2 text-emerald-600" />,
};

const categories = ["Tablets", "Syrups", "Injections", "Equipment", "Consumables"];

const CategoryShortcuts = () => (
  <section className="py-12">
    <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Shop by Category</h2>
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8">
      {categories.map(category => (
        <Link key={category} href={`/products?category=${category}`} className="block text-center p-6 bg-white rounded-lg border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          {categoryIcons[category as keyof typeof categoryIcons]}
          <p className="font-semibold text-gray-700">{category}</p>
        </Link>
      ))}
    </div>
  </section>
);

export default CategoryShortcuts;
