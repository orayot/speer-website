import React from 'react'

import Button from 'components/ui/button'
import threadIllustration from 'assets/images/illustrations/thread.png'

const Hero = () => (
  <div className="cf">
    <div className="w-100 w-50-ns fl-ns">
      <div className="w-80 center mt2 mt6-ns pl0 pl4-ns">
        <div className="f3 f1-ns">Customers are immune to sales emails.</div>
        <div className="f4 f3-ns lighter-gray">
          <p>
            Speer helps you observe a customer’s body language & change your
            message accordingly.
          </p>
          <p>It makes sales relavent, not loud.</p>
        </div>

        <div className="mt4 mt5-ns">
          <Button label="Get started" href="" backgroundColor="blue" />
          <div className="lighter-gray f6 mt1 pl2">
            Free for 7 days, no card required
          </div>
        </div>
      </div>
    </div>
    <div className="w-100 w-50-ns fl-ns tr">
      <img src={threadIllustration} />
    </div>
  </div>
)

export default Hero
