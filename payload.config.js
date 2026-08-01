import sharp from 'sharp'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'

import { Users } from './collections/Users.js'
import { Products } from './collections/Products.js'
import { Testimonials } from './collections/Testimonials.js'
import { Enquiries } from './collections/Enquiries.js'
import { Orders } from './collections/Orders.js'
import { Media } from './collections/Media.js'

export default buildConfig({
  // Mounted at /payload-api instead of the default /api, so it never
  // collides with the site's own /api/enquiry and /api/chatbot routes,
  // which live in app/(site)/api and stay exactly as they were.
  routes: {
    api: '/payload-api',
  },

  admin: {
    user: Users.slug,
  },

  editor: lexicalEditor(),

  collections: [Users, Products, Testimonials, Enquiries, Orders, Media],

  secret: process.env.PAYLOAD_SECRET || '',

  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),

  sharp,

  typescript: {
    outputFile: undefined,
  },
})
