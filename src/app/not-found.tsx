'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* 404 Animation */}
        <div className="mb-8 animate-bounce">
          <div className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            404
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 animate-fade-in-up">
          Page non trouvée
        </h1>

        <p className="text-xl text-gray-600 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>

        {/* Navigation Options */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Link
            href="/"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Retour à l'accueil
          </Link>
          <Link
            href="/contact"
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-8 rounded-full transition-all shadow-md hover:shadow-lg transform hover:scale-105"
          >
            Nous contacter
          </Link>
        </div>

        {/* Decorative Elements */}
        <div className="mt-16 flex justify-center space-x-4">
          <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="w-4 h-4 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-4 h-4 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
}
