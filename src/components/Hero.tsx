export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/10 via-background to-background pointer-events-none"></div>

      <div className="flex flex-col items-center gap-8 max-w-4xl mx-auto mt-20 relative z-10 animate-[fade-in-up_1.5s_ease-out]">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-primary-text tracking-widest leading-none drop-shadow-2xl hover:text-accent transition-colors duration-1000">
          പണ്ട് പണ്ട് ഒരിടത്ത്…
        </h1>
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-accent/50 to-transparent"></div>
        <h2 className="text-xl md:text-2xl font-serif text-secondary-text/80 tracking-widest uppercase">
          Malayalam Cinematic Stories
        </h2>
        <p className="text-base md:text-lg text-secondary-text font-light tracking-wide max-w-lg mx-auto leading-loose mt-4 opacity-80">
          Step into a curated gallery of fictional memories, told through the language of cinema and words.
        </p>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 opacity-60 hover:opacity-100 transition-opacity duration-700 cursor-pointer">
        <span className="text-[10px] tracking-[0.5em] text-accent animate-pulse">DISCOVER</span>
        <div className="w-px h-16 bg-gradient-to-b from-accent to-transparent"></div>
      </div>
    </section>
  );
}
