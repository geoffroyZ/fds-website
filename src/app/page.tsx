import { client, isSanityConfigured } from '@/sanity/lib/client';
import {
  featuredTestimonialsQuery,
  homePageQuery,
  servicesQuery,
} from '@/sanity/lib/queries';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

interface HomeContent {
  title: string;
  subtitle: string;
  description: string;
}

interface ServiceItem {
  _id: string;
  title: string;
  description: string;
}

interface TestimonialItem {
  _id: string;
  name: string;
  company?: string;
  role?: string;
  content: string;
  rating?: number;
  imageUrl?: string;
}

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

// Default content when Sanity is not configured
const defaultContent = {
  title: 'FDS',
  subtitle: 'Full Digital Solution',
  description: 'Nous créons des logiciels sur mesure...',
};

export default async function Home() {
  // Check if Sanity is configured
  const sanityReady = isSanityConfigured() && client;
  
  let home: HomeContent = defaultContent;
  let services: ServiceItem[] = [];
  let testimonials: TestimonialItem[] = [];

  if (sanityReady) {
    try {
      const [homeData, servicesData, testimonialsData] = await Promise.all([
        client!.fetch(homePageQuery),
        client!.fetch(servicesQuery),
        client!.fetch(featuredTestimonialsQuery),
      ]);
      
      if (homeData) home = homeData;
      if (servicesData) services = servicesData;
      if (testimonialsData) testimonials = testimonialsData;
    } catch (error) {
      console.warn('Erreur lors du chargement des données Sanity:', error);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 text-gray-800 flex flex-col">
      {/* Hero Section */}
      <header className="relative gradient-bg py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        
        {/* Hero Image Background */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/hero/tech-background.svg"
            alt="Transformation digitale"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="relative max-w-5xl mx-auto px-4 text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-fds-gradient mb-6 tracking-tight">
            {home.title}
          </h1>
          {home.subtitle && (
            <p className="text-xl md:text-2xl text-fds-gray max-w-3xl mx-auto mb-6 leading-relaxed font-medium">
              {home.subtitle}
            </p>
          )}
          
          {/* Hero Feature Images */}
          <div className="grid grid-cols-3 gap-4 mb-10 max-w-2xl mx-auto">
            <div className="relative h-24 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/hero/web-development.svg"
                alt="Développement web"
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="relative h-24 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/hero/mobile-app.svg"
                alt="Application mobile"
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="relative h-24 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/hero/digital-strategy.svg"
                alt="Stratégie digitale"
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/contact"
              className="btn-fds-primary font-semibold py-4 px-10 rounded-full transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Discutons de votre projet
            </Link>
            <Link
              href="/portfolio"
              className="border-2 border-fds-blue text-fds-blue hover:bg-fds-blue hover:text-white font-semibold py-4 px-10 rounded-full transition-all shadow-md hover:shadow-lg transform hover:scale-105"
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
            {services.map((service, index) => (
              <div
                key={service._id}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-lg hover:shadow-2xl transition-all group hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-full h-32 rounded-xl overflow-hidden mb-6 group-hover:scale-105 transition-transform">
                  <Image
                    src={index === 0 ? "/images/services/web-dev-tech.svg" : index === 1 ? "/images/services/mobile-tech.svg" : "/images/services/database-tech.svg"}
                    alt={service.title}
                    width={300}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Notre Équipe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Abdoulaye ZERBO', role: 'Fondateur & Directeur Technique', initials: 'AZ' },
              { name: 'Marie SOME', role: 'Directrice Artistique', initials: 'MS' },
              { name: 'Jean B. OUEDRAOGO', role: 'Développeur Full Stack', initials: 'JO' },
              { name: 'Fatou SAWADOGO', role: 'Chef de Projet', initials: 'FS' }
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-lg hover:shadow-2xl transition-all group hover:scale-105 animate-fade-in-up text-center"
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
        </section>

        {/* Testimonials */}
        {testimonials && testimonials.length > 0 && (
          <section className="mb-24">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Ils nous font confiance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
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
                    {testimonial.imageUrl && (
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
                        <Image
                          src={`${testimonial.imageUrl}?w=48&h=48&fit=crop`}
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
