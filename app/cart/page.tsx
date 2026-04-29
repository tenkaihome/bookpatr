"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useCart } from "@/lib/CartContext";

export default function CartPage() {
  const { cartItems, allBooks, updateQuantity, removeFromCart, cartTotal, isMounted } = useCart();

  const fullCartItems = cartItems.map(item => {
    const book = allBooks.find(b => b.id === item.id);
    return { ...book, quantity: item.quantity, id: item.id };
  }).filter(item => item.title); // Filter out any items that are no longer in DB

  if (!isMounted) return null;

  return (
    <main className="flex min-h-screen flex-col bg-paper-beige">
      <Navbar />
      
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6 md:px-12">
          <h1 className="text-5xl font-newsreader font-semibold text-charcoal mb-16">
            Your Signature Bag
          </h1>

          {fullCartItems.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-xl font-manrope text-charcoal/60 mb-8">Your bag is currently empty.</p>
              <Link href="/" className="inline-block bg-charcoal text-paper-beige px-12 py-5 rounded-sm font-manrope font-bold hover:bg-charcoal/90 transition-all shadow-ambient uppercase tracking-widest text-sm">
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2 space-y-8">
                {fullCartItems.map((item) => (
                  <div key={item.id} className="flex space-x-8 pb-8 border-b border-charcoal/10 items-center">
                    <div className="w-24 aspect-[3/4] bg-charcoal/5 rounded-sm overflow-hidden flex-shrink-0">
                      {item.cover_url ? (
                        <img src={item.cover_url} alt={item.title} className="object-cover w-full h-full" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-charcoal/10 text-charcoal/30 text-[10px] font-newsreader italic text-center p-2">
                          {item.title}
                        </div>
                      )}
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-newsreader text-2xl text-charcoal">{item.title}</h3>
                        <span className="font-manrope font-bold text-charcoal">
                          {item.price && item.price.startsWith('$') ? item.price : `$${item.price || '0.00'}`}
                        </span>
                      </div>
                      <p className="font-manrope text-sm text-charcoal/40 mb-4">{item.author}</p>
                      <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-3 border border-charcoal/10 rounded-sm px-3 py-1">
                          <button 
                            className="text-charcoal/40 hover:text-charcoal"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >-</button>
                          <span className="text-sm font-manrope font-bold">{item.quantity}</span>
                          <button 
                            className="text-charcoal/40 hover:text-charcoal"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >+</button>
                        </div>
                        <button 
                          className="text-[10px] font-manrope font-bold text-charcoal/30 uppercase tracking-widest hover:text-coral transition-colors"
                          onClick={() => removeFromCart(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="lg:col-span-1">
                <div className="bg-charcoal/5 rounded-sm p-8 space-y-8 sticky top-32">
                  <h2 className="font-newsreader text-2xl text-charcoal border-b border-charcoal/10 pb-4">
                    Order Summary
                  </h2>
                  
                  <div className="space-y-4 font-manrope text-sm">
                    <div className="flex justify-between text-charcoal/60">
                      <span>Subtotal</span>
                      <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-charcoal/60">
                      <span>Shipping</span>
                      <span className="uppercase tracking-widest text-[10px] font-bold">Calculated at checkout</span>
                    </div>
                    <div className="flex justify-between text-charcoal/60">
                      <span>Tax</span>
                      <span>$0.00</span>
                    </div>
                    <div className="flex justify-between text-charcoal font-bold text-lg pt-4 border-t border-charcoal/10">
                      <span>Total</span>
                      <span>${cartTotal.toFixed(2)}</span>
                    </div>
                  </div>

                  <Link href="/checkout" className="block w-full bg-charcoal text-paper-beige py-4 rounded-sm font-manrope font-bold text-center hover:bg-charcoal/90 transition-all shadow-ambient uppercase tracking-widest text-sm">
                    Proceed to Checkout
                  </Link>
                  
                  <p className="text-[10px] font-manrope text-charcoal/40 text-center uppercase tracking-widest leading-relaxed">
                    Every book is inspected and hand-packed <br /> with archival materials.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
