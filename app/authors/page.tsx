import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getBooks } from "@/lib/api";
import Link from "next/link";

export default async function AuthorsPage() {
  const books = await getBooks();
  const authors = Array.from(new Set(books.map((b) => b.author)));

  return (
    <main className="flex min-h-screen flex-col bg-paper-beige">
      <Navbar />
      
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6 md:px-12">
          <header className="mb-24">
            <span className="text-coral font-manrope font-bold text-xs uppercase tracking-[0.2em] mb-4 inline-block">
              The Creators
            </span>
            <h1 className="text-5xl md:text-6xl font-newsreader font-semibold text-charcoal">
              Featured Authors
            </h1>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-12">
            {authors.map((author) => (
              <div key={author} className="group">
                <div className="aspect-[4/5] bg-charcoal/5 rounded-sm mb-8 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 shadow-sm group-hover:shadow-ambient">
                   {/* In a real app, authors would have photos. Using a generic placeholder for now */}
                   <div className="w-full h-full flex items-center justify-center bg-charcoal/10">
                      <span className="font-newsreader text-4xl text-charcoal/20">{author.split(' ').map(n => n[0]).join('')}</span>
                   </div>
                </div>
                <h2 className="text-3xl font-newsreader font-medium text-charcoal mb-4">{author}</h2>
                <div className="space-y-4">
                  <p className="text-sm font-manrope text-charcoal/50 leading-relaxed">
                    A celebrated voice in their field, known for profound contributions to contemporary literature and thought.
                  </p>
                  <div className="pt-4 border-t border-charcoal/5">
                    <span className="text-[10px] font-manrope font-bold uppercase tracking-widest text-charcoal/30 block mb-4">Works in our collection</span>
                    <div className="space-y-2">
                      {books.filter(b => b.author === author).map(book => (
                        <Link key={book.id} href={`/products/${book.id}`} className="block text-sm font-manrope text-charcoal hover:text-coral transition-colors italic">
                          {book.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
