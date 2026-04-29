import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-paper-beige py-24 px-6 md:px-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="text-3xl font-newsreader font-semibold tracking-tight mb-8 inline-block">
            Modern Signature
          </Link>
          <p className="font-manrope text-paper-beige/60 max-w-md leading-relaxed mb-8">
            Treating every book as a physical masterpiece. Join our newsletter to receive curated literary recommendations and exclusive editions.
          </p>
          <div className="flex space-x-4">
             <input 
               type="email" 
               placeholder="Your email address" 
               className="bg-paper-beige/10 border-b border-paper-beige/30 py-2 px-4 focus:outline-none focus:border-coral transition-colors flex-grow max-w-xs font-manrope text-sm"
             />
             <button className="text-coral font-manrope font-bold text-sm uppercase tracking-widest hover:text-white transition-colors">
               Subscribe
             </button>
          </div>
        </div>

        <div>
          <h4 className="font-newsreader text-xl mb-6">Explore</h4>
          <ul className="space-y-4 text-paper-beige/60 font-manrope text-sm">
            <li><Link href="/collections" className="hover:text-coral transition-colors">Special Editions</Link></li>
            <li><Link href="/genres" className="hover:text-coral transition-colors">Browse Genres</Link></li>
            <li><Link href="/authors" className="hover:text-coral transition-colors">Our Authors</Link></li>
            <li><Link href="/journals" className="hover:text-coral transition-colors">Literary Journal</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-newsreader text-xl mb-6">Support</h4>
          <ul className="space-y-4 text-paper-beige/60 font-manrope text-sm">
            <li><Link href="/contact" className="hover:text-coral transition-colors">Contact Us</Link></li>
            <li><Link href="/shipping" className="hover:text-coral transition-colors">Shipping Info</Link></li>
            <li><Link href="/returns" className="hover:text-coral transition-colors">Return Policy</Link></li>
            <li><Link href="/faq" className="hover:text-coral transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto mt-24 pt-8 border-t border-paper-beige/10 flex flex-col md:flex-row justify-between items-center text-xs font-manrope text-paper-beige/30 uppercase tracking-[0.2em]">
        <p>© 2026 Modern Signature Bookstore. All Rights Reserved.</p>
        <div className="flex space-x-8 mt-4 md:mt-0">
          <Link href="#">Instagram</Link>
          <Link href="#">Twitter</Link>
          <Link href="#">Pinterest</Link>
        </div>
      </div>
    </footer>
  );
}
