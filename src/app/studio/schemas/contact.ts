export default {
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre de la page',
      type: 'string',
      description: 'Ex: "Contactez-nous"',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'email',
      title: 'Adresse email',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Numéro de téléphone',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Adresse physique',
      type: 'text',
    },
    {
      name: 'city',
      title: 'Ville',
      type: 'string',
    },
    {
      name: 'country',
      title: 'Pays',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'email',
    },
  },
};