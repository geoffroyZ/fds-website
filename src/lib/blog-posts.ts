export interface BlogPost {
  _id: string;
  title: string;
  excerpt: string;
  content: string;
  slug: string;
  author: string;
  publishedAt: string;
  category: string;
  readingTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    _id: '1',
    title: 'Comment créer un site web performant pour votre entreprise au Burkina Faso',
    excerpt:
      'Découvrez les étapes essentielles pour développer un site web qui convertit vos visiteurs en clients.',
    slug: 'creer-site-web-performant',
    author: 'Abdoulaye ZERBO',
    publishedAt: '15 Mars 2025',
    category: 'Développement Web',
    readingTime: '5 min',
    content: `Un site performant commence par une définition claire de vos objectifs : générer des leads, présenter vos services ou vendre en ligne. Au Burkina Faso, la rapidité de chargement et l'adaptation mobile sont essentielles compte tenu des connexions variables.

Choisissez une stack moderne (Next.js, par exemple), optimisez les images, et structurez vos pages autour de parcours utilisateur simples. Un formulaire de contact visible, des appels à l'action clairs et un contenu en français adapté à votre audience locale font la différence.

Enfin, mesurez : Google Analytics, Search Console et des tests utilisateurs réguliers vous permettront d'améliorer continuellement votre site.`,
  },
  {
    _id: '2',
    title: "L'importance du SEO pour les entreprises africaines",
    excerpt:
      'Pourquoi le référencement naturel est crucial pour la visibilité de votre entreprise en Afrique.',
    slug: 'importance-seo-afrique',
    author: 'Marie SOME',
    publishedAt: '10 Mars 2025',
    category: 'Marketing Digital',
    readingTime: '4 min',
    content: `Le SEO permet d'être trouvé par vos clients sans dépendre uniquement de la publicité payante. Pour les entreprises africaines, cela signifie cibler des requêtes locales, optimiser Google Business Profile et produire du contenu utile.

Les fondamentaux restent les mêmes : titres pertinents, balises meta, structure Hn claire, liens internes et contenu de qualité. Pensez aussi aux recherches vocales et mobiles, très présentes sur le continent.

Un référencement durable demande de la régularité : articles de blog, études de cas et pages services bien rédigées construisent votre autorité sur le long terme.`,
  },
  {
    _id: '3',
    title: 'Application mobile vs Site responsive : Que choisir ?',
    excerpt:
      'Comparaison approfondie entre les applications mobiles natives et les sites web responsive.',
    slug: 'app-mobile-vs-site-responsive',
    author: 'Jean Baptiste OUEDRAOGO',
    publishedAt: '5 Mars 2025',
    category: 'Technologie',
    readingTime: '6 min',
    content: `Une application native offre une expérience riche (notifications push, accès hors ligne, performances) mais coûte plus cher à développer et maintenir. Un site responsive ou une PWA couvre la majorité des besoins vitrine et e-commerce léger.

Commencez par un site responsive si vous devez valider votre marché rapidement. Envisagez une application mobile lorsque vous avez des usages récurrents, des fonctionnalités spécifiques au device ou une base utilisateurs fidèle.

L'hybride est souvent la bonne stratégie : site web d'abord, application ensuite lorsque le retour sur investissement est démontré.`,
  },
  {
    _id: '4',
    title: 'Les tendances du web design en 2025',
    excerpt:
      'Overview des dernières tendances en matière de design web et UX pour rester compétitif.',
    slug: 'tendances-webdesign-2025',
    author: 'Marie SOME',
    publishedAt: '28 Février 2025',
    category: 'Design',
    readingTime: '4 min',
    content: `En 2025, le design web privilégie la lisibilité, les micro-interactions subtiles et l'accessibilité. Les dégradés doux, la typographie expressive et les mises en page aérées restent populaires.

L'UX mobile-first n'est plus une option : navigation simplifiée, boutons tactiles larges et temps de chargement minimal. Les utilisateurs attendent une expérience fluide sur smartphone.

Enfin, l'authenticité compte : photos réelles, témoignages clients et identité visuelle cohérente renforcent la confiance plus qu'un template générique.`,
  },
  {
    _id: '5',
    title: 'Comment protéger votre site web contre les attaques',
    excerpt:
      'Guide pratique pour sécuriser votre site web contre les cybermenaces croissantes.',
    slug: 'proteger-site-web',
    author: 'Abdoulaye ZERBO',
    publishedAt: '20 Février 2025',
    category: 'Sécurité',
    readingTime: '7 min',
    content: `La sécurité d'un site web repose sur des bases : HTTPS obligatoire, mises à jour régulières des dépendances, mots de passe forts et sauvegardes automatiques.

Protégez vos formulaires contre le spam (rate limiting, CAPTCHA si nécessaire) et ne stockez jamais de secrets dans le code source. Utilisez des variables d'environnement pour les clés API.

Surveillez les logs, limitez les tentatives de connexion admin et choisissez un hébergeur fiable. En cas de doute, faites auditer votre application par des professionnels.`,
  },
  {
    _id: '6',
    title: 'E-commerce au Burkina : Opportunités et défis',
    excerpt:
      'Analyse du marché de la vente en ligne au Burkina Faso et conseils pour réussir.',
    slug: 'ecommerce-burkina',
    author: 'Fatou SAWADOGO',
    publishedAt: '15 Février 2025',
    category: 'E-commerce',
    readingTime: '5 min',
    content: `Le e-commerce au Burkina Faso progresse grâce au mobile money et à la confiance croissante dans les achats en ligne. Les défis restent la logistique, le paiement à la livraison et la sensibilisation client.

Pour réussir, proposez des moyens de paiement locaux, des frais de livraison transparents et un service client réactif (WhatsApp, téléphone).

Commencez petit : catalogue limité, zone de livraison maîtrisée, puis étendez progressivement selon la demande et vos capacités opérationnelles.`,
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
