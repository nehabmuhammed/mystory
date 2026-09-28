import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <article className="flex-grow pt-40 pb-32 px-6 md:px-12 max-w-4xl mx-auto w-full flex flex-col gap-32">
        {/* Intro */}
        <section className="animate-[fade-in-up_1.5s_ease-out]">
          <h1 className="text-secondary-text tracking-[0.2em] text-xs md:text-sm font-sans mb-12 uppercase">
            എന്നെക്കുറിച്ച്?
          </h1>
          <div className="font-serif text-2xl md:text-4xl text-primary-text leading-[1.8] flex flex-col gap-10">
            <p>കഥകൾ എഴുതാൻ ഇഷ്ടമാണ്.</p>
            <p className="text-secondary-text text-xl md:text-3xl">
              വലിയ എഴുത്തുകാരനാണെന്ന് പറയാനൊന്നും ഇപ്പോൾ ഉദ്ദേശിക്കുന്നില്ല.
            </p>
            <p className="text-xl md:text-3xl text-primary-text/90">
              ചിലപ്പോൾ മനസ്സിൽ വരുന്ന ഒരു ആശയം,<br />
              ഒരു രംഗം,<br />
              ഒരു സംഭാഷണം,<br />
              അല്ലെങ്കിൽ ഉറങ്ങാൻ പോകുമ്പോൾ പെട്ടെന്ന് തോന്നുന്ന ഒരു കഥ...
            </p>
            <p className="text-xl md:text-3xl text-primary-text/80">
              അങ്ങനെ എന്തെങ്കിലും തോന്നിയാൽ എഴുതിവെക്കും.
            </p>
            <p className="text-xl md:text-3xl text-secondary-text">
              ചിലത് പൂർത്തിയാകും.<br />
              ചിലത് പാതിയിൽ നിൽക്കും.<br />
              ചിലത് വീണ്ടും വായിക്കുമ്പോൾ തന്നെ കളയണമെന്ന് തോന്നും.
            </p>
            <p className="text-2xl md:text-4xl text-primary-text mt-8">
              പക്ഷേ ചില കഥകൾ മാത്രം...<br />
              വീണ്ടും വീണ്ടും ഓർമ്മ വരും.
            </p>
            <p className="text-accent text-2xl md:text-4xl">
              അവയാണ് ഇവിടെ എത്തുന്നത്.
            </p>
          </div>
        </section>

        {/* Image Section */}
        <section className="relative w-full aspect-[3/4] md:aspect-[16/9] max-h-[70vh] overflow-hidden opacity-90 hover:opacity-100 transition-opacity duration-1000 border border-border/20">
          <Image 
            src="/about/desk.jpg" 
            alt="Quiet room with a desk"
            fill
            className="object-cover grayscale-[20%]"
            sizes="(max-width: 768px) 100vw, 80vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        </section>

        {/* Why this website exists */}
        <section className="font-serif text-xl md:text-3xl text-primary-text leading-[1.8] flex flex-col gap-10">
          <p>ഈ വെബ്സൈറ്റ് വലിയൊരു ലക്ഷ്യത്തോടെ തുടങ്ങിയതല്ല.</p>
          <p className="text-secondary-text">
            എഴുതിയ കഥകൾ എവിടെയെങ്കിലും സൂക്ഷിക്കണം എന്ന് തോന്നി.
          </p>
          <p>
            അങ്ങനെ ഒരു ഫോൾഡറിൽ കിടക്കുന്നതിന് പകരം,<br />
            ആരെങ്കിലും വായിച്ചാൽ എങ്ങനെയിരിക്കും എന്ന് തോന്നി.
          </p>
          <div className="mt-8">
            <p className="text-primary-text">ഇഷ്ടപ്പെട്ടാൽ വായിക്കാം.</p>
            <p className="text-secondary-text mt-4">
              ഇഷ്ടപ്പെട്ടില്ലെങ്കിൽ...<br />
              അത് ആരോടും പറയേണ്ട ആവശ്യമില്ല.
            </p>
          </div>
        </section>

        {/* Invitation */}
        <section className="font-serif text-xl md:text-3xl text-primary-text leading-[1.8] flex flex-col gap-10 pt-16 border-t border-border/20">
          <p>
            നിങ്ങൾക്ക് കഥകൾ വായിക്കാൻ ഇഷ്ടമാണെങ്കിൽ,<br />
            ഇവിടെ കുറച്ച് സമയം ചെലവഴിക്കാം.
          </p>
          <p className="text-secondary-text">
            ഇവിടെ കാണുന്നത് വലിയ സാഹിത്യ സൃഷ്ടികളൊന്നുമല്ല.
          </p>
          <p>
            ഞാൻ എഴുതിയ കുറച്ച് കഥകളാണ്.
          </p>
          <p className="text-primary-text/80">
            ചിലത് സങ്കൽപ്പിച്ചവ.<br />
            ചിലത് ഓർത്തെടുത്തവ.<br />
            <span className="text-accent">ചിലത് എവിടെ നിന്നാണ് വന്നതെന്ന് എനിക്ക് തന്നെ അറിയില്ല.</span>
          </p>
        </section>

        {/* Final CTA */}
        <section className="flex flex-col items-center text-center gap-12 mt-16 pb-32">
          <p className="font-serif text-2xl md:text-4xl text-primary-text">
            ഇത്രയും വായിച്ച സ്ഥിതിക്ക്,<br />
            ഒരു കഥ കൂടി വായിച്ചിട്ട് പോകാം.
          </p>
          
          <p className="font-serif text-secondary-text text-xl">
            കഥയിലേക്ക് വരൂ.
          </p>

          <Link href="/#stories" className="group mt-8 flex items-center gap-6 text-sm md:text-base font-serif text-background bg-primary-text px-12 py-6 hover:bg-accent hover:text-white transition-all duration-700">
            <span className="tracking-wider">കഥകളിലേക്ക്</span>
            <ArrowRight size={24} strokeWidth={1.5} className="transition-transform duration-500 group-hover:translate-x-3" />
          </Link>
        </section>
      </article>

      <Footer />
    </main>
  );
}
