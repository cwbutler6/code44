import { GlobalConfig } from 'payload';

const ContactInfo: GlobalConfig = {
  slug: 'contact-info',
  fields: [
    {
      name: 'address',
      type: 'textarea',
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'email',
      type: 'email',
    },
  ],
};

export default ContactInfo;