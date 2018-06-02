import React from 'react'
import Link from 'gatsby-link'

const bgVariations = {
  blue: {backgroundColor: '#2a52d2', color: '#fff'},
  white: {border: '1px solid #999'}
}

const sizeVariations = {
  small: 'pv2 ph4 f4',
  large: 'pv3 ph5 f3'
}

const Button = ({label, href, backgroundColor, size}) => (<div>
  <Link to={href}>
    <div
      className={`br-pill b dib grow bw2 ${sizeVariations[size ? size : 'small']}`} 
      style={bgVariations[backgroundColor]}
    >
      {label}
    </div>
  </Link>
</div>)

export default Button
