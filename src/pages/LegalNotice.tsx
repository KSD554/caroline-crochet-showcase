import React from 'react';
import { Card } from '@/components/ui/card';

const LegalNotice = () => {
  return (
    <div className="min-h-screen bg-gradient-soft py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Mentions{' '}
          <span className="bg-gradient-hero bg-clip-text text-transparent">
            Légales
          </span>
        </h1>

        <Card className="p-8 shadow-craft-lg space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">1. Informations générales</h2>
            <div className="space-y-3 text-muted-foreground">
              <p><strong>Nom de l'entreprise :</strong> Caroline Shop</p>
              <p><strong>Activité :</strong> Confection et vente d'articles et vêtements en laine et au crochet</p>
              <p><strong>Adresse :</strong> Bouaké, Côte d'Ivoire</p>
              <p><strong>Téléphone :</strong> +225 05 86 32 28 00</p>
              <p><strong>Email :</strong> soro.caroline04@gmail.com</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">2. Directeur de publication</h2>
            <p className="text-muted-foreground">
              Le directeur de la publication de ce site web est Caroline Soro, 
              propriétaire et créatrice de Caroline Shop.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">3. Hébergement du site</h2>
            <p className="text-muted-foreground">
              Ce site est hébergé par Lovable, plateforme de développement web.
              Pour plus d'informations sur l'hébergeur, consultez 
              <a href="https://lovable.dev" className="text-primary hover:underline ml-1">
                lovable.dev
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">4. Propriété intellectuelle</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>
                Tous les contenus présents sur ce site (textes, images, logos, créations) 
                sont la propriété exclusive de Caroline Shop, sauf mention contraire.
              </p>
              <p>
                Les créations artisanales présentées sont protégées par le droit d'auteur. 
                Toute reproduction, même partielle, est interdite sans autorisation écrite préalable.
              </p>
              <p>
                Les photographies des créations sont la propriété de Caroline Shop et 
                ne peuvent être utilisées sans permission.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">5. Conditions d'utilisation</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>
                L'utilisation de ce site implique l'acceptation pleine et entière 
                des conditions générales d'utilisation décrites ci-après.
              </p>
              <p>
                Caroline Shop se réserve le droit de modifier ces conditions à tout moment. 
                Il est donc conseillé de les consulter régulièrement.
              </p>
              <p>
                Ce site est accessible 24h/24, 7j/7, sauf cas de force majeure, 
                maintenance ou panne informatique.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">6. Responsabilité</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>
                Caroline Shop met tout en œuvre pour fournir des informations exactes 
                et mises à jour sur ce site web.
              </p>
              <p>
                Cependant, nous ne garantissons pas l'exactitude, la précision ou 
                l'exhaustivité des informations mises à disposition.
              </p>
              <p>
                Caroline Shop décline toute responsabilité pour les dommages directs 
                ou indirects résultant de l'utilisation de ce site.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">7. Protection des données personnelles</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>
                Les données personnelles collectées via les formulaires de contact 
                sont utilisées uniquement pour répondre à vos demandes.
              </p>
              <p>
                Conformément à la loi, vous disposez d'un droit d'accès, de modification 
                et de suppression de vos données personnelles.
              </p>
              <p>
                Pour exercer ces droits, contactez-nous à : soro.caroline04@gmail.com
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">8. Cookies</h2>
            <p className="text-muted-foreground">
              Ce site peut utiliser des cookies pour améliorer l'expérience utilisateur. 
              Vous pouvez configurer votre navigateur pour refuser les cookies, 
              mais cela peut affecter le fonctionnement du site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">9. Droit applicable</h2>
            <p className="text-muted-foreground">
              Les présentes mentions légales sont régies par le droit ivoirien. 
              Tout litige sera soumis aux tribunaux compétents de Côte d'Ivoire.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">10. Contact</h2>
            <div className="text-muted-foreground">
              <p className="mb-2">
                Pour toute question concernant ces mentions légales, 
                vous pouvez nous contacter :
              </p>
              <ul className="space-y-2">
                <li>• Par téléphone : +225 05 86 32 28 00</li>
                <li>• Par email : soro.caroline04@gmail.com</li>
                <li>• Par WhatsApp : <a href="https://wa.me/22586322800" className="text-primary hover:underline">wa.me/22586322800</a></li>
              </ul>
            </div>
          </section>

          <div className="text-center text-sm text-muted-foreground mt-8 pt-6 border-t border-border">
            <p>Dernière mise à jour : Septembre 2024</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LegalNotice;