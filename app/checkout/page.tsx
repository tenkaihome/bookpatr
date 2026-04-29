"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/lib/CartContext";

export default function CheckoutPage() {
  const { cartItems, allBooks, cartCount, cartTotal, isMounted } = useCart();
  const [loading, setLoading] = useState(false);

  if (!isMounted) return null;

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const itemsForStripe = cartItems.map(item => {
        const book = allBooks.find(b => b.id === item.id);
        return { ...book, quantity: item.quantity };
      }).filter(item => item.title);

      const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://logbook-kohl-one.vercel.app/api';
      const response = await fetch(`${API_BASE_URL}/checkout/create-checkout-session`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: itemsForStripe }),
      });

      const { url } = await response.json();
      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      console.error("Checkout failed:", error);
      alert("Payment failed to initialize");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col bg-paper-beige">
      <Navbar />
      
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-newsreader font-semibold text-charcoal mb-16 text-center">
              Finalizing Your Collection
            </h1>

            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-12">
                <div>
                  <h3 className="font-newsreader text-2xl text-charcoal mb-8 border-b border-charcoal/10 pb-4">
                    1. Shipping Information
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="col-span-1">
                      <label className="block text-[10px] font-manrope font-bold text-charcoal/30 uppercase tracking-widest mb-2">First Name</label>
                      <input type="text" className="w-full bg-transparent border-b border-charcoal/10 py-2 focus:outline-none focus:border-coral font-manrope" />
                    </div>
                    <div className="col-span-1">
                      <label className="block text-[10px] font-manrope font-bold text-charcoal/30 uppercase tracking-widest mb-2">Last Name</label>
                      <input type="text" className="w-full bg-transparent border-b border-charcoal/10 py-2 focus:outline-none focus:border-coral font-manrope" />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-[10px] font-manrope font-bold text-charcoal/30 uppercase tracking-widest mb-2">Address</label>
                      <input type="text" className="w-full bg-transparent border-b border-charcoal/10 py-2 focus:outline-none focus:border-coral font-manrope" />
                    </div>
                    <div className="col-span-1">
                      <label className="block text-[10px] font-manrope font-bold text-charcoal/30 uppercase tracking-widest mb-2">City</label>
                      <input type="text" className="w-full bg-transparent border-b border-charcoal/10 py-2 focus:outline-none focus:border-coral font-manrope" />
                    </div>
                    <div className="col-span-1">
                      <label className="block text-[10px] font-manrope font-bold text-charcoal/30 uppercase tracking-widest mb-2">Postal Code</label>
                      <input type="text" className="w-full bg-transparent border-b border-charcoal/10 py-2 focus:outline-none focus:border-coral font-manrope" />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-newsreader text-2xl text-charcoal mb-8 border-b border-charcoal/10 pb-4">
                    2. Payment Method
                  </h3>
                  <div className="space-y-4">
                    <div className="border border-charcoal/10 p-4 rounded-sm flex items-center justify-between cursor-pointer hover:border-coral transition-colors group">
                      <div className="flex items-center space-x-4">
                         <div className="w-4 h-4 rounded-full border border-charcoal/20 group-hover:border-coral flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-coral opacity-0 group-hover:opacity-100 transition-opacity"></div>
                         </div>
                         <span className="font-manrope text-sm font-bold text-charcoal/60">Credit Card</span>
                      </div>
                      <div className="flex space-x-2">
                        <div className="w-8 h-5 bg-charcoal/5 rounded-sm"></div>
                        <div className="w-8 h-5 bg-charcoal/5 rounded-sm"></div>
                      </div>
                    </div>
                    <div className="border border-charcoal/10 p-4 rounded-sm flex items-center space-x-4 cursor-pointer hover:border-coral transition-colors group opacity-50">
                       <div className="w-4 h-4 rounded-full border border-charcoal/20 flex items-center justify-center"></div>
                       <span className="font-manrope text-sm font-bold text-charcoal/60">PayPal</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-charcoal text-paper-beige p-10 rounded-sm shadow-ambient h-fit space-y-12">
                <h3 className="font-newsreader text-2xl border-b border-paper-beige/10 pb-4">
                  Bag Overview
                </h3>
                
                <div className="space-y-6">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-manrope text-paper-beige/60">{cartCount} {cartCount === 1 ? 'Item' : 'Items'}</span>
                    <span className="font-manrope font-bold">${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-manrope text-paper-beige/60">Signature Packaging</span>
                    <span className="font-manrope font-bold">Complimentary</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-manrope text-paper-beige/60">Arrives By</span>
                    <span className="font-manrope font-bold">May 4th — 6th</span>
                  </div>
                </div>

                <div className="pt-8 border-t border-paper-beige/10 flex justify-between items-end">
                  <div>
                    <span className="block text-[10px] font-manrope font-bold text-paper-beige/30 uppercase tracking-[0.2em] mb-1">Total Due</span>
                    <span className="text-3xl font-manrope font-bold">${cartTotal.toFixed(2)}</span>
                  </div>
                </div>

                <button 
                  onClick={handleCheckout}
                  disabled={loading || cartItems.length === 0}
                  className="w-full bg-coral text-white py-5 rounded-sm font-manrope font-bold uppercase tracking-widest hover:bg-coral/90 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {loading ? "Archiving..." : "Complete Purchase"}
                </button>
                
                <p className="text-[10px] font-manrope text-paper-beige/30 text-center uppercase tracking-widest leading-relaxed">
                  Secured by Signature Encryption. <br /> Your literary journey is safe with us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
