import React from 'react'

import Hero from 'components/pages/index/hero'
import UseCases from 'components/pages/index/useCases'
import Testimonies from 'components/pages/index/testimonies'
import NotSure from 'components/pages/index/notSure'
import HowItWorks from 'components/pages/index/howItWorks'
import ReadyToTry from 'components/readyToTry'

const IndexPage = () => (
  <div>
    <Hero />
    <Testimonies />
    <UseCases />
    <NotSure />
    <HowItWorks />
    <ReadyToTry />
  </div>
)

export default IndexPage
