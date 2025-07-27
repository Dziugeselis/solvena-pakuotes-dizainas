import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, TrendingUp, DollarSign, Clock, Zap, Target } from 'lucide-react';

export const VendorManagement = () => {
  return (
    <section id="vendor-management" className="py-20 bg-gradient-to-b from-brand-cream/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Tiekėjo Valdomų Atsargų Sistema
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            TVAS (Vendor Management Inventory) – inovatyvi paslauga, užtikrinanti, kad reikiamos atsargos ar prekės būtų reikiamoje vietoje reikiamu metu
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">Kada ši paslauga aktuali?</h3>
            <div className="space-y-4">
              {[
                "Atsargų trūkumas sandėlyje sutrikdė gamyklos darbą",
                "Apyvartinių lėšų stoka dėl atsargų pertekliaus",
                "Sandėlyje laikoma daug 'užšaldytų' prekių",
                "Norima padidinti pardavimus su mažesnėmis atsargomis",
                "Tiekėjai neužtikrina pastovaus prekių kiekio"
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-brand-gold flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <Card className="border-0 shadow-elegant bg-brand-gold/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-brand-dark">Veikimo principas</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Klientas gauna tai, ko jam reikia, tokiais kiekiais, kurie reikalingi užtikrinti nepertraukiamus gamybos ar pardavimų procesus.
              </p>
              <Button className="bg-brand-gold hover:bg-brand-gold/90 text-primary-foreground">
                Sužinoti daugiau
              </Button>
            </CardContent>
          </Card>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-foreground mb-12 text-center">
            NAUDA įmonėms įsidiegus TVAS
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-soft hover:shadow-elegant transition-all duration-300 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-brand-gold" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  Laiko taupymas
                </h4>
                <p className="text-muted-foreground">
                  Vadybininkai gali susikoncentruoti į svarbius projektus dėl sumažėjusių laiko sąnaudų
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft hover:shadow-elegant transition-all duration-300 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center mb-4">
                  <DollarSign className="w-6 h-6 text-brand-gold" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  Finansų optimizavimas
                </h4>
                <p className="text-muted-foreground">
                  Atlaisvinamos apyvartinės lėšos (nuo 10% iki 60%), sumažėja atsargos (paprastai 50%)
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft hover:shadow-elegant transition-all duration-300 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-brand-gold" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  Efektyvumas
                </h4>
                <p className="text-muted-foreground">
                  Apie 2 kartus pagerėja atsargų apyvartumas ir sumažėja morališkai susidėvėjusių atsargų kiekiai
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft hover:shadow-elegant transition-all duration-300 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-brand-gold" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  Stabilios išlaidos
                </h4>
                <p className="text-muted-foreground">
                  Veiklos išlaidos išlieka panašios, tačiau efektyvumas ženkliai auga
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft hover:shadow-elegant transition-all duration-300 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-brand-gold" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  Geresni santykiai
                </h4>
                <p className="text-muted-foreground">
                  Ryškiai pagerėja santykiai su tiekėjais ir klientais dėl laiku įvykdytų užsakymų
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft hover:shadow-elegant transition-all duration-300 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-brand-gold" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  Patikimumas
                </h4>
                <p className="text-muted-foreground">
                  Užtikrinamas nepertraukiamas gamybos ir pardavimų procesų vykdymas
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};