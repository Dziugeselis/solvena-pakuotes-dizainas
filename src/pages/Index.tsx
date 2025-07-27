import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Mission } from '@/components/Mission';
import { About } from '@/components/About';
import { VendorManagement } from '@/components/VendorManagement';
import { Inventory } from '@/components/Inventory';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Mission />
      <About />
      <VendorManagement />
      <Inventory />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
