import React from 'react'
import Link from 'gatsby-link'

const PostLink = ({
  post: {
    frontmatter: { title, path, date, tags },
    excerpt,
  },
}) => {
  return (
    <Link to={path}>
      <div className="pa3 br2 ba b--lightest-gray dim pointer">
        <div className="f3">{title}</div>
        <div className="black-40">{date}</div>
        <div className="mt3">{excerpt}</div>

        <div className="mt3">
          {tags &&
            tags.map((t, i) => (
              <span key={i} className="f7 lighter-gray ttu b mr3">
                {t}
              </span>
            ))}
        </div>
      </div>
    </Link>
  )
}

export default PostLink
