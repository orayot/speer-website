import React from 'react'
import Link from 'gatsby-link'


const links = [];

const Nav = () => (<div className=''>
  <div className='bg-black-wave white' style={{height: 68}}>
    <div className='cf'>
      <div className='fl-ns w-40 white pointer pl3 pl4-ns b mt3'>
        speer
      </div>
      <div className='fl-ns w-60 tr pr3 pr4-ns mt4'>
        {links.map(l => (<div key={l.label} className='dib f4 ml4 pointer dim'>
          <Link to={l.href}>
            {l.icon && <img src={l.icon} className='dib h1 mr2'/>}
            {l.label}
          </Link>
        </div>))}
      </div>
    </div>
  </div>

  <div
    className='bg-white h2' 
    style={{
      borderRadius: '16px 16px 0 0', marginTop: -20,
      WebkitBoxShadow: '0px -2px 8px rgba(50, 50, 50, 0.4)',
      MozBoxShadow: '0px -2px 8px rgba(50, 50, 50, 0.4)',
      boxShadow: '0px -2px 8px rgba(50, 50, 50, 0.4)'
    }}
  />
</div>)

export default Nav
