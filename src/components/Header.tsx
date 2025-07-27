import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b shadow-sm">
      {/* Top contact bar */}
      <div className="bg-brand-gold text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-center md:justify-end space-x-6 text-sm">
          <a href="tel:+37068781366" className="flex items-center space-x-1 hover:opacity-80 transition-opacity">
            <Phone className="w-4 h-4" />
            <span>+370 687 81366</span>
          </a>
          <a href="mailto:info@solvena.lt" className="flex items-center space-x-1 hover:opacity-80 transition-opacity">
            <Mail className="w-4 h-4" />
            <span>info@solvena.lt</span>
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-brand-gold">
            SOLVENA
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('mission')}
              className="text-foreground hover:text-brand-gold transition-colors font-medium"
            >
              Misija
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-brand-gold transition-colors font-medium"
            >
              Apie mus
            </button>
            <button
              onClick={() => scrollToSection('vendor-management')}
              className="text-foreground hover:text-brand-gold transition-colors font-medium"
            >
              Tiekėjų valdymas
            </button>
            <button
              onClick={() => scrollToSection('inventory')}
              className="text-foreground hover:text-brand-gold transition-colors font-medium"
            >
              Atsargų valdymas
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-brand-gold transition-colors font-medium"
            >
              Kontaktai
            </button>
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('mission')}
                className="text-left text-foreground hover:text-brand-gold transition-colors font-medium"
              >
                Misija
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-foreground hover:text-brand-gold transition-colors font-medium"
              >
                Apie mus
              </button>
              <button
                onClick={() => scrollToSection('vendor-management')}
                className="text-left text-foreground hover:text-brand-gold transition-colors font-medium"
              >
                Tiekėjų valdymas
              </button>
              <button
                onClick={() => scrollToSection('inventory')}
                className="text-left text-foreground hover:text-brand-gold transition-colors font-medium"
              >
                Atsargų valdymas
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-foreground hover:text-brand-gold transition-colors font-medium"
              >
                Kontaktai
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};