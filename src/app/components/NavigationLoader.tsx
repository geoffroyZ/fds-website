'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function NavigationLoader() {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // Temps de chargement simulé

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!isLoading) return null;

  return (
    <div className="fixed top-16 left-0 right-0 z-[9999]">
      <div className="h-1 bg-gray-200">
        <div className="h-full bg-gradient-to-r from-fds-blue to-sky-500 animate-loading-bar"></div>
      </div>
      
      <style jsx>{`
        @keyframes loading-bar {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }
        .animate-loading-bar {
          animation: loading-bar 0.8s ease-in-out;
        }
      `}</style>
    </div>
  );
}
