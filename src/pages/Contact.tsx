import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message envoyé !",
      description: "Merci pour votre message. Nous vous répondrons dans les plus brefs délais.",
    });

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleWhatsApp = () => {
    const message = `Bonjour Caroline, je vous contact depuis votre site web. 

Nom: ${formData.name || '[À renseigner]'}
Email: ${formData.email || '[À renseigner]'}

Message: ${formData.message || 'Je souhaite avoir plus d\'informations sur vos créations.'}`;
    
    const whatsappUrl = `https://wa.me/22586322800?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-soft">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Contactez{' '}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Caroline Shop
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Nous sommes là pour répondre à toutes vos questions et vous accompagner 
            dans la création de vos pièces artisanales uniques.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 shadow-craft-lg">
            <h2 className="text-2xl font-bold mb-6">Envoyez-nous un Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-input focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Adresse email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-input focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300"
                  placeholder="votre.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-input focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Décrivez votre projet ou posez vos questions..."
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button type="submit" variant="hero" className="flex-1">
                  <Send className="h-4 w-4 mr-2" />
                  Envoyer le Message
                </Button>
                <Button type="button" onClick={handleWhatsApp} variant="craft" className="flex-1">
                  Envoyer via WhatsApp
                </Button>
              </div>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-6 shadow-craft">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Téléphone</h3>
                  <p className="text-muted-foreground mb-3">
                    Appelez-nous directement pour discuter de votre projet
                  </p>
                  <a 
                    href="tel:+22586322800" 
                    className="text-primary font-semibold hover:text-primary/80 transition-colors"
                  >
                    +225 05 86 32 28 00
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-craft">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground mb-3">
                    Envoyez-nous vos questions par email
                  </p>
                  <a 
                    href="mailto:soro.caroline04@gmail.com" 
                    className="text-primary font-semibold hover:text-primary/80 transition-colors"
                  >
                    soro.caroline04@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-craft">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Localisation</h3>
                  <p className="text-muted-foreground mb-3">
                    Notre atelier artisanal se trouve à Bouaké
                  </p>
                  <p className="text-primary font-semibold">
                    Bouaké, Côte d'Ivoire
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-craft">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Horaires</h3>
                  <p className="text-muted-foreground mb-3">
                    Nous sommes disponibles pour vous répondre
                  </p>
                  <div className="space-y-1 text-sm">
                    <p><span className="font-medium">Lun - Ven:</span> 8h00 - 18h00</p>
                    <p><span className="font-medium">Samedi:</span> 9h00 - 16h00</p>
                    <p><span className="font-medium">Dimanche:</span> Sur rendez-vous</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-hero text-primary-foreground shadow-craft-lg">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Discutez Directement avec Caroline</h2>
              <p className="text-primary-foreground/90 mb-8 text-lg">
                Pour une réponse rapide, contactez-nous directement via WhatsApp
              </p>
              <Button
                onClick={() => window.open('https://wa.me/22586322800?text=Bonjour, je viens du site Caroline Shop et je souhaite avoir plus d\'informations.', '_blank')}
                variant="secondary"
                size="xl"
                className="bg-white/20 text-primary-foreground hover:bg-white/30 border-white/30"
              >
                <Phone className="h-5 w-5 mr-2" />
                Ouvrir WhatsApp
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6">Questions Fréquentes</h3>
          <p className="text-muted-foreground mb-8">
            Consultez notre FAQ pour trouver rapidement les réponses aux questions les plus courantes.
          </p>
          <a
            href="/faq"
            className="inline-flex items-center justify-center h-11 rounded-md px-8 border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-all duration-300"
          >
            Voir la FAQ
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;