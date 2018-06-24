import React from 'react'

import heroIllustration from 'assets/images/illustrations/blog-hero.svg'

const Hero = () => (
  <div className="w-100 w-50-ns center">
    <div className="f2 tc">Speer Blog</div>
    <div className="f4 w-80 mt3 tc center lighter-gray">
      Stories from your buying assistants.
    </div>
    <div className="center tc">
      <img src={heroIllustration} className="h5 mt4"/>
    </div>
  </div>
)

export default Hero
