'use client';

import { useState, useEffect } from 'react';

export default function LoadingSpinner() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => setIsLoading(false);

    // Écouter les événements de navigation Next.js
    const startHandler = () => handleStart();
    const completeHandler = () => handleComplete();

    // Ajouter les écouteurs d'événements
    window.addEventListener('beforeunload', startHandler);
    
    // Pour la navigation interne, on utilise un custom event
    window.addEventListener('routeChangeStart', startHandler);
    window.addEventListener('routeChangeComplete', completeHandler);
    window.addEventListener('routeChangeError', completeHandler);

    return () => {
      window.removeEventListener('beforeunload', startHandler);
      window.removeEventListener('routeChangeStart', startHandler);
      window.removeEventListener('routeChangeComplete', completeHandler);
      window.removeEventListener('routeChangeError', completeHandler);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] pointer-events-none">
      <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse">
        <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 animate-loading-bar"></div>
      </div>
      
      {/* Spinner optionnel en haut de page */}
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
        <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
      
      <style jsx>{`
        @keyframes loading-bar {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }
        .animate-loading-bar {
          animation: loading-bar 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
