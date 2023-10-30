const spaceImport = require('contentful-import')
const exportFile = require('./config.json')

const { NEXT_PUBLIC_CONTENTFUL_SPACE_ID, NEXT_PUBLIC_CONTENTFUL_MANAGEMENT_TOKEN } = process.env

if (!NEXT_PUBLIC_CONTENTFUL_SPACE_ID || !NEXT_PUBLIC_CONTENTFUL_MANAGEMENT_TOKEN) {
  throw new Error(
    [
      'Parameters missing...',
      'Please run the setup command as follows',
      'CONTENTFUL_SPACE_ID=XXX CONTENTFUL_MANAGEMENT_TOKEN=CFPAT-XXX npm run setup',
    ].join('\n')
  )
}

spaceImport({
  spaceId: NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  managementToken: NEXT_PUBLIC_CONTENTFUL_MANAGEMENT_TOKEN,
  content: exportFile,
})
  .then(() => console.log('The content model of your space is set up!'))
  .catch((e) => console.error(e))