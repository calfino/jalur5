import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Coverage from "./components/Coverage";
import Socials from "./components/Socials";
import PricingSection from "./components/PricingSection";
import EndorseSection from "./components/EndorseSection";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Coverage />
        <Socials />
        <PricingSection />
        <EndorseSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
