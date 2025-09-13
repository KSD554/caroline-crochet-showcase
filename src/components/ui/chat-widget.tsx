import React, { useState, useEffect } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { Button } from './button';
import { Card } from './card';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Bonjour ! Bienvenue chez Caroline Shop 👋 Comment puis-je vous aider aujourd'hui ?",
      isBot: true,
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  // Show welcome message after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const quickResponses = [
    "Quels sont vos produits disponibles ?",
    "Informations sur les prix",
    "Délais de livraison",
    "Commande personnalisée",
  ];

  const handleSendMessage = (text: string) => {
    const newMessage = {
      id: messages.length + 1,
      text,
      isBot: false,
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(text);
      setMessages(prev => [...prev, {
        id: prev.length + 1,
        text: botResponse,
        isBot: true,
      }]);
    }, 1000);
  };

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('produit') || message.includes('article')) {
      return "Nous proposons des bikinis au crochet, des bonnets, des sacs artisanaux, des vêtements féminins et des accessoires de décoration. Tous faits main avec amour ! ✨";
    } else if (message.includes('prix') || message.includes('coût')) {
      return "Nos prix varient selon les articles. Pour un devis personnalisé, n'hésitez pas à me contacter directement au 0586322800 ou via WhatsApp ! 💰";
    } else if (message.includes('livraison') || message.includes('délai')) {
      return "Nous livrons dans toute la Côte d'Ivoire. Les délais varient selon la localisation. Contactez-nous pour plus de détails ! 🚚";
    } else if (message.includes('personnalis') || message.includes('sur mesure')) {
      return "Oui, nous réalisons des commandes personnalisées ! Décrivez-moi votre projet et nous le réaliserons ensemble 🎨";
    } else {
      return "Merci pour votre message ! Pour une réponse plus précise, contactez-moi directement au 0586322800 ou soro.caroline04@gmail.com 😊";
    }
  };

  if (showWelcome && !isOpen) {
    return (
      <>
        <div className="fixed bottom-24 right-6 z-40">
          <Card className="p-4 max-w-xs shadow-craft-lg animate-gentle-bounce">
            <div className="flex justify-between items-start">
              <p className="text-sm text-foreground">
                Bonjour ! 👋 Puis-je vous aider ?
              </p>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowWelcome(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <Button
              onClick={() => setIsOpen(true)}
              variant="default"
              size="sm"
              className="mt-2 w-full"
            >
              Discuter
            </Button>
          </Card>
        </div>
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 left-6 z-50 bg-accent hover:bg-accent/90 text-accent-foreground p-4 rounded-full shadow-craft-lg"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      </>
    );
  }

  return (
    <>
      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-50 w-80 h-96 flex flex-col shadow-craft-lg">
          <div className="flex items-center justify-between p-4 border-b border-border bg-gradient-hero text-primary-foreground rounded-t-lg">
            <h3 className="font-semibold">Chat avec Caroline</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-primary-foreground hover:bg-primary-foreground/20"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-xs p-3 rounded-lg text-sm ${
                    message.isBot
                      ? 'bg-muted text-foreground'
                      : 'bg-primary text-primary-foreground'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-border">
            <div className="flex flex-wrap gap-2 mb-3">
              {quickResponses.map((response, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => handleSendMessage(response)}
                  className="text-xs"
                >
                  {response}
                </Button>
              ))}
            </div>
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Tapez votre message..."
                className="flex-1 px-3 py-2 border border-border rounded-md bg-input text-sm"
                onKeyPress={(e) => e.key === 'Enter' && inputValue.trim() && handleSendMessage(inputValue)}
              />
              <Button
                onClick={() => inputValue.trim() && handleSendMessage(inputValue)}
                size="sm"
                disabled={!inputValue.trim()}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}

      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-50 bg-accent hover:bg-accent/90 text-accent-foreground p-4 rounded-full shadow-craft-lg"
      >
        <MessageSquare className="h-6 w-6" />
      </Button>
    </>
  );
};

export default ChatWidget;