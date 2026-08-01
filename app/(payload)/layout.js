/* Payload's own root layout for the /admin panel. Kept separate from the
   site's layout in app/(site)/layout.js — Next.js needs two parallel root
   layouts (one per route group) since the admin UI has its own <html>/<body>
   and doesn't use the site's header/footer/fonts. */
import config from '../../payload.config.js'
import '@payloadcms/next/css'
import { handleServerFunctions, RootLayout } from '@payloadcms/next/layouts'
import React from 'react'

import { importMap } from './admin/importMap.js'
import './custom.css'

const serverFunction = async function (args) {
  'use server'
  return handleServerFunctions({
    ...args,
    config,
    importMap,
  })
}

const Layout = ({ children }) => (
  <RootLayout config={config} importMap={importMap} serverFunction={serverFunction}>
    {children}
  </RootLayout>
)

export default Layout
