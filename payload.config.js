// Thin re-export so the Next.js app (which imports this relatively from
// app/(payload)/*.js) keeps working unchanged. The real config lives in
// payload.config.mjs — it has to be a genuine .mjs file so Node's CLI tools
// (npx payload migrate, etc.) load it as real ESM. Loaded as plain CommonJS
// .js, requiring @payloadcms/richtext-lexical crashes with
// ERR_REQUIRE_ASYNC_MODULE, because that package uses top-level await deep
// in its dependency tree and Node can never require() that synchronously.
// Next's own bundler doesn't have this problem (it isn't using Node's raw
// require()), so this re-export is transparent to the running site.
export { default } from './payload.config.mjs'
