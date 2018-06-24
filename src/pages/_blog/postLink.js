import React from 'react'
import Link from 'gatsby-link'

const PostLink = ({post: {frontmatter: {title, path, date}, excerpt}}) => {
  return (<Link to={path}><div className="pa3 br2 ba b--lightest-gray dim pointer">
    <div>{tags && tags.map((t, i) => <span key={i} className="f7 lighter-gray ttu b">{t}</span>)}</div>
    <div className="f3 mt3">{title}</div>
    <div className="black-40">{date}</div>
    <div className="mt3">{excerpt}</div>
  </div></Link>)
}

export default PostLink