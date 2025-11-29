import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Nav from 'components/nav'
import Footer from 'components/footer'

const Layout = ({ children, data }) => {
  return (
    <div>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      >
        {process.env.NODE_ENV === `production` && (
          <script type="text/javascript" src="/chaport.js" />
        )}
      </Helmet>
      <div className="black">
        <div className="fixed w-100 z-1">
          <Nav />
        </div>
        <div className="bg-white pt6 min-vh-100">{children()}</div>
        <Footer />
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
