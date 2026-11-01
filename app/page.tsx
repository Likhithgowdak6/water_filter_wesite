import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import IntroFilter from './components/IntroFilter';
import Benefits from './components/Benefits';
import ProductDetail from './components/ProductDetail';
import HowToInstall from './components/HowToInstall';
import BrandHighlights from './components/BrandHighlights';
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
      <ProductDetail />
      <HowToInstall />
      <BrandHighlights />
      <Purchase />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}

