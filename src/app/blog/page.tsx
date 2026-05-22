import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog | FDS - Full Digital Solution',
  description: 'Actualités, conseils et tutoriels sur le développement web, le digital et les nouvelles technologies au Burkina Faso.',
  keywords: 'blog, actualité, développement web, tutoriels, digital, Burkina Faso',
  openGraph: {
    title: 'Blog | FDS - Full Digital Solution',
    description: 'Conseils et actualités sur le développement web et le digital.',
    type: 'website',
  },
};

interface BlogPost {
  _id: string;
  title: string;
  excerpt: string;
  content?: string;
  slug: string;
  coverImage?: {
    asset: {
      url: string;
    };
  };
  author: string;
  publishedAt: string;
  category: string;
  readingTime: string;
}

const blogPosts: BlogPost[] = [
  {
    _id: '1',
    title: 'Comment créer un site web performant pour votre entreprise au Burkina Faso',
    excerpt: 'Découvrez les étapes essentielles pour développer un site web qui convertit vos visiteurs en clients.',
    slug: 'creer-site-web-performant',
    author: 'Abdoulaye ZERBO',
    publishedAt: '15 Mars 2025',
    category: 'Développement Web',
    readingTime: '5 min',
  },
  {
    _id: '2',
    title: 'L\'importance du SEO pour les entreprises africaines',
    excerpt: 'Pourquoi le référencement naturel est crucial pour la visibilité de votre entreprise en Afrique.',
    slug: 'importance-seo-afrique',
    author: 'Marie SOME',
    publishedAt: '10 Mars 2025',
    category: 'Marketing Digital',
    readingTime: '4 min',
  },
  {
    _id: '3',
    title: 'Application mobile vs Site responsive : Que choisir ?',
    excerpt: 'Comparaison approfondie entre les applications mobiles natives et les sites web responsive.',
    slug: 'app-mobile-vs-site-responsive',
    author: 'Jean Baptiste OUEDRAOGO',
    publishedAt: '5 Mars 2025',
    category: 'Technologie',
    readingTime: '6 min',
  },
  {
    _id: '4',
    title: 'Les tendances du web design en 2025',
    excerpt: 'Overview des dernières tendances en matière de design web et UX pour rester compétitif.',
    slug: 'tendances-webdesign-2025',
    author: 'Marie SOME',
    publishedAt: '28 Février 2025',
    category: 'Design',
    readingTime: '4 min',
  },
  {
    _id: '5',
    title: 'Comment protéger votre site web contre les attaques',
    excerpt: 'Guide pratique pour sécuriser votre site web contre les cybermenaces croissantes.',
    slug: 'proteger-site-web',
    author: 'Abdoulaye ZERBO',
    publishedAt: '20 Février 2025',
    category: 'Sécurité',
    readingTime: '7 min',
  },
  {
    _id: '6',
    title: 'E-commerce au Burkina : Opportunités et défis',
    excerpt: 'Analyse du marché de la vente en ligne au Burkina Faso et conseils pour réussir.',
    slug: 'ecommerce-burkina',
    author: 'Fatou SAWADOGO',
    publishedAt: '15 Février 2025',
    category: 'E-commerce',
    readingTime: '5 min',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6 animate-fade-in">
              Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 animate-fade-in-delay">
              Actualités, conseils et tutoriels sur le développement web et le digital.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post._id}
              className="group relative overflow-hidden backdrop-blur-xl bg-white/60 rounded-3xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Placeholder */}
              <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-4xl text-white/50">📝</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 backdrop-blur-md bg-white/90 rounded-full px-3 py-1">
                  <span className="text-xs font-semibold text-gray-800">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
                  <div className="flex items-center">
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span>{post.publishedAt}</span>
                    <span>•</span>
                    <span>{post.readingTime}</span>
                  </div>
                </div>
              </div>

              {/* Link Overlay */}
              <Link href={`/blog/${post.slug}`} className="absolute inset-0" />
            </article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-20">
          <div className="backdrop-blur-xl bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Abonnez-vous à notre newsletter
              </h3>
              <p className="text-gray-600 mb-8">
                Recevez nos derniers articles et conseils directement dans votre boîte mail.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="flex-1 px-6 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  S'abonner
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

