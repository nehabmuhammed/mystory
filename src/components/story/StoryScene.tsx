import Image from 'next/image';

interface StorySceneProps {
  children: React.ReactNode;
  backgroundImage: string;
}

export default function StoryScene({ children, backgroundImage }: StorySceneProps) {
  return (
    <section className="relative w-full bg-background min-h-screen">
      {/* Sticky background pinned while scrolling through this scene */}
      <div className="sticky top-0 w-full h-screen -mb-[100vh] overflow-hidden pointer-events-none z-0">
        <Image 
          src={backgroundImage} 
          alt="Scene background"
          fill
          className="object-cover opacity-50 md:opacity-60 brightness-[1.05] transition-opacity duration-1000"
          sizes="100vw"
          priority
        />
        {/* Cinematic gradients: top, center, bottom falloff */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/40 to-background/90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_50%,_var(--color-background)_100%)] opacity-80"></div>
      </div>

      {/* Narrative content layer */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-4 md:px-6 pt-24 pb-28 md:pt-32 md:pb-36 flex flex-col items-center">
        {children}
      </div>
    </section>
  );
}
