export default function StoryText({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex flex-col justify-center items-center text-center px-4 md:px-6 py-3 md:py-4">
      <div className="max-w-2xl w-full">
        <p className="font-serif text-[17px] sm:text-[19px] md:text-[20px] lg:text-[21px] text-primary-text leading-[2] md:leading-[2.2] tracking-normal drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)] font-normal">
          {children}
        </p>
      </div>
    </div>
  );
}
