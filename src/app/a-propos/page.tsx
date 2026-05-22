import { client, isSanityConfigured } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';

// Default content when Sanity is not configured
const defaultAbout = {
  title: 'À propos de FDS',
  subtitle: 'Votre partenaire digital au Burkina Faso',
  overview: 'FDS (Full Digital Solution) est une entreprise burkinabè spécialisée dans le développement de solutions digitales sur mesure. Nous accompagnons les entreprises et organisations dans leur transformation digitale avec des services adaptés à leurs besoins.',
  mission: 'Démocratiser l\'accès aux technologies digitales pour les entreprises africaines et contribuer au développement économique du Burkina Faso através de l\'innovation numérique.',
  values: [
    'Innovation',
    'Excellence',
    'Proximité',
    'Fiabilité'
  ],
  approachTitle: 'Notre approche',
  approachDescription: 'Nous adoptons une approche collaborative pour comprendre vos besoins spécifiques et proposer des solutions personnalisées qui répondent à vos objectifs commerciaux.',
  founderName: '',
  founderRole: '',
  founderImage: null,
};

export default async function AboutPage() {
  // Check if Sanity is configured
  const sanityReady = isSanityConfigured() && client;
  
  let about = defaultAbout;

  if (sanityReady) {
    try {
      const data = await client!.fetch(`*[_type == "about"][0] {
        title,
        subtitle,
        overview,
        mission,
        values,
        approachTitle,
        approachDescription,
        founderName,
        founderRole,
        founderImage
      }`);
      
      if (data) {
        about = { ...defaultAbout, ...data };
      }
    } catch (error) {
      console.warn('Erreur lors du chargement des données Sanity:', error);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        
        {/* Hero Background Image */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/about/about-hero.svg"
            alt="À propos de FDS"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6 animate-fade-in">
              {about.title}
            </h1>
            {about.subtitle && (
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 animate-fade-in-delay">
                {about.subtitle}
              </p>
            )}
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Team Section - Moved up */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Notre Équipe
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Abdoulaye ZERBO', role: 'Fondateur & Directeur Technique', initials: 'AZ' },
              { name: 'Marie SOME', role: 'Directrice Artistique', initials: 'MS' },
              { name: 'Jean B. OUEDRAOGO', role: 'Développeur Full Stack', initials: 'JO' },
              { name: 'Fatou SAWADOGO', role: 'Chef de Projet', initials: 'FS' }
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-lg hover:shadow-2xl transition-all group hover:scale-105 animate-fade-in-up text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-white text-2xl font-bold">{member.initials}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-blue-600 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview */}
        {about.overview && (
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="backdrop-blur-xl bg-white/60 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                  {about.overview}
                </p>
              </div>
              <div className="relative h-64 lg:h-96 rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/images/about/tech-office.svg"
                  alt="Espace de travail FDS"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        )}

        {/* Mission */}
        {about.mission && (
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                Notre mission
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>
            <div className="backdrop-blur-xl bg-white/60 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500">
              <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
                {about.mission}
              </p>
            </div>
          </div>
        )}

        {/* Values */}
        {about.values && about.values.length > 0 && (
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                Nos valeurs
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {about.values.map((value: string, index: number) => (
                <div
                  key={index}
                  className="backdrop-blur-xl bg-white/60 rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">✦</span>
                  </div>
                  <p className="text-gray-700 font-medium">{value}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Approach */}
        {(about.approachTitle || about.approachDescription) && (
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                {about.approachTitle || 'Notre approche'}
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>
            <div className="backdrop-blur-xl bg-white/60 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
              <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
                {about.approachDescription}
              </p>
            </div>
          </div>
        )}

        {/* Founder */}
        {(about.founderName || about.founderRole) && (
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                Le fondateur
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>
            <div className="backdrop-blur-xl bg-white/60 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {about.founderImage && (
                  <div className="relative">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-4 ring-white/50 shadow-2xl">
                      <Image
                        src={urlFor(about.founderImage).width(160).height(160).url()}
                        alt={about.founderName || 'Fondateur'}
                        width={160}
                        height={160}
                        className="object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">👋</span>
                    </div>
                  </div>
                )}
                <div className="text-center md:text-left">
                  {about.founderName && (
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                      {about.founderName}
                    </h3>
                  )}
                  {about.founderRole && (
                    <p className="text-lg text-gray-600 font-medium">
                      {about.founderRole}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center">
          <div className="backdrop-blur-xl bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Prêt à collaborer ?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Découvrez nos services et commençons ensemble votre projet digital.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Contactez-nous
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
