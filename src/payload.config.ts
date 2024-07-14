// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { s3Storage } from '@payloadcms/storage-s3'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import EventPackages from './collections/EventPackages'
import GalleryItems from './collections/GalleryItems'
import Testimonials from './collections/Testimonials'
import FAQ from './collections/Faq'
import Settings from './globals/Settings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Users, Media, EventPackages, GalleryItems, Testimonials, FAQ],
  globals: [Settings],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    s3Storage({
      collections: {
        media: {
          prefix: 'media',
        }
      },
      bucket: process.env.S3_BUCKET as string,
      config: {
        forcePathStyle: true, // Important for using Supabase
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID as string,
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY as string,
        },
        region: process.env.S3_REGION,
        endpoint: process.env.S3_ENDPOINT,
      },
    }),
  ],
})
