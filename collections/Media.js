// NOTE: not wired into anything yet, and not safe to use as-is. Vercel's
// serverless functions run on a read-only filesystem, so this collection's
// local-disk upload storage (staticDir below) will fail there. Needs a real
// cloud storage adapter (e.g. @payloadcms/storage-vercel-blob) before any
// collection should actually link to this one. Products.image is a plain
// text URL field for now specifically to avoid this problem.
const loggedIn = ({ req: { user } }) => Boolean(user)

export const Media = {
  slug: 'media',
  access: {
    read: () => true,
    create: loggedIn,
    update: loggedIn,
    delete: loggedIn,
  },
  upload: {
    staticDir: 'media',
  },
  fields: [
    { name: 'alt', type: 'text' },
  ],
}
