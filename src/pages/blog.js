import React from 'react'

import Hero from 'components/pages/blog/hero'
import Tags from 'components/pages/blog/tags'
import PostLink from 'components/pages/blog/postLink'

const Blog = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const tagList = edges
    .reduce(
      (accumulator, e) => [...accumulator, ...e.node.frontmatter.tags],
      []
    )
    .filter(t => t)
  return (
    <div>
      <Hero />
      <div className="w-90 w-50-ns center mt4 pt2 bt b--lightest-gray">
        <div className="bb b--lightest-gray pb2 mb4">
          <Tags tagList={tagList} />
        </div>
        {edges
          .filter(edge => !edge.node.frontmatter.isFixedPage)
          .map(edge => <PostLink key={edge.node.id} post={edge.node} />)}
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
