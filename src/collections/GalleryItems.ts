import { CollectionConfig } from 'payload';

const GalleryItems: CollectionConfig = {
  slug: 'gallery-items',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'eventType',
      type: 'select',
      options: ['Wedding', 'Corporate', 'Social', 'Other']
    },
  ],
};

export default GalleryItems;
