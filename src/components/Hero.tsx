import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-packaging.jpg';

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Packaging materials"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-brand-dark/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            SOLVENA
          </h1>
          <p className="text-xl md:text-2xl text-brand-cream mb-8 leading-relaxed">
            Maišelių, plėvelių, etikečių, įvairių tvirtinimo medžiagų ir kitų pakavimo medžiagų tiekimo įmonė
          </p>
          <p className="text-lg text-brand-cream/90 mb-12 max-w-2xl">
            Esame komanda, siekianti būti patikimiausiu partneriu savo klientams. Užtikriname aukščiausios kokybės pakavimo sprendimus jūsų verslui.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              className="bg-brand-gold hover:bg-brand-gold/90 text-primary-foreground font-semibold px-8 py-4 text-lg group"
              onClick={() => scrollToSection('about')}
            >
              Sužinoti daugiau
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-brand-cream text-brand-cream hover:bg-brand-cream hover:text-brand-dark font-semibold px-8 py-4 text-lg"
              onClick={() => scrollToSection('contact')}
            >
              Susisiekti
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-brand-cream rounded-full flex justify-center">
          <div className="w-1 h-3 bg-brand-cream rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};