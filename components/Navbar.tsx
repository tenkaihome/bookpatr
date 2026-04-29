"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useCart } from "@/lib/CartContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartCount, isMounted } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 py-6 flex justify-between items-center ${
        isScrolled ? "bg-paper-beige/80 backdrop-blur-md py-4 shadow-sm" : "bg-transparent"
      }`}
    >
      <Link href="/" className="text-2xl font-newsreader font-semibold tracking-tight text-charcoal">
        Modern Signature
      </Link>

      <div className="hidden md:flex space-x-8 items-center">
        {["Collections", "Genres", "Authors", "About"].map((item) => (
          <Link
            key={item}
            href={`/${item.toLowerCase()}`}
            className="text-sm font-manrope font-medium text-charcoal/70 hover:text-charcoal transition-colors uppercase tracking-widest"
          >
            {item}
          </Link>
        ))}
        <Link href="/cart" className="relative group">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-charcoal group-hover:text-coral transition-colors">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
          {isMounted && cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-coral text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </Link>
        <button className="bg-charcoal text-paper-beige px-6 py-2 rounded-sm text-sm font-manrope font-semibold hover:bg-charcoal/90 transition-all">
          Sign In
        </button>
      </div>

      <button className="md:hidden text-charcoal">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </nav>
  );
}
