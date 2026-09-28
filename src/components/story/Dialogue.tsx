export default function Dialogue({ speaker, children }: { speaker: string, children: React.ReactNode }) {
  return (
    <div className="w-full flex flex-col justify-center items-center text-center px-4 md:px-6 py-3.5 md:py-5">
      <div className="max-w-2xl w-full flex flex-col items-center">
        <div className="inline-flex items-center gap-2 mb-1.5">
          <span className="w-1 h-1 rounded-full bg-accent/80"></span>
          <span className="font-serif text-xs md:text-sm text-accent tracking-wide font-medium">
            {speaker}
          </span>
          <span className="w-1 h-1 rounded-full bg-accent/80"></span>
        </div>
        <div className="font-serif text-[17px] sm:text-[19px] md:text-[20px] lg:text-[21px] text-primary-text leading-[2] md:leading-[2.2] tracking-normal drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)] font-normal">
          {children}
        </div>
      </div>
    </div>
  );
}
