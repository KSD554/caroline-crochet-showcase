import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Aminata K.",
      location: "Abidjan",
      rating: 5,
      text: "J'ai commandé un bikini au crochet pour mes vacances et je suis absolument ravie ! La qualité est exceptionnelle et le design unique. Caroline a su créer exactement ce que je voulais.",
      product: "Bikini personnalisé"
    },
    {
      name: "Fatou D.",
      location: "Bouaké", 
      rating: 5,
      text: "Les sacs de Caroline sont magnifiques ! J'en ai acheté plusieurs pour offrir à mes amies. Le travail artisanal est remarquable et les couleurs éclatantes.",
      product: "Sacs artisanaux"
    },
    {
      name: "Marie-Claire S.",
      location: "Yamoussoukro",
      rating: 5,
      text: "Service impeccable et créations de haute qualité. Mon bonnet au crochet est devenu ma pièce préférée. Je recommande Caroline Shop les yeux fermés !",
      product: "Bonnet décoratif"
    },
    {
      name: "Aïcha T.",
      location: "Korhogo",
      rating: 5,
      text: "Caroline a créé une robe sur mesure pour mon mariage traditionnel. Le résultat dépasse mes espérances ! Un vrai savoir-faire artisanal.",
      product: "Robe sur mesure"
    },
    {
      name: "Bintou M.",
      location: "San-Pédro",
      rating: 5,
      text: "Livraison rapide et produit conforme à mes attentes. Les accessoires pour cheveux sont délicats et très bien finis. Merci Caroline !",
      product: "Accessoires cheveux"
    },
    {
      name: "Kady B.",
      location: "Daloa",
      rating: 5,
      text: "J'ai découvert Caroline Shop par une amie et je ne suis pas déçue. Mes articles de décoration au crochet embellissent parfaitement mon salon.",
      product: "Décoration maison"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-soft">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Témoignages{' '}
            <span className="text-gradient-hero">
              Clients
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Découvrez les avis de nos clientes satisfaites qui ont choisi Caroline Shop 
            pour leurs créations artisanales au crochet.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">200+</div>
              <p className="text-muted-foreground">Clientes Satisfaites</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Créations Réalisées</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">4.9/5</div>
              <p className="text-muted-foreground">Note Moyenne</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">3 ans</div>
              <p className="text-muted-foreground">D'Expérience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="p-6 shadow-craft hover:shadow-craft-lg transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 text-primary/20">
                  <Quote className="h-8 w-8" />
                </div>
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Product */}
                <div className="mb-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-soft text-primary">
                    {testimonial.product}
                  </span>
                </div>

                {/* Customer Info */}
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-gradient-hero text-primary-foreground font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-muted-foreground text-xs">{testimonial.location}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Rejoignez Nos Clientes Satisfaites</h2>
          <p className="text-muted-foreground mb-8">
            Commandez dès aujourd'hui votre création personnalisée et découvrez 
            pourquoi nos clientes nous font confiance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center h-12 rounded-lg px-10 text-base bg-gradient-hero text-primary-foreground hover:opacity-90 shadow-craft-lg hover:shadow-elegant transform hover:scale-105 transition-all duration-300"
            >
              Commander Maintenant
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center h-12 rounded-lg px-10 text-base border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              Voir Nos Créations
            </a>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="font-semibold mb-2">Satisfaction Garantie</h3>
              <p className="text-muted-foreground text-sm">
                Reprise ou modification gratuite sous 7 jours
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="font-semibold mb-2">Qualité Artisanale</h3>
              <p className="text-muted-foreground text-sm">
                Créations 100% faites main avec des matériaux premium
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="font-semibold mb-2">Livraison Fiable</h3>
              <p className="text-muted-foreground text-sm">
                Livraison dans toute la Côte d'Ivoire avec suivi
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;