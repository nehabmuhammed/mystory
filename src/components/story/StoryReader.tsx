'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, ChevronUp, Type } from 'lucide-react';

interface StoryReaderProps {
  children: React.ReactNode;
  storyTitle?: string;
}

export default function StoryReader({ children, storyTitle = 'എൽന' }: StoryReaderProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showNavTitle, setShowNavTitle] = useState(false);
  const [fontSizeLevel, setFontSizeLevel] = useState<0 | 1 | 2>(0); // 0: Normal, 1: Comfortable (+10%), 2: Large (+20%)

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
      setShowNavTitle(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cycleFontSize = () => {
    setFontSizeLevel((prev) => ((prev + 1) % 3) as 0 | 1 | 2);
  };

  const fontSizeScaleClass = 
    fontSizeLevel === 1 ? 'text-[1.08em]' :
    fontSizeLevel === 2 ? 'text-[1.18em]' : '';

  return (
    <main className="bg-background min-h-screen text-primary-text selection:bg-accent selection:text-white">
      {/* Scroll-driven Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[2px] bg-accent z-50 transition-all duration-150 ease-out shadow-[0_0_8px_rgba(164,71,53,0.8)]"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Floating Reader Navigation */}
      <nav className="fixed top-0 left-0 w-full z-40 p-4 md:p-6 flex justify-between items-center pointer-events-none">
        {/* Back Button */}
        <Link 
          href="/#stories" 
          className="pointer-events-auto inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-surface/80 backdrop-blur-md border border-border/70 text-secondary-text hover:text-primary-text hover:border-accent/60 transition-all duration-300 text-xs tracking-wider group shadow-lg"
          aria-label="Back to stories"
        >
          <ArrowLeft size={16} strokeWidth={1.5} className="transition-transform duration-300 group-hover:-translate-x-1" />
          <span className="font-sans uppercase text-[11px] tracking-[0.2em] hidden sm:inline">കഥകളിലേക്ക്</span>
        </Link>

        {/* Story Title & Reading Status in center */}
        <div 
          className={`pointer-events-auto hidden md:flex items-center gap-3 px-4 py-1.5 rounded-full bg-surface/80 backdrop-blur-md border border-border/60 transition-all duration-500 ${
            showNavTitle ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
        >
          <span className="font-serif text-sm text-primary-text/90 font-medium">{storyTitle}</span>
          <span className="w-1 h-1 rounded-full bg-accent"></span>
          <span className="font-sans text-[11px] tracking-wider text-secondary-text">
            {Math.round(scrollProgress)}%
          </span>
        </div>

        {/* Reading Controls on right */}
        <div className="pointer-events-auto flex items-center gap-2">
          {/* Font Size Adjuster Button */}
          <button
            onClick={cycleFontSize}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-surface/80 backdrop-blur-md border border-border/70 text-secondary-text hover:text-primary-text hover:border-accent/60 transition-all duration-300 text-xs shadow-lg cursor-pointer"
            title={`Font size: ${fontSizeLevel === 0 ? 'Normal' : fontSizeLevel === 1 ? 'Comfortable' : 'Large'}`}
            aria-label="Toggle reading font size"
          >
            <Type size={14} strokeWidth={1.5} />
            <span className="text-[10px] font-sans font-medium uppercase tracking-wider">
              {fontSizeLevel === 0 ? 'A' : fontSizeLevel === 1 ? 'A+' : 'A++'}
            </span>
          </button>

          {/* Scroll to Top Button (appears after scrolling) */}
          {showNavTitle && (
            <button
              onClick={scrollToTop}
              className="inline-flex items-center justify-center p-2 rounded-full bg-surface/80 backdrop-blur-md border border-border/70 text-secondary-text hover:text-primary-text hover:border-accent/60 transition-all duration-300 shadow-lg cursor-pointer animate-[fade-in-up_0.3s_ease-out]"
              title="Scroll to top"
              aria-label="Scroll to top"
            >
              <ChevronUp size={16} strokeWidth={1.5} />
            </button>
          )}
        </div>
      </nav>

      {/* Story Content with responsive scalable typography container */}
      <div className={`transition-all duration-300 ${fontSizeScaleClass}`}>
        {children}
      </div>
    </main>
  );
}
