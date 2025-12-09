import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accueil | FDS - Full Digital Solution',
  description: 'Découvrez FDS - Full Digital Solution, votre partenaire pour des solutions digitales innovantes au Burkina Faso. Développement web, applications mobiles et consulting digital.',
  keywords: 'solutions digitales, développement web, applications mobiles, Burkina Faso, FDS',
  openGraph: {
    title: 'Accueil | FDS - Full Digital Solution',
    description: 'Découvrez FDS - Full Digital Solution, votre partenaire pour des solutions digitales innovantes au Burkina Faso.',
    type: 'website',
  },
};

export default async function Home() {
  const home = await client.fetch(`*[_type == "homePage"][0]`);
  const services = await client.fetch(`*[_type == "service"]`);
  const testimonials = await client.fetch(`*[_type == "testimonial" && featured == true] | order(_createdAt desc)`);

  if (!home) return <div className="p-6 animate-fade-in-up">Chargement...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 text-gray-800 flex flex-col">
      {/* Hero Section */}
      <header className="relative gradient-bg py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-5xl mx-auto px-4 text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 tracking-tight">
            {home.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed">
            {home.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-10 rounded-full transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Discutons de votre projet
            </Link>
            <Link
              href="/portfolio"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-4 px-10 rounded-full transition-all shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Voir nos réalisations
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16 px-4 max-w-6xl mx-auto flex-grow">
        {/* Description */}
        <div className="text-center mb-20 animate-fade-in-up">
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {home.description}
          </p>
        </div>

        {/* Services */}
        <section className="mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Nos Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service: any, index: number) => (
              <div
                key={service._id}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-lg hover:shadow-2xl transition-all group hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" style={{ backgroundColor: 'var(--fds-blue)' }}>
                  <span className="text-white text-2xl">✦</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        {testimonials && testimonials.length > 0 && (
          <section className="mb-24">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Ils nous font confiance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial: any, index: number) => (
                <div
                  key={testimonial._id}
                  className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-lg hover:shadow-2xl transition-all group hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < (testimonial.rating || 5) ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center">
                    {testimonial.image && (
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
                        <Image
                          src={testimonial.image.asset.url + '?w=48&h=48&fit=crop'}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <div className="font-semibold text-gray-800">{testimonial.name}</div>
                      {testimonial.role && testimonial.company && (
                        <div className="text-sm text-gray-600">
                          {testimonial.role} chez {testimonial.company}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Final CTA */}
        <div className="text-center gradient-bg p-12 rounded-3xl border border-white/20 shadow-xl animate-fade-in-up">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Prêt à digitaliser votre entreprise ?
          </h3>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Nous concevons des solutions sur mesure, adaptées à vos besoins métier et à votre contexte au Burkina Faso.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-4 px-12 rounded-full transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Contactez-nous
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg font-semibold mb-4">© {new Date().getFullYear()} FDS — Full Digital Solution</p>
          <div className="flex justify-center space-x-8">
            <Link href="/a-propos" className="hover:text-blue-400 transition-colors font-medium">
              À propos
            </Link>
            <Link href="/portfolio" className="hover:text-blue-400 transition-colors font-medium">
              Portfolio
            </Link>
            <Link href="/contact" className="hover:text-blue-400 transition-colors font-medium">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
