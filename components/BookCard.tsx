import Link from "next/link";

interface BookCardProps {
  id: string;
  title: string;
  author: string;
  price: string;
  category: string;
  image: string;
}

export default function BookCard({ id, title, author, price, category, image }: BookCardProps) {
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
        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/5 transition-colors duration-500"></div>
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
          <p className="font-manrope text-sm font-bold text-charcoal">{price}</p>
        </div>
      </div>
    </Link>
  );
}
