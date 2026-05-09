import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Coverage from "./components/Coverage";
import Socials from "./components/Socials";
import EndorseSection from "./components/EndorseSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Coverage />
        <Socials />
        <EndorseSection />
      </main>
      <Footer />
    </>
  );
}
