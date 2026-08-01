const loggedIn = ({ req: { user } }) => Boolean(user)

export const Orders = {
  slug: 'orders',
  admin: {
    useAsTitle: 'orderNumber',
    defaultColumns: ['orderNumber', 'customerName', 'total', 'paymentStatus', 'createdAt'],
    defaultSort: '-createdAt',
  },
  access: {
    // Orders hold customer + payment info — staff/owner only. (Once Zoho
    // Payments webhooks are wired up in Phase 2, that webhook handler will
    // write here using the server-side Local API, which ignores these
    // access rules — they only govern the REST/GraphQL API and admin UI.)
    read: loggedIn,
    create: loggedIn,
    update: loggedIn,
    delete: loggedIn,
  },
  fields: [
    { name: 'orderNumber', type: 'text', required: true, unique: true },
    { name: 'customerName', type: 'text', required: true },
    { name: 'customerPhone', type: 'text', required: true },
    { name: 'customerEmail', type: 'email' },
    { name: 'items', type: 'array', fields: [
      { name: 'product', type: 'relationship', relationTo: 'products' },
      { name: 'quantity', type: 'number', defaultValue: 1 },
      { name: 'priceAtOrder', type: 'number' },
    ]},
    { name: 'total', type: 'number', required: true },
    {
      name: 'paymentStatus',
      type: 'select',
      defaultValue: 'pending',
      options: [
        { label: 'Pending', value: 'pending' },
        { label: 'Paid', value: 'paid' },
        { label: 'Failed', value: 'failed' },
        { label: 'Refunded', value: 'refunded' },
      ],
    },
    {
      name: 'fulfillmentStatus',
      type: 'select',
      defaultValue: 'processing',
      options: [
        { label: 'Processing', value: 'processing' },
        { label: 'Dispatched', value: 'dispatched' },
        { label: 'Delivered', value: 'delivered' },
        { label: 'Cancelled', value: 'cancelled' },
      ],
    },
    { name: 'notes', type: 'textarea' },
  ],
}
