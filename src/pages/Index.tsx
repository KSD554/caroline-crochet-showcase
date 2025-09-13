import React from 'react';
import { ArrowRight, Star, Heart, Award, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

// Import product images
import productBikiniDaisy from '@/assets/product-bikini-daisy.jpg';
import productBonnetDecoratif from '@/assets/product-bonnet-decoratif.jpg';
import productSacsColores from '@/assets/product-sacs-colores.jpg';
import productBikiniNoirPlage from '@/assets/product-bikini-noir-plage.jpg';
import productSacsGranny from '@/assets/product-sacs-granny.jpg';
import productBonnetRoseAccessoires from '@/assets/product-bonnet-rose-accessoires.jpg';

const Index = () => {
  const featuredProducts = [
    {
      image: productBikiniNoirPlage,
      title: "Bikinis Élégants",
      description: "Maillots au crochet avec motifs uniques",
    },
    {
      image: productSacsColores,
      title: "Sacs Artisanaux",
      description: "Cabas colorés pour toutes occasions",
    },
    {
      image: productBonnetDecoratif,
      title: "Bonnets Décoratifs",
      description: "Chapeaux ornés de détails raffinés",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-soft">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Créations{' '}
                <span className="text-gradient-hero">
                  Artisanales
                </span>
                <br />
                au Crochet
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Découvrez nos créations uniques faites main à Bouaké : bikinis élégants, 
                sacs colorés, bonnets raffinés et vêtements sur mesure pour sublimer votre style.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="xl">
                  Découvrir nos Créations
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="xl">
                  Commande Personnalisée
                </Button>
              </div>
              
              {/* Trust indicators */}
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">200+ clientes satisfaites</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  ✓ Livraison en Côte d'Ivoire
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <Card className="overflow-hidden shadow-craft hover:shadow-craft-lg transition-all duration-300">
                    <img
                      src={productBikiniDaisy}
                      alt="Bikini au crochet avec motifs floraux"
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </Card>
                  <Card className="overflow-hidden shadow-craft hover:shadow-craft-lg transition-all duration-300">
                    <img
                      src={productSacsGranny}
                      alt="Sacs au crochet colorés"
                      className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </Card>
                </div>
                <div className="space-y-4 mt-8">
                  <Card className="overflow-hidden shadow-craft hover:shadow-craft-lg transition-all duration-300">
                    <img
                      src={productBonnetRoseAccessoires}
                      alt="Bonnet et accessoires au crochet"
                      className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </Card>
                  <Card className="overflow-hidden shadow-craft hover:shadow-craft-lg transition-all duration-300">
                    <img
                      src={productBikiniNoirPlage}
                      alt="Femme portant un bikini au crochet noir"
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </Card>
                </div>
              </div>
              
              {/* Floating element */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-hero rounded-full flex items-center justify-center shadow-craft-lg animate-float">
                <Heart className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nos Créations{' '}
              <span className="text-gradient-hero">
                Phares
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Chaque pièce est unique, créée avec passion et attention aux détails 
              dans notre atelier de Bouaké.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <Card 
                key={index}
                className="group overflow-hidden shadow-craft hover:shadow-craft-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <Button variant="outline" className="w-full">
                    En Savoir Plus
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pourquoi Choisir Caroline Shop ?
            </h2>
            <p className="text-xl text-muted-foreground">
              L'excellence artisanale au service de votre style unique
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 shadow-craft">
                <Heart className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fait Main</h3>
              <p className="text-muted-foreground">
                Chaque création est réalisée avec passion et savoir-faire artisanal traditionnel.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 shadow-craft">
                <Award className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Qualité Premium</h3>
              <p className="text-muted-foreground">
                Matériaux soigneusement sélectionnés pour des créations durables et élégantes.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 shadow-craft">
                <Package className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sur Mesure</h3>
              <p className="text-muted-foreground">
                Personnalisation complète selon vos goûts et vos mensurations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 shadow-craft">
                <Star className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-muted-foreground">
                3 ans d'expérience et plus de 200 clientes satisfaites nous font confiance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Ce Que Disent Nos Clientes
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 shadow-craft">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-foreground mb-4 italic">
                "Caroline a créé un bikini magnifique pour mes vacances. La qualité est 
                exceptionnelle et le design unique. Je recommande vivement !"
              </p>
              <p className="text-sm text-muted-foreground">- Aminata K., Abidjan</p>
            </Card>

            <Card className="p-6 shadow-craft">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-foreground mb-4 italic">
                "Service impeccable et créations de haute qualité. Mon bonnet au crochet 
                est devenu ma pièce préférée !"
              </p>
              <p className="text-sm text-muted-foreground">- Marie-Claire S., Yamoussoukro</p>
            </Card>
          </div>

          <div className="mt-8">
            <a
              href="/testimonials"
              className="inline-flex items-center justify-center h-11 rounded-md px-8 border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              Voir Tous les Témoignages
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-hero text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à Créer Votre Pièce Unique ?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de votre projet personnalisé. 
            Nous donnons vie à vos idées avec notre savoir-faire artisanal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="xl">
              Nous Contacter
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="bg-white/20 text-primary-foreground hover:bg-white/30 border-white/30"
            >
              Voir Nos Créations
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
