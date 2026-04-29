"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useCart } from "@/lib/CartContext";

export default function SuccessPage() {
  const { cartItems, removeFromCart } = useCart();

  useEffect(() => {
    // Clear the cart after successful purchase
    cartItems.forEach(item => removeFromCart(item.id));
  }, []);

  return (
    <main className="flex min-h-screen flex-col bg-paper-beige">
      <Navbar />
      <section className="pt-48 pb-24 flex-grow flex items-center justify-center">
        <div className="text-center max-w-2xl px-6">
          <div className="w-24 h-24 bg-coral/10 rounded-full flex items-center justify-center mx-auto mb-12">
            <svg className="w-10 h-10 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h1 className="text-5xl font-newsreader font-semibold text-charcoal mb-8">
            Order Confirmed
          </h1>
          <p className="text-lg font-manrope text-charcoal/60 leading-relaxed mb-12">
            Thank you for your purchase. Your literary treasures are being meticulously packed and will be shipped to you shortly. A confirmation email has been sent to your inbox.
          </p>
          <Link href="/" className="inline-block bg-charcoal text-paper-beige px-12 py-5 rounded-sm font-manrope font-bold hover:bg-charcoal/90 transition-all shadow-ambient uppercase tracking-widest text-sm">
            Return to Collection
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
