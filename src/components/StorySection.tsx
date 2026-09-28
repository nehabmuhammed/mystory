import { stories } from '../data/stories';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function StorySection() {
  const featuredStory = stories[0];

  return (
    <section id="stories" className="relative min-h-screen w-full flex items-center justify-center py-32 overflow-hidden">
      {/* Massive Background Image element with parallax/slow pan */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={featuredStory.coverImage} 
          alt={featuredStory.englishTitle || featuredStory.title}
          fill
          className="object-cover opacity-20 md:opacity-30 animate-[slow-pan_40s_ease-in-out_infinite_alternate]"
          sizes="100vw"
          priority
        />
        {/* Gradients to blend into the background */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16 md:gap-32">
        {/* Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start gap-10">
          <div className="flex items-center gap-4 text-[10px] tracking-[0.4em] text-accent font-medium">
            <span>FEATURED</span>
            <span className="w-12 h-px bg-accent/50"></span>
            <span>{featuredStory.genre}</span>
          </div>
          
          <div className="flex flex-col gap-4 group/title cursor-default">
            <h2 className="font-serif text-6xl md:text-8xl lg:text-[140px] text-primary-text leading-[1] drop-shadow-2xl transition-all duration-1000 group-hover/title:text-accent group-hover/title:translate-x-4">
              {featuredStory.title}
            </h2>
            {featuredStory.englishTitle && (
              <h3 className="text-sm md:text-lg tracking-[0.5em] text-primary-text/70 uppercase ml-1 md:ml-3 transition-transform duration-1000 group-hover/title:translate-x-4">
                {featuredStory.englishTitle}
              </h3>
            )}
          </div>

          <p className="font-serif text-xl md:text-3xl text-primary-text/90 italic leading-relaxed max-w-lg border-l-2 border-accent/50 pl-6 drop-shadow-lg">
            {featuredStory.description}
          </p>

          <div className="flex items-center gap-8 mt-8">
            <Link href={`/stories/${featuredStory.slug}`} className="group flex items-center gap-4 text-xs tracking-[0.3em] text-background bg-primary-text px-8 py-4 hover:bg-accent hover:text-white transition-all duration-500">
              <span>READ STORY</span>
              <ArrowRight size={16} strokeWidth={1.5} className="transition-transform duration-500 group-hover:translate-x-3" />
            </Link>
            <span className="text-xs tracking-widest text-primary-text/60">
              {featuredStory.readingTime}
            </span>
          </div>
        </div>

        {/* Foreground Image floating */}
        <div className="w-full md:w-1/2 relative aspect-[3/4] md:aspect-[4/5] shadow-2xl overflow-hidden group border border-border/30">
          <div className="absolute inset-0 bg-accent/20 z-10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          <Image 
            src={featuredStory.coverImage} 
            alt={featuredStory.englishTitle || featuredStory.title}
            fill
            className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105 grayscale-[40%] group-hover:grayscale-0"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
