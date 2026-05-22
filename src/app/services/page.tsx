import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Services | FDS - Full Digital Solution',
  description: 'Découvrez nos services : développement web, applications mobiles, e-commerce, SEO et consulting digital au Burkina Faso.',
  keywords: 'services, développement web, application mobile, e-commerce, SEO, consulting, Burkina Faso',
  openGraph: {
    title: 'Services | FDS - Full Digital Solution',
    description: 'Nos services de développement web et solutions digitales.',
    type: 'website',
  },
};

interface Service {
  _id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

const services: Service[] = [
  {
    _id: '1',
    title: 'Développement Web',
    description: 'Création de sites web sur mesure, performants et responsives.',
    icon: '💻',
    features: [
      'Sites vitrines professionnels',
      'Applications web complexes',
      'Portails d\'entreprise',
      'Sites e-commerce',
      'APIs et intégrations',
    ],
  },
  {
    _id: '2',
    title: 'Applications Mobiles',
    description: 'Développement d\'applications iOS et Android natives ou hybrides.',
    icon: '📱',
    features: [
      'Applications natives (iOS/Android)',
      'Applications hybrides (React Native)',
      'Progressive Web Apps (PWA)',
      'Backend et bases de données',
      'Publication sur stores',
    ],
  },
  {
    _id: '3',
    title: 'E-commerce',
    description: 'Boutiques en ligne clés en main avec gestion complète.',
    icon: '🛒',
    features: [
      'Catalogue produits',
      'Paiements sécurisés',
      'Gestion des commandes',
      'Inventory management',
      'Shipping integrations',
    ],
  },
  {
    _id: '4',
    title: 'SEO & Marketing Digital',
    description: 'Optimisation pour les moteurs de recherche et stratégie digitale.',
    icon: '📈',
    features: [
      'Audit SEO complet',
      'Référencement naturel',
      'Content marketing',
      'Analytics et rapports',
      'Social media management',
    ],
  },
  {
    _id: '5',
    title: 'Consulting Digital',
    description: 'Conseil et accompagnement pour votre transformation digitale.',
    icon: '🎯',
    features: [
      'Audit de maturité digitale',
      'Stratégie digitale',
      'Formation équipes',
      'Architecture technique',
      'Choix technologiques',
    ],
  },
  {
    _id: '6',
    title: 'Maintenance & Support',
    description: 'Support technique et maintenance pour vos applications.',
    icon: '🔧',
    features: [
      'Maintenance corrective',
      'Mises à jour sécurité',
      'Support technique',
      'Hébergement cloud',
      'Monitoring 24/7',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6 animate-fade-in">
              Nos Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 animate-fade-in-delay">
              Des solutions digitales complètes pour propulser votre entreprise vers le succès.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service._id}
              className="group backdrop-blur-xl bg-white/60 rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-full h-40 rounded-xl overflow-hidden mb-6 group-hover:scale-105 transition-transform">
                <Image
                  src={`/images/services/${service._id}.svg`}
                  alt={service.title}
                  width={400}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-24">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Notre Méthode de Travail
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Découverte', desc: 'Nous analysons vos besoins et objectifs' },
              { step: '02', title: 'Conception', desc: 'Création du design et architecture' },
              { step: '03', title: 'Développement', desc: 'Implémentation avec les meilleures technologies' },
              { step: '04', title: 'Livraison', desc: 'Mise en ligne et support continu' },
            ].map((item, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <div className="backdrop-blur-xl bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Prêt à démarrer votre projet ?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Parlons de votre projet et trouvons ensemble la meilleure solution pour votre entreprise.
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
                href="/portfolio"
                className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
              >
                Voir nos réalisations
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

