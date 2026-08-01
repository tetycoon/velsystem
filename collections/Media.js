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
