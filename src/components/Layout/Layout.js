import React from 'react'
import Navigation from '../Navigation'
import Footer from '../Footer'

const Layout = ({children}) => {
    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <Navigation />
        {children}
        <Footer />
      </div>
    )
  }

export default Layout
