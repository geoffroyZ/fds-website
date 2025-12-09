import { Poppins } from 'next/font/google';
import Header from './components/Header';
import GoogleAnalytics from './components/GoogleAnalytics';
import "./globals.css";

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
  metadataBase: new URL('https://fds-website.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'FDS - Full Digital Solution | Solutions Digitales au Burkina Faso',
    description: 'Création de sites web, applications mobiles et solutions digitales sur mesure au Burkina Faso.',
    url: 'https://fds-website.vercel.app',
    siteName: 'FDS - Full Digital Solution',
    images: [
      {
        url: '/images_logo/fds logo.jpeg',
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
    images: ['/images_logo/fds logo.jpeg'],
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
    google: 'your-google-verification-code',
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
        <GoogleAnalytics />
        <Header />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
