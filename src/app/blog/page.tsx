import { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog-posts';

export const metadata: Metadata = {
  title: 'Blog | FDS - Full Digital Solution',
  description:
    'Actualités, conseils et tutoriels sur le développement web, le digital et les nouvelles technologies au Burkina Faso.',
  keywords: 'blog, actualité, développement web, tutoriels, digital, Burkina Faso',
  openGraph: {
    title: 'Blog | FDS - Full Digital Solution',
    description: 'Conseils et actualités sur le développement web et le digital.',
    type: 'website',
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="relative overflow-hidden">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post._id}
              className="group relative overflow-hidden backdrop-blur-xl bg-white/60 rounded-3xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-4xl text-white/50">📝</span>
                </div>
                <div className="absolute top-4 left-4 backdrop-blur-md bg-white/90 rounded-full px-3 py-1">
                  <span className="text-xs font-semibold text-gray-800">{post.category}</span>
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>

                <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
                  <span>{post.author}</span>
                  <div className="flex items-center gap-3">
                    <span>{post.publishedAt}</span>
                    <span>•</span>
                    <span>{post.readingTime}</span>
                  </div>
                </div>
              </div>

              <Link href={`/blog/${post.slug}`} className="absolute inset-0" aria-label={post.title} />
            </article>
          ))}
        </div>

        <div className="mt-20">
          <div className="backdrop-blur-xl bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Newsletter</h3>
              <p className="text-gray-600">
                La newsletter sera disponible prochainement. En attendant, contactez-nous pour
                recevoir nos actualités.
              </p>
              <Link
                href="/contact"
                className="inline-block mt-6 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-purple-600 hover:to-blue-600 transition-all"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
