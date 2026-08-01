// Backs the /shop page. Once this is wired up, the Shop page reads live
// products from here instead of the hardcoded SHOP_PRODUCTS array in
// data/content.js — so staff can add/change products and prices without
// a code deploy.
const loggedIn = ({ req: { user } }) => Boolean(user)

export const Products = {
  slug: 'products',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'price', 'inStock', 'updatedAt'],
  },
  access: {
    read: () => true, // public: the shop page reads this without logging in
    create: loggedIn,
    update: loggedIn,
    delete: loggedIn,
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true, admin: { description: 'Used in the product URL, e.g. "cctv-camera-2mp"' } },
    { name: 'category', type: 'select', required: true, options: [
      { label: 'Solar', value: 'solar' },
      { label: 'Security Systems', value: 'security-systems' },
      { label: 'IT Hardware', value: 'it-hardware' },
    ]},
    { name: 'price', type: 'number', required: true, admin: { description: 'Price in INR. Leave blank and check "Quote only" for items without a fixed price.' } },
    { name: 'quoteOnly', type: 'checkbox', defaultValue: false, label: 'Quote only (no fixed price shown)' },
    { name: 'description', type: 'textarea' },
    { name: 'image', type: 'upload', relationTo: 'media' },
    { name: 'inStock', type: 'checkbox', defaultValue: true },
  ],
}
