import { Card, CardContent } from '@/components/ui/card';
import { Target, Heart, Users } from 'lucide-react';

export const Mission = () => {
  return (
    <section id="mission" className="py-20 bg-gradient-to-b from-background to-brand-cream/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Mūsų misija ir vertybės
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Solvena – patikimi partneriai, kuriančios vertę kiekvienam klientui
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center border-0 shadow-soft hover:shadow-elegant transition-all duration-300 bg-card/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-brand-gold" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Tikslas</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Tapti patikimiausiu tiekėju savo klientams
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-soft hover:shadow-elegant transition-all duration-300 bg-card/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-brand-gold" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Misija</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Savo veikla geriname gyvenimo kokybę sau ir visai su bendrove susijusiai aplinkai
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-soft hover:shadow-elegant transition-all duration-300 bg-card/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-brand-gold" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Vertybės</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Atsakomybė, šeimininko mąstymas ir pagarba kitiems
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-brand-gold/10 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-brand-dark">Atsakomybė</h4>
              <p className="text-muted-foreground">
                Duotas žodis už auksą brangesnis
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-brand-dark">Šeimininko mąstymas</h4>
              <p className="text-muted-foreground">
                Nesiūlyk kitiems to, ko pats nedarytum
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-brand-dark">Pagarba</h4>
              <p className="text-muted-foreground">
                Elkis su kitais, kaip pats norėtum, kad su tavimi elgtųsi
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};