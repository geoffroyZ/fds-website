export default {
  name: 'testimonial',
  title: 'Témoignage',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nom du client',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'company',
      title: 'Entreprise',
      type: 'string',
    },
    {
      name: 'role',
      title: 'Poste',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Témoignage',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'rating',
      title: 'Note (1-5)',
      type: 'number',
      validation: (Rule: any) => Rule.min(1).max(5),
    },
    {
      name: 'image',
      title: 'Photo du client (optionnel)',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'featured',
      title: 'Témoignage en vedette',
      type: 'boolean',
      description: 'Afficher ce témoignage en priorité',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'company',
      media: 'image',
    },
  },
};
