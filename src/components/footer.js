import React from 'react'
import Link from 'gatsby-link'

const links = [{
  label: 'Blog'
}, {
  label: 'Terms'
}, {
  label: 'Privacy Policy'
}]

const Footer = () => (<div className='cf bg-lightest-gray pv4'>
  <div className='fl-ns w-40 pointer pl3 pl4-ns'>
    <span className='b mr4'>Speer by Palisade</span> founders@speer.app
  </div>
  <div className='fl-ns w-60 tr pr3 pr4-ns'>
    {links.map(l => (<div key={l.label} className='dib ml4 pointer dim'>
      <Link to={l.href}>
        {l.icon && <img src={l.icon} className='dib h1 mr2'/>}
        {l.label}
      </Link>
    </div>))}
  </div>
</div>)

export default Footer
