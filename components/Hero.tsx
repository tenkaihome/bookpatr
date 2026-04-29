import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-paper-beige">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="max-w-2xl">
          <span className="inline-block text-coral font-manrope font-bold text-xs uppercase tracking-[0.2em] mb-4">
            Established 2026
          </span>
          <h1 className="text-5xl md:text-7xl font-newsreader font-semibold text-charcoal leading-[1.1] mb-6">
            Literature as an <br />
            <span className="italic">Artisanal Experience</span>
          </h1>
          <p className="text-lg md:text-xl font-manrope text-charcoal/60 leading-relaxed mb-10 max-w-lg">
            A curated selection of the world's most profound literature, bound in excellence and presented for the discerning reader.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/collections" className="bg-charcoal text-paper-beige px-8 py-4 rounded-sm font-manrope font-bold hover:bg-charcoal/90 transition-all shadow-ambient text-center">
              Explore Collection
            </Link>
            <Link href="/about" className="border border-charcoal/10 px-8 py-4 rounded-sm font-manrope font-bold text-charcoal hover:bg-charcoal/5 transition-all text-center">
              Our Philosophy
            </Link>
          </div>
        </div>

        <div className="relative h-[600px] hidden md:block">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-coral/5 rounded-full blur-3xl"></div>
          <div className="relative z-10 h-full w-full flex items-center justify-center">
            {/* Placeholder for Hero Image - will generate later */}
            <div className="w-4/5 h-full bg-charcoal/5 rounded-lg border border-charcoal/10 shadow-ambient flex items-center justify-center overflow-hidden">
               <img src="/hero-book.jpg" alt="Curated Books" className="object-cover w-full h-full opacity-90" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative botanical element */}
      <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[60%] opacity-10 pointer-events-none rotate-12">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#E66D5C" d="M44.7,-76.4C58.1,-69.2,69.5,-57.4,76.5,-43.6C83.5,-29.8,86.1,-14,84.1,1.1C82.1,16.2,75.4,30.6,66.6,43.2C57.8,55.8,46.9,66.5,33.9,72.7C20.9,78.9,5.8,80.6,-10,79.1C-25.8,77.5,-42.2,72.8,-55.8,63.8C-69.4,54.8,-80.1,41.4,-84.9,26.4C-89.7,11.3,-88.6,-5.4,-83.4,-20.5C-78.2,-35.5,-68.9,-48.9,-56.9,-56.7C-44.9,-64.5,-30.2,-66.6,-16.8,-73.8C-3.4,-81,10.7,-93.3,25.9,-93.2C41.1,-93.1,31.3,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </div>
    </section>
  );
}
