const path = require('path')

exports.createPages = ({boundActionCreators: {createPage}, graphql}) => {
  const Post = path.resolve('src/components/post.js')
  return graphql(`{
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          html
          id
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            path
            title
          }
        }
      }
    }
  }`)
  .then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }
    result.data.allMarkdownRemark.edges.forEach(({node}) => {  
      createPage({
        path: node.frontmatter.path,
        component: Post,
        context: {}
      })
    })
  });
}
