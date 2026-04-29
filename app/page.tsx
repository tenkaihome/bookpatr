import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedBooks from "@/components/FeaturedBooks";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      
      {/* Editorial Quote Section */}
      <section className="py-24 bg-paper-beige border-y border-charcoal/5">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
          <div className="flex justify-center mb-8">
             <div className="w-px h-12 bg-coral"></div>
          </div>
          <blockquote className="font-newsreader text-3xl md:text-4xl italic text-charcoal leading-relaxed mb-8">
            "A room without books is like a body without a soul. We curate not just objects, but vessels of human experience and imagination."
          </blockquote>
          <cite className="font-manrope font-bold text-xs uppercase tracking-[0.3em] text-charcoal/40 not-italic">
            Cicero — Rediscovered
          </cite>
        </div>
      </section>

      <FeaturedBooks />

      {/* Philosophy Section */}
      <section className="py-24 bg-charcoal/5">
        <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-24 items-center">
          <div className="order-2 md:order-1">
             <div className="aspect-[4/3] bg-charcoal/10 rounded-sm overflow-hidden shadow-ambient relative">
                <img src="/philosophy.jpg" alt="Our Atelier" className="object-cover w-full h-full grayscale opacity-80" />
                <div className="absolute inset-0 border-[24px] border-paper-beige/20"></div>
             </div>
          </div>
          <div className="order-1 md:order-2">
            <span className="text-coral font-manrope font-bold text-xs uppercase tracking-[0.2em] mb-4 inline-block">
              Our Philosophy
            </span>
            <h2 className="text-4xl md:text-5xl font-newsreader font-semibold text-charcoal mb-8 leading-tight">
              The Art of <br /> Curated Reading
            </h2>
            <div className="space-y-6 text-charcoal/70 font-manrope leading-relaxed">
              <p>
                In a digital age of abundance, we believe in the luxury of selection. Our librarians hand-pick every title based on literary merit, binding quality, and timeless relevance.
              </p>
              <p>
                We treat literature as an artisanal experience—bridging the gap between a traditional physical library and a modern digital boutique.
              </p>
            </div>
            <button className="mt-10 text-sm font-manrope font-bold text-charcoal border-b-2 border-charcoal/20 pb-1 hover:border-coral transition-colors">
              Learn about our process
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
