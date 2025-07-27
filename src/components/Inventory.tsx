import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, BarChart3, Settings, Users, ArrowRight } from 'lucide-react';

export const Inventory = () => {
  return (
    <section id="inventory" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Atsargų valdymas ir sertifikavimas
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Profesionalūs atsargų valdymo sprendimai, užtikrinantys efektyvų jūsų verslo veikimą ir atitiktį aukščiausiems kokybės standartams
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-foreground mb-12 text-center">
            Sertifikavimo ir kokybės užtikrinimo procesai
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-soft hover:shadow-elegant transition-all duration-300 bg-card/80 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-brand-gold" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  Kokybės kontrolė
                </h4>
                <p className="text-muted-foreground">
                  Visos prekės tikrinamos pagal tarptautinius kokybės standartus
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft hover:shadow-elegant transition-all duration-300 bg-card/80 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-brand-gold" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  Atsargų analizė
                </h4>
                <p className="text-muted-foreground">
                  Nuolatinis atsargų būklės stebėjimas ir optimizavimas
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft hover:shadow-elegant transition-all duration-300 bg-card/80 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-brand-gold" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  Procesų automatizavimas
                </h4>
                <p className="text-muted-foreground">
                  Automatizuoti sprendimai efektyvesniam valdymui
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft hover:shadow-elegant transition-all duration-300 bg-card/80 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-brand-gold" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  Klientų aptarnavimas
                </h4>
                <p className="text-muted-foreground">
                  Profesionalus palaikymas visais veiklos etapais
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-brand-gold/10 to-brand-cream/30 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-6">
            Norite sužinoti daugiau apie mūsų sistemas?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Susisiekite su mumis ir gaukite išsamų konsultavimą apie tai, kaip mūsų atsargų valdymo sprendimai gali pagerinti jūsų verslo efektyvumą.
          </p>
          <Button 
            size="lg"
            className="bg-brand-gold hover:bg-brand-gold/90 text-primary-foreground font-semibold px-8 py-4"
          >
            Konsultacija
          </Button>
        </div>
      </div>
    </section>
  );
};