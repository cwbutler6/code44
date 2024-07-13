import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Code 44",
  description: "Luxury event planning services for weddings, corporate events, and social gatherings. Elevate your event with Code 44.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-warm-black text-warm-cream">
          <header className="p-4 bg-warm-black flex justify-between items-center">
            <Link href="/" className="text-warm-gold text-lg md:text-xl font-serif">Code 44</Link>
            <nav>
              <Link href="/gallery" className="text-warm-cream hover:text-warm-gold transition-colors mr-4">
                Gallery
              </Link>
              <Link href="/contact" className="text-warm-cream hover:text-warm-gold transition-colors">
                Contact
              </Link>
            </nav>
          </header>
          <main>{children}</main>
          <footer className="mt-16 py-8 px-4 md:px-8 text-center text-warm-cream/70 bg-warm-black">
            <p>© 2024 Code 44. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
