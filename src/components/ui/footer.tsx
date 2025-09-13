import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">C</span>
              </div>
              <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                Caroline Shop
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Créations artisanales au crochet depuis Bouaké. Chaque pièce est unique, 
              faite main avec passion et savoir-faire traditionnel.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Nos Créations
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-muted-foreground hover:text-primary transition-colors">
                  Témoignages
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Nos Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Bikinis & Maillots</li>
              <li>Bonnets & Chapeaux</li>
              <li>Sacs Artisanaux</li>
              <li>Vêtements Sur Mesure</li>
              <li>Articles Décoratifs</li>
              <li>Commandes Personnalisées</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a 
                  href="tel:+22586322800" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +225 05 86 32 28 00
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a 
                  href="mailto:soro.caroline04@gmail.com" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  soro.caroline04@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span className="text-muted-foreground">
                  Bouaké<br />
                  Côte d'Ivoire
                </span>
              </div>
              <div className="pt-2">
                <a
                  href="https://wa.me/22586322800"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors"
                >
                  <span className="text-lg">📱</span>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-8 border-border" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <span>© 2024 Caroline Shop. Fait avec</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>à Bouaké, Côte d'Ivoire</span>
          </div>
          
          <div className="flex items-center gap-4">
            <Link 
              to="/mentions-legales" 
              className="hover:text-primary transition-colors"
            >
              Mentions Légales
            </Link>
            <span>|</span>
            <Link 
              to="/politique-confidentialite" 
              className="hover:text-primary transition-colors"
            >
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;