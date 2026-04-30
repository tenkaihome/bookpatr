import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AddToCartActions from "@/components/AddToCartActions";
import { getBook } from "@/lib/api";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const book = await getBook(id);

  if (!book) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col bg-paper-beige">
      <Navbar />
      
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6 md:px-12">
          <Link href="/" className="inline-flex items-center text-sm font-manrope font-bold text-charcoal/40 hover:text-coral transition-colors mb-12 uppercase tracking-widest">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to Collection
          </Link>

          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div className="relative aspect-[3/4] bg-charcoal/5 rounded-sm overflow-hidden shadow-ambient">
              {book.cover_url ? (
                <img
                  src={book.cover_url}
                  alt={book.title}
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-charcoal/10 text-charcoal/20 font-newsreader text-4xl italic px-8 text-center">
                  {book.title}
                </div>
              )}
            </div>

            <div className="space-y-12">
              <div>
                <span className="text-coral font-manrope font-bold text-xs uppercase tracking-[0.2em] mb-4 inline-block">
                  {book.category}
                </span>
                <h1 className="text-5xl md:text-6xl font-newsreader font-semibold text-charcoal mb-4">
                  {book.title}
                </h1>
                <p className="text-xl font-newsreader italic text-charcoal/50">
                  by {book.author}
                </p>
              </div>

              <div className="flex items-center space-x-8">
                <span className="text-3xl font-manrope font-bold text-charcoal">
                  {book.price.startsWith('$') ? book.price : `$${book.price}`}
                </span>
              </div>

              <p className="text-lg font-manrope text-charcoal/70 leading-relaxed max-w-lg">
                {book.description}
              </p>

              <AddToCartActions bookId={book.id} />

              <div className="pt-12 border-t border-charcoal/10">
                <h4 className="font-newsreader text-xl mb-6">Product Details</h4>
                <div className="grid grid-cols-2 gap-y-4">
                  {Object.entries(book.details).map(([key, value]) => (
                    <div key={key}>
                      <span className="block text-[10px] font-manrope font-bold text-charcoal/30 uppercase tracking-widest mb-1">{key}</span>
                      <span className="text-sm font-manrope text-charcoal/80">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
