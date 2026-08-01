// Staff accounts for the admin panel. "owner" can see and change everything,
// including managing other staff logins. "staff" is a limited operator seat —
// can work the day-to-day (products, enquiries, orders) but can't add/remove
// other users or touch site-wide settings.
const isOwner = ({ req: { user } }) => Boolean(user && user.role === 'owner')

export const Users = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'role'],
  },
  access: {
    // Anyone logged in can see the user list (so staff can tell who's who),
    // but only an owner can create, edit, or delete accounts.
    read: ({ req: { user } }) => Boolean(user),
    create: isOwner,
    update: ({ req: { user }, id }) => {
      if (!user) return false
      if (user.role === 'owner') return true
      // staff can edit their own profile (e.g. change their own password)
      return user.id === id
    },
    delete: isOwner,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'select',
      required: true,
      defaultValue: 'staff',
      // Only an owner can change roles — a staff member can't promote themselves.
      access: {
        update: isOwner,
      },
      options: [
        { label: 'Owner (full access)', value: 'owner' },
        { label: 'Staff (limited access)', value: 'staff' },
      ],
    },
  ],
}
