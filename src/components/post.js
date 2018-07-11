import React from 'react'
import Helmet from 'react-helmet'

const Post = ({ data: { markdownRemark: post } }) => {
  return (
    <div className="min-vh-100 w-90 w-50-ns center">
      <div className="cf">
        <div className="fl w-50 f6 black-60">
          {post.frontmatter.tags &&
            post.frontmatter.tags.map((t, i) => (
              <div className="dib mr2" key={i}>
                #{t}
              </div>
            ))}
        </div>

        <div className="fl w-50 tr f6 black-60">{post.frontmatter.date}</div>
      </div>

      <h1 className="f2 f1-ns">{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        tags
        path
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`

export default Post
