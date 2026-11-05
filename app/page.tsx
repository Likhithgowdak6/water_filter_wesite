import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import IntroFilter from './components/IntroFilter';
import Benefits from './components/Benefits';
import HowToInstall from './components/HowToInstall';
import Purchase from './components/Purchase';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProblemSection />
      <IntroFilter />
      <Benefits />
      <HowToInstall />
      <Purchase />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}

