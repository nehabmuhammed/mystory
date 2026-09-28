import Image from 'next/image';
import Link from 'next/link';
import { Story } from '../data/stories';
import { ArrowRight } from 'lucide-react';

interface StoryCardProps {
  story: Story;
  index: number;
}

export default function StoryCard({ story, index }: StoryCardProps) {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center group`}>
      {/* Image Container */}
      <div className="w-full md:w-1/2 relative overflow-hidden aspect-[4/5] md:aspect-[3/4]">
        <Image 
          src={story.coverImage} 
          alt={story.englishTitle || story.title}
          fill
          className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 group-hover:contrast-[1.1]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-background/10 group-hover:bg-transparent transition-colors duration-1000"></div>
      </div>

      {/* Text Container */}
      <div className="w-full md:w-1/2 flex flex-col justify-center gap-8 px-4 md:px-0">
        <div className="flex items-center gap-4 text-[10px] tracking-[0.2em] text-secondary-text">
          <span>0{index + 1}</span>
          <span className="w-8 h-px bg-border"></span>
          <span>{story.genre}</span>
        </div>
        
        <div className="flex flex-col gap-3">
          <h2 className="font-serif text-3xl md:text-5xl text-primary-text leading-tight group-hover:text-accent transition-colors duration-700">
            {story.title}
          </h2>
          {story.englishTitle && (
            <h3 className="text-xs md:text-sm tracking-[0.2em] text-secondary-text">
              {story.englishTitle}
            </h3>
          )}
        </div>

        <div className="text-xs tracking-widest text-secondary-text border border-border px-3 py-1 w-max">
          {story.readingTime}
        </div>

        <p className="font-serif text-lg md:text-xl text-secondary-text italic leading-relaxed max-w-md">
          {story.description}
        </p>

        <Link href={`/stories/${story.slug}`} className="mt-8 flex items-center gap-4 text-xs tracking-[0.2em] text-primary-text group/btn w-max">
          <span>READ STORY</span>
          <ArrowRight size={16} strokeWidth={1} className="transition-transform duration-500 group-hover/btn:translate-x-2" />
        </Link>
      </div>
    </div>
  );
}
