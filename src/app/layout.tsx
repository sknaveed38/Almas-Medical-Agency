import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RoleProvider } from "@/context/RoleContext";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { CartProvider } from "@/context/CartContext";
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MediSupply - B2B Pharma Wholesale",
  description: "Trusted Pharma Distributor — Wholesale Medicine Supply for Pharmacies & Clinics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <RoleProvider>
          <CartProvider>
            <Toaster position="top-center" reverseOrder={false} />
            <Header />
            <main>{children}</main>
            <Footer />
            <ScrollToTopButton />
          </CartProvider>
        </RoleProvider>
      </body>
    </html>
  );
}