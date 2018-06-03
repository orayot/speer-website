import React from 'react'
import Link from 'gatsby-link'

import logIn from 'assets/icons/log-in.svg'
import zap from 'assets/icons/zap.svg'
import isMobile from 'utils/isMobile'

const links = [
  {
    label: 'Pricing',
    href: '',
    showOnMobile: true
  },
  {
    label: 'Blog',
    href: '',
    showOnMobile: true
  },
  {
    label: 'Academy',
    href: '',
    showOnMobile: true
  },
  {
    label: 'Login',
    href: '',
    icon: logIn,
    className: 'ml4',
  },
  {
    label: 'Signup',
    href: '',
    icon: zap,
    className: 'b',
  },
]

const Nav = () => (
  <div className="">
    <div className="gradient-background white" style={{height: isMobile ? 80 : 68}}>
      <div className="cf">
        <div className="w-100 w-40-ns tc tl-ns fl-ns white pointer pl0 pl4-ns b mt2 mt3-ns f4">
          Speer
        </div>
        <div className="w-100 w-60-ns fl-ns tc tr-ns pr3 pr4-ns mt2 mt3-ns pl3 pl0-ns">
          {links.filter(l => isMobile ? l.showOnMobile : true).map(l => (
            <div
              key={l.label}
              className={`dib f6 f4-ns mr2 mr3-ns pointer dim ${l.className}`}
            >
              <Link to={l.href}>
                {l.icon && <img src={l.icon} className="dib h1 mr2" />}
                {l.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div
      className="bg-white h1"
      style={{
        borderRadius: '16px 16px 0 0',
        marginTop: -12,
        WebkitBoxShadow: '0px -8px 8px rgba(50, 50, 50, 0.1)',
        MozBoxShadow: '0px -8px 8px rgba(50, 50, 50, 0.1)',
        boxShadow: '0px -8px 8px rgba(50, 50, 50, 0.1)',
      }}
    />
  </div>
)

export default Nav
