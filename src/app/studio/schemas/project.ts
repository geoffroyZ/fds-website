export default {
  name: 'project',
  title: 'Projet',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre du projet',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'shortDescription',
      title: 'Description courte (1 ligne)',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description détaillée',
      type: 'text',
    },
    {
      name: 'mainImage',
      title: 'Image de couverture',
      type: 'image',
      options: {
        hotspot: true, // permet de choisir le point focal
      },
    },
    {
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      options: {
        list: ['Logiciel', 'Application Web', 'Application Mobile', 'Intégration'],
      },
    },
    {
      name: 'demoUrl',
      title: 'Lien de démo (optionnel)',
      type: 'url',
    },
    {
      name: 'githubUrl',
      title: 'Lien GitHub (optionnel)',
      type: 'url',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'mainImage',
    },
  },
};