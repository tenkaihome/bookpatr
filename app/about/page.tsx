import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-paper-beige">
      <Navbar />
      
      <section className="pt-48 pb-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <span className="text-coral font-manrope font-bold text-xs uppercase tracking-[0.2em] mb-4 inline-block">
              Our Story
            </span>
            <h1 className="text-6xl md:text-8xl font-newsreader font-semibold text-charcoal mb-16 tracking-tight">
              An Atelier for <br /> the Soul.
            </h1>
            
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div className="space-y-8 font-manrope text-lg text-charcoal/70 leading-relaxed">
                <p>
                  Founded in 2024, Modern Signature was born from a simple observation: in an age of digital abundance, the intentionality of reading was being lost.
                </p>
                <p>
                  We don't believe in algorithms. We believe in librarians. Every book in our collection is hand-vetted not just for its content, but for its physical craftsmanship and enduring relevance.
                </p>
              </div>
              <div className="space-y-8 font-manrope text-lg text-charcoal/70 leading-relaxed">
                <p>
                  We treat literature as an artisanal experience. Our packaging is archival-grade, our curators are passionate readers, and our mission is to build libraries that last generations.
                </p>
                <div className="pt-8 border-t border-charcoal/10">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-px bg-coral"></div>
                    <span className="font-newsreader italic text-2xl text-charcoal">The Curators</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-32 aspect-[21/9] bg-charcoal/10 rounded-sm overflow-hidden shadow-ambient grayscale opacity-90 relative">
               <img src="/hero-book.jpg" alt="Our Bookstore" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-charcoal/20"></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
