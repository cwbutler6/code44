import { CollectionConfig } from 'payload';

const FAQ: CollectionConfig = {
  slug: 'faq',
  fields: [
    {
      name: 'question',
      type: 'text',
      required: true,
    },
    {
      name: 'answer',
      type: 'richText',
      required: true,
    },
  ],
}

export default FAQ;
