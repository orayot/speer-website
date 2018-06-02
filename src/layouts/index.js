import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Nav from 'components/nav'
import Footer from 'components/footer'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {name: 'description', content: 'Sample'},
        {name: 'keywords', content: 'sample, something'},
      ]}
    />
    <div className='black'>
      <Nav/>
      <div className='bg-white'>
        {children()}
      </div>
      <Footer />
    </div>
  </div>
)

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
