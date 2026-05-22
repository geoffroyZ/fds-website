import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FAQ | FDS - Full Digital Solution',
  description: 'Questions fréquentes sur nos services de développement web et solutions digitales.',
  keywords: 'FAQ, questions fréquentes, développement web, services digitaux',
  openGraph: {
    title: 'FAQ | FDS - Full Digital Solution',
    description: 'Questions fréquentes sur nos services.',
    type: 'website',
  },
};

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'Quels sont vos délais de livraison ?',
    answer: 'Les délais varient selon la complexité du projet. Pour un site vitrine, comptez environ 2 à 3 semaines. Pour une application web complexe, cela peut prendre 1 à 3 mois. Nous vous fournissons un calendrier détaillé lors de la proposition.',
  },
  {
    question: 'Proposez-vous des forfaits de maintenance ?',
    answer: 'Oui, nous proposons des contrats de maintenance adaptés à vos besoins. Cela inclut les mises à jour de sécurité, les modifications mineures et le support technique. Contactez-nous pour obtenir un devis personnalisé.',
  },
  {
    question: 'Quels technologies utilisez-vous ?',
    answer: 'Nous utilisons les technologies les plus modernes et performantes : React, Next.js, TypeScript, Node.js, Python, et bases de données SQL et NoSQL. Nous choisissons la stack technologique la plus adaptée à votre projet.',
  },
  {
    question: 'Puis-je modifier mon site après livraison ?',
    answer: 'Absolument ! Nous vous fournissons un accès complet à votre site et vous formons à son utilisation. Vous pouvez modifier le contenu, les images et le texte vous-même via notre interface admin intuitive.',
  },
  {
    question: 'Proposez-vous des solutions e-commerce ?',
    answer: 'Oui, nous développons des boutiques en ligne sur mesure avec des fonctionnalités complètes : gestion des produits, paiements sécurisés, inventaire, livraison, et tableau de bord administrateur.',
  },
  {
    question: 'Comment se passe la collaboration ?',
    answer: 'Nous commençons par une réunion de découverte pour comprendre vos besoins. Ensuite, nous vous présentons un cahier des charges détaillé. Pendant le développement, nous vous tenons régulièrement informé de l\'avancement et accueillons vos feedback.',
  },
  {
    question: 'Quels sont vos moyens de paiement ?',
    answer: 'Nous acceptons les virements bancaires, les paiements Mobile Money (Orange, Moov) et les espèces. Le paiement s\'effectue généralement en plusieurs étapes : 50% à la commande, 50% à la livraison.',
  },
  {
    question: 'Offrez-vous un support après-vente ?',
    answer: 'Oui, tous nos projets incluent 30 jours de support gratuit après la mise en ligne. Nous proposons également des contrats de maintenance pour un support continu.',
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6 animate-fade-in">
              Questions Fréquentes
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 animate-fade-in-delay">
              Trouvez rapidement les réponses à vos questions sur nos services.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="space-y-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="backdrop-blur-xl bg-white/60 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer p-6">
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {item.question}
                  </h3>
                  <span className="ml-4 flex-shrink-0 text-blue-600 group-open:rotate-180 transition-transform duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </details>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="backdrop-blur-xl bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Vous n'avez pas trouvé votre réponse ?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              N'hésitez pas à nous contacter directement. Notre équipe est disponible pour répondre à toutes vos questions.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Nous contacter
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

