import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, User, Building } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-brand-cream/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Kontaktai
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Susisiekite su mumis ir sužinokite, kaip galime padėti jūsų verslui
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-0 shadow-soft bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Kontaktinė informacija</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-brand-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Telefonas</p>
                    <a href="tel:+37068781366" className="text-brand-gold hover:underline text-lg">
                      +370 687 81366
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-brand-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Adresas</p>
                    <p className="text-muted-foreground">
                      Dubijos g. 30 A<br />
                      LT-77208 Šiauliai
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-brand-gold/20 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-brand-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Direktorius</p>
                    <p className="text-muted-foreground">Saulius Kaluina</p>
                    <p className="text-sm text-muted-foreground">Kalbos: lietuvių, anglų</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Company Details */}
            <Card className="border-0 shadow-soft bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">UAB „Solvena"</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Įmonės kodas:</span>
                  <span className="font-mono">302846151</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">PVM kodas:</span>
                  <span className="font-mono">LT100007090017</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Bankas:</span>
                  <span>AB Artea bankas</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-0 shadow-elegant bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Susisiekite su mumis</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Vardas Pavardė</Label>
                    <Input id="name" placeholder="Jūsų vardas ir pavardė" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Įmonė</Label>
                    <Input id="company" placeholder="Įmonės pavadinimas" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefonas</Label>
                  <Input id="phone" type="tel" placeholder="+370 XXX XXXXX" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Žinutė *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Parašykite savo žinutę..." 
                    rows={5}
                    required 
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-brand-gold hover:bg-brand-gold/90 text-primary-foreground font-semibold py-3"
                >
                  Siųsti žinutę
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};