import React from 'react'

import Hero from 'pages/_blog/hero'
import PostLink from 'pages/_blog/postLink'

const Blog = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  return (
    <div>
      <Hero />
      <div className="w-90 w-50-ns center mt4 pt4 bt b--black-10">
        {edges
          .filter(edge => !edge.node.frontmatter.isFixedPage)
          .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
        }}
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            tags
            title
            isFixedPage
          }
        }
      }
    }
  }
`

export default Blog
