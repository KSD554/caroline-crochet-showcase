import React from 'react';
import { Plus } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const FAQ = () => {
  const faqData = [
    {
      question: "Quels types de produits proposez-vous ?",
      answer: "Nous proposons une gamme complète d'articles au crochet : bikinis et maillots de bain, bonnets et chapeaux, sacs artisanaux, vêtements féminins sur mesure, et articles de décoration pour la maison. Tous nos produits sont fabriqués à la main avec des matériaux de qualité."
    },
    {
      question: "Comment passer commande ?",
      answer: "Vous pouvez nous contacter par téléphone au 0586322800, par email à soro.caroline04@gmail.com, ou via WhatsApp. Nous discuterons ensemble de vos besoins, des couleurs, des tailles et nous vous fournirons un devis personnalisé."
    },
    {
      question: "Quels sont vos délais de livraison ?",
      answer: "Les délais varient selon la complexité de l'article et votre localisation. Pour une pièce simple : 3-5 jours. Pour des créations plus élaborées : 1-2 semaines. Nous livrons dans toute la Côte d'Ivoire depuis notre atelier de Bouaké."
    },
    {
      question: "Proposez-vous des créations personnalisées ?",
      answer: "Absolument ! C'est notre spécialité. Vous pouvez choisir les couleurs, les motifs, les dimensions selon vos préférences. Nous créons des pièces uniques qui correspondent exactement à vos goûts et à votre morphologie."
    },
    {
      question: "Comment sont déterminés vos prix ?",
      answer: "Nos prix dépendent de plusieurs facteurs : la complexité du modèle, les matériaux utilisés, la taille de l'article et le temps de réalisation. Nous vous fournirons un devis détaillé avant de commencer la création."
    },
    {
      question: "Quelles sont les tailles disponibles ?",
      answer: "Nous réalisons des créations sur mesure dans toutes les tailles. Pour les bikinis et vêtements, nous prenons vos mensurations exactes. Pour les accessoires comme les sacs et bonnets, nous adaptons selon vos préférences."
    },
    {
      question: "Quels modes de paiement acceptez-vous ?",
      answer: "Nous acceptons les paiements en espèces lors de la livraison, les virements bancaires, et les paiements via Mobile Money (Orange Money, MTN Mobile Money). Un acompte de 50% est demandé à la commande."
    },
    {
      question: "Offrez-vous une garantie sur vos produits ?",
      answer: "Oui, nous garantissons la qualité de nos créations. Si vous n'êtes pas satisfait(e) de votre commande, nous nous engageons à la reprendre ou la modifier dans les 7 jours suivant la livraison."
    },
    {
      question: "Puis-je voir des exemples de vos réalisations ?",
      answer: "Bien sûr ! Vous pouvez consulter notre galerie sur cette page web, ou nous contacter pour voir plus d'exemples. Nous serons ravis de vous montrer nos dernières créations."
    },
    {
      question: "Livrez-vous en dehors de la Côte d'Ivoire ?",
      answer: "Actuellement, nous livrons principalement en Côte d'Ivoire. Pour les livraisons internationales, contactez-nous directement pour discuter des modalités et des frais de port."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-soft">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Questions{' '}
            <span className="text-gradient-hero">
              Fréquentes
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Trouvez rapidement les réponses à vos questions sur nos créations artisanales, 
            nos services et nos conditions de commande.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 shadow-craft-lg">
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border rounded-lg overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 hover:bg-muted/50 text-left [&[data-state=open]]:bg-primary-soft/20">
                    <span className="font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Vous ne trouvez pas votre réponse ?</h2>
          <p className="text-muted-foreground mb-8">
            Notre équipe est là pour vous aider. N'hésitez pas à nous contacter 
            directement pour toute question spécifique.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Nous Contacter
            </Button>
            <Button variant="outline" size="lg">
              Appeler Maintenant
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Contact Info */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <Card className="p-6 shadow-craft">
              <h3 className="font-semibold mb-2">Téléphone</h3>
              <p className="text-muted-foreground">0586322800</p>
            </Card>
            <Card className="p-6 shadow-craft">
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">soro.caroline04@gmail.com</p>
            </Card>
            <Card className="p-6 shadow-craft">
              <h3 className="font-semibold mb-2">Localisation</h3>
              <p className="text-muted-foreground">Bouaké, Côte d'Ivoire</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;