import React from 'react'

import Hero from 'pages/_index/hero'
import UseCases from 'pages/_index/useCases'
import Testimonies from 'pages/_index/testimonies'
import NotSure from 'pages/_index/notSure'
import HowItWorks from 'pages/_index/howItWorks'
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
