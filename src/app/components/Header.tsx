'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { brand } from '@/lib/brand';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleLinkClick = () => {
    // Fermer le menu mobile si ouvert
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-white border-b border-gray-200/50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src={brand.logo.src}
                alt={brand.logo.alt}
                width={brand.logo.width}
                height={brand.logo.height}
                className="h-10 w-auto object-contain"
                priority
              />
              <div className="flex flex-col">
                <span
                  className="text-2xl font-bold"
                  style={{ color: brand.colors.blue }}
                >
                  FDS
                </span>
                <span
                  className="text-xs leading-tight"
                  style={{ color: brand.colors.gray }}
                >
                  Full Digital Solution
                </span>
              </div>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                href="/" 
                className={`text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === '/' ? 'text-blue-600 bg-blue-50' : ''
                }`}
                onClick={handleLinkClick}
              >
                Accueil
              </Link>
              <Link 
                href="/a-propos" 
                className={`text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === '/a-propos' ? 'text-blue-600 bg-blue-50' : ''
                }`}
                onClick={handleLinkClick}
              >
                À propos
              </Link>
              <Link 
                href="/services" 
                className={`text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === '/services' ? 'text-blue-600 bg-blue-50' : ''
                }`}
                onClick={handleLinkClick}
              >
                Services
              </Link>
              <Link 
                href="/portfolio" 
                className={`text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === '/portfolio' ? 'text-blue-600 bg-blue-50' : ''
                }`}
                onClick={handleLinkClick}
              >
                Portfolio
              </Link>
              <Link 
                href="/equipe" 
                className={`text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === '/equipe' ? 'text-blue-600 bg-blue-50' : ''
                }`}
                onClick={handleLinkClick}
              >
                Équipe
              </Link>
              <Link 
                href="/tarifs" 
                className={`text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === '/tarifs' ? 'text-blue-600 bg-blue-50' : ''
                }`}
                onClick={handleLinkClick}
              >
                Tarifs
              </Link>
              <Link 
                href="/blog" 
                className={`text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === '/blog' ? 'text-blue-600 bg-blue-50' : ''
                }`}
                onClick={handleLinkClick}
              >
                Blog
              </Link>
              <Link 
                href="/faq" 
                className={`text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === '/faq' ? 'text-blue-600 bg-blue-50' : ''
                }`}
                onClick={handleLinkClick}
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg transform hover:scale-105 ${
                  pathname === '/contact'
                    ? 'bg-white text-blue-600 border-2 border-blue-600'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-purple-600 hover:to-blue-600'
                }`}
                onClick={handleLinkClick}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="bg-gray-200 inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
              <svg className={`${mobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${mobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md border-t border-gray-200/50">
          <Link 
            href="/" 
            onClick={() => setMobileMenuOpen(false)} 
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              pathname === '/' 
                ? 'text-blue-600 bg-blue-50' 
                : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            Accueil
          </Link>
          <Link 
            href="/a-propos" 
            onClick={() => setMobileMenuOpen(false)} 
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              pathname === '/a-propos' 
                ? 'text-blue-600 bg-blue-50' 
                : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            À propos
          </Link>
          <Link 
            href="/services" 
            onClick={() => setMobileMenuOpen(false)} 
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              pathname === '/services' 
                ? 'text-blue-600 bg-blue-50' 
                : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            Services
          </Link>
          <Link 
            href="/portfolio" 
            onClick={() => setMobileMenuOpen(false)} 
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              pathname === '/portfolio' 
                ? 'text-blue-600 bg-blue-50' 
                : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            Portfolio
          </Link>
          <Link 
            href="/equipe" 
            onClick={() => setMobileMenuOpen(false)} 
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              pathname === '/equipe' 
                ? 'text-blue-600 bg-blue-50' 
                : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            Équipe
          </Link>
          <Link 
            href="/tarifs" 
            onClick={() => setMobileMenuOpen(false)} 
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              pathname === '/tarifs' 
                ? 'text-blue-600 bg-blue-50' 
                : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            Tarifs
          </Link>
          <Link 
            href="/blog" 
            onClick={() => setMobileMenuOpen(false)} 
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              pathname === '/blog' 
                ? 'text-blue-600 bg-blue-50' 
                : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            Blog
          </Link>
          <Link 
            href="/faq" 
            onClick={() => setMobileMenuOpen(false)} 
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              pathname === '/faq' 
                ? 'text-blue-600 bg-blue-50' 
                : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            FAQ
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white block px-3 py-2 rounded-md text-base font-semibold text-center mt-4"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
