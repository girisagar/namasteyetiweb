import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Featured from "@/components/Featured";
import Catering from "@/components/Catering";
import Story from "@/components/Story";
import Reviews from "@/components/Reviews";
import Rewards from "@/components/Rewards";
import Location from "@/components/Location";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Header />

      <main id="top">
        <Hero />
        <Featured />
        <Services />
        <Catering />
        <Story />
        <Reviews />
        <Rewards />
        <Location />
        <FinalCTA />
      </main>

      <Footer />
      <MobileBar />

      {/* Adds scroll-reveal animations to the same elements as the original. */}
      <ScrollReveal />
    </>
  );
}
