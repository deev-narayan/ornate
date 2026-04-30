import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StorySection from "@/components/StorySection";
import VenueShowcase from "@/components/VenueShowcase";
import StatsSection from "@/components/StatsSection";
import EnquiryCTA from "@/components/EnquiryCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-midnight text-ivory overflow-x-hidden selection:bg-gold selection:text-midnight">
      <Header />
      <Hero />
      <StorySection />
      <StatsSection />
      <VenueShowcase />
      <EnquiryCTA />
      <Footer />
    </main>
  );
}
