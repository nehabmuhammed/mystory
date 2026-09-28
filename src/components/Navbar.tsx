import Link from 'next/link';
import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-8 md:px-12 bg-gradient-to-b from-background/80 to-transparent">
      <Link href="/" className="text-sm font-medium tracking-[0.2em] text-primary-text hover:text-white transition-colors duration-500">
        NEHAB
      </Link>
      
      <div className="hidden md:flex items-center gap-10 text-xs tracking-widest text-secondary-text">
        <Link href="/#stories" className="hover:text-primary-text transition-colors duration-500">
          STORIES
        </Link>
        <Link href="/about" className="hover:text-primary-text transition-colors duration-500">
          ABOUT
        </Link>
      </div>

      <button className="md:hidden text-secondary-text hover:text-primary-text transition-colors">
        <Menu size={20} strokeWidth={1.5} />
      </button>
    </nav>
  );
}
