import { client } from '@/sanity/lib/client';
import Image from 'next/image';

export default async function AboutPage() {
  const about = await client.fetch(`*[_type == "about"][0] {
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

  if (!about) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 animate-pulse"></div>
          <p className="text-gray-600">Page "À propos" non configurée.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview */}
        {about.overview && (
          <div className="mb-20">
            <div className="backdrop-blur-xl bg-white/60 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
                {about.overview}
              </p>
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
                        src={about.founderImage.asset.url + '?w=160&h=160&fit=crop'}
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
