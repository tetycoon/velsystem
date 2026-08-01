const loggedIn = ({ req: { user } }) => Boolean(user)

export const Enquiries = {
  slug: 'enquiries',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'subject', 'status', 'createdAt'],
    // Newest first so staff see fresh leads at the top.
    defaultSort: '-createdAt',
  },
  access: {
    // Enquiries contain customer contact details — never public.
    read: loggedIn,
    create: () => true, // the website's contact form writes here without logging in
    update: loggedIn,
    delete: loggedIn,
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'email', type: 'email', required: true },
    { name: 'whatsapp', type: 'text', required: true },
    { name: 'subject', type: 'text' },
    { name: 'message', type: 'textarea' },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'new',
      options: [
        { label: 'New', value: 'new' },
        { label: 'Contacted', value: 'contacted' },
        { label: 'Closed', value: 'closed' },
      ],
    },
  ],
}
