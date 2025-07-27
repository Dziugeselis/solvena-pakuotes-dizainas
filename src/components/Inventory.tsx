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

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Užsakymų valdymo sistema
            </h3>
            <div className="space-y-4 mb-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Moderni automatizuota sistema, skirta efektyviam užsakymų valdymui ir atsargų kontrolei. Sistema prieinama tik prisijungusiems vartotojams ir užtikrina sklandų procesų valdymą.
              </p>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-brand-gold flex-shrink-0" />
                <span className="text-muted-foreground">Automatizuotas užsakymų apdorojimas</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-brand-gold flex-shrink-0" />
                <span className="text-muted-foreground">Realaus laiko atsargų stebėjimas</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-brand-gold flex-shrink-0" />
                <span className="text-muted-foreground">Detalūs analitikos pranešimai</span>
              </div>
            </div>
            <Button className="bg-brand-gold hover:bg-brand-gold/90 text-primary-foreground group">
              Prisijungti prie sistemos
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <Card className="border-0 shadow-elegant bg-brand-gold/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-brand-dark flex items-center">
                <Settings className="w-6 h-6 mr-2" />
                Sistema „orders.solvena.lt"
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Patogus ir intuityvus sprendimas jūsų užsakymų valdymui. Prieinamas 24/7 su visomis reikalingomis funkcijomis efektyviam darbui.
              </p>
              <div className="bg-background/50 rounded-lg p-4">
                <p className="text-sm text-muted-foreground mb-2">Prieiga:</p>
                <p className="font-semibold text-foreground">Tik registruotiems vartotojams</p>
              </div>
            </CardContent>
          </Card>
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