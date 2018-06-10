import React from 'react'
import Link from 'gatsby-link'

const links = [
  {
    label: 'Blog',
    href: 'http://google.com',
  },
  {
    label: 'Terms',
    href: 'http://google.com',
  },
  {
    label: 'Privacy Policy',
    href: 'http://google.com',
  },
]

const Footer = () => (
  <div className="cf bg-lightest-gray pv4">
    <div className="w-100 fl-ns w-40-ns pointer pl3 pl4-ns">
      <span className="b mr4">Speer</span>{' '}
      <span className="dn dib-ns">founders@speer.app</span>
    </div>
    <div className="w-100 fl-ns w-60-ns tl tr-ns pl3 pl0-ns pr0 pr4-ns mt2 mt0-ns f6 f5-ns">
      {links.map(l => (
        <div key={l.label} className="dib mr2 mr4-ns pointer dim">
          <Link to={l.href}>
            {l.icon && <img src={l.icon} className="dib h1 mr2" />}
            {l.label}
          </Link>
        </div>
      ))}
    </div>
  </div>
)

export default Footer
