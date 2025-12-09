export default {
  name: 'about',
  title: 'À propos',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre de la page',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Sous-titre',
      type: 'string',
    },
    {
      name: 'overview',
      title: 'Présentation générale',
      type: 'text',
      description: '2-3 phrases sur FDS',
    },
    {
      name: 'mission',
      title: 'Notre mission',
      type: 'text',
    },
    {
      name: 'values',
      title: 'Nos valeurs',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Liste de valeurs (ex: Innovation, Fiabilité, etc.)',
    },
    {
      name: 'approachTitle',
      title: 'Titre de la section "Notre approche"',
      type: 'string',
    },
    {
      name: 'approachDescription',
      title: 'Description de notre approche',
      type: 'text',
    },
    {
      name: 'founderName',
      title: 'Nom du fondateur (optionnel)',
      type: 'string',
    },
    {
      name: 'founderRole',
      title: 'Rôle du fondateur',
      type: 'string',
    },
    {
      name: 'founderImage',
      title: 'Photo du fondateur (optionnel)',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};