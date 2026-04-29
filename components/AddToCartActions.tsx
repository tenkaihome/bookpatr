"use client";

import { useCart } from "@/lib/CartContext";
import { useState } from "react";

export default function AddToCartActions({ bookId }: { bookId: string }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(bookId);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="flex flex-col space-y-4">
      <button 
        onClick={handleAdd}
        className="bg-charcoal text-paper-beige px-12 py-5 rounded-sm font-manrope font-bold hover:bg-charcoal/90 transition-all shadow-ambient flex items-center justify-center space-x-3"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
        <span>{added ? "Added to Bag" : "Add to Signature Bag"}</span>
      </button>
      <button className="border border-charcoal/10 px-12 py-5 rounded-sm font-manrope font-bold text-charcoal hover:bg-charcoal/5 transition-all uppercase tracking-widest text-sm">
        Add to Wishlist
      </button>
    </div>
  );
}
