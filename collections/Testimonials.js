const loggedIn = ({ req: { user } }) => Boolean(user)

export const Testimonials = {
  slug: 'testimonials',
  admin: {
    useAsTitle: 'customerName',
    defaultColumns: ['customerName', 'rating', 'published', 'updatedAt'],
  },
  access: {
    // Public site only shows published testimonials; staff see all of them
    // in the admin panel regardless of this rule (admin UI bypasses `read`
    // access for logged-in users viewing their own collection list — this
    // rule governs the public API read only).
    read: ({ req: { user } }) => {
      if (user) return true
      return { published: { equals: true } }
    },
    create: loggedIn,
    update: loggedIn,
    delete: loggedIn,
  },
  fields: [
    { name: 'customerName', type: 'text', required: true },
    { name: 'location', type: 'text' },
    { name: 'quote', type: 'textarea', required: true },
    { name: 'rating', type: 'number', min: 1, max: 5, defaultValue: 5 },
    { name: 'published', type: 'checkbox', defaultValue: false, admin: { description: 'Only published testimonials show on the live site.' } },
  ],
}
