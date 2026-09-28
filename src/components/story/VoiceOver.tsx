export default function VoiceOver({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex flex-col justify-center items-center text-center px-4 md:px-6 py-3.5 md:py-4.5">
      <div className="max-w-2xl w-full flex flex-col items-center">
        <div className="inline-flex items-center gap-2 mb-2 px-2.5 py-0.5 rounded-full border border-border/60 bg-surface/60 backdrop-blur-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-accent/80 animate-pulse"></span>
          <span className="text-[10px] md:text-xs tracking-[0.25em] font-sans text-secondary-text uppercase font-medium">
            JOEL (V.O.)
          </span>
        </div>
        <div className="font-serif text-[17px] sm:text-[19px] md:text-[20px] lg:text-[21px] text-primary-text/95 leading-[2] md:leading-[2.2] tracking-normal drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)] font-normal">
          {children}
        </div>
      </div>
    </div>
  );
}
