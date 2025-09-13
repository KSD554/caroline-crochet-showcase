import React from 'react';
import { Shirt, Package, Heart, Sparkles } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Import product images
import productBikiniDaisy from '@/assets/product-bikini-daisy.jpg';
import productBonnetDecoratif from '@/assets/product-bonnet-decoratif.jpg';
import productEnsembleRougeRose from '@/assets/product-ensemble-rouge-rose.jpg';
import productBikiniRoseDaisy from '@/assets/product-bikini-rose-daisy.jpg';
import productSacsColores from '@/assets/product-sacs-colores.jpg';
import productBikiniNoirPlage from '@/assets/product-bikini-noir-plage.jpg';
import productSacsGranny from '@/assets/product-sacs-granny.jpg';
import productSacFleursBleu from '@/assets/product-sac-fleurs-bleu.jpg';
import productBonnetRoseAccessoires from '@/assets/product-bonnet-rose-accessoires.jpg';

const Services = () => {
  const productCategories = [
    {
      title: 'Bikinis & Maillots au Crochet',
      description: 'Maillots de bain élégants et confortables, ornés de motifs floraux délicats',
      icon: Heart,
      images: [productBikiniDaisy, productBikiniRoseDaisy, productBikiniNoirPlage],
    },
    {
      title: 'Bonnets & Accessoires',
      description: 'Chapeaux colorés et accessoires assortis pour compléter votre style',
      icon: Sparkles,
      images: [productBonnetDecoratif, productBonnetRoseAccessoires],
    },
    {
      title: 'Sacs Artisanaux',
      description: 'Sacs et cabas pratiques aux couleurs vives, parfaits pour toutes occasions',
      icon: Package,
      images: [productSacsColores, productSacsGranny, productSacFleursBleu],
    },
    {
      title: 'Prêt-à-Porter Féminin',
      description: 'Vêtements sur mesure alliant confort et élégance artisanale',
      icon: Shirt,
      images: [productEnsembleRougeRose],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-soft">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Nos{' '}
            <span className="text-gradient-hero">
              Créations Artisanales
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Découvrez notre collection unique d'articles au crochet, alliant tradition 
            artisanale et design contemporain pour sublimer votre garde-robe.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-16">
            {productCategories.map((category, index) => (
              <div key={category.title} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-cols-2' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                      <category.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h2 className="text-3xl font-bold">{category.title}</h2>
                  </div>
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground">Création 100% artisanale</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground">Personnalisation possible</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground">Matériaux de qualité</span>
                    </div>
                  </div>
                  <Button variant="hero" size="lg">
                    Découvrir la Collection
                  </Button>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="grid grid-cols-2 gap-4">
                    {category.images.map((image, imgIndex) => (
                      <Card 
                        key={imgIndex} 
                        className={`overflow-hidden shadow-craft hover:shadow-craft-lg transition-all duration-300 ${
                          imgIndex === 0 && category.images.length > 2 ? 'col-span-2' : ''
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${category.title} - Création ${imgIndex + 1}`}
                          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Nos Services</h2>
            <p className="text-xl text-muted-foreground">
              Un accompagnement personnalisé pour chaque création
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 shadow-craft hover:shadow-craft-lg transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4">Commandes Personnalisées</h3>
              <p className="text-muted-foreground mb-6">
                Créons ensemble la pièce de vos rêves. Choisissez les couleurs, 
                les motifs et les dimensions selon vos préférences.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>Consultation gratuite</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>Devis personnalisé</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>Suivi de création</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 shadow-craft hover:shadow-craft-lg transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4">Articles de Décoration</h3>
              <p className="text-muted-foreground mb-6">
                Embellissez votre intérieur avec nos créations décoratives 
                uniques : coussins, napperons, et objets d'art au crochet.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>Pièces décoratives</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>Accessoires maison</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>Cadeaux personnalisés</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à Commander ?</h2>
          <p className="text-muted-foreground mb-8">
            Contactez-nous pour discuter de votre projet ou pour en savoir plus 
            sur nos créations disponibles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              Commander Maintenant
            </Button>
            <Button variant="outline" size="xl">
              Demander un Devis
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;