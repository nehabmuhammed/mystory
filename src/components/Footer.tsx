import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6 md:px-12 bg-background relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex flex-col items-center md:items-start gap-4">
          <Link href="/" className="text-sm font-medium tracking-[0.2em] text-primary-text">
            NEHAB
          </Link>
          <p className="text-xs text-secondary-text tracking-wide">
            Stories written in Malayalam.
          </p>
        </div>

        <div className="flex gap-8 text-[10px] tracking-[0.2em] text-secondary-text">
          <Link href="/#stories" className="hover:text-primary-text transition-colors">STORIES</Link>
          <Link href="/about" className="hover:text-primary-text transition-colors">ABOUT</Link>
        </div>

        <div className="flex gap-8 text-[10px] tracking-[0.2em] text-secondary-text">
          <a href="#" className="hover:text-primary-text transition-colors">INSTAGRAM</a>
          <a href="#" className="hover:text-primary-text transition-colors">EMAIL</a>
        </div>
      </div>
      
      <div className="mt-16 text-center text-[10px] tracking-widest text-secondary-text/50">
        © 2026 NEHAB
      </div>
    </footer>
  );
}
