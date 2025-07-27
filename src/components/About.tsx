import { Card, CardContent } from '@/components/ui/card';
import { Package, Truck, Shield, Clock } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Apie mus
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Solvena</strong> – maišelių, plėvelių, etikečių, įvairių tvirtinimo medžiagų ir kitų pakavimo medžiagų tiekimo įmonė.
              </p>
              <p>
                Esame komanda, siekianti būti patikimiausiu partneriu savo klientams. Mūsų tikslas – tapti patikimiausiu tiekėju, o misija – savo veikla gerinti gyvenimo kokybę sau ir visai su bendrove susijusiai aplinkai.
              </p>
              <p>
                Mūsų veiklą grindžiame trimis pagrindinėmis vertybėmis: atsakomybe, šeimininko mąstymu ir pagarba kitiems. Šie principai padeda mums kurti ilgalaikius santykius su klientais ir užtikrinti aukščiausią paslaugų kokybę.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <Card className="border-0 shadow-soft hover:shadow-elegant transition-all duration-300 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-6 h-6 text-brand-gold" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Platus asortimentas</h3>
                <p className="text-sm text-muted-foreground">
                  Maišeliai, plėvelės, etiketės ir kitos pakavimo medžiagos
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft hover:shadow-elegant transition-all duration-300 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-6 h-6 text-brand-gold" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Greitas pristatymas</h3>
                <p className="text-sm text-muted-foreground">
                  Operatyvus užsakymų vykdymas ir pristatymas
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft hover:shadow-elegant transition-all duration-300 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-brand-gold" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Aukšta kokybė</h3>
                <p className="text-sm text-muted-foreground">
                  Tik patikimi tiekėjai ir sertifikuotos medžiagos
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft hover:shadow-elegant transition-all duration-300 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-brand-gold" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Patikimumas</h3>
                <p className="text-sm text-muted-foreground">
                  Ilgalaikiai partnerystės santykiai su klientais
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};