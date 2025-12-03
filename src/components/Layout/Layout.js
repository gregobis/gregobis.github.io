import React from 'react'
import { Helmet } from 'react-helmet'
import Navigation from '../Navigation'
import Footer from '../Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../../static/styles.scss'

const Layout = ({ siteTitle = 'Greg Obis', children }) => {
  let rootPath = `/`
  if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
    rootPath = __PATH_PREFIX__ + `/`
  }

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: 'en',
        }}
      >
        <title>{`${siteTitle}`}</title>
        <meta
          name="description"
          content="Greg Obis is an audio engineer that has worked with artists on labels such as Sub Pop, Matador, ANTI-, Car Park, Sacred Bones, Numero Group, Fire Talk, and International Anthem. A personable and skilled audio engineer, Greg specializes in mastering, recording, and mixing records. Contact him to discuss your project."
        />
      </Helmet>
      <Navigation />
      {children}
      <Footer />
    </>
  )
}

export default Layout
