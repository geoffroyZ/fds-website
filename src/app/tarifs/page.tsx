import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tarifs | FDS - Full Digital Solution',
  description: 'Découvrez nos tarifs pour la création de sites web, applications mobiles et solutions digitales sur mesure.',
  keywords: 'tarifs, prix, développement web, application mobile, création site internet',
  openGraph: {
    title: 'Tarifs | FDS - Full Digital Solution',
    description: 'Nos tarifs pour vos projets digitaux.',
    type: 'website',
  },
};

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Site Vitrine',
    price: '250 000 - 500 000',
    description: 'Parfait pour les petites entreprises et professions libérales',
    features: [
      'Design responsive moderne',
      'Jusqu\'à 5 pages',
      'Formulaire de contact',
      'Optimisation SEO de base',
      'Hébergement 1 an',
      'Certificat SSL',
      'Support 30 jours',
    ],
    cta: 'Demander un devis',
  },
  {
    name: 'Site E-commerce',
    price: '500 000 - 1 500 000',
    description: 'Boutique en ligne complète pour vendre vos produits',
    features: [
      'Design responsive personnalisé',
      'Gestion illimitée de produits',
      'Paiements sécurisés',
      'Gestion des commandes',
      'Tableau de bord admin',
      'Intégration logistique',
      'Formation incluse',
      'Support 3 mois',
    ],
    popular: true,
    cta: 'Demander un devis',
  },
  {
    name: 'Application Web',
    price: 'Sur devis',
    description: 'Solution sur mesure pour vos besoins spécifiques',
    features: [
      'Analyse de vos besoins',
      'Architecture personnalisée',
      'Base de données sécurisée',
      'API REST/GraphQL',
      'Dashboard admin',
      'Formation complète',
      'Maintenance annuelle',
      'Support dédié',
    ],
    cta: 'Contactez-nous',
  },
];

const addOnServices = [
  { name: 'Maintenance annuelle', price: '150 000 CFA/an' },
  { name: 'Référencement SEO avancé', price: '200 000 CFA' },
  { name: 'Copywriting professionnel', price: '75 000 CFA' },
  { name: 'Photographie produit', price: '50 000 CFA/jour' },
  { name: 'Formation admin', price: '100 000 CFA' },
  { name: 'Intégration API externe', price: '100 000 - 300 000 CFA' },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6 animate-fade-in">
              Nos Tarifs
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 animate-fade-in-delay">
              Des tarifs transparents et adaptés à votre budget. Paiement en plusieurs fois possible.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`relative backdrop-blur-xl rounded-3xl shadow-xl border transition-all duration-500 animate-fade-in-up ${
                tier.popular
                  ? 'bg-white border-blue-500 scale-105 z-10'
                  : 'bg-white/60 border-white/20 hover:shadow-2xl'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Populaire
                  </span>
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{tier.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {tier.price}
                  </span>
                  {tier.price !== 'Sur devis' && <span className="text-gray-500"> CFA</span>}
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block w-full text-center py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:scale-105'
                      : 'bg-gray-100 text-gray-800 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Add-on Services */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Services Supplémentaires
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOnServices.map((service, index) => (
              <div
                key={index}
                className="backdrop-blur-xl bg-white/60 rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <h4 className="font-semibold text-gray-800 mb-2">{service.name}</h4>
                <p className="text-blue-600 font-bold">{service.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Link */}
        <div className="mt-16 text-center">
          <div className="backdrop-blur-xl bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Besoin d'un devis personnalisé ?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Chaque projet est unique.Contactez-nous pour obtenir un devis gratuit et adapté à vos besoins spécifiques.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Demander un devis
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/faq"
                className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
              >
                Voir la FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

