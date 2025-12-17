import Link from 'next/link';
import { ArrowRight, CreditCard } from 'lucide-react'; // Import icons

const HeroSection = () => (
  <section className="text-center py-16 md:py-24">
    <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
      Trusted Pharma Distributor
    </h1>
    <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
      Wholesale Medicine Supply for Pharmacies & Clinics. Fast dispatch, licensed supplier, and flexible credit terms for verified clients.
    </p>
    <div className="mt-8 flex justify-center gap-4">
      <Link
        href="/products"
        className="px-6 py-2 sm:px-12 sm:py-5 bg-emerald-600 text-white font-semibold rounded-full shadow-md hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
      >
        <span>Wholesale Catalogue</span>
        <ArrowRight size={20} />
      </Link>
      <Link
        href="/credit-request"
        className="px-6 py-2 sm:px-12 sm:py-5 bg-white text-emerald-600 font-semibold rounded-full border border-emerald-600 hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
      >
        <span>Request Credit Account</span>
        <CreditCard size={20} />
      </Link>
    </div>
  </section>
);

export default HeroSection;
