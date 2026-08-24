// Backs the /shop page. The Shop page reads live products from here instead
// of the old hardcoded SHOP_PRODUCTS array in data/content.js — so staff can
// add/change products and prices without a code deploy.
const loggedIn = ({ req: { user } }) => Boolean(user)

export const Products = {
  slug: 'products',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'price', 'category', 'inStock', 'updatedAt'],
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
      { label: 'Accessories', value: 'accessories' },
    ]},
    { name: 'price', type: 'number', required: true, admin: { description: 'Price in INR. Leave blank and check "Quote only" for items without a fixed price.' } },
    { name: 'quoteOnly', type: 'checkbox', defaultValue: false, label: 'Quote only (no fixed price shown)' },
    { name: 'description', type: 'textarea' },
    {
      name: 'image',
      type: 'text',
      admin: { description: 'Path or URL to the product photo, e.g. "/images/products/cctv-camera.jpg". Not an upload field — Vercel\'s serverless functions can\'t keep uploaded files, so this is a link instead. Put new photos in the public/images/products folder in the code, or use a fully hosted image URL.' },
    },
    { name: 'inStock', type: 'checkbox', defaultValue: true },
    { name: 'featured', type: 'checkbox', defaultValue: false, label: 'Show in "Hot Deals"', admin: { description: 'Featured products appear in the highlighted deals section at the top of the shop.' } },
  ],
}
