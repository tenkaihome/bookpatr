"use client";

import Link from "next/link";
import { useCart } from "@/lib/CartContext";
import { Plus } from "lucide-react";

interface BookCardProps {
  id: string;
  title: string;
  author: string;
  price: string;
  category: string;
  image: string;
}

export default function BookCard({ id, title, author, price, category, image }: BookCardProps) {
  const { addToCart } = useCart();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(id, 1);
  };

  return (
    <Link href={`/products/${id}`} className="group cursor-pointer block">
      <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-charcoal/5 rounded-sm shadow-tactile group-hover:shadow-ambient transition-all duration-500 group-hover:-translate-y-2">
        {image ? (
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-charcoal/10 text-charcoal/20 font-newsreader text-2xl italic px-4 text-center">
            {title}
          </div>
        )}
        
        {/* Hover Overlay with Quick Add Button */}
        <div className="absolute inset-0 bg-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <button 
            onClick={handleQuickAdd}
            className="bg-paper-beige text-charcoal px-6 py-3 rounded-full font-manrope font-bold text-[10px] uppercase tracking-[0.2em] shadow-ambient transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-coral hover:text-white flex items-center gap-2"
          >
            <Plus className="w-3 h-3" />
            Add Cart
          </button>
        </div>

        <div className="absolute top-4 left-4">
          <span className="bg-paper-beige/90 backdrop-blur-sm text-charcoal px-3 py-1 text-[10px] font-manrope font-bold uppercase tracking-widest rounded-full shadow-sm">
            {category}
          </span>
        </div>
      </div>
      
      <div className="space-y-1">
        <h3 className="font-newsreader text-xl font-medium text-charcoal group-hover:text-coral transition-colors duration-300">
          {title}
        </h3>
        <div className="flex justify-between items-center">
          <p className="font-manrope text-sm text-charcoal/50">{author}</p>
          <p className="font-manrope text-sm font-bold text-charcoal">
            {price.startsWith('$') ? price : `$${price}`}
          </p>
        </div>
      </div>
    </Link>
  );
}
