// import { buildConfig } from 'payload/config'
// import { webpackBundler } from '@payloadcms/bundler-webpack'
// import { mongooseAdapter } from '@payloadcms/db-mongodb'
// import { slateEditor } from '@payloadcms/richtext-slate'
// import path from 'path'

// export default buildConfig({
//   serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '',
//   collections: [], 
//   routes: {
//     admin: '/sell',
//   },
//   admin: {
//     user: 'users',
//     bundler: webpackBundler(),
//     meta: {
//       titleSuffix: '- DigitalHippo',
//       favicon: '/favicon.ico',
//       ogImage: '/thumbnail.jpg',
//     },
//   },
//   rateLimit: {
//     max: 2000,
//   },
//   editor: slateEditor({}),
//   db: mongooseAdapter({
//     url: process.env.MONGODB_URL!,
//   }),
//   typescript: {
//     outputFile: path.resolve(__dirname, 'payload-types.ts'),
//   },
// })
import { buildConfig } from 'payload/config';
import { webpackBundler } from '@payloadcms/bundler-webpack';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { slateEditor } from '@payloadcms/richtext-slate';
import path from 'path';

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '',
  collections: [
    {
      slug: 'users',
      access: {
        read: () => true, // Define your access control functions for reading users
        create: () => true, // Define access for creating users
        update: () => true, // Define access for updating users
        delete: () => true, // Define access for deleting users
      },
      fields: [
        // Define fields for the users collection
        // For example:
        {
          name: 'username',
          label: 'Username',
          type: 'text',
          required: true,
        },
        // Add more fields as needed for your users
      ],
    },
    // Add other collections if needed
  ],
  routes: {
    admin: '/sell',
  },
  admin: {
    user: 'users',
    bundler: webpackBundler(),
    meta: {
      titleSuffix: '- DigitalHippo',
      favicon: '/favicon.ico',
      ogImage: '/thumbnail.jpg',
    },
  },
  rateLimit: {
    max: 2000,
  },
  editor: slateEditor({}),
  db: mongooseAdapter({
    url: process.env.MONGODB_URL!,
  }),
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
});
