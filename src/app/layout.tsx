import { Poppins } from 'next/font/google';
import Header from './components/Header';
import GoogleAnalytics from './components/GoogleAnalytics';
import NavigationLoader from './components/NavigationLoader';
import { brand } from '@/lib/brand';
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || brand.siteUrl;

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata = {
  title: 'FDS - Full Digital Solution | Solutions Digitales au Burkina Faso',
  description: 'FDS - Full Digital Solution : Création de sites web, applications mobiles et solutions digitales sur mesure au Burkina Faso. Expertise en développement web et mobile.',
  keywords: 'développement web, applications mobiles, solutions digitales, Burkina Faso, FDS, Full Digital Solution',
  authors: [{ name: 'FDS - Full Digital Solution' }],
  creator: 'FDS - Full Digital Solution',
  publisher: 'FDS - Full Digital Solution',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'FDS - Full Digital Solution | Solutions Digitales au Burkina Faso',
    description: 'Création de sites web, applications mobiles et solutions digitales sur mesure au Burkina Faso.',
    url: siteUrl,
    siteName: 'FDS - Full Digital Solution',
    images: [
      {
        url: brand.logo.src,
        width: 1200,
        height: 630,
        alt: 'FDS - Full Digital Solution Logo',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FDS - Full Digital Solution | Solutions Digitales au Burkina Faso',
    description: 'Création de sites web, applications mobiles et solutions digitales sur mesure au Burkina Faso.',
    images: [brand.logo.src],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${poppins.variable} font-sans antialiased`}>
        <NavigationLoader />
        <GoogleAnalytics />
        <Header />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
