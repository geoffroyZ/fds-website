# FDS — Full Digital Solution

Site vitrine de FDS (Burkina Faso) : Next.js 16, Tailwind CSS 4, Sanity CMS.

## Prérequis

- Node.js 20+
- [pnpm](https://pnpm.io/) (recommandé) ou npm

## Installation

```bash
pnpm install
cp .env.example .env.local
# Renseigner les variables dans .env.local
pnpm dev
```

Ouvrir [http://localhost:3000](http://localhost:3000). Studio Sanity : [http://localhost:3000/studio](http://localhost:3000/studio).

## Variables d'environnement

Voir [.env.example](.env.example). Minimum pour le CMS :

- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`

Pour le **formulaire de contact**, configurer **l'une** des options :

1. **Resend** : `RESEND_API_KEY` + `CONTACT_EMAIL_TO`
2. **Sanity** : `SANITY_AUTH_TOKEN` (token avec droits d'écriture) — les messages sont stockés comme `contactSubmission`

Sans l'une de ces options, le formulaire renvoie une erreur 503 (comportement volontaire).

## Scripts

| Commande      | Description        |
|---------------|--------------------|
| `pnpm dev`    | Serveur de dev     |
| `pnpm build`  | Build production   |
| `pnpm start`  | Serveur production |
| `pnpm lint`   | ESLint             |

## Structure

- `src/app/` — pages et routes API
- `src/app/studio/schemas/` — schémas Sanity
- `src/sanity/lib/` — client, requêtes GROQ, images
- `src/lib/blog-posts.ts` — articles de blog (statiques)
- `public/images/` — assets statiques

## Déploiement

Compatible Vercel. Définir les variables d'environnement dans le dashboard. Mettre à jour `NEXT_PUBLIC_SITE_URL` et le `metadataBase` dans `src/app/layout.tsx` avec votre domaine final.

## Logo

Logo officiel : `public/images_logo/fds-logo.jpeg` (charte `#035ABC` / `#737373`). Configuration centralisée dans `src/lib/brand.ts`. Site de référence : [fds-website-ashen.vercel.app](https://fds-website-ashen.vercel.app/).
