const withSass = require('@zeit/next-sass')
module.exports = withSass({
  /* config options here */
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  },
})