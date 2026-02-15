import { Header } from './components/marketing/Header';
import { Footer } from './components/marketing/Footer';
import { HeroSection } from './components/marketing/sections/HeroSection';
import { AboutSection } from './components/marketing/sections/AboutSection';
import { ProductsSection } from './components/marketing/sections/ProductsSection';
import { WhyChooseUsSection } from './components/marketing/sections/WhyChooseUsSection';
import { ContactSection } from './components/marketing/sections/ContactSection';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <WhyChooseUsSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
