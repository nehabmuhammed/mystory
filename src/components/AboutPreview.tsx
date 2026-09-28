import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function AboutPreview() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 border-t border-border/50">
      <div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-10">
        <h2 className="text-[10px] tracking-[0.4em] text-secondary-text">ABOUT</h2>
        
        <p className="font-serif text-2xl md:text-3xl text-primary-text leading-relaxed">
          "Stories written in Malayalam.<br />
          <span className="text-secondary-text">Some imagined. Some remembered.</span>"
        </p>

        <Link href="/about" className="mt-8 flex items-center gap-4 text-xs tracking-[0.2em] text-primary-text group">
          <span>READ ABOUT ME</span>
          <ArrowRight size={16} strokeWidth={1} className="transition-transform duration-500 group-hover:translate-x-2 text-accent" />
        </Link>
      </div>
    </section>
  );
}
