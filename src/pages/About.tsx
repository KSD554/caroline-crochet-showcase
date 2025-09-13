import React from 'react';
import { Heart, Award, Users, Target } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-soft">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            À Propos de{' '}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Caroline Shop
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Une passion pour l'artisanat au crochet, transformée en une entreprise dédiée 
            à la création d'articles uniques et personnalisés pour femmes.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Notre Histoire</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Caroline Shop a vu le jour à Bouaké grâce à la passion de Caroline pour 
              l'art du crochet. Ce qui a commencé comme un hobby s'est transformé en 
              une véritable entreprise artisanale, créant des pièces uniques pour les 
              femmes qui apprécient l'authenticité et la qualité.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Chaque création est réalisée à la main avec amour et attention aux détails, 
              utilisant des techniques traditionnelles du crochet pour créer des articles 
              modernes et élégants.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Notre mission est de valoriser l'artisanat ivoirien tout en proposant 
              des produits contemporains qui correspondent aux goûts actuels.
            </p>
          </div>
          <div className="relative">
            <div className="bg-gradient-hero p-8 rounded-2xl shadow-craft-lg">
              <div className="bg-card/90 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="text-2xl font-semibold mb-4">Nos Valeurs</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Heart className="h-5 w-5 text-primary" />
                    <span>Passion pour l'artisanat</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-primary" />
                    <span>Qualité exceptionnelle</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-primary" />
                    <span>Service personnalisé</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Target className="h-5 w-5 text-primary" />
                    <span>Innovation créative</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Notre Mission</h2>
            <p className="text-xl text-muted-foreground">
              Créer des pièces artisanales exceptionnelles qui célèbrent la beauté 
              et l'élégance féminine.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center shadow-craft hover:shadow-craft-lg transition-all duration-300">
              <div className="w-16 h-16 bg-primary-soft rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Savoir-faire Artisanal</h3>
              <p className="text-muted-foreground">
                Perpétuer les techniques traditionnelles du crochet avec une 
                approche moderne et créative.
              </p>
            </Card>

            <Card className="p-6 text-center shadow-craft hover:shadow-craft-lg transition-all duration-300">
              <div className="w-16 h-16 bg-accent-soft rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Qualité Premium</h3>
              <p className="text-muted-foreground">
                Utiliser uniquement des matériaux de haute qualité pour 
                créer des pièces durables et élégantes.
              </p>
            </Card>

            <Card className="p-6 text-center shadow-craft hover:shadow-craft-lg transition-all duration-300">
              <div className="w-16 h-16 bg-primary-soft rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Service Personnalisé</h3>
              <p className="text-muted-foreground">
                Accompagner chaque cliente dans la création de pièces 
                sur mesure qui reflètent sa personnalité.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Découvrez Notre Univers</h2>
          <p className="text-muted-foreground mb-8">
            Explorez notre collection de créations artisanales et découvrez 
            comment nous pouvons créer quelque chose d'unique pour vous.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/services"
              className="inline-flex items-center justify-center h-11 rounded-md px-8 bg-gradient-hero text-primary-foreground hover:opacity-90 shadow-craft-lg hover:shadow-elegant transform hover:scale-105 transition-all duration-300"
            >
              Voir Nos Créations
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center h-11 rounded-md px-8 border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              Nous Contacter
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;