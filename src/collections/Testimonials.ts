import { CollectionConfig } from 'payload';

const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'eventType',
      type: 'select',
      options: ['Wedding', 'Corporate', 'Social', 'Other'],
    },
    {
      name: 'quote',
      type: 'textarea',
    },
    {
      name: 'rating',
      type: 'number',
      min: 1,
      max: 5,
    },
  ],
};

export default Testimonials;