import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getBooks } from "@/lib/api";
import Link from "next/link";

export default async function GenresPage() {
  const books = await getBooks();
  const genres = Array.from(new Set(books.map((b) => b.category)));

  return (
    <main className="flex min-h-screen flex-col bg-paper-beige">
      <Navbar />
      
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-24 items-center mb-24">
            <div>
              <span className="text-coral font-manrope font-bold text-xs uppercase tracking-[0.2em] mb-4 inline-block">
                Literary Landscape
              </span>
              <h1 className="text-5xl md:text-6xl font-newsreader font-semibold text-charcoal mb-8">
                Explore by <br /> Genre
              </h1>
              <p className="text-lg font-manrope text-charcoal/60 leading-relaxed max-w-lg">
                From the depths of philosophical inquiry to the far reaches of speculative fiction, find the voice that speaks to your current chapter.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {genres.map((genre) => (
                <Link 
                  key={genre}
                  href={`/collections?genre=${genre.toLowerCase()}`}
                  className="aspect-square bg-charcoal text-paper-beige p-8 flex flex-col justify-between hover:bg-coral transition-colors duration-500 rounded-sm group"
                >
                  <span className="font-manrope text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 group-hover:opacity-100">Explore</span>
                  <span className="font-newsreader text-2xl font-medium">{genre}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="border-t border-charcoal/10 pt-24">
            <h2 className="text-sm font-manrope font-bold uppercase tracking-[0.3em] text-charcoal/30 mb-12 text-center">Featured Releases</h2>
            <div className="grid md:grid-cols-3 gap-12">
              {books.slice(0, 3).map((book) => (
                <Link key={book.id} href={`/products/${book.id}`} className="flex space-x-6 group">
                  <div className="w-20 aspect-[3/4] bg-charcoal/5 flex-shrink-0 rounded-sm overflow-hidden shadow-sm group-hover:shadow-ambient transition-all">
                    {book.cover_url ? (
                      <img src={book.cover_url} alt={book.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-charcoal/10 text-charcoal/30 text-[8px] font-newsreader italic text-center p-1">
                        {book.title}
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-newsreader text-lg text-charcoal group-hover:text-coral transition-colors">{book.title}</h3>
                    <p className="font-manrope text-xs text-charcoal/40 uppercase tracking-widest mt-1">{book.author}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
