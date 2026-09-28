import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StorySection from "@/components/StorySection";
import AboutPreview from "@/components/AboutPreview";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <StorySection />
      <AboutPreview />
      <Footer />
    </main>
  );
}
