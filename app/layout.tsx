import type { Metadata } from "next";
import { Newsreader, Manrope } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/CartContext";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Modern Signature Bookstore | Curated Literature",
  description: "A premium online bookstore treating literature as an artisanal experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${manrope.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body 
        className="min-h-full flex flex-col font-manrope bg-paper-beige text-charcoal"
        suppressHydrationWarning
      >
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
