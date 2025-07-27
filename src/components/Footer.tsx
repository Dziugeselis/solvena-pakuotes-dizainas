import { Phone, Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-brand-dark text-brand-cream py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-brand-gold mb-4">SOLVENA</h3>
            <p className="text-brand-cream/80 mb-4 leading-relaxed">
              Maišelių, plėvelių, etikečių, įvairių tvirtinimo medžiagų ir kitų pakavimo medžiagų tiekimo įmonė.
            </p>
            <p className="text-brand-cream/60 text-sm">
              Patikimi partneriai jūsų verslui
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-brand-gold mb-4">Kontaktai</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-gold" />
                <a href="tel:+37068781366" className="text-brand-cream/80 hover:text-brand-gold transition-colors">
                  +370 687 81366
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-gold" />
                <a href="mailto:info@solvena.lt" className="text-brand-cream/80 hover:text-brand-gold transition-colors">
                  info@solvena.lt
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-gold mt-1" />
                <div className="text-brand-cream/80">
                  <p>Dubijos g. 30 A</p>
                  <p>LT-77208 Šiauliai</p>
                </div>
              </div>
            </div>
          </div>

          {/* Company Details */}
          <div>
            <h4 className="text-lg font-semibold text-brand-gold mb-4">Įmonės duomenys</h4>
            <div className="space-y-2 text-sm text-brand-cream/80">
              <p>UAB „Solvena"</p>
              <p>Įmonės kodas: 302846151</p>
              <p>PVM kodas: LT100007090017</p>
              <p>AB Artea bankas</p>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-cream/20 mt-8 pt-8 text-center">
          <p className="text-brand-cream/60 text-sm">
            © 2024 UAB „Solvena". Visos teisės saugomos.
          </p>
        </div>
      </div>
    </footer>
  );
};