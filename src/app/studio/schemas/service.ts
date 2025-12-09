export default {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    { name: 'title', title: 'Titre du service', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'icon', title: 'Icône (optionnel)', type: 'string', description: 'Ex: "code", "mobile", "integration"' },
  ],
};