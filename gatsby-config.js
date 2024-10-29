require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
}

// if you want to use the preview API please define
// CONTENTFUL_HOST in your environment config
// the `host` property should map to `preview.contentful.com`
// https://www.contentful.com/developers/docs/references/content-preview-api/#/reference/spaces/space/get-a-space/console/js
if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the access token need to be provided.'
  )
}

module.exports = {
  siteMetadata: {
    title: 'Greg Obis | Audio Engineer',
  },
  pathPrefix: '/gatsby-contentful-starter',
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    {
      resolve: "gatsby-omni-font-loader",
      options: {
        mode: "async",
        enableListener: true,
        preconnect: ["https://fonts.googleapis.com"],
        custom: [
          {
            name: ["terminal_grotesque"],
            file: "/fonts.css",
          },
        ],
        web: [{
            name: "Roboto",
            file: "https://fonts.googleapis.com/css2?family=Roboto",
          },
          {
            name: "Roboto Mono",
            file: "https://fonts.googleapis.com/css2?family=Roboto+Mono",
          },
        ],
      },
    }
  ],
}
